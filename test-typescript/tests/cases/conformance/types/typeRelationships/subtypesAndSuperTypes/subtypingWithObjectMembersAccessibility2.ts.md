__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    64,
    881
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          75,
          95
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                81,
                84
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                84,
                92
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  86,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              81,
              93
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          70,
          74
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        64,
        95
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          124,
          144
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                130,
                133
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                133,
                141
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  135,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              130,
              142
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 27,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          103,
          110
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          119,
          123
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 7
          }
        }
      },
      "range": [
        97,
        144
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                182,
                216
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      200,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 16,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    },
                    "range": [
                      203,
                      209
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          205,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 21,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        205,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 13
                        },
                        "start": {
                          "column": 21,
                          "line": 13
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    192,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                180,
                181
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              174,
              216
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                240,
                285
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      257,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    },
                    "range": [
                      260,
                      269
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          262,
                          269
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        262,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    250,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 22,
                  "line": 16
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                228,
                229
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                238,
                239
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 16
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "range": [
              222,
              285
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
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
                300,
                332
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
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      318,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 21
                      },
                      "start": {
                        "column": 16,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 21
                      },
                      "start": {
                        "column": 17,
                        "line": 21
                      }
                    },
                    "range": [
                      319,
                      325
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          321,
                          325
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 21
                          },
                          "start": {
                            "column": 19,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        321,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 21
                        },
                        "start": {
                          "column": 19,
                          "line": 21
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    310,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "range": [
                297,
                299
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 10,
                  "line": 20
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              291,
              332
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                358,
                401
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      375,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    },
                    "range": [
                      376,
                      385
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          378,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 25
                          },
                          "start": {
                            "column": 18,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        378,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 25
                        },
                        "start": {
                          "column": 18,
                          "line": 25
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    368,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                344,
                346
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 24
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "range": [
                355,
                357
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 24
                },
                "start": {
                  "column": 21,
                  "line": 24
                }
              }
            },
            "range": [
              338,
              401
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                416,
                450
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
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      434,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 29
                      },
                      "start": {
                        "column": 16,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 29
                      },
                      "start": {
                        "column": 19,
                        "line": 29
                      }
                    },
                    "range": [
                      437,
                      443
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          439,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 29
                          },
                          "start": {
                            "column": 21,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        439,
                        443
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 29
                        },
                        "start": {
                          "column": 21,
                          "line": 29
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    426,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 13,
                  "line": 28
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "range": [
                413,
                415
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              407,
              450
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                476,
                521
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      493,
                      496
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
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    },
                    "range": [
                      496,
                      505
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          498,
                          505
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 33
                          },
                          "start": {
                            "column": 20,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        498,
                        505
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 33
                        },
                        "start": {
                          "column": 20,
                          "line": 33
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    486,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
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
                  "column": 24,
                  "line": 32
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "range": [
                462,
                464
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 32
                },
                "start": {
                  "column": 10,
                  "line": 32
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "range": [
                473,
                475
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 32
                },
                "start": {
                  "column": 21,
                  "line": 32
                }
              }
            },
            "range": [
              456,
              521
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          168,
          523
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 22,
            "line": 11
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          153,
          167
        ],
        "decorators": [],
        "name": "ExplicitPublic",
        "optional": false,
        "loc": {
          "end": {
            "column": 21,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        146,
        523
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                561,
                595
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      579,
                      582
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 39
                      },
                      "start": {
                        "column": 16,
                        "line": 39
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 39
                      },
                      "start": {
                        "column": 19,
                        "line": 39
                      }
                    },
                    "range": [
                      582,
                      588
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          584,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 39
                          },
                          "start": {
                            "column": 21,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        584,
                        588
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 39
                        },
                        "start": {
                          "column": 21,
                          "line": 39
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    571,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 12,
                  "line": 38
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                559,
                560
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 38
                },
                "start": {
                  "column": 10,
                  "line": 38
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              553,
              595
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                619,
                657
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      629,
                      632
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 43
                      },
                      "start": {
                        "column": 11,
                        "line": 43
                      }
                    },
                    "range": [
                      632,
                      641
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          634,
                          641
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 43
                          },
                          "start": {
                            "column": 13,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        634,
                        641
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 43
                        },
                        "start": {
                          "column": 13,
                          "line": 43
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    629,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 22,
                  "line": 42
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                607,
                608
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 42
                },
                "start": {
                  "column": 10,
                  "line": 42
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                617,
                618
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 42
                },
                "start": {
                  "column": 20,
                  "line": 42
                }
              }
            },
            "range": [
              601,
              657
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                672,
                704
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
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      690,
                      691
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 47
                      },
                      "start": {
                        "column": 16,
                        "line": 47
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 47
                      },
                      "start": {
                        "column": 17,
                        "line": 47
                      }
                    },
                    "range": [
                      691,
                      697
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          693,
                          697
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 47
                          },
                          "start": {
                            "column": 19,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        693,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 47
                        },
                        "start": {
                          "column": 19,
                          "line": 47
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    682,
                    698
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 13,
                  "line": 46
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "range": [
                669,
                671
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 46
                },
                "start": {
                  "column": 10,
                  "line": 46
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              663,
              704
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                730,
                766
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      740,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 51
                      },
                      "start": {
                        "column": 9,
                        "line": 51
                      }
                    },
                    "range": [
                      741,
                      750
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          743,
                          750
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 51
                          },
                          "start": {
                            "column": 11,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        743,
                        750
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 51
                        },
                        "start": {
                          "column": 11,
                          "line": 51
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    740,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 24,
                  "line": 50
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                716,
                718
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 50
                },
                "start": {
                  "column": 10,
                  "line": 50
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "range": [
                727,
                729
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 50
                },
                "start": {
                  "column": 21,
                  "line": 50
                }
              }
            },
            "range": [
              710,
              766
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                781,
                815
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
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      799,
                      802
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 55
                      },
                      "start": {
                        "column": 16,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 55
                      },
                      "start": {
                        "column": 19,
                        "line": 55
                      }
                    },
                    "range": [
                      802,
                      808
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          804,
                          808
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 55
                          },
                          "start": {
                            "column": 21,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        804,
                        808
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 55
                        },
                        "start": {
                          "column": 21,
                          "line": 55
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    791,
                    809
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 13,
                  "line": 54
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "range": [
                778,
                780
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 54
                },
                "start": {
                  "column": 10,
                  "line": 54
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              772,
              815
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                841,
                879
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      851,
                      854
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 59
                      },
                      "start": {
                        "column": 11,
                        "line": 59
                      }
                    },
                    "range": [
                      854,
                      863
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          856,
                          863
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 59
                          },
                          "start": {
                            "column": 13,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        856,
                        863
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 59
                        },
                        "start": {
                          "column": 13,
                          "line": 59
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    851,
                    864
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 24,
                  "line": 58
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "range": [
                827,
                829
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 58
                },
                "start": {
                  "column": 10,
                  "line": 58
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "range": [
                838,
                840
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 58
                },
                "start": {
                  "column": 21,
                  "line": 58
                }
              }
            },
            "range": [
              821,
              879
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          547,
          881
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 22,
            "line": 37
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          532,
          546
        ],
        "decorators": [],
        "name": "ImplicitPublic",
        "optional": false,
        "loc": {
          "end": {
            "column": 21,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "kind": "module",
      "range": [
        525,
        881
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 61
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
