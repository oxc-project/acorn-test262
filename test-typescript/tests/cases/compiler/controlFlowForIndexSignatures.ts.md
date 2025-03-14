__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    525
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                13,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 13,
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
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                24
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  18,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              13,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "range": [
          11,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "boo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                37,
                42
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    39,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  39,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              34,
              42
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    47,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 19,
                      "line": 2
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'bar'",
                  "value": "bar",
                  "range": [
                    52,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 24,
                      "line": 2
                    }
                  }
                },
                "range": [
                  47,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              45,
              59
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          },
          "range": [
            34,
            59
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        28,
        60
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "ReturnStatement",
              "argument": null,
              "range": [
                104,
                111
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "aboo1",
                "optional": false,
                "range": [
                  97,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                96,
                102
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              92,
              111
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 4,
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
                  "name": "aboo2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    },
                    "range": [
                      127,
                      164
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 6
                                  }
                                },
                                "range": [
                                  135,
                                  143
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    137,
                                    143
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 6
                                    }
                                  }
                                }
                              },
                              "range": [
                                132,
                                143
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 6
                                },
                                "start": {
                                  "column": 20,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 6
                              },
                              "start": {
                                "column": 32,
                                "line": 6
                              }
                            },
                            "range": [
                              144,
                              162
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "aboo1",
                                  "optional": false,
                                  "range": [
                                    153,
                                    158
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 6
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "range": [
                                    159,
                                    162
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  153,
                                  162
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                146,
                                162
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 6
                                },
                                "start": {
                                  "column": 34,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            131,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
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
                        129,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    122,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
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
                  "name": "boo",
                  "optional": false,
                  "range": [
                    167,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 6
                    },
                    "start": {
                      "column": 55,
                      "line": 6
                    }
                  }
                },
                "range": [
                  122,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 58,
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
              116,
              171
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          86,
          173
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 24,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          71,
          72
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aboo1",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            },
            "range": [
              79,
              84
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  81,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              },
              "range": [
                81,
                84
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            }
          },
          "range": [
            73,
            84
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 4
            },
            "start": {
              "column": 11,
              "line": 4
            }
          }
        }
      ],
      "range": [
        62,
        173
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              },
              "range": [
                188,
                205
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        190,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      190,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      196,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  190,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              187,
              205
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            187,
            205
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        175,
        206
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "bboo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    },
                    "range": [
                      230,
                      263
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  238,
                                  246
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    240,
                                    246
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                235,
                                246
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 11
                                },
                                "start": {
                                  "column": 19,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 11
                              },
                              "start": {
                                "column": 31,
                                "line": 11
                              }
                            },
                            "range": [
                              247,
                              261
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "range": [
                                    256,
                                    257
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 11
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "range": [
                                    258,
                                    261
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  256,
                                  261
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                249,
                                261
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 11
                                },
                                "start": {
                                  "column": 33,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            234,
                            261
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 11
                            },
                            "start": {
                              "column": 18,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        232,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    226,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boo",
                  "optional": false,
                  "range": [
                    266,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 11
                    },
                    "start": {
                      "column": 50,
                      "line": 11
                    }
                  }
                },
                "range": [
                  226,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 53,
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
              220,
              270
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          214,
          272
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "range": [
          211,
          212
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "range": [
        207,
        272
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
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
          "name": "b",
          "optional": false,
          "range": [
            273,
            274
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "boo",
          "optional": false,
          "range": [
            277,
            280
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "range": [
          273,
          280
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        273,
        281
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "bboo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 14
                },
                "start": {
                  "column": 10,
                  "line": 14
                }
              },
              "range": [
                292,
                325
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          },
                          "range": [
                            300,
                            308
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              302,
                              308
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 14
                              },
                              "start": {
                                "column": 20,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          297,
                          308
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 14
                        },
                        "start": {
                          "column": 27,
                          "line": 14
                        }
                      },
                      "range": [
                        309,
                        323
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              318,
                              319
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 14
                              },
                              "start": {
                                "column": 36,
                                "line": 14
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              320,
                              323
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 14
                              },
                              "start": {
                                "column": 38,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            318,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 14
                            },
                            "start": {
                              "column": 36,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          311,
                          323
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 14
                          },
                          "start": {
                            "column": 29,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      296,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 14
                      },
                      "start": {
                        "column": 14,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  294,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 14
                  },
                  "start": {
                    "column": 12,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              288,
              325
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "boo",
            "optional": false,
            "range": [
              328,
              331
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 14
              },
              "start": {
                "column": 46,
                "line": 14
              }
            }
          },
          "range": [
            288,
            331
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        282,
        332
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              },
              "range": [
                347,
                364
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      349,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      358,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  349,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 15,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              346,
              364
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
          },
          "init": null,
          "range": [
            346,
            364
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
      "declare": true,
      "kind": "let",
      "range": [
        334,
        365
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                404,
                405
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 18
                          },
                          "start": {
                            "column": 19,
                            "line": 18
                          }
                        },
                        "range": [
                          414,
                          422
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            416,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 18
                            },
                            "start": {
                              "column": 21,
                              "line": 18
                            }
                          }
                        }
                      },
                      "range": [
                        411,
                        422
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 18
                      },
                      "start": {
                        "column": 28,
                        "line": 18
                      }
                    },
                    "range": [
                      423,
                      433
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          432,
                          433
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 18
                          },
                          "start": {
                            "column": 37,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        425,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 18
                        },
                        "start": {
                          "column": 30,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    410,
                    433
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 18
                    },
                    "start": {
                      "column": 15,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                408,
                435
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "range": [
              399,
              436
            ],
            "loc": {
              "end": {
                "column": 41,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boo1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    },
                    "range": [
                      451,
                      454
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          453,
                          454
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 19
                          },
                          "start": {
                            "column": 16,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        453,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 19
                        },
                        "start": {
                          "column": 16,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    447,
                    454
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
                        "name": "bar",
                        "optional": false,
                        "range": [
                          459,
                          462
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 22,
                            "line": 19
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "'works'",
                        "value": "works",
                        "range": [
                          464,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 19
                          },
                          "start": {
                            "column": 27,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        459,
                        471
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 22,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    457,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 19
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  }
                },
                "range": [
                  447,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              441,
              474
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                  "name": "boo2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 14,
                        "line": 20
                      }
                    },
                    "range": [
                      489,
                      492
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          491,
                          492
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 20
                          },
                          "start": {
                            "column": 16,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        491,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 20
                        },
                        "start": {
                          "column": 16,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    485,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 20
                    },
                    "start": {
                      "column": 10,
                      "line": 20
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
                        "name": "bar",
                        "optional": false,
                        "range": [
                          497,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 20
                          },
                          "start": {
                            "column": 22,
                            "line": 20
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
                          502,
                          503
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 20
                          },
                          "start": {
                            "column": 27,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        497,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 20
                        },
                        "start": {
                          "column": 22,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    495,
                    505
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 20
                    }
                  }
                },
                "range": [
                  485,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
              479,
              506
            ],
            "loc": {
              "end": {
                "column": 31,
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
          393,
          524
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 27,
            "line": 17
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              377,
              378
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 17
              },
              "start": {
                "column": 11,
                "line": 17
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            370,
            378
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "'string'",
          "value": "string",
          "range": [
            383,
            391
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 17
            },
            "start": {
              "column": 17,
              "line": 17
            }
          }
        },
        "range": [
          370,
          391
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "range": [
        366,
        524
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
