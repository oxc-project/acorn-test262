__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    573
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              },
              "range": [
                12,
                29
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      14,
                      20
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 1
                      },
                      "start": {
                        "column": 14,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      23,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
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
                  14,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              },
              "range": [
                44,
                62
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      46,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      55,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  46,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              35,
              62
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            35,
            62
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        31,
        63
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrFunc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              },
              "range": [
                77,
                100
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      79,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 28,
                          "line": 3
                        }
                      },
                      "range": [
                        92,
                        99
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          95,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 3
                          },
                          "start": {
                            "column": 31,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      89,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 25,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  79,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              68,
              100
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            68,
            100
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        64,
        101
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              },
              "range": [
                115,
                133
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      117,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      126,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
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
                  117,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              106,
              133
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
          "init": null,
          "range": [
            106,
            133
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        102,
        133
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 4
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                141,
                149
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  143,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              138,
              149
            ],
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
          "init": null,
          "range": [
            138,
            149
          ],
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        134,
        150
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 5
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              },
              "range": [
                158,
                166
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  160,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              155,
              166
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            155,
            166
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        151,
        167
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 6
        },
        "start": {
          "column": 0,
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
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              },
              "range": [
                176,
                185
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  178,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              172,
              185
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            172,
            185
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        168,
        186
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              },
              "range": [
                195,
                207
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  },
                  "range": [
                    200,
                    207
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      203,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  197,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              191,
              207
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            191,
            207
          ],
          "loc": {
            "end": {
              "column": 20,
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
        187,
        208
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "range": [
                  279,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "range": [
                  285,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "range": [
                279,
                293
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              279,
              294
            ],
            "loc": {
              "end": {
                "column": 19,
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
          273,
          296
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "range": [
                  250,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "range": [
                  256,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              },
              "range": [
                250,
                264
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              250,
              265
            ],
            "loc": {
              "end": {
                "column": 19,
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
          244,
          267
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 34,
            "line": 10
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Literal",
          "raw": "\"string\"",
          "value": "string",
          "range": [
            214,
            222
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        },
        "right": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "range": [
              234,
              242
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 24,
                "line": 10
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            227,
            242
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 10
            },
            "start": {
              "column": 17,
              "line": 10
            }
          }
        },
        "range": [
          214,
          242
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "range": [
        210,
        296
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
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "range": [
                  371,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                "name": "strOrFunc",
                "optional": false,
                "range": [
                  377,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              },
              "range": [
                371,
                386
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              371,
              387
            ],
            "loc": {
              "end": {
                "column": 20,
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
          365,
          389
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "range": [
                  340,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrFunc",
                "optional": false,
                "range": [
                  347,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              },
              "range": [
                340,
                356
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              340,
              357
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          334,
          359
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 37,
            "line": 16
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Literal",
          "raw": "\"function\"",
          "value": "function",
          "range": [
            301,
            311
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "right": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrFunc",
            "optional": false,
            "range": [
              323,
              332
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 26,
                "line": 16
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            316,
            332
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 16
            },
            "start": {
              "column": 19,
              "line": 16
            }
          }
        },
        "range": [
          301,
          332
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        297,
        389
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "range": [
                  461,
                  465
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "range": [
                  468,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              },
              "range": [
                461,
                477
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              461,
              478
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          455,
          480
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "range": [
                  431,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "range": [
                  437,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 23
                  },
                  "start": {
                    "column": 10,
                    "line": 23
                  }
                }
              },
              "range": [
                431,
                446
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              431,
              447
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          425,
          449
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 35,
            "line": 22
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Literal",
          "raw": "\"number\"",
          "value": "number",
          "range": [
            394,
            402
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
        "right": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "range": [
              414,
              423
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 22
              },
              "start": {
                "column": 24,
                "line": 22
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            407,
            423
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 22
            },
            "start": {
              "column": 17,
              "line": 22
            }
          }
        },
        "range": [
          394,
          423
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 22
          },
          "start": {
            "column": 4,
            "line": 22
          }
        }
      },
      "range": [
        390,
        480
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "range": [
                  554,
                  557
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "range": [
                  560,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 32
                  },
                  "start": {
                    "column": 10,
                    "line": 32
                  }
                }
              },
              "range": [
                554,
                569
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              554,
              570
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          548,
          572
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "range": [
                  523,
                  527
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
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "range": [
                  530,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 29
                  },
                  "start": {
                    "column": 11,
                    "line": 29
                  }
                }
              },
              "range": [
                523,
                539
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              523,
              540
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          517,
          542
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 36,
            "line": 28
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Literal",
          "raw": "\"boolean\"",
          "value": "boolean",
          "range": [
            485,
            494
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        },
        "right": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "range": [
              506,
              515
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 28
              },
              "start": {
                "column": 25,
                "line": 28
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            499,
            515
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 28
            },
            "start": {
              "column": 18,
              "line": 28
            }
          }
        },
        "range": [
          485,
          515
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 28
          },
          "start": {
            "column": 4,
            "line": 28
          }
        }
      },
      "range": [
        481,
        572
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 28
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
