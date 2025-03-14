__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1409
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                51,
                451
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OrderByDescending",
                    "optional": false,
                    "range": [
                      61,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 4
                          },
                          "start": {
                            "column": 38,
                            "line": 4
                          }
                        },
                        "range": [
                          91,
                          99
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            93,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 4
                            },
                            "start": {
                              "column": 40,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        79,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 4
                        },
                        "start": {
                          "column": 26,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
                        "line": 4
                      }
                    },
                    "range": [
                      100,
                      122
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          119,
                          122
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
                                120,
                                121
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 4
                                },
                                "start": {
                                  "column": 67,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              120,
                              121
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 4
                              },
                              "start": {
                                "column": 67,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 4
                          },
                          "start": {
                            "column": 66,
                            "line": 4
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OrderedEnumerable",
                        "optional": false,
                        "range": [
                          102,
                          119
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 4
                          },
                          "start": {
                            "column": 49,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        102,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 4
                        },
                        "start": {
                          "column": 49,
                          "line": 4
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    61,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "range": [
                      132,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 5
                          },
                          "start": {
                            "column": 33,
                            "line": 5
                          }
                        },
                        "range": [
                          157,
                          179
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 5
                                  }
                                },
                                "range": [
                                  167,
                                  170
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      169,
                                      170
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 45,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    169,
                                    170
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 5
                                    }
                                  }
                                }
                              },
                              "range": [
                                160,
                                170
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 5
                                },
                                "start": {
                                  "column": 36,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 5
                              },
                              "start": {
                                "column": 48,
                                "line": 5
                              }
                            },
                            "range": [
                              172,
                              179
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "range": [
                                  175,
                                  179
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                175,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 5
                                },
                                "start": {
                                  "column": 51,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            159,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 5
                            },
                            "start": {
                              "column": 35,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        146,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 5
                        },
                        "start": {
                          "column": 22,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 5
                      },
                      "start": {
                        "column": 56,
                        "line": 5
                      }
                    },
                    "range": [
                      180,
                      211
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          192,
                          211
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                201,
                                210
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "range": [
                                      202,
                                      206
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 82,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    202,
                                    206
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 82,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 5
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
                                      208,
                                      209
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 85,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 84,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    208,
                                    209
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 85,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 84,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 86,
                                  "line": 5
                                },
                                "start": {
                                  "column": 77,
                                  "line": 5
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "range": [
                                193,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 5
                                },
                                "start": {
                                  "column": 69,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              193,
                              210
                            ],
                            "loc": {
                              "end": {
                                "column": 86,
                                "line": 5
                              },
                              "start": {
                                "column": 69,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 5
                          },
                          "start": {
                            "column": 68,
                            "line": 5
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "range": [
                          182,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 5
                          },
                          "start": {
                            "column": 58,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        182,
                        211
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 5
                        },
                        "start": {
                          "column": 58,
                          "line": 5
                        }
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    },
                    "range": [
                      139,
                      145
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "range": [
                            140,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          140,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 5
                          },
                          "start": {
                            "column": 16,
                            "line": 5
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    132,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "range": [
                      221,
                      228
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 6
                          },
                          "start": {
                            "column": 43,
                            "line": 6
                          }
                        },
                        "range": [
                          256,
                          278
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 53,
                                    "line": 6
                                  }
                                },
                                "range": [
                                  266,
                                  269
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      268,
                                      269
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    268,
                                    269
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 6
                                    }
                                  }
                                }
                              },
                              "range": [
                                259,
                                269
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 6
                                },
                                "start": {
                                  "column": 46,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 6
                              },
                              "start": {
                                "column": 58,
                                "line": 6
                              }
                            },
                            "range": [
                              271,
                              278
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "range": [
                                  274,
                                  278
                                ],
                                "loc": {
                                  "end": {
                                    "column": 65,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                274,
                                278
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 6
                                },
                                "start": {
                                  "column": 61,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            258,
                            278
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 6
                            },
                            "start": {
                              "column": 45,
                              "line": 6
                            }
                          }
                        }
                      },
                      "range": [
                        245,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 6
                        },
                        "start": {
                          "column": 32,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "elementSelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 6
                          },
                          "start": {
                            "column": 82,
                            "line": 6
                          }
                        },
                        "range": [
                          295,
                          321
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 95,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 92,
                                    "line": 6
                                  }
                                },
                                "range": [
                                  305,
                                  308
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      307,
                                      308
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 95,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 94,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    307,
                                    308
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 95,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 94,
                                      "line": 6
                                    }
                                  }
                                }
                              },
                              "range": [
                                298,
                                308
                              ],
                              "loc": {
                                "end": {
                                  "column": 95,
                                  "line": 6
                                },
                                "start": {
                                  "column": 85,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 108,
                                "line": 6
                              },
                              "start": {
                                "column": 97,
                                "line": 6
                              }
                            },
                            "range": [
                              310,
                              321
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TElement",
                                "optional": false,
                                "range": [
                                  313,
                                  321
                                ],
                                "loc": {
                                  "end": {
                                    "column": 108,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 100,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                313,
                                321
                              ],
                              "loc": {
                                "end": {
                                  "column": 108,
                                  "line": 6
                                },
                                "start": {
                                  "column": 100,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            297,
                            321
                          ],
                          "loc": {
                            "end": {
                              "column": 108,
                              "line": 6
                            },
                            "start": {
                              "column": 84,
                              "line": 6
                            }
                          }
                        }
                      },
                      "range": [
                        280,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 6
                        },
                        "start": {
                          "column": 67,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 147,
                        "line": 6
                      },
                      "start": {
                        "column": 109,
                        "line": 6
                      }
                    },
                    "range": [
                      322,
                      360
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          334,
                          360
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                343,
                                359
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "range": [
                                      344,
                                      348
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 135,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 131,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    344,
                                    348
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 135,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 131,
                                      "line": 6
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TElement",
                                    "optional": false,
                                    "range": [
                                      350,
                                      358
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 145,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 137,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    350,
                                    358
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 145,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 137,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 146,
                                  "line": 6
                                },
                                "start": {
                                  "column": 130,
                                  "line": 6
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "range": [
                                335,
                                343
                              ],
                              "loc": {
                                "end": {
                                  "column": 130,
                                  "line": 6
                                },
                                "start": {
                                  "column": 122,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              335,
                              359
                            ],
                            "loc": {
                              "end": {
                                "column": 146,
                                "line": 6
                              },
                              "start": {
                                "column": 122,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 147,
                            "line": 6
                          },
                          "start": {
                            "column": 121,
                            "line": 6
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "range": [
                          324,
                          334
                        ],
                        "loc": {
                          "end": {
                            "column": 121,
                            "line": 6
                          },
                          "start": {
                            "column": 111,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        324,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 147,
                          "line": 6
                        },
                        "start": {
                          "column": 111,
                          "line": 6
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
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    },
                    "range": [
                      228,
                      244
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "range": [
                            229,
                            233
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          229,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
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
                          "name": "TElement",
                          "optional": false,
                          "range": [
                            235,
                            243
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
                        "out": false,
                        "range": [
                          235,
                          243
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
                      }
                    ]
                  },
                  "range": [
                    221,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 148,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToDictionary",
                    "optional": false,
                    "range": [
                      370,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 7
                          },
                          "start": {
                            "column": 38,
                            "line": 7
                          }
                        },
                        "range": [
                          400,
                          422
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 7
                                  }
                                },
                                "range": [
                                  410,
                                  413
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      412,
                                      413
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    412,
                                    413
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 7
                                    }
                                  }
                                }
                              },
                              "range": [
                                403,
                                413
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 7
                                },
                                "start": {
                                  "column": 41,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 7
                              },
                              "start": {
                                "column": 53,
                                "line": 7
                              }
                            },
                            "range": [
                              415,
                              422
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "range": [
                                  418,
                                  422
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                418,
                                422
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 7
                                },
                                "start": {
                                  "column": 56,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            402,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 7
                            },
                            "start": {
                              "column": 40,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        389,
                        422
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 7
                        },
                        "start": {
                          "column": 27,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 7
                      },
                      "start": {
                        "column": 61,
                        "line": 7
                      }
                    },
                    "range": [
                      423,
                      444
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          435,
                          444
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TKey",
                              "optional": false,
                              "range": [
                                436,
                                440
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 7
                                },
                                "start": {
                                  "column": 74,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              436,
                              440
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 7
                              },
                              "start": {
                                "column": 74,
                                "line": 7
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
                                442,
                                443
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 7
                                },
                                "start": {
                                  "column": 80,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              442,
                              443
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 7
                              },
                              "start": {
                                "column": 80,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 7
                          },
                          "start": {
                            "column": 73,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dictionary",
                        "optional": false,
                        "range": [
                          425,
                          435
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 7
                          },
                          "start": {
                            "column": 63,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        425,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 7
                        },
                        "start": {
                          "column": 63,
                          "line": 7
                        }
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    },
                    "range": [
                      382,
                      388
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "range": [
                            383,
                            387
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          383,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    370,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Enumerable",
              "optional": false,
              "range": [
                37,
                47
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              },
              "range": [
                47,
                50
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
                      48,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 25,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    48,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                }
              ]
            },
            "range": [
              27,
              451
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                510,
                666
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThenBy",
                    "optional": false,
                    "range": [
                      520,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 11
                          },
                          "start": {
                            "column": 36,
                            "line": 11
                          }
                        },
                        "range": [
                          548,
                          574
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  558,
                                  561
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      560,
                                      561
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    560,
                                    561
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                551,
                                561
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 11
                                },
                                "start": {
                                  "column": 39,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 11
                              },
                              "start": {
                                "column": 51,
                                "line": 11
                              }
                            },
                            "range": [
                              563,
                              574
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TCompare",
                                "optional": false,
                                "range": [
                                  566,
                                  574
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                566,
                                574
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 11
                                },
                                "start": {
                                  "column": 54,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            550,
                            574
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 11
                            },
                            "start": {
                              "column": 38,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        537,
                        574
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 11
                        },
                        "start": {
                          "column": 25,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 11
                      },
                      "start": {
                        "column": 63,
                        "line": 11
                      }
                    },
                    "range": [
                      575,
                      597
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          594,
                          597
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
                                595,
                                596
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
                              595,
                              596
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
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 11
                          },
                          "start": {
                            "column": 82,
                            "line": 11
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OrderedEnumerable",
                        "optional": false,
                        "range": [
                          577,
                          594
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 11
                          },
                          "start": {
                            "column": 65,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        577,
                        597
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 11
                        },
                        "start": {
                          "column": 65,
                          "line": 11
                        }
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    },
                    "range": [
                      526,
                      536
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "range": [
                            527,
                            535
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 11
                            },
                            "start": {
                              "column": 15,
                              "line": 11
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          527,
                          535
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    520,
                    598
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 57,
                  "line": 10
                }
              }
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enumerable",
                  "optional": false,
                  "range": [
                    496,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 10
                    },
                    "start": {
                      "column": 43,
                      "line": 10
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    506,
                    509
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
                          507,
                          508
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 10
                          },
                          "start": {
                            "column": 54,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        507,
                        508
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 10
                        },
                        "start": {
                          "column": 54,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 10
                    },
                    "start": {
                      "column": 53,
                      "line": 10
                    }
                  }
                },
                "range": [
                  496,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 10
                  },
                  "start": {
                    "column": 43,
                    "line": 10
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OrderedEnumerable",
              "optional": false,
              "range": [
                467,
                484
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 31,
                  "line": 10
                }
              },
              "range": [
                484,
                487
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
                      485,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 32,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    485,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 32,
                      "line": 10
                    }
                  }
                }
              ]
            },
            "range": [
              457,
              666
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                736,
                764
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      746,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    },
                    "range": [
                      751,
                      757
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "range": [
                          753,
                          757
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
                      },
                      "range": [
                        753,
                        757
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
                  },
                  "static": false,
                  "range": [
                    746,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 68,
                  "line": 14
                }
              }
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enumerable",
                  "optional": false,
                  "range": [
                    715,
                    725
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 14
                    },
                    "start": {
                      "column": 47,
                      "line": 14
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    725,
                    735
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TElement",
                        "optional": false,
                        "range": [
                          726,
                          734
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 14
                          },
                          "start": {
                            "column": 58,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        726,
                        734
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 14
                        },
                        "start": {
                          "column": 58,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 14
                    },
                    "start": {
                      "column": 57,
                      "line": 14
                    }
                  }
                },
                "range": [
                  715,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 14
                  },
                  "start": {
                    "column": 47,
                    "line": 14
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Grouping",
              "optional": false,
              "range": [
                682,
                690
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 14
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 14
                },
                "start": {
                  "column": 22,
                  "line": 14
                }
              },
              "range": [
                690,
                706
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "range": [
                      691,
                      695
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 23,
                        "line": 14
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    691,
                    695
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 14
                    },
                    "start": {
                      "column": 23,
                      "line": 14
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
                    "name": "TElement",
                    "optional": false,
                    "range": [
                      697,
                      705
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 14
                      },
                      "start": {
                        "column": 29,
                        "line": 14
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    697,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 14
                    },
                    "start": {
                      "column": 29,
                      "line": 14
                    }
                  }
                }
              ]
            },
            "range": [
              672,
              764
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                803,
                959
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Count",
                    "optional": false,
                    "range": [
                      813,
                      818
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    },
                    "range": [
                      820,
                      828
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        822,
                        828
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 19
                        },
                        "start": {
                          "column": 17,
                          "line": 19
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    813,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "range": [
                      838,
                      841
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
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
                      "range": [
                        842,
                        845
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 20
                        },
                        "start": {
                          "column": 12,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 20
                      },
                      "start": {
                        "column": 16,
                        "line": 20
                      }
                    },
                    "range": [
                      846,
                      863
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          858,
                          863
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              859,
                              862
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 20
                              },
                              "start": {
                                "column": 29,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 20
                          },
                          "start": {
                            "column": 28,
                            "line": 20
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "range": [
                          848,
                          858
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 20
                          },
                          "start": {
                            "column": 18,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        848,
                        863
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 20
                        },
                        "start": {
                          "column": 18,
                          "line": 20
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    838,
                    864
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "range": [
                      873,
                      881
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
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
                      "range": [
                        882,
                        885
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
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 21
                      },
                      "start": {
                        "column": 21,
                        "line": 21
                      }
                    },
                    "range": [
                      886,
                      895
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        888,
                        895
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 21
                        },
                        "start": {
                          "column": 23,
                          "line": 21
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    873,
                    896
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "range": [
                      905,
                      917
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 22
                      },
                      "start": {
                        "column": 22,
                        "line": 22
                      }
                    },
                    "range": [
                      919,
                      952
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          931,
                          952
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                940,
                                951
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "range": [
                                      941,
                                      945
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    941,
                                    945
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 22
                                    }
                                  }
                                },
                                {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    947,
                                    950
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 22
                                },
                                "start": {
                                  "column": 43,
                                  "line": 22
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "range": [
                                932,
                                940
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 22
                                },
                                "start": {
                                  "column": 35,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              932,
                              951
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
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
                            "column": 55,
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
                        "name": "Enumerable",
                        "optional": false,
                        "range": [
                          921,
                          931
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 22
                          },
                          "start": {
                            "column": 24,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        921,
                        952
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 22
                        },
                        "start": {
                          "column": 24,
                          "line": 22
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    905,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 37,
                  "line": 18
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lookup",
              "optional": false,
              "range": [
                780,
                786
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 18
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              },
              "range": [
                786,
                802
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "range": [
                      787,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 18
                      },
                      "start": {
                        "column": 21,
                        "line": 18
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    787,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 18
                    },
                    "start": {
                      "column": 21,
                      "line": 18
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
                    "name": "TElement",
                    "optional": false,
                    "range": [
                      793,
                      801
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 18
                      },
                      "start": {
                        "column": 27,
                        "line": 18
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    793,
                    801
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 18
                    },
                    "start": {
                      "column": 27,
                      "line": 18
                    }
                  }
                }
              ]
            },
            "range": [
              770,
              959
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1000,
                1314
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Add",
                    "optional": false,
                    "range": [
                      1010,
                      1013
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
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
                            "column": 21,
                            "line": 26
                          },
                          "start": {
                            "column": 15,
                            "line": 26
                          }
                        },
                        "range": [
                          1017,
                          1023
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "range": [
                              1019,
                              1023
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 26
                              },
                              "start": {
                                "column": 17,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            1019,
                            1023
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 26
                            },
                            "start": {
                              "column": 17,
                              "line": 26
                            }
                          }
                        }
                      },
                      "range": [
                        1014,
                        1023
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 26
                        },
                        "start": {
                          "column": 12,
                          "line": 26
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
                            "column": 36,
                            "line": 26
                          },
                          "start": {
                            "column": 28,
                            "line": 26
                          }
                        },
                        "range": [
                          1030,
                          1038
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              1032,
                              1038
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 26
                              },
                              "start": {
                                "column": 30,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            1032,
                            1038
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 26
                            },
                            "start": {
                              "column": 30,
                              "line": 26
                            }
                          }
                        }
                      },
                      "range": [
                        1025,
                        1038
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 26
                        },
                        "start": {
                          "column": 23,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 26
                      },
                      "start": {
                        "column": 37,
                        "line": 26
                      }
                    },
                    "range": [
                      1039,
                      1045
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1041,
                        1045
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 26
                        },
                        "start": {
                          "column": 39,
                          "line": 26
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1010,
                    1046
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "range": [
                      1055,
                      1058
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ke",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 27
                          },
                          "start": {
                            "column": 14,
                            "line": 27
                          }
                        },
                        "range": [
                          1061,
                          1067
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "range": [
                              1063,
                              1067
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 27
                              },
                              "start": {
                                "column": 16,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            1063,
                            1067
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 27
                            },
                            "start": {
                              "column": 16,
                              "line": 27
                            }
                          }
                        }
                      },
                      "range": [
                        1059,
                        1067
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 27
                        },
                        "start": {
                          "column": 12,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 27
                      },
                      "start": {
                        "column": 21,
                        "line": 27
                      }
                    },
                    "range": [
                      1068,
                      1076
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "range": [
                          1070,
                          1076
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 27
                          },
                          "start": {
                            "column": 23,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        1070,
                        1076
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 27
                        },
                        "start": {
                          "column": 23,
                          "line": 27
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1055,
                    1077
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "range": [
                      1086,
                      1089
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
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
                            "column": 21,
                            "line": 28
                          },
                          "start": {
                            "column": 15,
                            "line": 28
                          }
                        },
                        "range": [
                          1093,
                          1099
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "range": [
                              1095,
                              1099
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 28
                              },
                              "start": {
                                "column": 17,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            1095,
                            1099
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 28
                            },
                            "start": {
                              "column": 17,
                              "line": 28
                            }
                          }
                        }
                      },
                      "range": [
                        1090,
                        1099
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 28
                        },
                        "start": {
                          "column": 12,
                          "line": 28
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
                            "column": 36,
                            "line": 28
                          },
                          "start": {
                            "column": 28,
                            "line": 28
                          }
                        },
                        "range": [
                          1106,
                          1114
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              1108,
                              1114
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 28
                              },
                              "start": {
                                "column": 30,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            1108,
                            1114
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 28
                            },
                            "start": {
                              "column": 30,
                              "line": 28
                            }
                          }
                        }
                      },
                      "range": [
                        1101,
                        1114
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 28
                        },
                        "start": {
                          "column": 23,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 28
                      },
                      "start": {
                        "column": 37,
                        "line": 28
                      }
                    },
                    "range": [
                      1115,
                      1124
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        1117,
                        1124
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 28
                        },
                        "start": {
                          "column": 39,
                          "line": 28
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1086,
                    1125
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "range": [
                      1134,
                      1142
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
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
                            "column": 26,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        },
                        "range": [
                          1146,
                          1152
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "range": [
                              1148,
                              1152
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 29
                              },
                              "start": {
                                "column": 22,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            1148,
                            1152
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 29
                            },
                            "start": {
                              "column": 22,
                              "line": 29
                            }
                          }
                        }
                      },
                      "range": [
                        1143,
                        1152
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 29
                      },
                      "start": {
                        "column": 27,
                        "line": 29
                      }
                    },
                    "range": [
                      1153,
                      1162
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        1155,
                        1162
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 29
                        },
                        "start": {
                          "column": 29,
                          "line": 29
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1134,
                    1163
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Clear",
                    "optional": false,
                    "range": [
                      1172,
                      1177
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 30
                      },
                      "start": {
                        "column": 15,
                        "line": 30
                      }
                    },
                    "range": [
                      1179,
                      1185
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1181,
                        1185
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 30
                        },
                        "start": {
                          "column": 17,
                          "line": 30
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1172,
                    1186
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Remove",
                    "optional": false,
                    "range": [
                      1195,
                      1201
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
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
                            "column": 24,
                            "line": 31
                          },
                          "start": {
                            "column": 18,
                            "line": 31
                          }
                        },
                        "range": [
                          1205,
                          1211
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "range": [
                              1207,
                              1211
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 31
                              },
                              "start": {
                                "column": 20,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            1207,
                            1211
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 31
                            },
                            "start": {
                              "column": 20,
                              "line": 31
                            }
                          }
                        }
                      },
                      "range": [
                        1202,
                        1211
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 31
                        },
                        "start": {
                          "column": 15,
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
                        "column": 31,
                        "line": 31
                      },
                      "start": {
                        "column": 25,
                        "line": 31
                      }
                    },
                    "range": [
                      1212,
                      1218
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1214,
                        1218
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 31
                        },
                        "start": {
                          "column": 27,
                          "line": 31
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1195,
                    1219
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Count",
                    "optional": false,
                    "range": [
                      1228,
                      1233
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
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 32
                      },
                      "start": {
                        "column": 15,
                        "line": 32
                      }
                    },
                    "range": [
                      1235,
                      1243
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1237,
                        1243
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 32
                        },
                        "start": {
                          "column": 17,
                          "line": 32
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1228,
                    1244
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "range": [
                      1253,
                      1265
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
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 33
                      },
                      "start": {
                        "column": 22,
                        "line": 33
                      }
                    },
                    "range": [
                      1267,
                      1307
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1279,
                          1307
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                1292,
                                1306
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "range": [
                                      1293,
                                      1297
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    1293,
                                    1297
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 33
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TValue",
                                    "optional": false,
                                    "range": [
                                      1299,
                                      1305
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    1299,
                                    1305
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 33
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 33
                                },
                                "start": {
                                  "column": 47,
                                  "line": 33
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "KeyValuePair",
                              "optional": false,
                              "range": [
                                1280,
                                1292
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 33
                                },
                                "start": {
                                  "column": 35,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              1280,
                              1306
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 33
                              },
                              "start": {
                                "column": 35,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 33
                          },
                          "start": {
                            "column": 34,
                            "line": 33
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "range": [
                          1269,
                          1279
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 33
                          },
                          "start": {
                            "column": 24,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        1269,
                        1307
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 33
                        },
                        "start": {
                          "column": 24,
                          "line": 33
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1253,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 39,
                  "line": 25
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dictionary",
              "optional": false,
              "range": [
                975,
                985
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 25
                },
                "start": {
                  "column": 14,
                  "line": 25
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 25
                }
              },
              "range": [
                985,
                999
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "range": [
                      986,
                      990
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 25,
                        "line": 25
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    986,
                    990
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 25
                    },
                    "start": {
                      "column": 25,
                      "line": 25
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
                    "name": "TValue",
                    "optional": false,
                    "range": [
                      992,
                      998
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 25
                      },
                      "start": {
                        "column": 31,
                        "line": 25
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    992,
                    998
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 25
                    },
                    "start": {
                      "column": 31,
                      "line": 25
                    }
                  }
                }
              ]
            },
            "range": [
              965,
              1314
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1357,
                1406
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      1367,
                      1370
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
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
                        "column": 17,
                        "line": 37
                      },
                      "start": {
                        "column": 11,
                        "line": 37
                      }
                    },
                    "range": [
                      1370,
                      1376
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "range": [
                          1372,
                          1376
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 37
                          },
                          "start": {
                            "column": 13,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        1372,
                        1376
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 37
                        },
                        "start": {
                          "column": 13,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    1367,
                    1377
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
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "range": [
                      1386,
                      1391
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
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
                        "column": 21,
                        "line": 38
                      },
                      "start": {
                        "column": 13,
                        "line": 38
                      }
                    },
                    "range": [
                      1391,
                      1399
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "range": [
                          1393,
                          1399
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 38
                          },
                          "start": {
                            "column": 15,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        1393,
                        1399
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 38
                        },
                        "start": {
                          "column": 15,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    1386,
                    1400
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 41,
                  "line": 36
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyValuePair",
              "optional": false,
              "range": [
                1330,
                1342
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 36
                },
                "start": {
                  "column": 14,
                  "line": 36
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 36
                },
                "start": {
                  "column": 26,
                  "line": 36
                }
              },
              "range": [
                1342,
                1356
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "range": [
                      1343,
                      1347
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 36
                      },
                      "start": {
                        "column": 27,
                        "line": 36
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1343,
                    1347
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 36
                    },
                    "start": {
                      "column": 27,
                      "line": 36
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
                    "name": "TValue",
                    "optional": false,
                    "range": [
                      1349,
                      1355
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 36
                      },
                      "start": {
                        "column": 33,
                        "line": 36
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1349,
                    1355
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 36
                    },
                    "start": {
                      "column": 33,
                      "line": 36
                    }
                  }
                }
              ]
            },
            "range": [
              1320,
              1406
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          20,
          1408
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          15,
          19
        ],
        "decorators": [],
        "name": "linq",
        "optional": false,
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        1408
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
