__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1390
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          21,
          25
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
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          20
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            16,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        25
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "bla",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    },
                    "range": [
                      61,
                      91
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              73,
                              76
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 6
                              },
                              "start": {
                                "column": 8,
                                "line": 6
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
                                "line": 6
                              },
                              "start": {
                                "column": 11,
                                "line": 6
                              }
                            },
                            "range": [
                              76,
                              84
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                78,
                                84
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 6
                                },
                                "start": {
                                  "column": 13,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            73,
                            85
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        63,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 7
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    58,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "init": null,
                "range": [
                  58,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              54,
              92
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
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
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 11,
                        "line": 8
                      }
                    },
                    "range": [
                      104,
                      112
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        106,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    101,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": null,
                "range": [
                  101,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              97,
              113
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 4,
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    },
                    "range": [
                      125,
                      133
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        127,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    122,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": null,
                "range": [
                  122,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              118,
              134
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 4,
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
                  "name": "fromIf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    },
                    "range": [
                      149,
                      157
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        151,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    143,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": null,
                "range": [
                  143,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              139,
              158
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 10
              },
              "start": {
                "column": 4,
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
                  "name": "inIf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    },
                    "range": [
                      171,
                      179
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        173,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    167,
                    179
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
                "init": null,
                "range": [
                  167,
                  179
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              163,
              180
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
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileCondition",
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
                      207,
                      215
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        209,
                        215
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
                    189,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": null,
                "range": [
                  189,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              185,
              216
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 4,
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
                  "name": "fromWhileBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
                      }
                    },
                    "range": [
                      238,
                      246
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        240,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 23,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    225,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "init": null,
                "range": [
                  225,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              221,
              247
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 4,
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
                  "name": "fromWhileBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
                      }
                    },
                    "range": [
                      275,
                      283
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        277,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 14
                        },
                        "start": {
                          "column": 29,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    256,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": null,
                "range": [
                  256,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              252,
              284
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                  "name": "fromDoBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 15
                      },
                      "start": {
                        "column": 18,
                        "line": 15
                      }
                    },
                    "range": [
                      303,
                      311
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        305,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 20,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    293,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": null,
                "range": [
                  293,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              289,
              312
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 4,
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
                  "name": "fromDoBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    },
                    "range": [
                      337,
                      345
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        339,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 16
                        },
                        "start": {
                          "column": 26,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    321,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": null,
                "range": [
                  321,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              317,
              346
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                  "name": "fromDoCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 17
                      },
                      "start": {
                        "column": 23,
                        "line": 17
                      }
                    },
                    "range": [
                      370,
                      378
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        372,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 17
                        },
                        "start": {
                          "column": 25,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    355,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": null,
                "range": [
                  355,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              351,
              379
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                  "name": "forInit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 15,
                        "line": 18
                      }
                    },
                    "range": [
                      395,
                      403
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        397,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 18
                        },
                        "start": {
                          "column": 17,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    388,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": null,
                "range": [
                  388,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              384,
              404
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
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forCond",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    },
                    "range": [
                      420,
                      428
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        422,
                        428
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 19
                        },
                        "start": {
                          "column": 17,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    413,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": null,
                "range": [
                  413,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              409,
              429
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 19
              },
              "start": {
                "column": 4,
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
                  "name": "fromForBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 20
                      },
                      "start": {
                        "column": 19,
                        "line": 20
                      }
                    },
                    "range": [
                      449,
                      457
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        451,
                        457
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 20
                        },
                        "start": {
                          "column": 21,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    438,
                    457
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": null,
                "range": [
                  438,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              434,
              458
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                  "name": "fromForBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 21
                      },
                      "start": {
                        "column": 25,
                        "line": 21
                      }
                    },
                    "range": [
                      484,
                      492
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        486,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 21
                        },
                        "start": {
                          "column": 27,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    467,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "init": null,
                "range": [
                  467,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              463,
              493
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 21
              },
              "start": {
                "column": 4,
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
                  "name": "forIncr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 22
                      },
                      "start": {
                        "column": 15,
                        "line": 22
                      }
                    },
                    "range": [
                      509,
                      517
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        511,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 22
                        },
                        "start": {
                          "column": 17,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    502,
                    517
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": null,
                "range": [
                  502,
                  517
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              498,
              518
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                  "name": "forOf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    },
                    "range": [
                      532,
                      539
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          534,
                          537
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 15,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        534,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 23
                        },
                        "start": {
                          "column": 15,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    527,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": null,
                "range": [
                  527,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              523,
              540
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                  "name": "fromForOfBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 24
                      },
                      "start": {
                        "column": 21,
                        "line": 24
                      }
                    },
                    "range": [
                      562,
                      570
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        564,
                        570
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 24
                        },
                        "start": {
                          "column": 23,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    549,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "init": null,
                "range": [
                  549,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              545,
              571
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
                  "name": "fromForOfBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 25
                      },
                      "start": {
                        "column": 27,
                        "line": 25
                      }
                    },
                    "range": [
                      599,
                      607
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        601,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 25
                        },
                        "start": {
                          "column": 29,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    580,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": null,
                "range": [
                  580,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              576,
              608
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                  "name": "forIn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    },
                    "range": [
                      622,
                      629
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          624,
                          627
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 26
                          },
                          "start": {
                            "column": 15,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        624,
                        629
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 26
                        },
                        "start": {
                          "column": 15,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    617,
                    629
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "init": null,
                "range": [
                  617,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              613,
              630
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "name": "fromForInBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 27
                      },
                      "start": {
                        "column": 21,
                        "line": 27
                      }
                    },
                    "range": [
                      652,
                      660
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        654,
                        660
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 27
                        },
                        "start": {
                          "column": 23,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    639,
                    660
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": null,
                "range": [
                  639,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              635,
              661
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
                  "name": "fromForInBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 28
                      },
                      "start": {
                        "column": 27,
                        "line": 28
                      }
                    },
                    "range": [
                      689,
                      697
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        691,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 28
                        },
                        "start": {
                          "column": 29,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    670,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "init": null,
                "range": [
                  670,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              666,
              698
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          48,
          700
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          44,
          47
        ],
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "loc": {
          "end": {
            "column": 21,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 4
          }
        }
      },
      "kind": "namespace",
      "range": [
        26,
        700
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
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
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  703,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 31
                  },
                  "start": {
                    "column": 1,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bla",
                "optional": false,
                "range": [
                  707,
                  710
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 31
                  },
                  "start": {
                    "column": 5,
                    "line": 31
                  }
                }
              },
              "range": [
                703,
                710
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 31
                },
                "start": {
                  "column": 1,
                  "line": 31
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
                      715,
                      718
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      720,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 31
                      },
                      "start": {
                        "column": 18,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    715,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 31
                    },
                    "start": {
                      "column": 13,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                713,
                722
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "range": [
              703,
              722
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 31
              },
              "start": {
                "column": 1,
                "line": 31
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              724,
              727
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 31
              },
              "start": {
                "column": 22,
                "line": 31
              }
            }
          },
          "range": [
            702,
            727
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  731,
                  734
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 31
                  },
                  "start": {
                    "column": 29,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "range": [
                  735,
                  738
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 31
                  },
                  "start": {
                    "column": 33,
                    "line": 31
                  }
                }
              },
              "range": [
                731,
                738
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 31
                },
                "start": {
                  "column": 29,
                  "line": 31
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                741,
                742
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 31
                },
                "start": {
                  "column": 39,
                  "line": 31
                }
              }
            },
            "range": [
              731,
              742
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 31
              },
              "start": {
                "column": 29,
                "line": 31
              }
            }
          },
          "right": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  747,
                  750
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 31
                  },
                  "start": {
                    "column": 45,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  751,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 31
                  },
                  "start": {
                    "column": 49,
                    "line": 31
                  }
                }
              },
              "range": [
                747,
                754
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 31
                },
                "start": {
                  "column": 45,
                  "line": 31
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                758,
                759
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 31
                },
                "start": {
                  "column": 56,
                  "line": 31
                }
              }
            },
            "range": [
              747,
              759
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 31
              },
              "start": {
                "column": 45,
                "line": 31
              }
            }
          },
          "range": [
            730,
            760
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 31
            },
            "start": {
              "column": 28,
              "line": 31
            }
          }
        },
        "range": [
          702,
          760
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        702,
        761
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    788,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 34
                    },
                    "start": {
                      "column": 4,
                      "line": 34
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inIf",
                  "optional": false,
                  "range": [
                    792,
                    796
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
                  788,
                  796
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  799,
                  800
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 34
                  },
                  "start": {
                    "column": 15,
                    "line": 34
                  }
                }
              },
              "range": [
                788,
                800
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              788,
              801
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          782,
          803
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 19,
            "line": 33
          }
        }
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              766,
              769
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 33
              },
              "start": {
                "column": 3,
                "line": 33
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromIf",
            "optional": false,
            "range": [
              770,
              776
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 33
              },
              "start": {
                "column": 7,
                "line": 33
              }
            }
          },
          "range": [
            766,
            776
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 33
            },
            "start": {
              "column": 3,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            779,
            780
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 33
            },
            "start": {
              "column": 16,
              "line": 33
            }
          }
        },
        "range": [
          766,
          780
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 33
          },
          "start": {
            "column": 3,
            "line": 33
          }
        }
      },
      "range": [
        763,
        803
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "WhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    845,
                    848
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 38
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false,
                  "range": [
                    849,
                    862
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "range": [
                  845,
                  862
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  865,
                  866
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 38
                  },
                  "start": {
                    "column": 24,
                    "line": 38
                  }
                }
              },
              "range": [
                845,
                866
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              845,
              867
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
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
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        882,
                        885
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromWhileBodyNested",
                      "optional": false,
                      "range": [
                        886,
                        905
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 40
                        },
                        "start": {
                          "column": 12,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      882,
                      905
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      908,
                      909
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 40
                      },
                      "start": {
                        "column": 34,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    882,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                "range": [
                  882,
                  910
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              }
            ],
            "range": [
              872,
              916
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          839,
          918
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 34,
            "line": 37
          }
        }
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              811,
              814
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromWhileCondition",
            "optional": false,
            "range": [
              815,
              833
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 37
              },
              "start": {
                "column": 10,
                "line": 37
              }
            }
          },
          "range": [
            811,
            833
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            836,
            837
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 37
            },
            "start": {
              "column": 31,
              "line": 37
            }
          }
        },
        "range": [
          811,
          837
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 37
          },
          "start": {
            "column": 6,
            "line": 37
          }
        }
      },
      "range": [
        805,
        918
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    929,
                    932
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
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
                  "name": "fromDoBody",
                  "optional": false,
                  "range": [
                    933,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                "range": [
                  929,
                  943
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  946,
                  947
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 45
                  },
                  "start": {
                    "column": 21,
                    "line": 45
                  }
                }
              },
              "range": [
                929,
                947
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              929,
              948
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
          {
            "type": "BlockStatement",
            "body": [
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
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        963,
                        966
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 47
                        },
                        "start": {
                          "column": 8,
                          "line": 47
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromDoBodyNested",
                      "optional": false,
                      "range": [
                        967,
                        983
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 47
                        },
                        "start": {
                          "column": 12,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      963,
                      983
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      986,
                      987
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 47
                      },
                      "start": {
                        "column": 31,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    963,
                    987
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                "range": [
                  963,
                  988
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              }
            ],
            "range": [
              953,
              994
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          923,
          996
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 3,
            "line": 44
          }
        }
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              1003,
              1006
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 49
              },
              "start": {
                "column": 8,
                "line": 49
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromDoCondition",
            "optional": false,
            "range": [
              1007,
              1022
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 49
              },
              "start": {
                "column": 12,
                "line": 49
              }
            }
          },
          "range": [
            1003,
            1022
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 49
            },
            "start": {
              "column": 8,
              "line": 49
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1025,
            1026
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 49
            },
            "start": {
              "column": 30,
              "line": 49
            }
          }
        },
        "range": [
          1003,
          1026
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 49
          },
          "start": {
            "column": 8,
            "line": 49
          }
        }
      },
      "range": [
        920,
        1028
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    1096,
                    1099
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 52
                    },
                    "start": {
                      "column": 4,
                      "line": 52
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false,
                  "range": [
                    1100,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1096,
                  1111
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1114,
                  1115
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 52
                  },
                  "start": {
                    "column": 22,
                    "line": 52
                  }
                }
              },
              "range": [
                1096,
                1115
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              1096,
              1116
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
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
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1131,
                        1134
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 54
                        },
                        "start": {
                          "column": 8,
                          "line": 54
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForBodyNested",
                      "optional": false,
                      "range": [
                        1135,
                        1152
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 54
                        },
                        "start": {
                          "column": 12,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1131,
                      1152
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1155,
                      1156
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 54
                      },
                      "start": {
                        "column": 32,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1131,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1131,
                  1157
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              }
            ],
            "range": [
              1121,
              1163
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          1090,
          1165
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 60,
            "line": 51
          }
        }
      },
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              1034,
              1037
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forInit",
            "optional": false,
            "range": [
              1038,
              1045
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 51
              },
              "start": {
                "column": 8,
                "line": 51
              }
            }
          },
          "range": [
            1034,
            1045
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 51
            },
            "start": {
              "column": 4,
              "line": 51
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1048,
            1049
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 51
            },
            "start": {
              "column": 18,
              "line": 51
            }
          }
        },
        "range": [
          1034,
          1049
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 51
          },
          "start": {
            "column": 4,
            "line": 51
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": ">",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                1052,
                1055
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 51
                },
                "start": {
                  "column": 22,
                  "line": 51
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "forCond",
              "optional": false,
              "range": [
                1056,
                1063
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 51
                },
                "start": {
                  "column": 26,
                  "line": 51
                }
              }
            },
            "range": [
              1052,
              1063
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 51
              },
              "start": {
                "column": 22,
                "line": 51
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              1066,
              1067
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 51
              },
              "start": {
                "column": 36,
                "line": 51
              }
            }
          },
          "range": [
            1052,
            1067
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 51
            },
            "start": {
              "column": 22,
              "line": 51
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1071,
            1072
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 51
            },
            "start": {
              "column": 41,
              "line": 51
            }
          }
        },
        "range": [
          1051,
          1072
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 51
          },
          "start": {
            "column": 21,
            "line": 51
          }
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              1074,
              1077
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 51
              },
              "start": {
                "column": 44,
                "line": 51
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIncr",
            "optional": false,
            "range": [
              1078,
              1085
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 51
              },
              "start": {
                "column": 48,
                "line": 51
              }
            }
          },
          "range": [
            1074,
            1085
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 51
            },
            "start": {
              "column": 44,
              "line": 51
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1088,
            1089
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 51
            },
            "start": {
              "column": 58,
              "line": 51
            }
          }
        },
        "range": [
          1074,
          1089
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 51
          },
          "start": {
            "column": 44,
            "line": 51
          }
        }
      },
      "range": [
        1030,
        1165
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    1204,
                    1207
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 59
                    },
                    "start": {
                      "column": 4,
                      "line": 59
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false,
                  "range": [
                    1208,
                    1221
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1204,
                  1221
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1224,
                  1225
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 59
                  },
                  "start": {
                    "column": 24,
                    "line": 59
                  }
                }
              },
              "range": [
                1204,
                1225
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1204,
              1226
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
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
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1241,
                        1244
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 61
                        },
                        "start": {
                          "column": 8,
                          "line": 61
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForOfBodyNested",
                      "optional": false,
                      "range": [
                        1245,
                        1264
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 61
                        },
                        "start": {
                          "column": 12,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1241,
                      1264
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1267,
                      1268
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 61
                      },
                      "start": {
                        "column": 34,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1241,
                    1268
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1241,
                  1269
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 61
                  },
                  "start": {
                    "column": 8,
                    "line": 61
                  }
                }
              }
            ],
            "range": [
              1231,
              1275
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1198,
          1277
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 31,
            "line": 58
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                1175,
                1176
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 58
                },
                "start": {
                  "column": 8,
                  "line": 58
                }
              }
            },
            "init": null,
            "range": [
              1175,
              1176
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 58
              },
              "start": {
                "column": 8,
                "line": 58
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1171,
          1176
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 58
          },
          "start": {
            "column": 4,
            "line": 58
          }
        }
      },
      "right": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              1181,
              1184
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 58
              },
              "start": {
                "column": 14,
                "line": 58
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forOf",
            "optional": false,
            "range": [
              1185,
              1190
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 58
              },
              "start": {
                "column": 18,
                "line": 58
              }
            }
          },
          "range": [
            1181,
            1190
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 58
            },
            "start": {
              "column": 14,
              "line": 58
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "range": [
            1193,
            1195
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 58
            },
            "start": {
              "column": 26,
              "line": 58
            }
          }
        },
        "range": [
          1181,
          1195
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 58
          },
          "start": {
            "column": 14,
            "line": 58
          }
        }
      },
      "range": [
        1167,
        1277
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    1317,
                    1320
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 67
                    },
                    "start": {
                      "column": 4,
                      "line": 67
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false,
                  "range": [
                    1321,
                    1334
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                },
                "range": [
                  1317,
                  1334
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1337,
                  1338
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 67
                  },
                  "start": {
                    "column": 24,
                    "line": 67
                  }
                }
              },
              "range": [
                1317,
                1338
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
                }
              }
            },
            "range": [
              1317,
              1339
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          {
            "type": "BlockStatement",
            "body": [
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
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1354,
                        1357
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 69
                        },
                        "start": {
                          "column": 8,
                          "line": 69
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForInBodyNested",
                      "optional": false,
                      "range": [
                        1358,
                        1377
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 69
                        },
                        "start": {
                          "column": 12,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      1354,
                      1377
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 69
                      },
                      "start": {
                        "column": 8,
                        "line": 69
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1380,
                      1381
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 69
                      },
                      "start": {
                        "column": 34,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1354,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1354,
                  1382
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              }
            ],
            "range": [
              1344,
              1388
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "range": [
          1311,
          1390
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 31,
            "line": 66
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                1288,
                1289
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 66
                },
                "start": {
                  "column": 8,
                  "line": 66
                }
              }
            },
            "init": null,
            "range": [
              1288,
              1289
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 66
              },
              "start": {
                "column": 8,
                "line": 66
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1284,
          1289
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 66
          },
          "start": {
            "column": 4,
            "line": 66
          }
        }
      },
      "right": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              1294,
              1297
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 66
              },
              "start": {
                "column": 14,
                "line": 66
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIn",
            "optional": false,
            "range": [
              1298,
              1303
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 66
              },
              "start": {
                "column": 18,
                "line": 66
              }
            }
          },
          "range": [
            1294,
            1303
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 66
            },
            "start": {
              "column": 14,
              "line": 66
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "range": [
            1306,
            1308
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 66
            },
            "start": {
              "column": 26,
              "line": 66
            }
          }
        },
        "range": [
          1294,
          1308
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 66
          },
          "start": {
            "column": 14,
            "line": 66
          }
        }
      },
      "range": [
        1280,
        1390
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 71
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
