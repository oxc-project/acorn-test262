__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    445
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          34
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                18,
                21
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                23,
                31
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  25,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              18,
              32
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        34
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          58,
          80
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                64,
                67
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              },
              "range": [
                69,
                77
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  71,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            },
            "static": false,
            "range": [
              64,
              78
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
            "column": 22,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              56,
              57
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            56,
            57
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          46,
          47
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        36,
        80
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          104,
          126
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                110,
                113
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              },
              "range": [
                115,
                123
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  117,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              }
            },
            "static": false,
            "range": [
              110,
              124
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 22,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              102,
              103
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
            102,
            103
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
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          92,
          93
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        82,
        126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                133,
                136
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    135,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 13
                    },
                    "start": {
                      "column": 7,
                      "line": 13
                    }
                  }
                },
                "range": [
                  135,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              132,
              136
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
          },
          "init": null,
          "range": [
            132,
            136
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
      "declare": false,
      "kind": "var",
      "range": [
        128,
        137
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                143,
                146
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    145,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "range": [
                  145,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
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
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            142,
            146
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        138,
        147
      ],
      "loc": {
        "end": {
          "column": 9,
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
                  "column": 8,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
                }
              },
              "range": [
                153,
                156
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    155,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                },
                "range": [
                  155,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 15
                  },
                  "start": {
                    "column": 7,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              152,
              156
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            152,
            156
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        148,
        157
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
                  "range": [
                    202,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    206,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  202,
                  207
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              198,
              208
            ],
            "loc": {
              "end": {
                "column": 14,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  213,
                  214
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  217,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              "range": [
                213,
                218
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              213,
              219
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                "name": "y",
                "optional": false,
                "range": [
                  256,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  260,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "range": [
                256,
                261
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              256,
              262
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                "name": "y",
                "optional": false,
                "range": [
                  299,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  303,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              "range": [
                299,
                304
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              299,
              305
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                "name": "y",
                "optional": false,
                "range": [
                  342,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    349,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 22
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      347,
                      348
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    347,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 9,
                      "line": 22
                    }
                  }
                },
                "range": [
                  346,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              "range": [
                342,
                350
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              342,
              351
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                "name": "y",
                "optional": false,
                "range": [
                  356,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    363,
                    364
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
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      361,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    361,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                },
                "range": [
                  360,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              },
              "range": [
                356,
                364
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              356,
              365
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                "name": "y",
                "optional": false,
                "range": [
                  402,
                  403
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
              "right": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    409,
                    410
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      407,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 24
                      },
                      "start": {
                        "column": 9,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    407,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "range": [
                  406,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "range": [
                402,
                410
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              402,
              411
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          192,
          445
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 33,
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
        "name": "foo2",
        "optional": false,
        "range": [
          168,
          172
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
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
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 28,
                "line": 17
              }
            },
            "range": [
              187,
              190
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  189,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 17
                  },
                  "start": {
                    "column": 30,
                    "line": 17
                  }
                }
              },
              "range": [
                189,
                190
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 17
                },
                "start": {
                  "column": 30,
                  "line": 17
                }
              }
            }
          },
          "range": [
            186,
            190
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 17
            },
            "start": {
              "column": 27,
              "line": 17
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 17
          },
          "start": {
            "column": 13,
            "line": 17
          }
        },
        "range": [
          172,
          185
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  183,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 17
                  },
                  "start": {
                    "column": 24,
                    "line": 17
                  }
                }
              },
              "range": [
                183,
                184
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 17
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
                173,
                174
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
            "out": false,
            "range": [
              173,
              184
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 14,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        159,
        445
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
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
      "column": 1,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
