__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    164
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
            "name": "x1",
            "optional": false,
            "range": [
              4,
              6
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                69,
                72
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 1
                },
                "start": {
                  "column": 69,
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
              "name": "foo3",
              "optional": false,
              "range": [
                18,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
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
                      "column": 61,
                      "line": 1
                    },
                    "start": {
                      "column": 58,
                      "line": 1
                    }
                  },
                  "range": [
                    58,
                    61
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        60,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 1
                        },
                        "start": {
                          "column": 60,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      60,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 1
                      },
                      "start": {
                        "column": 60,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  57,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 1
                  },
                  "start": {
                    "column": 57,
                    "line": 1
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 1
                    },
                    "start": {
                      "column": 64,
                      "line": 1
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
                      "name": "U",
                      "optional": false,
                      "range": [
                        66,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 1
                        },
                        "start": {
                          "column": 66,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      66,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 1
                      },
                      "start": {
                        "column": 66,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  63,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 1
                  },
                  "start": {
                    "column": 63,
                    "line": 1
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              },
              "range": [
                22,
                56
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
                  "out": false,
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
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            38,
                            39
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 1
                            },
                            "start": {
                              "column": 38,
                              "line": 1
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 1
                            },
                            "start": {
                              "column": 39,
                              "line": 1
                            }
                          },
                          "range": [
                            39,
                            42
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                41,
                                42
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 1
                                },
                                "start": {
                                  "column": 41,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              41,
                              42
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 1
                              },
                              "start": {
                                "column": 41,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          38,
                          43
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 1
                          },
                          "start": {
                            "column": 38,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            44,
                            45
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 1
                            },
                            "start": {
                              "column": 44,
                              "line": 1
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 1
                            },
                            "start": {
                              "column": 45,
                              "line": 1
                            }
                          },
                          "range": [
                            45,
                            53
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              47,
                              53
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 1
                              },
                              "start": {
                                "column": 47,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          44,
                          53
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 1
                          },
                          "start": {
                            "column": 44,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      36,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 1
                      },
                      "start": {
                        "column": 36,
                        "line": 1
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      26,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 1
                      },
                      "start": {
                        "column": 26,
                        "line": 1
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    26,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                }
              ]
            },
            "range": [
              9,
              72
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            4,
            72
          ],
          "loc": {
            "end": {
              "column": 72,
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
        72
      ],
      "loc": {
        "end": {
          "column": 72,
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
            "name": "x2",
            "optional": false,
            "range": [
              77,
              79
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                142,
                145
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 2
                },
                "start": {
                  "column": 69,
                  "line": 2
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                91,
                95
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
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
                      "column": 61,
                      "line": 2
                    },
                    "start": {
                      "column": 58,
                      "line": 2
                    }
                  },
                  "range": [
                    131,
                    134
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        133,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 2
                        },
                        "start": {
                          "column": 60,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      133,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 2
                      },
                      "start": {
                        "column": 60,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  130,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 2
                  },
                  "start": {
                    "column": 57,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 2
                    },
                    "start": {
                      "column": 64,
                      "line": 2
                    }
                  },
                  "range": [
                    137,
                    140
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        139,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 2
                        },
                        "start": {
                          "column": 66,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      139,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 2
                      },
                      "start": {
                        "column": 66,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  136,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 2
                  },
                  "start": {
                    "column": 63,
                    "line": 2
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              },
              "range": [
                95,
                129
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
                      96,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    96,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            111,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 2
                            },
                            "start": {
                              "column": 38,
                              "line": 2
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 2
                            },
                            "start": {
                              "column": 39,
                              "line": 2
                            }
                          },
                          "range": [
                            112,
                            115
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                114,
                                115
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 2
                                },
                                "start": {
                                  "column": 41,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              114,
                              115
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 2
                              },
                              "start": {
                                "column": 41,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          111,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 2
                          },
                          "start": {
                            "column": 38,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            117,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 2
                            },
                            "start": {
                              "column": 44,
                              "line": 2
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 2
                            },
                            "start": {
                              "column": 45,
                              "line": 2
                            }
                          },
                          "range": [
                            118,
                            126
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              120,
                              126
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 2
                              },
                              "start": {
                                "column": 47,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          117,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 2
                          },
                          "start": {
                            "column": 44,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      109,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 2
                      },
                      "start": {
                        "column": 36,
                        "line": 2
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      99,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 26,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    99,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 2
                    },
                    "start": {
                      "column": 26,
                      "line": 2
                    }
                  }
                }
              ]
            },
            "range": [
              82,
              145
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            77,
            145
          ],
          "loc": {
            "end": {
              "column": 72,
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
        73,
        145
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            147,
            149
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "range": [
            152,
            154
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 5,
              "line": 4
            }
          }
        },
        "range": [
          147,
          154
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        147,
        155
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 4
        },
        "start": {
          "column": 0,
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
          "name": "x2",
          "optional": false,
          "range": [
            156,
            158
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "range": [
            161,
            163
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 5
            },
            "start": {
              "column": 5,
              "line": 5
            }
          }
        },
        "range": [
          156,
          163
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        156,
        164
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 8,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
