__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3622
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
                56,
                87
              ],
              "body": [
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
                            "column": 18,
                            "line": 3
                          },
                          "start": {
                            "column": 10,
                            "line": 3
                          }
                        },
                        "range": [
                          68,
                          76
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            70,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        67,
                        76
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
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    },
                    "range": [
                      77,
                      80
                    ],
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
                            "column": 22,
                            "line": 3
                          },
                          "start": {
                            "column": 21,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        79,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 3
                        },
                        "start": {
                          "column": 21,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    66,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IIndexable",
              "optional": false,
              "range": [
                42,
                52
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              },
              "range": [
                52,
                55
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
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    53,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 25,
                      "line": 2
                    }
                  }
                }
              ]
            },
            "range": [
              32,
              87
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createIntrinsicsObject",
              "optional": false,
              "range": [
                101,
                123
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 5
                },
                "start": {
                  "column": 40,
                  "line": 5
                }
              },
              "range": [
                128,
                143
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    140,
                    143
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
                          141,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 5
                          },
                          "start": {
                            "column": 53,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        141,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 5
                        },
                        "start": {
                          "column": 53,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 5
                    },
                    "start": {
                      "column": 52,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IIndexable",
                  "optional": false,
                  "range": [
                    130,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 5
                    },
                    "start": {
                      "column": 42,
                      "line": 5
                    }
                  }
                },
                "range": [
                  130,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 5
                },
                "start": {
                  "column": 35,
                  "line": 5
                }
              },
              "range": [
                123,
                126
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
                      124,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 5
                      },
                      "start": {
                        "column": 36,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    124,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 5
                    },
                    "start": {
                      "column": 36,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              92,
              144
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                173,
                620
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "range": [
                      183,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
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
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    },
                    "range": [
                      195,
                      205
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          197,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 7
                          },
                          "start": {
                            "column": 22,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        197,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 7
                        },
                        "start": {
                          "column": 22,
                          "line": 7
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    183,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "range": [
                      215,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                            "column": 23,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        },
                        "range": [
                          222,
                          230
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            224,
                            230
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        219,
                        230
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
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
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 8
                          },
                          "start": {
                            "column": 29,
                            "line": 8
                          }
                        },
                        "range": [
                          236,
                          239
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              238,
                              239
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 8
                              },
                              "start": {
                                "column": 31,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            238,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 8
                            },
                            "start": {
                              "column": 31,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        232,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 8
                        },
                        "start": {
                          "column": 25,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 8
                      },
                      "start": {
                        "column": 33,
                        "line": 8
                      }
                    },
                    "range": [
                      240,
                      249
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        242,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 8
                        },
                        "start": {
                          "column": 35,
                          "line": 8
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    215,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "range": [
                      259,
                      270
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
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
                            "column": 31,
                            "line": 9
                          },
                          "start": {
                            "column": 23,
                            "line": 9
                          }
                        },
                        "range": [
                          274,
                          282
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            276,
                            282
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 9
                            },
                            "start": {
                              "column": 25,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        271,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
                          "line": 9
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 9
                          },
                          "start": {
                            "column": 37,
                            "line": 9
                          }
                        },
                        "range": [
                          288,
                          291
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              290,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 9
                              },
                              "start": {
                                "column": 39,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            290,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 9
                            },
                            "start": {
                              "column": 39,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        284,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 9
                        },
                        "start": {
                          "column": 33,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 9
                      },
                      "start": {
                        "column": 41,
                        "line": 9
                      }
                    },
                    "range": [
                      292,
                      301
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        294,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 9
                        },
                        "start": {
                          "column": 43,
                          "line": 9
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    259,
                    302
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
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      311,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 10
                          },
                          "start": {
                            "column": 14,
                            "line": 10
                          }
                        },
                        "range": [
                          317,
                          362
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 10
                                  }
                                },
                                "range": [
                                  321,
                                  329
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    323,
                                    329
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 10
                                    }
                                  }
                                }
                              },
                              "range": [
                                320,
                                329
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 10
                                },
                                "start": {
                                  "column": 17,
                                  "line": 10
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
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 10
                                  }
                                },
                                "range": [
                                  336,
                                  339
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      338,
                                      339
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    338,
                                    339
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 10
                                    }
                                  }
                                }
                              },
                              "range": [
                                331,
                                339
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 10
                                },
                                "start": {
                                  "column": 28,
                                  "line": 10
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 10
                                  }
                                },
                                "range": [
                                  348,
                                  353
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    350,
                                    353
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 10
                                    }
                                  }
                                }
                              },
                              "range": [
                                341,
                                353
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 10
                                },
                                "start": {
                                  "column": 38,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 10
                              },
                              "start": {
                                "column": 52,
                                "line": 10
                              }
                            },
                            "range": [
                              355,
                              362
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                358,
                                362
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 10
                                },
                                "start": {
                                  "column": 55,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            319,
                            362
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 10
                            },
                            "start": {
                              "column": 16,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        315,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 10
                          },
                          "start": {
                            "column": 68,
                            "line": 10
                          }
                        },
                        "range": [
                          371,
                          376
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            373,
                            376
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 10
                            },
                            "start": {
                              "column": 70,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        364,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 10
                        },
                        "start": {
                          "column": 61,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 10
                      },
                      "start": {
                        "column": 74,
                        "line": 10
                      }
                    },
                    "range": [
                      377,
                      383
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        379,
                        383
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 10
                        },
                        "start": {
                          "column": 76,
                          "line": 10
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    311,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "range": [
                      393,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 11
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        },
                        "range": [
                          401,
                          446
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  405,
                                  413
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    407,
                                    413
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                404,
                                413
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 11
                                },
                                "start": {
                                  "column": 19,
                                  "line": 11
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
                                    "column": 38,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  420,
                                  423
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      422,
                                      423
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 37,
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
                                      "column": 38,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                415,
                                423
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 11
                                },
                                "start": {
                                  "column": 30,
                                  "line": 11
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  432,
                                  437
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    434,
                                    437
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                425,
                                437
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 11
                                },
                                "start": {
                                  "column": 40,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 11
                              },
                              "start": {
                                "column": 54,
                                "line": 11
                              }
                            },
                            "range": [
                              439,
                              446
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                442,
                                446
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 11
                                },
                                "start": {
                                  "column": 57,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            403,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 11
                            },
                            "start": {
                              "column": 18,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        399,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 11
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 11
                          },
                          "start": {
                            "column": 70,
                            "line": 11
                          }
                        },
                        "range": [
                          455,
                          460
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            457,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 11
                            },
                            "start": {
                              "column": 72,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        448,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 11
                        },
                        "start": {
                          "column": 63,
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
                        "column": 76,
                        "line": 11
                      }
                    },
                    "range": [
                      461,
                      470
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        463,
                        470
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 11
                        },
                        "start": {
                          "column": 78,
                          "line": 11
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    393,
                    471
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
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "range": [
                      480,
                      484
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 12
                          },
                          "start": {
                            "column": 15,
                            "line": 12
                          }
                        },
                        "range": [
                          487,
                          532
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 12
                                  }
                                },
                                "range": [
                                  491,
                                  499
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    493,
                                    499
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 12
                                    }
                                  }
                                }
                              },
                              "range": [
                                490,
                                499
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 12
                                },
                                "start": {
                                  "column": 18,
                                  "line": 12
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
                                    "column": 37,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 12
                                  }
                                },
                                "range": [
                                  506,
                                  509
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      508,
                                      509
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    508,
                                    509
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 12
                                    }
                                  }
                                }
                              },
                              "range": [
                                501,
                                509
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 12
                                },
                                "start": {
                                  "column": 29,
                                  "line": 12
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 12
                                  }
                                },
                                "range": [
                                  518,
                                  523
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    520,
                                    523
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 12
                                    }
                                  }
                                }
                              },
                              "range": [
                                511,
                                523
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 12
                                },
                                "start": {
                                  "column": 39,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 12
                              },
                              "start": {
                                "column": 53,
                                "line": 12
                              }
                            },
                            "range": [
                              525,
                              532
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                528,
                                532
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 12
                                },
                                "start": {
                                  "column": 56,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            489,
                            532
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 12
                            },
                            "start": {
                              "column": 17,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        485,
                        532
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 12
                          },
                          "start": {
                            "column": 69,
                            "line": 12
                          }
                        },
                        "range": [
                          541,
                          546
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            543,
                            546
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 12
                            },
                            "start": {
                              "column": 71,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        534,
                        546
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 12
                        },
                        "start": {
                          "column": 62,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 12
                      },
                      "start": {
                        "column": 75,
                        "line": 12
                      }
                    },
                    "range": [
                      547,
                      556
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        549,
                        556
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 12
                        },
                        "start": {
                          "column": 77,
                          "line": 12
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    480,
                    557
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "range": [
                      566,
                      571
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
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    },
                    "range": [
                      573,
                      581
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        575,
                        581
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 13
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    566,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "range": [
                      591,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                            "line": 14
                          },
                          "start": {
                            "column": 18,
                            "line": 14
                          }
                        },
                        "range": [
                          601,
                          609
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            603,
                            609
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 14
                            },
                            "start": {
                              "column": 20,
                              "line": 14
                            }
                          }
                        }
                      },
                      "range": [
                        598,
                        609
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
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
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
                      }
                    },
                    "range": [
                      610,
                      613
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          612,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 14
                          },
                          "start": {
                            "column": 29,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        612,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 14
                        },
                        "start": {
                          "column": 29,
                          "line": 14
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    591,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 28,
                  "line": 6
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHashTable",
              "optional": false,
              "range": [
                159,
                169
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              },
              "range": [
                169,
                172
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
                      170,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 25,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    170,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 25,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              149,
              620
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                675,
                1270
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "itemCount",
                    "optional": false,
                    "range": [
                      693,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 17
                      },
                      "start": {
                        "column": 16,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": null,
                  "range": [
                    685,
                    703
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "range": [
                      720,
                      725
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 18
                      },
                      "start": {
                        "column": 16,
                        "line": 18
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": null,
                  "range": [
                    712,
                    726
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "range": [
                      742,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      752,
                      765
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 19
                        }
                      },
                      "range": [
                        754,
                        764
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            756,
                            762
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 19
                            },
                            "start": {
                              "column": 29,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          756,
                          764
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 19
                          },
                          "start": {
                            "column": 29,
                            "line": 19
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 19
                      },
                      "start": {
                        "column": 25,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    735,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "range": [
                      781,
                      784
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 15,
                        "line": 20
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      784,
                      816
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 30,
                              "line": 20
                            },
                            "start": {
                              "column": 22,
                              "line": 20
                            }
                          },
                          "range": [
                            788,
                            796
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              790,
                              796
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 20
                              },
                              "start": {
                                "column": 24,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          785,
                          796
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 20
                          },
                          "start": {
                            "column": 19,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 20
                            },
                            "start": {
                              "column": 36,
                              "line": 20
                            }
                          },
                          "range": [
                            802,
                            805
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                804,
                                805
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 20
                                },
                                "start": {
                                  "column": 38,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              804,
                              805
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 20
                              },
                              "start": {
                                "column": 38,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          798,
                          805
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 20
                          },
                          "start": {
                            "column": 32,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 20
                        },
                        "start": {
                          "column": 40,
                          "line": 20
                        }
                      },
                      "range": [
                        806,
                        815
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          808,
                          815
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 20
                          },
                          "start": {
                            "column": 42,
                            "line": 20
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    774,
                    816
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "range": [
                      832,
                      843
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      843,
                      875
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "line": 21
                            },
                            "start": {
                              "column": 30,
                              "line": 21
                            }
                          },
                          "range": [
                            847,
                            855
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              849,
                              855
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 21
                              },
                              "start": {
                                "column": 32,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          844,
                          855
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 21
                          },
                          "start": {
                            "column": 27,
                            "line": 21
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 21
                            },
                            "start": {
                              "column": 44,
                              "line": 21
                            }
                          },
                          "range": [
                            861,
                            864
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                863,
                                864
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 21
                                },
                                "start": {
                                  "column": 46,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              863,
                              864
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 21
                              },
                              "start": {
                                "column": 46,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          857,
                          864
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 21
                          },
                          "start": {
                            "column": 40,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 21
                        },
                        "start": {
                          "column": 48,
                          "line": 21
                        }
                      },
                      "range": [
                        865,
                        874
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          867,
                          874
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 21
                          },
                          "start": {
                            "column": 50,
                            "line": 21
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 21
                      },
                      "start": {
                        "column": 26,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    825,
                    875
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      891,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 22
                      },
                      "start": {
                        "column": 15,
                        "line": 22
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      894,
                      964
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 22
                            },
                            "start": {
                              "column": 21,
                              "line": 22
                            }
                          },
                          "range": [
                            897,
                            942
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 22
                                    }
                                  },
                                  "range": [
                                    901,
                                    909
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      903,
                                      909
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 22
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  900,
                                  909
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 22
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
                                      "column": 43,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 22
                                    }
                                  },
                                  "range": [
                                    916,
                                    919
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        918,
                                        919
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 22
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 22
                                        }
                                      }
                                    },
                                    "range": [
                                      918,
                                      919
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 22
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  911,
                                  919
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
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 22
                                    }
                                  },
                                  "range": [
                                    928,
                                    933
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      930,
                                      933
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 22
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  921,
                                  933
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 22
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 22
                                },
                                "start": {
                                  "column": 59,
                                  "line": 22
                                }
                              },
                              "range": [
                                935,
                                942
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  938,
                                  942
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 22
                                  }
                                }
                              }
                            },
                            "range": [
                              899,
                              942
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 22
                              },
                              "start": {
                                "column": 23,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          895,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 22
                          },
                          "start": {
                            "column": 19,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 22
                            },
                            "start": {
                              "column": 75,
                              "line": 22
                            }
                          },
                          "range": [
                            951,
                            956
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              953,
                              956
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 22
                              },
                              "start": {
                                "column": 77,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          944,
                          956
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 22
                          },
                          "start": {
                            "column": 68,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 22
                        },
                        "start": {
                          "column": 81,
                          "line": 22
                        }
                      },
                      "range": [
                        957,
                        963
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          959,
                          963
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 22
                          },
                          "start": {
                            "column": 83,
                            "line": 22
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    884,
                    964
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "range": [
                      980,
                      985
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      985,
                      1058
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 23
                            },
                            "start": {
                              "column": 23,
                              "line": 23
                            }
                          },
                          "range": [
                            988,
                            1033
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 23
                                    }
                                  },
                                  "range": [
                                    992,
                                    1000
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      994,
                                      1000
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 23
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  991,
                                  1000
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 23
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
                                      "column": 45,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 23
                                    }
                                  },
                                  "range": [
                                    1007,
                                    1010
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1009,
                                        1010
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
                                      1009,
                                      1010
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
                                  }
                                },
                                "range": [
                                  1002,
                                  1010
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 23
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 23
                                    }
                                  },
                                  "range": [
                                    1019,
                                    1024
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      1021,
                                      1024
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 23
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1012,
                                  1024
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 23
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 23
                                },
                                "start": {
                                  "column": 61,
                                  "line": 23
                                }
                              },
                              "range": [
                                1026,
                                1033
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  1029,
                                  1033
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 23
                                  }
                                }
                              }
                            },
                            "range": [
                              990,
                              1033
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 23
                              },
                              "start": {
                                "column": 25,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          986,
                          1033
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 23
                          },
                          "start": {
                            "column": 21,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 23
                            },
                            "start": {
                              "column": 77,
                              "line": 23
                            }
                          },
                          "range": [
                            1042,
                            1047
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              1044,
                              1047
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 23
                              },
                              "start": {
                                "column": 79,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          1035,
                          1047
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 23
                          },
                          "start": {
                            "column": 70,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 23
                        },
                        "start": {
                          "column": 83,
                          "line": 23
                        }
                      },
                      "range": [
                        1048,
                        1057
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1050,
                          1057
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 23
                          },
                          "start": {
                            "column": 85,
                            "line": 23
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 23
                      },
                      "start": {
                        "column": 20,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    973,
                    1058
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "range": [
                      1074,
                      1078
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1078,
                      1151
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 24
                            },
                            "start": {
                              "column": 22,
                              "line": 24
                            }
                          },
                          "range": [
                            1081,
                            1126
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 24
                                    }
                                  },
                                  "range": [
                                    1085,
                                    1093
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      1087,
                                      1093
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 24
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1084,
                                  1093
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 24
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
                                      "column": 44,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 24
                                    }
                                  },
                                  "range": [
                                    1100,
                                    1103
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1102,
                                        1103
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 24
                                        }
                                      }
                                    },
                                    "range": [
                                      1102,
                                      1103
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 24
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1095,
                                  1103
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 24
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 53,
                                      "line": 24
                                    }
                                  },
                                  "range": [
                                    1112,
                                    1117
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      1114,
                                      1117
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 24
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1105,
                                  1117
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 24
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 24
                                },
                                "start": {
                                  "column": 60,
                                  "line": 24
                                }
                              },
                              "range": [
                                1119,
                                1126
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  1122,
                                  1126
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 24
                                  }
                                }
                              }
                            },
                            "range": [
                              1083,
                              1126
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 24
                              },
                              "start": {
                                "column": 24,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          1079,
                          1126
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 24
                          },
                          "start": {
                            "column": 20,
                            "line": 24
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 24
                            },
                            "start": {
                              "column": 76,
                              "line": 24
                            }
                          },
                          "range": [
                            1135,
                            1140
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              1137,
                              1140
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 24
                              },
                              "start": {
                                "column": 78,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          1128,
                          1140
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 24
                          },
                          "start": {
                            "column": 69,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 24
                        },
                        "start": {
                          "column": 82,
                          "line": 24
                        }
                      },
                      "range": [
                        1141,
                        1150
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1143,
                          1150
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 24
                          },
                          "start": {
                            "column": 84,
                            "line": 24
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 24
                      },
                      "start": {
                        "column": 19,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    1067,
                    1151
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "range": [
                      1167,
                      1172
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1172,
                      1183
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 25
                        },
                        "start": {
                          "column": 22,
                          "line": 25
                        }
                      },
                      "range": [
                        1174,
                        1182
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1176,
                          1182
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 25
                          },
                          "start": {
                            "column": 24,
                            "line": 25
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 25
                      },
                      "start": {
                        "column": 20,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    1160,
                    1183
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "range": [
                      1199,
                      1205
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1205,
                      1222
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 33,
                              "line": 26
                            },
                            "start": {
                              "column": 25,
                              "line": 26
                            }
                          },
                          "range": [
                            1209,
                            1217
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1211,
                              1217
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 26
                              },
                              "start": {
                                "column": 27,
                                "line": 26
                              }
                            }
                          }
                        },
                        "range": [
                          1206,
                          1217
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 26
                          },
                          "start": {
                            "column": 22,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 26
                        },
                        "start": {
                          "column": 34,
                          "line": 26
                        }
                      },
                      "range": [
                        1218,
                        1221
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1220,
                            1221
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 26
                            },
                            "start": {
                              "column": 36,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          1220,
                          1221
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 26
                          },
                          "start": {
                            "column": 36,
                            "line": 26
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 26
                      },
                      "start": {
                        "column": 21,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    1192,
                    1222
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remove",
                    "optional": false,
                    "range": [
                      1238,
                      1244
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 27
                      },
                      "start": {
                        "column": 15,
                        "line": 27
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1244,
                      1264
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 33,
                              "line": 27
                            },
                            "start": {
                              "column": 25,
                              "line": 27
                            }
                          },
                          "range": [
                            1248,
                            1256
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1250,
                              1256
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 27
                              },
                              "start": {
                                "column": 27,
                                "line": 27
                              }
                            }
                          }
                        },
                        "range": [
                          1245,
                          1256
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 27
                          },
                          "start": {
                            "column": 22,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 27
                        },
                        "start": {
                          "column": 34,
                          "line": 27
                        }
                      },
                      "range": [
                        1257,
                        1263
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          1259,
                          1263
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 27
                          },
                          "start": {
                            "column": 36,
                            "line": 27
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 27
                      },
                      "start": {
                        "column": 21,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    1231,
                    1264
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 54,
                  "line": 16
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "range": [
                631,
                646
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHashTable",
                  "optional": false,
                  "range": [
                    661,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 16
                    },
                    "start": {
                      "column": 40,
                      "line": 16
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    671,
                    674
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
                          672,
                          673
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 16
                          },
                          "start": {
                            "column": 51,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        672,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 16
                        },
                        "start": {
                          "column": 51,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 16
                    },
                    "start": {
                      "column": 50,
                      "line": 16
                    }
                  }
                },
                "range": [
                  661,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 16
                  },
                  "start": {
                    "column": 40,
                    "line": 16
                  }
                }
              }
            ],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 25,
                  "line": 16
                }
              },
              "range": [
                646,
                649
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
                      647,
                      648
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 26,
                        "line": 16
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    647,
                    648
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 16
                    },
                    "start": {
                      "column": 26,
                      "line": 16
                    }
                  }
                }
              ]
            },
            "range": [
              625,
              1270
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1335,
                1808
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "range": [
                      1352,
                      1362
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 30
                      },
                      "start": {
                        "column": 15,
                        "line": 30
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1362,
                      1375
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 30
                        },
                        "start": {
                          "column": 27,
                          "line": 30
                        }
                      },
                      "range": [
                        1364,
                        1374
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            1366,
                            1372
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 30
                            },
                            "start": {
                              "column": 29,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          1366,
                          1374
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 30
                          },
                          "start": {
                            "column": 29,
                            "line": 30
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 30
                      },
                      "start": {
                        "column": 25,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    1345,
                    1375
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "range": [
                      1391,
                      1394
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 15,
                        "line": 31
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1394,
                      1426
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 30,
                              "line": 31
                            },
                            "start": {
                              "column": 22,
                              "line": 31
                            }
                          },
                          "range": [
                            1398,
                            1406
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1400,
                              1406
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 31
                              },
                              "start": {
                                "column": 24,
                                "line": 31
                              }
                            }
                          }
                        },
                        "range": [
                          1395,
                          1406
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 31
                          },
                          "start": {
                            "column": 19,
                            "line": 31
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 31
                            },
                            "start": {
                              "column": 36,
                              "line": 31
                            }
                          },
                          "range": [
                            1412,
                            1415
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1414,
                                1415
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 31
                                },
                                "start": {
                                  "column": 38,
                                  "line": 31
                                }
                              }
                            },
                            "range": [
                              1414,
                              1415
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 31
                              },
                              "start": {
                                "column": 38,
                                "line": 31
                              }
                            }
                          }
                        },
                        "range": [
                          1408,
                          1415
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 31
                          },
                          "start": {
                            "column": 32,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 31
                        },
                        "start": {
                          "column": 40,
                          "line": 31
                        }
                      },
                      "range": [
                        1416,
                        1425
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1418,
                          1425
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 31
                          },
                          "start": {
                            "column": 42,
                            "line": 31
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 31
                      },
                      "start": {
                        "column": 18,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1384,
                    1426
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "range": [
                      1442,
                      1453
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 32
                      },
                      "start": {
                        "column": 15,
                        "line": 32
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1453,
                      1485
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "line": 32
                            },
                            "start": {
                              "column": 30,
                              "line": 32
                            }
                          },
                          "range": [
                            1457,
                            1465
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1459,
                              1465
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 32
                              },
                              "start": {
                                "column": 32,
                                "line": 32
                              }
                            }
                          }
                        },
                        "range": [
                          1454,
                          1465
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 32
                          },
                          "start": {
                            "column": 27,
                            "line": 32
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 32
                            },
                            "start": {
                              "column": 44,
                              "line": 32
                            }
                          },
                          "range": [
                            1471,
                            1474
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1473,
                                1474
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 32
                                },
                                "start": {
                                  "column": 46,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              1473,
                              1474
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 32
                              },
                              "start": {
                                "column": 46,
                                "line": 32
                              }
                            }
                          }
                        },
                        "range": [
                          1467,
                          1474
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 32
                          },
                          "start": {
                            "column": 40,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 32
                        },
                        "start": {
                          "column": 48,
                          "line": 32
                        }
                      },
                      "range": [
                        1475,
                        1484
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1477,
                          1484
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 32
                          },
                          "start": {
                            "column": 50,
                            "line": 32
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 32
                      },
                      "start": {
                        "column": 26,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    1435,
                    1485
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      1501,
                      1504
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 33
                      },
                      "start": {
                        "column": 15,
                        "line": 33
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1504,
                      1574
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 33
                            },
                            "start": {
                              "column": 21,
                              "line": 33
                            }
                          },
                          "range": [
                            1507,
                            1552
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 33
                                    }
                                  },
                                  "range": [
                                    1511,
                                    1519
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      1513,
                                      1519
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 33
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1510,
                                  1519
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 33
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
                                      "column": 43,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 33
                                    }
                                  },
                                  "range": [
                                    1526,
                                    1529
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1528,
                                        1529
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 33
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 33
                                        }
                                      }
                                    },
                                    "range": [
                                      1528,
                                      1529
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 33
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1521,
                                  1529
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 33
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 33
                                    }
                                  },
                                  "range": [
                                    1538,
                                    1543
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      1540,
                                      1543
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 33
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1531,
                                  1543
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 33
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 33
                                },
                                "start": {
                                  "column": 59,
                                  "line": 33
                                }
                              },
                              "range": [
                                1545,
                                1552
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  1548,
                                  1552
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 33
                                  }
                                }
                              }
                            },
                            "range": [
                              1509,
                              1552
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 33
                              },
                              "start": {
                                "column": 23,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          1505,
                          1552
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 33
                          },
                          "start": {
                            "column": 19,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 33
                            },
                            "start": {
                              "column": 75,
                              "line": 33
                            }
                          },
                          "range": [
                            1561,
                            1566
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              1563,
                              1566
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 33
                              },
                              "start": {
                                "column": 77,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          1554,
                          1566
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 33
                          },
                          "start": {
                            "column": 68,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 33
                        },
                        "start": {
                          "column": 81,
                          "line": 33
                        }
                      },
                      "range": [
                        1567,
                        1573
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          1569,
                          1573
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 33
                          },
                          "start": {
                            "column": 83,
                            "line": 33
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    1494,
                    1574
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "range": [
                      1590,
                      1595
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 34
                      },
                      "start": {
                        "column": 15,
                        "line": 34
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1595,
                      1668
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 34
                            },
                            "start": {
                              "column": 23,
                              "line": 34
                            }
                          },
                          "range": [
                            1598,
                            1643
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 34
                                    }
                                  },
                                  "range": [
                                    1602,
                                    1610
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      1604,
                                      1610
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 34
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 34
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1601,
                                  1610
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 34
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
                                      "column": 45,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 34
                                    }
                                  },
                                  "range": [
                                    1617,
                                    1620
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1619,
                                        1620
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 34
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 34
                                        }
                                      }
                                    },
                                    "range": [
                                      1619,
                                      1620
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 34
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 34
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1612,
                                  1620
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 34
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 34
                                    }
                                  },
                                  "range": [
                                    1629,
                                    1634
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      1631,
                                      1634
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 34
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 34
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1622,
                                  1634
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 34
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 34
                                },
                                "start": {
                                  "column": 61,
                                  "line": 34
                                }
                              },
                              "range": [
                                1636,
                                1643
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  1639,
                                  1643
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 34
                                  }
                                }
                              }
                            },
                            "range": [
                              1600,
                              1643
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 34
                              },
                              "start": {
                                "column": 25,
                                "line": 34
                              }
                            }
                          }
                        },
                        "range": [
                          1596,
                          1643
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 34
                          },
                          "start": {
                            "column": 21,
                            "line": 34
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 34
                            },
                            "start": {
                              "column": 77,
                              "line": 34
                            }
                          },
                          "range": [
                            1652,
                            1657
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              1654,
                              1657
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 34
                              },
                              "start": {
                                "column": 79,
                                "line": 34
                              }
                            }
                          }
                        },
                        "range": [
                          1645,
                          1657
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 34
                          },
                          "start": {
                            "column": 70,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 34
                        },
                        "start": {
                          "column": 83,
                          "line": 34
                        }
                      },
                      "range": [
                        1658,
                        1667
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1660,
                          1667
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 34
                          },
                          "start": {
                            "column": 85,
                            "line": 34
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 34
                      },
                      "start": {
                        "column": 20,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    1583,
                    1668
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "range": [
                      1684,
                      1688
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 35
                      },
                      "start": {
                        "column": 15,
                        "line": 35
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1688,
                      1763
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 35
                            },
                            "start": {
                              "column": 22,
                              "line": 35
                            }
                          },
                          "range": [
                            1691,
                            1738
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 35
                                    }
                                  },
                                  "range": [
                                    1695,
                                    1703
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      1697,
                                      1703
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 35
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1694,
                                  1703
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 35
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
                                      "column": 46,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 35
                                    }
                                  },
                                  "range": [
                                    1710,
                                    1715
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      1712,
                                      1715
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 35
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1705,
                                  1715
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 35
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 35
                                    }
                                  },
                                  "range": [
                                    1724,
                                    1729
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      1726,
                                      1729
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 57,
                                        "line": 35
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1717,
                                  1729
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 35
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 69,
                                  "line": 35
                                },
                                "start": {
                                  "column": 62,
                                  "line": 35
                                }
                              },
                              "range": [
                                1731,
                                1738
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  1734,
                                  1738
                                ],
                                "loc": {
                                  "end": {
                                    "column": 69,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 35
                                  }
                                }
                              }
                            },
                            "range": [
                              1693,
                              1738
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 35
                              },
                              "start": {
                                "column": 24,
                                "line": 35
                              }
                            }
                          }
                        },
                        "range": [
                          1689,
                          1738
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 35
                          },
                          "start": {
                            "column": 20,
                            "line": 35
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 35
                            },
                            "start": {
                              "column": 78,
                              "line": 35
                            }
                          },
                          "range": [
                            1747,
                            1752
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              1749,
                              1752
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 35
                              },
                              "start": {
                                "column": 80,
                                "line": 35
                              }
                            }
                          }
                        },
                        "range": [
                          1740,
                          1752
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 35
                          },
                          "start": {
                            "column": 71,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 35
                        },
                        "start": {
                          "column": 84,
                          "line": 35
                        }
                      },
                      "range": [
                        1753,
                        1762
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1755,
                          1762
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 35
                          },
                          "start": {
                            "column": 86,
                            "line": 35
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 35
                      },
                      "start": {
                        "column": 19,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1677,
                    1763
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "range": [
                      1779,
                      1785
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 36
                      },
                      "start": {
                        "column": 15,
                        "line": 36
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1785,
                      1802
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 33,
                              "line": 36
                            },
                            "start": {
                              "column": 25,
                              "line": 36
                            }
                          },
                          "range": [
                            1789,
                            1797
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1791,
                              1797
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 36
                              },
                              "start": {
                                "column": 27,
                                "line": 36
                              }
                            }
                          }
                        },
                        "range": [
                          1786,
                          1797
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 36
                          },
                          "start": {
                            "column": 22,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 36
                        },
                        "start": {
                          "column": 34,
                          "line": 36
                        }
                      },
                      "range": [
                        1798,
                        1801
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1800,
                            1801
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 36
                            },
                            "start": {
                              "column": 36,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1800,
                          1801
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 36
                          },
                          "start": {
                            "column": 36,
                            "line": 36
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 36
                      },
                      "start": {
                        "column": 21,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1772,
                    1802
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 64,
                  "line": 29
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierNameHashTable",
              "optional": false,
              "range": [
                1281,
                1304
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 29
                },
                "start": {
                  "column": 10,
                  "line": 29
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "range": [
                1316,
                1331
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 29
                },
                "start": {
                  "column": 45,
                  "line": 29
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1331,
                1334
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
                      1332,
                      1333
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 29
                      },
                      "start": {
                        "column": 61,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    1332,
                    1333
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 29
                    },
                    "start": {
                      "column": 61,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 29
                },
                "start": {
                  "column": 60,
                  "line": 29
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 29
                },
                "start": {
                  "column": 33,
                  "line": 29
                }
              },
              "range": [
                1304,
                1307
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
                      1305,
                      1306
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
                  "out": false,
                  "range": [
                    1305,
                    1306
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
                }
              ]
            },
            "range": [
              1275,
              1808
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          26,
          1810
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 26,
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
          25
        ],
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "loc": {
          "end": {
            "column": 25,
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
        1810
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
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
                1868,
                1899
              ],
              "body": [
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
                            "column": 18,
                            "line": 42
                          },
                          "start": {
                            "column": 10,
                            "line": 42
                          }
                        },
                        "range": [
                          1880,
                          1888
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1882,
                            1888
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 42
                            },
                            "start": {
                              "column": 12,
                              "line": 42
                            }
                          }
                        }
                      },
                      "range": [
                        1879,
                        1888
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 42
                        },
                        "start": {
                          "column": 9,
                          "line": 42
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
                        "column": 22,
                        "line": 42
                      },
                      "start": {
                        "column": 19,
                        "line": 42
                      }
                    },
                    "range": [
                      1889,
                      1892
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1891,
                          1892
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 42
                          },
                          "start": {
                            "column": 21,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        1891,
                        1892
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 42
                        },
                        "start": {
                          "column": 21,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    1878,
                    1893
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 28,
                  "line": 41
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IIndexable",
              "optional": false,
              "range": [
                1854,
                1864
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 41
                },
                "start": {
                  "column": 14,
                  "line": 41
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 41
                },
                "start": {
                  "column": 24,
                  "line": 41
                }
              },
              "range": [
                1864,
                1867
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
                      1865,
                      1866
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 41
                      },
                      "start": {
                        "column": 25,
                        "line": 41
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1865,
                    1866
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 41
                    },
                    "start": {
                      "column": 25,
                      "line": 41
                    }
                  }
                }
              ]
            },
            "range": [
              1844,
              1899
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createIntrinsicsObject",
              "optional": false,
              "range": [
                1913,
                1935
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 44
                },
                "start": {
                  "column": 13,
                  "line": 44
                }
              }
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 44
                },
                "start": {
                  "column": 40,
                  "line": 44
                }
              },
              "range": [
                1940,
                1955
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1952,
                    1955
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
                          1953,
                          1954
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 44
                          },
                          "start": {
                            "column": 53,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        1953,
                        1954
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 44
                        },
                        "start": {
                          "column": 53,
                          "line": 44
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 44
                    },
                    "start": {
                      "column": 52,
                      "line": 44
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IIndexable",
                  "optional": false,
                  "range": [
                    1942,
                    1952
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 44
                    },
                    "start": {
                      "column": 42,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1942,
                  1955
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 44
                  },
                  "start": {
                    "column": 42,
                    "line": 44
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 44
                },
                "start": {
                  "column": 35,
                  "line": 44
                }
              },
              "range": [
                1935,
                1938
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
                      1936,
                      1937
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 44
                      },
                      "start": {
                        "column": 36,
                        "line": 44
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1936,
                    1937
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 44
                    },
                    "start": {
                      "column": 36,
                      "line": 44
                    }
                  }
                }
              ]
            },
            "range": [
              1904,
              1956
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1985,
                2432
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "range": [
                      1995,
                      2005
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
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
                        "column": 30,
                        "line": 46
                      },
                      "start": {
                        "column": 20,
                        "line": 46
                      }
                    },
                    "range": [
                      2007,
                      2017
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          2009,
                          2015
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 46
                          },
                          "start": {
                            "column": 22,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        2009,
                        2017
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 46
                        },
                        "start": {
                          "column": 22,
                          "line": 46
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1995,
                    2018
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "range": [
                      2027,
                      2030
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
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
                            "column": 23,
                            "line": 47
                          },
                          "start": {
                            "column": 15,
                            "line": 47
                          }
                        },
                        "range": [
                          2034,
                          2042
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2036,
                            2042
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 47
                            },
                            "start": {
                              "column": 17,
                              "line": 47
                            }
                          }
                        }
                      },
                      "range": [
                        2031,
                        2042
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 47
                        },
                        "start": {
                          "column": 12,
                          "line": 47
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 47
                          },
                          "start": {
                            "column": 29,
                            "line": 47
                          }
                        },
                        "range": [
                          2048,
                          2051
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2050,
                              2051
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 47
                              },
                              "start": {
                                "column": 31,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            2050,
                            2051
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 47
                            },
                            "start": {
                              "column": 31,
                              "line": 47
                            }
                          }
                        }
                      },
                      "range": [
                        2044,
                        2051
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 47
                        },
                        "start": {
                          "column": 25,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 47
                      },
                      "start": {
                        "column": 33,
                        "line": 47
                      }
                    },
                    "range": [
                      2052,
                      2061
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2054,
                        2061
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 47
                        },
                        "start": {
                          "column": 35,
                          "line": 47
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    2027,
                    2062
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "range": [
                      2071,
                      2082
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
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
                            "column": 31,
                            "line": 48
                          },
                          "start": {
                            "column": 23,
                            "line": 48
                          }
                        },
                        "range": [
                          2086,
                          2094
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2088,
                            2094
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 48
                            },
                            "start": {
                              "column": 25,
                              "line": 48
                            }
                          }
                        }
                      },
                      "range": [
                        2083,
                        2094
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 48
                        },
                        "start": {
                          "column": 20,
                          "line": 48
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 48
                          },
                          "start": {
                            "column": 37,
                            "line": 48
                          }
                        },
                        "range": [
                          2100,
                          2103
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2102,
                              2103
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 48
                              },
                              "start": {
                                "column": 39,
                                "line": 48
                              }
                            }
                          },
                          "range": [
                            2102,
                            2103
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 48
                            },
                            "start": {
                              "column": 39,
                              "line": 48
                            }
                          }
                        }
                      },
                      "range": [
                        2096,
                        2103
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 48
                        },
                        "start": {
                          "column": 33,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 48
                      },
                      "start": {
                        "column": 41,
                        "line": 48
                      }
                    },
                    "range": [
                      2104,
                      2113
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2106,
                        2113
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 48
                        },
                        "start": {
                          "column": 43,
                          "line": 48
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    2071,
                    2114
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      2123,
                      2126
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 49
                          },
                          "start": {
                            "column": 14,
                            "line": 49
                          }
                        },
                        "range": [
                          2129,
                          2174
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 49
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 49
                                  }
                                },
                                "range": [
                                  2133,
                                  2141
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    2135,
                                    2141
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 49
                                    }
                                  }
                                }
                              },
                              "range": [
                                2132,
                                2141
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 49
                                },
                                "start": {
                                  "column": 17,
                                  "line": 49
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
                                    "line": 49
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 49
                                  }
                                },
                                "range": [
                                  2148,
                                  2151
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      2150,
                                      2151
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    2150,
                                    2151
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 49
                                    }
                                  }
                                }
                              },
                              "range": [
                                2143,
                                2151
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 49
                                },
                                "start": {
                                  "column": 28,
                                  "line": 49
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 49
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 49
                                  }
                                },
                                "range": [
                                  2160,
                                  2165
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    2162,
                                    2165
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 49
                                    }
                                  }
                                }
                              },
                              "range": [
                                2153,
                                2165
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 49
                                },
                                "start": {
                                  "column": 38,
                                  "line": 49
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 49
                              },
                              "start": {
                                "column": 52,
                                "line": 49
                              }
                            },
                            "range": [
                              2167,
                              2174
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                2170,
                                2174
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 49
                                },
                                "start": {
                                  "column": 55,
                                  "line": 49
                                }
                              }
                            }
                          },
                          "range": [
                            2131,
                            2174
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 49
                            },
                            "start": {
                              "column": 16,
                              "line": 49
                            }
                          }
                        }
                      },
                      "range": [
                        2127,
                        2174
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 49
                        },
                        "start": {
                          "column": 12,
                          "line": 49
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 49
                          },
                          "start": {
                            "column": 68,
                            "line": 49
                          }
                        },
                        "range": [
                          2183,
                          2188
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            2185,
                            2188
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 49
                            },
                            "start": {
                              "column": 70,
                              "line": 49
                            }
                          }
                        }
                      },
                      "range": [
                        2176,
                        2188
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 49
                        },
                        "start": {
                          "column": 61,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 49
                      },
                      "start": {
                        "column": 74,
                        "line": 49
                      }
                    },
                    "range": [
                      2189,
                      2195
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        2191,
                        2195
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 49
                        },
                        "start": {
                          "column": 76,
                          "line": 49
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    2123,
                    2196
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "range": [
                      2205,
                      2210
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 50
                          },
                          "start": {
                            "column": 16,
                            "line": 50
                          }
                        },
                        "range": [
                          2213,
                          2258
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 50
                                  }
                                },
                                "range": [
                                  2217,
                                  2225
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    2219,
                                    2225
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 50
                                    }
                                  }
                                }
                              },
                              "range": [
                                2216,
                                2225
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 50
                                },
                                "start": {
                                  "column": 19,
                                  "line": 50
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
                                    "column": 38,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 50
                                  }
                                },
                                "range": [
                                  2232,
                                  2235
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      2234,
                                      2235
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 50
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 50
                                      }
                                    }
                                  },
                                  "range": [
                                    2234,
                                    2235
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 50
                                    }
                                  }
                                }
                              },
                              "range": [
                                2227,
                                2235
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 50
                                },
                                "start": {
                                  "column": 30,
                                  "line": 50
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 50
                                  }
                                },
                                "range": [
                                  2244,
                                  2249
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    2246,
                                    2249
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 50
                                    }
                                  }
                                }
                              },
                              "range": [
                                2237,
                                2249
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 50
                                },
                                "start": {
                                  "column": 40,
                                  "line": 50
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 50
                              },
                              "start": {
                                "column": 54,
                                "line": 50
                              }
                            },
                            "range": [
                              2251,
                              2258
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                2254,
                                2258
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 50
                                },
                                "start": {
                                  "column": 57,
                                  "line": 50
                                }
                              }
                            }
                          },
                          "range": [
                            2215,
                            2258
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 50
                            },
                            "start": {
                              "column": 18,
                              "line": 50
                            }
                          }
                        }
                      },
                      "range": [
                        2211,
                        2258
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 50
                        },
                        "start": {
                          "column": 14,
                          "line": 50
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 50
                          },
                          "start": {
                            "column": 70,
                            "line": 50
                          }
                        },
                        "range": [
                          2267,
                          2272
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            2269,
                            2272
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 50
                            },
                            "start": {
                              "column": 72,
                              "line": 50
                            }
                          }
                        }
                      },
                      "range": [
                        2260,
                        2272
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 50
                        },
                        "start": {
                          "column": 63,
                          "line": 50
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
                        "line": 50
                      },
                      "start": {
                        "column": 76,
                        "line": 50
                      }
                    },
                    "range": [
                      2273,
                      2282
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2275,
                        2282
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 50
                        },
                        "start": {
                          "column": 78,
                          "line": 50
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    2205,
                    2283
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "range": [
                      2292,
                      2296
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 51
                          },
                          "start": {
                            "column": 15,
                            "line": 51
                          }
                        },
                        "range": [
                          2299,
                          2344
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 51
                                  }
                                },
                                "range": [
                                  2303,
                                  2311
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    2305,
                                    2311
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 51
                                    }
                                  }
                                }
                              },
                              "range": [
                                2302,
                                2311
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 51
                                },
                                "start": {
                                  "column": 18,
                                  "line": 51
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
                                    "column": 37,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 51
                                  }
                                },
                                "range": [
                                  2318,
                                  2321
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      2320,
                                      2321
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 51
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 51
                                      }
                                    }
                                  },
                                  "range": [
                                    2320,
                                    2321
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 51
                                    }
                                  }
                                }
                              },
                              "range": [
                                2313,
                                2321
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 51
                                },
                                "start": {
                                  "column": 29,
                                  "line": 51
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 51
                                  }
                                },
                                "range": [
                                  2330,
                                  2335
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    2332,
                                    2335
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 51
                                    }
                                  }
                                }
                              },
                              "range": [
                                2323,
                                2335
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 51
                                },
                                "start": {
                                  "column": 39,
                                  "line": 51
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 51
                              },
                              "start": {
                                "column": 53,
                                "line": 51
                              }
                            },
                            "range": [
                              2337,
                              2344
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                2340,
                                2344
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 51
                                },
                                "start": {
                                  "column": 56,
                                  "line": 51
                                }
                              }
                            }
                          },
                          "range": [
                            2301,
                            2344
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 51
                            },
                            "start": {
                              "column": 17,
                              "line": 51
                            }
                          }
                        }
                      },
                      "range": [
                        2297,
                        2344
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 51
                        },
                        "start": {
                          "column": 13,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 51
                          },
                          "start": {
                            "column": 69,
                            "line": 51
                          }
                        },
                        "range": [
                          2353,
                          2358
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            2355,
                            2358
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 51
                            },
                            "start": {
                              "column": 71,
                              "line": 51
                            }
                          }
                        }
                      },
                      "range": [
                        2346,
                        2358
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 51
                        },
                        "start": {
                          "column": 62,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 51
                      },
                      "start": {
                        "column": 75,
                        "line": 51
                      }
                    },
                    "range": [
                      2359,
                      2368
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2361,
                        2368
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 51
                        },
                        "start": {
                          "column": 77,
                          "line": 51
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    2292,
                    2369
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "range": [
                      2378,
                      2383
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
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
                        "line": 52
                      },
                      "start": {
                        "column": 15,
                        "line": 52
                      }
                    },
                    "range": [
                      2385,
                      2393
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2387,
                        2393
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 52
                        },
                        "start": {
                          "column": 17,
                          "line": 52
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    2378,
                    2394
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "range": [
                      2403,
                      2409
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
                        "line": 53
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
                            "line": 53
                          },
                          "start": {
                            "column": 18,
                            "line": 53
                          }
                        },
                        "range": [
                          2413,
                          2421
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2415,
                            2421
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 53
                            },
                            "start": {
                              "column": 20,
                              "line": 53
                            }
                          }
                        }
                      },
                      "range": [
                        2410,
                        2421
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 53
                        },
                        "start": {
                          "column": 15,
                          "line": 53
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
                        "line": 53
                      },
                      "start": {
                        "column": 27,
                        "line": 53
                      }
                    },
                    "range": [
                      2422,
                      2425
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2424,
                          2425
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 53
                          },
                          "start": {
                            "column": 29,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        2424,
                        2425
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 53
                        },
                        "start": {
                          "column": 29,
                          "line": 53
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    2403,
                    2426
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 28,
                  "line": 45
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHashTable",
              "optional": false,
              "range": [
                1971,
                1981
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 45
                },
                "start": {
                  "column": 14,
                  "line": 45
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 45
                },
                "start": {
                  "column": 24,
                  "line": 45
                }
              },
              "range": [
                1981,
                1984
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
                      1982,
                      1983
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 45
                      },
                      "start": {
                        "column": 25,
                        "line": 45
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1982,
                    1983
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 45
                    },
                    "start": {
                      "column": 25,
                      "line": 45
                    }
                  }
                }
              ]
            },
            "range": [
              1961,
              2432
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2487,
                3082
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "itemCount",
                    "optional": false,
                    "range": [
                      2505,
                      2514
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 56
                      },
                      "start": {
                        "column": 16,
                        "line": 56
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": null,
                  "range": [
                    2497,
                    2515
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "range": [
                      2532,
                      2537
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 57
                      },
                      "start": {
                        "column": 16,
                        "line": 57
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": null,
                  "range": [
                    2524,
                    2538
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "range": [
                      2554,
                      2564
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 58
                      },
                      "start": {
                        "column": 15,
                        "line": 58
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      2564,
                      2577
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 58
                        },
                        "start": {
                          "column": 27,
                          "line": 58
                        }
                      },
                      "range": [
                        2566,
                        2576
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            2568,
                            2574
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 58
                            },
                            "start": {
                              "column": 29,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          2568,
                          2576
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 58
                          },
                          "start": {
                            "column": 29,
                            "line": 58
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 58
                      },
                      "start": {
                        "column": 25,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    2547,
                    2577
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "range": [
                      2593,
                      2596
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 59
                      },
                      "start": {
                        "column": 15,
                        "line": 59
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      2596,
                      2628
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 30,
                              "line": 59
                            },
                            "start": {
                              "column": 22,
                              "line": 59
                            }
                          },
                          "range": [
                            2600,
                            2608
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              2602,
                              2608
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 59
                              },
                              "start": {
                                "column": 24,
                                "line": 59
                              }
                            }
                          }
                        },
                        "range": [
                          2597,
                          2608
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 59
                          },
                          "start": {
                            "column": 19,
                            "line": 59
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 59
                            },
                            "start": {
                              "column": 36,
                              "line": 59
                            }
                          },
                          "range": [
                            2614,
                            2617
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                2616,
                                2617
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 59
                                },
                                "start": {
                                  "column": 38,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              2616,
                              2617
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 59
                              },
                              "start": {
                                "column": 38,
                                "line": 59
                              }
                            }
                          }
                        },
                        "range": [
                          2610,
                          2617
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 59
                          },
                          "start": {
                            "column": 32,
                            "line": 59
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 59
                        },
                        "start": {
                          "column": 40,
                          "line": 59
                        }
                      },
                      "range": [
                        2618,
                        2627
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2620,
                          2627
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 59
                          },
                          "start": {
                            "column": 42,
                            "line": 59
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 59
                      },
                      "start": {
                        "column": 18,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    2586,
                    2628
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "range": [
                      2644,
                      2655
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 60
                      },
                      "start": {
                        "column": 15,
                        "line": 60
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      2655,
                      2687
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "line": 60
                            },
                            "start": {
                              "column": 30,
                              "line": 60
                            }
                          },
                          "range": [
                            2659,
                            2667
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              2661,
                              2667
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 60
                              },
                              "start": {
                                "column": 32,
                                "line": 60
                              }
                            }
                          }
                        },
                        "range": [
                          2656,
                          2667
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 60
                          },
                          "start": {
                            "column": 27,
                            "line": 60
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 60
                            },
                            "start": {
                              "column": 44,
                              "line": 60
                            }
                          },
                          "range": [
                            2673,
                            2676
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                2675,
                                2676
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 60
                                },
                                "start": {
                                  "column": 46,
                                  "line": 60
                                }
                              }
                            },
                            "range": [
                              2675,
                              2676
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 60
                              },
                              "start": {
                                "column": 46,
                                "line": 60
                              }
                            }
                          }
                        },
                        "range": [
                          2669,
                          2676
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 60
                          },
                          "start": {
                            "column": 40,
                            "line": 60
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 60
                        },
                        "start": {
                          "column": 48,
                          "line": 60
                        }
                      },
                      "range": [
                        2677,
                        2686
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2679,
                          2686
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 60
                          },
                          "start": {
                            "column": 50,
                            "line": 60
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 60
                      },
                      "start": {
                        "column": 26,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    2637,
                    2687
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      2703,
                      2706
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 61
                      },
                      "start": {
                        "column": 15,
                        "line": 61
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      2706,
                      2776
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 61
                            },
                            "start": {
                              "column": 21,
                              "line": 61
                            }
                          },
                          "range": [
                            2709,
                            2754
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 61
                                    }
                                  },
                                  "range": [
                                    2713,
                                    2721
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      2715,
                                      2721
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 61
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 61
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2712,
                                  2721
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 61
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
                                      "column": 43,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 61
                                    }
                                  },
                                  "range": [
                                    2728,
                                    2731
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2730,
                                        2731
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 61
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 61
                                        }
                                      }
                                    },
                                    "range": [
                                      2730,
                                      2731
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 61
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 61
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2723,
                                  2731
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 61
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 61
                                    }
                                  },
                                  "range": [
                                    2740,
                                    2745
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      2742,
                                      2745
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 61
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 61
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2733,
                                  2745
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 61
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 61
                                },
                                "start": {
                                  "column": 59,
                                  "line": 61
                                }
                              },
                              "range": [
                                2747,
                                2754
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  2750,
                                  2754
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 61
                                  }
                                }
                              }
                            },
                            "range": [
                              2711,
                              2754
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 61
                              },
                              "start": {
                                "column": 23,
                                "line": 61
                              }
                            }
                          }
                        },
                        "range": [
                          2707,
                          2754
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 61
                          },
                          "start": {
                            "column": 19,
                            "line": 61
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 61
                            },
                            "start": {
                              "column": 75,
                              "line": 61
                            }
                          },
                          "range": [
                            2763,
                            2768
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              2765,
                              2768
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 61
                              },
                              "start": {
                                "column": 77,
                                "line": 61
                              }
                            }
                          }
                        },
                        "range": [
                          2756,
                          2768
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 61
                          },
                          "start": {
                            "column": 68,
                            "line": 61
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 61
                        },
                        "start": {
                          "column": 81,
                          "line": 61
                        }
                      },
                      "range": [
                        2769,
                        2775
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          2771,
                          2775
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 61
                          },
                          "start": {
                            "column": 83,
                            "line": 61
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 61
                      },
                      "start": {
                        "column": 18,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    2696,
                    2776
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "range": [
                      2792,
                      2797
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 62
                      },
                      "start": {
                        "column": 15,
                        "line": 62
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      2797,
                      2870
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 62
                            },
                            "start": {
                              "column": 23,
                              "line": 62
                            }
                          },
                          "range": [
                            2800,
                            2845
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 62
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 62
                                    }
                                  },
                                  "range": [
                                    2804,
                                    2812
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      2806,
                                      2812
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 62
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 62
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2803,
                                  2812
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 62
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 62
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
                                      "column": 45,
                                      "line": 62
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 62
                                    }
                                  },
                                  "range": [
                                    2819,
                                    2822
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2821,
                                        2822
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 62
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 62
                                        }
                                      }
                                    },
                                    "range": [
                                      2821,
                                      2822
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 62
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 62
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2814,
                                  2822
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 62
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 62
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 62
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 62
                                    }
                                  },
                                  "range": [
                                    2831,
                                    2836
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      2833,
                                      2836
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 62
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 62
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2824,
                                  2836
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 62
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 62
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 62
                                },
                                "start": {
                                  "column": 61,
                                  "line": 62
                                }
                              },
                              "range": [
                                2838,
                                2845
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  2841,
                                  2845
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 62
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 62
                                  }
                                }
                              }
                            },
                            "range": [
                              2802,
                              2845
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 62
                              },
                              "start": {
                                "column": 25,
                                "line": 62
                              }
                            }
                          }
                        },
                        "range": [
                          2798,
                          2845
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 62
                          },
                          "start": {
                            "column": 21,
                            "line": 62
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 62
                            },
                            "start": {
                              "column": 77,
                              "line": 62
                            }
                          },
                          "range": [
                            2854,
                            2859
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              2856,
                              2859
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 62
                              },
                              "start": {
                                "column": 79,
                                "line": 62
                              }
                            }
                          }
                        },
                        "range": [
                          2847,
                          2859
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 62
                          },
                          "start": {
                            "column": 70,
                            "line": 62
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 62
                        },
                        "start": {
                          "column": 83,
                          "line": 62
                        }
                      },
                      "range": [
                        2860,
                        2869
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2862,
                          2869
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 62
                          },
                          "start": {
                            "column": 85,
                            "line": 62
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 62
                      },
                      "start": {
                        "column": 20,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    2785,
                    2870
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "range": [
                      2886,
                      2890
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 63
                      },
                      "start": {
                        "column": 15,
                        "line": 63
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      2890,
                      2963
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 63
                            },
                            "start": {
                              "column": 22,
                              "line": 63
                            }
                          },
                          "range": [
                            2893,
                            2938
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 63
                                    }
                                  },
                                  "range": [
                                    2897,
                                    2905
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      2899,
                                      2905
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 63
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 63
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2896,
                                  2905
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 63
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
                                      "column": 44,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 63
                                    }
                                  },
                                  "range": [
                                    2912,
                                    2915
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2914,
                                        2915
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 63
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 63
                                        }
                                      }
                                    },
                                    "range": [
                                      2914,
                                      2915
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 63
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 63
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2907,
                                  2915
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 63
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 53,
                                      "line": 63
                                    }
                                  },
                                  "range": [
                                    2924,
                                    2929
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      2926,
                                      2929
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 63
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 63
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2917,
                                  2929
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 63
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 63
                                },
                                "start": {
                                  "column": 60,
                                  "line": 63
                                }
                              },
                              "range": [
                                2931,
                                2938
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  2934,
                                  2938
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 63
                                  }
                                }
                              }
                            },
                            "range": [
                              2895,
                              2938
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 63
                              },
                              "start": {
                                "column": 24,
                                "line": 63
                              }
                            }
                          }
                        },
                        "range": [
                          2891,
                          2938
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 63
                          },
                          "start": {
                            "column": 20,
                            "line": 63
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 63
                            },
                            "start": {
                              "column": 76,
                              "line": 63
                            }
                          },
                          "range": [
                            2947,
                            2952
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              2949,
                              2952
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 63
                              },
                              "start": {
                                "column": 78,
                                "line": 63
                              }
                            }
                          }
                        },
                        "range": [
                          2940,
                          2952
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 63
                          },
                          "start": {
                            "column": 69,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 63
                        },
                        "start": {
                          "column": 82,
                          "line": 63
                        }
                      },
                      "range": [
                        2953,
                        2962
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2955,
                          2962
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 63
                          },
                          "start": {
                            "column": 84,
                            "line": 63
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 63
                      },
                      "start": {
                        "column": 19,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    2879,
                    2963
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "range": [
                      2979,
                      2984
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 64
                      },
                      "start": {
                        "column": 15,
                        "line": 64
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      2984,
                      2995
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 64
                        },
                        "start": {
                          "column": 22,
                          "line": 64
                        }
                      },
                      "range": [
                        2986,
                        2994
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2988,
                          2994
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 64
                          },
                          "start": {
                            "column": 24,
                            "line": 64
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 64
                      },
                      "start": {
                        "column": 20,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    2972,
                    2995
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "range": [
                      3011,
                      3017
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 65
                      },
                      "start": {
                        "column": 15,
                        "line": 65
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3017,
                      3034
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 33,
                              "line": 65
                            },
                            "start": {
                              "column": 25,
                              "line": 65
                            }
                          },
                          "range": [
                            3021,
                            3029
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3023,
                              3029
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 65
                              },
                              "start": {
                                "column": 27,
                                "line": 65
                              }
                            }
                          }
                        },
                        "range": [
                          3018,
                          3029
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 65
                          },
                          "start": {
                            "column": 22,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 65
                        },
                        "start": {
                          "column": 34,
                          "line": 65
                        }
                      },
                      "range": [
                        3030,
                        3033
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            3032,
                            3033
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 65
                            },
                            "start": {
                              "column": 36,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          3032,
                          3033
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 65
                          },
                          "start": {
                            "column": 36,
                            "line": 65
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 65
                      },
                      "start": {
                        "column": 21,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    3004,
                    3034
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remove",
                    "optional": false,
                    "range": [
                      3050,
                      3056
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 66
                      },
                      "start": {
                        "column": 15,
                        "line": 66
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3056,
                      3076
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 33,
                              "line": 66
                            },
                            "start": {
                              "column": 25,
                              "line": 66
                            }
                          },
                          "range": [
                            3060,
                            3068
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3062,
                              3068
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 66
                              },
                              "start": {
                                "column": 27,
                                "line": 66
                              }
                            }
                          }
                        },
                        "range": [
                          3057,
                          3068
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 66
                          },
                          "start": {
                            "column": 22,
                            "line": 66
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 66
                        },
                        "start": {
                          "column": 34,
                          "line": 66
                        }
                      },
                      "range": [
                        3069,
                        3075
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          3071,
                          3075
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 66
                          },
                          "start": {
                            "column": 36,
                            "line": 66
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 66
                      },
                      "start": {
                        "column": 21,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    3043,
                    3076
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 54,
                  "line": 55
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "range": [
                2443,
                2458
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 55
                },
                "start": {
                  "column": 10,
                  "line": 55
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHashTable",
                  "optional": false,
                  "range": [
                    2473,
                    2483
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 55
                    },
                    "start": {
                      "column": 40,
                      "line": 55
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2483,
                    2486
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
                          2484,
                          2485
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 55
                          },
                          "start": {
                            "column": 51,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        2484,
                        2485
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 55
                        },
                        "start": {
                          "column": 51,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 55
                    },
                    "start": {
                      "column": 50,
                      "line": 55
                    }
                  }
                },
                "range": [
                  2473,
                  2486
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 55
                  },
                  "start": {
                    "column": 40,
                    "line": 55
                  }
                }
              }
            ],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 55
                },
                "start": {
                  "column": 25,
                  "line": 55
                }
              },
              "range": [
                2458,
                2461
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
                      2459,
                      2460
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 55
                      },
                      "start": {
                        "column": 26,
                        "line": 55
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2459,
                    2460
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 55
                    },
                    "start": {
                      "column": 26,
                      "line": 55
                    }
                  }
                }
              ]
            },
            "range": [
              2437,
              3082
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3147,
                3620
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "range": [
                      3164,
                      3174
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 69
                      },
                      "start": {
                        "column": 15,
                        "line": 69
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3174,
                      3187
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 69
                        },
                        "start": {
                          "column": 27,
                          "line": 69
                        }
                      },
                      "range": [
                        3176,
                        3186
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            3178,
                            3184
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 69
                            },
                            "start": {
                              "column": 29,
                              "line": 69
                            }
                          }
                        },
                        "range": [
                          3178,
                          3186
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 69
                          },
                          "start": {
                            "column": 29,
                            "line": 69
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 69
                      },
                      "start": {
                        "column": 25,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    3157,
                    3187
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "range": [
                      3203,
                      3206
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 70
                      },
                      "start": {
                        "column": 15,
                        "line": 70
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3206,
                      3238
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 30,
                              "line": 70
                            },
                            "start": {
                              "column": 22,
                              "line": 70
                            }
                          },
                          "range": [
                            3210,
                            3218
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3212,
                              3218
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 70
                              },
                              "start": {
                                "column": 24,
                                "line": 70
                              }
                            }
                          }
                        },
                        "range": [
                          3207,
                          3218
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 70
                          },
                          "start": {
                            "column": 19,
                            "line": 70
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 70
                            },
                            "start": {
                              "column": 36,
                              "line": 70
                            }
                          },
                          "range": [
                            3224,
                            3227
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                3226,
                                3227
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 70
                                },
                                "start": {
                                  "column": 38,
                                  "line": 70
                                }
                              }
                            },
                            "range": [
                              3226,
                              3227
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 70
                              },
                              "start": {
                                "column": 38,
                                "line": 70
                              }
                            }
                          }
                        },
                        "range": [
                          3220,
                          3227
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 70
                          },
                          "start": {
                            "column": 32,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 70
                        },
                        "start": {
                          "column": 40,
                          "line": 70
                        }
                      },
                      "range": [
                        3228,
                        3237
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          3230,
                          3237
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 70
                          },
                          "start": {
                            "column": 42,
                            "line": 70
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 70
                      },
                      "start": {
                        "column": 18,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    3196,
                    3238
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "range": [
                      3254,
                      3265
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 71
                      },
                      "start": {
                        "column": 15,
                        "line": 71
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3265,
                      3297
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "line": 71
                            },
                            "start": {
                              "column": 30,
                              "line": 71
                            }
                          },
                          "range": [
                            3269,
                            3277
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3271,
                              3277
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 71
                              },
                              "start": {
                                "column": 32,
                                "line": 71
                              }
                            }
                          }
                        },
                        "range": [
                          3266,
                          3277
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 71
                          },
                          "start": {
                            "column": 27,
                            "line": 71
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 71
                            },
                            "start": {
                              "column": 44,
                              "line": 71
                            }
                          },
                          "range": [
                            3283,
                            3286
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                3285,
                                3286
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 71
                                },
                                "start": {
                                  "column": 46,
                                  "line": 71
                                }
                              }
                            },
                            "range": [
                              3285,
                              3286
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 71
                              },
                              "start": {
                                "column": 46,
                                "line": 71
                              }
                            }
                          }
                        },
                        "range": [
                          3279,
                          3286
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 71
                          },
                          "start": {
                            "column": 40,
                            "line": 71
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 71
                        },
                        "start": {
                          "column": 48,
                          "line": 71
                        }
                      },
                      "range": [
                        3287,
                        3296
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          3289,
                          3296
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 71
                          },
                          "start": {
                            "column": 50,
                            "line": 71
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 71
                      },
                      "start": {
                        "column": 26,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    3247,
                    3297
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      3313,
                      3316
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 72
                      },
                      "start": {
                        "column": 15,
                        "line": 72
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3316,
                      3386
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 72
                            },
                            "start": {
                              "column": 21,
                              "line": 72
                            }
                          },
                          "range": [
                            3319,
                            3364
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 72
                                    }
                                  },
                                  "range": [
                                    3323,
                                    3331
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      3325,
                                      3331
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 72
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 72
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3322,
                                  3331
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 72
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
                                      "column": 43,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 72
                                    }
                                  },
                                  "range": [
                                    3338,
                                    3341
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        3340,
                                        3341
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 72
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 72
                                        }
                                      }
                                    },
                                    "range": [
                                      3340,
                                      3341
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 72
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 72
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3333,
                                  3341
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 72
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 72
                                    }
                                  },
                                  "range": [
                                    3350,
                                    3355
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      3352,
                                      3355
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 72
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 72
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3343,
                                  3355
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 72
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 72
                                },
                                "start": {
                                  "column": 59,
                                  "line": 72
                                }
                              },
                              "range": [
                                3357,
                                3364
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  3360,
                                  3364
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 72
                                  }
                                }
                              }
                            },
                            "range": [
                              3321,
                              3364
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 72
                              },
                              "start": {
                                "column": 23,
                                "line": 72
                              }
                            }
                          }
                        },
                        "range": [
                          3317,
                          3364
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 72
                          },
                          "start": {
                            "column": 19,
                            "line": 72
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 72
                            },
                            "start": {
                              "column": 75,
                              "line": 72
                            }
                          },
                          "range": [
                            3373,
                            3378
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              3375,
                              3378
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 72
                              },
                              "start": {
                                "column": 77,
                                "line": 72
                              }
                            }
                          }
                        },
                        "range": [
                          3366,
                          3378
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 72
                          },
                          "start": {
                            "column": 68,
                            "line": 72
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 72
                        },
                        "start": {
                          "column": 81,
                          "line": 72
                        }
                      },
                      "range": [
                        3379,
                        3385
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          3381,
                          3385
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 72
                          },
                          "start": {
                            "column": 83,
                            "line": 72
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 72
                      },
                      "start": {
                        "column": 18,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    3306,
                    3386
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "range": [
                      3402,
                      3407
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 73
                      },
                      "start": {
                        "column": 15,
                        "line": 73
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3407,
                      3480
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 73
                            },
                            "start": {
                              "column": 23,
                              "line": 73
                            }
                          },
                          "range": [
                            3410,
                            3455
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 73
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 73
                                    }
                                  },
                                  "range": [
                                    3414,
                                    3422
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      3416,
                                      3422
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 73
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3413,
                                  3422
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 73
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
                                      "column": 45,
                                      "line": 73
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 73
                                    }
                                  },
                                  "range": [
                                    3429,
                                    3432
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        3431,
                                        3432
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 73
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 73
                                        }
                                      }
                                    },
                                    "range": [
                                      3431,
                                      3432
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 73
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3424,
                                  3432
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 73
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 73
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 73
                                    }
                                  },
                                  "range": [
                                    3441,
                                    3446
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      3443,
                                      3446
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 73
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3434,
                                  3446
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 73
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 73
                                },
                                "start": {
                                  "column": 61,
                                  "line": 73
                                }
                              },
                              "range": [
                                3448,
                                3455
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  3451,
                                  3455
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 73
                                  }
                                }
                              }
                            },
                            "range": [
                              3412,
                              3455
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 73
                              },
                              "start": {
                                "column": 25,
                                "line": 73
                              }
                            }
                          }
                        },
                        "range": [
                          3408,
                          3455
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 73
                          },
                          "start": {
                            "column": 21,
                            "line": 73
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 73
                            },
                            "start": {
                              "column": 77,
                              "line": 73
                            }
                          },
                          "range": [
                            3464,
                            3469
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              3466,
                              3469
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 73
                              },
                              "start": {
                                "column": 79,
                                "line": 73
                              }
                            }
                          }
                        },
                        "range": [
                          3457,
                          3469
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 73
                          },
                          "start": {
                            "column": 70,
                            "line": 73
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 73
                        },
                        "start": {
                          "column": 83,
                          "line": 73
                        }
                      },
                      "range": [
                        3470,
                        3479
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          3472,
                          3479
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 73
                          },
                          "start": {
                            "column": 85,
                            "line": 73
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 73
                      },
                      "start": {
                        "column": 20,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    3395,
                    3480
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "range": [
                      3496,
                      3500
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 74
                      },
                      "start": {
                        "column": 15,
                        "line": 74
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3500,
                      3575
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 74
                            },
                            "start": {
                              "column": 22,
                              "line": 74
                            }
                          },
                          "range": [
                            3503,
                            3550
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 74
                                    }
                                  },
                                  "range": [
                                    3507,
                                    3515
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      3509,
                                      3515
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 74
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3506,
                                  3515
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 74
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
                                      "column": 46,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 74
                                    }
                                  },
                                  "range": [
                                    3522,
                                    3527
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      3524,
                                      3527
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 74
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3517,
                                  3527
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 74
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 74
                                    }
                                  },
                                  "range": [
                                    3536,
                                    3541
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      3538,
                                      3541
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 57,
                                        "line": 74
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3529,
                                  3541
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 74
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 69,
                                  "line": 74
                                },
                                "start": {
                                  "column": 62,
                                  "line": 74
                                }
                              },
                              "range": [
                                3543,
                                3550
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  3546,
                                  3550
                                ],
                                "loc": {
                                  "end": {
                                    "column": 69,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 74
                                  }
                                }
                              }
                            },
                            "range": [
                              3505,
                              3550
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 74
                              },
                              "start": {
                                "column": 24,
                                "line": 74
                              }
                            }
                          }
                        },
                        "range": [
                          3501,
                          3550
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 74
                          },
                          "start": {
                            "column": 20,
                            "line": 74
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 74
                            },
                            "start": {
                              "column": 78,
                              "line": 74
                            }
                          },
                          "range": [
                            3559,
                            3564
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              3561,
                              3564
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 74
                              },
                              "start": {
                                "column": 80,
                                "line": 74
                              }
                            }
                          }
                        },
                        "range": [
                          3552,
                          3564
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 74
                          },
                          "start": {
                            "column": 71,
                            "line": 74
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 74
                        },
                        "start": {
                          "column": 84,
                          "line": 74
                        }
                      },
                      "range": [
                        3565,
                        3574
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          3567,
                          3574
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 74
                          },
                          "start": {
                            "column": 86,
                            "line": 74
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 74
                      },
                      "start": {
                        "column": 19,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    3489,
                    3575
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "range": [
                      3591,
                      3597
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 75
                      },
                      "start": {
                        "column": 15,
                        "line": 75
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      3597,
                      3614
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 33,
                              "line": 75
                            },
                            "start": {
                              "column": 25,
                              "line": 75
                            }
                          },
                          "range": [
                            3601,
                            3609
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3603,
                              3609
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 75
                              },
                              "start": {
                                "column": 27,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          3598,
                          3609
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 75
                          },
                          "start": {
                            "column": 22,
                            "line": 75
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 75
                        },
                        "start": {
                          "column": 34,
                          "line": 75
                        }
                      },
                      "range": [
                        3610,
                        3613
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            3612,
                            3613
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 75
                            },
                            "start": {
                              "column": 36,
                              "line": 75
                            }
                          }
                        },
                        "range": [
                          3612,
                          3613
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 75
                          },
                          "start": {
                            "column": 36,
                            "line": 75
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 75
                      },
                      "start": {
                        "column": 21,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    3584,
                    3614
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 64,
                  "line": 68
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierNameHashTable",
              "optional": false,
              "range": [
                3093,
                3116
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 68
                },
                "start": {
                  "column": 10,
                  "line": 68
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "range": [
                3128,
                3143
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 68
                },
                "start": {
                  "column": 45,
                  "line": 68
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3143,
                3146
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
                      3144,
                      3145
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 68
                      },
                      "start": {
                        "column": 61,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    3144,
                    3145
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 68
                    },
                    "start": {
                      "column": 61,
                      "line": 68
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 68
                },
                "start": {
                  "column": 60,
                  "line": 68
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 68
                },
                "start": {
                  "column": 33,
                  "line": 68
                }
              },
              "range": [
                3116,
                3119
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
                      3117,
                      3118
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 68
                      },
                      "start": {
                        "column": 34,
                        "line": 68
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3117,
                    3118
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 68
                    },
                    "start": {
                      "column": 34,
                      "line": 68
                    }
                  }
                }
              ]
            },
            "range": [
              3087,
              3620
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "range": [
          1838,
          3622
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 26,
            "line": 40
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1827,
          1837
        ],
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "loc": {
          "end": {
            "column": 25,
            "line": 40
          },
          "start": {
            "column": 15,
            "line": 40
          }
        }
      },
      "kind": "module",
      "range": [
        1812,
        3622
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 77
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
