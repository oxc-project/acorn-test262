__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    161,
    3059
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                168,
                176
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  170,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              165,
              176
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            165,
            176
          ],
          "loc": {
            "end": {
              "column": 15,
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
        161,
        177
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              },
              "range": [
                186,
                203
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      188,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      197,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  188,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              182,
              203
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            182,
            203
          ],
          "loc": {
            "end": {
              "column": 25,
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
        178,
        204
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "range": [
                  320,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var1",
                      "optional": false,
                      "range": [
                        334,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 10
                        },
                        "start": {
                          "column": 18,
                          "line": 10
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      327,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      343,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 10
                      },
                      "start": {
                        "column": 27,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    327,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var1",
                    "optional": false,
                    "range": [
                      355,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 10
                      },
                      "start": {
                        "column": 39,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      360,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 10
                      },
                      "start": {
                        "column": 44,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    355,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 10
                    },
                    "start": {
                      "column": 39,
                      "line": 10
                    }
                  }
                },
                "range": [
                  327,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "range": [
                320,
                366
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              320,
              367
            ],
            "loc": {
              "end": {
                "column": 51,
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    },
                    "range": [
                      432,
                      449
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            434,
                            440
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 13
                            },
                            "start": {
                              "column": 14,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            443,
                            449
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
                      ],
                      "range": [
                        434,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    428,
                    449
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
                  428,
                  449
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
              424,
              450
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "range": [
                  455,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "range": [
                        468,
                        472
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 14
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      461,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 10,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      477,
                      485
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 14
                      },
                      "start": {
                        "column": 26,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    461,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var2",
                    "optional": false,
                    "range": [
                      489,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 14
                      },
                      "start": {
                        "column": 38,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      494,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 14
                      },
                      "start": {
                        "column": 43,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    489,
                    500
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 14
                    },
                    "start": {
                      "column": 38,
                      "line": 14
                    }
                  }
                },
                "range": [
                  461,
                  500
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "range": [
                455,
                500
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              455,
              501
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                "name": "num",
                "optional": false,
                "range": [
                  559,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        572,
                        577
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      565,
                      577
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 10,
                        "line": 17
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      582,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    565,
                    590
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "range": [
                      594,
                      599
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 17
                      },
                      "start": {
                        "column": 39,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      600,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 17
                      },
                      "start": {
                        "column": 45,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    594,
                    606
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 17
                    },
                    "start": {
                      "column": 39,
                      "line": 17
                    }
                  }
                },
                "range": [
                  565,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              },
              "range": [
                559,
                606
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              559,
              607
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          271,
          619
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 35,
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
        "name": "f",
        "optional": false,
        "range": [
          245,
          246
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            },
            "range": [
              252,
              269
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    254,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    263,
                    269
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
                }
              ],
              "range": [
                254,
                269
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            }
          },
          "range": [
            247,
            269
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 8
            },
            "start": {
              "column": 11,
              "line": 8
            }
          }
        }
      ],
      "range": [
        236,
        619
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 8
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 21
                      },
                      "start": {
                        "column": 12,
                        "line": 21
                      }
                    },
                    "range": [
                      700,
                      717
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            702,
                            708
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 21
                            },
                            "start": {
                              "column": 14,
                              "line": 21
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            711,
                            717
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 21
                            },
                            "start": {
                              "column": 23,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "range": [
                        702,
                        717
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    696,
                    717
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
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
                  696,
                  717
                ],
                "loc": {
                  "end": {
                    "column": 29,
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
              692,
              718
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "range": [
                        817,
                        820
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "range": [
                              830,
                              834
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 24
                              },
                              "start": {
                                "column": 21,
                                "line": 24
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            823,
                            834
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 24
                            },
                            "start": {
                              "column": 14,
                              "line": 24
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"string\"",
                          "value": "string",
                          "range": [
                            839,
                            847
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 24
                            },
                            "start": {
                              "column": 30,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          823,
                          847
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 24
                          },
                          "start": {
                            "column": 14,
                            "line": 24
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var1",
                          "optional": false,
                          "range": [
                            851,
                            855
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 24
                            },
                            "start": {
                              "column": 42,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            856,
                            862
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 24
                            },
                            "start": {
                              "column": 47,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          851,
                          862
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 24
                          },
                          "start": {
                            "column": 42,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        823,
                        862
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 24
                        },
                        "start": {
                          "column": 14,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      817,
                      862
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    817,
                    863
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
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
                      "name": "num",
                      "optional": false,
                      "range": [
                        936,
                        939
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
                        }
                      }
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "range": [
                              949,
                              953
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 27
                              },
                              "start": {
                                "column": 21,
                                "line": 27
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            942,
                            953
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 27
                            },
                            "start": {
                              "column": 14,
                              "line": 27
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"string\"",
                          "value": "string",
                          "range": [
                            958,
                            966
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 27
                            },
                            "start": {
                              "column": 30,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          942,
                          966
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 27
                          },
                          "start": {
                            "column": 14,
                            "line": 27
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "range": [
                            970,
                            974
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 27
                            },
                            "start": {
                              "column": 42,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            975,
                            981
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 27
                            },
                            "start": {
                              "column": 47,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          970,
                          981
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 27
                          },
                          "start": {
                            "column": 42,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        942,
                        981
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 27
                        },
                        "start": {
                          "column": 14,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      936,
                      981
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    936,
                    982
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "range": [
                        1045,
                        1048
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "range": [
                              1058,
                              1063
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 30
                              },
                              "start": {
                                "column": 21,
                                "line": 30
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            1051,
                            1063
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 30
                            },
                            "start": {
                              "column": 14,
                              "line": 30
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"string\"",
                          "value": "string",
                          "range": [
                            1068,
                            1076
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 30
                            },
                            "start": {
                              "column": 31,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          1051,
                          1076
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 30
                          },
                          "start": {
                            "column": 14,
                            "line": 30
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "range": [
                            1080,
                            1085
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 30
                            },
                            "start": {
                              "column": 43,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            1086,
                            1092
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 30
                            },
                            "start": {
                              "column": 49,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          1080,
                          1092
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 30
                          },
                          "start": {
                            "column": 43,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        1051,
                        1092
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 30
                        },
                        "start": {
                          "column": 14,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      1045,
                      1092
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    1045,
                    1093
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
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
                        "name": "var3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 33
                            },
                            "start": {
                              "column": 16,
                              "line": 33
                            }
                          },
                          "range": [
                            1138,
                            1155
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  1140,
                                  1146
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 33
                                  }
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1149,
                                  1155
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 33
                                  }
                                }
                              }
                            ],
                            "range": [
                              1140,
                              1155
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 33
                              },
                              "start": {
                                "column": 18,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          1134,
                          1155
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 33
                          },
                          "start": {
                            "column": 12,
                            "line": 33
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1134,
                        1155
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 33
                        },
                        "start": {
                          "column": 12,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1130,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "range": [
                        1165,
                        1168
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var3",
                            "optional": false,
                            "range": [
                              1178,
                              1182
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 34
                              },
                              "start": {
                                "column": 21,
                                "line": 34
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            1171,
                            1182
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 34
                            },
                            "start": {
                              "column": 14,
                              "line": 34
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"string\"",
                          "value": "string",
                          "range": [
                            1187,
                            1195
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 34
                            },
                            "start": {
                              "column": 30,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1171,
                          1195
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 34
                          },
                          "start": {
                            "column": 14,
                            "line": 34
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var3",
                          "optional": false,
                          "range": [
                            1199,
                            1203
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 34
                            },
                            "start": {
                              "column": 42,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            1204,
                            1210
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 34
                            },
                            "start": {
                              "column": 47,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1199,
                          1210
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 34
                          },
                          "start": {
                            "column": 42,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        1171,
                        1210
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 34
                        },
                        "start": {
                          "column": 14,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1165,
                      1210
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    1165,
                    1211
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "range": [
                        1230,
                        1233
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "range": [
                              1243,
                              1249
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 35
                              },
                              "start": {
                                "column": 21,
                                "line": 35
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            1236,
                            1249
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 35
                            },
                            "start": {
                              "column": 14,
                              "line": 35
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"string\"",
                          "value": "string",
                          "range": [
                            1254,
                            1262
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 35
                            },
                            "start": {
                              "column": 32,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1236,
                          1262
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 35
                          },
                          "start": {
                            "column": 14,
                            "line": 35
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "range": [
                            1266,
                            1272
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 35
                            },
                            "start": {
                              "column": 44,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            1273,
                            1279
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 35
                            },
                            "start": {
                              "column": 51,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1266,
                          1279
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 35
                          },
                          "start": {
                            "column": 44,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        1236,
                        1279
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 35
                        },
                        "start": {
                          "column": 14,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1230,
                      1279
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1230,
                    1280
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                760,
                1296
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 41,
                  "line": 22
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "range": [
                732,
                734
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 22
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 22
                    },
                    "start": {
                      "column": 22,
                      "line": 22
                    }
                  },
                  "range": [
                    741,
                    758
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          743,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 22
                          },
                          "start": {
                            "column": 24,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          752,
                          758
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 22
                          },
                          "start": {
                            "column": 33,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "range": [
                      743,
                      758
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 22
                      },
                      "start": {
                        "column": 24,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  735,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 22
                  },
                  "start": {
                    "column": 16,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              723,
              1296
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          686,
          1298
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 36,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          659,
          661
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 20
              },
              "start": {
                "column": 17,
                "line": 20
              }
            },
            "range": [
              667,
              684
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    669,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 20
                    },
                    "start": {
                      "column": 19,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    678,
                    684
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 20
                    },
                    "start": {
                      "column": 28,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                669,
                684
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 20
                },
                "start": {
                  "column": 19,
                  "line": 20
                }
              }
            }
          },
          "range": [
            662,
            684
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 20
            },
            "start": {
              "column": 12,
              "line": 20
            }
          }
        }
      ],
      "range": [
        650,
        1298
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 20
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 41
                      },
                      "start": {
                        "column": 12,
                        "line": 41
                      }
                    },
                    "range": [
                      1413,
                      1430
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1415,
                            1421
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 41
                            },
                            "start": {
                              "column": 14,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1424,
                            1430
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
                      ],
                      "range": [
                        1415,
                        1430
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 41
                        },
                        "start": {
                          "column": 14,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    1409,
                    1430
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                "init": null,
                "range": [
                  1409,
                  1430
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1405,
              1431
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    1481,
                    1482
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        2058,
                        2063
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 57
                        },
                        "start": {
                          "column": 7,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                1577,
                                1580
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 45
                                },
                                "start": {
                                  "column": 8,
                                  "line": 45
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var1",
                                    "optional": false,
                                    "range": [
                                      1590,
                                      1594
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 45
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 45
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    1583,
                                    1594
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 45
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    1599,
                                    1607
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 45
                                    }
                                  }
                                },
                                "range": [
                                  1583,
                                  1607
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 45
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "range": [
                                    1611,
                                    1615
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 45
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    1616,
                                    1622
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 45
                                    }
                                  }
                                },
                                "range": [
                                  1611,
                                  1622
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 45
                                  }
                                }
                              },
                              "range": [
                                1583,
                                1622
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 45
                                },
                                "start": {
                                  "column": 14,
                                  "line": 45
                                }
                              }
                            },
                            "range": [
                              1577,
                              1622
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 45
                              },
                              "start": {
                                "column": 8,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            1577,
                            1623
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 45
                            },
                            "start": {
                              "column": 8,
                              "line": 45
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                1696,
                                1699
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 48
                                },
                                "start": {
                                  "column": 8,
                                  "line": 48
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var2",
                                    "optional": false,
                                    "range": [
                                      1709,
                                      1713
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 48
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    1702,
                                    1713
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 48
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    1718,
                                    1726
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 48
                                    }
                                  }
                                },
                                "range": [
                                  1702,
                                  1726
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 48
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "range": [
                                    1730,
                                    1734
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 48
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    1735,
                                    1741
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 48
                                    }
                                  }
                                },
                                "range": [
                                  1730,
                                  1741
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 48
                                  }
                                }
                              },
                              "range": [
                                1702,
                                1741
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 48
                                },
                                "start": {
                                  "column": 14,
                                  "line": 48
                                }
                              }
                            },
                            "range": [
                              1696,
                              1741
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 48
                              },
                              "start": {
                                "column": 8,
                                "line": 48
                              }
                            }
                          },
                          "range": [
                            1696,
                            1742
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 48
                            },
                            "start": {
                              "column": 8,
                              "line": 48
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                1805,
                                1808
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 51
                                },
                                "start": {
                                  "column": 8,
                                  "line": 51
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "range": [
                                      1818,
                                      1823
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 51
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 51
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    1811,
                                    1823
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 51
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    1828,
                                    1836
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 51
                                    }
                                  }
                                },
                                "range": [
                                  1811,
                                  1836
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 51
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "range": [
                                    1840,
                                    1845
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 51
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    1846,
                                    1852
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 51
                                    }
                                  }
                                },
                                "range": [
                                  1840,
                                  1852
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 51
                                  }
                                }
                              },
                              "range": [
                                1811,
                                1852
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 51
                                },
                                "start": {
                                  "column": 14,
                                  "line": 51
                                }
                              }
                            },
                            "range": [
                              1805,
                              1852
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 51
                              },
                              "start": {
                                "column": 8,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            1805,
                            1853
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 51
                            },
                            "start": {
                              "column": 8,
                              "line": 51
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
                                "name": "var3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 54
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 54
                                    }
                                  },
                                  "range": [
                                    1898,
                                    1915
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          1900,
                                          1906
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 54
                                          },
                                          "start": {
                                            "column": 18,
                                            "line": 54
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          1909,
                                          1915
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 54
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 54
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1900,
                                      1915
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 54
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 54
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1894,
                                  1915
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 54
                                  }
                                }
                              },
                              "init": null,
                              "range": [
                                1894,
                                1915
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 54
                                },
                                "start": {
                                  "column": 12,
                                  "line": 54
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            1890,
                            1916
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
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "range": [
                                1925,
                                1928
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 55
                                },
                                "start": {
                                  "column": 8,
                                  "line": 55
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var3",
                                    "optional": false,
                                    "range": [
                                      1938,
                                      1942
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    1931,
                                    1942
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 55
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    1947,
                                    1955
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 55
                                    }
                                  }
                                },
                                "range": [
                                  1931,
                                  1955
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 55
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var3",
                                  "optional": false,
                                  "range": [
                                    1959,
                                    1963
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 55
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    1964,
                                    1970
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 55
                                    }
                                  }
                                },
                                "range": [
                                  1959,
                                  1970
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 55
                                  }
                                }
                              },
                              "range": [
                                1931,
                                1970
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 55
                                },
                                "start": {
                                  "column": 14,
                                  "line": 55
                                }
                              }
                            },
                            "range": [
                              1925,
                              1970
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 55
                              },
                              "start": {
                                "column": 8,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            1925,
                            1971
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 55
                            },
                            "start": {
                              "column": 8,
                              "line": 55
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                1990,
                                1993
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 56
                                },
                                "start": {
                                  "column": 8,
                                  "line": 56
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "param1",
                                    "optional": false,
                                    "range": [
                                      2003,
                                      2009
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 56
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 56
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    1996,
                                    2009
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 56
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 56
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    2014,
                                    2022
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 56
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 56
                                    }
                                  }
                                },
                                "range": [
                                  1996,
                                  2022
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 56
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "range": [
                                    2026,
                                    2032
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 56
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 56
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    2033,
                                    2039
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 56
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 56
                                    }
                                  }
                                },
                                "range": [
                                  2026,
                                  2039
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 56
                                  }
                                }
                              },
                              "range": [
                                1996,
                                2039
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 56
                                },
                                "start": {
                                  "column": 14,
                                  "line": 56
                                }
                              }
                            },
                            "range": [
                              1990,
                              2039
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 56
                              },
                              "start": {
                                "column": 8,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            1990,
                            2040
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 56
                            },
                            "start": {
                              "column": 8,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        1520,
                        2056
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 57
                        },
                        "start": {
                          "column": 47,
                          "line": 43
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
                        "name": "param1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 43
                            },
                            "start": {
                              "column": 28,
                              "line": 43
                            }
                          },
                          "range": [
                            1501,
                            1518
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  1503,
                                  1509
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 43
                                  }
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1512,
                                  1518
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 43
                                  }
                                }
                              }
                            ],
                            "range": [
                              1503,
                              1518
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 43
                              },
                              "start": {
                                "column": 30,
                                "line": 43
                              }
                            }
                          }
                        },
                        "range": [
                          1495,
                          1518
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 43
                          },
                          "start": {
                            "column": 22,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "range": [
                      1485,
                      2056
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 57
                      },
                      "start": {
                        "column": 12,
                        "line": 43
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1485,
                    2064
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 57
                    },
                    "start": {
                      "column": 12,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1481,
                  2064
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 57
                  },
                  "start": {
                    "column": 8,
                    "line": 43
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1477,
              2065
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          1358,
          2067
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 36,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          1331,
          1333
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 39
              },
              "start": {
                "column": 17,
                "line": 39
              }
            },
            "range": [
              1339,
              1356
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1341,
                    1347
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 39
                    },
                    "start": {
                      "column": 19,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1350,
                    1356
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 39
                    },
                    "start": {
                      "column": 28,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                1341,
                1356
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 39
                },
                "start": {
                  "column": 19,
                  "line": 39
                }
              }
            }
          },
          "range": [
            1334,
            1356
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 39
            },
            "start": {
              "column": 12,
              "line": 39
            }
          }
        }
      ],
      "range": [
        1322,
        2067
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 39
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 62
                      },
                      "start": {
                        "column": 12,
                        "line": 62
                      }
                    },
                    "range": [
                      2179,
                      2196
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2181,
                            2187
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 62
                            },
                            "start": {
                              "column": 14,
                              "line": 62
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2190,
                            2196
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 62
                            },
                            "start": {
                              "column": 23,
                              "line": 62
                            }
                          }
                        }
                      ],
                      "range": [
                        2181,
                        2196
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 62
                        },
                        "start": {
                          "column": 14,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    2175,
                    2196
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                },
                "init": null,
                "range": [
                  2175,
                  2196
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 62
                  },
                  "start": {
                    "column": 8,
                    "line": 62
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2171,
              2197
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    2247,
                    2248
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        2819,
                        2824
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 78
                        },
                        "start": {
                          "column": 7,
                          "line": 78
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                2338,
                                2341
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 66
                                },
                                "start": {
                                  "column": 8,
                                  "line": 66
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var1",
                                    "optional": false,
                                    "range": [
                                      2351,
                                      2355
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 66
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 66
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    2344,
                                    2355
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 66
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    2360,
                                    2368
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 66
                                    }
                                  }
                                },
                                "range": [
                                  2344,
                                  2368
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 66
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "range": [
                                    2372,
                                    2376
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 66
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    2377,
                                    2383
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 66
                                    }
                                  }
                                },
                                "range": [
                                  2372,
                                  2383
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 66
                                  }
                                }
                              },
                              "range": [
                                2344,
                                2383
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 66
                                },
                                "start": {
                                  "column": 14,
                                  "line": 66
                                }
                              }
                            },
                            "range": [
                              2338,
                              2383
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 66
                              },
                              "start": {
                                "column": 8,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            2338,
                            2384
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 66
                            },
                            "start": {
                              "column": 8,
                              "line": 66
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                2457,
                                2460
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
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var2",
                                    "optional": false,
                                    "range": [
                                      2470,
                                      2474
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 69
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 69
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    2463,
                                    2474
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 69
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    2479,
                                    2487
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 69
                                    }
                                  }
                                },
                                "range": [
                                  2463,
                                  2487
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 69
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 69
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "range": [
                                    2491,
                                    2495
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 69
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    2496,
                                    2502
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 69
                                    }
                                  }
                                },
                                "range": [
                                  2491,
                                  2502
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 69
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 69
                                  }
                                }
                              },
                              "range": [
                                2463,
                                2502
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 69
                                },
                                "start": {
                                  "column": 14,
                                  "line": 69
                                }
                              }
                            },
                            "range": [
                              2457,
                              2502
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 69
                              },
                              "start": {
                                "column": 8,
                                "line": 69
                              }
                            }
                          },
                          "range": [
                            2457,
                            2503
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 69
                            },
                            "start": {
                              "column": 8,
                              "line": 69
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                2566,
                                2569
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 72
                                },
                                "start": {
                                  "column": 8,
                                  "line": 72
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "range": [
                                      2579,
                                      2584
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 72
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 72
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    2572,
                                    2584
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 72
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    2589,
                                    2597
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 72
                                    }
                                  }
                                },
                                "range": [
                                  2572,
                                  2597
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 72
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "range": [
                                    2601,
                                    2606
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 72
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    2607,
                                    2613
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 72
                                    }
                                  }
                                },
                                "range": [
                                  2601,
                                  2613
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 72
                                  }
                                }
                              },
                              "range": [
                                2572,
                                2613
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 72
                                },
                                "start": {
                                  "column": 14,
                                  "line": 72
                                }
                              }
                            },
                            "range": [
                              2566,
                              2613
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 72
                              },
                              "start": {
                                "column": 8,
                                "line": 72
                              }
                            }
                          },
                          "range": [
                            2566,
                            2614
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 72
                            },
                            "start": {
                              "column": 8,
                              "line": 72
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
                                "name": "var3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 75
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 75
                                    }
                                  },
                                  "range": [
                                    2659,
                                    2676
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          2661,
                                          2667
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 75
                                          },
                                          "start": {
                                            "column": 18,
                                            "line": 75
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          2670,
                                          2676
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 75
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 75
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      2661,
                                      2676
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 75
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 75
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2655,
                                  2676
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 75
                                  }
                                }
                              },
                              "init": null,
                              "range": [
                                2655,
                                2676
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 75
                                },
                                "start": {
                                  "column": 12,
                                  "line": 75
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            2651,
                            2677
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 75
                            },
                            "start": {
                              "column": 8,
                              "line": 75
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                2686,
                                2689
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 76
                                },
                                "start": {
                                  "column": 8,
                                  "line": 76
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var3",
                                    "optional": false,
                                    "range": [
                                      2699,
                                      2703
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 76
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 76
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    2692,
                                    2703
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 76
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 76
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    2708,
                                    2716
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 76
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 76
                                    }
                                  }
                                },
                                "range": [
                                  2692,
                                  2716
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 76
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 76
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var3",
                                  "optional": false,
                                  "range": [
                                    2720,
                                    2724
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 76
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 76
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    2725,
                                    2731
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 76
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 76
                                    }
                                  }
                                },
                                "range": [
                                  2720,
                                  2731
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 76
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 76
                                  }
                                }
                              },
                              "range": [
                                2692,
                                2731
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 76
                                },
                                "start": {
                                  "column": 14,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              2686,
                              2731
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 76
                              },
                              "start": {
                                "column": 8,
                                "line": 76
                              }
                            }
                          },
                          "range": [
                            2686,
                            2732
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 76
                            },
                            "start": {
                              "column": 8,
                              "line": 76
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
                              "name": "num",
                              "optional": false,
                              "range": [
                                2751,
                                2754
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 77
                                },
                                "start": {
                                  "column": 8,
                                  "line": 77
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "param1",
                                    "optional": false,
                                    "range": [
                                      2764,
                                      2770
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 77
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 77
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    2757,
                                    2770
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 77
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    2775,
                                    2783
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 77
                                    }
                                  }
                                },
                                "range": [
                                  2757,
                                  2783
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 77
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "range": [
                                    2787,
                                    2793
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 77
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    2794,
                                    2800
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 77
                                    }
                                  }
                                },
                                "range": [
                                  2787,
                                  2800
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 77
                                  }
                                }
                              },
                              "range": [
                                2757,
                                2800
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 77
                                },
                                "start": {
                                  "column": 14,
                                  "line": 77
                                }
                              }
                            },
                            "range": [
                              2751,
                              2800
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 77
                              },
                              "start": {
                                "column": 8,
                                "line": 77
                              }
                            }
                          },
                          "range": [
                            2751,
                            2801
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 77
                            },
                            "start": {
                              "column": 8,
                              "line": 77
                            }
                          }
                        }
                      ],
                      "range": [
                        2281,
                        2817
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 78
                        },
                        "start": {
                          "column": 42,
                          "line": 64
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
                        "name": "param1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 64
                            },
                            "start": {
                              "column": 20,
                              "line": 64
                            }
                          },
                          "range": [
                            2259,
                            2276
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  2261,
                                  2267
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 64
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 64
                                  }
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  2270,
                                  2276
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 64
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 64
                                  }
                                }
                              }
                            ],
                            "range": [
                              2261,
                              2276
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 64
                              },
                              "start": {
                                "column": 22,
                                "line": 64
                              }
                            }
                          }
                        },
                        "range": [
                          2253,
                          2276
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 64
                          },
                          "start": {
                            "column": 14,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "range": [
                      2252,
                      2817
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 78
                      },
                      "start": {
                        "column": 13,
                        "line": 64
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2251,
                    2825
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 78
                    },
                    "start": {
                      "column": 12,
                      "line": 64
                    }
                  }
                },
                "range": [
                  2247,
                  2825
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 78
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2243,
              2826
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          2124,
          2828
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 36,
            "line": 60
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          2097,
          2099
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 60
          },
          "start": {
            "column": 9,
            "line": 60
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 60
              },
              "start": {
                "column": 17,
                "line": 60
              }
            },
            "range": [
              2105,
              2122
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2107,
                    2113
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 60
                    },
                    "start": {
                      "column": 19,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2116,
                    2122
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 60
                    },
                    "start": {
                      "column": 28,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                2107,
                2122
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 60
                },
                "start": {
                  "column": 19,
                  "line": 60
                }
              }
            }
          },
          "range": [
            2100,
            2122
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 60
            },
            "start": {
              "column": 12,
              "line": 60
            }
          }
        }
      ],
      "range": [
        2088,
        2828
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 82
                },
                "start": {
                  "column": 12,
                  "line": 82
                }
              },
              "range": [
                2899,
                2916
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      2901,
                      2907
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 82
                      },
                      "start": {
                        "column": 14,
                        "line": 82
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      2910,
                      2916
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 82
                      },
                      "start": {
                        "column": 23,
                        "line": 82
                      }
                    }
                  }
                ],
                "range": [
                  2901,
                  2916
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 82
                  },
                  "start": {
                    "column": 14,
                    "line": 82
                  }
                }
              }
            },
            "range": [
              2891,
              2916
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          },
          "init": null,
          "range": [
            2891,
            2916
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 82
            },
            "start": {
              "column": 4,
              "line": 82
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2887,
        2917
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 84
                      },
                      "start": {
                        "column": 12,
                        "line": 84
                      }
                    },
                    "range": [
                      2946,
                      2963
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2948,
                            2954
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 84
                            },
                            "start": {
                              "column": 14,
                              "line": 84
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2957,
                            2963
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 84
                            },
                            "start": {
                              "column": 23,
                              "line": 84
                            }
                          }
                        }
                      ],
                      "range": [
                        2948,
                        2963
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 84
                        },
                        "start": {
                          "column": 14,
                          "line": 84
                        }
                      }
                    }
                  },
                  "range": [
                    2942,
                    2963
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 84
                    },
                    "start": {
                      "column": 8,
                      "line": 84
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "range": [
                    2966,
                    2974
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 84
                    },
                    "start": {
                      "column": 32,
                      "line": 84
                    }
                  }
                },
                "range": [
                  2942,
                  2974
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 84
                  },
                  "start": {
                    "column": 8,
                    "line": 84
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2938,
              2975
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "range": [
                2987,
                2991
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 85
                },
                "start": {
                  "column": 11,
                  "line": 85
                }
              }
            },
            "range": [
              2980,
              2992
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          2932,
          2994
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 14,
            "line": 83
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          2927,
          2929
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 83
          },
          "start": {
            "column": 9,
            "line": 83
          }
        }
      },
      "params": [],
      "range": [
        2918,
        2994
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 83
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
          "name": "strOrNum",
          "optional": false,
          "range": [
            2995,
            3003
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 87
            },
            "start": {
              "column": 0,
              "line": 87
            }
          }
        },
        "right": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "range": [
                    3013,
                    3015
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 87
                    },
                    "start": {
                      "column": 18,
                      "line": 87
                    }
                  }
                },
                "optional": false,
                "range": [
                  3013,
                  3017
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 87
                  },
                  "start": {
                    "column": 18,
                    "line": 87
                  }
                }
              },
              "operator": "typeof",
              "prefix": true,
              "range": [
                3006,
                3017
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 87
                },
                "start": {
                  "column": 11,
                  "line": 87
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"string\"",
              "value": "string",
              "range": [
                3022,
                3030
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 87
                },
                "start": {
                  "column": 27,
                  "line": 87
                }
              }
            },
            "range": [
              3006,
              3030
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 87
              },
              "start": {
                "column": 11,
                "line": 87
              }
            }
          },
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "range": [
                3034,
                3036
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 87
                },
                "start": {
                  "column": 39,
                  "line": 87
                }
              }
            },
            "optional": false,
            "range": [
              3034,
              3038
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 87
              },
              "start": {
                "column": 39,
                "line": 87
              }
            }
          },
          "range": [
            3006,
            3038
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 87
            },
            "start": {
              "column": 11,
              "line": 87
            }
          }
        },
        "range": [
          2995,
          3038
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 87
          },
          "start": {
            "column": 0,
            "line": 87
          }
        }
      },
      "range": [
        2995,
        3039
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 64,
      "line": 87
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
