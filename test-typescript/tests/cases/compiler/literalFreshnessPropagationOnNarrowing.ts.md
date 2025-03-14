__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1302
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    24,
                    25
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
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    28,
                    32
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
                  24,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
            "kind": "let",
            "range": [
              20,
              33
            ],
            "loc": {
              "end": {
                "column": 17,
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
                  "name": "obj",
                  "optional": false,
                  "range": [
                    42,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          50,
                          51
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 3
                          },
                          "start": {
                            "column": 16,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          50,
                          51
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 3
                          },
                          "start": {
                            "column": 16,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        50,
                        51
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    48,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  }
                },
                "range": [
                  42,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
            "kind": "let",
            "range": [
              38,
              54
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    159,
                    162
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    163,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "range": [
                  159,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  167,
                  172
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
              },
              "range": [
                159,
                172
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              159,
              173
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          14,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 14,
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
        "name": "f1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                202,
                209
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    213,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      222,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 29,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    222,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 29,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                213,
                227
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 12
                },
                "start": {
                  "column": 20,
                  "line": 12
                }
              }
            },
            "range": [
              197,
              229
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementOrArray",
              "optional": false,
              "range": [
                239,
                253
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "range": [
                      256,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 13
                      },
                      "start": {
                        "column": 26,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    256,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "range": [
                        266,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 13
                        },
                        "start": {
                          "column": 36,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      266,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 13
                      },
                      "start": {
                        "column": 36,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    266,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 13
                    },
                    "start": {
                      "column": 36,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                256,
                275
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 13
                },
                "start": {
                  "column": 26,
                  "line": 13
                }
              }
            },
            "range": [
              234,
              276
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 13
              },
              "start": {
                "column": 4,
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
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 10,
                        "line": 14
                      }
                    },
                    "range": [
                      288,
                      297
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "range": [
                          290,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        290,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    286,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      300,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 14
                      },
                      "start": {
                        "column": 22,
                        "line": 14
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      308,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 14
                      },
                      "start": {
                        "column": 30,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    300,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 14
                    },
                    "start": {
                      "column": 22,
                      "line": 14
                    }
                  }
                },
                "range": [
                  286,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              282,
              312
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 14
              },
              "start": {
                "column": 4,
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 15
                      },
                      "start": {
                        "column": 11,
                        "line": 15
                      }
                    },
                    "range": [
                      324,
                      335
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "range": [
                            326,
                            333
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 15
                            },
                            "start": {
                              "column": 13,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          326,
                          333
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 15
                          },
                          "start": {
                            "column": 13,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        326,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    321,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      338,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 15
                      },
                      "start": {
                        "column": 25,
                        "line": 15
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      346,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 15
                      },
                      "start": {
                        "column": 33,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    338,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 15
                    },
                    "start": {
                      "column": 25,
                      "line": 15
                    }
                  }
                },
                "range": [
                  321,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
            "kind": "let",
            "range": [
              317,
              350
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 15
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
                  "name": "elOrA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    },
                    "range": [
                      364,
                      380
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "range": [
                          366,
                          380
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        366,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    359,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      383,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 16
                      },
                      "start": {
                        "column": 32,
                        "line": 16
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      391,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 16
                      },
                      "start": {
                        "column": 40,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    383,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 16
                    },
                    "start": {
                      "column": 32,
                      "line": 16
                    }
                  }
                },
                "range": [
                  359,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              355,
              395
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 10,
                        "line": 19
                      }
                    },
                    "range": [
                      437,
                      453
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "range": [
                          439,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        439,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 19
                        },
                        "start": {
                          "column": 12,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    435,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "range": [
                    456,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 19
                    },
                    "start": {
                      "column": 29,
                      "line": 19
                    }
                  }
                },
                "range": [
                  435,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              431,
              459
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 10,
                        "line": 20
                      }
                    },
                    "range": [
                      470,
                      486
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "range": [
                          472,
                          486
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 20
                          },
                          "start": {
                            "column": 12,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        472,
                        486
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 20
                        },
                        "start": {
                          "column": 12,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    468,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "range": [
                    489,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 20
                    },
                    "start": {
                      "column": 29,
                      "line": 20
                    }
                  }
                },
                "range": [
                  468,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              464,
              493
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 10,
                        "line": 21
                      }
                    },
                    "range": [
                      504,
                      520
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "range": [
                          506,
                          520
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        506,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    502,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "el",
                      "optional": false,
                      "range": [
                        524,
                        526
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 21
                        },
                        "start": {
                          "column": 30,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    523,
                    527
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 21
                    },
                    "start": {
                      "column": 29,
                      "line": 21
                    }
                  }
                },
                "range": [
                  502,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              498,
              528
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 22
                      },
                      "start": {
                        "column": 10,
                        "line": 22
                      }
                    },
                    "range": [
                      539,
                      555
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "range": [
                          541,
                          555
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        541,
                        555
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    537,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elOrA",
                        "optional": false,
                        "range": [
                          590,
                          595
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 22
                          },
                          "start": {
                            "column": 61,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "range": [
                      589,
                      596
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 22
                      },
                      "start": {
                        "column": 60,
                        "line": 22
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elOrA",
                    "optional": false,
                    "range": [
                      581,
                      586
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 22
                      },
                      "start": {
                        "column": 52,
                        "line": 22
                      }
                    }
                  },
                  "test": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elOrA",
                        "optional": false,
                        "range": [
                          572,
                          577
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 22
                          },
                          "start": {
                            "column": 43,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "range": [
                          558,
                          563
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 22
                          },
                          "start": {
                            "column": 29,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isArray",
                        "optional": false,
                        "range": [
                          564,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 22
                          },
                          "start": {
                            "column": 35,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        558,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 22
                        },
                        "start": {
                          "column": 29,
                          "line": 22
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      558,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 22
                      },
                      "start": {
                        "column": 29,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    558,
                    596
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 22
                    },
                    "start": {
                      "column": 29,
                      "line": 22
                    }
                  }
                },
                "range": [
                  537,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 67,
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
            "kind": "let",
            "range": [
              533,
              597
            ],
            "loc": {
              "end": {
                "column": 68,
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
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 27
                      },
                      "start": {
                        "column": 10,
                        "line": 27
                      }
                    },
                    "range": [
                      661,
                      677
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false,
                        "range": [
                          663,
                          677
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        663,
                        677
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 27
                        },
                        "start": {
                          "column": 12,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    659,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "ConditionalExpression",
                        "alternate": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elOrA",
                              "optional": false,
                              "range": [
                                716,
                                721
                              ],
                              "loc": {
                                "end": {
                                  "column": 70,
                                  "line": 27
                                },
                                "start": {
                                  "column": 65,
                                  "line": 27
                                }
                              }
                            }
                          ],
                          "range": [
                            715,
                            722
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 27
                            },
                            "start": {
                              "column": 64,
                              "line": 27
                            }
                          }
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "elOrA",
                          "optional": false,
                          "range": [
                            707,
                            712
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 27
                            },
                            "start": {
                              "column": 56,
                              "line": 27
                            }
                          }
                        },
                        "test": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elOrA",
                              "optional": false,
                              "range": [
                                698,
                                703
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 27
                                },
                                "start": {
                                  "column": 47,
                                  "line": 27
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "range": [
                                684,
                                689
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 27
                                },
                                "start": {
                                  "column": 33,
                                  "line": 27
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isArray",
                              "optional": false,
                              "range": [
                                690,
                                697
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 27
                                },
                                "start": {
                                  "column": 39,
                                  "line": 27
                                }
                              }
                            },
                            "range": [
                              684,
                              697
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 27
                              },
                              "start": {
                                "column": 33,
                                "line": 27
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            684,
                            704
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 27
                            },
                            "start": {
                              "column": 33,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          684,
                          722
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 27
                          },
                          "start": {
                            "column": 33,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        681,
                        722
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 27
                        },
                        "start": {
                          "column": 30,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "range": [
                    680,
                    723
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 27
                    },
                    "start": {
                      "column": 29,
                      "line": 27
                    }
                  }
                },
                "range": [
                  659,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              655,
              724
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          191,
          726
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 14,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          186,
          188
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [],
      "range": [
        177,
        726
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 11
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
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "XY",
              "optional": false,
              "range": [
                753,
                755
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'x'",
                    "value": "x",
                    "range": [
                      758,
                      761
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 31
                      },
                      "start": {
                        "column": 14,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    758,
                    761
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 31
                    },
                    "start": {
                      "column": 14,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'y'",
                    "value": "y",
                    "range": [
                      764,
                      767
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 31
                      },
                      "start": {
                        "column": 20,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    764,
                    767
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 31
                    },
                    "start": {
                      "column": 20,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                758,
                767
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 31
                },
                "start": {
                  "column": 14,
                  "line": 31
                }
              }
            },
            "range": [
              748,
              768
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
                        "column": 15,
                        "line": 32
                      },
                      "start": {
                        "column": 11,
                        "line": 32
                      }
                    },
                    "range": [
                      780,
                      784
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XY",
                        "optional": false,
                        "range": [
                          782,
                          784
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 32
                          },
                          "start": {
                            "column": 13,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        782,
                        784
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 32
                        },
                        "start": {
                          "column": 13,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    779,
                    784
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 32
                    },
                    "start": {
                      "column": 10,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "'x'",
                  "value": "x",
                  "range": [
                    787,
                    790
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 32
                    },
                    "start": {
                      "column": 18,
                      "line": 32
                    }
                  }
                },
                "range": [
                  779,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 32
                  },
                  "start": {
                    "column": 10,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              773,
              791
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                  "name": "x2",
                  "optional": false,
                  "range": [
                    800,
                    802
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    805,
                    806
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 33
                    },
                    "start": {
                      "column": 13,
                      "line": 33
                    }
                  }
                },
                "range": [
                  800,
                  806
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              796,
              807
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
                "name": "x2",
                "optional": false,
                "range": [
                  887,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'y'",
                "value": "y",
                "range": [
                  892,
                  895
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 37
                  },
                  "start": {
                    "column": 9,
                    "line": 37
                  }
                }
              },
              "range": [
                887,
                895
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              887,
              896
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 40
                      },
                      "start": {
                        "column": 10,
                        "line": 40
                      }
                    },
                    "range": [
                      938,
                      942
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XY",
                        "optional": false,
                        "range": [
                          940,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 40
                          },
                          "start": {
                            "column": 12,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        940,
                        942
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 40
                        },
                        "start": {
                          "column": 12,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    936,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    945,
                    946
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 40
                    },
                    "start": {
                      "column": 17,
                      "line": 40
                    }
                  }
                },
                "range": [
                  936,
                  946
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              932,
              947
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
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
                "name": "x3",
                "optional": false,
                "range": [
                  952,
                  954
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'y'",
                "value": "y",
                "range": [
                  957,
                  960
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 41
                  },
                  "start": {
                    "column": 9,
                    "line": 41
                  }
                }
              },
              "range": [
                952,
                960
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              952,
              961
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          742,
          963
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 14,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          737,
          739
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [],
      "range": [
        728,
        963
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 30
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 45
                      },
                      "start": {
                        "column": 11,
                        "line": 45
                      }
                    },
                    "range": [
                      992,
                      1001
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        994,
                        1001
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 45
                        },
                        "start": {
                          "column": 13,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    991,
                    1001
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 45
                    },
                    "start": {
                      "column": 10,
                      "line": 45
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1004,
                    1008
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 45
                    },
                    "start": {
                      "column": 23,
                      "line": 45
                    }
                  }
                },
                "range": [
                  991,
                  1008
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 45
                  },
                  "start": {
                    "column": 10,
                    "line": 45
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              985,
              1009
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                  "name": "x1",
                  "optional": false,
                  "range": [
                    1018,
                    1020
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1023,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 46
                    },
                    "start": {
                      "column": 13,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1018,
                  1024
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1014,
              1025
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
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
                "name": "x1",
                "optional": false,
                "range": [
                  1124,
                  1126
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  1129,
                  1134
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 51
                  },
                  "start": {
                    "column": 9,
                    "line": 51
                  }
                }
              },
              "range": [
                1124,
                1134
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              1124,
              1135
            ],
            "loc": {
              "end": {
                "column": 15,
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
          979,
          1137
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 14,
            "line": 44
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          974,
          976
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
          }
        }
      },
      "params": [],
      "range": [
        965,
        1137
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 44
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
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "XY",
              "optional": false,
              "range": [
                1164,
                1166
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 55
                },
                "start": {
                  "column": 9,
                  "line": 55
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'x'",
                    "value": "x",
                    "range": [
                      1169,
                      1172
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 55
                      },
                      "start": {
                        "column": 14,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1169,
                    1172
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 55
                    },
                    "start": {
                      "column": 14,
                      "line": 55
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'y'",
                    "value": "y",
                    "range": [
                      1175,
                      1178
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 55
                      },
                      "start": {
                        "column": 20,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1175,
                    1178
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 55
                    },
                    "start": {
                      "column": 20,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                1169,
                1178
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 55
                },
                "start": {
                  "column": 14,
                  "line": 55
                }
              }
            },
            "range": [
              1159,
              1179
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 56
                      },
                      "start": {
                        "column": 11,
                        "line": 56
                      }
                    },
                    "range": [
                      1191,
                      1197
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "XY",
                          "optional": false,
                          "range": [
                            1193,
                            1195
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 56
                            },
                            "start": {
                              "column": 13,
                              "line": 56
                            }
                          }
                        },
                        "range": [
                          1193,
                          1195
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 56
                          },
                          "start": {
                            "column": 13,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1193,
                        1197
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 56
                        },
                        "start": {
                          "column": 13,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    1188,
                    1197
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'x'",
                      "value": "x",
                      "range": [
                        1201,
                        1204
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 56
                        },
                        "start": {
                          "column": 21,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "range": [
                    1200,
                    1205
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 56
                    },
                    "start": {
                      "column": 20,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1188,
                  1205
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 56
                  },
                  "start": {
                    "column": 8,
                    "line": 56
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1184,
              1206
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
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
                "name": "arr",
                "optional": false,
                "range": [
                  1211,
                  1214
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'y'",
                    "value": "y",
                    "range": [
                      1218,
                      1221
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 57
                      },
                      "start": {
                        "column": 11,
                        "line": 57
                      }
                    }
                  }
                ],
                "range": [
                  1217,
                  1222
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 57
                  },
                  "start": {
                    "column": 10,
                    "line": 57
                  }
                }
              },
              "range": [
                1211,
                1222
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "range": [
              1211,
              1223
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
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
                "name": "arr",
                "optional": false,
                "range": [
                  1283,
                  1286
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "'y'",
                          "value": "y",
                          "range": [
                            1294,
                            1297
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 60
                            },
                            "start": {
                              "column": 15,
                              "line": 60
                            }
                          }
                        }
                      ],
                      "range": [
                        1293,
                        1298
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 60
                        },
                        "start": {
                          "column": 14,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      1290,
                      1298
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 60
                      },
                      "start": {
                        "column": 11,
                        "line": 60
                      }
                    }
                  }
                ],
                "range": [
                  1289,
                  1299
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 60
                  },
                  "start": {
                    "column": 10,
                    "line": 60
                  }
                }
              },
              "range": [
                1283,
                1299
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1283,
              1300
            ],
            "loc": {
              "end": {
                "column": 21,
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
          1153,
          1302
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 14,
            "line": 54
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          1148,
          1150
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 54
          },
          "start": {
            "column": 9,
            "line": 54
          }
        }
      },
      "params": [],
      "range": [
        1139,
        1302
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 61
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
