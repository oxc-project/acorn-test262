__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    678
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
                    95,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      99,
                      100
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      104,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    99,
                    107
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
                },
                "range": [
                  95,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              89,
              108
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 4,
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
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    },
                    "range": [
                      119,
                      122
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          121,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        121,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    117,
                    122
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
                "init": null,
                "range": [
                  117,
                  122
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
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              113,
              123
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ForInStatement",
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
                        "name": "x1",
                        "optional": false,
                        "range": [
                          158,
                          160
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            163,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 7
                            },
                            "start": {
                              "column": 17,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "range": [
                            167,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          163,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 17,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        158,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    154,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                144,
                177
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "k1",
              "optional": false,
              "range": [
                133,
                135
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                139,
                142
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              128,
              177
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ForInStatement",
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
                        "name": "x2",
                        "optional": false,
                        "range": [
                          216,
                          218
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            221,
                            224
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 10
                            },
                            "start": {
                              "column": 17,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k2",
                          "optional": false,
                          "range": [
                            225,
                            227
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 10
                            },
                            "start": {
                              "column": 21,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          221,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 10
                          },
                          "start": {
                            "column": 17,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        216,
                        228
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    212,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                202,
                235
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "range": [
                      191,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    191,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                187,
                193
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
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                197,
                200
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "range": [
              182,
              235
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          83,
          237
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 61,
            "line": 3
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
          31,
          33
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 3
              },
              "start": {
                "column": 36,
                "line": 3
              }
            },
            "range": [
              58,
              75
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    68,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 3
                    },
                    "start": {
                      "column": 46,
                      "line": 3
                    }
                  }
                },
                "range": [
                  68,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 3
                  },
                  "start": {
                    "column": 46,
                    "line": 3
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  63,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 41,
                    "line": 3
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    72,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 3
                    },
                    "start": {
                      "column": 50,
                      "line": 3
                    }
                  }
                },
                "range": [
                  72,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 3
                  },
                  "start": {
                    "column": 50,
                    "line": 3
                  }
                }
              },
              "range": [
                60,
                75
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              }
            }
          },
          "range": [
            55,
            75
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 3
            },
            "start": {
              "column": 33,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 3
              },
              "start": {
                "column": 56,
                "line": 3
              }
            },
            "range": [
              78,
              81
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  80,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 3
                  },
                  "start": {
                    "column": 58,
                    "line": 3
                  }
                }
              },
              "range": [
                80,
                81
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 3
                },
                "start": {
                  "column": 58,
                  "line": 3
                }
              }
            }
          },
          "range": [
            77,
            81
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 3
            },
            "start": {
              "column": 55,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          33,
          54
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                44,
                50
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                34,
                35
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
            "out": false,
            "range": [
              34,
              50
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
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
              "name": "T",
              "optional": false,
              "range": [
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 30,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              52,
              53
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        237
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    309,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      313,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 15
                      },
                      "start": {
                        "column": 14,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      318,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 15
                      },
                      "start": {
                        "column": 19,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    313,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 15
                    },
                    "start": {
                      "column": 14,
                      "line": 15
                    }
                  }
                },
                "range": [
                  309,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              303,
              322
            ],
            "loc": {
              "end": {
                "column": 23,
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
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 10,
                        "line": 16
                      }
                    },
                    "range": [
                      333,
                      342
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            341,
                            342
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 16
                            },
                            "start": {
                              "column": 18,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          341,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 18,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        335,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 12,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    331,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": null,
                "range": [
                  331,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              327,
              343
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ForInStatement",
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
                        "name": "x1",
                        "optional": false,
                        "range": [
                          378,
                          380
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 18
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            383,
                            386
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 18
                            },
                            "start": {
                              "column": 17,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "range": [
                            387,
                            389
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 18
                            },
                            "start": {
                              "column": 21,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          383,
                          390
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 18
                          },
                          "start": {
                            "column": 17,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        378,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 18
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    374,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                364,
                397
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              }
            },
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "k1",
              "optional": false,
              "range": [
                353,
                355
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                359,
                362
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              }
            },
            "range": [
              348,
              397
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "ForInStatement",
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
                        "name": "x2",
                        "optional": false,
                        "range": [
                          436,
                          438
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            441,
                            444
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 21
                            },
                            "start": {
                              "column": 17,
                              "line": 21
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k2",
                          "optional": false,
                          "range": [
                            445,
                            447
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 21
                            },
                            "start": {
                              "column": 21,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          441,
                          448
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 21
                          },
                          "start": {
                            "column": 17,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        436,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    432,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                422,
                455
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "range": [
                      411,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    411,
                    413
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                407,
                413
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                417,
                420
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 19,
                  "line": 20
                }
              }
            },
            "range": [
              402,
              455
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          297,
          457
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 58,
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
        "name": "f2",
        "optional": false,
        "range": [
          248,
          250
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 14
              },
              "start": {
                "column": 18,
                "line": 14
              }
            },
            "range": [
              257,
              283
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      273,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 14
                      },
                      "start": {
                        "column": 34,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    273,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 14
                    },
                    "start": {
                      "column": 34,
                      "line": 14
                    }
                  }
                },
                "range": [
                  267,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 28,
                    "line": 14
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  262,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 14
                  },
                  "start": {
                    "column": 23,
                    "line": 14
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      279,
                      280
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 14
                      },
                      "start": {
                        "column": 40,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    279,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 14
                    },
                    "start": {
                      "column": 40,
                      "line": 14
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      277,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 14
                      },
                      "start": {
                        "column": 38,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    277,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 14
                    },
                    "start": {
                      "column": 38,
                      "line": 14
                    }
                  }
                },
                "range": [
                  277,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 14
                  },
                  "start": {
                    "column": 38,
                    "line": 14
                  }
                }
              },
              "range": [
                259,
                283
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 14
                },
                "start": {
                  "column": 20,
                  "line": 14
                }
              }
            }
          },
          "range": [
            254,
            283
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 14
            },
            "start": {
              "column": 15,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 14
              },
              "start": {
                "column": 47,
                "line": 14
              }
            },
            "range": [
              286,
              295
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    294,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 14
                    },
                    "start": {
                      "column": 55,
                      "line": 14
                    }
                  }
                },
                "range": [
                  294,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 14
                  },
                  "start": {
                    "column": 55,
                    "line": 14
                  }
                }
              },
              "range": [
                288,
                295
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 14
                },
                "start": {
                  "column": 49,
                  "line": 14
                }
              }
            }
          },
          "range": [
            285,
            295
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 14
            },
            "start": {
              "column": 46,
              "line": 14
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 14
          },
          "start": {
            "column": 11,
            "line": 14
          }
        },
        "range": [
          250,
          253
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
                251,
                252
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              251,
              252
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 12,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        239,
        457
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 14
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    536,
                    537
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      540,
                      541
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 26
                      },
                      "start": {
                        "column": 14,
                        "line": 26
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      545,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 26
                      },
                      "start": {
                        "column": 19,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    540,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 26
                    },
                    "start": {
                      "column": 14,
                      "line": 26
                    }
                  }
                },
                "range": [
                  536,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              530,
              549
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 27
                      },
                      "start": {
                        "column": 10,
                        "line": 27
                      }
                    },
                    "range": [
                      560,
                      563
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          562,
                          563
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        562,
                        563
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
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
                    558,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": null,
                "range": [
                  558,
                  563
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              554,
              564
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "ForInStatement",
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
                        "name": "x1",
                        "optional": false,
                        "range": [
                          599,
                          601
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 29
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            604,
                            607
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 29
                            },
                            "start": {
                              "column": 17,
                              "line": 29
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "range": [
                            608,
                            610
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 29
                            },
                            "start": {
                              "column": 21,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          604,
                          611
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 29
                          },
                          "start": {
                            "column": 17,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        599,
                        611
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 29
                        },
                        "start": {
                          "column": 12,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    595,
                    612
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                585,
                618
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "k1",
              "optional": false,
              "range": [
                574,
                576
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                580,
                583
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              }
            },
            "range": [
              569,
              618
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ForInStatement",
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
                        "name": "x2",
                        "optional": false,
                        "range": [
                          657,
                          659
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 32
                          },
                          "start": {
                            "column": 12,
                            "line": 32
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            662,
                            665
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 32
                            },
                            "start": {
                              "column": 17,
                              "line": 32
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k2",
                          "optional": false,
                          "range": [
                            666,
                            668
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 32
                            },
                            "start": {
                              "column": 21,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          662,
                          669
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 32
                          },
                          "start": {
                            "column": 17,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        657,
                        669
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 32
                        },
                        "start": {
                          "column": 12,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    653,
                    670
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                643,
                676
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 24,
                  "line": 31
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "range": [
                      632,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    632,
                    634
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 31
                    },
                    "start": {
                      "column": 13,
                      "line": 31
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                628,
                634
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                638,
                641
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 31
                },
                "start": {
                  "column": 19,
                  "line": 31
                }
              }
            },
            "range": [
              623,
              676
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          524,
          678
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 65,
            "line": 25
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
          468,
          470
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 25
              },
              "start": {
                "column": 37,
                "line": 25
              }
            },
            "range": [
              496,
              516
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    506,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 25
                    },
                    "start": {
                      "column": 47,
                      "line": 25
                    }
                  }
                },
                "range": [
                  506,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 25
                  },
                  "start": {
                    "column": 47,
                    "line": 25
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  501,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 25
                  },
                  "start": {
                    "column": 42,
                    "line": 25
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      512,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 25
                      },
                      "start": {
                        "column": 53,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    512,
                    513
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 25
                    },
                    "start": {
                      "column": 53,
                      "line": 25
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      510,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 25
                      },
                      "start": {
                        "column": 51,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    510,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 25
                    },
                    "start": {
                      "column": 51,
                      "line": 25
                    }
                  }
                },
                "range": [
                  510,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 25
                  },
                  "start": {
                    "column": 51,
                    "line": 25
                  }
                }
              },
              "range": [
                498,
                516
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 25
                },
                "start": {
                  "column": 39,
                  "line": 25
                }
              }
            }
          },
          "range": [
            493,
            516
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 25
            },
            "start": {
              "column": 34,
              "line": 25
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 25
              },
              "start": {
                "column": 60,
                "line": 25
              }
            },
            "range": [
              519,
              522
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  521,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 25
                  },
                  "start": {
                    "column": 62,
                    "line": 25
                  }
                }
              },
              "range": [
                521,
                522
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 25
                },
                "start": {
                  "column": 62,
                  "line": 25
                }
              }
            }
          },
          "range": [
            518,
            522
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 25
            },
            "start": {
              "column": 59,
              "line": 25
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 25
          },
          "start": {
            "column": 11,
            "line": 25
          }
        },
        "range": [
          470,
          492
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
                471,
                472
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              471,
              472
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 12,
                "line": 25
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    490,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 25
                    },
                    "start": {
                      "column": 31,
                      "line": 25
                    }
                  }
                },
                "range": [
                  490,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 31,
                    "line": 25
                  }
                }
              },
              "range": [
                484,
                491
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 25
                },
                "start": {
                  "column": 25,
                  "line": 25
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                474,
                475
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              474,
              491
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 25
              },
              "start": {
                "column": 15,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        459,
        678
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 34
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
