__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    345
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
            "name": "v0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 6,
                  "line": 1
                }
              },
              "range": [
                6,
                10
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T0",
                  "optional": false,
                  "range": [
                    8,
                    10
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 1
                    },
                    "start": {
                      "column": 8,
                      "line": 1
                    }
                  }
                },
                "range": [
                  8,
                  10
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
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
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
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
        "name": "T0",
        "optional": false,
        "range": [
          17,
          19
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              22,
              28
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I0",
              "optional": false,
              "range": [
                31,
                33
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "range": [
              31,
              33
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          }
        ],
        "range": [
          22,
          33
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        12,
        34
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          48,
          62
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                54,
                55
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                55,
                59
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T0",
                  "optional": false,
                  "range": [
                    57,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                },
                "range": [
                  57,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              54,
              60
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I0",
        "optional": false,
        "range": [
          45,
          47
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        35,
        62
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              },
              "range": [
                70,
                74
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "range": [
                    72,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "range": [
                  72,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              68,
              74
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            68,
            74
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        64,
        75
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "range": [
          81,
          83
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              86,
              92
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "range": [
                95,
                97
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            },
            "range": [
              95,
              97
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          }
        ],
        "range": [
          86,
          97
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        76,
        98
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          112,
          127
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              },
              "range": [
                120,
                124
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "range": [
                    122,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "range": [
                  122,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              118,
              125
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 13,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "range": [
          109,
          111
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        99,
        127
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              },
              "range": [
                135,
                139
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "range": [
                    137,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "range": [
                  137,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              133,
              139
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            133,
            139
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        129,
        140
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 13
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
        "name": "T2",
        "optional": false,
        "range": [
          146,
          148
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              151,
              157
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 10,
                "line": 14
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "range": [
                160,
                162
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 14
                },
                "start": {
                  "column": 19,
                  "line": 14
                }
              }
            },
            "range": [
              160,
              162
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 14
              },
              "start": {
                "column": 19,
                "line": 14
              }
            }
          }
        ],
        "range": [
          151,
          162
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        141,
        163
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          177,
          196
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              },
              "range": [
                189,
                193
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "range": [
                    191,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  191,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 12,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              183,
              194
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 13,
            "line": 15
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          174,
          176
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        164,
        196
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              },
              "range": [
                204,
                208
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "range": [
                    206,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "range": [
                  206,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              202,
              208
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            202,
            208
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        198,
        209
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "range": [
          215,
          217
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              220,
              226
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 20
              },
              "start": {
                "column": 10,
                "line": 20
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "range": [
                229,
                231
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 19,
                  "line": 20
                }
              }
            },
            "range": [
              229,
              231
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 19,
                "line": 20
              }
            }
          }
        ],
        "range": [
          220,
          231
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 20
          },
          "start": {
            "column": 10,
            "line": 20
          }
        }
      },
      "range": [
        210,
        232
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          246,
          270
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 22
                    },
                    "start": {
                      "column": 6,
                      "line": 22
                    }
                  },
                  "range": [
                    254,
                    262
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      256,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  253,
                  262
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
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              },
              "range": [
                263,
                267
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "range": [
                    265,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 17,
                      "line": 22
                    }
                  }
                },
                "range": [
                  265,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              252,
              268
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 13,
            "line": 21
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "range": [
          243,
          245
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "range": [
        233,
        270
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 25
                },
                "start": {
                  "column": 6,
                  "line": 25
                }
              },
              "range": [
                278,
                282
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "range": [
                    280,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "range": [
                  280,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              276,
              282
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": null,
          "range": [
            276,
            282
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        272,
        283
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "range": [
          289,
          291
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              294,
              300
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 26
              },
              "start": {
                "column": 10,
                "line": 26
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "range": [
                303,
                305
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 26
                },
                "start": {
                  "column": 19,
                  "line": 26
                }
              }
            },
            "range": [
              303,
              305
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 19,
                "line": 26
              }
            }
          }
        ],
        "range": [
          294,
          305
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 26
          },
          "start": {
            "column": 10,
            "line": 26
          }
        }
      },
      "range": [
        284,
        306
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          320,
          344
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 28
                    },
                    "start": {
                      "column": 6,
                      "line": 28
                    }
                  },
                  "range": [
                    328,
                    336
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      330,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  327,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 28
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
                  "column": 19,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              },
              "range": [
                337,
                341
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "range": [
                    339,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 28
                    },
                    "start": {
                      "column": 17,
                      "line": 28
                    }
                  }
                },
                "range": [
                  339,
                  341
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              326,
              342
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 13,
            "line": 27
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "range": [
          317,
          319
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "range": [
        307,
        344
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
