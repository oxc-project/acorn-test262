__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    111
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        21,
        70
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            36,
            70
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
                  42,
                  47
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
                  47,
                  68
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
                          59,
                          67
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
                        52,
                        67
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
                    50,
                    68
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
                42,
                68
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
            34,
            35
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
          28,
          70
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
        72,
        110
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
                  103,
                  108
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
                96,
                108
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
            94,
            110
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
            88,
            91
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
          79,
          110
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
    705
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
          361
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
                359
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
                              122,
                              127
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 5
                              },
                              "start": {
                                "column": 33,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            115,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
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
                          128
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
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
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
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
                                            191,
                                            195
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
                                            196,
                                            199
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
                                          191,
                                          199
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
                                        191,
                                        201
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
                                        179,
                                        186
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
                                        187,
                                        190
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
                                      179,
                                      190
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
                                    179,
                                    202
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
                                  179,
                                  203
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
                              165,
                              213
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
                                157,
                                161
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
                            157,
                            213
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
                                        254,
                                        257
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
                                        242,
                                        249
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
                                        250,
                                        253
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
                                      242,
                                      253
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
                                    242,
                                    258
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
                                  242,
                                  259
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
                                        276,
                                        279
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
                                            295,
                                            300
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
                                          288,
                                          301
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
                                        282,
                                        301
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
                                      276,
                                      301
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
                                  272,
                                  302
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
                                            327,
                                            330
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
                                            331,
                                            337
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
                                          327,
                                          337
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
                                        327,
                                        339
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
                                        315,
                                        322
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
                                        323,
                                        326
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
                                      315,
                                      326
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
                                    315,
                                    340
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
                                  315,
                                  341
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
                              228,
                              351
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
                                221,
                                224
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
                            215,
                            351
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
                              138,
                              142
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
                              143,
                              151
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
                            138,
                            151
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
                            152,
                            156
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
                          138,
                          156
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
                        138,
                        352
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
                      138,
                      353
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
                  359
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
              359
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
        361
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
        363,
        705
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            378,
            705
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
                  392,
                  400
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
                    410,
                    415
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
                  403,
                  416
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
                384,
                417
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
                  422,
                  428
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
                  428,
                  703
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
                              447,
                              456
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
                                466,
                                471
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
                              459,
                              472
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
                            447,
                            472
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
                        441,
                        473
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
                                              535,
                                              539
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
                                              540,
                                              543
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
                                            535,
                                            543
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
                                          535,
                                          545
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
                                          523,
                                          530
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
                                          531,
                                          534
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
                                        523,
                                        534
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
                                      523,
                                      546
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
                                    523,
                                    547
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
                                509,
                                557
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
                                  501,
                                  505
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
                              501,
                              557
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
                                          598,
                                          601
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
                                          586,
                                          593
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
                                          594,
                                          597
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
                                        586,
                                        597
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
                                      586,
                                      602
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
                                    586,
                                    603
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
                                          620,
                                          623
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
                                              639,
                                              644
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
                                            632,
                                            645
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
                                          626,
                                          645
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
                                        620,
                                        645
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
                                    616,
                                    646
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
                                              671,
                                              674
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
                                              675,
                                              681
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
                                            671,
                                            681
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
                                          671,
                                          683
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
                                          659,
                                          666
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
                                          667,
                                          670
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
                                        659,
                                        670
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
                                      659,
                                      684
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
                                    659,
                                    685
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
                                572,
                                695
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
                                  565,
                                  568
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
                              559,
                              695
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
                                482,
                                486
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
                                487,
                                495
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
                              482,
                              495
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
                              496,
                              500
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
                            482,
                            500
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
                          482,
                          696
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
                        482,
                        697
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
                    431,
                    703
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
                422,
                703
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
            376,
            377
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
          370,
          705
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
