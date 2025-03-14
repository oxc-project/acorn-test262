__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    538
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                20
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  17,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              20
            ],
            "loc": {
              "end": {
                "column": 20,
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
            20
          ],
          "loc": {
            "end": {
              "column": 20,
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
      "kind": "let",
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
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
          36,
          278
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                42,
                53
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                53,
                67
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  65,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
                    "line": 5
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
                        "column": 25,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 5
                      }
                    },
                    "range": [
                      55,
                      63
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        57,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
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
                    54,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              42,
              67
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "range": [
                    74,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 7
                    }
                  }
                },
                "range": [
                  73,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                82,
                88
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                88,
                102
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  100,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 8
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
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    },
                    "range": [
                      90,
                      98
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        92,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 8
                        },
                        "start": {
                          "column": 14,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    89,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "range": [
              73,
              102
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "range": [
                    109,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "range": [
                  108,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                121,
                122
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
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                122,
                136
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  134,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 11
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
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 11,
                        "line": 11
                      }
                    },
                    "range": [
                      124,
                      132
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        126,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    123,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                  "column": 23,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "range": [
              108,
              136
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "range": [
                    143,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 13
                    },
                    "start": {
                      "column": 5,
                      "line": 13
                    }
                  }
                },
                "range": [
                  142,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              }
            ],
            "definite": false,
            "key": {
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
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                152,
                160
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  154,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "value": null,
            "range": [
              142,
              161
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "range": [
                    168,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 16
                    },
                    "start": {
                      "column": 5,
                      "line": 16
                    }
                  }
                },
                "range": [
                  167,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                183,
                189
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                189,
                203
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  201,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 17
                  },
                  "start": {
                    "column": 29,
                    "line": 17
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
                        "column": 27,
                        "line": 17
                      },
                      "start": {
                        "column": 19,
                        "line": 17
                      }
                    },
                    "range": [
                      191,
                      199
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        193,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 17
                        },
                        "start": {
                          "column": 21,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    190,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 18,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 17
                },
                "start": {
                  "column": 17,
                  "line": 17
                }
              }
            },
            "range": [
              167,
              203
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "range": [
                    210,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 19
                    },
                    "start": {
                      "column": 5,
                      "line": 19
                    }
                  }
                },
                "range": [
                  209,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                229,
                230
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                230,
                244
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  242,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 20
                  },
                  "start": {
                    "column": 28,
                    "line": 20
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
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    },
                    "range": [
                      232,
                      240
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        234,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 20
                        },
                        "start": {
                          "column": 20,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    231,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 17,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "range": [
              209,
              244
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "range": [
                    251,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 22
                    },
                    "start": {
                      "column": 5,
                      "line": 22
                    }
                  }
                },
                "range": [
                  250,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                266,
                267
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              },
              "range": [
                267,
                275
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  269,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 23
                  },
                  "start": {
                    "column": 14,
                    "line": 23
                  }
                }
              }
            },
            "value": null,
            "range": [
              250,
              276
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 23
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
            "line": 24
          },
          "start": {
            "column": 8,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "range": [
              24,
              27
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 3
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          "range": [
            23,
            27
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          34,
          35
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        23,
        278
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            294,
            536
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  300,
                  311
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
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
                  311,
                  325
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    323,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 27
                    },
                    "start": {
                      "column": 27,
                      "line": 27
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
                          "column": 25,
                          "line": 27
                        },
                        "start": {
                          "column": 17,
                          "line": 27
                        }
                      },
                      "range": [
                        313,
                        321
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          315,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 27
                          },
                          "start": {
                            "column": 19,
                            "line": 27
                          }
                        }
                      }
                    },
                    "range": [
                      312,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 27
                      },
                      "start": {
                        "column": 16,
                        "line": 27
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 27
                  },
                  "start": {
                    "column": 15,
                    "line": 27
                  }
                }
              },
              "range": [
                300,
                325
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      332,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 29
                      },
                      "start": {
                        "column": 5,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    331,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "range": [
                  340,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
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
                  346,
                  360
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    358,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 30
                    },
                    "start": {
                      "column": 22,
                      "line": 30
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
                          "column": 20,
                          "line": 30
                        },
                        "start": {
                          "column": 12,
                          "line": 30
                        }
                      },
                      "range": [
                        348,
                        356
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          350,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 30
                          },
                          "start": {
                            "column": 14,
                            "line": 30
                          }
                        }
                      }
                    },
                    "range": [
                      347,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 30
                      },
                      "start": {
                        "column": 11,
                        "line": 30
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              },
              "range": [
                331,
                360
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      367,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 32
                      },
                      "start": {
                        "column": 5,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    366,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 32
                    },
                    "start": {
                      "column": 4,
                      "line": 32
                    }
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  379,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  380,
                  394
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    392,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
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
                          "column": 19,
                          "line": 33
                        },
                        "start": {
                          "column": 11,
                          "line": 33
                        }
                      },
                      "range": [
                        382,
                        390
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          384,
                          390
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 33
                          },
                          "start": {
                            "column": 13,
                            "line": 33
                          }
                        }
                      }
                    },
                    "range": [
                      381,
                      390
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 10,
                        "line": 33
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              },
              "range": [
                366,
                394
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      401,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 35
                      },
                      "start": {
                        "column": 5,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    400,
                    404
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
                    }
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  409,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
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
                    "column": 13,
                    "line": 36
                  },
                  "start": {
                    "column": 5,
                    "line": 36
                  }
                },
                "range": [
                  410,
                  418
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    412,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 36
                    },
                    "start": {
                      "column": 7,
                      "line": 36
                    }
                  }
                }
              },
              "value": null,
              "range": [
                400,
                419
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      426,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 38
                      },
                      "start": {
                        "column": 5,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    425,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 38
                    }
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "range": [
                  441,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 39
                  },
                  "start": {
                    "column": 11,
                    "line": 39
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  447,
                  461
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    459,
                    461
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 39
                    },
                    "start": {
                      "column": 29,
                      "line": 39
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
                          "column": 27,
                          "line": 39
                        },
                        "start": {
                          "column": 19,
                          "line": 39
                        }
                      },
                      "range": [
                        449,
                        457
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          451,
                          457
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 39
                          },
                          "start": {
                            "column": 21,
                            "line": 39
                          }
                        }
                      }
                    },
                    "range": [
                      448,
                      457
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 39
                      },
                      "start": {
                        "column": 18,
                        "line": 39
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 39
                  },
                  "start": {
                    "column": 17,
                    "line": 39
                  }
                }
              },
              "range": [
                425,
                461
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      468,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 41
                      },
                      "start": {
                        "column": 5,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    467,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
                    }
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  487,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 42
                  },
                  "start": {
                    "column": 15,
                    "line": 42
                  }
                }
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  488,
                  502
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    500,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 42
                    },
                    "start": {
                      "column": 28,
                      "line": 42
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
                          "column": 26,
                          "line": 42
                        },
                        "start": {
                          "column": 18,
                          "line": 42
                        }
                      },
                      "range": [
                        490,
                        498
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          492,
                          498
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 42
                          },
                          "start": {
                            "column": 20,
                            "line": 42
                          }
                        }
                      }
                    },
                    "range": [
                      489,
                      498
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 42
                      },
                      "start": {
                        "column": 17,
                        "line": 42
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 42
                  },
                  "start": {
                    "column": 16,
                    "line": 42
                  }
                }
              },
              "range": [
                467,
                502
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      509,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 44
                      },
                      "start": {
                        "column": 5,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    508,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 44
                    },
                    "start": {
                      "column": 4,
                      "line": 44
                    }
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  524,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 45
                  },
                  "start": {
                    "column": 11,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                  525,
                  533
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    527,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 45
                    },
                    "start": {
                      "column": 14,
                      "line": 45
                    }
                  }
                }
              },
              "value": null,
              "range": [
                508,
                534
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 46
            },
            "start": {
              "column": 14,
              "line": 26
            }
          }
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "range": [
                282,
                285
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
              281,
              285
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 1,
                "line": 26
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            292,
            293
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 26
            },
            "start": {
              "column": 12,
              "line": 26
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          281,
          536
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 1,
            "line": 26
          }
        }
      },
      "range": [
        280,
        538
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 46
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
      "column": 3,
      "line": 46
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
