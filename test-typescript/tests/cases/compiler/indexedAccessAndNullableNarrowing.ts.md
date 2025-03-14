__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1228
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "range": [
                110,
                117
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  93,
                  94
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  99,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "range": [
                93,
                108
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              89,
              117
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                122,
                123
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              122,
              124
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "range": [
                173,
                180
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  156,
                  157
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  162,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              },
              "range": [
                156,
                171
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              152,
              180
            ],
            "loc": {
              "end": {
                "column": 32,
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                185,
                186
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
            "range": [
              185,
              187
            ],
            "loc": {
              "end": {
                "column": 6,
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
          83,
          212
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 83,
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
                "column": 81,
                "line": 1
              },
              "start": {
                "column": 63,
                "line": 1
              }
            },
            "range": [
              63,
              81
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        67,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 1
                        },
                        "start": {
                          "column": 67,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      67,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 1
                      },
                      "start": {
                        "column": 67,
                        "line": 1
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
                        65,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 1
                        },
                        "start": {
                          "column": 65,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      65,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 1
                      },
                      "start": {
                        "column": 65,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    65,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 1
                    },
                    "start": {
                      "column": 65,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    72,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 1
                    },
                    "start": {
                      "column": 72,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                65,
                81
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 1
                },
                "start": {
                  "column": 65,
                  "line": 1
                }
              }
            }
          },
          "range": [
            62,
            81
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 1
            },
            "start": {
              "column": 62,
              "line": 1
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          61
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  28,
                  41
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      29,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 1
                      },
                      "start": {
                        "column": 29,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      37,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 1
                      },
                      "start": {
                        "column": 37,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  22,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              },
              "range": [
                22,
                41
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
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
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              41
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
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
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 1
                    },
                    "start": {
                      "column": 59,
                      "line": 1
                    }
                  }
                },
                "range": [
                  59,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 1
                  },
                  "start": {
                    "column": 59,
                    "line": 1
                  }
                }
              },
              "range": [
                53,
                60
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 1
                },
                "start": {
                  "column": 53,
                  "line": 1
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
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 43,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              43,
              60
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        212
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "range": [
                314,
                321
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  302,
                  303
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
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  308,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 9
                  }
                }
              },
              "range": [
                302,
                312
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "range": [
              298,
              321
            ],
            "loc": {
              "end": {
                "column": 27,
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                326,
                327
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
            "range": [
              326,
              328
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "range": [
                377,
                384
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  365,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  371,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              "range": [
                365,
                375
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              361,
              384
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                389,
                390
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              389,
              391
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          292,
          421
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 78,
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
          223,
          225
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 76,
                "line": 8
              },
              "start": {
                "column": 63,
                "line": 8
              }
            },
            "range": [
              277,
              290
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        281,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 8
                        },
                        "start": {
                          "column": 67,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      281,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 8
                      },
                      "start": {
                        "column": 67,
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
                        279,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 8
                        },
                        "start": {
                          "column": 65,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      279,
                      280
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 8
                      },
                      "start": {
                        "column": 65,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    279,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 8
                    },
                    "start": {
                      "column": 65,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    286,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 8
                    },
                    "start": {
                      "column": 72,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                279,
                290
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 8
                },
                "start": {
                  "column": 65,
                  "line": 8
                }
              }
            }
          },
          "range": [
            276,
            290
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 8
            },
            "start": {
              "column": 62,
              "line": 8
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 8
          },
          "start": {
            "column": 11,
            "line": 8
          }
        },
        "range": [
          225,
          275
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  242,
                  255
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      243,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      251,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 8
                      },
                      "start": {
                        "column": 37,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 28,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  236,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 8
                  }
                }
              },
              "range": [
                236,
                255
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
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
                226,
                227
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              226,
              255
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 8
              },
              "start": {
                "column": 12,
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
                    273,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 8
                    },
                    "start": {
                      "column": 59,
                      "line": 8
                    }
                  }
                },
                "range": [
                  273,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 8
                  },
                  "start": {
                    "column": 59,
                    "line": 8
                  }
                }
              },
              "range": [
                267,
                274
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 8
                },
                "start": {
                  "column": 53,
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
                257,
                258
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
            "out": false,
            "range": [
              257,
              274
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 8
              },
              "start": {
                "column": 43,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        214,
        421
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
                "name": "t",
                "optional": false,
                "range": [
                  529,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "range": [
                  533,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "range": [
                529,
                535
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              529,
              536
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
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  541,
                  542
                ],
                "loc": {
                  "end": {
                    "column": 5,
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
                "name": "p2",
                "optional": false,
                "range": [
                  545,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              },
              "range": [
                541,
                547
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              541,
              548
            ],
            "loc": {
              "end": {
                "column": 11,
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
          523,
          550
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 100,
            "line": 15
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
          432,
          434
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 15
              },
              "start": {
                "column": 35,
                "line": 15
              }
            },
            "range": [
              458,
              464
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
                    462,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 15
                    },
                    "start": {
                      "column": 39,
                      "line": 15
                    }
                  }
                },
                "range": [
                  462,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 15
                  },
                  "start": {
                    "column": 39,
                    "line": 15
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
                    460,
                    461
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 15
                    },
                    "start": {
                      "column": 37,
                      "line": 15
                    }
                  }
                },
                "range": [
                  460,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 15
                  },
                  "start": {
                    "column": 37,
                    "line": 15
                  }
                }
              },
              "range": [
                460,
                464
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 37,
                  "line": 15
                }
              }
            }
          },
          "range": [
            457,
            464
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 15
            },
            "start": {
              "column": 34,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 15
              },
              "start": {
                "column": 45,
                "line": 15
              }
            },
            "range": [
              468,
              488
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        481,
                        482
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 15
                        },
                        "start": {
                          "column": 58,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      481,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 15
                      },
                      "start": {
                        "column": 58,
                        "line": 15
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        477,
                        480
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
                              478,
                              479
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 15
                              },
                              "start": {
                                "column": 55,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            478,
                            479
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 15
                            },
                            "start": {
                              "column": 55,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 15
                        },
                        "start": {
                          "column": 54,
                          "line": 15
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "range": [
                        470,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 15
                        },
                        "start": {
                          "column": 47,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      470,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 15
                      },
                      "start": {
                        "column": 47,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    470,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 15
                    },
                    "start": {
                      "column": 47,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    486,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 15
                    },
                    "start": {
                      "column": 63,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                470,
                488
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 15
                },
                "start": {
                  "column": 47,
                  "line": 15
                }
              }
            }
          },
          "range": [
            466,
            488
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 15
            },
            "start": {
              "column": 43,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 98,
                "line": 15
              },
              "start": {
                "column": 69,
                "line": 15
              }
            },
            "range": [
              492,
              521
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        505,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 15
                        },
                        "start": {
                          "column": 82,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      505,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 15
                      },
                      "start": {
                        "column": 82,
                        "line": 15
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        501,
                        504
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
                              502,
                              503
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 15
                              },
                              "start": {
                                "column": 79,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            502,
                            503
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 15
                            },
                            "start": {
                              "column": 79,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 15
                        },
                        "start": {
                          "column": 78,
                          "line": 15
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "range": [
                        494,
                        501
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 15
                        },
                        "start": {
                          "column": 71,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      494,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 15
                      },
                      "start": {
                        "column": 71,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    494,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 15
                    },
                    "start": {
                      "column": 71,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        511,
                        513
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 15
                        },
                        "start": {
                          "column": 88,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        516,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 15
                        },
                        "start": {
                          "column": 93,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    511,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 15
                    },
                    "start": {
                      "column": 88,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                494,
                521
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 15
                },
                "start": {
                  "column": 71,
                  "line": 15
                }
              }
            }
          },
          "range": [
            490,
            521
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 15
            },
            "start": {
              "column": 67,
              "line": 15
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 15
          }
        },
        "range": [
          434,
          456
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
                435,
                436
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              435,
              436
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
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
                    454,
                    455
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 31,
                      "line": 15
                    }
                  }
                },
                "range": [
                  454,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 15
                  },
                  "start": {
                    "column": 31,
                    "line": 15
                  }
                }
              },
              "range": [
                448,
                455
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 15
                },
                "start": {
                  "column": 25,
                  "line": 15
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
                438,
                439
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              438,
              455
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        423,
        550
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyObject",
        "optional": false,
        "range": [
          614,
          623
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            632,
            645
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                633,
                639
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 22
                },
                "start": {
                  "column": 24,
                  "line": 22
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                641,
                644
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 22
                },
                "start": {
                  "column": 32,
                  "line": 22
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 22
            },
            "start": {
              "column": 23,
              "line": 22
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            626,
            632
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 22
            },
            "start": {
              "column": 17,
              "line": 22
            }
          }
        },
        "range": [
          626,
          645
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 22
          },
          "start": {
            "column": 17,
            "line": 22
          }
        }
      },
      "range": [
        609,
        646
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "range": [
          652,
          657
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AnyObject",
          "optional": false,
          "range": [
            660,
            669
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 23
            },
            "start": {
              "column": 13,
              "line": 23
            }
          }
        },
        "range": [
          660,
          669
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 23
          },
          "start": {
            "column": 13,
            "line": 23
          }
        }
      },
      "range": [
        647,
        670
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasOwnProperty",
        "optional": false,
        "range": [
          689,
          703
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 13,
                "line": 26
              },
              "start": {
                "column": 10,
                "line": 26
              }
            },
            "range": [
              736,
              739
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  738,
                  739
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
              "range": [
                738,
                739
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
            }
          },
          "range": [
            730,
            739
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            },
            "range": [
              749,
              762
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "range": [
                  751,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              },
              "range": [
                751,
                762
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 10,
                  "line": 27
                }
              }
            }
          },
          "range": [
            745,
            762
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 18,
            "line": 28
          },
          "start": {
            "column": 1,
            "line": 28
          }
        },
        "range": [
          765,
          782
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "range": [
              767,
              771
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 28
              },
              "start": {
                "column": 3,
                "line": 28
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 28
              },
              "start": {
                "column": 11,
                "line": 28
              }
            },
            "range": [
              775,
              782
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
                    781,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 28
                    },
                    "start": {
                      "column": 17,
                      "line": 28
                    }
                  }
                },
                "range": [
                  781,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 28
                  },
                  "start": {
                    "column": 17,
                    "line": 28
                  }
                }
              },
              "range": [
                775,
                782
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            }
          },
          "range": [
            767,
            782
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 28
            },
            "start": {
              "column": 3,
              "line": 28
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 25
          },
          "start": {
            "column": 31,
            "line": 25
          }
        },
        "range": [
          703,
          724
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyObject",
                "optional": false,
                "range": [
                  714,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 25
                  },
                  "start": {
                    "column": 42,
                    "line": 25
                  }
                }
              },
              "range": [
                714,
                723
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 25
                },
                "start": {
                  "column": 42,
                  "line": 25
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
                704,
                705
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 25
                },
                "start": {
                  "column": 32,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              704,
              723
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 25
              },
              "start": {
                "column": 32,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        672,
        783
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          812,
          875
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setState",
              "optional": false,
              "range": [
                818,
                826
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 31
                    },
                    "start": {
                      "column": 35,
                      "line": 31
                    }
                  },
                  "range": [
                    849,
                    852
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        851,
                        852
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 31
                        },
                        "start": {
                          "column": 37,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      851,
                      852
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 31
                      },
                      "start": {
                        "column": 37,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  846,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 31
                  },
                  "start": {
                    "column": 32,
                    "line": 31
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 31
                    },
                    "start": {
                      "column": 45,
                      "line": 31
                    }
                  },
                  "range": [
                    859,
                    865
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
                          863,
                          864
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 31
                          },
                          "start": {
                            "column": 49,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        863,
                        864
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 31
                        },
                        "start": {
                          "column": 49,
                          "line": 31
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          861,
                          862
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 31
                          },
                          "start": {
                            "column": 47,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        861,
                        862
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 31
                        },
                        "start": {
                          "column": 47,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      861,
                      865
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 31
                      },
                      "start": {
                        "column": 47,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  854,
                  865
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 31
                  },
                  "start": {
                    "column": 40,
                    "line": 31
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 31
                },
                "start": {
                  "column": 52,
                  "line": 31
                }
              },
              "range": [
                866,
                872
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  868,
                  872
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 31
                  },
                  "start": {
                    "column": 54,
                    "line": 31
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              },
              "range": [
                826,
                845
              ],
              "params": [
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
                        "name": "S",
                        "optional": false,
                        "range": [
                          843,
                          844
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 31
                          },
                          "start": {
                            "column": 29,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        843,
                        844
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 31
                        },
                        "start": {
                          "column": 29,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      837,
                      844
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 31
                      },
                      "start": {
                        "column": 23,
                        "line": 31
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
                      827,
                      828
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    827,
                    844
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 31
                    },
                    "start": {
                      "column": 13,
                      "line": 31
                    }
                  }
                }
              ]
            },
            "range": [
              818,
              873
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 27,
            "line": 30
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Store",
        "optional": false,
        "range": [
          795,
          800
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 30
          },
          "start": {
            "column": 10,
            "line": 30
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 30
          },
          "start": {
            "column": 15,
            "line": 30
          }
        },
        "range": [
          800,
          811
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "range": [
                  805,
                  810
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 30
                  },
                  "start": {
                    "column": 20,
                    "line": 30
                  }
                }
              },
              "range": [
                805,
                810
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 30
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                801,
                802
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 30
                },
                "start": {
                  "column": 16,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              801,
              810
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 30
              },
              "start": {
                "column": 16,
                "line": 30
              }
            }
          }
        ]
      },
      "range": [
        785,
        875
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        877,
        1227
      ],
      "attributes": [],
      "declaration": {
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
                    "name": "value",
                    "optional": false,
                    "range": [
                      1027,
                      1032
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 39
                      },
                      "start": {
                        "column": 10,
                        "line": 39
                      }
                    }
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        1077,
                        1086
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 39
                        },
                        "start": {
                          "column": 60,
                          "line": 39
                        }
                      }
                    },
                    "consequent": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "range": [
                          1064,
                          1069
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 39
                          },
                          "start": {
                            "column": 47,
                            "line": 39
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          1070,
                          1073
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 39
                          },
                          "start": {
                            "column": 53,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        1064,
                        1074
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 39
                        },
                        "start": {
                          "column": 47,
                          "line": 39
                        }
                      }
                    },
                    "test": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "range": [
                            1050,
                            1055
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 39
                            },
                            "start": {
                              "column": 33,
                              "line": 39
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            1057,
                            1060
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 39
                            },
                            "start": {
                              "column": 40,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasOwnProperty",
                        "optional": false,
                        "range": [
                          1035,
                          1049
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 39
                          },
                          "start": {
                            "column": 18,
                            "line": 39
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1035,
                        1061
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 39
                        },
                        "start": {
                          "column": 18,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1035,
                      1086
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 39
                      },
                      "start": {
                        "column": 18,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1027,
                    1086
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 39
                    },
                    "start": {
                      "column": 10,
                      "line": 39
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                1021,
                1087
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "argument": null,
                "range": [
                  1117,
                  1124
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 40
                  },
                  "start": {
                    "column": 29,
                    "line": 40
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    1096,
                    1101
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1106,
                    1115
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 40
                    },
                    "start": {
                      "column": 18,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1096,
                  1115
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              },
              "range": [
                1092,
                1124
              ],
              "loc": {
                "end": {
                  "column": 36,
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      1144,
                      1147
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 41
                      },
                      "start": {
                        "column": 19,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      1149,
                      1154
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 41
                      },
                      "start": {
                        "column": 24,
                        "line": 41
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
                    "name": "store",
                    "optional": false,
                    "range": [
                      1129,
                      1134
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 41
                      },
                      "start": {
                        "column": 4,
                        "line": 41
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setState",
                    "optional": false,
                    "range": [
                      1135,
                      1143
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 41
                      },
                      "start": {
                        "column": 10,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1129,
                    1143
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
                    }
                  }
                },
                "optional": false,
                "range": [
                  1129,
                  1155
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "range": [
                1129,
                1156
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "argument": null,
                "range": [
                  1186,
                  1193
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 42
                  },
                  "start": {
                    "column": 29,
                    "line": 42
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    1165,
                    1170
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1175,
                    1184
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 42
                    },
                    "start": {
                      "column": 18,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1165,
                  1184
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              },
              "range": [
                1161,
                1193
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      1213,
                      1216
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 43
                      },
                      "start": {
                        "column": 19,
                        "line": 43
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      1218,
                      1223
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 43
                      },
                      "start": {
                        "column": 24,
                        "line": 43
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
                    "name": "store",
                    "optional": false,
                    "range": [
                      1198,
                      1203
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 43
                      },
                      "start": {
                        "column": 4,
                        "line": 43
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setState",
                    "optional": false,
                    "range": [
                      1204,
                      1212
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 43
                      },
                      "start": {
                        "column": 10,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1198,
                    1212
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
                    }
                  }
                },
                "optional": false,
                "range": [
                  1198,
                  1224
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              "range": [
                1198,
                1225
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            }
          ],
          "range": [
            1015,
            1227
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 44
            },
            "start": {
              "column": 37,
              "line": 38
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "syncStoreProp",
          "optional": false,
          "range": [
            893,
            906
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 34
            },
            "start": {
              "column": 16,
              "line": 34
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "store",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 38
                },
                "start": {
                  "column": 7,
                  "line": 38
                }
              },
              "range": [
                985,
                995
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    992,
                    995
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          993,
                          994
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 38
                          },
                          "start": {
                            "column": 15,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        993,
                        994
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 38
                        },
                        "start": {
                          "column": 15,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 38
                    },
                    "start": {
                      "column": 14,
                      "line": 38
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "range": [
                    987,
                    992
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 38
                    },
                    "start": {
                      "column": 9,
                      "line": 38
                    }
                  }
                },
                "range": [
                  987,
                  995
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 38
                  },
                  "start": {
                    "column": 9,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              980,
              995
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 38
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 38
                },
                "start": {
                  "column": 24,
                  "line": 38
                }
              },
              "range": [
                1002,
                1005
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    1004,
                    1005
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 38
                    },
                    "start": {
                      "column": 26,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1004,
                  1005
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 38
                  },
                  "start": {
                    "column": 26,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              997,
              1005
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 38
              },
              "start": {
                "column": 19,
                "line": 38
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 38
                },
                "start": {
                  "column": 32,
                  "line": 38
                }
              },
              "range": [
                1010,
                1013
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1012,
                    1013
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 38
                    },
                    "start": {
                      "column": 34,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1012,
                  1013
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 38
                  },
                  "start": {
                    "column": 34,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              1007,
              1013
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 38
              },
              "start": {
                "column": 29,
                "line": 38
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 1,
              "line": 38
            },
            "start": {
              "column": 29,
              "line": 34
            }
          },
          "range": [
            906,
            979
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "range": [
                    922,
                    927
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 35
                    },
                    "start": {
                      "column": 14,
                      "line": 35
                    }
                  }
                },
                "range": [
                  922,
                  927
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 35
                  },
                  "start": {
                    "column": 14,
                    "line": 35
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  912,
                  913
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              },
              "out": false,
              "range": [
                912,
                927
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    950,
                    953
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          951,
                          952
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 36
                          },
                          "start": {
                            "column": 22,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        951,
                        952
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 36
                        },
                        "start": {
                          "column": 22,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 36
                    },
                    "start": {
                      "column": 21,
                      "line": 36
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "range": [
                    943,
                    950
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                "range": [
                  943,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 36
                  },
                  "start": {
                    "column": 14,
                    "line": 36
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  933,
                  934
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              },
              "out": false,
              "range": [
                933,
                953
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
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
                    "name": "S",
                    "optional": false,
                    "range": [
                      975,
                      976
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 37
                      },
                      "start": {
                        "column": 20,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    975,
                    976
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 37
                    },
                    "start": {
                      "column": 20,
                      "line": 37
                    }
                  }
                },
                "range": [
                  969,
                  976
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 37
                  },
                  "start": {
                    "column": 14,
                    "line": 37
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
                  959,
                  960
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "out": false,
              "range": [
                959,
                976
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            }
          ]
        },
        "range": [
          884,
          1227
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 34
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
