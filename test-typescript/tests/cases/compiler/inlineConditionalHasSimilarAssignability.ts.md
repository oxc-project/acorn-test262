__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    352
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyExtract",
        "optional": false,
        "range": [
          5,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              23,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          },
          "range": [
            23,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
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
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          },
          "range": [
            33,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 33,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            41,
            46
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 41,
              "line": 1
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
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 37,
                "line": 1
              }
            }
          },
          "range": [
            37,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 37,
              "line": 1
            }
          }
        },
        "range": [
          23,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
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
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
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
              "name": "T",
              "optional": false,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
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
                18,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              18,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 1
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    },
                    "range": [
                      81,
                      100
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          90,
                          100
                        ],
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                91,
                                94
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
                              91,
                              96
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 4
                              },
                              "start": {
                                "column": 19,
                                "line": 4
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
                                98,
                                99
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 4
                                },
                                "start": {
                                  "column": 26,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              98,
                              99
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 4
                              },
                              "start": {
                                "column": 26,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 4
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "range": [
                          83,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 4
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        83,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    80,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      103,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 31,
                        "line": 4
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      108,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 36,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    103,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 31,
                      "line": 4
                    }
                  }
                },
                "range": [
                  80,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 39,
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
            "kind": "const",
            "range": [
              74,
              112
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
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
                "name": "a",
                "optional": false,
                "range": [
                  115,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 5
                  },
                  "start": {
                    "column": 2,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
                  }
                }
              },
              "range": [
                115,
                120
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            "range": [
              115,
              121
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 2,
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    },
                    "range": [
                      138,
                      173
                    ],
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "range": [
                            141,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          141,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            155,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 7
                            },
                            "start": {
                              "column": 26,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          155,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 7
                          },
                          "start": {
                            "column": 26,
                            "line": 7
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "range": [
                          167,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 7
                          },
                          "start": {
                            "column": 38,
                            "line": 7
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "range": [
                            159,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 7
                            },
                            "start": {
                              "column": 30,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          159,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 7
                          },
                          "start": {
                            "column": 30,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        141,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    137,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      176,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 7
                      },
                      "start": {
                        "column": 47,
                        "line": 7
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      181,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 7
                      },
                      "start": {
                        "column": 52,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    176,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 7
                    },
                    "start": {
                      "column": 47,
                      "line": 7
                    }
                  }
                },
                "range": [
                  137,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              131,
              185
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
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
                "name": "a",
                "optional": false,
                "range": [
                  188,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 2,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  192,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 8
                  },
                  "start": {
                    "column": 6,
                    "line": 8
                  }
                }
              },
              "range": [
                188,
                193
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "range": [
              188,
              194
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 2,
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 10
                      },
                      "start": {
                        "column": 9,
                        "line": 10
                      }
                    },
                    "range": [
                      205,
                      226
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          216,
                          226
                        ],
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                217,
                                220
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 10
                                },
                                "start": {
                                  "column": 21,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              217,
                              222
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 10
                              },
                              "start": {
                                "column": 21,
                                "line": 10
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
                                224,
                                225
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 10
                                },
                                "start": {
                                  "column": 28,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              224,
                              225
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 10
                              },
                              "start": {
                                "column": 28,
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
                            "column": 20,
                            "line": 10
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyExtract",
                        "optional": false,
                        "range": [
                          207,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 10
                          },
                          "start": {
                            "column": 11,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        207,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 10
                        },
                        "start": {
                          "column": 11,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    204,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      229,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 10
                      },
                      "start": {
                        "column": 33,
                        "line": 10
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      234,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 10
                      },
                      "start": {
                        "column": 38,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    229,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 10
                    },
                    "start": {
                      "column": 33,
                      "line": 10
                    }
                  }
                },
                "range": [
                  204,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              198,
              238
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
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
                "name": "a",
                "optional": false,
                "range": [
                  241,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 11
                  },
                  "start": {
                    "column": 2,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  245,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 11
                  },
                  "start": {
                    "column": 6,
                    "line": 11
                  }
                }
              },
              "range": [
                241,
                246
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "range": [
              241,
              247
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CustomType",
              "optional": false,
              "range": [
                262,
                272
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 7,
                  "line": 13
                }
              }
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    275,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 13
                    },
                    "start": {
                      "column": 20,
                      "line": 13
                    }
                  }
                },
                "range": [
                  275,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 13
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    289,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 13
                    },
                    "start": {
                      "column": 34,
                      "line": 13
                    }
                  }
                },
                "range": [
                  289,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 34,
                    "line": 13
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  301,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 13
                  },
                  "start": {
                    "column": 46,
                    "line": 13
                  }
                }
              },
              "trueType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    293,
                    296
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 13
                    },
                    "start": {
                      "column": 38,
                      "line": 13
                    }
                  }
                },
                "range": [
                  293,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 13
                  },
                  "start": {
                    "column": 38,
                    "line": 13
                  }
                }
              },
              "range": [
                275,
                306
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            },
            "range": [
              257,
              307
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 13
              },
              "start": {
                "column": 2,
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    },
                    "range": [
                      317,
                      329
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CustomType",
                        "optional": false,
                        "range": [
                          319,
                          329
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 14
                          },
                          "start": {
                            "column": 11,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        319,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    316,
                    329
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
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      332,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      337,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 14
                      },
                      "start": {
                        "column": 29,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    332,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 14
                    },
                    "start": {
                      "column": 24,
                      "line": 14
                    }
                  }
                },
                "range": [
                  316,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 32,
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
            "kind": "const",
            "range": [
              310,
              341
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
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
                "name": "a",
                "optional": false,
                "range": [
                  344,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 15
                  },
                  "start": {
                    "column": 2,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  348,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 15
                  },
                  "start": {
                    "column": 6,
                    "line": 15
                  }
                }
              },
              "range": [
                344,
                349
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
                }
              }
            },
            "range": [
              344,
              350
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          }
        ],
        "range": [
          70,
          352
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 22,
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
        "name": "foo",
        "optional": false,
        "range": [
          57,
          60
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              65,
              68
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  67,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                67,
                68
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          },
          "range": [
            64,
            68
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
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          60,
          63
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
                61,
                62
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              61,
              62
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        48,
        352
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
