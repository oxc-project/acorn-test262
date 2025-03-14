__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    224
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  },
                  "range": [
                    19,
                    27
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      21,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  18,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              },
              "range": [
                28,
                36
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  30,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              17,
              37
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          11,
          39
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "range": [
        0,
        40
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          47,
          50
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              },
              "range": [
                63,
                89
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
                        79,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 5
                        },
                        "start": {
                          "column": 37,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      79,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 5
                      },
                      "start": {
                        "column": 37,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    73,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 5
                    },
                    "start": {
                      "column": 31,
                      "line": 5
                    }
                  }
                },
                "key": {
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
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 5
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
                        85,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 5
                        },
                        "start": {
                          "column": 43,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      85,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 5
                      },
                      "start": {
                        "column": 43,
                        "line": 5
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
                        83,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 5
                        },
                        "start": {
                          "column": 41,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      83,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 5
                      },
                      "start": {
                        "column": 41,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    83,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 41,
                      "line": 5
                    }
                  }
                },
                "range": [
                  65,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              57,
              89
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 56,
              "line": 5
            },
            "start": {
              "column": 49,
              "line": 5
            }
          },
          "range": [
            91,
            98
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              94,
              98
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 5
              },
              "start": {
                "column": 52,
                "line": 5
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 11,
              "line": 5
            }
          },
          "range": [
            53,
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
                  54,
                  55
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
              "out": false,
              "range": [
                54,
                55
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
          ]
        },
        "range": [
          53,
          98
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "range": [
        42,
        99
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          105,
          108
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 6
                },
                "start": {
                  "column": 38,
                  "line": 6
                }
              },
              "range": [
                138,
                166
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
                        154,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 6
                        },
                        "start": {
                          "column": 54,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      154,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 6
                      },
                      "start": {
                        "column": 54,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    148,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 6
                    },
                    "start": {
                      "column": 48,
                      "line": 6
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    143,
                    144
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 6
                    },
                    "start": {
                      "column": 43,
                      "line": 6
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
                        162,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 6
                        },
                        "start": {
                          "column": 62,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      162,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 6
                      },
                      "start": {
                        "column": 62,
                        "line": 6
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "range": [
                        158,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 6
                        },
                        "start": {
                          "column": 58,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      158,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 6
                      },
                      "start": {
                        "column": 58,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    158,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 6
                    },
                    "start": {
                      "column": 58,
                      "line": 6
                    }
                  }
                },
                "range": [
                  140,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 6
                  },
                  "start": {
                    "column": 40,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              132,
              166
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 6
              },
              "start": {
                "column": 32,
                "line": 6
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 75,
              "line": 6
            },
            "start": {
              "column": 68,
              "line": 6
            }
          },
          "range": [
            168,
            175
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              171,
              175
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 6
              },
              "start": {
                "column": 71,
                "line": 6
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 11,
              "line": 6
            }
          },
          "range": [
            111,
            131
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
                    122,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                "range": [
                  122,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 6
                  },
                  "start": {
                    "column": 22,
                    "line": 6
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
                  112,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                112,
                130
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          111,
          175
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 6
          }
        }
      },
      "range": [
        100,
        176
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              },
              "range": [
                191,
                196
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    193,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                },
                "range": [
                  193,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              190,
              196
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            190,
            196
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        178,
        197
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              },
              "range": [
                211,
                216
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    213,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                },
                "range": [
                  213,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              210,
              216
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            210,
            216
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        198,
        217
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 9
        },
        "start": {
          "column": 0,
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
            218,
            219
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            222,
            223
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
          218,
          223
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        218,
        224
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 6,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
