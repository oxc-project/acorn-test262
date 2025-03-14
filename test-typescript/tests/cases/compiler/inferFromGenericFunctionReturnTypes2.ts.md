__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2472
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapper",
        "optional": false,
        "range": [
          5,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              },
              "range": [
                22,
                25
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    24,
                    25
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                },
                "range": [
                  24,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              21,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          },
          "range": [
            27,
            31
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                30,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            },
            "range": [
              30,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          }
        },
        "range": [
          20,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          17
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
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "wrap",
        "optional": false,
        "range": [
          51,
          55
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            },
            "range": [
              64,
              78
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  72,
                  78
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
                        73,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 3
                        },
                        "start": {
                          "column": 39,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      73,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 3
                      },
                      "start": {
                        "column": 39,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        76,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 3
                        },
                        "start": {
                          "column": 42,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      76,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 3
                      },
                      "start": {
                        "column": 42,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "range": [
                  66,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              },
              "range": [
                66,
                78
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            }
          },
          "range": [
            62,
            78
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 28,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 3
          },
          "start": {
            "column": 45,
            "line": 3
          }
        },
        "range": [
          79,
          93
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              87,
              93
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
                    88,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 3
                    },
                    "start": {
                      "column": 54,
                      "line": 3
                    }
                  }
                },
                "range": [
                  88,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 54,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    91,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 3
                    },
                    "start": {
                      "column": 57,
                      "line": 3
                    }
                  }
                },
                "range": [
                  91,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 3
                  },
                  "start": {
                    "column": 57,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 3
              },
              "start": {
                "column": 53,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapper",
            "optional": false,
            "range": [
              81,
              87
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
          "range": [
            81,
            93
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 3
            },
            "start": {
              "column": 47,
              "line": 3
            }
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
            "column": 21,
            "line": 3
          }
        },
        "range": [
          55,
          61
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
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              56,
              57
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
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
              "name": "U",
              "optional": false,
              "range": [
                59,
                60
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
              59,
              60
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
        34,
        94
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "arrayize",
        "optional": false,
        "range": [
          113,
          121
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            },
            "range": [
              130,
              144
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  138,
                  144
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
                        139,
                        140
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
                      139,
                      140
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
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        142,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 5
                        },
                        "start": {
                          "column": 46,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      142,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 5
                      },
                      "start": {
                        "column": 46,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 5
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              },
              "range": [
                132,
                144
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            }
          },
          "range": [
            128,
            144
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 5
            },
            "start": {
              "column": 32,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 5
          },
          "start": {
            "column": 49,
            "line": 5
          }
        },
        "range": [
          145,
          161
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              153,
              161
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
                    154,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 58,
                      "line": 5
                    }
                  }
                },
                "range": [
                  154,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 5
                  },
                  "start": {
                    "column": 58,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      157,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 5
                      },
                      "start": {
                        "column": 61,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    157,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 5
                    },
                    "start": {
                      "column": 61,
                      "line": 5
                    }
                  }
                },
                "range": [
                  157,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 5
                  },
                  "start": {
                    "column": 61,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 5
              },
              "start": {
                "column": 57,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapper",
            "optional": false,
            "range": [
              147,
              153
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 5
              },
              "start": {
                "column": 51,
                "line": 5
              }
            }
          },
          "range": [
            147,
            161
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 5
            },
            "start": {
              "column": 51,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        },
        "range": [
          121,
          127
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
                122,
                123
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
            "out": false,
            "range": [
              122,
              123
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
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              125,
              126
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        96,
        162
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
        "name": "combine",
        "optional": false,
        "range": [
          181,
          188
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 7
              },
              "start": {
                "column": 35,
                "line": 7
              }
            },
            "range": [
              199,
              212
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 42,
                        "line": 7
                      },
                      "start": {
                        "column": 39,
                        "line": 7
                      }
                    },
                    "range": [
                      203,
                      206
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          205,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 7
                          },
                          "start": {
                            "column": 41,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        205,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 7
                        },
                        "start": {
                          "column": 41,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    202,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 7
                    },
                    "start": {
                      "column": 38,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 7
                  },
                  "start": {
                    "column": 44,
                    "line": 7
                  }
                },
                "range": [
                  208,
                  212
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      211,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 7
                      },
                      "start": {
                        "column": 47,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    211,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 7
                    },
                    "start": {
                      "column": 47,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                201,
                212
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 7
                },
                "start": {
                  "column": 37,
                  "line": 7
                }
              }
            }
          },
          "range": [
            198,
            212
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 7
            },
            "start": {
              "column": 34,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 7
              },
              "start": {
                "column": 51,
                "line": 7
              }
            },
            "range": [
              215,
              228
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 58,
                        "line": 7
                      },
                      "start": {
                        "column": 55,
                        "line": 7
                      }
                    },
                    "range": [
                      219,
                      222
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          221,
                          222
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 7
                          },
                          "start": {
                            "column": 57,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        221,
                        222
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 7
                        },
                        "start": {
                          "column": 57,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    218,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 7
                    },
                    "start": {
                      "column": 54,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 7
                  },
                  "start": {
                    "column": 60,
                    "line": 7
                  }
                },
                "range": [
                  224,
                  228
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      227,
                      228
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 7
                      },
                      "start": {
                        "column": 63,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    227,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 7
                    },
                    "start": {
                      "column": 63,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                217,
                228
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 7
                },
                "start": {
                  "column": 53,
                  "line": 7
                }
              }
            }
          },
          "range": [
            214,
            228
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 7
            },
            "start": {
              "column": 50,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 78,
            "line": 7
          },
          "start": {
            "column": 65,
            "line": 7
          }
        },
        "range": [
          229,
          242
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                    "column": 72,
                    "line": 7
                  },
                  "start": {
                    "column": 69,
                    "line": 7
                  }
                },
                "range": [
                  233,
                  236
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      235,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 7
                      },
                      "start": {
                        "column": 71,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    235,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 7
                    },
                    "start": {
                      "column": 71,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                232,
                236
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 7
                },
                "start": {
                  "column": 68,
                  "line": 7
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 7
              },
              "start": {
                "column": 74,
                "line": 7
              }
            },
            "range": [
              238,
              242
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  241,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 7
                  },
                  "start": {
                    "column": 77,
                    "line": 7
                  }
                }
              },
              "range": [
                241,
                242
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 7
                },
                "start": {
                  "column": 77,
                  "line": 7
                }
              }
            }
          },
          "range": [
            231,
            242
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 7
            },
            "start": {
              "column": 67,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 7
          },
          "start": {
            "column": 24,
            "line": 7
          }
        },
        "range": [
          188,
          197
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                189,
                190
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              189,
              190
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 25,
                "line": 7
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
              "name": "B",
              "optional": false,
              "range": [
                192,
                193
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              192,
              193
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 28,
                "line": 7
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
              "name": "C",
              "optional": false,
              "range": [
                195,
                196
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              195,
              196
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 7
              },
              "start": {
                "column": 31,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        164,
        243
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "foo",
        "optional": false,
        "range": [
          262,
          265
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 22,
                "line": 9
              }
            },
            "range": [
              267,
              291
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  275,
                  291
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      276,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 9
                      },
                      "start": {
                        "column": 31,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      284,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 9
                      },
                      "start": {
                        "column": 39,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "range": [
                  269,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                269,
                291
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            }
          },
          "range": [
            266,
            291
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 9
            },
            "start": {
              "column": 21,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 9
          },
          "start": {
            "column": 47,
            "line": 9
          }
        },
        "range": [
          292,
          298
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            294,
            298
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 9
            },
            "start": {
              "column": 49,
              "line": 9
            }
          }
        }
      },
      "range": [
        245,
        299
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 9
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 11
                }
              },
              "range": [
                307,
                331
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    315,
                    331
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        316,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        324,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "range": [
                    309,
                    315
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
                "range": [
                  309,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              305,
              331
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  339,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 11
                  },
                  "start": {
                    "column": 38,
                    "line": 11
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
                  341,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 11
                  },
                  "start": {
                    "column": 40,
                    "line": 11
                  }
                }
              },
              "range": [
                339,
                347
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 11
                },
                "start": {
                  "column": 38,
                  "line": 11
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  334,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 11
                  },
                  "start": {
                    "column": 33,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              334,
              347
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 11
              },
              "start": {
                "column": 33,
                "line": 11
              }
            }
          },
          "range": [
            305,
            347
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        301,
        348
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                355,
                379
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    363,
                    379
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        364,
                        370
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        372,
                        378
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
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "range": [
                    357,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "range": [
                  357,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              353,
              379
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      392,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 12
                      },
                      "start": {
                        "column": 43,
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
                      394,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 12
                      },
                      "start": {
                        "column": 45,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    392,
                    400
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 12
                    },
                    "start": {
                      "column": 43,
                      "line": 12
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      387,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 12
                      },
                      "start": {
                        "column": 38,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  387,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 12
                  },
                  "start": {
                    "column": 38,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrap",
              "optional": false,
              "range": [
                382,
                386
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 12
                },
                "start": {
                  "column": 33,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              382,
              401
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 12
              },
              "start": {
                "column": 33,
                "line": 12
              }
            }
          },
          "range": [
            353,
            401
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        349,
        402
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              },
              "range": [
                409,
                435
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    417,
                    435
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        418,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          426,
                          432
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 13
                          },
                          "start": {
                            "column": 23,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        426,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 13
                        },
                        "start": {
                          "column": 23,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 14,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "range": [
                    411,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "range": [
                  411,
                  435
                ],
                "loc": {
                  "end": {
                    "column": 32,
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
              407,
              435
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          457,
                          458
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
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          459,
                          465
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 13
                          },
                          "start": {
                            "column": 56,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        457,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 13
                        },
                        "start": {
                          "column": 54,
                          "line": 13
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          452,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 13
                          },
                          "start": {
                            "column": 49,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      452,
                      465
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 13
                      },
                      "start": {
                        "column": 49,
                        "line": 13
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "range": [
                    447,
                    451
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 13
                    },
                    "start": {
                      "column": 44,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "range": [
                  447,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 13
                  },
                  "start": {
                    "column": 44,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayize",
              "optional": false,
              "range": [
                438,
                446
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 13
                },
                "start": {
                  "column": 35,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              438,
              467
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 13
              },
              "start": {
                "column": 35,
                "line": 13
              }
            }
          },
          "range": [
            407,
            467
          ],
          "loc": {
            "end": {
              "column": 64,
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
      "kind": "let",
      "range": [
        403,
        468
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 14
                },
                "start": {
                  "column": 6,
                  "line": 14
                }
              },
              "range": [
                475,
                500
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    483,
                    500
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        484,
                        490
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        492,
                        499
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 14
                        },
                        "start": {
                          "column": 23,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 14
                    },
                    "start": {
                      "column": 14,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "range": [
                    477,
                    483
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
                "range": [
                  477,
                  500
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
            },
            "range": [
              473,
              500
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          521,
                          522
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 14
                          },
                          "start": {
                            "column": 52,
                            "line": 14
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
                          523,
                          529
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 14
                          },
                          "start": {
                            "column": 54,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        521,
                        529
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 14
                        },
                        "start": {
                          "column": 52,
                          "line": 14
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          516,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 14
                          },
                          "start": {
                            "column": 47,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      516,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 14
                      },
                      "start": {
                        "column": 47,
                        "line": 14
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "range": [
                    511,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 14
                    },
                    "start": {
                      "column": 42,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "range": [
                  511,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 14
                  },
                  "start": {
                    "column": 42,
                    "line": 14
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": ">=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          542,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 14
                          },
                          "start": {
                            "column": 73,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          547,
                          549
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 14
                          },
                          "start": {
                            "column": 78,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        542,
                        549
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 14
                        },
                        "start": {
                          "column": 73,
                          "line": 14
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          537,
                          538
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 14
                          },
                          "start": {
                            "column": 68,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      537,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 14
                      },
                      "start": {
                        "column": 68,
                        "line": 14
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "range": [
                    532,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 14
                    },
                    "start": {
                      "column": 63,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "range": [
                  532,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 14
                  },
                  "start": {
                    "column": 63,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combine",
              "optional": false,
              "range": [
                503,
                510
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 14
                },
                "start": {
                  "column": 34,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              503,
              551
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 14
              },
              "start": {
                "column": 34,
                "line": 14
              }
            }
          },
          "range": [
            473,
            551
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        469,
        552
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      568,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 14,
                        "line": 16
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
                      570,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 16
                      },
                      "start": {
                        "column": 16,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    568,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 16
                    },
                    "start": {
                      "column": 14,
                      "line": 16
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      563,
                      564
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  563,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrap",
              "optional": false,
              "range": [
                558,
                562
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              558,
              577
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            554,
            557
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          554,
          578
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        554,
        579
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "a1",
            "optional": false,
            "range": [
              585,
              587
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      610,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 29,
                        "line": 18
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
                      612,
                      618
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 18
                      },
                      "start": {
                        "column": 31,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    610,
                    618
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 18
                    },
                    "start": {
                      "column": 29,
                      "line": 18
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      605,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 18
                      },
                      "start": {
                        "column": 24,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  605,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 18
                  },
                  "start": {
                    "column": 24,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      591,
                      594
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 18
                      },
                      "start": {
                        "column": 10,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      596,
                      599
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 18
                      },
                      "start": {
                        "column": 15,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  590,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  601,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 18
                  },
                  "start": {
                    "column": 20,
                    "line": 18
                  }
                }
              },
              "range": [
                590,
                604
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              590,
              619
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            585,
            619
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        581,
        620
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "a2",
            "optional": false,
            "range": [
              625,
              627
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          655,
                          656
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 19
                          },
                          "start": {
                            "column": 34,
                            "line": 19
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
                          657,
                          663
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 19
                          },
                          "start": {
                            "column": 36,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        655,
                        663
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 19
                        },
                        "start": {
                          "column": 34,
                          "line": 19
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          650,
                          651
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 19
                          },
                          "start": {
                            "column": 29,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      650,
                      663
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 19
                      },
                      "start": {
                        "column": 29,
                        "line": 19
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "range": [
                    645,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 24,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "range": [
                  645,
                  664
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 19
                  },
                  "start": {
                    "column": 24,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      631,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 19
                      },
                      "start": {
                        "column": 10,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      636,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  630,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  641,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 19
                  },
                  "start": {
                    "column": 20,
                    "line": 19
                  }
                }
              },
              "range": [
                630,
                644
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              630,
              665
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            625,
            665
          ],
          "loc": {
            "end": {
              "column": 44,
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
      "kind": "let",
      "range": [
        621,
        666
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "a3",
            "optional": false,
            "range": [
              671,
              673
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              710,
                              711
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 20
                              },
                              "start": {
                                "column": 43,
                                "line": 20
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
                              712,
                              718
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 20
                              },
                              "start": {
                                "column": 45,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            710,
                            718
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 20
                            },
                            "start": {
                              "column": 43,
                              "line": 20
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              705,
                              706
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
                        ],
                        "range": [
                          705,
                          718
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 20
                          },
                          "start": {
                            "column": 38,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arrayize",
                      "optional": false,
                      "range": [
                        696,
                        704
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 20
                        },
                        "start": {
                          "column": 29,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      696,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 20
                      },
                      "start": {
                        "column": 29,
                        "line": 20
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "range": [
                    691,
                    695
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 24,
                      "line": 20
                    }
                  }
                },
                "optional": false,
                "range": [
                  691,
                  720
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 20
                  },
                  "start": {
                    "column": 24,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      677,
                      680
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 20
                      },
                      "start": {
                        "column": 10,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      682,
                      685
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
                  }
                ],
                "range": [
                  676,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  687,
                  690
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 20
                  },
                  "start": {
                    "column": 20,
                    "line": 20
                  }
                }
              },
              "range": [
                676,
                690
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              676,
              721
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          },
          "range": [
            671,
            721
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        667,
        722
      ],
      "loc": {
        "end": {
          "column": 55,
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
            "name": "a4",
            "optional": false,
            "range": [
              727,
              729
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              765,
                              766
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 21
                              },
                              "start": {
                                "column": 42,
                                "line": 21
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
                              767,
                              773
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 21
                              },
                              "start": {
                                "column": 44,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            765,
                            773
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 21
                            },
                            "start": {
                              "column": 42,
                              "line": 21
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              760,
                              761
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 21
                              },
                              "start": {
                                "column": 37,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "range": [
                          760,
                          773
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 21
                          },
                          "start": {
                            "column": 37,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "range": [
                        755,
                        759
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 21
                        },
                        "start": {
                          "column": 32,
                          "line": 21
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      755,
                      774
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 21
                      },
                      "start": {
                        "column": 32,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              786,
                              787
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 21
                              },
                              "start": {
                                "column": 63,
                                "line": 21
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              790,
                              792
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 21
                              },
                              "start": {
                                "column": 67,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            786,
                            792
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 21
                            },
                            "start": {
                              "column": 63,
                              "line": 21
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              781,
                              782
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 21
                              },
                              "start": {
                                "column": 58,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "range": [
                          781,
                          792
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 21
                          },
                          "start": {
                            "column": 58,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "range": [
                        776,
                        780
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 21
                        },
                        "start": {
                          "column": 53,
                          "line": 21
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      776,
                      793
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 21
                      },
                      "start": {
                        "column": 53,
                        "line": 21
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "range": [
                    747,
                    754
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 21
                    },
                    "start": {
                      "column": 24,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "range": [
                  747,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 21
                  },
                  "start": {
                    "column": 24,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      733,
                      736
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 21
                      },
                      "start": {
                        "column": 10,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      738,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  732,
                  742
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  743,
                  746
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 20,
                    "line": 21
                  }
                }
              },
              "range": [
                732,
                746
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              732,
              795
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            727,
            795
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        723,
        796
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 21
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
            "name": "a5",
            "optional": false,
            "range": [
              801,
              803
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "range": [
                      829,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 22
                      },
                      "start": {
                        "column": 32,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              849,
                              850
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 22
                              },
                              "start": {
                                "column": 52,
                                "line": 22
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
                              851,
                              857
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 22
                              },
                              "start": {
                                "column": 54,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            849,
                            857
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 22
                            },
                            "start": {
                              "column": 52,
                              "line": 22
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              844,
                              845
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 22
                              },
                              "start": {
                                "column": 47,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "range": [
                          844,
                          857
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 22
                          },
                          "start": {
                            "column": 47,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "range": [
                        839,
                        843
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 22
                        },
                        "start": {
                          "column": 42,
                          "line": 22
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      839,
                      858
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 22
                      },
                      "start": {
                        "column": 42,
                        "line": 22
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "range": [
                    821,
                    828
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 22
                    },
                    "start": {
                      "column": 24,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "range": [
                  821,
                  859
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 22
                  },
                  "start": {
                    "column": 24,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      807,
                      810
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 22
                      },
                      "start": {
                        "column": 10,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      812,
                      815
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
                  }
                ],
                "range": [
                  806,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  817,
                  820
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 20,
                    "line": 22
                  }
                }
              },
              "range": [
                806,
                820
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              806,
              860
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            801,
            860
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        797,
        861
      ],
      "loc": {
        "end": {
          "column": 64,
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
            "name": "a6",
            "optional": false,
            "range": [
              866,
              868
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              904,
                              905
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 23
                              },
                              "start": {
                                "column": 42,
                                "line": 23
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
                              906,
                              912
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 23
                              },
                              "start": {
                                "column": 44,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            904,
                            912
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 23
                            },
                            "start": {
                              "column": 42,
                              "line": 23
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              899,
                              900
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 23
                              },
                              "start": {
                                "column": 37,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "range": [
                          899,
                          912
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 23
                          },
                          "start": {
                            "column": 37,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "range": [
                        894,
                        898
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 23
                        },
                        "start": {
                          "column": 32,
                          "line": 23
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      894,
                      913
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 23
                      },
                      "start": {
                        "column": 32,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "range": [
                      915,
                      923
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 23
                      },
                      "start": {
                        "column": 53,
                        "line": 23
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "range": [
                    886,
                    893
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 23
                    },
                    "start": {
                      "column": 24,
                      "line": 23
                    }
                  }
                },
                "optional": false,
                "range": [
                  886,
                  924
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 23
                  },
                  "start": {
                    "column": 24,
                    "line": 23
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      872,
                      875
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 23
                      },
                      "start": {
                        "column": 10,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      877,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  871,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  882,
                  885
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 23
                  },
                  "start": {
                    "column": 20,
                    "line": 23
                  }
                }
              },
              "range": [
                871,
                885
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              871,
              925
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 23
              },
              "start": {
                "column": 9,
                "line": 23
              }
            }
          },
          "range": [
            866,
            925
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        862,
        926
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1023,
          1286
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
              "name": "_store",
              "optional": false,
              "range": [
                1027,
                1033
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 27
                },
                "start": {
                  "column": 2,
                  "line": 27
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
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              },
              "range": [
                1033,
                1038
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      1035,
                      1036
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 27
                      },
                      "start": {
                        "column": 10,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    1035,
                    1036
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 27
                    },
                    "start": {
                      "column": 10,
                      "line": 27
                    }
                  }
                },
                "range": [
                  1035,
                  1038
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              }
            },
            "value": null,
            "range": [
              1027,
              1039
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "range": [
                1043,
                1046
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 2,
                  "line": 29
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1046,
                1083
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            1076,
                            1077
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 30
                            },
                            "start": {
                              "column": 21,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1059,
                              1063
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 30
                              },
                              "start": {
                                "column": 4,
                                "line": 30
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "range": [
                              1064,
                              1070
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 30
                              },
                              "start": {
                                "column": 9,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            1059,
                            1070
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 30
                            },
                            "start": {
                              "column": 4,
                              "line": 30
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
                            1071,
                            1075
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 30
                            },
                            "start": {
                              "column": 16,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          1059,
                          1075
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 30
                          },
                          "start": {
                            "column": 4,
                            "line": 30
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1059,
                        1078
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 30
                        },
                        "start": {
                          "column": 4,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      1059,
                      1079
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 30
                      },
                      "start": {
                        "column": 4,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  1053,
                  1083
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 31
                  },
                  "start": {
                    "column": 12,
                    "line": 29
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "column": 10,
                        "line": 29
                      },
                      "start": {
                        "column": 7,
                        "line": 29
                      }
                    },
                    "range": [
                      1048,
                      1051
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          1050,
                          1051
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 29
                          },
                          "start": {
                            "column": 9,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        1050,
                        1051
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 29
                        },
                        "start": {
                          "column": 9,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    1047,
                    1051
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 29
                    },
                    "start": {
                      "column": 6,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 31
                },
                "start": {
                  "column": 5,
                  "line": 29
                }
              }
            },
            "range": [
              1043,
              1083
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transform",
              "optional": false,
              "range": [
                1087,
                1096
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1096,
                1185
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "range": [
                            1175,
                            1179
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 34
                            },
                            "start": {
                              "column": 23,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "transformer",
                        "optional": false,
                        "range": [
                          1163,
                          1174
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 34
                          },
                          "start": {
                            "column": 11,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1163,
                        1180
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 34
                        },
                        "start": {
                          "column": 11,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1156,
                      1181
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 34
                      },
                      "start": {
                        "column": 4,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  1150,
                  1185
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 35
                  },
                  "start": {
                    "column": 65,
                    "line": 33
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "transformer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 33
                      },
                      "start": {
                        "column": 26,
                        "line": 33
                      }
                    },
                    "range": [
                      1111,
                      1138
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 40,
                                "line": 33
                              },
                              "start": {
                                "column": 30,
                                "line": 33
                              }
                            },
                            "range": [
                              1115,
                              1125
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1122,
                                  1125
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        1123,
                                        1124
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 33
                                        },
                                        "start": {
                                          "column": 38,
                                          "line": 33
                                        }
                                      }
                                    },
                                    "range": [
                                      1123,
                                      1124
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 33
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 33
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "range": [
                                  1117,
                                  1122
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                1117,
                                1125
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 33
                                },
                                "start": {
                                  "column": 32,
                                  "line": 33
                                }
                              }
                            }
                          },
                          "range": [
                            1114,
                            1125
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 33
                            },
                            "start": {
                              "column": 29,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 33
                          },
                          "start": {
                            "column": 42,
                            "line": 33
                          }
                        },
                        "range": [
                          1127,
                          1138
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1135,
                              1138
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    1136,
                                    1137
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 33
                                    }
                                  }
                                },
                                "range": [
                                  1136,
                                  1137
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 33
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 33
                              },
                              "start": {
                                "column": 50,
                                "line": 33
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "range": [
                              1130,
                              1135
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 33
                              },
                              "start": {
                                "column": 45,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1130,
                            1138
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 33
                            },
                            "start": {
                              "column": 45,
                              "line": 33
                            }
                          }
                        }
                      },
                      "range": [
                        1113,
                        1138
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 33
                        },
                        "start": {
                          "column": 28,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    1100,
                    1138
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 33
                    },
                    "start": {
                      "column": 15,
                      "line": 33
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 33
                  },
                  "start": {
                    "column": 54,
                    "line": 33
                  }
                },
                "range": [
                  1139,
                  1149
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1146,
                      1149
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            1147,
                            1148
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 33
                            },
                            "start": {
                              "column": 62,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          1147,
                          1148
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 33
                          },
                          "start": {
                            "column": 62,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 33
                      },
                      "start": {
                        "column": 61,
                        "line": 33
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      1141,
                      1146
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 33
                      },
                      "start": {
                        "column": 56,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    1141,
                    1149
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 33
                    },
                    "start": {
                      "column": 56,
                      "line": 33
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 33
                  },
                  "start": {
                    "column": 11,
                    "line": 33
                  }
                },
                "range": [
                  1096,
                  1099
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        1097,
                        1098
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 33
                        },
                        "start": {
                          "column": 12,
                          "line": 33
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1097,
                      1098
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 33
                      },
                      "start": {
                        "column": 12,
                        "line": 33
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "range": [
              1087,
              1185
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 35
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "range": [
                1189,
                1196
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 37
                },
                "start": {
                  "column": 2,
                  "line": 37
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1196,
                1284
              ],
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  1273,
                                  1274
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 38
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "range": [
                                  1276,
                                  1277
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 38
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "range": [
                                1270,
                                1272
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 38
                                },
                                "start": {
                                  "column": 36,
                                  "line": 38
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1270,
                              1278
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 38
                              },
                              "start": {
                                "column": 36,
                                "line": 38
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                1261,
                                1262
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 38
                                },
                                "start": {
                                  "column": 27,
                                  "line": 38
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "range": [
                                1264,
                                1265
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 38
                                },
                                "start": {
                                  "column": 30,
                                  "line": 38
                                }
                              }
                            }
                          ],
                          "range": [
                            1260,
                            1278
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 38
                            },
                            "start": {
                              "column": 26,
                              "line": 38
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1240,
                              1244
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 38
                              },
                              "start": {
                                "column": 6,
                                "line": 38
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "range": [
                              1245,
                              1251
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 38
                              },
                              "start": {
                                "column": 11,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            1240,
                            1251
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 38
                            },
                            "start": {
                              "column": 6,
                              "line": 38
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "range": [
                            1252,
                            1259
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 38
                            },
                            "start": {
                              "column": 18,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1240,
                          1259
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 38
                          },
                          "start": {
                            "column": 6,
                            "line": 38
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1240,
                        1279
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 38
                        },
                        "start": {
                          "column": 6,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1240,
                      1280
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 38
                      },
                      "start": {
                        "column": 6,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  1232,
                  1284
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 39
                  },
                  "start": {
                    "column": 45,
                    "line": 37
                  }
                }
              },
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
                        "column": 43,
                        "line": 37
                      },
                      "start": {
                        "column": 12,
                        "line": 37
                      }
                    },
                    "range": [
                      1199,
                      1230
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 19,
                                "line": 37
                              },
                              "start": {
                                "column": 16,
                                "line": 37
                              }
                            },
                            "range": [
                              1203,
                              1206
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  1205,
                                  1206
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                1205,
                                1206
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 37
                                },
                                "start": {
                                  "column": 18,
                                  "line": 37
                                }
                              }
                            }
                          },
                          "range": [
                            1202,
                            1206
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 37
                            },
                            "start": {
                              "column": 15,
                              "line": 37
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 37
                              },
                              "start": {
                                "column": 26,
                                "line": 37
                              }
                            },
                            "range": [
                              1213,
                              1221
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                1215,
                                1221
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 37
                                },
                                "start": {
                                  "column": 28,
                                  "line": 37
                                }
                              }
                            }
                          },
                          "range": [
                            1208,
                            1221
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 37
                            },
                            "start": {
                              "column": 21,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 37
                          },
                          "start": {
                            "column": 36,
                            "line": 37
                          }
                        },
                        "range": [
                          1223,
                          1230
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            1226,
                            1230
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 37
                            },
                            "start": {
                              "column": 39,
                              "line": 37
                            }
                          }
                        }
                      },
                      "range": [
                        1201,
                        1230
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 37
                        },
                        "start": {
                          "column": 14,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    1197,
                    1230
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 37
                    },
                    "start": {
                      "column": 10,
                      "line": 37
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 39
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              }
            },
            "range": [
              1189,
              1284
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 39
              },
              "start": {
                "column": 2,
                "line": 37
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 15,
            "line": 26
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetOf",
        "optional": false,
        "range": [
          1014,
          1019
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 6,
            "line": 26
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 26
          },
          "start": {
            "column": 11,
            "line": 26
          }
        },
        "range": [
          1019,
          1022
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1020,
                1021
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
            "out": false,
            "range": [
              1020,
              1021
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
        ]
      },
      "range": [
        1008,
        1286
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 26
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
        "name": "compose",
        "optional": false,
        "range": [
          1297,
          1304
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnA",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 43
              },
              "start": {
                "column": 5,
                "line": 43
              }
            },
            "range": [
              1326,
              1353
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 19,
                        "line": 43
                      },
                      "start": {
                        "column": 9,
                        "line": 43
                      }
                    },
                    "range": [
                      1330,
                      1340
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1337,
                          1340
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                1338,
                                1339
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 43
                                },
                                "start": {
                                  "column": 17,
                                  "line": 43
                                }
                              }
                            },
                            "range": [
                              1338,
                              1339
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 43
                              },
                              "start": {
                                "column": 17,
                                "line": 43
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 43
                          },
                          "start": {
                            "column": 16,
                            "line": 43
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          1332,
                          1337
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 43
                          },
                          "start": {
                            "column": 11,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        1332,
                        1340
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 43
                        },
                        "start": {
                          "column": 11,
                          "line": 43
                        }
                      }
                    }
                  },
                  "range": [
                    1329,
                    1340
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 43
                  },
                  "start": {
                    "column": 21,
                    "line": 43
                  }
                },
                "range": [
                  1342,
                  1353
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1350,
                      1353
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            1351,
                            1352
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 43
                            },
                            "start": {
                              "column": 30,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          1351,
                          1352
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 43
                          },
                          "start": {
                            "column": 30,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 43
                      },
                      "start": {
                        "column": 29,
                        "line": 43
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      1345,
                      1350
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
                  },
                  "range": [
                    1345,
                    1353
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 43
                    },
                    "start": {
                      "column": 24,
                      "line": 43
                    }
                  }
                }
              },
              "range": [
                1328,
                1353
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 43
                },
                "start": {
                  "column": 7,
                  "line": 43
                }
              }
            }
          },
          "range": [
            1323,
            1353
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 43
            },
            "start": {
              "column": 2,
              "line": 43
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnB",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 44
              },
              "start": {
                "column": 5,
                "line": 44
              }
            },
            "range": [
              1361,
              1388
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 44
                      },
                      "start": {
                        "column": 9,
                        "line": 44
                      }
                    },
                    "range": [
                      1365,
                      1375
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1372,
                          1375
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                1373,
                                1374
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 44
                                },
                                "start": {
                                  "column": 17,
                                  "line": 44
                                }
                              }
                            },
                            "range": [
                              1373,
                              1374
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 44
                              },
                              "start": {
                                "column": 17,
                                "line": 44
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 44
                          },
                          "start": {
                            "column": 16,
                            "line": 44
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          1367,
                          1372
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 44
                          },
                          "start": {
                            "column": 11,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        1367,
                        1375
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 44
                        },
                        "start": {
                          "column": 11,
                          "line": 44
                        }
                      }
                    }
                  },
                  "range": [
                    1364,
                    1375
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 21,
                    "line": 44
                  }
                },
                "range": [
                  1377,
                  1388
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1385,
                      1388
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            1386,
                            1387
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 44
                            },
                            "start": {
                              "column": 30,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1386,
                          1387
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 44
                          },
                          "start": {
                            "column": 30,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 44
                      },
                      "start": {
                        "column": 29,
                        "line": 44
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      1380,
                      1385
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 44
                      },
                      "start": {
                        "column": 24,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1380,
                    1388
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 44
                    },
                    "start": {
                      "column": 24,
                      "line": 44
                    }
                  }
                }
              },
              "range": [
                1363,
                1388
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 44
                },
                "start": {
                  "column": 7,
                  "line": 44
                }
              }
            }
          },
          "range": [
            1358,
            1388
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 44
            },
            "start": {
              "column": 2,
              "line": 44
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnC",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 45
              },
              "start": {
                "column": 5,
                "line": 45
              }
            },
            "range": [
              1396,
              1423
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 45
                      },
                      "start": {
                        "column": 9,
                        "line": 45
                      }
                    },
                    "range": [
                      1400,
                      1410
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1407,
                          1410
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                1408,
                                1409
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 45
                                },
                                "start": {
                                  "column": 17,
                                  "line": 45
                                }
                              }
                            },
                            "range": [
                              1408,
                              1409
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 45
                              },
                              "start": {
                                "column": 17,
                                "line": 45
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 45
                          },
                          "start": {
                            "column": 16,
                            "line": 45
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          1402,
                          1407
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 45
                          },
                          "start": {
                            "column": 11,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        1402,
                        1410
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 45
                        },
                        "start": {
                          "column": 11,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    1399,
                    1410
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 45
                  },
                  "start": {
                    "column": 21,
                    "line": 45
                  }
                },
                "range": [
                  1412,
                  1423
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1420,
                      1423
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "range": [
                            1421,
                            1422
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 45
                            },
                            "start": {
                              "column": 30,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1421,
                          1422
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 45
                          },
                          "start": {
                            "column": 30,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 45
                      },
                      "start": {
                        "column": 29,
                        "line": 45
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      1415,
                      1420
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 45
                      },
                      "start": {
                        "column": 24,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1415,
                    1423
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 45
                    },
                    "start": {
                      "column": 24,
                      "line": 45
                    }
                  }
                }
              },
              "range": [
                1398,
                1423
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 45
                },
                "start": {
                  "column": 7,
                  "line": 45
                }
              }
            }
          },
          "range": [
            1393,
            1423
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 45
            },
            "start": {
              "column": 2,
              "line": 45
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnD",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 46
              },
              "start": {
                "column": 5,
                "line": 46
              }
            },
            "range": [
              1430,
              1457
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 46
                      },
                      "start": {
                        "column": 9,
                        "line": 46
                      }
                    },
                    "range": [
                      1434,
                      1444
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1441,
                          1444
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "range": [
                                1442,
                                1443
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 46
                                },
                                "start": {
                                  "column": 17,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              1442,
                              1443
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 46
                              },
                              "start": {
                                "column": 17,
                                "line": 46
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 46
                          },
                          "start": {
                            "column": 16,
                            "line": 46
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          1436,
                          1441
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 46
                          },
                          "start": {
                            "column": 11,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1436,
                        1444
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 46
                        },
                        "start": {
                          "column": 11,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1433,
                    1444
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 46
                  },
                  "start": {
                    "column": 21,
                    "line": 46
                  }
                },
                "range": [
                  1446,
                  1457
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1454,
                      1457
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "range": [
                            1455,
                            1456
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 46
                            },
                            "start": {
                              "column": 30,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1455,
                          1456
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 46
                          },
                          "start": {
                            "column": 30,
                            "line": 46
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 46
                      },
                      "start": {
                        "column": 29,
                        "line": 46
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      1449,
                      1454
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 46
                      },
                      "start": {
                        "column": 24,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1449,
                    1457
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 46
                    },
                    "start": {
                      "column": 24,
                      "line": 46
                    }
                  }
                }
              },
              "range": [
                1432,
                1457
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 46
                },
                "start": {
                  "column": 7,
                  "line": 46
                }
              }
            }
          },
          "range": [
            1427,
            1457
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 46
            },
            "start": {
              "column": 2,
              "line": 46
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 27,
            "line": 47
          },
          "start": {
            "column": 1,
            "line": 47
          }
        },
        "range": [
          1460,
          1486
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                    "column": 14,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                },
                "range": [
                  1463,
                  1473
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1470,
                      1473
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            1471,
                            1472
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 47
                            },
                            "start": {
                              "column": 12,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1471,
                          1472
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 47
                          },
                          "start": {
                            "column": 12,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 47
                      },
                      "start": {
                        "column": 11,
                        "line": 47
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      1465,
                      1470
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 47
                      },
                      "start": {
                        "column": 6,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1465,
                    1473
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 47
                    },
                    "start": {
                      "column": 6,
                      "line": 47
                    }
                  }
                }
              },
              "range": [
                1462,
                1473
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 47
                },
                "start": {
                  "column": 3,
                  "line": 47
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 47
              },
              "start": {
                "column": 16,
                "line": 47
              }
            },
            "range": [
              1475,
              1486
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1483,
                  1486
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        1484,
                        1485
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 47
                        },
                        "start": {
                          "column": 25,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1484,
                      1485
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 47
                      },
                      "start": {
                        "column": 25,
                        "line": 47
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 47
                  },
                  "start": {
                    "column": 24,
                    "line": 47
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "range": [
                  1478,
                  1483
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 47
                  },
                  "start": {
                    "column": 19,
                    "line": 47
                  }
                }
              },
              "range": [
                1478,
                1486
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 47
                },
                "start": {
                  "column": 19,
                  "line": 47
                }
              }
            }
          },
          "range": [
            1461,
            1486
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 47
            },
            "start": {
              "column": 2,
              "line": 47
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 42
          },
          "start": {
            "column": 16,
            "line": 42
          }
        },
        "range": [
          1304,
          1319
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1305,
                1306
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 42
                },
                "start": {
                  "column": 17,
                  "line": 42
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
                "column": 18,
                "line": 42
              },
              "start": {
                "column": 17,
                "line": 42
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
              "name": "B",
              "optional": false,
              "range": [
                1308,
                1309
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
            "out": false,
            "range": [
              1308,
              1309
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                1311,
                1312
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 42
                },
                "start": {
                  "column": 23,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              1311,
              1312
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 42
              },
              "start": {
                "column": 23,
                "line": 42
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
              "name": "D",
              "optional": false,
              "range": [
                1314,
                1315
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 42
                },
                "start": {
                  "column": 26,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              1314,
              1315
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 42
              },
              "start": {
                "column": 26,
                "line": 42
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
              "name": "E",
              "optional": false,
              "range": [
                1317,
                1318
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 42
                },
                "start": {
                  "column": 29,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              1317,
              1318
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 42
              },
              "start": {
                "column": 29,
                "line": 42
              }
            }
          }
        ]
      },
      "range": [
        1288,
        1487
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 42
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prev",
                          "optional": false,
                          "range": [
                            1613,
                            1617
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 50
                            },
                            "start": {
                              "column": 47,
                              "line": 50
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "range": [
                          1610,
                          1612
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 50
                          },
                          "start": {
                            "column": 44,
                            "line": 50
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1610,
                        1618
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 50
                        },
                        "start": {
                          "column": 44,
                          "line": 50
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prev",
                        "optional": false,
                        "range": [
                          1597,
                          1601
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 50
                          },
                          "start": {
                            "column": 31,
                            "line": 50
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "range": [
                          1603,
                          1605
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 50
                          },
                          "start": {
                            "column": 37,
                            "line": 50
                          }
                        }
                      }
                    ],
                    "range": [
                      1596,
                      1618
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      1620,
                      1621
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 50
                      },
                      "start": {
                        "column": 54,
                        "line": 50
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
                    "name": "fns",
                    "optional": false,
                    "range": [
                      1585,
                      1588
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 50
                      },
                      "start": {
                        "column": 19,
                        "line": 50
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reduce",
                    "optional": false,
                    "range": [
                      1589,
                      1595
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 50
                      },
                      "start": {
                        "column": 23,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1585,
                    1595
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 50
                    },
                    "start": {
                      "column": 19,
                      "line": 50
                    }
                  }
                },
                "optional": false,
                "range": [
                  1585,
                  1622
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 50
                  },
                  "start": {
                    "column": 19,
                    "line": 50
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
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
                        "column": 14,
                        "line": 50
                      },
                      "start": {
                        "column": 11,
                        "line": 50
                      }
                    },
                    "range": [
                      1577,
                      1580
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1579,
                          1580
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 50
                          },
                          "start": {
                            "column": 13,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1579,
                        1580
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 50
                        },
                        "start": {
                          "column": 13,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    1576,
                    1580
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 50
                    },
                    "start": {
                      "column": 10,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                1575,
                1622
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 50
                },
                "start": {
                  "column": 9,
                  "line": 50
                }
              }
            },
            "range": [
              1568,
              1623
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 50
              },
              "start": {
                "column": 2,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1564,
          1625
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 58,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "range": [
          1515,
          1522
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "fns",
            "optional": false,
            "range": [
              1529,
              1532
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 49
              },
              "start": {
                "column": 23,
                "line": 49
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
                "line": 49
              },
              "start": {
                "column": 26,
                "line": 49
              }
            },
            "range": [
              1532,
              1549
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSFunctionType",
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
                          "column": 34,
                          "line": 49
                        },
                        "start": {
                          "column": 31,
                          "line": 49
                        }
                      },
                      "range": [
                        1537,
                        1540
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1539,
                            1540
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 49
                            },
                            "start": {
                              "column": 33,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1539,
                          1540
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 49
                          },
                          "start": {
                            "column": 33,
                            "line": 49
                          }
                        }
                      }
                    },
                    "range": [
                      1536,
                      1540
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 49
                      },
                      "start": {
                        "column": 30,
                        "line": 49
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 49
                    },
                    "start": {
                      "column": 36,
                      "line": 49
                    }
                  },
                  "range": [
                    1542,
                    1546
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1545,
                        1546
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 49
                        },
                        "start": {
                          "column": 39,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1545,
                      1546
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 49
                      },
                      "start": {
                        "column": 39,
                        "line": 49
                      }
                    }
                  }
                },
                "range": [
                  1535,
                  1546
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 49
                  },
                  "start": {
                    "column": 29,
                    "line": 49
                  }
                }
              },
              "range": [
                1534,
                1549
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 49
                },
                "start": {
                  "column": 28,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1526,
            1549
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 49
            },
            "start": {
              "column": 20,
              "line": 49
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 49
          },
          "start": {
            "column": 44,
            "line": 49
          }
        },
        "range": [
          1550,
          1563
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                    "column": 51,
                    "line": 49
                  },
                  "start": {
                    "column": 48,
                    "line": 49
                  }
                },
                "range": [
                  1554,
                  1557
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1556,
                      1557
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 49
                      },
                      "start": {
                        "column": 50,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1556,
                    1557
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 49
                    },
                    "start": {
                      "column": 50,
                      "line": 49
                    }
                  }
                }
              },
              "range": [
                1553,
                1557
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 49
                },
                "start": {
                  "column": 47,
                  "line": 49
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 49
              },
              "start": {
                "column": 53,
                "line": 49
              }
            },
            "range": [
              1559,
              1563
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1562,
                  1563
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 49
                  },
                  "start": {
                    "column": 56,
                    "line": 49
                  }
                }
              },
              "range": [
                1562,
                1563
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 49
                },
                "start": {
                  "column": 56,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1552,
            1563
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 49
            },
            "start": {
              "column": 46,
              "line": 49
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 49
          },
          "start": {
            "column": 16,
            "line": 49
          }
        },
        "range": [
          1522,
          1525
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
                1523,
                1524
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1523,
              1524
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 49
              },
              "start": {
                "column": 17,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        1506,
        1625
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 49
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 55
                              },
                              "start": {
                                "column": 11,
                                "line": 55
                              }
                            },
                            "range": [
                              1731,
                              1741
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1738,
                                  1741
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "range": [
                                        1739,
                                        1740
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 55
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 55
                                        }
                                      }
                                    },
                                    "range": [
                                      1739,
                                      1740
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 55
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 55
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "range": [
                                  1733,
                                  1738
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 55
                                  }
                                }
                              },
                              "range": [
                                1733,
                                1741
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 55
                                },
                                "start": {
                                  "column": 13,
                                  "line": 55
                                }
                              }
                            }
                          },
                          "range": [
                            1730,
                            1741
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 55
                            },
                            "start": {
                              "column": 10,
                              "line": 55
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "range": [
                              1748,
                              1753
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 55
                              },
                              "start": {
                                "column": 28,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            1744,
                            1755
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 55
                            },
                            "start": {
                              "column": 24,
                              "line": 55
                            }
                          }
                        },
                        "range": [
                          1730,
                          1755
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 55
                          },
                          "start": {
                            "column": 10,
                            "line": 55
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1724,
                      1756
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 55
                      },
                      "start": {
                        "column": 4,
                        "line": 55
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      1785,
                                      1786
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 56
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 56
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fn",
                                  "optional": false,
                                  "range": [
                                    1782,
                                    1784
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 56
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 56
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  1782,
                                  1787
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 56
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
                                "name": "b",
                                "optional": false,
                                "range": [
                                  1776,
                                  1777
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 56
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "add",
                                "optional": false,
                                "range": [
                                  1778,
                                  1781
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 56
                                  }
                                }
                              },
                              "range": [
                                1776,
                                1781
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 56
                                },
                                "start": {
                                  "column": 19,
                                  "line": 56
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1776,
                              1788
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 56
                              },
                              "start": {
                                "column": 19,
                                "line": 56
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1771,
                                1772
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 56
                                },
                                "start": {
                                  "column": 14,
                                  "line": 56
                                }
                              }
                            }
                          ],
                          "range": [
                            1771,
                            1788
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 56
                            },
                            "start": {
                              "column": 14,
                              "line": 56
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            1761,
                            1762
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 56
                            },
                            "start": {
                              "column": 4,
                              "line": 56
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "range": [
                            1763,
                            1770
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 56
                            },
                            "start": {
                              "column": 6,
                              "line": 56
                            }
                          }
                        },
                        "range": [
                          1761,
                          1770
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 56
                          },
                          "start": {
                            "column": 4,
                            "line": 56
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1761,
                        1789
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 56
                        },
                        "start": {
                          "column": 4,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1761,
                      1790
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 56
                      },
                      "start": {
                        "column": 4,
                        "line": 56
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1802,
                        1803
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 57
                        },
                        "start": {
                          "column": 11,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1795,
                      1804
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 57
                      },
                      "start": {
                        "column": 4,
                        "line": 57
                      }
                    }
                  }
                ],
                "range": [
                  1718,
                  1808
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 58
                  },
                  "start": {
                    "column": 26,
                    "line": 54
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
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
                        "column": 21,
                        "line": 54
                      },
                      "start": {
                        "column": 11,
                        "line": 54
                      }
                    },
                    "range": [
                      1703,
                      1713
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1710,
                          1713
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                1711,
                                1712
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 54
                                },
                                "start": {
                                  "column": 19,
                                  "line": 54
                                }
                              }
                            },
                            "range": [
                              1711,
                              1712
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 54
                              },
                              "start": {
                                "column": 19,
                                "line": 54
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 54
                          },
                          "start": {
                            "column": 18,
                            "line": 54
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          1705,
                          1710
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 54
                          },
                          "start": {
                            "column": 13,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        1705,
                        1713
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 54
                        },
                        "start": {
                          "column": 13,
                          "line": 54
                        }
                      }
                    }
                  },
                  "range": [
                    1702,
                    1713
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 54
                    },
                    "start": {
                      "column": 10,
                      "line": 54
                    }
                  }
                }
              ],
              "range": [
                1701,
                1808
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 58
                },
                "start": {
                  "column": 9,
                  "line": 54
                }
              }
            },
            "range": [
              1694,
              1808
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 58
              },
              "start": {
                "column": 2,
                "line": 54
              }
            }
          }
        ],
        "range": [
          1690,
          1810
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 63,
            "line": 53
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "range": [
          1636,
          1639
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 53
          },
          "start": {
            "column": 9,
            "line": 53
          }
        }
      },
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
                "column": 34,
                "line": 53
              },
              "start": {
                "column": 21,
                "line": 53
              }
            },
            "range": [
              1648,
              1661
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 28,
                        "line": 53
                      },
                      "start": {
                        "column": 25,
                        "line": 53
                      }
                    },
                    "range": [
                      1652,
                      1655
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          1654,
                          1655
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 53
                          },
                          "start": {
                            "column": 27,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1654,
                        1655
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 53
                        },
                        "start": {
                          "column": 27,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1651,
                    1655
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 53
                    },
                    "start": {
                      "column": 24,
                      "line": 53
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 53
                  },
                  "start": {
                    "column": 30,
                    "line": 53
                  }
                },
                "range": [
                  1657,
                  1661
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      1660,
                      1661
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 53
                      },
                      "start": {
                        "column": 33,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1660,
                    1661
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 53
                    },
                    "start": {
                      "column": 33,
                      "line": 53
                    }
                  }
                }
              },
              "range": [
                1650,
                1661
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 53
                },
                "start": {
                  "column": 23,
                  "line": 53
                }
              }
            }
          },
          "range": [
            1646,
            1661
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 53
            },
            "start": {
              "column": 19,
              "line": 53
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 53
          },
          "start": {
            "column": 35,
            "line": 53
          }
        },
        "range": [
          1662,
          1689
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 53
                  },
                  "start": {
                    "column": 39,
                    "line": 53
                  }
                },
                "range": [
                  1666,
                  1676
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1673,
                      1676
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            1674,
                            1675
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 53
                            },
                            "start": {
                              "column": 47,
                              "line": 53
                            }
                          }
                        },
                        "range": [
                          1674,
                          1675
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 53
                          },
                          "start": {
                            "column": 47,
                            "line": 53
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 53
                      },
                      "start": {
                        "column": 46,
                        "line": 53
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      1668,
                      1673
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 53
                      },
                      "start": {
                        "column": 41,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1668,
                    1676
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 53
                    },
                    "start": {
                      "column": 41,
                      "line": 53
                    }
                  }
                }
              },
              "range": [
                1665,
                1676
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 53
                },
                "start": {
                  "column": 38,
                  "line": 53
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 53
              },
              "start": {
                "column": 51,
                "line": 53
              }
            },
            "range": [
              1678,
              1689
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1686,
                  1689
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        1687,
                        1688
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 53
                        },
                        "start": {
                          "column": 60,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1687,
                      1688
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 53
                      },
                      "start": {
                        "column": 60,
                        "line": 53
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 53
                  },
                  "start": {
                    "column": 59,
                    "line": 53
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "range": [
                  1681,
                  1686
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 53
                  },
                  "start": {
                    "column": 54,
                    "line": 53
                  }
                }
              },
              "range": [
                1681,
                1689
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 53
                },
                "start": {
                  "column": 54,
                  "line": 53
                }
              }
            }
          },
          "range": [
            1664,
            1689
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 53
            },
            "start": {
              "column": 37,
              "line": 53
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 53
          },
          "start": {
            "column": 12,
            "line": 53
          }
        },
        "range": [
          1639,
          1645
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1640,
                1641
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 53
                },
                "start": {
                  "column": 13,
                  "line": 53
                }
              }
            },
            "out": false,
            "range": [
              1640,
              1641
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 53
              },
              "start": {
                "column": 13,
                "line": 53
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
              "name": "B",
              "optional": false,
              "range": [
                1643,
                1644
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 53
                },
                "start": {
                  "column": 16,
                  "line": 53
                }
              }
            },
            "out": false,
            "range": [
              1643,
              1644
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 53
              },
              "start": {
                "column": 16,
                "line": 53
              }
            }
          }
        ]
      },
      "range": [
        1627,
        1810
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 53
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
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
                          "name": "result",
                          "optional": false,
                          "range": [
                            1928,
                            1934
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 63
                            },
                            "start": {
                              "column": 10,
                              "line": 63
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "range": [
                              1941,
                              1946
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 63
                              },
                              "start": {
                                "column": 23,
                                "line": 63
                              }
                            }
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1946,
                              1949
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    1947,
                                    1948
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 63
                                    }
                                  }
                                },
                                "range": [
                                  1947,
                                  1948
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 63
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 63
                              },
                              "start": {
                                "column": 28,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            1937,
                            1951
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 63
                            },
                            "start": {
                              "column": 19,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          1928,
                          1951
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 63
                          },
                          "start": {
                            "column": 10,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1922,
                      1952
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 63
                      },
                      "start": {
                        "column": 4,
                        "line": 63
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "alternate": null,
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          2009,
                                          2010
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 65
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 65
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
                                        "name": "result",
                                        "optional": false,
                                        "range": [
                                          1998,
                                          2004
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 65
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 65
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "add",
                                        "optional": false,
                                        "range": [
                                          2005,
                                          2008
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 65
                                          },
                                          "start": {
                                            "column": 31,
                                            "line": 65
                                          }
                                        }
                                      },
                                      "range": [
                                        1998,
                                        2008
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 65
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 65
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      1998,
                                      2011
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 65
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 65
                                      }
                                    }
                                  },
                                  "range": [
                                    1998,
                                    2012
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 65
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 65
                                    }
                                  }
                                },
                                "test": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        1994,
                                        1995
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 65
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 65
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "predicate",
                                    "optional": false,
                                    "range": [
                                      1984,
                                      1993
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 65
                                      },
                                      "start": {
                                        "column": 10,
                                        "line": 65
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    1984,
                                    1996
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 65
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 65
                                    }
                                  }
                                },
                                "range": [
                                  1980,
                                  2012
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 65
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 65
                                  }
                                }
                              }
                            ],
                            "range": [
                              1972,
                              2018
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 66
                              },
                              "start": {
                                "column": 19,
                                "line": 64
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1967,
                                1968
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 64
                                },
                                "start": {
                                  "column": 14,
                                  "line": 64
                                }
                              }
                            }
                          ],
                          "range": [
                            1967,
                            2018
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 66
                            },
                            "start": {
                              "column": 14,
                              "line": 64
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            1957,
                            1958
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 64
                            },
                            "start": {
                              "column": 4,
                              "line": 64
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "range": [
                            1959,
                            1966
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 64
                            },
                            "start": {
                              "column": 6,
                              "line": 64
                            }
                          }
                        },
                        "range": [
                          1957,
                          1966
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 64
                          },
                          "start": {
                            "column": 4,
                            "line": 64
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1957,
                        2019
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 66
                        },
                        "start": {
                          "column": 4,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1957,
                      2020
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 66
                      },
                      "start": {
                        "column": 4,
                        "line": 64
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "range": [
                        2031,
                        2037
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 67
                        },
                        "start": {
                          "column": 10,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      2024,
                      2038
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 67
                      },
                      "start": {
                        "column": 3,
                        "line": 67
                      }
                    }
                  }
                ],
                "range": [
                  1916,
                  2042
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 68
                  },
                  "start": {
                    "column": 26,
                    "line": 62
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
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
                        "column": 21,
                        "line": 62
                      },
                      "start": {
                        "column": 11,
                        "line": 62
                      }
                    },
                    "range": [
                      1901,
                      1911
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1908,
                          1911
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                1909,
                                1910
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 62
                                },
                                "start": {
                                  "column": 19,
                                  "line": 62
                                }
                              }
                            },
                            "range": [
                              1909,
                              1910
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 62
                              },
                              "start": {
                                "column": 19,
                                "line": 62
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 62
                          },
                          "start": {
                            "column": 18,
                            "line": 62
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          1903,
                          1908
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 62
                          },
                          "start": {
                            "column": 13,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1903,
                        1911
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 62
                        },
                        "start": {
                          "column": 13,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    1900,
                    1911
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 62
                    },
                    "start": {
                      "column": 10,
                      "line": 62
                    }
                  }
                }
              ],
              "range": [
                1899,
                2042
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 68
                },
                "start": {
                  "column": 9,
                  "line": 62
                }
              }
            },
            "range": [
              1892,
              2042
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 68
              },
              "start": {
                "column": 2,
                "line": 62
              }
            }
          }
        ],
        "range": [
          1888,
          2044
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 76,
            "line": 61
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "range": [
          1821,
          1827
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 61
          },
          "start": {
            "column": 9,
            "line": 61
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 61
              },
              "start": {
                "column": 28,
                "line": 61
              }
            },
            "range": [
              1840,
              1859
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 35,
                        "line": 61
                      },
                      "start": {
                        "column": 32,
                        "line": 61
                      }
                    },
                    "range": [
                      1844,
                      1847
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          1846,
                          1847
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 61
                          },
                          "start": {
                            "column": 34,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1846,
                        1847
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 61
                        },
                        "start": {
                          "column": 34,
                          "line": 61
                        }
                      }
                    }
                  },
                  "range": [
                    1843,
                    1847
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 61
                    },
                    "start": {
                      "column": 31,
                      "line": 61
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 61
                  },
                  "start": {
                    "column": 37,
                    "line": 61
                  }
                },
                "range": [
                  1849,
                  1859
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1852,
                    1859
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 61
                    },
                    "start": {
                      "column": 40,
                      "line": 61
                    }
                  }
                }
              },
              "range": [
                1842,
                1859
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 61
                },
                "start": {
                  "column": 30,
                  "line": 61
                }
              }
            }
          },
          "range": [
            1831,
            1859
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 61
            },
            "start": {
              "column": 19,
              "line": 61
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 61
          },
          "start": {
            "column": 48,
            "line": 61
          }
        },
        "range": [
          1860,
          1887
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 61
                  },
                  "start": {
                    "column": 52,
                    "line": 61
                  }
                },
                "range": [
                  1864,
                  1874
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1871,
                      1874
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            1872,
                            1873
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 61
                            },
                            "start": {
                              "column": 60,
                              "line": 61
                            }
                          }
                        },
                        "range": [
                          1872,
                          1873
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 61
                          },
                          "start": {
                            "column": 60,
                            "line": 61
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 61
                      },
                      "start": {
                        "column": 59,
                        "line": 61
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      1866,
                      1871
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 61
                      },
                      "start": {
                        "column": 54,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1866,
                    1874
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
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
                1863,
                1874
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 61
                },
                "start": {
                  "column": 51,
                  "line": 61
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 61
              },
              "start": {
                "column": 64,
                "line": 61
              }
            },
            "range": [
              1876,
              1887
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1884,
                  1887
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        1885,
                        1886
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 61
                        },
                        "start": {
                          "column": 73,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1885,
                      1886
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 61
                      },
                      "start": {
                        "column": 73,
                        "line": 61
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 61
                  },
                  "start": {
                    "column": 72,
                    "line": 61
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "range": [
                  1879,
                  1884
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 61
                  },
                  "start": {
                    "column": 67,
                    "line": 61
                  }
                }
              },
              "range": [
                1879,
                1887
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 61
                },
                "start": {
                  "column": 67,
                  "line": 61
                }
              }
            }
          },
          "range": [
            1862,
            1887
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 61
            },
            "start": {
              "column": 50,
              "line": 61
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 61
          },
          "start": {
            "column": 15,
            "line": 61
          }
        },
        "range": [
          1827,
          1830
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1828,
                1829
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 61
                },
                "start": {
                  "column": 16,
                  "line": 61
                }
              }
            },
            "out": false,
            "range": [
              1828,
              1829
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 61
              },
              "start": {
                "column": 16,
                "line": 61
              }
            }
          }
        ]
      },
      "range": [
        1812,
        2044
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "testSet",
            "optional": false,
            "range": [
              2052,
              2059
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 71
              },
              "start": {
                "column": 6,
                "line": 71
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SetOf",
              "optional": false,
              "range": [
                2066,
                2071
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 71
                },
                "start": {
                  "column": 20,
                  "line": 71
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2071,
                2079
              ],
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2072,
                    2078
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 71
                    },
                    "start": {
                      "column": 26,
                      "line": 71
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 71
                },
                "start": {
                  "column": 25,
                  "line": 71
                }
              }
            },
            "range": [
              2062,
              2081
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 71
              },
              "start": {
                "column": 16,
                "line": 71
              }
            }
          },
          "range": [
            2052,
            2081
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 71
            },
            "start": {
              "column": 6,
              "line": 71
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2046,
        2082
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
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
            "raw": "1",
            "value": 1,
            "range": [
              2095,
              2096
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 72
              },
              "start": {
                "column": 12,
                "line": 72
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
            "name": "testSet",
            "optional": false,
            "range": [
              2083,
              2090
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 72
              },
              "start": {
                "column": 0,
                "line": 72
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "range": [
              2091,
              2094
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 72
              },
              "start": {
                "column": 8,
                "line": 72
              }
            }
          },
          "range": [
            2083,
            2094
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 72
            },
            "start": {
              "column": 0,
              "line": 72
            }
          }
        },
        "optional": false,
        "range": [
          2083,
          2097
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 72
          }
        }
      },
      "range": [
        2083,
        2098
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
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
            "raw": "2",
            "value": 2,
            "range": [
              2111,
              2112
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 73
              },
              "start": {
                "column": 12,
                "line": 73
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
            "name": "testSet",
            "optional": false,
            "range": [
              2099,
              2106
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 73
              },
              "start": {
                "column": 0,
                "line": 73
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "range": [
              2107,
              2110
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 73
              },
              "start": {
                "column": 8,
                "line": 73
              }
            }
          },
          "range": [
            2099,
            2110
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 73
            },
            "start": {
              "column": 0,
              "line": 73
            }
          }
        },
        "optional": false,
        "range": [
          2099,
          2113
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 73
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        2099,
        2114
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
            "raw": "3",
            "value": 3,
            "range": [
              2127,
              2128
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 74
              },
              "start": {
                "column": 12,
                "line": 74
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
            "name": "testSet",
            "optional": false,
            "range": [
              2115,
              2122
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 74
              },
              "start": {
                "column": 0,
                "line": 74
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "range": [
              2123,
              2126
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 74
              },
              "start": {
                "column": 8,
                "line": 74
              }
            }
          },
          "range": [
            2115,
            2126
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 74
            },
            "start": {
              "column": 0,
              "line": 74
            }
          }
        },
        "optional": false,
        "range": [
          2115,
          2129
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 74
          },
          "start": {
            "column": 0,
            "line": 74
          }
        }
      },
      "range": [
        2115,
        2130
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
            "name": "t1",
            "optional": false,
            "range": [
              2138,
              2140
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 76
              },
              "start": {
                "column": 6,
                "line": 76
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2189,
                                2190
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 78
                                },
                                "start": {
                                  "column": 16,
                                  "line": 78
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                2193,
                                2194
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 78
                                },
                                "start": {
                                  "column": 20,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              2189,
                              2194
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 78
                              },
                              "start": {
                                "column": 16,
                                "line": 78
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              2199,
                              2200
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 78
                              },
                              "start": {
                                "column": 26,
                                "line": 78
                              }
                            }
                          },
                          "range": [
                            2189,
                            2200
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 78
                            },
                            "start": {
                              "column": 16,
                              "line": 78
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2184,
                              2185
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 78
                              },
                              "start": {
                                "column": 11,
                                "line": 78
                              }
                            }
                          }
                        ],
                        "range": [
                          2184,
                          2200
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 78
                          },
                          "start": {
                            "column": 11,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "filter",
                      "optional": false,
                      "range": [
                        2177,
                        2183
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 78
                        },
                        "start": {
                          "column": 4,
                          "line": 78
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2177,
                      2201
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 78
                      },
                      "start": {
                        "column": 4,
                        "line": 78
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2216,
                              2217
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 79
                              },
                              "start": {
                                "column": 13,
                                "line": 79
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2220,
                              2221
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 79
                              },
                              "start": {
                                "column": 17,
                                "line": 79
                              }
                            }
                          },
                          "range": [
                            2216,
                            2221
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 79
                            },
                            "start": {
                              "column": 13,
                              "line": 79
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2211,
                              2212
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 79
                              },
                              "start": {
                                "column": 8,
                                "line": 79
                              }
                            }
                          }
                        ],
                        "range": [
                          2211,
                          2221
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 79
                          },
                          "start": {
                            "column": 8,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        2207,
                        2210
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 79
                        },
                        "start": {
                          "column": 4,
                          "line": 79
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2207,
                      2222
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 79
                      },
                      "start": {
                        "column": 4,
                        "line": 79
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2237,
                              2238
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 80
                              },
                              "start": {
                                "column": 13,
                                "line": 80
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'!!!'",
                            "value": "!!!",
                            "range": [
                              2241,
                              2246
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 80
                              },
                              "start": {
                                "column": 17,
                                "line": 80
                              }
                            }
                          },
                          "range": [
                            2237,
                            2246
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 80
                            },
                            "start": {
                              "column": 13,
                              "line": 80
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2232,
                              2233
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 80
                              },
                              "start": {
                                "column": 8,
                                "line": 80
                              }
                            }
                          }
                        ],
                        "range": [
                          2232,
                          2246
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 80
                          },
                          "start": {
                            "column": 8,
                            "line": 80
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        2228,
                        2231
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 80
                        },
                        "start": {
                          "column": 4,
                          "line": 80
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2228,
                      2247
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 80
                      },
                      "start": {
                        "column": 4,
                        "line": 80
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2262,
                                2263
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 81
                                },
                                "start": {
                                  "column": 13,
                                  "line": 81
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "range": [
                                2264,
                                2275
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 81
                                },
                                "start": {
                                  "column": 15,
                                  "line": 81
                                }
                              }
                            },
                            "range": [
                              2262,
                              2275
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 81
                              },
                              "start": {
                                "column": 13,
                                "line": 81
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2262,
                            2277
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 81
                            },
                            "start": {
                              "column": 13,
                              "line": 81
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2257,
                              2258
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 81
                              },
                              "start": {
                                "column": 8,
                                "line": 81
                              }
                            }
                          }
                        ],
                        "range": [
                          2257,
                          2277
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 81
                          },
                          "start": {
                            "column": 8,
                            "line": 81
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        2253,
                        2256
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 81
                        },
                        "start": {
                          "column": 4,
                          "line": 81
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2253,
                      2278
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 81
                      },
                      "start": {
                        "column": 4,
                        "line": 81
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compose",
                  "optional": false,
                  "range": [
                    2164,
                    2171
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 77
                    },
                    "start": {
                      "column": 2,
                      "line": 77
                    }
                  }
                },
                "optional": false,
                "range": [
                  2164,
                  2282
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 82
                  },
                  "start": {
                    "column": 2,
                    "line": 77
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
                "name": "testSet",
                "optional": false,
                "range": [
                  2143,
                  2150
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 76
                  },
                  "start": {
                    "column": 11,
                    "line": 76
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "transform",
                "optional": false,
                "range": [
                  2151,
                  2160
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 76
                  },
                  "start": {
                    "column": 19,
                    "line": 76
                  }
                }
              },
              "range": [
                2143,
                2160
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 76
                },
                "start": {
                  "column": 11,
                  "line": 76
                }
              }
            },
            "optional": false,
            "range": [
              2143,
              2284
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 83
              },
              "start": {
                "column": 11,
                "line": 76
              }
            }
          },
          "range": [
            2138,
            2284
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 83
            },
            "start": {
              "column": 6,
              "line": 76
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2132,
        2284
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 76
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
        "name": "identity",
        "optional": false,
        "range": [
          2303,
          2311
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 85
          },
          "start": {
            "column": 17,
            "line": 85
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
                "column": 33,
                "line": 85
              },
              "start": {
                "column": 30,
                "line": 85
              }
            },
            "range": [
              2316,
              2319
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2318,
                  2319
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 85
                  },
                  "start": {
                    "column": 32,
                    "line": 85
                  }
                }
              },
              "range": [
                2318,
                2319
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 85
                },
                "start": {
                  "column": 32,
                  "line": 85
                }
              }
            }
          },
          "range": [
            2315,
            2319
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 85
            },
            "start": {
              "column": 29,
              "line": 85
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 85
          },
          "start": {
            "column": 34,
            "line": 85
          }
        },
        "range": [
          2320,
          2323
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2322,
              2323
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 85
              },
              "start": {
                "column": 36,
                "line": 85
              }
            }
          },
          "range": [
            2322,
            2323
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 85
            },
            "start": {
              "column": 36,
              "line": 85
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 85
          },
          "start": {
            "column": 25,
            "line": 85
          }
        },
        "range": [
          2311,
          2314
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
                2312,
                2313
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 85
                },
                "start": {
                  "column": 26,
                  "line": 85
                }
              }
            },
            "out": false,
            "range": [
              2312,
              2313
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 85
              },
              "start": {
                "column": 26,
                "line": 85
              }
            }
          }
        ]
      },
      "range": [
        2286,
        2324
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
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
            "name": "t2",
            "optional": false,
            "range": [
              2332,
              2334
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 87
              },
              "start": {
                "column": 6,
                "line": 87
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2383,
                                2384
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 89
                                },
                                "start": {
                                  "column": 16,
                                  "line": 89
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                2387,
                                2388
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 89
                                },
                                "start": {
                                  "column": 20,
                                  "line": 89
                                }
                              }
                            },
                            "range": [
                              2383,
                              2388
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 89
                              },
                              "start": {
                                "column": 16,
                                "line": 89
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              2393,
                              2394
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 89
                              },
                              "start": {
                                "column": 26,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            2383,
                            2394
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 89
                            },
                            "start": {
                              "column": 16,
                              "line": 89
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2378,
                              2379
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 89
                              },
                              "start": {
                                "column": 11,
                                "line": 89
                              }
                            }
                          }
                        ],
                        "range": [
                          2378,
                          2394
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 89
                          },
                          "start": {
                            "column": 11,
                            "line": 89
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "filter",
                      "optional": false,
                      "range": [
                        2371,
                        2377
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 89
                        },
                        "start": {
                          "column": 4,
                          "line": 89
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2371,
                      2395
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 89
                      },
                      "start": {
                        "column": 4,
                        "line": 89
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "range": [
                      2401,
                      2409
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 90
                      },
                      "start": {
                        "column": 4,
                        "line": 90
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2424,
                              2425
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 91
                              },
                              "start": {
                                "column": 13,
                                "line": 91
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'!!!'",
                            "value": "!!!",
                            "range": [
                              2428,
                              2433
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 91
                              },
                              "start": {
                                "column": 17,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2424,
                            2433
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 91
                            },
                            "start": {
                              "column": 13,
                              "line": 91
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2419,
                              2420
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 91
                              },
                              "start": {
                                "column": 8,
                                "line": 91
                              }
                            }
                          }
                        ],
                        "range": [
                          2419,
                          2433
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 91
                          },
                          "start": {
                            "column": 8,
                            "line": 91
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        2415,
                        2418
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 91
                        },
                        "start": {
                          "column": 4,
                          "line": 91
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2415,
                      2434
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 91
                      },
                      "start": {
                        "column": 4,
                        "line": 91
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2449,
                                2450
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 92
                                },
                                "start": {
                                  "column": 13,
                                  "line": 92
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "range": [
                                2451,
                                2462
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 92
                                },
                                "start": {
                                  "column": 15,
                                  "line": 92
                                }
                              }
                            },
                            "range": [
                              2449,
                              2462
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 92
                              },
                              "start": {
                                "column": 13,
                                "line": 92
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2449,
                            2464
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 92
                            },
                            "start": {
                              "column": 13,
                              "line": 92
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2444,
                              2445
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 92
                              },
                              "start": {
                                "column": 8,
                                "line": 92
                              }
                            }
                          }
                        ],
                        "range": [
                          2444,
                          2464
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 92
                          },
                          "start": {
                            "column": 8,
                            "line": 92
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        2440,
                        2443
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 92
                        },
                        "start": {
                          "column": 4,
                          "line": 92
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2440,
                      2465
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 92
                      },
                      "start": {
                        "column": 4,
                        "line": 92
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compose",
                  "optional": false,
                  "range": [
                    2358,
                    2365
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 88
                    },
                    "start": {
                      "column": 2,
                      "line": 88
                    }
                  }
                },
                "optional": false,
                "range": [
                  2358,
                  2469
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 93
                  },
                  "start": {
                    "column": 2,
                    "line": 88
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
                "name": "testSet",
                "optional": false,
                "range": [
                  2337,
                  2344
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 87
                  },
                  "start": {
                    "column": 11,
                    "line": 87
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "transform",
                "optional": false,
                "range": [
                  2345,
                  2354
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 87
                  },
                  "start": {
                    "column": 19,
                    "line": 87
                  }
                }
              },
              "range": [
                2337,
                2354
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 87
                },
                "start": {
                  "column": 11,
                  "line": 87
                }
              }
            },
            "optional": false,
            "range": [
              2337,
              2471
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 94
              },
              "start": {
                "column": 11,
                "line": 87
              }
            }
          },
          "range": [
            2332,
            2471
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 94
            },
            "start": {
              "column": 6,
              "line": 87
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2326,
        2471
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 95
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
