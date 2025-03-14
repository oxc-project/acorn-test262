__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    41,
    1419
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          56,
          59
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          50,
          53
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [],
      "range": [
        41,
        59
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            95,
            98
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          95,
          100
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        95,
        101
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "range": [
                    271,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    275,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "range": [
                  271,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              267,
              277
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          261,
          279
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 15,
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
        "name": "fooWithParameters",
        "optional": false,
        "range": [
          156,
          173
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
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
                "column": 65,
                "line": 6
              },
              "start": {
                "column": 57,
                "line": 6
              }
            },
            "range": [
              204,
              212
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                206,
                212
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 6
                },
                "start": {
                  "column": 59,
                  "line": 6
                }
              }
            }
          },
          "range": [
            203,
            212
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 6
            },
            "start": {
              "column": 56,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 13,
                "line": 8
              },
              "start": {
                "column": 5,
                "line": 8
              }
            },
            "range": [
              251,
              259
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                253,
                259
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
          },
          "range": [
            250,
            259
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "range": [
        147,
        279
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a\"",
            "value": "a",
            "range": [
              330,
              333
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 11
              },
              "start": {
                "column": 18,
                "line": 11
              }
            }
          },
          {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              335,
              337
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithParameters",
          "optional": false,
          "range": [
            312,
            329
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          312,
          338
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        312,
        339
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 11
        },
        "start": {
          "column": 0,
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
            "name": "fooFunc",
            "optional": false,
            "range": [
              371,
              378
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
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      461,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 16
                      },
                      "start": {
                        "column": 11,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    454,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
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
                448,
                465
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 17
                },
                "start": {
                  "column": 81,
                  "line": 15
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooFunctionValue",
              "optional": false,
              "range": [
                390,
                406
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 15
                },
                "start": {
                  "column": 23,
                  "line": 15
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 15
                    },
                    "start": {
                      "column": 71,
                      "line": 15
                    }
                  },
                  "range": [
                    438,
                    446
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      440,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 15
                      },
                      "start": {
                        "column": 73,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  437,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 15
                  },
                  "start": {
                    "column": 70,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              381,
              465
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 14,
                "line": 15
              }
            }
          },
          "range": [
            371,
            465
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        367,
        465
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "name": "lambdaFoo",
            "optional": false,
            "range": [
              496,
              505
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  587,
                  588
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 20
                  },
                  "start": {
                    "column": 95,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  591,
                  592
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 20
                  },
                  "start": {
                    "column": 99,
                    "line": 20
                  }
                }
              },
              "range": [
                587,
                592
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 20
                },
                "start": {
                  "column": 95,
                  "line": 20
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 20
                    },
                    "start": {
                      "column": 59,
                      "line": 20
                    }
                  },
                  "range": [
                    551,
                    559
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      553,
                      559
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 20
                      },
                      "start": {
                        "column": 61,
                        "line": 20
                      }
                    }
                  }
                },
                "range": [
                  550,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 20
                  },
                  "start": {
                    "column": 58,
                    "line": 20
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 20
                    },
                    "start": {
                      "column": 82,
                      "line": 20
                    }
                  },
                  "range": [
                    574,
                    582
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      576,
                      582
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 20
                      },
                      "start": {
                        "column": 84,
                        "line": 20
                      }
                    }
                  }
                },
                "range": [
                  573,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 20
                  },
                  "start": {
                    "column": 81,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              537,
              592
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 20
              },
              "start": {
                "column": 45,
                "line": 20
              }
            }
          },
          "range": [
            496,
            592
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        492,
        593
      ],
      "loc": {
        "end": {
          "column": 101,
          "line": 20
        },
        "start": {
          "column": 0,
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
            "name": "lambddaNoVarComment",
            "optional": false,
            "range": [
              598,
              617
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  706,
                  707
                ],
                "loc": {
                  "end": {
                    "column": 113,
                    "line": 21
                  },
                  "start": {
                    "column": 112,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  710,
                  711
                ],
                "loc": {
                  "end": {
                    "column": 117,
                    "line": 21
                  },
                  "start": {
                    "column": 116,
                    "line": 21
                  }
                }
              },
              "range": [
                706,
                711
              ],
              "loc": {
                "end": {
                  "column": 117,
                  "line": 21
                },
                "start": {
                  "column": 112,
                  "line": 21
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 21
                    },
                    "start": {
                      "column": 76,
                      "line": 21
                    }
                  },
                  "range": [
                    670,
                    678
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      672,
                      678
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 21
                      },
                      "start": {
                        "column": 78,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  669,
                  678
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 21
                  },
                  "start": {
                    "column": 75,
                    "line": 21
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 21
                    },
                    "start": {
                      "column": 99,
                      "line": 21
                    }
                  },
                  "range": [
                    693,
                    701
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      695,
                      701
                    ],
                    "loc": {
                      "end": {
                        "column": 107,
                        "line": 21
                      },
                      "start": {
                        "column": 101,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  692,
                  701
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 21
                  },
                  "start": {
                    "column": 98,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              656,
              711
            ],
            "loc": {
              "end": {
                "column": 117,
                "line": 21
              },
              "start": {
                "column": 62,
                "line": 21
              }
            }
          },
          "range": [
            598,
            711
          ],
          "loc": {
            "end": {
              "column": 117,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        594,
        712
      ],
      "loc": {
        "end": {
          "column": 118,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              723,
              725
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 22
              },
              "start": {
                "column": 10,
                "line": 22
              }
            }
          },
          {
            "type": "Literal",
            "raw": "20",
            "value": 20,
            "range": [
              727,
              729
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "lambdaFoo",
          "optional": false,
          "range": [
            713,
            722
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          713,
          730
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        713,
        731
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              752,
              754
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 23
              },
              "start": {
                "column": 20,
                "line": 23
              }
            }
          },
          {
            "type": "Literal",
            "raw": "20",
            "value": 20,
            "range": [
              756,
              758
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 23
              },
              "start": {
                "column": 24,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "lambddaNoVarComment",
          "optional": false,
          "range": [
            732,
            751
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          732,
          759
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        732,
        760
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "body": [],
        "range": [
          831,
          834
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 14,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah",
        "optional": false,
        "range": [
          771,
          775
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
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
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 15,
                "line": 25
              }
            },
            "range": [
              777,
              785
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                779,
                785
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
            }
          },
          "range": [
            776,
            785
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 25
            },
            "start": {
              "column": 14,
              "line": 25
            }
          }
        }
      ],
      "range": [
        762,
        834
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          920,
          923
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 84,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah2",
        "optional": false,
        "range": [
          845,
          850
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
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
                "column": 24,
                "line": 29
              },
              "start": {
                "column": 16,
                "line": 29
              }
            },
            "range": [
              852,
              860
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                854,
                860
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 29
                },
                "start": {
                  "column": 18,
                  "line": 29
                }
              }
            }
          },
          "range": [
            851,
            860
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 29
            },
            "start": {
              "column": 15,
              "line": 29
            }
          }
        }
      ],
      "range": [
        836,
        923
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          987,
          990
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah3",
        "optional": false,
        "range": [
          934,
          939
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 32
          },
          "start": {
            "column": 9,
            "line": 32
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
                "column": 24,
                "line": 32
              },
              "start": {
                "column": 16,
                "line": 32
              }
            },
            "range": [
              941,
              949
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                943,
                949
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 32
                },
                "start": {
                  "column": 18,
                  "line": 32
                }
              }
            }
          },
          "range": [
            940,
            949
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 32
            },
            "start": {
              "column": 15,
              "line": 32
            }
          }
        }
      ],
      "range": [
        925,
        990
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
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
          "type": "Identifier",
          "decorators": [],
          "name": "lambdaFoo",
          "optional": false,
          "range": [
            992,
            1001
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "BinaryExpression",
            "operator": "*",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1014,
                1015
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 36
                },
                "start": {
                  "column": 22,
                  "line": 36
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1018,
                1019
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 36
                },
                "start": {
                  "column": 26,
                  "line": 36
                }
              }
            },
            "range": [
              1014,
              1019
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 36
              },
              "start": {
                "column": 22,
                "line": 36
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
              "name": "a",
              "optional": false,
              "range": [
                1005,
                1006
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
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1008,
                1009
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 36
                },
                "start": {
                  "column": 16,
                  "line": 36
                }
              }
            }
          ],
          "range": [
            1004,
            1019
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 36
            },
            "start": {
              "column": 12,
              "line": 36
            }
          }
        },
        "range": [
          992,
          1019
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        992,
        1020
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "type": "ArrowFunctionExpression",
        "async": false,
        "body": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            1075,
            1076
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 38
            },
            "start": {
              "column": 25,
              "line": 38
            }
          }
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": [],
        "range": [
          1069,
          1076
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 38
          },
          "start": {
            "column": 19,
            "line": 38
          }
        }
      },
      "range": [
        1069,
        1077
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 38
        },
        "start": {
          "column": 19,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "async": false,
        "body": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            1180,
            1181
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 39
            },
            "start": {
              "column": 26,
              "line": 39
            }
          }
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": [],
        "range": [
          1174,
          1181
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 39
          },
          "start": {
            "column": 20,
            "line": 39
          }
        }
      },
      "range": [
        1173,
        1183
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 39
        },
        "start": {
          "column": 19,
          "line": 39
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1260,
          1263
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 56,
            "line": 41
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah4",
        "optional": false,
        "range": [
          1213,
          1218
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 41
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
                "column": 29,
                "line": 41
              },
              "start": {
                "column": 21,
                "line": 41
              }
            },
            "range": [
              1225,
              1233
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1227,
                1233
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 41
                },
                "start": {
                  "column": 23,
                  "line": 41
                }
              }
            }
          },
          "range": [
            1224,
            1233
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 41
            },
            "start": {
              "column": 20,
              "line": 41
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 41
              },
              "start": {
                "column": 41,
                "line": 41
              }
            },
            "range": [
              1245,
              1253
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1247,
                1253
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 41
                },
                "start": {
                  "column": 43,
                  "line": 41
                }
              }
            }
          },
          "range": [
            1244,
            1253
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 41
            },
            "start": {
              "column": 40,
              "line": 41
            }
          }
        }
      ],
      "range": [
        1204,
        1263
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1281,
          1309
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 16,
            "line": 44
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
          1274,
          1278
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
          }
        }
      },
      "params": [],
      "range": [
        1265,
        1309
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
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
        "body": [],
        "range": [
          1327,
          1418
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 16,
            "line": 49
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
          1320,
          1324
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
          }
        }
      },
      "params": [],
      "range": [
        1311,
        1418
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 54
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
