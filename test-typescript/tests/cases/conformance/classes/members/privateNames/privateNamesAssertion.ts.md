__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    407
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          208
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "p1",
              "range": [
                16,
                19
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 40,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                19,
                52
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 2
                        },
                        "start": {
                          "column": 11,
                          "line": 2
                        }
                      },
                      "range": [
                        23,
                        28
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          25,
                          28
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 2
                          },
                          "start": {
                            "column": 13,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      22,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  },
                  "range": [
                    30,
                    52
                  ],
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "asserts": true,
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        41,
                        42
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 2
                        },
                        "start": {
                          "column": 29,
                          "line": 2
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 2
                        },
                        "start": {
                          "column": 34,
                          "line": 2
                        }
                      },
                      "range": [
                        46,
                        52
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          46,
                          52
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 2
                          },
                          "start": {
                            "column": 34,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      33,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  21,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "value": {
              "type": "ArrowFunctionExpression",
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
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "range": [
                                123,
                                128
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 4
                                },
                                "start": {
                                  "column": 22,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              119,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 4
                              },
                              "start": {
                                "column": 18,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            113,
                            131
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
                        }
                      ],
                      "range": [
                        99,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 35,
                          "line": 3
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            83,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 3
                            },
                            "start": {
                              "column": 19,
                              "line": 3
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true,
                        "range": [
                          76,
                          84
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
                      "right": {
                        "type": "Literal",
                        "raw": "\"string\"",
                        "value": "string",
                        "range": [
                          89,
                          97
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
                      },
                      "range": [
                        76,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      72,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  62,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 50,
                    "line": 2
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    56,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 2
                    },
                    "start": {
                      "column": 44,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                55,
                147
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 43,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              147
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
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
              "name": "m1",
              "optional": false,
              "range": [
                152,
                154
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                154,
                206
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            186,
                            187
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            177,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "p1",
                          "range": [
                            182,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 8
                            },
                            "start": {
                              "column": 13,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          177,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        177,
                        188
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
                    "range": [
                      177,
                      189
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        198,
                        199
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
                    "range": [
                      198,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  167,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 19,
                    "line": 7
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    },
                    "range": [
                      156,
                      165
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        158,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 10,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    155,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              }
            },
            "range": [
              152,
              206
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
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
        "name": "Foo",
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
        208
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
          221,
          406
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "p1",
              "range": [
                227,
                230
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                230,
                345
              ],
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
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "range": [
                                321,
                                326
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 16
                                },
                                "start": {
                                  "column": 22,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              317,
                              328
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 16
                              },
                              "start": {
                                "column": 18,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            311,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        297,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 17
                        },
                        "start": {
                          "column": 35,
                          "line": 15
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "!==",
                      "left": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            281,
                            282
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 15
                            },
                            "start": {
                              "column": 19,
                              "line": 15
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true,
                        "range": [
                          274,
                          282
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"string\"",
                        "value": "string",
                        "range": [
                          287,
                          295
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 15
                          },
                          "start": {
                            "column": 25,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        274,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      270,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  260,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 37,
                    "line": 14
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    },
                    "range": [
                      232,
                      237
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        234,
                        237
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    231,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                },
                "range": [
                  238,
                  259
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": true,
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      248,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 14
                      },
                      "start": {
                        "column": 25,
                        "line": 14
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 14
                      },
                      "start": {
                        "column": 30,
                        "line": 14
                      }
                    },
                    "range": [
                      253,
                      259
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        253,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 14
                        },
                        "start": {
                          "column": 30,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    240,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 7,
                  "line": 14
                }
              }
            },
            "range": [
              227,
              345
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 14
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
              "name": "m1",
              "optional": false,
              "range": [
                350,
                352
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                352,
                404
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            384,
                            385
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 20
                            },
                            "start": {
                              "column": 17,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            375,
                            379
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
                          "type": "PrivateIdentifier",
                          "name": "p1",
                          "range": [
                            380,
                            383
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 20
                            },
                            "start": {
                              "column": 13,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          375,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
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
                        375,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      375,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        396,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      396,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  365,
                  404
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 19,
                    "line": 19
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    },
                    "range": [
                      354,
                      363
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        356,
                        363
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 19
                        },
                        "start": {
                          "column": 10,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    353,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 19
                    },
                    "start": {
                      "column": 7,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            },
            "range": [
              350,
              404
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 11,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "range": [
          216,
          220
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        210,
        406
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
