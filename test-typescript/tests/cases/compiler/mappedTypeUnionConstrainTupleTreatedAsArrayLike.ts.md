__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    455
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HomomorphicMappedType",
        "optional": false,
        "range": [
          5,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 46,
                  "line": 1
                }
              }
            },
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 1
              },
              "start": {
                "column": 46,
                "line": 1
              }
            }
          },
          "range": [
            40,
            47
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            35,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 35,
              "line": 1
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  52,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 1
                  },
                  "start": {
                    "column": 52,
                    "line": 1
                  }
                }
              },
              "range": [
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 1
                },
                "start": {
                  "column": 52,
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
                  50,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              },
              "range": [
                50,
                51
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 50,
                  "line": 1
                }
              }
            },
            "range": [
              50,
              54
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 1
              },
              "start": {
                "column": 50,
                "line": 1
              }
            }
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "range": [
              63,
              69
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 1
              },
              "start": {
                "column": 63,
                "line": 1
              }
            }
          },
          "falseType": {
            "type": "TSNullKeyword",
            "range": [
              82,
              86
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 1
              },
              "start": {
                "column": 82,
                "line": 1
              }
            }
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "range": [
              72,
              79
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 1
              },
              "start": {
                "column": 72,
                "line": 1
              }
            }
          },
          "range": [
            50,
            86
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 1
            },
            "start": {
              "column": 50,
              "line": 1
            }
          }
        },
        "range": [
          32,
          88
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 1
          },
          "start": {
            "column": 32,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 26,
            "line": 1
          }
        },
        "range": [
          26,
          29
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
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              27,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        88
      ],
      "loc": {
        "end": {
          "column": 88,
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    },
                    "range": [
                      158,
                      165
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          160,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 13,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        160,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    155,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      168,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        195,
                        198
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
                              196,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 4
                              },
                              "start": {
                                "column": 49,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            196,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 4
                            },
                            "start": {
                              "column": 49,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 4
                        },
                        "start": {
                          "column": 48,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HomomorphicMappedType",
                      "optional": false,
                      "range": [
                        174,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 4
                        },
                        "start": {
                          "column": 27,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      174,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 4
                      },
                      "start": {
                        "column": 27,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    168,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                "range": [
                  155,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 51,
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
              149,
              198
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 4
              },
              "start": {
                "column": 2,
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
                  "name": "arr2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    },
                    "range": [
                      211,
                      227
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "range": [
                            222,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 5
                            },
                            "start": {
                              "column": 23,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          222,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        213,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 14,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    207,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      230,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 5
                      },
                      "start": {
                        "column": 31,
                        "line": 5
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        257,
                        260
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
                              258,
                              259
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 5
                              },
                              "start": {
                                "column": 59,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            258,
                            259
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 5
                            },
                            "start": {
                              "column": 59,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 5
                        },
                        "start": {
                          "column": 58,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HomomorphicMappedType",
                      "optional": false,
                      "range": [
                        236,
                        257
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 5
                        },
                        "start": {
                          "column": 37,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      236,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 5
                      },
                      "start": {
                        "column": 37,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    230,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 5
                    },
                    "start": {
                      "column": 31,
                      "line": 5
                    }
                  }
                },
                "range": [
                  207,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 61,
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
            "kind": "const",
            "range": [
              201,
              260
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "range": [
          145,
          262
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 55,
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
        "name": "test1",
        "optional": false,
        "range": [
          99,
          104
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 3
              },
              "start": {
                "column": 50,
                "line": 3
              }
            },
            "range": [
              140,
              143
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  142,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
                  }
                }
              },
              "range": [
                142,
                143
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              }
            }
          },
          "range": [
            136,
            143
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 3
            },
            "start": {
              "column": 46,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 45,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        },
        "range": [
          104,
          135
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        116,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    115,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        127,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 3
                        },
                        "start": {
                          "column": 37,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    126,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 36,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                115,
                134
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 25,
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
                105,
                106
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              105,
              134
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        90,
        262
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
                        "column": 18,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    },
                    "range": [
                      341,
                      348
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          343,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 9
                          },
                          "start": {
                            "column": 13,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        343,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    338,
                    348
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
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      351,
                      353
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        378,
                        381
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
                              379,
                              380
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 9
                              },
                              "start": {
                                "column": 49,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            379,
                            380
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 9
                            },
                            "start": {
                              "column": 49,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 9
                        },
                        "start": {
                          "column": 48,
                          "line": 9
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HomomorphicMappedType",
                      "optional": false,
                      "range": [
                        357,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 9
                        },
                        "start": {
                          "column": 27,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      357,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 9
                      },
                      "start": {
                        "column": 27,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    351,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 9
                    },
                    "start": {
                      "column": 21,
                      "line": 9
                    }
                  }
                },
                "range": [
                  338,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              332,
              381
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
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
                  "name": "arr2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    },
                    "range": [
                      403,
                      419
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "range": [
                            414,
                            417
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 10
                            },
                            "start": {
                              "column": 23,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          414,
                          419
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 10
                          },
                          "start": {
                            "column": 23,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        405,
                        419
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 10
                        },
                        "start": {
                          "column": 14,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    399,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
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
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      422,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 31,
                        "line": 10
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        449,
                        452
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
                              450,
                              451
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 10
                              },
                              "start": {
                                "column": 59,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            450,
                            451
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 10
                            },
                            "start": {
                              "column": 59,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 10
                        },
                        "start": {
                          "column": 58,
                          "line": 10
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HomomorphicMappedType",
                      "optional": false,
                      "range": [
                        428,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 10
                        },
                        "start": {
                          "column": 37,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      428,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 10
                      },
                      "start": {
                        "column": 37,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    422,
                    452
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 10
                    },
                    "start": {
                      "column": 31,
                      "line": 10
                    }
                  }
                },
                "range": [
                  399,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 61,
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
              393,
              452
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "range": [
          328,
          454
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 64,
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
        "name": "test2",
        "optional": false,
        "range": [
          273,
          278
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 8
              },
              "start": {
                "column": 59,
                "line": 8
              }
            },
            "range": [
              323,
              326
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  325,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 8
                  },
                  "start": {
                    "column": 61,
                    "line": 8
                  }
                }
              },
              "range": [
                325,
                326
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 8
                },
                "start": {
                  "column": 61,
                  "line": 8
                }
              }
            }
          },
          "range": [
            319,
            326
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 8
            },
            "start": {
              "column": 55,
              "line": 8
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        },
        "range": [
          278,
          318
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        290,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 8
                        },
                        "start": {
                          "column": 26,
                          "line": 8
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
                      "column": 33,
                      "line": 8
                    },
                    "start": {
                      "column": 25,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          310,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 8
                          },
                          "start": {
                            "column": 46,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      309,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 8
                      },
                      "start": {
                        "column": 45,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    300,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 8
                    },
                    "start": {
                      "column": 36,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                289,
                317
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 8
                },
                "start": {
                  "column": 25,
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
                279,
                280
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              279,
              317
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        264,
        454
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
