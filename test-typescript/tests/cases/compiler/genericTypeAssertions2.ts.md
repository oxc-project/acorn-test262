__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    347
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          28
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                16,
                26
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 18,
                        "line": 1
                      }
                    },
                    "range": [
                      18,
                      21
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          20,
                          21
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 1
                          },
                          "start": {
                            "column": 20,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        20,
                        21
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 1
                        },
                        "start": {
                          "column": 20,
                          "line": 1
                        }
                      }
                    }
                  },
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
                }
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 11,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        28
      ],
      "loc": {
        "end": {
          "column": 28,
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
          53,
          98
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                59,
                62
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                62,
                96
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        85,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      78,
                      90
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
                  68,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 3
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
                    "column": 12,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                },
                "range": [
                  64,
                  67
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      66,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    66,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "range": [
              59,
              96
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
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
            "line": 6
          },
          "start": {
            "column": 24,
            "line": 2
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
          35,
          36
        ],
        "loc": {
          "end": {
            "column": 7,
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
          48,
          49
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          49,
          52
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
                50,
                51
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "range": [
              50,
              51
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 21,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 20,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        },
        "range": [
          36,
          39
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
                37,
                38
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
            "out": false,
            "range": [
              37,
              38
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
          }
        ]
      },
      "range": [
        29,
        98
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
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
            "name": "foo",
            "optional": false,
            "range": [
              104,
              107
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                115,
                123
              ],
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    116,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              110,
              125
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          "range": [
            104,
            125
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        100,
        126
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 8
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              },
              "range": [
                132,
                143
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    135,
                    143
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        136,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 9
                        },
                        "start": {
                          "column": 9,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    134,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                },
                "range": [
                  134,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              131,
              143
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  161,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 9
                  },
                  "start": {
                    "column": 34,
                    "line": 9
                  }
                }
              },
              "range": [
                157,
                164
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  148,
                  156
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      149,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 22,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  147,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              },
              "range": [
                147,
                156
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            },
            "range": [
              146,
              164
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          },
          "range": [
            131,
            164
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        127,
        165
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              },
              "range": [
                172,
                183
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    175,
                    183
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        176,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    174,
                    175
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
                "range": [
                  174,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              170,
              183
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  201,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              "range": [
                197,
                204
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 31,
                  "line": 10
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  188,
                  196
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      189,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  187,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              },
              "range": [
                187,
                196
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "range": [
              186,
              204
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          },
          "range": [
            170,
            204
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        166,
        205
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 10
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 11
                }
              },
              "range": [
                221,
                232
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    224,
                    232
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        225,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 11
                        },
                        "start": {
                          "column": 10,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    223,
                    224
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
                "range": [
                  223,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              219,
              232
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  250,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              },
              "range": [
                246,
                253
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 31,
                  "line": 11
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  237,
                  245
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      238,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  236,
                  237
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
                236,
                245
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            },
            "range": [
              235,
              253
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 20,
                "line": 11
              }
            }
          },
          "range": [
            219,
            253
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        215,
        254
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 11
        },
        "start": {
          "column": 0,
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                270,
                281
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    273,
                    281
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        274,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 12
                        },
                        "start": {
                          "column": 10,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    272,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "range": [
                  272,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              268,
              281
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  299,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 12
                  },
                  "start": {
                    "column": 35,
                    "line": 12
                  }
                }
              },
              "range": [
                295,
                302
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 12
                },
                "start": {
                  "column": 31,
                  "line": 12
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  286,
                  294
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      287,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 12
                      },
                      "start": {
                        "column": 23,
                        "line": 12
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 12
                  },
                  "start": {
                    "column": 22,
                    "line": 12
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  285,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 12
                  },
                  "start": {
                    "column": 21,
                    "line": 12
                  }
                }
              },
              "range": [
                285,
                294
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            },
            "range": [
              284,
              302
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 12
              },
              "start": {
                "column": 20,
                "line": 12
              }
            }
          },
          "range": [
            268,
            302
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        264,
        303
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              },
              "range": [
                310,
                321
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    313,
                    321
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        314,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    312,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "range": [
                  312,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              308,
              321
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                335,
                337
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 13
                },
                "start": {
                  "column": 31,
                  "line": 13
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  326,
                  334
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      327,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 22,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  325,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 13
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                }
              },
              "range": [
                325,
                334
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
                }
              }
            },
            "range": [
              324,
              337
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 13
              },
              "start": {
                "column": 20,
                "line": 13
              }
            }
          },
          "range": [
            308,
            337
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        304,
        338
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 13
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
      "column": 43,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
