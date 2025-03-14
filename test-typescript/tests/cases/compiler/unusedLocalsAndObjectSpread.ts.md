__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    669
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
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                42
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        23,
                        26
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 1
                        },
                        "start": {
                          "column": 23,
                          "line": 1
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
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
                              "column": 33,
                              "line": 1
                            },
                            "start": {
                              "column": 28,
                              "line": 1
                            }
                          },
                          "range": [
                            28,
                            33
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              30,
                              33
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 1
                              },
                              "start": {
                                "column": 30,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          27,
                          33
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 1
                          },
                          "start": {
                            "column": 27,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 1
                        },
                        "start": {
                          "column": 34,
                          "line": 1
                        }
                      },
                      "range": [
                        34,
                        40
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          36,
                          40
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 1
                          },
                          "start": {
                            "column": 36,
                            "line": 1
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      23,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 1
                      },
                      "start": {
                        "column": 23,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  21,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
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
              42
            ],
            "loc": {
              "end": {
                "column": 42,
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
            42
          ],
          "loc": {
            "end": {
              "column": 42,
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
        43
      ],
      "loc": {
        "end": {
          "column": 43,
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
                  "range": [
                    72,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 4
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
                          83,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        80,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          86,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 4
                          },
                          "start": {
                            "column": 24,
                            "line": 4
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          89,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        86,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    78,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                "range": [
                  72,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              66,
              93
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          143,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 6
                          },
                          "start": {
                            "column": 11,
                            "line": 6
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          143,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 6
                          },
                          "start": {
                            "column": 11,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        143,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          149,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "range": [
                        146,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 14,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    142,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    156,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 6
                    }
                  }
                },
                "range": [
                  142,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              136,
              160
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    177,
                    180
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
                    165,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
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
                    173,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
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
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                165,
                181
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              165,
              182
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          60,
          184
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 15,
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
        "name": "one",
        "optional": false,
        "range": [
          54,
          57
        ],
        "loc": {
          "end": {
            "column": 12,
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
        45,
        184
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
                  "range": [
                    213,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          221,
                          222
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
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
                          224,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 11
                          },
                          "start": {
                            "column": 21,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        221,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 11
                        },
                        "start": {
                          "column": 18,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          227,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 24,
                            "line": 11
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          230,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 11
                          },
                          "start": {
                            "column": 27,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        227,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 11
                        },
                        "start": {
                          "column": 24,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    219,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                "range": [
                  213,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              207,
              234
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 4,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          284,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 13
                          },
                          "start": {
                            "column": 11,
                            "line": 13
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "range": [
                          287,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 13
                          },
                          "start": {
                            "column": 14,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        284,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 11,
                          "line": 13
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          293,
                          296
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 13
                          },
                          "start": {
                            "column": 20,
                            "line": 13
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "range": [
                        290,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    283,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 10,
                      "line": 13
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    300,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 13
                    },
                    "start": {
                      "column": 27,
                      "line": 13
                    }
                  }
                },
                "range": [
                  283,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              277,
              304
            ],
            "loc": {
              "end": {
                "column": 31,
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    321,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
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
                    309,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
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
                    317,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                },
                "range": [
                  309,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                309,
                325
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              309,
              326
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          201,
          328
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 15,
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
        "name": "two",
        "optional": false,
        "range": [
          195,
          198
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        186,
        328
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 10
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
                  "range": [
                    359,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 18
                    },
                    "start": {
                      "column": 10,
                      "line": 18
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          367,
                          368
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 18
                          },
                          "start": {
                            "column": 18,
                            "line": 18
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
                          370,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 18
                          },
                          "start": {
                            "column": 21,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        367,
                        371
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 18,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          373,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 18
                          },
                          "start": {
                            "column": 24,
                            "line": 18
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          376,
                          377
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 18
                          },
                          "start": {
                            "column": 27,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        373,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    365,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
                    }
                  }
                },
                "range": [
                  359,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              353,
              380
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          430,
                          431
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 20
                          },
                          "start": {
                            "column": 11,
                            "line": 20
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          430,
                          431
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 20
                          },
                          "start": {
                            "column": 11,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        430,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          436,
                          439
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 20
                          },
                          "start": {
                            "column": 17,
                            "line": 20
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "range": [
                        433,
                        439
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 20
                        },
                        "start": {
                          "column": 14,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    429,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 10,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    443,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 20
                    },
                    "start": {
                      "column": 24,
                      "line": 20
                    }
                  }
                },
                "range": [
                  429,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              423,
              447
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          347,
          497
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "three",
        "optional": false,
        "range": [
          339,
          344
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [],
      "range": [
        330,
        497
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 17
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
                  "range": [
                    527,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          535,
                          536
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 25
                          },
                          "start": {
                            "column": 18,
                            "line": 25
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
                          538,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 25
                          },
                          "start": {
                            "column": 21,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        535,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 25
                        },
                        "start": {
                          "column": 18,
                          "line": 25
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          541,
                          542
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 25
                          },
                          "start": {
                            "column": 24,
                            "line": 25
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          544,
                          545
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 25
                          },
                          "start": {
                            "column": 27,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        541,
                        545
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
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
                    533,
                    547
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  }
                },
                "range": [
                  527,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              521,
              548
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 25
              },
              "start": {
                "column": 4,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          598,
                          599
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 27
                          },
                          "start": {
                            "column": 11,
                            "line": 27
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "range": [
                          601,
                          602
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 27
                          },
                          "start": {
                            "column": 14,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        598,
                        602
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 27
                        },
                        "start": {
                          "column": 11,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          607,
                          610
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 27
                          },
                          "start": {
                            "column": 20,
                            "line": 27
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "range": [
                        604,
                        610
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
                  ],
                  "range": [
                    597,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 27
                    },
                    "start": {
                      "column": 10,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    614,
                    617
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 27
                    },
                    "start": {
                      "column": 27,
                      "line": 27
                    }
                  }
                },
                "range": [
                  597,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              591,
              618
            ],
            "loc": {
              "end": {
                "column": 31,
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
          515,
          668
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 16,
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
        "name": "four",
        "optional": false,
        "range": [
          508,
          512
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [],
      "range": [
        499,
        668
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
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
