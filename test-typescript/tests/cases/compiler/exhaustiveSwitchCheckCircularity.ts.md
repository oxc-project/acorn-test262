__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    688
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNever",
        "optional": false,
        "range": [
          39,
          46
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            },
            "range": [
              48,
              55
            ],
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "range": [
                50,
                55
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            }
          },
          "range": [
            47,
            55
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 3
          },
          "start": {
            "column": 34,
            "line": 3
          }
        },
        "range": [
          56,
          65
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            58,
            65
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 36,
              "line": 3
            }
          }
        }
      },
      "range": [
        22,
        66
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    },
                    "range": [
                      94,
                      109
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"aaa\"",
                            "value": "aaa",
                            "range": [
                              96,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 6
                              },
                              "start": {
                                "column": 13,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            96,
                            101
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 6
                            },
                            "start": {
                              "column": 13,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"bbb\"",
                            "value": "bbb",
                            "range": [
                              104,
                              109
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 6
                              },
                              "start": {
                                "column": 21,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            104,
                            109
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        96,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
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
                    91,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "\"aaa\"",
                  "value": "aaa",
                  "range": [
                    112,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 29,
                      "line": 6
                    }
                  }
                },
                "range": [
                  91,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              87,
              118
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "consequent": [],
                      "test": {
                        "type": "Literal",
                        "raw": "\"aaa\"",
                        "value": "aaa",
                        "range": [
                          178,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 9
                          },
                          "start": {
                            "column": 17,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        173,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      154,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    146,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "range": [
                            323,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        290,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 31,
                          "line": 14
                        }
                      }
                    },
                    "test": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            284,
                            287
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 14
                            },
                            "start": {
                              "column": 25,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isNever",
                        "optional": false,
                        "range": [
                          276,
                          283
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 14
                          },
                          "start": {
                            "column": 17,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        276,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      272,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              236,
                              239
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"bbb\"",
                            "value": "bbb",
                            "range": [
                              242,
                              247
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 12
                              },
                              "start": {
                                "column": 18,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            236,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          236,
                          248
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      222,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 27,
                        "line": 11
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        207,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"aaa\"",
                      "value": "aaa",
                      "range": [
                        215,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 20,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      207,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    203,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                136,
                345
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                130,
                134
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              123,
              345
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          81,
          347
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 13,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          77,
          78
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [],
      "range": [
        68,
        347
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 5
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
        "name": "functionB",
        "optional": false,
        "range": [
          388,
          397
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 22
          },
          "start": {
            "column": 17,
            "line": 22
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 22
              },
              "start": {
                "column": 30,
                "line": 22
              }
            },
            "range": [
              401,
              409
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                403,
                409
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 22
                },
                "start": {
                  "column": 32,
                  "line": 22
                }
              }
            }
          },
          "range": [
            398,
            409
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 22
            },
            "start": {
              "column": 27,
              "line": 22
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 22
          },
          "start": {
            "column": 39,
            "line": 22
          }
        },
        "range": [
          410,
          418
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            412,
            418
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 22
            },
            "start": {
              "column": 41,
              "line": 22
            }
          }
        }
      },
      "range": [
        371,
        419
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
                  "name": "unionVal",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    },
                    "range": [
                      466,
                      477
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"A\"",
                            "value": "A",
                            "range": [
                              468,
                              471
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 25
                              },
                              "start": {
                                "column": 18,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            468,
                            471
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 25
                            },
                            "start": {
                              "column": 18,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"B\"",
                            "value": "B",
                            "range": [
                              474,
                              477
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 25
                              },
                              "start": {
                                "column": 24,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            474,
                            477
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 25
                            },
                            "start": {
                              "column": 24,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        468,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 25
                        },
                        "start": {
                          "column": 18,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    458,
                    477
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    480,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 25
                    },
                    "start": {
                      "column": 30,
                      "line": 25
                    }
                  }
                },
                "range": [
                  458,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 33,
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
            "kind": "let",
            "range": [
              454,
              484
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 27
                            },
                            "start": {
                              "column": 15,
                              "line": 27
                            }
                          },
                          "range": [
                            519,
                            527
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              521,
                              527
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 27
                              },
                              "start": {
                                "column": 17,
                                "line": 27
                              }
                            }
                          }
                        },
                        "range": [
                          516,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        516,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 27
                        },
                        "start": {
                          "column": 12,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    512,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
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
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "range": [
                                    597,
                                    600
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 30
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"AA\"",
                                  "value": "AA",
                                  "range": [
                                    603,
                                    607
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 30
                                    }
                                  }
                                },
                                "range": [
                                  597,
                                  607
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                597,
                                608
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 30
                                },
                                "start": {
                                  "column": 16,
                                  "line": 30
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "range": [
                                625,
                                631
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 31
                                },
                                "start": {
                                  "column": 16,
                                  "line": 31
                                }
                              }
                            }
                          ],
                          "range": [
                            579,
                            645
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 32
                            },
                            "start": {
                              "column": 22,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "raw": "\"A\"",
                        "value": "A",
                        "range": [
                          574,
                          577
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 29
                          },
                          "start": {
                            "column": 17,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        569,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 32
                        },
                        "start": {
                          "column": 12,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unionVal",
                    "optional": false,
                    "range": [
                      545,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 28
                      },
                      "start": {
                        "column": 16,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    537,
                    655
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          674,
                          677
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 34
                          },
                          "start": {
                            "column": 18,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "functionB",
                      "optional": false,
                      "range": [
                        664,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      664,
                      678
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    664,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                502,
                685
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                496,
                500
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "range": [
              489,
              685
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          448,
          687
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 27,
            "line": 24
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "functionC",
        "optional": false,
        "range": [
          430,
          439
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 24
          },
          "start": {
            "column": 20,
            "line": 24
          }
        },
        "range": [
          441,
          447
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            443,
            447
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 24
            },
            "start": {
              "column": 22,
              "line": 24
            }
          }
        }
      },
      "range": [
        421,
        687
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
