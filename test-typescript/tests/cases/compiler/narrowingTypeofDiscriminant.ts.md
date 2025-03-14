__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1068
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      186,
                      189
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    186,
                    190
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
                }
              ],
              "range": [
                176,
                226
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      124,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    124,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                114,
                166
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 38,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      91,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "range": [
                      95,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    91,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  84,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  104,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 28,
                    "line": 2
                  }
                }
              },
              "range": [
                84,
                112
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              80,
              226
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          74,
          228
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 74,
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
        "name": "f1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 72,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            },
            "range": [
              15,
              72
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          19,
                          23
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 1
                          },
                          "start": {
                            "column": 19,
                            "line": 1
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 1
                          },
                          "start": {
                            "column": 23,
                            "line": 1
                          }
                        },
                        "range": [
                          23,
                          28
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              25,
                              28
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 1
                              },
                              "start": {
                                "column": 25,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            25,
                            28
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 1
                            },
                            "start": {
                              "column": 25,
                              "line": 1
                            }
                          }
                        }
                      },
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
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          30,
                          34
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 1
                          },
                          "start": {
                            "column": 30,
                            "line": 1
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 1
                          },
                          "start": {
                            "column": 34,
                            "line": 1
                          }
                        },
                        "range": [
                          34,
                          42
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            36,
                            42
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 1
                            },
                            "start": {
                              "column": 36,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        30,
                        42
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 1
                        },
                        "start": {
                          "column": 30,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    17,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 17,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          49,
                          53
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 1
                          },
                          "start": {
                            "column": 49,
                            "line": 1
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 1
                          },
                          "start": {
                            "column": 53,
                            "line": 1
                          }
                        },
                        "range": [
                          53,
                          56
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              55,
                              56
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 1
                              },
                              "start": {
                                "column": 55,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            55,
                            56
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 1
                            },
                            "start": {
                              "column": 55,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        49,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 1
                        },
                        "start": {
                          "column": 49,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          58,
                          62
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 1
                          },
                          "start": {
                            "column": 58,
                            "line": 1
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 1
                          },
                          "start": {
                            "column": 62,
                            "line": 1
                          }
                        },
                        "range": [
                          62,
                          70
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            64,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 1
                            },
                            "start": {
                              "column": 64,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        58,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 1
                        },
                        "start": {
                          "column": 58,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    47,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 1
                    },
                    "start": {
                      "column": 47,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                17,
                72
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            }
          },
          "range": [
            12,
            72
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        228
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      429,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    429,
                    433
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                419,
                481
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 9,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      367,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    367,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                357,
                409
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 39,
                  "line": 11
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        333,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        338,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 20,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      333,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    333,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  326,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  347,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "range": [
                326,
                355
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              322,
              481
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          316,
          483
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 86,
            "line": 10
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
          239,
          241
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 84,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            },
            "range": [
              245,
              314
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          249,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 10
                          },
                          "start": {
                            "column": 19,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 10
                          },
                          "start": {
                            "column": 23,
                            "line": 10
                          }
                        },
                        "range": [
                          253,
                          258
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              255,
                              258
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 10
                              },
                              "start": {
                                "column": 25,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            255,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 10
                            },
                            "start": {
                              "column": 25,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        249,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 19,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          260,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 10
                          },
                          "start": {
                            "column": 30,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 10
                          },
                          "start": {
                            "column": 34,
                            "line": 10
                          }
                        },
                        "range": [
                          264,
                          272
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            266,
                            272
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 10
                            },
                            "start": {
                              "column": 36,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        260,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 10
                        },
                        "start": {
                          "column": 30,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    247,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          279,
                          283
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 10
                          },
                          "start": {
                            "column": 49,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 10
                          },
                          "start": {
                            "column": 53,
                            "line": 10
                          }
                        },
                        "range": [
                          283,
                          286
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              285,
                              286
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 10
                              },
                              "start": {
                                "column": 55,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            285,
                            286
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 10
                            },
                            "start": {
                              "column": 55,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        279,
                        287
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 10
                        },
                        "start": {
                          "column": 49,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          288,
                          292
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 10
                          },
                          "start": {
                            "column": 58,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 10
                          },
                          "start": {
                            "column": 62,
                            "line": 10
                          }
                        },
                        "range": [
                          292,
                          300
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            294,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 10
                            },
                            "start": {
                              "column": 64,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        288,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 10
                        },
                        "start": {
                          "column": 58,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    277,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 10
                    },
                    "start": {
                      "column": 47,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    305,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 10
                    },
                    "start": {
                      "column": 75,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                247,
                314
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            }
          },
          "range": [
            242,
            314
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
            }
          }
        }
      ],
      "range": [
        230,
        483
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrappedStringOr",
        "optional": false,
        "range": [
          512,
          527
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    535,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 21
                    },
                    "start": {
                      "column": 28,
                      "line": 21
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 21
                    },
                    "start": {
                      "column": 34,
                      "line": 21
                    }
                  },
                  "range": [
                    541,
                    549
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      543,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 21
                      },
                      "start": {
                        "column": 36,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  535,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 21
                  },
                  "start": {
                    "column": 28,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              533,
              551
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 21
              },
              "start": {
                "column": 26,
                "line": 21
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    556,
                    561
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 21
                    },
                    "start": {
                      "column": 49,
                      "line": 21
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 21
                    },
                    "start": {
                      "column": 55,
                      "line": 21
                    }
                  },
                  "range": [
                    562,
                    565
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        564,
                        565
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 21
                        },
                        "start": {
                          "column": 57,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      564,
                      565
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 21
                      },
                      "start": {
                        "column": 57,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  556,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 21
                  },
                  "start": {
                    "column": 49,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              554,
              567
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 21
              },
              "start": {
                "column": 47,
                "line": 21
              }
            }
          }
        ],
        "range": [
          533,
          567
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 21
          },
          "start": {
            "column": 26,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 21
          },
          "start": {
            "column": 20,
            "line": 21
          }
        },
        "range": [
          527,
          530
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                528,
                529
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 21
                },
                "start": {
                  "column": 21,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              528,
              529
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 21
              },
              "start": {
                "column": 21,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        507,
        568
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      692,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    685,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                675,
                703
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 44,
                  "line": 24
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false,
                      "range": [
                        646,
                        653
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        655,
                        660
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 24
                        },
                        "start": {
                          "column": 24,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      646,
                      660
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    646,
                    660
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  639,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  665,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 24
                  },
                  "start": {
                    "column": 34,
                    "line": 24
                  }
                }
              },
              "range": [
                639,
                673
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "range": [
              635,
              703
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapped",
                "optional": false,
                "range": [
                  715,
                  722
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  723,
                  728
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 27
                  },
                  "start": {
                    "column": 19,
                    "line": 27
                  }
                }
              },
              "range": [
                715,
                728
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "range": [
              708,
              729
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          629,
          731
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 59,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "numberOk",
        "optional": false,
        "range": [
          579,
          587
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 23
              },
              "start": {
                "column": 25,
                "line": 23
              }
            },
            "range": [
              595,
              627
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      612,
                      620
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          613,
                          619
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 23
                          },
                          "start": {
                            "column": 43,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 23
                      },
                      "start": {
                        "column": 42,
                        "line": 23
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false,
                    "range": [
                      597,
                      612
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
                  },
                  "range": [
                    597,
                    620
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 23
                    },
                    "start": {
                      "column": 27,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    623,
                    627
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 23
                    },
                    "start": {
                      "column": 53,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                597,
                627
              ],
              "loc": {
                "end": {
                  "column": 57,
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
            588,
            627
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 23
            },
            "start": {
              "column": 18,
              "line": 23
            }
          }
        }
      ],
      "range": [
        570,
        731
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
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
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      858,
                      862
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 32
                      },
                      "start": {
                        "column": 15,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    851,
                    863
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                841,
                869
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 44,
                  "line": 31
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false,
                      "range": [
                        812,
                        819
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 31
                        },
                        "start": {
                          "column": 15,
                          "line": 31
                        }
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        821,
                        826
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 31
                        },
                        "start": {
                          "column": 24,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      812,
                      826
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 31
                      },
                      "start": {
                        "column": 15,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    812,
                    826
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 15,
                      "line": 31
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  805,
                  826
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  831,
                  839
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 31
                  },
                  "start": {
                    "column": 34,
                    "line": 31
                  }
                }
              },
              "range": [
                805,
                839
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 31
                }
              }
            },
            "range": [
              801,
              869
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapped",
                "optional": false,
                "range": [
                  881,
                  888
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 34
                  },
                  "start": {
                    "column": 11,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  889,
                  894
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 34
                  },
                  "start": {
                    "column": 19,
                    "line": 34
                  }
                }
              },
              "range": [
                881,
                894
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            },
            "range": [
              874,
              895
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          795,
          897
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 62,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "booleanBad",
        "optional": false,
        "range": [
          742,
          752
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 30
              },
              "start": {
                "column": 27,
                "line": 30
              }
            },
            "range": [
              760,
              793
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      777,
                      786
                    ],
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          778,
                          785
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 30
                          },
                          "start": {
                            "column": 45,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 30
                      },
                      "start": {
                        "column": 44,
                        "line": 30
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false,
                    "range": [
                      762,
                      777
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 30
                      },
                      "start": {
                        "column": 29,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    762,
                    786
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 30
                    },
                    "start": {
                      "column": 29,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    789,
                    793
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 30
                    },
                    "start": {
                      "column": 56,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                762,
                793
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 30
                },
                "start": {
                  "column": 29,
                  "line": 30
                }
              }
            }
          },
          "range": [
            753,
            793
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 30
            },
            "start": {
              "column": 20,
              "line": 30
            }
          }
        }
      ],
      "range": [
        733,
        897
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 30
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      1028,
                      1032
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 39
                      },
                      "start": {
                        "column": 15,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1021,
                    1033
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                1011,
                1039
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 46,
                  "line": 38
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false,
                      "range": [
                        981,
                        988
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 38
                        },
                        "start": {
                          "column": 16,
                          "line": 38
                        }
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        990,
                        995
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 38
                        },
                        "start": {
                          "column": 25,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      981,
                      995
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 38
                      },
                      "start": {
                        "column": 16,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    981,
                    995
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 38
                    },
                    "start": {
                      "column": 16,
                      "line": 38
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  973,
                  996
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  1001,
                  1009
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 38
                  },
                  "start": {
                    "column": 36,
                    "line": 38
                  }
                }
              },
              "range": [
                973,
                1009
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              }
            },
            "range": [
              969,
              1039
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapped",
                "optional": false,
                "range": [
                  1051,
                  1058
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 41
                  },
                  "start": {
                    "column": 11,
                    "line": 41
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  1059,
                  1064
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 41
                  }
                }
              },
              "range": [
                1051,
                1064
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 41
                },
                "start": {
                  "column": 11,
                  "line": 41
                }
              }
            },
            "range": [
              1044,
              1065
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          963,
          1067
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 64,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "booleanFixed",
        "optional": false,
        "range": [
          908,
          920
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 37
              },
              "start": {
                "column": 29,
                "line": 37
              }
            },
            "range": [
              928,
              961
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      945,
                      954
                    ],
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          946,
                          953
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 37
                          },
                          "start": {
                            "column": 47,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 37
                      },
                      "start": {
                        "column": 46,
                        "line": 37
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false,
                    "range": [
                      930,
                      945
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 37
                      },
                      "start": {
                        "column": 31,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    930,
                    954
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 37
                    },
                    "start": {
                      "column": 31,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    957,
                    961
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 37
                    },
                    "start": {
                      "column": 58,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                930,
                961
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 37
                },
                "start": {
                  "column": 31,
                  "line": 37
                }
              }
            }
          },
          "range": [
            921,
            961
          ],
          "loc": {
            "end": {
              "column": 62,
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
        899,
        1067
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
