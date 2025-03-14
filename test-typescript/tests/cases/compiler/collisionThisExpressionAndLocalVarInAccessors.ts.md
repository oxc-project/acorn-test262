__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    802
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          13,
          408
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                24,
                218
              ],
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            49,
                            51
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  68,
                                  75
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
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
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                119,
                                                124
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 25,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 5
                                                }
                                              }
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "raw": "2",
                                              "value": 2,
                                              "range": [
                                                127,
                                                128
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 29,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 28,
                                                  "line": 5
                                                }
                                              }
                                            },
                                            "range": [
                                              119,
                                              128
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 5
                                              }
                                            }
                                          }
                                        ],
                                        "declare": false,
                                        "kind": "var",
                                        "range": [
                                          115,
                                          129
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 5
                                          }
                                        }
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "range": [
                                                162,
                                                166
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 6
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 6
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "range": [
                                              153,
                                              161
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 6
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 6
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            153,
                                            167
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "range": [
                                          146,
                                          168
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 6
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      97,
                                      182
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    91,
                                    182
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 4
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      78,
                                      86
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 4
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  77,
                                  182
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                68,
                                182
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "range": [
                            54,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          49,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      45,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        209,
                        211
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      202,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  35,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
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
                  26,
                  34
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    28,
                    34
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
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "range": [
              19,
              218
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 2
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
              "name": "a",
              "optional": false,
              "range": [
                227,
                228
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                228,
                406
              ],
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            256,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  275,
                                  282
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 14
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
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
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                326,
                                                331
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 25,
                                                  "line": 15
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 15
                                                }
                                              }
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "raw": "2",
                                              "value": 2,
                                              "range": [
                                                334,
                                                335
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 29,
                                                  "line": 15
                                                },
                                                "start": {
                                                  "column": 28,
                                                  "line": 15
                                                }
                                              }
                                            },
                                            "range": [
                                              326,
                                              335
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 15
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 15
                                              }
                                            }
                                          }
                                        ],
                                        "declare": false,
                                        "kind": "var",
                                        "range": [
                                          322,
                                          336
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 15
                                          }
                                        }
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "range": [
                                                369,
                                                373
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 16
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 16
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "range": [
                                              360,
                                              368
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 16
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 16
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            360,
                                            374
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 16
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 16
                                            }
                                          }
                                        },
                                        "range": [
                                          353,
                                          375
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 16
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      304,
                                      389
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    298,
                                    389
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 14
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      285,
                                      293
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 14
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  284,
                                  389
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                275,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 17
                                },
                                "start": {
                                  "column": 12,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "range": [
                            261,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 18
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          256,
                          399
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      252,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  242,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 23,
                    "line": 12
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    },
                    "range": [
                      232,
                      240
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        234,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    229,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "range": [
              223,
              406
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class1",
        "optional": false,
        "range": [
          6,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        408
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          423,
          802
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                433,
                434
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                434,
                620
              ],
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
                          "name": "_this",
                          "optional": false,
                          "range": [
                            459,
                            464
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            467,
                            468
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 25
                            },
                            "start": {
                              "column": 20,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          459,
                          468
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      455,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            482,
                            484
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 26
                            },
                            "start": {
                              "column": 12,
                              "line": 26
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  501,
                                  508
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 27
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "range": [
                                                564,
                                                568
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 28
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 28
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "range": [
                                              555,
                                              563
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 28
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 28
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            555,
                                            569
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 28
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 28
                                            }
                                          }
                                        },
                                        "range": [
                                          548,
                                          570
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 28
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 28
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      530,
                                      584
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 27
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    524,
                                    584
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 27
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      511,
                                      519
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 27
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  510,
                                  584
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 27
                                  }
                                }
                              },
                              "range": [
                                501,
                                584
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 29
                                },
                                "start": {
                                  "column": 12,
                                  "line": 27
                                }
                              }
                            }
                          ],
                          "range": [
                            487,
                            594
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 30
                            },
                            "start": {
                              "column": 17,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          482,
                          594
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      478,
                      594
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        611,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 32
                        },
                        "start": {
                          "column": 15,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      604,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  445,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                },
                "range": [
                  436,
                  444
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    438,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "range": [
              429,
              620
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 24
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
              "name": "a",
              "optional": false,
              "range": [
                629,
                630
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                630,
                800
              ],
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
                          "name": "_this",
                          "optional": false,
                          "range": [
                            658,
                            663
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            666,
                            667
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 35
                            },
                            "start": {
                              "column": 20,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          658,
                          667
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 35
                          },
                          "start": {
                            "column": 12,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      654,
                      668
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            681,
                            683
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 36
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  700,
                                  707
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 37
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "range": [
                                                763,
                                                767
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 38
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 38
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "range": [
                                              754,
                                              762
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 38
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 38
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            754,
                                            768
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 38
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 38
                                            }
                                          }
                                        },
                                        "range": [
                                          747,
                                          769
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
                                      729,
                                      783
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 37
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    723,
                                    783
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 39
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 37
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      710,
                                      718
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 37
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 37
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  709,
                                  783
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                700,
                                783
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 39
                                },
                                "start": {
                                  "column": 12,
                                  "line": 37
                                }
                              }
                            }
                          ],
                          "range": [
                            686,
                            793
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 40
                            },
                            "start": {
                              "column": 17,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          681,
                          793
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 40
                          },
                          "start": {
                            "column": 12,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      677,
                      793
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  644,
                  800
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 23,
                    "line": 34
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    },
                    "range": [
                      634,
                      642
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        636,
                        642
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    631,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 34
                }
              }
            },
            "range": [
              625,
              800
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 13,
            "line": 23
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class2",
        "optional": false,
        "range": [
          416,
          422
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 23
          },
          "start": {
            "column": 6,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        410,
        802
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
