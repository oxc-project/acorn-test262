__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    769
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
      "kind": "var",
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
          42,
          67
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
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
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              },
              "range": [
                56,
                64
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  58,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              48,
              65
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          37,
          41
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        23,
        67
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "x",
            "optional": false,
            "range": [
              75,
              76
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"x\"",
            "value": "x",
            "range": [
              79,
              82
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          },
          "range": [
            75,
            82
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        69,
        83
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            112,
            766
          ],
          "body": [
            {
              "type": "StaticBlock",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "range": [
                        135,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        141,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      135,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    135,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
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
                        "type": "Super",
                        "range": [
                          152,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          158,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 13
                          },
                          "start": {
                            "column": 14,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        152,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        162,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 18,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      152,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    152,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "range": [
                          173,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          179,
                          180
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        173,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        184,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      173,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    173,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "range": [
                          195,
                          200
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          201,
                          202
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
                      "range": [
                        195,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      195,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    195,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "range": [
                          214,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          220,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 16
                          },
                          "start": {
                            "column": 14,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        214,
                        221
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
                    },
                    "operator": "--",
                    "prefix": false,
                    "range": [
                      214,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    214,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "range": [
                          235,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 17
                          },
                          "start": {
                            "column": 10,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          241,
                          242
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 17
                          },
                          "start": {
                            "column": 16,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        235,
                        242
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 17
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": true,
                    "range": [
                      233,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    233,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "range": [
                          254,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 18
                          },
                          "start": {
                            "column": 10,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          260,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 18
                          },
                          "start": {
                            "column": 16,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        254,
                        261
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 18
                        },
                        "start": {
                          "column": 10,
                          "line": 18
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": true,
                    "range": [
                      252,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    252,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
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
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              274,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 19
                              },
                              "start": {
                                "column": 11,
                                "line": 19
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                277,
                                282
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 19
                                },
                                "start": {
                                  "column": 14,
                                  "line": 19
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                283,
                                284
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 19
                                },
                                "start": {
                                  "column": 20,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              277,
                              284
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 19
                              },
                              "start": {
                                "column": 14,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            274,
                            284
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 19
                            },
                            "start": {
                              "column": 11,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        272,
                        286
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 19
                        },
                        "start": {
                          "column": 9,
                          "line": 19
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              291,
                              292
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 19
                              },
                              "start": {
                                "column": 28,
                                "line": 19
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              294,
                              295
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 19
                              },
                              "start": {
                                "column": 31,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            291,
                            295
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 28,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        289,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 26,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      272,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    271,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
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
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "range": [
                              309,
                              314
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 20
                              },
                              "start": {
                                "column": 9,
                                "line": 20
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              315,
                              316
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
                          "range": [
                            309,
                            316
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 20
                            },
                            "start": {
                              "column": 9,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        308,
                        317
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            321,
                            322
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 20
                            },
                            "start": {
                              "column": 21,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "range": [
                        320,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 20
                        },
                        "start": {
                          "column": 20,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      308,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    308,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        334,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        340,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      334,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    334,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
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
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          354,
                          359
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "\"x\"",
                        "value": "x",
                        "range": [
                          360,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 23
                          },
                          "start": {
                            "column": 14,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        354,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        367,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 23
                        },
                        "start": {
                          "column": 21,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      354,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    354,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          378,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "\"x\"",
                        "value": "x",
                        "range": [
                          384,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 24
                          },
                          "start": {
                            "column": 14,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        378,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        392,
                        393
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 24
                        },
                        "start": {
                          "column": 22,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      378,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    378,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          403,
                          408
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "\"x\"",
                        "value": "x",
                        "range": [
                          409,
                          412
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 25
                          },
                          "start": {
                            "column": 14,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        403,
                        413
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 25
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      403,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    403,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          425,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "\"x\"",
                        "value": "x",
                        "range": [
                          431,
                          434
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 26
                          },
                          "start": {
                            "column": 14,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        425,
                        435
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
                    },
                    "operator": "--",
                    "prefix": false,
                    "range": [
                      425,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    425,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          449,
                          454
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 27
                          },
                          "start": {
                            "column": 10,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "\"x\"",
                        "value": "x",
                        "range": [
                          455,
                          458
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 27
                          },
                          "start": {
                            "column": 16,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        449,
                        459
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 27
                        },
                        "start": {
                          "column": 10,
                          "line": 27
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": true,
                    "range": [
                      447,
                      459
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    447,
                    460
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          471,
                          476
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 28
                          },
                          "start": {
                            "column": 10,
                            "line": 28
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "\"x\"",
                        "value": "x",
                        "range": [
                          477,
                          480
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 28
                          },
                          "start": {
                            "column": 16,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        471,
                        481
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 28
                        },
                        "start": {
                          "column": 10,
                          "line": 28
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": true,
                    "range": [
                      469,
                      481
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    469,
                    482
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              494,
                              495
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
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Super",
                              "range": [
                                497,
                                502
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 29
                                },
                                "start": {
                                  "column": 14,
                                  "line": 29
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "raw": "\"x\"",
                              "value": "x",
                              "range": [
                                503,
                                506
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 29
                                },
                                "start": {
                                  "column": 20,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              497,
                              507
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 29
                              },
                              "start": {
                                "column": 14,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            494,
                            507
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 29
                            },
                            "start": {
                              "column": 11,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        492,
                        509
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 29
                        },
                        "start": {
                          "column": 9,
                          "line": 29
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              514,
                              515
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 29
                              },
                              "start": {
                                "column": 31,
                                "line": 29
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              517,
                              518
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 29
                              },
                              "start": {
                                "column": 34,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            514,
                            518
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 29
                            },
                            "start": {
                              "column": 31,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        512,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 29
                        },
                        "start": {
                          "column": 29,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      492,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 29
                      },
                      "start": {
                        "column": 9,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    491,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "range": [
                              532,
                              537
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 30
                              },
                              "start": {
                                "column": 9,
                                "line": 30
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "raw": "\"x\"",
                            "value": "x",
                            "range": [
                              538,
                              541
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 30
                              },
                              "start": {
                                "column": 15,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            532,
                            542
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 30
                            },
                            "start": {
                              "column": 9,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        531,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            547,
                            548
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 30
                            },
                            "start": {
                              "column": 24,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        546,
                        549
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 30
                        },
                        "start": {
                          "column": 23,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      531,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    531,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        560,
                        565
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        566,
                        567
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 32
                        },
                        "start": {
                          "column": 14,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      560,
                      568
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    560,
                    569
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
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
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          578,
                          583
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 33
                          },
                          "start": {
                            "column": 8,
                            "line": 33
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          584,
                          585
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 33
                          },
                          "start": {
                            "column": 14,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        578,
                        586
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        589,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 33
                        },
                        "start": {
                          "column": 19,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      578,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    578,
                    591
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          600,
                          605
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 34
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          606,
                          607
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 34
                          },
                          "start": {
                            "column": 14,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        600,
                        608
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        612,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 34
                        },
                        "start": {
                          "column": 20,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      600,
                      613
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    600,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          623,
                          628
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 35
                          },
                          "start": {
                            "column": 8,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          629,
                          630
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 35
                          },
                          "start": {
                            "column": 14,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        623,
                        631
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      623,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    623,
                    634
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          643,
                          648
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 36
                          },
                          "start": {
                            "column": 8,
                            "line": 36
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          649,
                          650
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 36
                          },
                          "start": {
                            "column": 14,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        643,
                        651
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": false,
                    "range": [
                      643,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    643,
                    654
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          665,
                          670
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 37
                          },
                          "start": {
                            "column": 10,
                            "line": 37
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          671,
                          672
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 37
                          },
                          "start": {
                            "column": 16,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        665,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 37
                        },
                        "start": {
                          "column": 10,
                          "line": 37
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": true,
                    "range": [
                      663,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    663,
                    674
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "range": [
                          685,
                          690
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 38
                          },
                          "start": {
                            "column": 10,
                            "line": 38
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          691,
                          692
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 38
                          },
                          "start": {
                            "column": 16,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        685,
                        693
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 38
                        },
                        "start": {
                          "column": 10,
                          "line": 38
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": true,
                    "range": [
                      683,
                      693
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    683,
                    694
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              706,
                              707
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
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Super",
                              "range": [
                                709,
                                714
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 39
                                },
                                "start": {
                                  "column": 14,
                                  "line": 39
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                715,
                                716
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 39
                                },
                                "start": {
                                  "column": 20,
                                  "line": 39
                                }
                              }
                            },
                            "range": [
                              709,
                              717
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 39
                              },
                              "start": {
                                "column": 14,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            706,
                            717
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 39
                            },
                            "start": {
                              "column": 11,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "range": [
                        704,
                        719
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 39
                        },
                        "start": {
                          "column": 9,
                          "line": 39
                        }
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              724,
                              725
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 39
                              },
                              "start": {
                                "column": 29,
                                "line": 39
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              727,
                              728
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 39
                              },
                              "start": {
                                "column": 32,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            724,
                            728
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 39
                            },
                            "start": {
                              "column": 29,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "range": [
                        722,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 39
                        },
                        "start": {
                          "column": 27,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      704,
                      730
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 39
                      },
                      "start": {
                        "column": 9,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    703,
                    732
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
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
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "range": [
                              742,
                              747
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 40
                              },
                              "start": {
                                "column": 9,
                                "line": 40
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              748,
                              749
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 40
                              },
                              "start": {
                                "column": 15,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            742,
                            750
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 40
                            },
                            "start": {
                              "column": 9,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        741,
                        751
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
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            755,
                            756
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 40
                            },
                            "start": {
                              "column": 22,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "range": [
                        754,
                        757
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 40
                        },
                        "start": {
                          "column": 21,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      741,
                      757
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    741,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                118,
                764
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 42
            },
            "start": {
              "column": 21,
              "line": 10
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
                87,
                90
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
                }
              }
            },
            "range": [
              86,
              90
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 1,
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
            97,
            98
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "range": [
            107,
            111
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 10
            },
            "start": {
              "column": 16,
              "line": 10
            }
          }
        },
        "range": [
          86,
          766
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 1,
            "line": 9
          }
        }
      },
      "range": [
        85,
        768
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
