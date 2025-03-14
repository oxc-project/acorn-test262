__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    365
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "each",
        "optional": false,
        "range": [
          17,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cases",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 1
              },
              "start": {
                "column": 57,
                "line": 1
              }
            },
            "range": [
              57,
              75
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  72,
                  75
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        73,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 1
                        },
                        "start": {
                          "column": 73,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      73,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 1
                      },
                      "start": {
                        "column": 73,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 1
                  },
                  "start": {
                    "column": 72,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  59,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 1
                  },
                  "start": {
                    "column": 59,
                    "line": 1
                  }
                }
              },
              "range": [
                59,
                75
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 1
                },
                "start": {
                  "column": 59,
                  "line": 1
                }
              }
            }
          },
          "range": [
            52,
            75
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 1
            },
            "start": {
              "column": 52,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 111,
            "line": 1
          },
          "start": {
            "column": 76,
            "line": 1
          }
        },
        "range": [
          76,
          111
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 1
                  },
                  "start": {
                    "column": 81,
                    "line": 1
                  }
                },
                "range": [
                  81,
                  102
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          87,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 1
                          },
                          "start": {
                            "column": 87,
                            "line": 1
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 1
                          },
                          "start": {
                            "column": 91,
                            "line": 1
                          }
                        },
                        "range": [
                          91,
                          94
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              93,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 1
                              },
                              "start": {
                                "column": 93,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            93,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 94,
                              "line": 1
                            },
                            "start": {
                              "column": 93,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        84,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 1
                        },
                        "start": {
                          "column": 84,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 102,
                        "line": 1
                      },
                      "start": {
                        "column": 96,
                        "line": 1
                      }
                    },
                    "range": [
                      96,
                      102
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        99,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 1
                        },
                        "start": {
                          "column": 99,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    83,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 102,
                      "line": 1
                    },
                    "start": {
                      "column": 83,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                79,
                102
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 1
                },
                "start": {
                  "column": 79,
                  "line": 1
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 111,
                "line": 1
              },
              "start": {
                "column": 104,
                "line": 1
              }
            },
            "range": [
              104,
              111
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                107,
                111
              ],
              "loc": {
                "end": {
                  "column": 111,
                  "line": 1
                },
                "start": {
                  "column": 107,
                  "line": 1
                }
              }
            }
          },
          "range": [
            78,
            111
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 1
            },
            "start": {
              "column": 78,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        },
        "range": [
          21,
          51
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  45,
                  50
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      46,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 1
                      },
                      "start": {
                        "column": 46,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 1
                  },
                  "start": {
                    "column": 45,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  32,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              },
              "range": [
                32,
                50
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              22,
              50
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        112
      ],
      "loc": {
        "end": {
          "column": 112,
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
            "name": "cases",
            "optional": false,
            "range": [
              120,
              125
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
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        135,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 4
                        },
                        "start": {
                          "column": 5,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "'1'",
                      "value": "1",
                      "range": [
                        138,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
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
                    134,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        149,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 5
                        },
                        "start": {
                          "column": 5,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "'2'",
                      "value": "2",
                      "range": [
                        152,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
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
                    148,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                128,
                159
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  163,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 6
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              },
              "range": [
                163,
                168
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              }
            },
            "range": [
              128,
              168
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            120,
            168
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        114,
        169
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "eacher",
            "optional": false,
            "range": [
              177,
              183
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cases",
                "optional": false,
                "range": [
                  191,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "each",
              "optional": false,
              "range": [
                186,
                190
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              186,
              197
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 8
              }
            }
          },
          "range": [
            177,
            197
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        171,
        198
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      223,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    223,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      230,
                      231
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    230,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                217,
                234
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 10
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
                "name": "a",
                "optional": false,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              {
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
                    "column": 12,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              207,
              234
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 7,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "eacher",
          "optional": false,
          "range": [
            200,
            206
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          200,
          235
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        200,
        236
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 13
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
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
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              333,
                              334
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
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              336,
                              337
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
                          }
                        ],
                        "optional": false,
                        "range": [
                          332,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 17
                          },
                          "start": {
                            "column": 10,
                            "line": 17
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          341,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        332,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 17
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    326,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      351,
                      352
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
                  "range": [
                    351,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      358,
                      359
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
                  "range": [
                    358,
                    360
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
                }
              ],
              "range": [
                320,
                362
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    311,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "range": [
                  308,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              307,
              362
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 7,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "eacher",
          "optional": false,
          "range": [
            300,
            306
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          300,
          363
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        300,
        364
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
