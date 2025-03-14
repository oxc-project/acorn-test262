__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    757
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "body": {
              "type": "EmptyStatement",
              "range": [
                126,
                127
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
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
                    "name": "_",
                    "optional": false,
                    "range": [
                      118,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    118,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                112,
                119
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                123,
                125
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            },
            "range": [
              101,
              127
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "range": [
                  143,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              },
              "range": [
                137,
                144
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "range": [
              130,
              145
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "range": [
          97,
          147
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 40,
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
        "name": "normalFunc",
        "optional": false,
        "range": [
          66,
          76
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            },
            "range": [
              78,
              95
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  87,
                  95
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      88,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 3
                      },
                      "start": {
                        "column": 31,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 30,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  80,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              "range": [
                80,
                95
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            }
          },
          "range": [
            77,
            95
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 3
            },
            "start": {
              "column": 20,
              "line": 3
            }
          }
        }
      ],
      "range": [
        57,
        147
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        149,
        248
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ForOfStatement",
              "await": true,
              "body": {
                "type": "EmptyStatement",
                "range": [
                  227,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 9
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
                      "name": "_",
                      "optional": false,
                      "range": [
                        219,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
                        }
                      }
                    },
                    "init": null,
                    "range": [
                      219,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  213,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  224,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                202,
                228
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "range": [
                    244,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                },
                "range": [
                  238,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              "range": [
                231,
                246
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            }
          ],
          "range": [
            198,
            248
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 49,
              "line": 8
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFunc",
          "optional": false,
          "range": [
            165,
            177
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 8
                },
                "start": {
                  "column": 30,
                  "line": 8
                }
              },
              "range": [
                179,
                196
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    188,
                    196
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        189,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 8
                        },
                        "start": {
                          "column": 40,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 8
                    },
                    "start": {
                      "column": 39,
                      "line": 8
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    181,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 8
                    },
                    "start": {
                      "column": 32,
                      "line": 8
                    }
                  }
                },
                "range": [
                  181,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 8
                  },
                  "start": {
                    "column": 32,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              178,
              196
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 8
              },
              "start": {
                "column": 29,
                "line": 8
              }
            }
          }
        ],
        "range": [
          156,
          248
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "functionExpression",
            "optional": false,
            "range": [
              256,
              274
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "body": {
                    "type": "EmptyStatement",
                    "range": [
                      335,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
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
                          "name": "_",
                          "optional": false,
                          "range": [
                            327,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 14
                            },
                            "start": {
                              "column": 19,
                              "line": 14
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          327,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 14
                          },
                          "start": {
                            "column": 19,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      321,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      332,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    310,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
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
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        345,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      339,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 15
                      },
                      "start": {
                        "column": 2,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    339,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 2,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                306,
                349
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 16
                },
                "start": {
                  "column": 56,
                  "line": 13
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 13
                    },
                    "start": {
                      "column": 37,
                      "line": 13
                    }
                  },
                  "range": [
                    287,
                    304
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        296,
                        304
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            297,
                            303
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 13
                            },
                            "start": {
                              "column": 47,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 13
                        },
                        "start": {
                          "column": 46,
                          "line": 13
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        289,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 13
                        },
                        "start": {
                          "column": 39,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      289,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 13
                      },
                      "start": {
                        "column": 39,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  286,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 13
                  },
                  "start": {
                    "column": 36,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              277,
              349
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 27,
                "line": 13
              }
            }
          },
          "range": [
            256,
            349
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        250,
        349
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
            "name": "arrowFunc",
            "optional": false,
            "range": [
              357,
              366
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "body": {
                    "type": "EmptyStatement",
                    "range": [
                      422,
                      423
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 27,
                        "line": 19
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
                          "name": "_",
                          "optional": false,
                          "range": [
                            414,
                            415
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 19
                            },
                            "start": {
                              "column": 19,
                              "line": 19
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          414,
                          415
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 19
                          },
                          "start": {
                            "column": 19,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      408,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 19
                      },
                      "start": {
                        "column": 13,
                        "line": 19
                      }
                    }
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      419,
                      421
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 24,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    397,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 2,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        439,
                        440
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      433,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    426,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 20
                    },
                    "start": {
                      "column": 2,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                393,
                443
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 21
                },
                "start": {
                  "column": 42,
                  "line": 18
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 18
                    },
                    "start": {
                      "column": 20,
                      "line": 18
                    }
                  },
                  "range": [
                    371,
                    388
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        380,
                        388
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            381,
                            387
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 18
                            },
                            "start": {
                              "column": 30,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 18
                        },
                        "start": {
                          "column": 29,
                          "line": 18
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        373,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 18
                        },
                        "start": {
                          "column": 22,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      373,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 18
                      },
                      "start": {
                        "column": 22,
                        "line": 18
                      }
                    }
                  }
                },
                "range": [
                  370,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 18
                  },
                  "start": {
                    "column": 19,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              369,
              443
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 18,
                "line": 18
              }
            }
          },
          "range": [
            357,
            443
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        351,
        444
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
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
            "type": "ForOfStatement",
            "await": true,
            "body": {
              "type": "EmptyStatement",
              "range": [
                519,
                520
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
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
                    "name": "_",
                    "optional": false,
                    "range": [
                      511,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 19,
                        "line": 24
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    511,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 24
                    },
                    "start": {
                      "column": 19,
                      "line": 24
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                505,
                512
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 24
                },
                "start": {
                  "column": 13,
                  "line": 24
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                516,
                518
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 24
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "range": [
              494,
              520
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "range": [
                    535,
                    536
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
                  529,
                  536
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
              "delegate": false,
              "range": [
                523,
                536
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 25
                },
                "start": {
                  "column": 2,
                  "line": 25
                }
              }
            },
            "range": [
              523,
              537
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          }
        ],
        "range": [
          490,
          539
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 44,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generatorFunc",
        "optional": false,
        "range": [
          456,
          469
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 23
              },
              "start": {
                "column": 25,
                "line": 23
              }
            },
            "range": [
              471,
              488
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  480,
                  488
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      481,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 23
                      },
                      "start": {
                        "column": 35,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 23
                  },
                  "start": {
                    "column": 34,
                    "line": 23
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  473,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 23
                  },
                  "start": {
                    "column": 27,
                    "line": 23
                  }
                }
              },
              "range": [
                473,
                488
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 23
                },
                "start": {
                  "column": 27,
                  "line": 23
                }
              }
            }
          },
          "range": [
            470,
            488
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 23
            },
            "start": {
              "column": 24,
              "line": 23
            }
          }
        }
      ],
      "range": [
        446,
        539
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          553,
          717
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                557,
                568
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 29
                },
                "start": {
                  "column": 2,
                  "line": 29
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                568,
                638
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": true,
                    "body": {
                      "type": "EmptyStatement",
                      "range": [
                        620,
                        621
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 30
                        },
                        "start": {
                          "column": 29,
                          "line": 30
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
                            "name": "_",
                            "optional": false,
                            "range": [
                              612,
                              613
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 30
                              },
                              "start": {
                                "column": 21,
                                "line": 30
                              }
                            }
                          },
                          "init": null,
                          "range": [
                            612,
                            613
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 30
                            },
                            "start": {
                              "column": 21,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const",
                      "range": [
                        606,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 30
                        },
                        "start": {
                          "column": 15,
                          "line": 30
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        617,
                        619
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 30
                        },
                        "start": {
                          "column": 26,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      595,
                      621
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 30
                      },
                      "start": {
                        "column": 4,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          632,
                          633
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 31
                          },
                          "start": {
                            "column": 10,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        626,
                        633
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 31
                        },
                        "start": {
                          "column": 4,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      626,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 31
                      },
                      "start": {
                        "column": 4,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  589,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 32
                  },
                  "start": {
                    "column": 34,
                    "line": 29
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 29
                      },
                      "start": {
                        "column": 15,
                        "line": 29
                      }
                    },
                    "range": [
                      570,
                      587
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          579,
                          587
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              580,
                              586
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 29
                              },
                              "start": {
                                "column": 25,
                                "line": 29
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 29
                          },
                          "start": {
                            "column": 24,
                            "line": 29
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          572,
                          579
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 29
                          },
                          "start": {
                            "column": 17,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        572,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    569,
                    587
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 29
                    },
                    "start": {
                      "column": 14,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 29
                }
              }
            },
            "range": [
              557,
              638
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                641,
                647
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                647,
                715
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": true,
                    "body": {
                      "type": "EmptyStatement",
                      "range": [
                        697,
                        698
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 34
                        },
                        "start": {
                          "column": 27,
                          "line": 34
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
                            "name": "_",
                            "optional": false,
                            "range": [
                              689,
                              690
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 34
                              },
                              "start": {
                                "column": 19,
                                "line": 34
                              }
                            }
                          },
                          "init": null,
                          "range": [
                            689,
                            690
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 34
                            },
                            "start": {
                              "column": 19,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const",
                      "range": [
                        683,
                        690
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 34
                        },
                        "start": {
                          "column": 13,
                          "line": 34
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        694,
                        696
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 34
                        },
                        "start": {
                          "column": 24,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      672,
                      698
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 34
                      },
                      "start": {
                        "column": 2,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          709,
                          710
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 35
                          },
                          "start": {
                            "column": 10,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        703,
                        710
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 35
                        },
                        "start": {
                          "column": 4,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      703,
                      711
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 35
                      },
                      "start": {
                        "column": 4,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  668,
                  715
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 36
                  },
                  "start": {
                    "column": 29,
                    "line": 33
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 33
                      },
                      "start": {
                        "column": 10,
                        "line": 33
                      }
                    },
                    "range": [
                      649,
                      666
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          658,
                          666
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              659,
                              665
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 33
                              },
                              "start": {
                                "column": 20,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 33
                          },
                          "start": {
                            "column": 19,
                            "line": 33
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          651,
                          658
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 33
                          },
                          "start": {
                            "column": 12,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        651,
                        666
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 33
                        },
                        "start": {
                          "column": 12,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    648,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 33
                    },
                    "start": {
                      "column": 9,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 36
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "range": [
              641,
              715
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 12,
            "line": 28
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clazz",
        "optional": false,
        "range": [
          547,
          552
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 28
          },
          "start": {
            "column": 6,
            "line": 28
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        541,
        717
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "body": {
        "type": "EmptyStatement",
        "range": [
          744,
          745
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 39
          },
          "start": {
            "column": 25,
            "line": 39
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
              "name": "_",
              "optional": false,
              "range": [
                736,
                737
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 39
                },
                "start": {
                  "column": 17,
                  "line": 39
                }
              }
            },
            "init": null,
            "range": [
              736,
              737
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 39
              },
              "start": {
                "column": 17,
                "line": 39
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          730,
          737
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 39
          },
          "start": {
            "column": 11,
            "line": 39
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "range": [
          741,
          743
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 39
          },
          "start": {
            "column": 22,
            "line": 39
          }
        }
      },
      "range": [
        719,
        745
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "type": "AwaitExpression",
        "argument": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            752,
            756
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        },
        "range": [
          746,
          756
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        746,
        757
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 11,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
