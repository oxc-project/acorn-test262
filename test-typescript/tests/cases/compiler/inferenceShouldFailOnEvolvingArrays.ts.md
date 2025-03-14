__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    126,
    660
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "range": [
                      227,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      231,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 20,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    227,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    215,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    223,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  215,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                215,
                238
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              215,
              239
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "range": [
                251,
                254
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              244,
              255
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
        "range": [
          209,
          257
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 83,
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
        "name": "logLength",
        "optional": false,
        "range": [
          135,
          144
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 3
              },
              "start": {
                "column": 58,
                "line": 3
              }
            },
            "range": [
              184,
              204
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    202,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 3
                    },
                    "start": {
                      "column": 76,
                      "line": 3
                    }
                  }
                },
                "range": [
                  202,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 3
                  },
                  "start": {
                    "column": 76,
                    "line": 3
                  }
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      194,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 3
                      },
                      "start": {
                        "column": 68,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    194,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 3
                    },
                    "start": {
                      "column": 68,
                      "line": 3
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    189,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 3
                    },
                    "start": {
                      "column": 63,
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
                      198,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 3
                      },
                      "start": {
                        "column": 72,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    198,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 3
                    },
                    "start": {
                      "column": 72,
                      "line": 3
                    }
                  }
                },
                "range": [
                  186,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 3
                  },
                  "start": {
                    "column": 60,
                    "line": 3
                  }
                }
              },
              "range": [
                186,
                204
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 3
                },
                "start": {
                  "column": 60,
                  "line": 3
                }
              }
            }
          },
          "range": [
            181,
            204
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 3
            },
            "start": {
              "column": 55,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 3
          },
          "start": {
            "column": 79,
            "line": 3
          }
        },
        "range": [
          205,
          208
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              207,
              208
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 3
              },
              "start": {
                "column": 81,
                "line": 3
              }
            }
          },
          "range": [
            207,
            208
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 3
            },
            "start": {
              "column": 81,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          144,
          180
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                155,
                161
              ],
              "loc": {
                "end": {
                  "column": 35,
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
              "name": "T",
              "optional": false,
              "range": [
                145,
                146
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
              145,
              161
            ],
            "loc": {
              "end": {
                "column": 35,
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
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                173,
                179
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 3
                },
                "start": {
                  "column": 47,
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
                163,
                164
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
              163,
              179
            ],
            "loc": {
              "end": {
                "column": 53,
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
        126,
        257
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              268,
              270
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "logLength",
          "optional": false,
          "range": [
            258,
            267
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          258,
          271
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        258,
        272
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
              287,
              288
            ],
            "loc": {
              "end": {
                "column": 5,
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
            287,
            288
          ],
          "loc": {
            "end": {
              "column": 5,
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
      "kind": "let",
      "range": [
        283,
        289
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
          "name": "z",
          "optional": false,
          "range": [
            290,
            291
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                304,
                306
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "logLength",
            "optional": false,
            "range": [
              294,
              303
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "optional": false,
          "range": [
            294,
            307
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "range": [
          290,
          307
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        290,
        308
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "range": [
                        455,
                        458
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        459,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 12
                        },
                        "start": {
                          "column": 20,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      455,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 12
                      },
                      "start": {
                        "column": 16,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      462,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 12
                      },
                      "start": {
                        "column": 23,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    455,
                    468
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    443,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    451,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  443,
                  454
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                443,
                469
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              443,
              470
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "range": [
                482,
                485
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              475,
              486
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          437,
          488
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 90,
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
        "name": "logFirstLength",
        "optional": false,
        "range": [
          356,
          370
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 85,
                "line": 11
              },
              "start": {
                "column": 65,
                "line": 11
              }
            },
            "range": [
              412,
              432
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    430,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 11
                    },
                    "start": {
                      "column": 83,
                      "line": 11
                    }
                  }
                },
                "range": [
                  430,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 11
                  },
                  "start": {
                    "column": 83,
                    "line": 11
                  }
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      422,
                      423
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 11
                      },
                      "start": {
                        "column": 75,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    422,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 11
                    },
                    "start": {
                      "column": 75,
                      "line": 11
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    417,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 11
                    },
                    "start": {
                      "column": 70,
                      "line": 11
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
                      426,
                      427
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 11
                      },
                      "start": {
                        "column": 79,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    426,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 11
                    },
                    "start": {
                      "column": 79,
                      "line": 11
                    }
                  }
                },
                "range": [
                  414,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 11
                  },
                  "start": {
                    "column": 67,
                    "line": 11
                  }
                }
              },
              "range": [
                414,
                432
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 11
                },
                "start": {
                  "column": 67,
                  "line": 11
                }
              }
            }
          },
          "range": [
            409,
            432
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 11
            },
            "start": {
              "column": 62,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 89,
            "line": 11
          },
          "start": {
            "column": 86,
            "line": 11
          }
        },
        "range": [
          433,
          436
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              435,
              436
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 11
              },
              "start": {
                "column": 88,
                "line": 11
              }
            }
          },
          "range": [
            435,
            436
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 11
            },
            "start": {
              "column": 88,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 11
          },
          "start": {
            "column": 23,
            "line": 11
          }
        },
        "range": [
          370,
          408
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  381,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 11
                  },
                  "start": {
                    "column": 34,
                    "line": 11
                  }
                }
              },
              "range": [
                381,
                389
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 11
                },
                "start": {
                  "column": 34,
                  "line": 11
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
                371,
                372
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              371,
              389
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                401,
                407
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 11
                },
                "start": {
                  "column": 54,
                  "line": 11
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
                391,
                392
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 11
                },
                "start": {
                  "column": 44,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              391,
              407
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 11
              },
              "start": {
                "column": 44,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        347,
        488
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  505,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              504,
              508
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "logFirstLength",
          "optional": false,
          "range": [
            489,
            503
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          489,
          509
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        489,
        510
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 15
        },
        "start": {
          "column": 0,
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
            "name": "zz",
            "optional": false,
            "range": [
              525,
              527
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              530,
              532
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            525,
            532
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        521,
        533
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  552,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "logLength",
              "optional": false,
              "range": [
                542,
                551
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
            "optional": false,
            "range": [
              542,
              555
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
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
            "name": "zz",
            "optional": false,
            "range": [
              534,
              536
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 17
              },
              "start": {
                "column": 0,
                "line": 17
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "range": [
              537,
              541
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 17
              },
              "start": {
                "column": 3,
                "line": 17
              }
            }
          },
          "range": [
            534,
            541
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          534,
          556
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        534,
        557
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
          "name": "zz",
          "optional": false,
          "range": [
            595,
            597
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    616,
                    618
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
                }
              ],
              "range": [
                615,
                619
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "logFirstLength",
            "optional": false,
            "range": [
              600,
              614
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 18
              },
              "start": {
                "column": 5,
                "line": 18
              }
            }
          },
          "optional": false,
          "range": [
            600,
            620
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 18
            },
            "start": {
              "column": 5,
              "line": 18
            }
          }
        },
        "range": [
          595,
          620
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        595,
        621
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 65,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
