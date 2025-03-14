__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    12,
    503
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
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
                "name": "a",
                "optional": false,
                "range": [
                  72,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  76,
                  77
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
              "range": [
                72,
                77
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              72,
              78
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 4,
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
                "name": "b",
                "optional": false,
                "range": [
                  83,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  87,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "range": [
                83,
                88
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              83,
              89
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          66,
          91
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 54,
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
          21,
          23
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            },
            "range": [
              25,
              43
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                },
                "range": [
                  33,
                  43
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
                        42,
                        43
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
                    "range": [
                      42,
                      43
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
                  "range": [
                    36,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                },
                "range": [
                  27,
                  30
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
                        28,
                        29
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
                    "out": false,
                    "range": [
                      28,
                      29
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
                ]
              },
              "range": [
                27,
                43
              ],
              "loc": {
                "end": {
                  "column": 31,
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
            24,
            43
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 3
              },
              "start": {
                "column": 34,
                "line": 3
              }
            },
            "range": [
              46,
              64
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 3
                  },
                  "start": {
                    "column": 42,
                    "line": 3
                  }
                },
                "range": [
                  54,
                  64
                ],
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        63,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 3
                        },
                        "start": {
                          "column": 51,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      63,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 3
                      },
                      "start": {
                        "column": 51,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    57,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 3
                    },
                    "start": {
                      "column": 45,
                      "line": 3
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                },
                "range": [
                  48,
                  51
                ],
                "params": [
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
                        49,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 3
                        },
                        "start": {
                          "column": 37,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      49,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 3
                      },
                      "start": {
                        "column": 37,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                48,
                64
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 36,
                  "line": 3
                }
              }
            }
          },
          "range": [
            45,
            64
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 3
            },
            "start": {
              "column": 33,
              "line": 3
            }
          }
        }
      ],
      "range": [
        12,
        91
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
                  185,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  189,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                185,
                190
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              185,
              191
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                "name": "b",
                "optional": false,
                "range": [
                  196,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  200,
                  201
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
                196,
                201
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              196,
              202
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          179,
          204
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 86,
            "line": 8
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
          102,
          104
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
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
                "column": 47,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            },
            "range": [
              106,
              140
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 8
                  },
                  "start": {
                    "column": 40,
                    "line": 8
                  }
                },
                "range": [
                  133,
                  140
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        138,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 8
                        },
                        "start": {
                          "column": 45,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      138,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 8
                      },
                      "start": {
                        "column": 45,
                        "line": 8
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
                        136,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 8
                        },
                        "start": {
                          "column": 43,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 8
                      },
                      "start": {
                        "column": 43,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    136,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 8
                    },
                    "start": {
                      "column": 43,
                      "line": 8
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                },
                "range": [
                  108,
                  130
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
                        109,
                        110
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      109,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
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
                            128,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 8
                            },
                            "start": {
                              "column": 35,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          128,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 8
                          },
                          "start": {
                            "column": 35,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        122,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 29,
                          "line": 8
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
                        112,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 8
                        },
                        "start": {
                          "column": 19,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      112,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  }
                ]
              },
              "range": [
                108,
                140
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            }
          },
          "range": [
            105,
            140
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 84,
                "line": 8
              },
              "start": {
                "column": 50,
                "line": 8
              }
            },
            "range": [
              143,
              177
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 8
                  },
                  "start": {
                    "column": 77,
                    "line": 8
                  }
                },
                "range": [
                  170,
                  177
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L",
                      "optional": false,
                      "range": [
                        175,
                        176
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 8
                        },
                        "start": {
                          "column": 82,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      175,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 8
                      },
                      "start": {
                        "column": 82,
                        "line": 8
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        173,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 8
                        },
                        "start": {
                          "column": 80,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      173,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 8
                      },
                      "start": {
                        "column": 80,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    173,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 8
                    },
                    "start": {
                      "column": 80,
                      "line": 8
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 8
                  },
                  "start": {
                    "column": 52,
                    "line": 8
                  }
                },
                "range": [
                  145,
                  167
                ],
                "params": [
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
                        146,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 8
                        },
                        "start": {
                          "column": 53,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      146,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 8
                      },
                      "start": {
                        "column": 53,
                        "line": 8
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
                          "name": "U",
                          "optional": false,
                          "range": [
                            165,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 8
                            },
                            "start": {
                              "column": 72,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          165,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 8
                          },
                          "start": {
                            "column": 72,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        159,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 8
                        },
                        "start": {
                          "column": 66,
                          "line": 8
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L",
                      "optional": false,
                      "range": [
                        149,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 8
                        },
                        "start": {
                          "column": 56,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      149,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 8
                      },
                      "start": {
                        "column": 56,
                        "line": 8
                      }
                    }
                  }
                ]
              },
              "range": [
                145,
                177
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 8
                },
                "start": {
                  "column": 52,
                  "line": 8
                }
              }
            }
          },
          "range": [
            142,
            177
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 8
            },
            "start": {
              "column": 49,
              "line": 8
            }
          }
        }
      ],
      "range": [
        93,
        204
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
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
                  300,
                  301
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  304,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              "range": [
                300,
                305
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              300,
              306
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 14
              },
              "start": {
                "column": 4,
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
                "name": "b",
                "optional": false,
                "range": [
                  311,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  315,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "range": [
                311,
                316
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              311,
              317
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          294,
          319
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 88,
            "line": 13
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
          215,
          217
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
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
                "column": 48,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            },
            "range": [
              219,
              254
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 13
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                },
                "range": [
                  227,
                  254
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
                          244,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 13
                          },
                          "start": {
                            "column": 38,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        244,
                        245
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 13
                        },
                        "start": {
                          "column": 38,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      238,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 13
                      },
                      "start": {
                        "column": 32,
                        "line": 13
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      233,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 13
                      },
                      "start": {
                        "column": 27,
                        "line": 13
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
                        "name": "K",
                        "optional": false,
                        "range": [
                          250,
                          251
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 13
                          },
                          "start": {
                            "column": 44,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        250,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 13
                        },
                        "start": {
                          "column": 44,
                          "line": 13
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
                          248,
                          249
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 13
                          },
                          "start": {
                            "column": 42,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        248,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 13
                        },
                        "start": {
                          "column": 42,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      248,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 13
                      },
                      "start": {
                        "column": 42,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    230,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 13
                    },
                    "start": {
                      "column": 24,
                      "line": 13
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                },
                "range": [
                  221,
                  224
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
                        222,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 13
                        },
                        "start": {
                          "column": 16,
                          "line": 13
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      222,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 13
                      },
                      "start": {
                        "column": 16,
                        "line": 13
                      }
                    }
                  }
                ]
              },
              "range": [
                221,
                254
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            }
          },
          "range": [
            218,
            254
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 86,
                "line": 13
              },
              "start": {
                "column": 51,
                "line": 13
              }
            },
            "range": [
              257,
              292
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 13
                  },
                  "start": {
                    "column": 59,
                    "line": 13
                  }
                },
                "range": [
                  265,
                  292
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
                        "name": "U",
                        "optional": false,
                        "range": [
                          282,
                          283
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 13
                          },
                          "start": {
                            "column": 76,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        282,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 13
                        },
                        "start": {
                          "column": 76,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      276,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 13
                      },
                      "start": {
                        "column": 70,
                        "line": 13
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      271,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 13
                      },
                      "start": {
                        "column": 65,
                        "line": 13
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
                        "name": "K",
                        "optional": false,
                        "range": [
                          288,
                          289
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 13
                          },
                          "start": {
                            "column": 82,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        288,
                        289
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 13
                        },
                        "start": {
                          "column": 82,
                          "line": 13
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          286,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 13
                          },
                          "start": {
                            "column": 80,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        286,
                        287
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 13
                        },
                        "start": {
                          "column": 80,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      286,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 13
                      },
                      "start": {
                        "column": 80,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    268,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 13
                    },
                    "start": {
                      "column": 62,
                      "line": 13
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 13
                  },
                  "start": {
                    "column": 53,
                    "line": 13
                  }
                },
                "range": [
                  259,
                  262
                ],
                "params": [
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
                        260,
                        261
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 13
                        },
                        "start": {
                          "column": 54,
                          "line": 13
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      260,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 13
                      },
                      "start": {
                        "column": 54,
                        "line": 13
                      }
                    }
                  }
                ]
              },
              "range": [
                259,
                292
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 13
                },
                "start": {
                  "column": 53,
                  "line": 13
                }
              }
            }
          },
          "range": [
            256,
            292
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 13
            },
            "start": {
              "column": 50,
              "line": 13
            }
          }
        }
      ],
      "range": [
        206,
        319
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdMapped",
        "optional": false,
        "range": [
          348,
          356
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
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
                376,
                377
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 20
                },
                "start": {
                  "column": 33,
                  "line": 20
                }
              }
            },
            "range": [
              376,
              377
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 20
              },
              "start": {
                "column": 33,
                "line": 20
              }
            }
          },
          "range": [
            370,
            377
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 20
            },
            "start": {
              "column": 27,
              "line": 20
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            365,
            366
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 20
            },
            "start": {
              "column": 22,
              "line": 20
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
              "name": "K",
              "optional": false,
              "range": [
                382,
                383
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 20
                },
                "start": {
                  "column": 39,
                  "line": 20
                }
              }
            },
            "range": [
              382,
              383
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 20
              },
              "start": {
                "column": 39,
                "line": 20
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
                380,
                381
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 20
                },
                "start": {
                  "column": 37,
                  "line": 20
                }
              }
            },
            "range": [
              380,
              381
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 20
              },
              "start": {
                "column": 37,
                "line": 20
              }
            }
          },
          "range": [
            380,
            384
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 20
            },
            "start": {
              "column": 37,
              "line": 20
            }
          }
        },
        "range": [
          362,
          386
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 20
          },
          "start": {
            "column": 19,
            "line": 20
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 20
          },
          "start": {
            "column": 13,
            "line": 20
          }
        },
        "range": [
          356,
          359
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
                357,
                358
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              357,
              358
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 20
              },
              "start": {
                "column": 14,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        343,
        386
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 20
        },
        "start": {
          "column": 0,
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              },
              "range": [
                403,
                425
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 22
                    },
                    "start": {
                      "column": 23,
                      "line": 22
                    }
                  },
                  "range": [
                    411,
                    425
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        422,
                        425
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
                              423,
                              424
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 22
                              },
                              "start": {
                                "column": 35,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            423,
                            424
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 22
                            },
                            "start": {
                              "column": 35,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 22
                        },
                        "start": {
                          "column": 34,
                          "line": 22
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IdMapped",
                      "optional": false,
                      "range": [
                        414,
                        422
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 22
                        },
                        "start": {
                          "column": 26,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      414,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 22
                      },
                      "start": {
                        "column": 26,
                        "line": 22
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 22
                    },
                    "start": {
                      "column": 17,
                      "line": 22
                    }
                  },
                  "range": [
                    405,
                    408
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
                          406,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 22
                          },
                          "start": {
                            "column": 18,
                            "line": 22
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        406,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 22
                        },
                        "start": {
                          "column": 18,
                          "line": 22
                        }
                      }
                    }
                  ]
                },
                "range": [
                  405,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 22
                  },
                  "start": {
                    "column": 17,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              402,
              425
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            402,
            425
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 22
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        388,
        426
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 22
        },
        "start": {
          "column": 0,
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              },
              "range": [
                442,
                477
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 23
                    },
                    "start": {
                      "column": 23,
                      "line": 23
                    }
                  },
                  "range": [
                    450,
                    477
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
                          "name": "U",
                          "optional": false,
                          "range": [
                            467,
                            468
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 23
                            },
                            "start": {
                              "column": 40,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          467,
                          468
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 23
                          },
                          "start": {
                            "column": 40,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        461,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 23
                        },
                        "start": {
                          "column": 34,
                          "line": 23
                        }
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        456,
                        457
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 23
                        },
                        "start": {
                          "column": 29,
                          "line": 23
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
                          "name": "K",
                          "optional": false,
                          "range": [
                            473,
                            474
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 23
                            },
                            "start": {
                              "column": 46,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          473,
                          474
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 23
                          },
                          "start": {
                            "column": 46,
                            "line": 23
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            471,
                            472
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 23
                            },
                            "start": {
                              "column": 44,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          471,
                          472
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 23
                          },
                          "start": {
                            "column": 44,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        471,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 23
                        },
                        "start": {
                          "column": 44,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      453,
                      477
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 23
                      },
                      "start": {
                        "column": 26,
                        "line": 23
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 23
                    },
                    "start": {
                      "column": 17,
                      "line": 23
                    }
                  },
                  "range": [
                    444,
                    447
                  ],
                  "params": [
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
                          445,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 18,
                            "line": 23
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        445,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 18,
                          "line": 23
                        }
                      }
                    }
                  ]
                },
                "range": [
                  444,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 23
                  },
                  "start": {
                    "column": 17,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              441,
              477
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 23
              },
              "start": {
                "column": 14,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            441,
            477
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 23
            },
            "start": {
              "column": 14,
              "line": 23
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        427,
        478
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 25
                },
                "start": {
                  "column": 7,
                  "line": 25
                }
              },
              "range": [
                487,
                497
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "range": [
                    496,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  }
                },
                "range": [
                  489,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 25
                  },
                  "start": {
                    "column": 9,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              486,
              497
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "range": [
              500,
              501
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 25
              },
              "start": {
                "column": 20,
                "line": 25
              }
            }
          },
          "range": [
            486,
            501
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        480,
        502
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 25
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
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
