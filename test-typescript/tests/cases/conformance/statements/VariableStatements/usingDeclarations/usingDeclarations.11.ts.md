__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    515
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          10
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
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
        "name": "A",
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
        10
      ],
      "loc": {
        "end": {
          "column": 10,
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
          30,
          100
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                36,
                47
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
                47,
                98
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            66,
                            67
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 4
                            },
                            "start": {
                              "column": 14,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            70,
                            74
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
                        "range": [
                          66,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using",
                    "range": [
                      60,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
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
                        "type": "Super",
                        "range": [
                          84,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        84,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      84,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  50,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
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
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              36,
              98
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
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
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          17,
          19
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          28,
          29
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "range": [
        11,
        100
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          120,
          190
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                126,
                137
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                137,
                188
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          150,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        150,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      150,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            173,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 14,
                              "line": 11
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            177,
                            181
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
                        "range": [
                          173,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 11
                          },
                          "start": {
                            "column": 14,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using",
                    "range": [
                      167,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
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
                  140,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 9
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
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "range": [
              126,
              188
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 19,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          107,
          109
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          118,
          119
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
      },
      "range": [
        101,
        190
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          210,
          291
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                216,
                217
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                220,
                221
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "range": [
              216,
              222
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                227,
                238
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                238,
                289
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            257,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            261,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 17
                            },
                            "start": {
                              "column": 18,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          257,
                          265
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 17
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using",
                    "range": [
                      251,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          275,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 18
                          },
                          "start": {
                            "column": 8,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        275,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      275,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  241,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 18,
                    "line": 16
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
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              227,
              289
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 19,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "range": [
          197,
          199
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          208,
          209
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 14
          }
        }
      },
      "range": [
        191,
        291
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          311,
          397
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                317,
                328
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                328,
                395
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            363,
                            364
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 23
                            },
                            "start": {
                              "column": 14,
                              "line": 23
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            367,
                            371
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 23
                            },
                            "start": {
                              "column": 18,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          363,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 23
                          },
                          "start": {
                            "column": 14,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using",
                    "range": [
                      357,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          381,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        381,
                        388
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
                      381,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  347,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 34,
                    "line": 22
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 22
                        },
                        "start": {
                          "column": 24,
                          "line": 22
                        }
                      },
                      "range": [
                        337,
                        345
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          339,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 22
                          },
                          "start": {
                            "column": 26,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      336,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 22
                      },
                      "start": {
                        "column": 23,
                        "line": 22
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    329,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              }
            },
            "range": [
              317,
              395
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 19,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "range": [
          298,
          300
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          309,
          310
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        }
      },
      "range": [
        292,
        397
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          417,
          514
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                423,
                424
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                427,
                428
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "range": [
              423,
              429
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                434,
                445
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
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
                445,
                512
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            480,
                            481
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 30
                            },
                            "start": {
                              "column": 14,
                              "line": 30
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            484,
                            488
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 30
                            },
                            "start": {
                              "column": 18,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          480,
                          488
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 30
                          },
                          "start": {
                            "column": 14,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using",
                    "range": [
                      474,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          498,
                          503
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        498,
                        505
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      498,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  464,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 34,
                    "line": 29
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 29
                        },
                        "start": {
                          "column": 24,
                          "line": 29
                        }
                      },
                      "range": [
                        454,
                        462
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          456,
                          462
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 29
                          },
                          "start": {
                            "column": 26,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      453,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 29
                      },
                      "start": {
                        "column": 23,
                        "line": 29
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    446,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 29
                    },
                    "start": {
                      "column": 16,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              }
            },
            "range": [
              434,
              512
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 19,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "range": [
          404,
          406
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          415,
          416
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 27
          },
          "start": {
            "column": 17,
            "line": 27
          }
        }
      },
      "range": [
        398,
        514
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 34
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
