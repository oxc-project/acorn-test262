__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    310
  ],
  "body": [
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    28,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      32,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      35,
                      45
                    ],
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            43,
                            44
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 2
                            },
                            "start": {
                              "column": 23,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          36,
                          44
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 2
                          },
                          "start": {
                            "column": 16,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    32,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  28,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              24,
              48
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    },
                    "range": [
                      58,
                      88
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y2",
                            "optional": false,
                            "range": [
                              70,
                              72
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 4
                              },
                              "start": {
                                "column": 8,
                                "line": 4
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
                                "column": 20,
                                "line": 4
                              },
                              "start": {
                                "column": 10,
                                "line": 4
                              }
                            },
                            "range": [
                              72,
                              82
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "range": [
                                  81,
                                  82
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                74,
                                82
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 4
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            70,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        60,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    57,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": null,
                "range": [
                  57,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              53,
              89
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                101,
                102
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
              94,
              103
            ],
            "loc": {
              "end": {
                "column": 13,
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
          18,
          105
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 18,
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
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          15
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
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        105
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      140,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      143,
                      153
                    ],
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            151,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 11
                            },
                            "start": {
                              "column": 23,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          144,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    140,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                },
                "range": [
                  136,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              132,
              156
            ],
            "loc": {
              "end": {
                "column": 28,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    },
                    "range": [
                      166,
                      197
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y2",
                            "optional": false,
                            "range": [
                              178,
                              180
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 13
                              },
                              "start": {
                                "column": 8,
                                "line": 13
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
                                "column": 20,
                                "line": 13
                              },
                              "start": {
                                "column": 10,
                                "line": 13
                              }
                            },
                            "range": [
                              180,
                              190
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "range": [
                                  189,
                                  190
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                182,
                                190
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 13
                                },
                                "start": {
                                  "column": 12,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            178,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        168,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    165,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": null,
                "range": [
                  165,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              161,
              197
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                209,
                210
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              202,
              211
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          126,
          213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 18,
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
        "name": "bar",
        "optional": false,
        "range": [
          117,
          120
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 10
          },
          "start": {
            "column": 12,
            "line": 10
          }
        },
        "range": [
          120,
          123
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
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              121,
              122
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        108,
        213
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
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
            "name": "a",
            "optional": false,
            "range": [
              219,
              220
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                223,
                226
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                226,
                234
              ],
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    227,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              223,
              236
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          "range": [
            219,
            236
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        215,
        237
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 18
        },
        "start": {
          "column": 0,
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
            "name": "b",
            "optional": false,
            "range": [
              242,
              243
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                246,
                249
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                249,
                257
              ],
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    250,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "range": [
              246,
              259
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            242,
            259
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        238,
        260
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          298,
          301
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 21
          },
          "start": {
            "column": 36,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          271,
          275
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 21
              },
              "start": {
                "column": 18,
                "line": 21
              }
            },
            "range": [
              280,
              290
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  289,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 21
                  },
                  "start": {
                    "column": 27,
                    "line": 21
                  }
                }
              },
              "range": [
                282,
                290
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 21
                },
                "start": {
                  "column": 20,
                  "line": 21
                }
              }
            }
          },
          "range": [
            279,
            290
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 21
            },
            "start": {
              "column": 17,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 21
          },
          "start": {
            "column": 29,
            "line": 21
          }
        },
        "range": [
          291,
          297
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            293,
            297
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 21
            },
            "start": {
              "column": 31,
              "line": 21
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 21
          }
        },
        "range": [
          275,
          278
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
                276,
                277
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 14,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              276,
              277
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 21
              },
              "start": {
                "column": 14,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        262,
        301
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "b",
            "optional": false,
            "range": [
              307,
              308
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 5,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            302,
            306
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          302,
          309
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
      "range": [
        302,
        310
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 8,
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
