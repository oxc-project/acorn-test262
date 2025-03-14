__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    448
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 9,
                        "line": 2
                      }
                    },
                    "range": [
                      20,
                      26
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "asdf",
                        "optional": false,
                        "range": [
                          22,
                          26
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 2
                          },
                          "start": {
                            "column": 11,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        22,
                        26
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
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
                    19,
                    26
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": null,
                "range": [
                  19,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
              15,
              27
            ],
            "loc": {
              "end": {
                "column": 16,
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
                  "range": [
                    36,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      40,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "range": [
                      44,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    40,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                },
                "range": [
                  36,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
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
              32,
              49
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 4,
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      68,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asdf",
                      "optional": false,
                      "range": [
                        63,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      63,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    62,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  58,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              54,
              70
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  136,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "qwerty",
                "optional": false,
                "range": [
                  128,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              },
              "range": [
                124,
                143
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                107,
                114
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "range": [
                101,
                105
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              97,
              143
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                153,
                160
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  178,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "asdf",
                "optional": false,
                "range": [
                  172,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
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
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              149,
              197
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      252,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qwerty",
                  "optional": false,
                  "range": [
                    232,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
                      "line": 16
                    }
                  }
                },
                "range": [
                  227,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      288,
                      294
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
                "test": null,
                "range": [
                  267,
                  294
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "range": [
                211,
                215
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "range": [
              203,
              300
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 15
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
                    310,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "range": [
                      320,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    314,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  310,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              306,
              325
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                    334,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "qwerty",
                          "optional": false,
                          "range": [
                            357,
                            363
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 23
                            },
                            "start": {
                              "column": 31,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          350,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 23
                          },
                          "start": {
                            "column": 24,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      348,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 23
                      },
                      "start": {
                        "column": 22,
                        "line": 23
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
                      "name": "asdf",
                      "optional": false,
                      "range": [
                        339,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 23
                        },
                        "start": {
                          "column": 13,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    338,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 23
                    },
                    "start": {
                      "column": 12,
                      "line": 23
                    }
                  }
                },
                "range": [
                  334,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              330,
              366
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
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
                          395,
                          396
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
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          399,
                          400
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 26
                          },
                          "start": {
                            "column": 16,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        395,
                        400
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 26
                        },
                        "start": {
                          "column": 12,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    391,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                381,
                407
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                379,
                380
              ],
              "decorators": [],
              "name": "N",
              "optional": false,
              "loc": {
                "end": {
                  "column": 12,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
                }
              }
            },
            "kind": "module",
            "range": [
              372,
              407
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                419,
                420
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                423,
                424
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              }
            },
            "range": [
              412,
              425
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                437,
                438
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "range": [
                441,
                445
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              }
            },
            "range": [
              430,
              446
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
          }
        ],
        "range": [
          9,
          448
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          8
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        448
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
