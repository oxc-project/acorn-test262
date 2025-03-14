__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    221
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PromisedTuple",
        "optional": false,
        "range": [
          27,
          40
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
            "name": "U",
            "optional": false,
            "range": [
              90,
              91
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
          "range": [
            90,
            91
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
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                },
                "range": [
                  102,
                  111
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "H",
                      "optional": false,
                      "range": [
                        110,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      110,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    104,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 18,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                101,
                111
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  116,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 30,
                    "line": 4
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                },
                "range": [
                  120,
                  129
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "range": [
                        128,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      128,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 4
                      },
                      "start": {
                        "column": 42,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    122,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 4
                    },
                    "start": {
                      "column": 36,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                113,
                129
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 81,
                "line": 4
              },
              "start": {
                "column": 45,
                "line": 4
              }
            },
            "range": [
              131,
              167
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      142,
                      145
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "H",
                          "optional": false,
                          "range": [
                            143,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 4
                            },
                            "start": {
                              "column": 57,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          143,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 4
                          },
                          "start": {
                            "column": 57,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 4
                      },
                      "start": {
                        "column": 56,
                        "line": 4
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      135,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 4
                      },
                      "start": {
                        "column": 49,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    135,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 4
                    },
                    "start": {
                      "column": 49,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        163,
                        166
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "range": [
                              164,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 4
                              },
                              "start": {
                                "column": 78,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            164,
                            165
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 4
                            },
                            "start": {
                              "column": 78,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 4
                        },
                        "start": {
                          "column": 77,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PromisedTuple",
                      "optional": false,
                      "range": [
                        150,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 4
                        },
                        "start": {
                          "column": 64,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      150,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 4
                      },
                      "start": {
                        "column": 64,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    147,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 4
                    },
                    "start": {
                      "column": 61,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                134,
                167
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 4
                },
                "start": {
                  "column": 48,
                  "line": 4
                }
              }
            }
          },
          "range": [
            100,
            167
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "range": [
            175,
            177
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 4
            },
            "start": {
              "column": 89,
              "line": 4
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "range": [
            170,
            172
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 4
            },
            "start": {
              "column": 84,
              "line": 4
            }
          }
        },
        "range": [
          90,
          177
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 4
          },
          "start": {
            "column": 4,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          40,
          83
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  51,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              },
              "range": [
                51,
                56
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
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
                41,
                42
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
            "out": false,
            "range": [
              41,
              56
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      66,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 3
                      },
                      "start": {
                        "column": 44,
                        "line": 3
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 3
                      },
                      "start": {
                        "column": 48,
                        "line": 3
                      }
                    },
                    "range": [
                      70,
                      73
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "L",
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
                    }
                  },
                  "range": [
                    63,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 3
                    },
                    "start": {
                      "column": 41,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 3
                  },
                  "start": {
                    "column": 53,
                    "line": 3
                  }
                },
                "range": [
                  75,
                  82
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    78,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 3
                    },
                    "start": {
                      "column": 56,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                62,
                82
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 3
                },
                "start": {
                  "column": 40,
                  "line": 3
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
                58,
                59
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 36,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              58,
              82
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 3
              },
              "start": {
                "column": 36,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        177
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promised",
        "optional": false,
        "range": [
          184,
          192
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            208,
            219
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      210,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 31,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    210,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 31,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      213,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 34,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    213,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 34,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      216,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 6
                      },
                      "start": {
                        "column": 37,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    216,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 6
                    },
                    "start": {
                      "column": 37,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                209,
                218
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 6
            },
            "start": {
              "column": 29,
              "line": 6
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "PromisedTuple",
          "optional": false,
          "range": [
            195,
            208
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 16,
              "line": 6
            }
          }
        },
        "range": [
          195,
          219
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 6
          },
          "start": {
            "column": 16,
            "line": 6
          }
        }
      },
      "range": [
        179,
        219
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
