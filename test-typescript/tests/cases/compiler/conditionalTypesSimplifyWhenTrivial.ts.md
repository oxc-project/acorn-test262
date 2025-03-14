__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1670
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
            "name": "fn1",
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
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "range": [
                91,
                97
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  },
                  "range": [
                    32,
                    76
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        38,
                        76
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              39,
                              45
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 2
                              },
                              "start": {
                                "column": 17,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            39,
                            45
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 2
                            },
                            "start": {
                              "column": 17,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              54,
                              75
                            ],
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      61,
                                      67
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "range": [
                                    61,
                                    67
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 2
                                    }
                                  }
                                },
                                "range": [
                                  55,
                                  67
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 2
                                  }
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "range": [
                                  69,
                                  74
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 2
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 2
                              },
                              "start": {
                                "column": 32,
                                "line": 2
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "range": [
                              47,
                              54
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 2
                              },
                              "start": {
                                "column": 25,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            47,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 2
                            },
                            "start": {
                              "column": 25,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 2
                        },
                        "start": {
                          "column": 16,
                          "line": 2
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        34,
                        38
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      34,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  26,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 1,
                  "line": 3
                }
              },
              "range": [
                79,
                87
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "range": [
                    81,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 3,
                      "line": 3
                    }
                  }
                },
                "range": [
                  81,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 3,
                    "line": 3
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              },
              "range": [
                12,
                20
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "range": [
                      13,
                      19
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                    19
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
              12,
              97
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            97
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        98
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 3
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    },
                    "range": [
                      149,
                      152
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          151,
                          152
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
                        151,
                        152
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
                    }
                  },
                  "range": [
                    148,
                    152
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
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    155,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                },
                "range": [
                  148,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              144,
              157
            ],
            "loc": {
              "end": {
                "column": 17,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  162,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  166,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              },
              "range": [
                162,
                167
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              162,
              168
            ],
            "loc": {
              "end": {
                "column": 10,
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
          138,
          170
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 38,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "range": [
          109,
          112
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
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
                "column": 36,
                "line": 5
              },
              "start": {
                "column": 17,
                "line": 5
              }
            },
            "range": [
              117,
              136
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  126,
                  136
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
                        127,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 27,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      127,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 27,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSNeverKeyword",
                    "range": [
                      130,
                      135
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 30,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "range": [
                  119,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 5
                  }
                }
              },
              "range": [
                119,
                136
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            }
          },
          "range": [
            116,
            136
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        },
        "range": [
          112,
          115
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
                113,
                114
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              113,
              114
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        100,
        170
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "name": "fn3",
            "optional": false,
            "range": [
              178,
              181
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "range": [
                270,
                276
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 12
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  },
                  "range": [
                    204,
                    255
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        210,
                        255
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              211,
                              217
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 11
                              },
                              "start": {
                                "column": 17,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            211,
                            217
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 11
                            },
                            "start": {
                              "column": 17,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              226,
                              254
                            ],
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      233,
                                      239
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    233,
                                    239
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  227,
                                  239
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
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      247,
                                      253
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 53,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    247,
                                    253
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 53,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  241,
                                  253
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 11
                              },
                              "start": {
                                "column": 32,
                                "line": 11
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Extract",
                            "optional": false,
                            "range": [
                              219,
                              226
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 11
                              },
                              "start": {
                                "column": 25,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            219,
                            254
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 11
                            },
                            "start": {
                              "column": 25,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        206,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      206,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  198,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 1,
                  "line": 12
                }
              },
              "range": [
                258,
                266
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "range": [
                    260,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 3,
                      "line": 12
                    }
                  }
                },
                "range": [
                  260,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 12
                  },
                  "start": {
                    "column": 3,
                    "line": 12
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              },
              "range": [
                184,
                192
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "range": [
                      185,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                    185,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
              184,
              276
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "range": [
            178,
            276
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        172,
        277
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 12
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    },
                    "range": [
                      324,
                      327
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          326,
                          327
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
                        326,
                        327
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
                    }
                  },
                  "range": [
                    323,
                    327
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
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    330,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 15
                    },
                    "start": {
                      "column": 15,
                      "line": 15
                    }
                  }
                },
                "range": [
                  323,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              319,
              332
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                "name": "x",
                "optional": false,
                "range": [
                  337,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  341,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "range": [
                337,
                342
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              337,
              343
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          313,
          345
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 34,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "range": [
          288,
          291
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
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
                "column": 32,
                "line": 14
              },
              "start": {
                "column": 17,
                "line": 14
              }
            },
            "range": [
              296,
              311
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  305,
                  311
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
                        306,
                        307
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 14
                        },
                        "start": {
                          "column": 27,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      306,
                      307
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        309,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 14
                        },
                        "start": {
                          "column": 30,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      309,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 14
                      },
                      "start": {
                        "column": 30,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 14
                  },
                  "start": {
                    "column": 26,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "range": [
                  298,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 14
                  },
                  "start": {
                    "column": 19,
                    "line": 14
                  }
                }
              },
              "range": [
                298,
                311
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 14
                },
                "start": {
                  "column": 19,
                  "line": 14
                }
              }
            }
          },
          "range": [
            295,
            311
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 14
            },
            "start": {
              "column": 16,
              "line": 14
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 14
          }
        },
        "range": [
          291,
          294
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
                292,
                293
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              292,
              293
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        279,
        345
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              },
              "range": [
                360,
                391
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    369,
                    391
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            370,
                            376
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 19
                            },
                            "start": {
                              "column": 23,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            379,
                            385
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 19
                            },
                            "start": {
                              "column": 32,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        370,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 19
                        },
                        "start": {
                          "column": 23,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        387,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 19
                        },
                        "start": {
                          "column": 40,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 19
                    },
                    "start": {
                      "column": 22,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Extract",
                  "optional": false,
                  "range": [
                    362,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                },
                "range": [
                  362,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 19
                  },
                  "start": {
                    "column": 15,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              359,
              391
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            359,
            391
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 19
            },
            "start": {
              "column": 12,
              "line": 19
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        347,
        392
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractWithDefault",
        "optional": false,
        "range": [
          444,
          462
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              482,
              483
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 21
              },
              "start": {
                "column": 43,
                "line": 21
              }
            }
          },
          "range": [
            482,
            483
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 21
            },
            "start": {
              "column": 43,
              "line": 21
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              492,
              493
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 21
              },
              "start": {
                "column": 53,
                "line": 21
              }
            }
          },
          "range": [
            492,
            493
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 21
            },
            "start": {
              "column": 53,
              "line": 21
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "range": [
              500,
              501
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 21
              },
              "start": {
                "column": 61,
                "line": 21
              }
            }
          },
          "range": [
            500,
            501
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 21
            },
            "start": {
              "column": 61,
              "line": 21
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              496,
              497
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
            496,
            497
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
          482,
          501
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 21
          },
          "start": {
            "column": 43,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 21
          },
          "start": {
            "column": 23,
            "line": 21
          }
        },
        "range": [
          462,
          479
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
                463,
                464
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 21
                },
                "start": {
                  "column": 24,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              463,
              464
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 21
              },
              "start": {
                "column": 24,
                "line": 21
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                466,
                467
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
            "out": false,
            "range": [
              466,
              467
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                473,
                478
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 21
                },
                "start": {
                  "column": 34,
                  "line": 21
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                469,
                470
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 21
                },
                "start": {
                  "column": 30,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              469,
              478
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 21
              },
              "start": {
                "column": 30,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        439,
        502
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExcludeWithDefault",
        "optional": false,
        "range": [
          509,
          527
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              547,
              548
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 23
              },
              "start": {
                "column": 43,
                "line": 23
              }
            }
          },
          "range": [
            547,
            548
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 23
            },
            "start": {
              "column": 43,
              "line": 23
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              557,
              558
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 23
              },
              "start": {
                "column": 53,
                "line": 23
              }
            }
          },
          "range": [
            557,
            558
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 23
            },
            "start": {
              "column": 53,
              "line": 23
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              565,
              566
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 23
              },
              "start": {
                "column": 61,
                "line": 23
              }
            }
          },
          "range": [
            565,
            566
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 23
            },
            "start": {
              "column": 61,
              "line": 23
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "range": [
              561,
              562
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 23
              },
              "start": {
                "column": 57,
                "line": 23
              }
            }
          },
          "range": [
            561,
            562
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 23
            },
            "start": {
              "column": 57,
              "line": 23
            }
          }
        },
        "range": [
          547,
          566
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 23
          },
          "start": {
            "column": 43,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 23
          },
          "start": {
            "column": 23,
            "line": 23
          }
        },
        "range": [
          527,
          544
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
                  "column": 25,
                  "line": 23
                },
                "start": {
                  "column": 24,
                  "line": 23
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
                "column": 25,
                "line": 23
              },
              "start": {
                "column": 24,
                "line": 23
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                531,
                532
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 23
                },
                "start": {
                  "column": 27,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              531,
              532
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 23
              },
              "start": {
                "column": 27,
                "line": 23
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                538,
                543
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 23
                },
                "start": {
                  "column": 34,
                  "line": 23
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                534,
                535
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 23
                },
                "start": {
                  "column": 30,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              534,
              543
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 30,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        504,
        567
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 23
        },
        "start": {
          "column": 0,
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
            "name": "fn5",
            "optional": false,
            "range": [
              575,
              578
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "range": [
                671,
                677
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  },
                  "range": [
                    601,
                    656
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        607,
                        656
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              608,
                              614
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 26
                              },
                              "start": {
                                "column": 17,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            608,
                            614
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 26
                            },
                            "start": {
                              "column": 17,
                              "line": 26
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              634,
                              655
                            ],
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      641,
                                      647
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    641,
                                    647
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  635,
                                  647
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 26
                                  }
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "range": [
                                  649,
                                  654
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 58,
                                    "line": 26
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 26
                              },
                              "start": {
                                "column": 43,
                                "line": 26
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExcludeWithDefault",
                            "optional": false,
                            "range": [
                              616,
                              634
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 26
                              },
                              "start": {
                                "column": 25,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            616,
                            655
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 26
                            },
                            "start": {
                              "column": 25,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 26
                        },
                        "start": {
                          "column": 16,
                          "line": 26
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        603,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 26
                        },
                        "start": {
                          "column": 12,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      603,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 26
                      },
                      "start": {
                        "column": 12,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  595,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 27
                },
                "start": {
                  "column": 1,
                  "line": 27
                }
              },
              "range": [
                659,
                667
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "range": [
                    661,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 27
                    },
                    "start": {
                      "column": 3,
                      "line": 27
                    }
                  }
                },
                "range": [
                  661,
                  667
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 27
                  },
                  "start": {
                    "column": 3,
                    "line": 27
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              },
              "range": [
                581,
                589
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "range": [
                      582,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    582,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 25
                    },
                    "start": {
                      "column": 13,
                      "line": 25
                    }
                  }
                }
              ]
            },
            "range": [
              581,
              677
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 27
              },
              "start": {
                "column": 12,
                "line": 25
              }
            }
          },
          "range": [
            575,
            677
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        569,
        678
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 30
                      },
                      "start": {
                        "column": 9,
                        "line": 30
                      }
                    },
                    "range": [
                      740,
                      743
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          742,
                          743
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 30
                          },
                          "start": {
                            "column": 11,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        742,
                        743
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 30
                        },
                        "start": {
                          "column": 11,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    739,
                    743
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    746,
                    747
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 30
                    },
                    "start": {
                      "column": 15,
                      "line": 30
                    }
                  }
                },
                "range": [
                  739,
                  747
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              735,
              748
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                "name": "x",
                "optional": false,
                "range": [
                  753,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  757,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              },
              "range": [
                753,
                758
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              753,
              759
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          729,
          761
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 49,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "range": [
          689,
          692
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
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
                "column": 47,
                "line": 29
              },
              "start": {
                "column": 17,
                "line": 29
              }
            },
            "range": [
              697,
              727
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  717,
                  727
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
                        718,
                        719
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 29
                        },
                        "start": {
                          "column": 38,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      718,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 29
                      },
                      "start": {
                        "column": 38,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "TSNeverKeyword",
                    "range": [
                      721,
                      726
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 29
                      },
                      "start": {
                        "column": 41,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 29
                  },
                  "start": {
                    "column": 37,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExcludeWithDefault",
                "optional": false,
                "range": [
                  699,
                  717
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 29
                  },
                  "start": {
                    "column": 19,
                    "line": 29
                  }
                }
              },
              "range": [
                699,
                727
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 29
                },
                "start": {
                  "column": 19,
                  "line": 29
                }
              }
            }
          },
          "range": [
            696,
            727
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 29
            },
            "start": {
              "column": 16,
              "line": 29
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 29
          },
          "start": {
            "column": 12,
            "line": 29
          }
        },
        "range": [
          692,
          695
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
                693,
                694
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 29
                },
                "start": {
                  "column": 13,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              693,
              694
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 29
              },
              "start": {
                "column": 13,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        680,
        761
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "fn7",
            "optional": false,
            "range": [
              769,
              772
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "range": [
                872,
                878
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 35
                    },
                    "start": {
                      "column": 10,
                      "line": 35
                    }
                  },
                  "range": [
                    795,
                    857
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        801,
                        857
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              802,
                              808
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 35
                              },
                              "start": {
                                "column": 17,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            802,
                            808
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 35
                            },
                            "start": {
                              "column": 17,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              828,
                              856
                            ],
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      835,
                                      841
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "range": [
                                    835,
                                    841
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 35
                                    }
                                  }
                                },
                                "range": [
                                  829,
                                  841
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 35
                                  }
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      849,
                                      855
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 64,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "range": [
                                    849,
                                    855
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 70,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 64,
                                      "line": 35
                                    }
                                  }
                                },
                                "range": [
                                  843,
                                  855
                                ],
                                "loc": {
                                  "end": {
                                    "column": 70,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 58,
                                    "line": 35
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 35
                              },
                              "start": {
                                "column": 43,
                                "line": 35
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExtractWithDefault",
                            "optional": false,
                            "range": [
                              810,
                              828
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 35
                              },
                              "start": {
                                "column": 25,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            810,
                            856
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 35
                            },
                            "start": {
                              "column": 25,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 35
                        },
                        "start": {
                          "column": 16,
                          "line": 35
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        797,
                        801
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 35
                        },
                        "start": {
                          "column": 12,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      797,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 35
                      },
                      "start": {
                        "column": 12,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  789,
                  857
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 36
                },
                "start": {
                  "column": 1,
                  "line": 36
                }
              },
              "range": [
                860,
                868
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "range": [
                    862,
                    868
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 36
                    },
                    "start": {
                      "column": 3,
                      "line": 36
                    }
                  }
                },
                "range": [
                  862,
                  868
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 36
                  },
                  "start": {
                    "column": 3,
                    "line": 36
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 34
                },
                "start": {
                  "column": 12,
                  "line": 34
                }
              },
              "range": [
                775,
                783
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "range": [
                      776,
                      782
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    776,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 34
                    },
                    "start": {
                      "column": 13,
                      "line": 34
                    }
                  }
                }
              ]
            },
            "range": [
              775,
              878
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 36
              },
              "start": {
                "column": 12,
                "line": 34
              }
            }
          },
          "range": [
            769,
            878
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        763,
        879
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 39
                      },
                      "start": {
                        "column": 9,
                        "line": 39
                      }
                    },
                    "range": [
                      937,
                      940
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          939,
                          940
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 39
                          },
                          "start": {
                            "column": 11,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        939,
                        940
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 39
                        },
                        "start": {
                          "column": 11,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    936,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    943,
                    944
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 39
                    },
                    "start": {
                      "column": 15,
                      "line": 39
                    }
                  }
                },
                "range": [
                  936,
                  944
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              932,
              945
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
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
                "name": "x",
                "optional": false,
                "range": [
                  950,
                  951
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  954,
                  955
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              },
              "range": [
                950,
                955
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              950,
              956
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          926,
          958
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 45,
            "line": 38
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "range": [
          890,
          893
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 38
          },
          "start": {
            "column": 9,
            "line": 38
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
                "column": 43,
                "line": 38
              },
              "start": {
                "column": 17,
                "line": 38
              }
            },
            "range": [
              898,
              924
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  918,
                  924
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
                        919,
                        920
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 38
                        },
                        "start": {
                          "column": 38,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      919,
                      920
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 38
                      },
                      "start": {
                        "column": 38,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        922,
                        923
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 38
                        },
                        "start": {
                          "column": 41,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      922,
                      923
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 38
                      },
                      "start": {
                        "column": 41,
                        "line": 38
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 38
                  },
                  "start": {
                    "column": 37,
                    "line": 38
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtractWithDefault",
                "optional": false,
                "range": [
                  900,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 38
                  },
                  "start": {
                    "column": 19,
                    "line": 38
                  }
                }
              },
              "range": [
                900,
                924
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 38
                },
                "start": {
                  "column": 19,
                  "line": 38
                }
              }
            }
          },
          "range": [
            897,
            924
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 38
            },
            "start": {
              "column": 16,
              "line": 38
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 38
          },
          "start": {
            "column": 12,
            "line": 38
          }
        },
        "range": [
          893,
          896
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
                894,
                895
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 38
                },
                "start": {
                  "column": 13,
                  "line": 38
                }
              }
            },
            "out": false,
            "range": [
              894,
              895
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 38
              },
              "start": {
                "column": 13,
                "line": 38
              }
            }
          }
        ]
      },
      "range": [
        881,
        958
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TemplatedConditional",
        "optional": false,
        "range": [
          965,
          985
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 43
          },
          "start": {
            "column": 5,
            "line": 43
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TCheck",
            "optional": false,
            "range": [
              1021,
              1027
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 43
              },
              "start": {
                "column": 61,
                "line": 43
              }
            }
          },
          "range": [
            1021,
            1027
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 43
            },
            "start": {
              "column": 61,
              "line": 43
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TExtends",
            "optional": false,
            "range": [
              1036,
              1044
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 43
              },
              "start": {
                "column": 76,
                "line": 43
              }
            }
          },
          "range": [
            1036,
            1044
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 43
            },
            "start": {
              "column": 76,
              "line": 43
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFalse",
            "optional": false,
            "range": [
              1055,
              1061
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 43
              },
              "start": {
                "column": 95,
                "line": 43
              }
            }
          },
          "range": [
            1055,
            1061
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 43
            },
            "start": {
              "column": 95,
              "line": 43
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TTrue",
            "optional": false,
            "range": [
              1047,
              1052
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 43
              },
              "start": {
                "column": 87,
                "line": 43
              }
            }
          },
          "range": [
            1047,
            1052
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 43
            },
            "start": {
              "column": 87,
              "line": 43
            }
          }
        },
        "range": [
          1021,
          1061
        ],
        "loc": {
          "end": {
            "column": 101,
            "line": 43
          },
          "start": {
            "column": 61,
            "line": 43
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 43
          },
          "start": {
            "column": 25,
            "line": 43
          }
        },
        "range": [
          985,
          1018
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TCheck",
              "optional": false,
              "range": [
                986,
                992
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 43
                },
                "start": {
                  "column": 26,
                  "line": 43
                }
              }
            },
            "out": false,
            "range": [
              986,
              992
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 43
              },
              "start": {
                "column": 26,
                "line": 43
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TExtends",
              "optional": false,
              "range": [
                994,
                1002
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 43
                },
                "start": {
                  "column": 34,
                  "line": 43
                }
              }
            },
            "out": false,
            "range": [
              994,
              1002
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 43
              },
              "start": {
                "column": 34,
                "line": 43
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTrue",
              "optional": false,
              "range": [
                1004,
                1009
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 43
                },
                "start": {
                  "column": 44,
                  "line": 43
                }
              }
            },
            "out": false,
            "range": [
              1004,
              1009
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 43
              },
              "start": {
                "column": 44,
                "line": 43
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFalse",
              "optional": false,
              "range": [
                1011,
                1017
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 43
                },
                "start": {
                  "column": 51,
                  "line": 43
                }
              }
            },
            "out": false,
            "range": [
              1011,
              1017
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 43
              },
              "start": {
                "column": 51,
                "line": 43
              }
            }
          }
        ]
      },
      "range": [
        960,
        1062
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "fn9",
            "optional": false,
            "range": [
              1070,
              1073
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 45
              },
              "start": {
                "column": 6,
                "line": 45
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "range": [
                1189,
                1195
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 47
                },
                "start": {
                  "column": 13,
                  "line": 47
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
                    }
                  },
                  "range": [
                    1096,
                    1174
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1102,
                        1174
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              1103,
                              1109
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 46
                              },
                              "start": {
                                "column": 17,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1103,
                            1109
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 46
                            },
                            "start": {
                              "column": 17,
                              "line": 46
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1131,
                              1173
                            ],
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      1138,
                                      1144
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 52,
                                        "line": 46
                                      }
                                    }
                                  },
                                  "range": [
                                    1138,
                                    1144
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 46
                                    }
                                  }
                                },
                                "range": [
                                  1132,
                                  1144
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 46
                                  }
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "range": [
                                  1146,
                                  1151
                                ],
                                "loc": {
                                  "end": {
                                    "column": 65,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 46
                                  }
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "range": [
                                  1153,
                                  1158
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 67,
                                    "line": 46
                                  }
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      1166,
                                      1172
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 80,
                                        "line": 46
                                      }
                                    }
                                  },
                                  "range": [
                                    1166,
                                    1172
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 80,
                                      "line": 46
                                    }
                                  }
                                },
                                "range": [
                                  1160,
                                  1172
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 74,
                                    "line": 46
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 46
                              },
                              "start": {
                                "column": 45,
                                "line": 46
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplatedConditional",
                            "optional": false,
                            "range": [
                              1111,
                              1131
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 46
                              },
                              "start": {
                                "column": 25,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1111,
                            1173
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 46
                            },
                            "start": {
                              "column": 25,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 46
                        },
                        "start": {
                          "column": 16,
                          "line": 46
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        1098,
                        1102
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1098,
                      1174
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 46
                      },
                      "start": {
                        "column": 12,
                        "line": 46
                      }
                    }
                  }
                },
                "range": [
                  1090,
                  1174
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 47
                },
                "start": {
                  "column": 1,
                  "line": 47
                }
              },
              "range": [
                1177,
                1185
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "range": [
                    1179,
                    1185
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 47
                    },
                    "start": {
                      "column": 3,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1179,
                  1185
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 47
                  },
                  "start": {
                    "column": 3,
                    "line": 47
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 45
                },
                "start": {
                  "column": 12,
                  "line": 45
                }
              },
              "range": [
                1076,
                1084
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "range": [
                      1077,
                      1083
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 45
                      },
                      "start": {
                        "column": 13,
                        "line": 45
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1077,
                    1083
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 45
                    },
                    "start": {
                      "column": 13,
                      "line": 45
                    }
                  }
                }
              ]
            },
            "range": [
              1076,
              1195
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 47
              },
              "start": {
                "column": 12,
                "line": 45
              }
            }
          },
          "range": [
            1070,
            1195
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1064,
        1196
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 45
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 50
                      },
                      "start": {
                        "column": 9,
                        "line": 50
                      }
                    },
                    "range": [
                      1271,
                      1274
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1273,
                          1274
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 50
                          },
                          "start": {
                            "column": 11,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1273,
                        1274
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 50
                        },
                        "start": {
                          "column": 11,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    1270,
                    1274
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1277,
                    1278
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1270,
                  1278
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1266,
              1279
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
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
                "name": "x",
                "optional": false,
                "range": [
                  1284,
                  1285
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1288,
                  1289
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              },
              "range": [
                1284,
                1289
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              1284,
              1290
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          1260,
          1292
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 62,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "range": [
          1207,
          1211
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
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
                "column": 60,
                "line": 49
              },
              "start": {
                "column": 18,
                "line": 49
              }
            },
            "range": [
              1216,
              1258
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1238,
                  1258
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
                        1239,
                        1240
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 49
                        },
                        "start": {
                          "column": 41,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1239,
                      1240
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 49
                      },
                      "start": {
                        "column": 41,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "TSNeverKeyword",
                    "range": [
                      1242,
                      1247
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 49
                      },
                      "start": {
                        "column": 44,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "TSNeverKeyword",
                    "range": [
                      1249,
                      1254
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 49
                      },
                      "start": {
                        "column": 51,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1256,
                        1257
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 49
                        },
                        "start": {
                          "column": 58,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1256,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 49
                      },
                      "start": {
                        "column": 58,
                        "line": 49
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 49
                  },
                  "start": {
                    "column": 40,
                    "line": 49
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplatedConditional",
                "optional": false,
                "range": [
                  1218,
                  1238
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 49
                  },
                  "start": {
                    "column": 20,
                    "line": 49
                  }
                }
              },
              "range": [
                1218,
                1258
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 49
                },
                "start": {
                  "column": 20,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1215,
            1258
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 49
            },
            "start": {
              "column": 17,
              "line": 49
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 49
          },
          "start": {
            "column": 13,
            "line": 49
          }
        },
        "range": [
          1211,
          1214
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
                1212,
                1213
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 14,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1212,
              1213
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 49
              },
              "start": {
                "column": 14,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        1198,
        1292
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 49
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
            "name": "fn11",
            "optional": false,
            "range": [
              1300,
              1304
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "range": [
                1427,
                1433
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 56
                },
                "start": {
                  "column": 13,
                  "line": 56
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 55
                    },
                    "start": {
                      "column": 10,
                      "line": 55
                    }
                  },
                  "range": [
                    1327,
                    1412
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1333,
                        1412
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              1334,
                              1340
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 55
                              },
                              "start": {
                                "column": 17,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            1334,
                            1340
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 55
                            },
                            "start": {
                              "column": 17,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1362,
                              1411
                            ],
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      1369,
                                      1375
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 52,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "range": [
                                    1369,
                                    1375
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 55
                                    }
                                  }
                                },
                                "range": [
                                  1363,
                                  1375
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 55
                                  }
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      1383,
                                      1389
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 72,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 66,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "range": [
                                    1383,
                                    1389
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 72,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 66,
                                      "line": 55
                                    }
                                  }
                                },
                                "range": [
                                  1377,
                                  1389
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 55
                                  }
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "range": [
                                      1397,
                                      1403
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 80,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "range": [
                                    1397,
                                    1403
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 80,
                                      "line": 55
                                    }
                                  }
                                },
                                "range": [
                                  1391,
                                  1403
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 74,
                                    "line": 55
                                  }
                                }
                              },
                              {
                                "type": "TSNeverKeyword",
                                "range": [
                                  1405,
                                  1410
                                ],
                                "loc": {
                                  "end": {
                                    "column": 93,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 88,
                                    "line": 55
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 55
                              },
                              "start": {
                                "column": 45,
                                "line": 55
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplatedConditional",
                            "optional": false,
                            "range": [
                              1342,
                              1362
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 55
                              },
                              "start": {
                                "column": 25,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            1342,
                            1411
                          ],
                          "loc": {
                            "end": {
                              "column": 94,
                              "line": 55
                            },
                            "start": {
                              "column": 25,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 55
                        },
                        "start": {
                          "column": 16,
                          "line": 55
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        1329,
                        1333
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1329,
                      1412
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 55
                      },
                      "start": {
                        "column": 12,
                        "line": 55
                      }
                    }
                  }
                },
                "range": [
                  1321,
                  1412
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 56
                },
                "start": {
                  "column": 1,
                  "line": 56
                }
              },
              "range": [
                1415,
                1423
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "range": [
                    1417,
                    1423
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 56
                    },
                    "start": {
                      "column": 3,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1417,
                  1423
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 56
                  },
                  "start": {
                    "column": 3,
                    "line": 56
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 54
                },
                "start": {
                  "column": 13,
                  "line": 54
                }
              },
              "range": [
                1307,
                1315
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "range": [
                      1308,
                      1314
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 54
                      },
                      "start": {
                        "column": 14,
                        "line": 54
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1308,
                    1314
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 54
                    },
                    "start": {
                      "column": 14,
                      "line": 54
                    }
                  }
                }
              ]
            },
            "range": [
              1307,
              1433
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 56
              },
              "start": {
                "column": 13,
                "line": 54
              }
            }
          },
          "range": [
            1300,
            1433
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 56
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1294,
        1434
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 54
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 59
                      },
                      "start": {
                        "column": 9,
                        "line": 59
                      }
                    },
                    "range": [
                      1505,
                      1508
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1507,
                          1508
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 59
                          },
                          "start": {
                            "column": 11,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1507,
                        1508
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 59
                        },
                        "start": {
                          "column": 11,
                          "line": 59
                        }
                      }
                    }
                  },
                  "range": [
                    1504,
                    1508
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1511,
                    1512
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 59
                    },
                    "start": {
                      "column": 15,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1504,
                  1512
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 59
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1500,
              1513
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
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
                "name": "x",
                "optional": false,
                "range": [
                  1518,
                  1519
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1522,
                  1523
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              },
              "range": [
                1518,
                1523
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1518,
              1524
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1494,
          1526
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 58,
            "line": 58
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "range": [
          1445,
          1449
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 58
          },
          "start": {
            "column": 9,
            "line": 58
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
                "column": 56,
                "line": 58
              },
              "start": {
                "column": 18,
                "line": 58
              }
            },
            "range": [
              1454,
              1492
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1476,
                  1492
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
                        1477,
                        1478
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 58
                        },
                        "start": {
                          "column": 41,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1477,
                      1478
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 58
                      },
                      "start": {
                        "column": 41,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1480,
                        1481
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 58
                        },
                        "start": {
                          "column": 44,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1480,
                      1481
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 58
                      },
                      "start": {
                        "column": 44,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1483,
                        1484
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 58
                        },
                        "start": {
                          "column": 47,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1483,
                      1484
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 58
                      },
                      "start": {
                        "column": 47,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "TSNeverKeyword",
                    "range": [
                      1486,
                      1491
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 58
                      },
                      "start": {
                        "column": 50,
                        "line": 58
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 58
                  },
                  "start": {
                    "column": 40,
                    "line": 58
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplatedConditional",
                "optional": false,
                "range": [
                  1456,
                  1476
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 58
                  },
                  "start": {
                    "column": 20,
                    "line": 58
                  }
                }
              },
              "range": [
                1456,
                1492
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 58
                },
                "start": {
                  "column": 20,
                  "line": 58
                }
              }
            }
          },
          "range": [
            1453,
            1492
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 58
            },
            "start": {
              "column": 17,
              "line": 58
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 58
          },
          "start": {
            "column": 13,
            "line": 58
          }
        },
        "range": [
          1449,
          1452
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
                1450,
                1451
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 58
                },
                "start": {
                  "column": 14,
                  "line": 58
                }
              }
            },
            "out": false,
            "range": [
              1450,
              1451
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 58
              },
              "start": {
                "column": 14,
                "line": 58
              }
            }
          }
        ]
      },
      "range": [
        1436,
        1526
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 63
                },
                "start": {
                  "column": 13,
                  "line": 63
                }
              },
              "range": [
                1541,
                1546
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1543,
                  1546
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 63
                  },
                  "start": {
                    "column": 15,
                    "line": 63
                  }
                }
              }
            },
            "range": [
              1540,
              1546
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 63
              },
              "start": {
                "column": 12,
                "line": 63
              }
            }
          },
          "init": null,
          "range": [
            1540,
            1546
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 63
            },
            "start": {
              "column": 12,
              "line": 63
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1528,
        1547
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
            "name": "zee",
            "optional": false,
            "range": [
              1554,
              1557
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 64
              },
              "start": {
                "column": 6,
                "line": 64
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    1560,
                    1561
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 64
                    },
                    "start": {
                      "column": 12,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1560,
                  1562
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 64
                  },
                  "start": {
                    "column": 12,
                    "line": 64
                  }
                }
              },
              "range": [
                1560,
                1563
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 64
                },
                "start": {
                  "column": 12,
                  "line": 64
                }
              }
            },
            "range": [
              1560,
              1564
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 64
              },
              "start": {
                "column": 12,
                "line": 64
              }
            }
          },
          "range": [
            1554,
            1564
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 64
            },
            "start": {
              "column": 6,
              "line": 64
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1548,
        1565
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 65
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
