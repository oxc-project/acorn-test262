__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    113
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        23,
        72
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            38,
            72
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "print",
                "optional": false,
                "range": [
                  44,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
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
                  49,
                  70
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "\"I am B\"",
                        "value": "I am B",
                        "range": [
                          61,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        54,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 4
                        },
                        "start": {
                          "column": 14,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    52,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              },
              "range": [
                44,
                70
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            36,
            37
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          30,
          72
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
        74,
        112
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  105,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                }
              },
              "range": [
                98,
                110
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            96,
            112
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 7
            },
            "start": {
              "column": 22,
              "line": 7
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
            90,
            93
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "params": [],
        "range": [
          81,
          112
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 38,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    46
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        45
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "\"backup\"",
                "value": "backup",
                "range": [
                  34,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
                  }
                }
              },
              "range": [
                27,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            25,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 25,
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
          "name": "backup",
          "optional": false,
          "range": [
            16,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          7,
          45
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    706
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
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                24
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  21,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
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
              24
            ],
            "loc": {
              "end": {
                "column": 24,
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
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
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
        25
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 1
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
          34,
          362
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myModule",
              "optional": false,
              "range": [
                48,
                56
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "Literal",
                "raw": "\"./0\"",
                "value": "./0",
                "range": [
                  66,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 30,
                    "line": 3
                  }
                }
              },
              "range": [
                59,
                72
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "range": [
              40,
              73
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
                78,
                84
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                84,
                360
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
                          "name": "loadAsync",
                          "optional": false,
                          "range": [
                            103,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 5
                            },
                            "start": {
                              "column": 14,
                              "line": 5
                            }
                          }
                        },
                        "init": {
                          "type": "ImportExpression",
                          "options": null,
                          "source": {
                            "type": "Literal",
                            "raw": "\"./0\"",
                            "value": "./0",
                            "range": [
                              123,
                              128
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 5
                              },
                              "start": {
                                "column": 34,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            115,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 5
                            },
                            "start": {
                              "column": 26,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          103,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 5
                          },
                          "start": {
                            "column": 14,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      97,
                      130
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Zero",
                                          "optional": false,
                                          "range": [
                                            192,
                                            196
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 7
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
                                            197,
                                            200
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 32,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 29,
                                              "line": 7
                                            }
                                          }
                                        },
                                        "range": [
                                          192,
                                          200
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        192,
                                        202
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 7
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
                                        180,
                                        187
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 7
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
                                        188,
                                        191
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      180,
                                      191
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    180,
                                    203
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  180,
                                  204
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "range": [
                              166,
                              214
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 8
                              },
                              "start": {
                                "column": 35,
                                "line": 6
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
                              "name": "Zero",
                              "optional": false,
                              "range": [
                                158,
                                162
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 6
                                },
                                "start": {
                                  "column": 27,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            158,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 8
                            },
                            "start": {
                              "column": 27,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "async": true,
                          "body": {
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
                                      "name": "err",
                                      "optional": false,
                                      "range": [
                                        255,
                                        258
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 9
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
                                        243,
                                        250
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 9
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
                                        251,
                                        254
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      243,
                                      254
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
                                  },
                                  "optional": false,
                                  "range": [
                                    243,
                                    259
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  243,
                                  260
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 12,
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
                                      "name": "one",
                                      "optional": false,
                                      "range": [
                                        277,
                                        280
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "ImportExpression",
                                        "options": null,
                                        "source": {
                                          "type": "Literal",
                                          "raw": "\"./1\"",
                                          "value": "./1",
                                          "range": [
                                            296,
                                            301
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 40,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 35,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "range": [
                                          289,
                                          302
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        283,
                                        302
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "range": [
                                      277,
                                      302
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 10
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "let",
                                "range": [
                                  273,
                                  303
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 10
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "one",
                                          "optional": false,
                                          "range": [
                                            328,
                                            331
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "backup",
                                          "optional": false,
                                          "range": [
                                            332,
                                            338
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 34,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "range": [
                                          328,
                                          338
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        328,
                                        340
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 11
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
                                        316,
                                        323
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 11
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
                                        324,
                                        327
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      316,
                                      327
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    316,
                                    341
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  316,
                                  342
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "range": [
                              229,
                              352
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 12
                              },
                              "start": {
                                "column": 24,
                                "line": 8
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
                              "name": "err",
                              "optional": false,
                              "range": [
                                222,
                                225
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 8
                                },
                                "start": {
                                  "column": 17,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "range": [
                            216,
                            352
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 12
                            },
                            "start": {
                              "column": 11,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              139,
                              143
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 6
                              },
                              "start": {
                                "column": 8,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myModule",
                            "optional": false,
                            "range": [
                              144,
                              152
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 6
                              },
                              "start": {
                                "column": 13,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            139,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "range": [
                            153,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          139,
                          157
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
                      "optional": false,
                      "range": [
                        139,
                        353
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      139,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  87,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "range": [
              78,
              360
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 8,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          32,
          33
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        26,
        362
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        364,
        706
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            379,
            706
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myModule",
                "optional": false,
                "range": [
                  393,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ImportExpression",
                "options": null,
                "source": {
                  "type": "Literal",
                  "raw": "\"./0\"",
                  "value": "./0",
                  "range": [
                    411,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 17
                    },
                    "start": {
                      "column": 30,
                      "line": 17
                    }
                  }
                },
                "range": [
                  404,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 17
                  },
                  "start": {
                    "column": 23,
                    "line": 17
                  }
                }
              },
              "range": [
                385,
                418
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                  423,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
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
                  429,
                  704
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
                            "name": "loadAsync",
                            "optional": false,
                            "range": [
                              448,
                              457
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 19
                              },
                              "start": {
                                "column": 14,
                                "line": 19
                              }
                            }
                          },
                          "init": {
                            "type": "ImportExpression",
                            "options": null,
                            "source": {
                              "type": "Literal",
                              "raw": "\"./0\"",
                              "value": "./0",
                              "range": [
                                467,
                                472
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 19
                                },
                                "start": {
                                  "column": 33,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              460,
                              473
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 19
                              },
                              "start": {
                                "column": 26,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            448,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 19
                            },
                            "start": {
                              "column": 14,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const",
                      "range": [
                        442,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Zero",
                                            "optional": false,
                                            "range": [
                                              536,
                                              540
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 21
                                              },
                                              "start": {
                                                "column": 24,
                                                "line": 21
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
                                              541,
                                              544
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 21
                                              },
                                              "start": {
                                                "column": 29,
                                                "line": 21
                                              }
                                            }
                                          },
                                          "range": [
                                            536,
                                            544
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 32,
                                              "line": 21
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 21
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          536,
                                          546
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 21
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
                                          524,
                                          531
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 19,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 21
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
                                          532,
                                          535
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "range": [
                                        524,
                                        535
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      524,
                                      547
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "range": [
                                    524,
                                    548
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 21
                                    }
                                  }
                                }
                              ],
                              "range": [
                                510,
                                558
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 22
                                },
                                "start": {
                                  "column": 35,
                                  "line": 20
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
                                "name": "Zero",
                                "optional": false,
                                "range": [
                                  502,
                                  506
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
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
                              502,
                              558
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 22
                              },
                              "start": {
                                "column": 27,
                                "line": 20
                              }
                            }
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "async": true,
                            "body": {
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
                                        "name": "err",
                                        "optional": false,
                                        "range": [
                                          599,
                                          602
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
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
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "range": [
                                          587,
                                          594
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 19,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 23
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
                                          595,
                                          598
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 23
                                          }
                                        }
                                      },
                                      "range": [
                                        587,
                                        598
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 23
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 23
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      587,
                                      603
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    587,
                                    604
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 12,
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
                                        "name": "one",
                                        "optional": false,
                                        "range": [
                                          621,
                                          624
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 19,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 24
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "AwaitExpression",
                                        "argument": {
                                          "type": "ImportExpression",
                                          "options": null,
                                          "source": {
                                            "type": "Literal",
                                            "raw": "\"./1\"",
                                            "value": "./1",
                                            "range": [
                                              640,
                                              645
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 40,
                                                "line": 24
                                              },
                                              "start": {
                                                "column": 35,
                                                "line": 24
                                              }
                                            }
                                          },
                                          "range": [
                                            633,
                                            646
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 41,
                                              "line": 24
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 24
                                            }
                                          }
                                        },
                                        "range": [
                                          627,
                                          646
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 24
                                          }
                                        }
                                      },
                                      "range": [
                                        621,
                                        646
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 24
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let",
                                  "range": [
                                    617,
                                    647
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 24
                                    }
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "one",
                                            "optional": false,
                                            "range": [
                                              672,
                                              675
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
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "backup",
                                            "optional": false,
                                            "range": [
                                              676,
                                              682
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 34,
                                                "line": 25
                                              },
                                              "start": {
                                                "column": 28,
                                                "line": 25
                                              }
                                            }
                                          },
                                          "range": [
                                            672,
                                            682
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 34,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 25
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          672,
                                          684
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 25
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
                                          660,
                                          667
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 19,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 25
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
                                          668,
                                          671
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 25
                                          }
                                        }
                                      },
                                      "range": [
                                        660,
                                        671
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      660,
                                      685
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    660,
                                    686
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "range": [
                                573,
                                696
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 26
                                },
                                "start": {
                                  "column": 24,
                                  "line": 22
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
                                "name": "err",
                                "optional": false,
                                "range": [
                                  566,
                                  569
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 22
                                  }
                                }
                              }
                            ],
                            "range": [
                              560,
                              696
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 26
                              },
                              "start": {
                                "column": 11,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                483,
                                487
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 20
                                },
                                "start": {
                                  "column": 8,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "myModule",
                              "optional": false,
                              "range": [
                                488,
                                496
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 20
                                },
                                "start": {
                                  "column": 13,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              483,
                              496
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 20
                              },
                              "start": {
                                "column": 8,
                                "line": 20
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "then",
                            "optional": false,
                            "range": [
                              497,
                              501
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 20
                              },
                              "start": {
                                "column": 22,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            483,
                            501
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 20
                            },
                            "start": {
                              "column": 8,
                              "line": 20
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          483,
                          697
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        483,
                        698
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    432,
                    704
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 27
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 18
                  }
                }
              },
              "range": [
                423,
                704
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 15,
              "line": 16
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "range": [
            377,
            378
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 13,
              "line": 16
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          371,
          706
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
