__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    477
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          445
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                15,
                26
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                26,
                443
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        54,
                        58
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        48,
                        51
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      39,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          68,
                          71
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
                      "optional": false,
                      "range": [
                        68,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      68,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            88,
                            89
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            92,
                            93
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          88,
                          93
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      84,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
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
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 9
                              },
                              "start": {
                                "column": 17,
                                "line": 9
                              }
                            },
                            "range": [
                              112,
                              117
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                114,
                                117
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 9
                                },
                                "start": {
                                  "column": 19,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            107,
                            117
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "FunctionExpression",
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
                                        "name": "CScriptIO",
                                        "optional": false,
                                        "range": [
                                          150,
                                          159
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "FunctionExpression",
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
                                                      "name": "fso",
                                                      "optional": false,
                                                      "range": [
                                                        196,
                                                        199
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
                                                    "init": {
                                                      "type": "Literal",
                                                      "raw": "0",
                                                      "value": 0,
                                                      "range": [
                                                        202,
                                                        203
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 27,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 26,
                                                          "line": 11
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      196,
                                                      203
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 27,
                                                        "line": 11
                                                      },
                                                      "start": {
                                                        "column": 20,
                                                        "line": 11
                                                      }
                                                    }
                                                  }
                                                ],
                                                "declare": false,
                                                "kind": "var",
                                                "range": [
                                                  192,
                                                  203
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 27,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 16,
                                                    "line": 11
                                                  }
                                                }
                                              },
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
                                                        "name": "readFile",
                                                        "optional": false,
                                                        "range": [
                                                          250,
                                                          258
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 28,
                                                            "line": 14
                                                          },
                                                          "start": {
                                                            "column": 20,
                                                            "line": 14
                                                          }
                                                        }
                                                      },
                                                      "kind": "init",
                                                      "method": false,
                                                      "optional": false,
                                                      "shorthand": false,
                                                      "value": {
                                                        "type": "FunctionExpression",
                                                        "async": false,
                                                        "body": {
                                                          "type": "BlockStatement",
                                                          "body": [
                                                            {
                                                              "type": "ReturnStatement",
                                                              "argument": {
                                                                "type": "CallExpression",
                                                                "arguments": [],
                                                                "callee": {
                                                                  "type": "MemberExpression",
                                                                  "computed": false,
                                                                  "object": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "fso",
                                                                    "optional": false,
                                                                    "range": [
                                                                      324,
                                                                      327
                                                                    ],
                                                                    "loc": {
                                                                      "end": {
                                                                        "column": 34,
                                                                        "line": 15
                                                                      },
                                                                      "start": {
                                                                        "column": 31,
                                                                        "line": 15
                                                                      }
                                                                    }
                                                                  },
                                                                  "optional": false,
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "toString",
                                                                    "optional": false,
                                                                    "range": [
                                                                      328,
                                                                      336
                                                                    ],
                                                                    "loc": {
                                                                      "end": {
                                                                        "column": 43,
                                                                        "line": 15
                                                                      },
                                                                      "start": {
                                                                        "column": 35,
                                                                        "line": 15
                                                                      }
                                                                    }
                                                                  },
                                                                  "range": [
                                                                    324,
                                                                    336
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 43,
                                                                      "line": 15
                                                                    },
                                                                    "start": {
                                                                      "column": 31,
                                                                      "line": 15
                                                                    }
                                                                  }
                                                                },
                                                                "optional": false,
                                                                "range": [
                                                                  324,
                                                                  338
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 45,
                                                                    "line": 15
                                                                  },
                                                                  "start": {
                                                                    "column": 31,
                                                                    "line": 15
                                                                  }
                                                                }
                                                              },
                                                              "range": [
                                                                317,
                                                                339
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 46,
                                                                  "line": 15
                                                                },
                                                                "start": {
                                                                  "column": 24,
                                                                  "line": 15
                                                                }
                                                              }
                                                            }
                                                          ],
                                                          "range": [
                                                            291,
                                                            361
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 21,
                                                              "line": 16
                                                            },
                                                            "start": {
                                                              "column": 61,
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
                                                            "name": "path",
                                                            "optional": false,
                                                            "typeAnnotation": {
                                                              "type": "TSTypeAnnotation",
                                                              "loc": {
                                                                "end": {
                                                                  "column": 51,
                                                                  "line": 14
                                                                },
                                                                "start": {
                                                                  "column": 43,
                                                                  "line": 14
                                                                }
                                                              },
                                                              "range": [
                                                                273,
                                                                281
                                                              ],
                                                              "typeAnnotation": {
                                                                "type": "TSStringKeyword",
                                                                "range": [
                                                                  275,
                                                                  281
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 51,
                                                                    "line": 14
                                                                  },
                                                                  "start": {
                                                                    "column": 45,
                                                                    "line": 14
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "range": [
                                                              269,
                                                              281
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 51,
                                                                "line": 14
                                                              },
                                                              "start": {
                                                                "column": 39,
                                                                "line": 14
                                                              }
                                                            }
                                                          }
                                                        ],
                                                        "returnType": {
                                                          "type": "TSTypeAnnotation",
                                                          "loc": {
                                                            "end": {
                                                              "column": 60,
                                                              "line": 14
                                                            },
                                                            "start": {
                                                              "column": 52,
                                                              "line": 14
                                                            }
                                                          },
                                                          "range": [
                                                            282,
                                                            290
                                                          ],
                                                          "typeAnnotation": {
                                                            "type": "TSStringKeyword",
                                                            "range": [
                                                              284,
                                                              290
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 60,
                                                                "line": 14
                                                              },
                                                              "start": {
                                                                "column": 54,
                                                                "line": 14
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "range": [
                                                          260,
                                                          361
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 21,
                                                            "line": 16
                                                          },
                                                          "start": {
                                                            "column": 30,
                                                            "line": 14
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        250,
                                                        361
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 21,
                                                          "line": 16
                                                        },
                                                        "start": {
                                                          "column": 20,
                                                          "line": 14
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "range": [
                                                    228,
                                                    379
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 17,
                                                      "line": 17
                                                    },
                                                    "start": {
                                                      "column": 23,
                                                      "line": 13
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  221,
                                                  379
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 17,
                                                    "line": 17
                                                  },
                                                  "start": {
                                                    "column": 16,
                                                    "line": 13
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              174,
                                              393
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 13,
                                                "line": 18
                                              },
                                              "start": {
                                                "column": 40,
                                                "line": 10
                                              }
                                            }
                                          },
                                          "declare": false,
                                          "expression": false,
                                          "generator": false,
                                          "id": null,
                                          "params": [],
                                          "range": [
                                            163,
                                            393
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 13,
                                              "line": 18
                                            },
                                            "start": {
                                              "column": 29,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          162,
                                          396
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 18
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        150,
                                        396
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 10
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    146,
                                    397
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 10
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "range": [
                                      417,
                                      422
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "range": [
                                    410,
                                    423
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 19
                                    }
                                  }
                                }
                              ],
                              "range": [
                                132,
                                433
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 20
                                },
                                "start": {
                                  "column": 37,
                                  "line": 9
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "range": [
                              121,
                              433
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 20
                              },
                              "start": {
                                "column": 26,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            120,
                            436
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 20
                            },
                            "start": {
                              "column": 25,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          107,
                          436
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 20
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      103,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  29,
                  443
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 3
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
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              15,
              443
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        445
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
            "name": "b",
            "optional": false,
            "range": [
              451,
              452
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                459,
                460
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
                }
              }
            },
            "range": [
              455,
              462
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            451,
            462
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        447,
        463
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              465,
              466
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
            "name": "foo",
            "optional": false,
            "range": [
              467,
              470
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          },
          "range": [
            465,
            470
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          465,
          472
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
        465,
        473
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
