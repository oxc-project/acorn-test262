__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    441
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          104
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                18,
                23
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 6,
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
                23,
                48
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        43,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 31,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      36,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  34,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
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
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                },
                "range": [
                  25,
                  33
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    27,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              48
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 2,
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
              "name": "prop1",
              "optional": false,
              "range": [
                55,
                60
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 6,
                  "line": 3
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
                60,
                84
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  81,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    },
                    "range": [
                      62,
                      79
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            64,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 3
                            },
                            "start": {
                              "column": 15,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            73,
                            79
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 3
                            },
                            "start": {
                              "column": 24,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        64,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    61,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              51,
              84
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "range": [
                88,
                93
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                93,
                101
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  95,
                  101
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
            "value": null,
            "range": [
              88,
              102
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "One",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
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
        104
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
          116,
          270
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                124,
                129
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
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
                129,
                160
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        150,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 9
                        },
                        "start": {
                          "column": 32,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      143,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  141,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 9
                  },
                  "start": {
                    "column": 23,
                    "line": 9
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
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 9
                  }
                },
                "range": [
                  131,
                  140
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      133,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    133,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 42,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              120,
              160
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
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
              "name": "prop1",
              "optional": false,
              "range": [
                167,
                172
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
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
                172,
                197
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  194,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 33,
                    "line": 10
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    },
                    "range": [
                      174,
                      192
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"hello\"",
                            "value": "hello",
                            "range": [
                              176,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 10
                              },
                              "start": {
                                "column": 15,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            176,
                            183
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 10
                            },
                            "start": {
                              "column": 15,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            186,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 10
                            },
                            "start": {
                              "column": 25,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        176,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    173,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              163,
              197
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
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
              "name": "prop2",
              "optional": false,
              "range": [
                205,
                210
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
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
                210,
                235
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        230,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 12
                        },
                        "start": {
                          "column": 31,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      223,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 24,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  221,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 12
                  },
                  "start": {
                    "column": 22,
                    "line": 12
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
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 13,
                    "line": 12
                  }
                },
                "range": [
                  212,
                  220
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    214,
                    220
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
              "loc": {
                "end": {
                  "column": 36,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              201,
              235
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
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
              "name": "prop2",
              "optional": false,
              "range": [
                242,
                247
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
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
                247,
                267
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  264,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 13
                  },
                  "start": {
                    "column": 28,
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 13
                      },
                      "start": {
                        "column": 13,
                        "line": 13
                      }
                    },
                    "range": [
                      249,
                      262
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            251,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 13
                            },
                            "start": {
                              "column": 15,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              260,
                              262
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 13
                              },
                              "start": {
                                "column": 24,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            260,
                            262
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 13
                            },
                            "start": {
                              "column": 24,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        251,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    248,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              238,
              267
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "range": [
          112,
          115
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        106,
        270
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              },
              "range": [
                287,
                298
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "range": [
                        289,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      289,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "range": [
                        295,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 17
                        },
                        "start": {
                          "column": 23,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      295,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 17
                      },
                      "start": {
                        "column": 23,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  289,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 17
                  },
                  "start": {
                    "column": 17,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              286,
              298
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 17
              },
              "start": {
                "column": 14,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            286,
            298
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 17
            },
            "start": {
              "column": 14,
              "line": 17
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        272,
        299
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            312,
            313
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop1",
          "optional": false,
          "range": [
            314,
            319
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 20
            },
            "start": {
              "column": 2,
              "line": 20
            }
          }
        },
        "range": [
          312,
          319
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        312,
        320
      ],
      "loc": {
        "end": {
          "column": 8,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              341,
              342
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
              },
              "start": {
                "column": 0,
                "line": 22
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "range": [
              343,
              348
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          "range": [
            341,
            348
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            351,
            353
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
        "range": [
          341,
          353
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        341,
        354
      ],
      "loc": {
        "end": {
          "column": 13,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              355,
              356
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "range": [
              357,
              362
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          },
          "range": [
            355,
            362
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            365,
            372
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 23
            },
            "start": {
              "column": 10,
              "line": 23
            }
          }
        },
        "range": [
          355,
          372
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        355,
        373
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            384,
            385
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop2",
          "optional": false,
          "range": [
            386,
            391
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 26
            },
            "start": {
              "column": 2,
              "line": 26
            }
          }
        },
        "range": [
          384,
          391
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        384,
        392
      ],
      "loc": {
        "end": {
          "column": 8,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              399,
              400
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 28
              },
              "start": {
                "column": 0,
                "line": 28
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "range": [
              401,
              406
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          },
          "range": [
            399,
            406
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            409,
            411
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 28
            },
            "start": {
              "column": 10,
              "line": 28
            }
          }
        },
        "range": [
          399,
          411
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        399,
        412
      ],
      "loc": {
        "end": {
          "column": 13,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              413,
              414
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 29
              },
              "start": {
                "column": 0,
                "line": 29
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "range": [
              415,
              420
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          "range": [
            413,
            420
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            423,
            430
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 29
            },
            "start": {
              "column": 10,
              "line": 29
            }
          }
        },
        "range": [
          413,
          430
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        413,
        431
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
