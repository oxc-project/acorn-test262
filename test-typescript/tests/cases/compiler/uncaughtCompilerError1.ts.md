__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    509
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
            "name": "index",
            "optional": false,
            "range": [
              12,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
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
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "lineTokens",
            "optional": false,
            "range": [
              19,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            19,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "token",
            "optional": false,
            "range": [
              31,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            31,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tokens",
            "optional": false,
            "range": [
              38,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 38,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            38,
            44
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 1
            },
            "start": {
              "column": 38,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        45
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "appendText",
                                  "optional": false,
                                  "range": [
                                    431,
                                    441
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 9
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "'\\\"\\\"'",
                                  "value": "\"\"",
                                  "range": [
                                    443,
                                    449
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  431,
                                  449
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 9
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "advanceCount",
                                  "optional": false,
                                  "range": [
                                    451,
                                    463
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 9
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
                                    465,
                                    466
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  451,
                                  466
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "range": [
                              429,
                              468
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            422,
                            469
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        408,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 101,
                          "line": 8
                        }
                      }
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "range": [
                                324,
                                330
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 8
                                },
                                "start": {
                                  "column": 17,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "range": [
                                  331,
                                  336
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 8
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  339,
                                  340
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                331,
                                340
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
                            "range": [
                              324,
                              341
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 8
                              },
                              "start": {
                                "column": 17,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "range": [
                              342,
                              346
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 8
                              },
                              "start": {
                                "column": 35,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            324,
                            346
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "'attribute.value.html'",
                          "value": "attribute.value.html",
                          "range": [
                            351,
                            373
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 8
                            },
                            "start": {
                              "column": 44,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          324,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "range": [
                                377,
                                383
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 8
                                },
                                "start": {
                                  "column": 70,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "range": [
                                  384,
                                  389
                                ],
                                "loc": {
                                  "end": {
                                    "column": 82,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 77,
                                    "line": 8
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  392,
                                  393
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 85,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                384,
                                393
                              ],
                              "loc": {
                                "end": {
                                  "column": 86,
                                  "line": 8
                                },
                                "start": {
                                  "column": 77,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              377,
                              394
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 8
                              },
                              "start": {
                                "column": 70,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "range": [
                              395,
                              399
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 8
                              },
                              "start": {
                                "column": 88,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            377,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 92,
                              "line": 8
                            },
                            "start": {
                              "column": 70,
                              "line": 8
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "''",
                          "value": "",
                          "range": [
                            404,
                            406
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 8
                            },
                            "start": {
                              "column": 97,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          377,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 8
                          },
                          "start": {
                            "column": 70,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        324,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      320,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "appendText",
                                "optional": false,
                                "range": [
                                  258,
                                  268
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 6
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "'\\\"\\\"'",
                                "value": "\"\"",
                                "range": [
                                  270,
                                  276
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                258,
                                276
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 6
                                },
                                "start": {
                                  "column": 21,
                                  "line": 6
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "advanceCount",
                                "optional": false,
                                "range": [
                                  278,
                                  290
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 6
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
                                  292,
                                  293
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 55,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                278,
                                293
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 6
                                },
                                "start": {
                                  "column": 41,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            256,
                            295
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 6
                            },
                            "start": {
                              "column": 19,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          249,
                          296
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      235,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 43,
                        "line": 5
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "range": [
                        204,
                        209
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
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tokens",
                          "optional": false,
                          "range": [
                            215,
                            221
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 5
                            },
                            "start": {
                              "column": 23,
                              "line": 5
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
                            222,
                            228
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 5
                            },
                            "start": {
                              "column": 30,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          215,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          231,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 5
                          },
                          "start": {
                            "column": 39,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        215,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      204,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    200,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      495,
                      499
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    488,
                    500
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
              "range": [
                190,
                506
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 128,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "lineTokens",
                            "optional": false,
                            "range": [
                              70,
                              80
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 4
                              },
                              "start": {
                                "column": 8,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "range": [
                              81,
                              86
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 4
                              },
                              "start": {
                                "column": 19,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            70,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "trim",
                          "optional": false,
                          "range": [
                            88,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 4
                            },
                            "start": {
                              "column": 26,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          70,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        70,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'='",
                      "value": "=",
                      "range": [
                        99,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 4
                        },
                        "start": {
                          "column": 37,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      70,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "range": [
                        106,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 4
                        },
                        "start": {
                          "column": 44,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        114,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 4
                        },
                        "start": {
                          "column": 52,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      106,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 4
                      },
                      "start": {
                        "column": 44,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    70,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "token",
                      "optional": false,
                      "range": [
                        119,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 4
                        },
                        "start": {
                          "column": 57,
                          "line": 4
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        125,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 4
                        },
                        "start": {
                          "column": 63,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      119,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 4
                      },
                      "start": {
                        "column": 57,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      134,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 4
                      },
                      "start": {
                        "column": 72,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    119,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 4
                    },
                    "start": {
                      "column": 57,
                      "line": 4
                    }
                  }
                },
                "range": [
                  70,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokens",
                      "optional": false,
                      "range": [
                        140,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 4
                        },
                        "start": {
                          "column": 78,
                          "line": 4
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "range": [
                          147,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 4
                          },
                          "start": {
                            "column": 85,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          155,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 4
                          },
                          "start": {
                            "column": 93,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        147,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 4
                        },
                        "start": {
                          "column": 85,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      140,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 4
                      },
                      "start": {
                        "column": 78,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      158,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 4
                      },
                      "start": {
                        "column": 96,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    140,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 4
                    },
                    "start": {
                      "column": 78,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'attribute.name.html'",
                  "value": "attribute.name.html",
                  "range": [
                    167,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 126,
                      "line": 4
                    },
                    "start": {
                      "column": 105,
                      "line": 4
                    }
                  }
                },
                "range": [
                  140,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 126,
                    "line": 4
                  },
                  "start": {
                    "column": 78,
                    "line": 4
                  }
                }
              },
              "range": [
                70,
                188
              ],
              "loc": {
                "end": {
                  "column": 126,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              66,
              506
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          60,
          508
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 13,
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
        "name": "f",
        "optional": false,
        "range": [
          56,
          57
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        47,
        508
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
