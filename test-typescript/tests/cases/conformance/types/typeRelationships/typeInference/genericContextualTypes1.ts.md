__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1638
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
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
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                16,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
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
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              },
              "range": [
                21,
                24
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    23,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
                      "line": 1
                    }
                  }
                },
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              16,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "range": [
          14,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        },
        "range": [
          8,
          11
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
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
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
          46,
          50
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
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            },
            "range": [
              58,
              71
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
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 33,
                        "line": 3
                      }
                    },
                    "range": [
                      62,
                      65
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          64,
                          65
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 3
                          },
                          "start": {
                            "column": 35,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        64,
                        65
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 3
                        },
                        "start": {
                          "column": 35,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    61,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 32,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                },
                "range": [
                  67,
                  71
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      70,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 41,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    70,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 3
                    },
                    "start": {
                      "column": 41,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                60,
                71
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            }
          },
          "range": [
            57,
            71
          ],
          "loc": {
            "end": {
              "column": 42,
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
            "column": 56,
            "line": 3
          },
          "start": {
            "column": 43,
            "line": 3
          }
        },
        "range": [
          72,
          85
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
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 47,
                    "line": 3
                  }
                },
                "range": [
                  76,
                  79
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      78,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 3
                      },
                      "start": {
                        "column": 49,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    78,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 3
                    },
                    "start": {
                      "column": 49,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                75,
                79
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 46,
                  "line": 3
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 3
              },
              "start": {
                "column": 52,
                "line": 3
              }
            },
            "range": [
              81,
              85
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 3
                  },
                  "start": {
                    "column": 55,
                    "line": 3
                  }
                }
              },
              "range": [
                84,
                85
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 3
                },
                "start": {
                  "column": 55,
                  "line": 3
                }
              }
            }
          },
          "range": [
            74,
            85
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 3
            },
            "start": {
              "column": 45,
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
          50,
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
              "name": "A",
              "optional": false,
              "range": [
                51,
                52
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
              51,
              52
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
              "name": "B",
              "optional": false,
              "range": [
                54,
                55
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
              54,
              55
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
        29,
        86
      ],
      "loc": {
        "end": {
          "column": 57,
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
        "name": "compose",
        "optional": false,
        "range": [
          105,
          112
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 5
              },
              "start": {
                "column": 35,
                "line": 5
              }
            },
            "range": [
              123,
              136
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
                        "column": 42,
                        "line": 5
                      },
                      "start": {
                        "column": 39,
                        "line": 5
                      }
                    },
                    "range": [
                      127,
                      130
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          129,
                          130
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
                        129,
                        130
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
                    }
                  },
                  "range": [
                    126,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 5
                    },
                    "start": {
                      "column": 38,
                      "line": 5
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 44,
                    "line": 5
                  }
                },
                "range": [
                  132,
                  136
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      135,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 5
                      },
                      "start": {
                        "column": 47,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    135,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 5
                    },
                    "start": {
                      "column": 47,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                125,
                136
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              }
            }
          },
          "range": [
            122,
            136
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 5
            },
            "start": {
              "column": 34,
              "line": 5
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
                "line": 5
              },
              "start": {
                "column": 51,
                "line": 5
              }
            },
            "range": [
              139,
              152
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
                        "column": 58,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 5
                      }
                    },
                    "range": [
                      143,
                      146
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          145,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 5
                          },
                          "start": {
                            "column": 57,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        145,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 5
                        },
                        "start": {
                          "column": 57,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    142,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 5
                    },
                    "start": {
                      "column": 54,
                      "line": 5
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 5
                  },
                  "start": {
                    "column": 60,
                    "line": 5
                  }
                },
                "range": [
                  148,
                  152
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      151,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 5
                      },
                      "start": {
                        "column": 63,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    151,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 5
                    },
                    "start": {
                      "column": 63,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                141,
                152
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 5
                },
                "start": {
                  "column": 53,
                  "line": 5
                }
              }
            }
          },
          "range": [
            138,
            152
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 5
            },
            "start": {
              "column": 50,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 78,
            "line": 5
          },
          "start": {
            "column": 65,
            "line": 5
          }
        },
        "range": [
          153,
          166
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
                    "column": 72,
                    "line": 5
                  },
                  "start": {
                    "column": 69,
                    "line": 5
                  }
                },
                "range": [
                  157,
                  160
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      159,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 5
                      },
                      "start": {
                        "column": 71,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    159,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 5
                    },
                    "start": {
                      "column": 71,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                156,
                160
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 5
                },
                "start": {
                  "column": 68,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 5
              },
              "start": {
                "column": 74,
                "line": 5
              }
            },
            "range": [
              162,
              166
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  165,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 5
                  },
                  "start": {
                    "column": 77,
                    "line": 5
                  }
                }
              },
              "range": [
                165,
                166
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 5
                },
                "start": {
                  "column": 77,
                  "line": 5
                }
              }
            }
          },
          "range": [
            155,
            166
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 5
            },
            "start": {
              "column": 67,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 5
          }
        },
        "range": [
          112,
          121
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
                113,
                114
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              113,
              114
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 5
              },
              "start": {
                "column": 25,
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
              "name": "B",
              "optional": false,
              "range": [
                116,
                117
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 28,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              116,
              117
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 28,
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
              "name": "C",
              "optional": false,
              "range": [
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              119,
              120
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        88,
        167
      ],
      "loc": {
        "end": {
          "column": 79,
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
        "name": "list",
        "optional": false,
        "range": [
          186,
          190
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            },
            "range": [
              195,
              198
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  197,
                  198
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
              "range": [
                197,
                198
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
            }
          },
          "range": [
            194,
            198
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 7
            },
            "start": {
              "column": 25,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 7
          },
          "start": {
            "column": 30,
            "line": 7
          }
        },
        "range": [
          199,
          204
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                201,
                202
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            },
            "range": [
              201,
              202
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 7
              },
              "start": {
                "column": 32,
                "line": 7
              }
            }
          },
          "range": [
            201,
            204
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 7
            },
            "start": {
              "column": 32,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 7
          },
          "start": {
            "column": 21,
            "line": 7
          }
        },
        "range": [
          190,
          193
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
                191,
                192
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              191,
              192
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        169,
        205
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "name": "unlist",
        "optional": false,
        "range": [
          224,
          230
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 9
              },
              "start": {
                "column": 28,
                "line": 9
              }
            },
            "range": [
              235,
              240
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    237,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 9
                    },
                    "start": {
                      "column": 30,
                      "line": 9
                    }
                  }
                },
                "range": [
                  237,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 9
                  }
                }
              },
              "range": [
                237,
                240
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            }
          },
          "range": [
            234,
            240
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 9
            },
            "start": {
              "column": 27,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 9
          },
          "start": {
            "column": 34,
            "line": 9
          }
        },
        "range": [
          241,
          244
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              243,
              244
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 36,
                "line": 9
              }
            }
          },
          "range": [
            243,
            244
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 9
            },
            "start": {
              "column": 36,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 9
          },
          "start": {
            "column": 23,
            "line": 9
          }
        },
        "range": [
          230,
          233
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
                231,
                232
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              231,
              232
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 24,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        207,
        245
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
        "name": "box",
        "optional": false,
        "range": [
          264,
          267
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 11
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
                "column": 28,
                "line": 11
              },
              "start": {
                "column": 25,
                "line": 11
              }
            },
            "range": [
              272,
              275
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  274,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              "range": [
                274,
                275
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              }
            }
          },
          "range": [
            271,
            275
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 24,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 11
          },
          "start": {
            "column": 29,
            "line": 11
          }
        },
        "range": [
          276,
          284
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              281,
              284
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    282,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 11
                    },
                    "start": {
                      "column": 35,
                      "line": 11
                    }
                  }
                },
                "range": [
                  282,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 11
              },
              "start": {
                "column": 34,
                "line": 11
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              278,
              281
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 31,
                "line": 11
              }
            }
          },
          "range": [
            278,
            284
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 11
            },
            "start": {
              "column": 31,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 11
          },
          "start": {
            "column": 20,
            "line": 11
          }
        },
        "range": [
          267,
          270
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                268,
                269
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              268,
              269
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 21,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        247,
        285
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "unbox",
        "optional": false,
        "range": [
          304,
          309
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
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
                "column": 35,
                "line": 13
              },
              "start": {
                "column": 27,
                "line": 13
              }
            },
            "range": [
              314,
              322
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  319,
                  322
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "W",
                      "optional": false,
                      "range": [
                        320,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 13
                        },
                        "start": {
                          "column": 33,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      320,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 13
                      },
                      "start": {
                        "column": 33,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 32,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "range": [
                  316,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 13
                  },
                  "start": {
                    "column": 29,
                    "line": 13
                  }
                }
              },
              "range": [
                316,
                322
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 13
                },
                "start": {
                  "column": 29,
                  "line": 13
                }
              }
            }
          },
          "range": [
            313,
            322
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 13
            },
            "start": {
              "column": 26,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 13
          },
          "start": {
            "column": 36,
            "line": 13
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
            "name": "W",
            "optional": false,
            "range": [
              325,
              326
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 13
              },
              "start": {
                "column": 38,
                "line": 13
              }
            }
          },
          "range": [
            325,
            326
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 13
            },
            "start": {
              "column": 38,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 13
          },
          "start": {
            "column": 22,
            "line": 13
          }
        },
        "range": [
          309,
          312
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "range": [
                310,
                311
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              310,
              311
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 23,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        287,
        327
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
        "name": "map",
        "optional": false,
        "range": [
          346,
          349
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
          }
        }
      },
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
                "column": 33,
                "line": 15
              },
              "start": {
                "column": 28,
                "line": 15
              }
            },
            "range": [
              357,
              362
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    359,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 30,
                      "line": 15
                    }
                  }
                },
                "range": [
                  359,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 30,
                    "line": 15
                  }
                }
              },
              "range": [
                359,
                362
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 30,
                  "line": 15
                }
              }
            }
          },
          "range": [
            356,
            362
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 15
            },
            "start": {
              "column": 27,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 15
              },
              "start": {
                "column": 36,
                "line": 15
              }
            },
            "range": [
              365,
              378
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
                        "column": 43,
                        "line": 15
                      },
                      "start": {
                        "column": 40,
                        "line": 15
                      }
                    },
                    "range": [
                      369,
                      372
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
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
                            "column": 43,
                            "line": 15
                          },
                          "start": {
                            "column": 42,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        371,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 15
                        },
                        "start": {
                          "column": 42,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    368,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 15
                    },
                    "start": {
                      "column": 39,
                      "line": 15
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 15
                  },
                  "start": {
                    "column": 45,
                    "line": 15
                  }
                },
                "range": [
                  374,
                  378
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      377,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 15
                      },
                      "start": {
                        "column": 48,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    377,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 15
                    },
                    "start": {
                      "column": 48,
                      "line": 15
                    }
                  }
                }
              },
              "range": [
                367,
                378
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 15
                },
                "start": {
                  "column": 38,
                  "line": 15
                }
              }
            }
          },
          "range": [
            364,
            378
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 15
            },
            "start": {
              "column": 35,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 55,
            "line": 15
          },
          "start": {
            "column": 50,
            "line": 15
          }
        },
        "range": [
          379,
          384
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                381,
                382
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 15
                },
                "start": {
                  "column": 52,
                  "line": 15
                }
              }
            },
            "range": [
              381,
              382
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 15
              },
              "start": {
                "column": 52,
                "line": 15
              }
            }
          },
          "range": [
            381,
            384
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 15
            },
            "start": {
              "column": 52,
              "line": 15
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 15
          },
          "start": {
            "column": 20,
            "line": 15
          }
        },
        "range": [
          349,
          355
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
                350,
                351
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 21,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              350,
              351
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 21,
                "line": 15
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
                353,
                354
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              353,
              354
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 24,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        329,
        385
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
          404,
          412
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
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
                "line": 17
              },
              "start": {
                "column": 30,
                "line": 17
              }
            },
            "range": [
              417,
              420
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  419,
                  420
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 32,
                    "line": 17
                  }
                }
              },
              "range": [
                419,
                420
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 17
                },
                "start": {
                  "column": 32,
                  "line": 17
                }
              }
            }
          },
          "range": [
            416,
            420
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 17
            },
            "start": {
              "column": 29,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 17
          },
          "start": {
            "column": 34,
            "line": 17
          }
        },
        "range": [
          421,
          424
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              423,
              424
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 17
              },
              "start": {
                "column": 36,
                "line": 17
              }
            }
          },
          "range": [
            423,
            424
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 17
            },
            "start": {
              "column": 36,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 17
          },
          "start": {
            "column": 25,
            "line": 17
          }
        },
        "range": [
          412,
          415
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
                413,
                414
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 17
                },
                "start": {
                  "column": 26,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              413,
              414
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 26,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        387,
        425
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
        "name": "zip",
        "optional": false,
        "range": [
          444,
          447
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 19
          }
        }
      },
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
                "column": 31,
                "line": 19
              },
              "start": {
                "column": 28,
                "line": 19
              }
            },
            "range": [
              455,
              458
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  457,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 19
                  },
                  "start": {
                    "column": 30,
                    "line": 19
                  }
                }
              },
              "range": [
                457,
                458
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 30,
                  "line": 19
                }
              }
            }
          },
          "range": [
            454,
            458
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 19
            },
            "start": {
              "column": 27,
              "line": 19
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 34,
                "line": 19
              }
            },
            "range": [
              461,
              464
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  463,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 19
                  },
                  "start": {
                    "column": 36,
                    "line": 19
                  }
                }
              },
              "range": [
                463,
                464
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 19
                },
                "start": {
                  "column": 36,
                  "line": 19
                }
              }
            }
          },
          "range": [
            460,
            464
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 19
            },
            "start": {
              "column": 33,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 19
          },
          "start": {
            "column": 38,
            "line": 19
          }
        },
        "range": [
          465,
          473
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  468,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 19
                  },
                  "start": {
                    "column": 41,
                    "line": 19
                  }
                }
              },
              "range": [
                468,
                469
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 19
                },
                "start": {
                  "column": 41,
                  "line": 19
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  471,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 19
                  },
                  "start": {
                    "column": 44,
                    "line": 19
                  }
                }
              },
              "range": [
                471,
                472
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 19
                },
                "start": {
                  "column": 44,
                  "line": 19
                }
              }
            }
          ],
          "range": [
            467,
            473
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 19
            },
            "start": {
              "column": 40,
              "line": 19
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
          }
        },
        "range": [
          447,
          453
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
                448,
                449
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              448,
              449
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 21,
                "line": 19
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
                451,
                452
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              451,
              452
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 19
              },
              "start": {
                "column": 24,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        427,
        474
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
        "name": "flip",
        "optional": false,
        "range": [
          493,
          497
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
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
                "column": 51,
                "line": 21
              },
              "start": {
                "column": 32,
                "line": 21
              }
            },
            "range": [
              508,
              527
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
                        "column": 39,
                        "line": 21
                      },
                      "start": {
                        "column": 36,
                        "line": 21
                      }
                    },
                    "range": [
                      512,
                      515
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "range": [
                          514,
                          515
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 21
                          },
                          "start": {
                            "column": 38,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        514,
                        515
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 21
                        },
                        "start": {
                          "column": 38,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    511,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 21
                    },
                    "start": {
                      "column": 35,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 21
                      },
                      "start": {
                        "column": 42,
                        "line": 21
                      }
                    },
                    "range": [
                      518,
                      521
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "range": [
                          520,
                          521
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 21
                          },
                          "start": {
                            "column": 44,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        520,
                        521
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 21
                        },
                        "start": {
                          "column": 44,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    517,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 21
                    },
                    "start": {
                      "column": 41,
                      "line": 21
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 21
                  },
                  "start": {
                    "column": 47,
                    "line": 21
                  }
                },
                "range": [
                  523,
                  527
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "range": [
                      526,
                      527
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 21
                      },
                      "start": {
                        "column": 50,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    526,
                    527
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 21
                    },
                    "start": {
                      "column": 50,
                      "line": 21
                    }
                  }
                }
              },
              "range": [
                510,
                527
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 21
                },
                "start": {
                  "column": 34,
                  "line": 21
                }
              }
            }
          },
          "range": [
            507,
            527
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 21
            },
            "start": {
              "column": 31,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 71,
            "line": 21
          },
          "start": {
            "column": 52,
            "line": 21
          }
        },
        "range": [
          528,
          547
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 21
                  },
                  "start": {
                    "column": 56,
                    "line": 21
                  }
                },
                "range": [
                  532,
                  535
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "range": [
                      534,
                      535
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
                  },
                  "range": [
                    534,
                    535
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
              },
              "range": [
                531,
                535
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 21
                },
                "start": {
                  "column": 55,
                  "line": 21
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 21
                  },
                  "start": {
                    "column": 62,
                    "line": 21
                  }
                },
                "range": [
                  538,
                  541
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      540,
                      541
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 21
                      },
                      "start": {
                        "column": 64,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    540,
                    541
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 21
                    },
                    "start": {
                      "column": 64,
                      "line": 21
                    }
                  }
                }
              },
              "range": [
                537,
                541
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 21
                },
                "start": {
                  "column": 61,
                  "line": 21
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 21
              },
              "start": {
                "column": 67,
                "line": 21
              }
            },
            "range": [
              543,
              547
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "range": [
                  546,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 21
                  },
                  "start": {
                    "column": 70,
                    "line": 21
                  }
                }
              },
              "range": [
                546,
                547
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 21
                },
                "start": {
                  "column": 70,
                  "line": 21
                }
              }
            }
          },
          "range": [
            530,
            547
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 21
            },
            "start": {
              "column": 54,
              "line": 21
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
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
          497,
          506
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                498,
                499
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 21
                },
                "start": {
                  "column": 22,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              498,
              499
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 21
              },
              "start": {
                "column": 22,
                "line": 21
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
              "name": "Y",
              "optional": false,
              "range": [
                501,
                502
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 21
                },
                "start": {
                  "column": 25,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              501,
              502
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 21
              },
              "start": {
                "column": 25,
                "line": 21
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
              "name": "Z",
              "optional": false,
              "range": [
                504,
                505
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 21
                },
                "start": {
                  "column": 28,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              504,
              505
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 21
              },
              "start": {
                "column": 28,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        476,
        548
      ],
      "loc": {
        "end": {
          "column": 72,
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
            "name": "f00",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              },
              "range": [
                559,
                577
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
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 16,
                          "line": 23
                        }
                      },
                      "range": [
                        566,
                        569
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            568,
                            569
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 23
                            },
                            "start": {
                              "column": 18,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          568,
                          569
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 18,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      565,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 23
                    },
                    "start": {
                      "column": 21,
                      "line": 23
                    }
                  },
                  "range": [
                    571,
                    577
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
                          574,
                          575
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 23
                          },
                          "start": {
                            "column": 24,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        574,
                        575
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 23
                        },
                        "start": {
                          "column": 24,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      574,
                      577
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 23
                    },
                    "start": {
                      "column": 11,
                      "line": 23
                    }
                  },
                  "range": [
                    561,
                    564
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
                          562,
                          563
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        562,
                        563
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 23
                        },
                        "start": {
                          "column": 12,
                          "line": 23
                        }
                      }
                    }
                  ]
                },
                "range": [
                  561,
                  577
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              556,
              577
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "list",
            "optional": false,
            "range": [
              580,
              584
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 30,
                "line": 23
              }
            }
          },
          "range": [
            556,
            584
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        550,
        585
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "f01",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              },
              "range": [
                595,
                613
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
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 16,
                          "line": 24
                        }
                      },
                      "range": [
                        602,
                        605
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            604,
                            605
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 24
                            },
                            "start": {
                              "column": 18,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          604,
                          605
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 24
                          },
                          "start": {
                            "column": 18,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      601,
                      605
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 24
                    },
                    "start": {
                      "column": 21,
                      "line": 24
                    }
                  },
                  "range": [
                    607,
                    613
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
                          610,
                          611
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 24
                          },
                          "start": {
                            "column": 24,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        610,
                        611
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 24
                        },
                        "start": {
                          "column": 24,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      610,
                      613
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  },
                  "range": [
                    597,
                    600
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
                          598,
                          599
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 24
                          },
                          "start": {
                            "column": 12,
                            "line": 24
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        598,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 12,
                          "line": 24
                        }
                      }
                    }
                  ]
                },
                "range": [
                  597,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              592,
              613
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    622,
                    623
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 24
                    },
                    "start": {
                      "column": 36,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                621,
                624
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 24
                },
                "start": {
                  "column": 35,
                  "line": 24
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
                  616,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 24
                  },
                  "start": {
                    "column": 30,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              616,
              624
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 24
              },
              "start": {
                "column": 30,
                "line": 24
              }
            }
          },
          "range": [
            592,
            624
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        586,
        625
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "f02",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              },
              "range": [
                635,
                653
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
                          "column": 19,
                          "line": 25
                        },
                        "start": {
                          "column": 16,
                          "line": 25
                        }
                      },
                      "range": [
                        642,
                        645
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            644,
                            645
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 25
                            },
                            "start": {
                              "column": 18,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          644,
                          645
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 25
                          },
                          "start": {
                            "column": 18,
                            "line": 25
                          }
                        }
                      }
                    },
                    "range": [
                      641,
                      645
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 25
                    },
                    "start": {
                      "column": 21,
                      "line": 25
                    }
                  },
                  "range": [
                    647,
                    653
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
                          650,
                          651
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 25
                          },
                          "start": {
                            "column": 24,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        650,
                        651
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 25
                        },
                        "start": {
                          "column": 24,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      650,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 25
                      },
                      "start": {
                        "column": 24,
                        "line": 25
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 11,
                      "line": 25
                    }
                  },
                  "range": [
                    637,
                    640
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
                          638,
                          639
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        638,
                        639
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 25
                        }
                      }
                    }
                  ]
                },
                "range": [
                  637,
                  653
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 25
                  },
                  "start": {
                    "column": 11,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              632,
              653
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "range": [
                  661,
                  665
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 25
                  },
                  "start": {
                    "column": 35,
                    "line": 25
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
                656,
                660
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 25
                },
                "start": {
                  "column": 30,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              656,
              666
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 25
              },
              "start": {
                "column": 30,
                "line": 25
              }
            }
          },
          "range": [
            632,
            666
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        626,
        667
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "f03",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              },
              "range": [
                677,
                695
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
                          "column": 19,
                          "line": 26
                        },
                        "start": {
                          "column": 16,
                          "line": 26
                        }
                      },
                      "range": [
                        684,
                        687
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            686,
                            687
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 26
                            },
                            "start": {
                              "column": 18,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          686,
                          687
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 26
                          },
                          "start": {
                            "column": 18,
                            "line": 26
                          }
                        }
                      }
                    },
                    "range": [
                      683,
                      687
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 26
                    },
                    "start": {
                      "column": 21,
                      "line": 26
                    }
                  },
                  "range": [
                    689,
                    695
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
                          692,
                          693
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 26
                          },
                          "start": {
                            "column": 24,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        692,
                        693
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 26
                        },
                        "start": {
                          "column": 24,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      692,
                      695
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 26
                      },
                      "start": {
                        "column": 24,
                        "line": 26
                      }
                    }
                  }
                },
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
                    679,
                    682
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
                          680,
                          681
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
                        680,
                        681
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
                  679,
                  695
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              674,
              695
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
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
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        709,
                        710
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 26
                        },
                        "start": {
                          "column": 41,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    708,
                    711
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 26
                    },
                    "start": {
                      "column": 40,
                      "line": 26
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
                      703,
                      704
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 26
                      },
                      "start": {
                        "column": 35,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  703,
                  711
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 26
                  },
                  "start": {
                    "column": 35,
                    "line": 26
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
                698,
                702
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 26
                },
                "start": {
                  "column": 30,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              698,
              712
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 26
              },
              "start": {
                "column": 30,
                "line": 26
              }
            }
          },
          "range": [
            674,
            712
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        668,
        713
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              },
              "range": [
                724,
                747
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
                          "column": 19,
                          "line": 28
                        },
                        "start": {
                          "column": 16,
                          "line": 28
                        }
                      },
                      "range": [
                        731,
                        734
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            733,
                            734
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 28
                            },
                            "start": {
                              "column": 18,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          733,
                          734
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 28
                          },
                          "start": {
                            "column": 18,
                            "line": 28
                          }
                        }
                      }
                    },
                    "range": [
                      730,
                      734
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 28
                    },
                    "start": {
                      "column": 21,
                      "line": 28
                    }
                  },
                  "range": [
                    736,
                    747
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        742,
                        747
                      ],
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                743,
                                744
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 28
                                },
                                "start": {
                                  "column": 28,
                                  "line": 28
                                }
                              }
                            },
                            "range": [
                              743,
                              744
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 28
                              },
                              "start": {
                                "column": 28,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            743,
                            746
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 28
                            },
                            "start": {
                              "column": 28,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 28
                        },
                        "start": {
                          "column": 27,
                          "line": 28
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "range": [
                        739,
                        742
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 28
                        },
                        "start": {
                          "column": 24,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      739,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 28
                      },
                      "start": {
                        "column": 24,
                        "line": 28
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 28
                    },
                    "start": {
                      "column": 11,
                      "line": 28
                    }
                  },
                  "range": [
                    726,
                    729
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
                          727,
                          728
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 28
                          },
                          "start": {
                            "column": 12,
                            "line": 28
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        727,
                        728
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 28
                        },
                        "start": {
                          "column": 12,
                          "line": 28
                        }
                      }
                    }
                  ]
                },
                "range": [
                  726,
                  747
                ],
                "loc": {
                  "end": {
                    "column": 32,
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
              721,
              747
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
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
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        768,
                        769
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 28
                        },
                        "start": {
                          "column": 53,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "range": [
                      763,
                      767
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 28
                      },
                      "start": {
                        "column": 48,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    763,
                    770
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 28
                    },
                    "start": {
                      "column": 48,
                      "line": 28
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
                      758,
                      759
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 28
                      },
                      "start": {
                        "column": 43,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  758,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 28
                  },
                  "start": {
                    "column": 43,
                    "line": 28
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        781,
                        782
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 28
                        },
                        "start": {
                          "column": 66,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "range": [
                      777,
                      780
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 28
                      },
                      "start": {
                        "column": 62,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    777,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 28
                    },
                    "start": {
                      "column": 62,
                      "line": 28
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      772,
                      773
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 28
                      },
                      "start": {
                        "column": 57,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  772,
                  783
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 28
                  },
                  "start": {
                    "column": 57,
                    "line": 28
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
                750,
                757
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 28
                },
                "start": {
                  "column": 35,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              750,
              784
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 28
              },
              "start": {
                "column": 35,
                "line": 28
              }
            }
          },
          "range": [
            721,
            784
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        715,
        785
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              },
              "range": [
                795,
                818
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
                          "column": 19,
                          "line": 29
                        },
                        "start": {
                          "column": 16,
                          "line": 29
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
                              "column": 19,
                              "line": 29
                            },
                            "start": {
                              "column": 18,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          804,
                          805
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 29
                          },
                          "start": {
                            "column": 18,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      801,
                      805
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 29
                      },
                      "start": {
                        "column": 15,
                        "line": 29
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 29
                    },
                    "start": {
                      "column": 21,
                      "line": 29
                    }
                  },
                  "range": [
                    807,
                    818
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        813,
                        818
                      ],
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                814,
                                815
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 29
                                },
                                "start": {
                                  "column": 28,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              814,
                              815
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 29
                              },
                              "start": {
                                "column": 28,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            814,
                            817
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 29
                            },
                            "start": {
                              "column": 28,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 29
                        },
                        "start": {
                          "column": 27,
                          "line": 29
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "range": [
                        810,
                        813
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 29
                        },
                        "start": {
                          "column": 24,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      810,
                      818
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 29
                      },
                      "start": {
                        "column": 24,
                        "line": 29
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 29
                    },
                    "start": {
                      "column": 11,
                      "line": 29
                    }
                  },
                  "range": [
                    797,
                    800
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
                          798,
                          799
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 29
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        798,
                        799
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 29
                        },
                        "start": {
                          "column": 12,
                          "line": 29
                        }
                      }
                    }
                  ]
                },
                "range": [
                  797,
                  818
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 29
                  },
                  "start": {
                    "column": 11,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              792,
              818
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "range": [
                  829,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 29
                  },
                  "start": {
                    "column": 43,
                    "line": 29
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "range": [
                  835,
                  838
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 29
                  },
                  "start": {
                    "column": 49,
                    "line": 29
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
                821,
                828
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 29
                },
                "start": {
                  "column": 35,
                  "line": 29
                }
              }
            },
            "optional": false,
            "range": [
              821,
              839
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 29
              },
              "start": {
                "column": 35,
                "line": 29
              }
            }
          },
          "range": [
            792,
            839
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        786,
        840
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              },
              "range": [
                850,
                873
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
                          "column": 26,
                          "line": 30
                        },
                        "start": {
                          "column": 16,
                          "line": 30
                        }
                      },
                      "range": [
                        857,
                        867
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            862,
                            867
                          ],
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
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
                                      "column": 23,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 30
                                    }
                                  }
                                },
                                "range": [
                                  863,
                                  864
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                863,
                                866
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 30
                                },
                                "start": {
                                  "column": 22,
                                  "line": 30
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 30
                            },
                            "start": {
                              "column": 21,
                              "line": 30
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "range": [
                            859,
                            862
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 30
                            },
                            "start": {
                              "column": 18,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          859,
                          867
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 30
                          },
                          "start": {
                            "column": 18,
                            "line": 30
                          }
                        }
                      }
                    },
                    "range": [
                      856,
                      867
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 30
                      },
                      "start": {
                        "column": 15,
                        "line": 30
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 30
                    },
                    "start": {
                      "column": 28,
                      "line": 30
                    }
                  },
                  "range": [
                    869,
                    873
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        872,
                        873
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 30
                        },
                        "start": {
                          "column": 31,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      872,
                      873
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 30
                      },
                      "start": {
                        "column": 31,
                        "line": 30
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 30
                    },
                    "start": {
                      "column": 11,
                      "line": 30
                    }
                  },
                  "range": [
                    852,
                    855
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
                          853,
                          854
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        853,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 30
                        },
                        "start": {
                          "column": 12,
                          "line": 30
                        }
                      }
                    }
                  ]
                },
                "range": [
                  852,
                  873
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 30
                  },
                  "start": {
                    "column": 11,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              847,
              873
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
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
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        895,
                        896
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 30
                        },
                        "start": {
                          "column": 54,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unbox",
                    "optional": false,
                    "range": [
                      889,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 30
                      },
                      "start": {
                        "column": 48,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    889,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 30
                    },
                    "start": {
                      "column": 48,
                      "line": 30
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
                      884,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 30
                      },
                      "start": {
                        "column": 43,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  884,
                  897
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 30
                  },
                  "start": {
                    "column": 43,
                    "line": 30
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        911,
                        912
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 30
                        },
                        "start": {
                          "column": 70,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unlist",
                    "optional": false,
                    "range": [
                      904,
                      910
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 30
                      },
                      "start": {
                        "column": 63,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    904,
                    913
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 30
                    },
                    "start": {
                      "column": 63,
                      "line": 30
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      899,
                      900
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 30
                      },
                      "start": {
                        "column": 58,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  899,
                  913
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 30
                  },
                  "start": {
                    "column": 58,
                    "line": 30
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
                876,
                883
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 30
                },
                "start": {
                  "column": 35,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              876,
              914
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 30
              },
              "start": {
                "column": 35,
                "line": 30
              }
            }
          },
          "range": [
            847,
            914
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        841,
        915
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              },
              "range": [
                925,
                948
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
                          "column": 26,
                          "line": 31
                        },
                        "start": {
                          "column": 16,
                          "line": 31
                        }
                      },
                      "range": [
                        932,
                        942
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            937,
                            942
                          ],
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    938,
                                    939
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 31
                                    }
                                  }
                                },
                                "range": [
                                  938,
                                  939
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 31
                                  }
                                }
                              },
                              "range": [
                                938,
                                941
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 31
                                },
                                "start": {
                                  "column": 22,
                                  "line": 31
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 31
                            },
                            "start": {
                              "column": 21,
                              "line": 31
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "range": [
                            934,
                            937
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 31
                            },
                            "start": {
                              "column": 18,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          934,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 31
                          },
                          "start": {
                            "column": 18,
                            "line": 31
                          }
                        }
                      }
                    },
                    "range": [
                      931,
                      942
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 31
                      },
                      "start": {
                        "column": 15,
                        "line": 31
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 31
                    },
                    "start": {
                      "column": 28,
                      "line": 31
                    }
                  },
                  "range": [
                    944,
                    948
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        947,
                        948
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 31
                        },
                        "start": {
                          "column": 31,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      947,
                      948
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 31
                      },
                      "start": {
                        "column": 31,
                        "line": 31
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 31
                    },
                    "start": {
                      "column": 11,
                      "line": 31
                    }
                  },
                  "range": [
                    927,
                    930
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
                          928,
                          929
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        928,
                        929
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 31
                        },
                        "start": {
                          "column": 12,
                          "line": 31
                        }
                      }
                    }
                  ]
                },
                "range": [
                  927,
                  948
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              922,
              948
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "unbox",
                "optional": false,
                "range": [
                  959,
                  964
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 31
                  },
                  "start": {
                    "column": 43,
                    "line": 31
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "unlist",
                "optional": false,
                "range": [
                  966,
                  972
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 31
                  },
                  "start": {
                    "column": 50,
                    "line": 31
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
                951,
                958
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 31
                },
                "start": {
                  "column": 35,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              951,
              973
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 31
              },
              "start": {
                "column": 35,
                "line": 31
              }
            }
          },
          "range": [
            922,
            973
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        916,
        974
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "arrayMap",
            "optional": false,
            "range": [
              982,
              990
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      1037,
                      1038
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 33
                      },
                      "start": {
                        "column": 61,
                        "line": 33
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
                      1031,
                      1032
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 33
                      },
                      "start": {
                        "column": 55,
                        "line": 33
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
                      1033,
                      1036
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 33
                      },
                      "start": {
                        "column": 57,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    1031,
                    1036
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 33
                    },
                    "start": {
                      "column": 55,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "range": [
                  1031,
                  1039
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 33
                  },
                  "start": {
                    "column": 55,
                    "line": 33
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 33
                      },
                      "start": {
                        "column": 45,
                        "line": 33
                      }
                    },
                    "range": [
                      1021,
                      1026
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1023,
                            1024
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 33
                            },
                            "start": {
                              "column": 47,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          1023,
                          1024
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 33
                          },
                          "start": {
                            "column": 47,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        1023,
                        1026
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 33
                        },
                        "start": {
                          "column": 47,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    1020,
                    1026
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 33
                    },
                    "start": {
                      "column": 44,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                1019,
                1039
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 33
                },
                "start": {
                  "column": 43,
                  "line": 33
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
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 33
                    },
                    "start": {
                      "column": 25,
                      "line": 33
                    }
                  },
                  "range": [
                    1001,
                    1014
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
                              "column": 32,
                              "line": 33
                            },
                            "start": {
                              "column": 29,
                              "line": 33
                            }
                          },
                          "range": [
                            1005,
                            1008
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1007,
                                1008
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 33
                                },
                                "start": {
                                  "column": 31,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              1007,
                              1008
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 33
                              },
                              "start": {
                                "column": 31,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          1004,
                          1008
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 33
                          },
                          "start": {
                            "column": 28,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 33
                        },
                        "start": {
                          "column": 34,
                          "line": 33
                        }
                      },
                      "range": [
                        1010,
                        1014
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            1013,
                            1014
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 33
                            },
                            "start": {
                              "column": 37,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          1013,
                          1014
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 33
                          },
                          "start": {
                            "column": 37,
                            "line": 33
                          }
                        }
                      }
                    },
                    "range": [
                      1003,
                      1014
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
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
                  1000,
                  1014
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 33
                  },
                  "start": {
                    "column": 24,
                    "line": 33
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              },
              "range": [
                993,
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      994,
                      995
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    994,
                    995
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 33
                    },
                    "start": {
                      "column": 18,
                      "line": 33
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
                      997,
                      998
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 33
                      },
                      "start": {
                        "column": 21,
                        "line": 33
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    997,
                    998
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
                    }
                  }
                }
              ]
            },
            "range": [
              993,
              1039
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 33
              },
              "start": {
                "column": 17,
                "line": 33
              }
            }
          },
          "range": [
            982,
            1039
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        976,
        1040
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "arrayFilter",
            "optional": false,
            "range": [
              1047,
              1058
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      1111,
                      1112
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 34
                      },
                      "start": {
                        "column": 70,
                        "line": 34
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
                      1102,
                      1103
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 34
                      },
                      "start": {
                        "column": 61,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "range": [
                      1104,
                      1110
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 34
                      },
                      "start": {
                        "column": 63,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    1102,
                    1110
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 34
                    },
                    "start": {
                      "column": 61,
                      "line": 34
                    }
                  }
                },
                "optional": false,
                "range": [
                  1102,
                  1113
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 34
                  },
                  "start": {
                    "column": 61,
                    "line": 34
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 34
                      },
                      "start": {
                        "column": 51,
                        "line": 34
                      }
                    },
                    "range": [
                      1092,
                      1097
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1094,
                            1095
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 34
                            },
                            "start": {
                              "column": 53,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1094,
                          1095
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 34
                          },
                          "start": {
                            "column": 53,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        1094,
                        1097
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 34
                        },
                        "start": {
                          "column": 53,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    1091,
                    1097
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 34
                    },
                    "start": {
                      "column": 50,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                1090,
                1113
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 34
                },
                "start": {
                  "column": 49,
                  "line": 34
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
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 34
                    },
                    "start": {
                      "column": 25,
                      "line": 34
                    }
                  },
                  "range": [
                    1066,
                    1085
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
                              "column": 32,
                              "line": 34
                            },
                            "start": {
                              "column": 29,
                              "line": 34
                            }
                          },
                          "range": [
                            1070,
                            1073
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1072,
                                1073
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 34
                                },
                                "start": {
                                  "column": 31,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              1072,
                              1073
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 34
                              },
                              "start": {
                                "column": 31,
                                "line": 34
                              }
                            }
                          }
                        },
                        "range": [
                          1069,
                          1073
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 34
                          },
                          "start": {
                            "column": 28,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 34
                        },
                        "start": {
                          "column": 34,
                          "line": 34
                        }
                      },
                      "range": [
                        1075,
                        1085
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1078,
                          1085
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 34
                          },
                          "start": {
                            "column": 37,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      1068,
                      1085
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 34
                      },
                      "start": {
                        "column": 27,
                        "line": 34
                      }
                    }
                  }
                },
                "range": [
                  1065,
                  1085
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 34
                  },
                  "start": {
                    "column": 24,
                    "line": 34
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 34
                },
                "start": {
                  "column": 20,
                  "line": 34
                }
              },
              "range": [
                1061,
                1064
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
                      1062,
                      1063
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 34
                      },
                      "start": {
                        "column": 21,
                        "line": 34
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1062,
                    1063
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 34
                    },
                    "start": {
                      "column": 21,
                      "line": 34
                    }
                  }
                }
              ]
            },
            "range": [
              1061,
              1113
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 34
              },
              "start": {
                "column": 20,
                "line": 34
              }
            }
          },
          "range": [
            1047,
            1113
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1041,
        1114
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "f20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              },
              "range": [
                1125,
                1152
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
                          "column": 23,
                          "line": 36
                        },
                        "start": {
                          "column": 13,
                          "line": 36
                        }
                      },
                      "range": [
                        1129,
                        1139
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            1131,
                            1137
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
                        "range": [
                          1131,
                          1139
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 36
                          },
                          "start": {
                            "column": 15,
                            "line": 36
                          }
                        }
                      }
                    },
                    "range": [
                      1128,
                      1139
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 36
                      },
                      "start": {
                        "column": 12,
                        "line": 36
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 36
                    },
                    "start": {
                      "column": 25,
                      "line": 36
                    }
                  },
                  "range": [
                    1141,
                    1152
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1144,
                        1150
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 36
                        },
                        "start": {
                          "column": 28,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1144,
                      1152
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 36
                      },
                      "start": {
                        "column": 28,
                        "line": 36
                      }
                    }
                  }
                },
                "range": [
                  1127,
                  1152
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 36
                  },
                  "start": {
                    "column": 11,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              1122,
              1152
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 36
              },
              "start": {
                "column": 6,
                "line": 36
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      1169,
                      1170
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 36
                      },
                      "start": {
                        "column": 53,
                        "line": 36
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
                      1171,
                      1177
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 36
                      },
                      "start": {
                        "column": 55,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1169,
                    1177
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 36
                    },
                    "start": {
                      "column": 53,
                      "line": 36
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
                      1164,
                      1165
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 36
                      },
                      "start": {
                        "column": 48,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  1164,
                  1177
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 36
                  },
                  "start": {
                    "column": 48,
                    "line": 36
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayMap",
              "optional": false,
              "range": [
                1155,
                1163
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 36
                },
                "start": {
                  "column": 39,
                  "line": 36
                }
              }
            },
            "optional": false,
            "range": [
              1155,
              1178
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 36
              },
              "start": {
                "column": 39,
                "line": 36
              }
            }
          },
          "range": [
            1122,
            1178
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1116,
        1179
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "f21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              },
              "range": [
                1189,
                1211
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
                          "column": 21,
                          "line": 37
                        },
                        "start": {
                          "column": 16,
                          "line": 37
                        }
                      },
                      "range": [
                        1196,
                        1201
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
                              1198,
                              1199
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
                            1198,
                            1199
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
                          1198,
                          1201
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                      1195,
                      1201
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 37
                      },
                      "start": {
                        "column": 15,
                        "line": 37
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 37
                    },
                    "start": {
                      "column": 23,
                      "line": 37
                    }
                  },
                  "range": [
                    1203,
                    1211
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            1206,
                            1207
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 37
                            },
                            "start": {
                              "column": 26,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          1206,
                          1207
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 37
                          },
                          "start": {
                            "column": 26,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        1206,
                        1209
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 37
                        },
                        "start": {
                          "column": 26,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1206,
                      1211
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 37
                      },
                      "start": {
                        "column": 26,
                        "line": 37
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 37
                    },
                    "start": {
                      "column": 11,
                      "line": 37
                    }
                  },
                  "range": [
                    1191,
                    1194
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
                          1192,
                          1193
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 37
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1192,
                        1193
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 37
                        },
                        "start": {
                          "column": 12,
                          "line": 37
                        }
                      }
                    }
                  ]
                },
                "range": [
                  1191,
                  1211
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 37
                  },
                  "start": {
                    "column": 11,
                    "line": 37
                  }
                }
              }
            },
            "range": [
              1186,
              1211
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
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
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1229,
                        1230
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 37
                        },
                        "start": {
                          "column": 49,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "range": [
                    1228,
                    1231
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 37
                    },
                    "start": {
                      "column": 48,
                      "line": 37
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
                      1223,
                      1224
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 37
                      },
                      "start": {
                        "column": 43,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  1223,
                  1231
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 37
                  },
                  "start": {
                    "column": 43,
                    "line": 37
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayMap",
              "optional": false,
              "range": [
                1214,
                1222
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 37
                },
                "start": {
                  "column": 34,
                  "line": 37
                }
              }
            },
            "optional": false,
            "range": [
              1214,
              1232
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 37
              },
              "start": {
                "column": 34,
                "line": 37
              }
            }
          },
          "range": [
            1186,
            1232
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1180,
        1233
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "f22",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              },
              "range": [
                1243,
                1263
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
                          "column": 21,
                          "line": 38
                        },
                        "start": {
                          "column": 16,
                          "line": 38
                        }
                      },
                      "range": [
                        1250,
                        1255
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
                              1252,
                              1253
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 38
                              },
                              "start": {
                                "column": 18,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            1252,
                            1253
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 38
                            },
                            "start": {
                              "column": 18,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1252,
                          1255
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 38
                          },
                          "start": {
                            "column": 18,
                            "line": 38
                          }
                        }
                      }
                    },
                    "range": [
                      1249,
                      1255
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
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 38
                    },
                    "start": {
                      "column": 23,
                      "line": 38
                    }
                  },
                  "range": [
                    1257,
                    1263
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
                          1260,
                          1261
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
                        1260,
                        1261
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
                      1260,
                      1263
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 38
                      },
                      "start": {
                        "column": 26,
                        "line": 38
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 38
                    },
                    "start": {
                      "column": 11,
                      "line": 38
                    }
                  },
                  "range": [
                    1245,
                    1248
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
                          1246,
                          1247
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 38
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1246,
                        1247
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 38
                        },
                        "start": {
                          "column": 12,
                          "line": 38
                        }
                      }
                    }
                  ]
                },
                "range": [
                  1245,
                  1263
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 38
                  },
                  "start": {
                    "column": 11,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              1240,
              1263
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "range": [
                  1275,
                  1283
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 38
                  },
                  "start": {
                    "column": 41,
                    "line": 38
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayMap",
              "optional": false,
              "range": [
                1266,
                1274
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 38
                },
                "start": {
                  "column": 32,
                  "line": 38
                }
              }
            },
            "optional": false,
            "range": [
              1266,
              1284
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 38
              },
              "start": {
                "column": 32,
                "line": 38
              }
            }
          },
          "range": [
            1240,
            1284
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1234,
        1285
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "f23",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 39
                },
                "start": {
                  "column": 9,
                  "line": 39
                }
              },
              "range": [
                1295,
                1320
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
                          "column": 21,
                          "line": 39
                        },
                        "start": {
                          "column": 16,
                          "line": 39
                        }
                      },
                      "range": [
                        1302,
                        1307
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
                              1304,
                              1305
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 39
                              },
                              "start": {
                                "column": 18,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            1304,
                            1305
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 39
                            },
                            "start": {
                              "column": 18,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          1304,
                          1307
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 39
                          },
                          "start": {
                            "column": 18,
                            "line": 39
                          }
                        }
                      }
                    },
                    "range": [
                      1301,
                      1307
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 39
                      },
                      "start": {
                        "column": 15,
                        "line": 39
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 39
                    },
                    "start": {
                      "column": 23,
                      "line": 39
                    }
                  },
                  "range": [
                    1309,
                    1320
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1315,
                          1318
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
                                1316,
                                1317
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 39
                                },
                                "start": {
                                  "column": 30,
                                  "line": 39
                                }
                              }
                            },
                            "range": [
                              1316,
                              1317
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 39
                              },
                              "start": {
                                "column": 30,
                                "line": 39
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 39
                          },
                          "start": {
                            "column": 29,
                            "line": 39
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Box",
                        "optional": false,
                        "range": [
                          1312,
                          1315
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 39
                          },
                          "start": {
                            "column": 26,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        1312,
                        1318
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 39
                        },
                        "start": {
                          "column": 26,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1312,
                      1320
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 39
                      },
                      "start": {
                        "column": 26,
                        "line": 39
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 39
                    },
                    "start": {
                      "column": 11,
                      "line": 39
                    }
                  },
                  "range": [
                    1297,
                    1300
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
                          1298,
                          1299
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 39
                          },
                          "start": {
                            "column": 12,
                            "line": 39
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1298,
                        1299
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 39
                        },
                        "start": {
                          "column": 12,
                          "line": 39
                        }
                      }
                    }
                  ]
                },
                "range": [
                  1297,
                  1320
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 39
                  },
                  "start": {
                    "column": 11,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              1292,
              1320
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
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
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          1344,
                          1349
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 39
                          },
                          "start": {
                            "column": 58,
                            "line": 39
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          1344,
                          1349
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 39
                          },
                          "start": {
                            "column": 58,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        1344,
                        1349
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 39
                        },
                        "start": {
                          "column": 58,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "range": [
                    1342,
                    1351
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 39
                    },
                    "start": {
                      "column": 56,
                      "line": 39
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
                    "name": "value",
                    "optional": false,
                    "range": [
                      1332,
                      1337
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 39
                      },
                      "start": {
                        "column": 46,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  1332,
                  1352
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 39
                  },
                  "start": {
                    "column": 46,
                    "line": 39
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayMap",
              "optional": false,
              "range": [
                1323,
                1331
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 39
                },
                "start": {
                  "column": 37,
                  "line": 39
                }
              }
            },
            "optional": false,
            "range": [
              1323,
              1353
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 39
              },
              "start": {
                "column": 37,
                "line": 39
              }
            }
          },
          "range": [
            1292,
            1353
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1286,
        1354
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "f30",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 41
                },
                "start": {
                  "column": 9,
                  "line": 41
                }
              },
              "range": [
                1365,
                1392
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
                          "column": 23,
                          "line": 41
                        },
                        "start": {
                          "column": 13,
                          "line": 41
                        }
                      },
                      "range": [
                        1369,
                        1379
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            1371,
                            1377
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 41
                            },
                            "start": {
                              "column": 15,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1371,
                          1379
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 41
                          },
                          "start": {
                            "column": 15,
                            "line": 41
                          }
                        }
                      }
                    },
                    "range": [
                      1368,
                      1379
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 41
                      },
                      "start": {
                        "column": 12,
                        "line": 41
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 41
                    },
                    "start": {
                      "column": 25,
                      "line": 41
                    }
                  },
                  "range": [
                    1381,
                    1392
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        1384,
                        1390
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 41
                        },
                        "start": {
                          "column": 28,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1384,
                      1392
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 41
                      },
                      "start": {
                        "column": 28,
                        "line": 41
                      }
                    }
                  }
                },
                "range": [
                  1367,
                  1392
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 41
                  },
                  "start": {
                    "column": 11,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              1362,
              1392
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 41
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
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1412,
                        1413
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 41
                        },
                        "start": {
                          "column": 56,
                          "line": 41
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
                        1414,
                        1420
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 41
                        },
                        "start": {
                          "column": 58,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1412,
                      1420
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 41
                      },
                      "start": {
                        "column": 56,
                        "line": 41
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      1423,
                      1425
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 41
                      },
                      "start": {
                        "column": 67,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1412,
                    1425
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 41
                    },
                    "start": {
                      "column": 56,
                      "line": 41
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
                      1407,
                      1408
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 41
                      },
                      "start": {
                        "column": 51,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  1407,
                  1425
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 41
                  },
                  "start": {
                    "column": 51,
                    "line": 41
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayFilter",
              "optional": false,
              "range": [
                1395,
                1406
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 41
                },
                "start": {
                  "column": 39,
                  "line": 41
                }
              }
            },
            "optional": false,
            "range": [
              1395,
              1426
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 41
              },
              "start": {
                "column": 39,
                "line": 41
              }
            }
          },
          "range": [
            1362,
            1426
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1356,
        1427
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "f31",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 42
                }
              },
              "range": [
                1437,
                1477
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
                          "column": 41,
                          "line": 42
                        },
                        "start": {
                          "column": 36,
                          "line": 42
                        }
                      },
                      "range": [
                        1464,
                        1469
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1466,
                              1467
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 42
                              },
                              "start": {
                                "column": 38,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            1466,
                            1467
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 42
                            },
                            "start": {
                              "column": 38,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          1466,
                          1469
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 42
                          },
                          "start": {
                            "column": 38,
                            "line": 42
                          }
                        }
                      }
                    },
                    "range": [
                      1463,
                      1469
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 42
                      },
                      "start": {
                        "column": 35,
                        "line": 42
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 42
                    },
                    "start": {
                      "column": 43,
                      "line": 42
                    }
                  },
                  "range": [
                    1471,
                    1477
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1474,
                          1475
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 42
                          },
                          "start": {
                            "column": 46,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        1474,
                        1475
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 42
                        },
                        "start": {
                          "column": 46,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      1474,
                      1477
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 42
                      },
                      "start": {
                        "column": 46,
                        "line": 42
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 42
                    },
                    "start": {
                      "column": 11,
                      "line": 42
                    }
                  },
                  "range": [
                    1439,
                    1462
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
                            1453,
                            1461
                          ],
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                1454,
                                1460
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 42
                                },
                                "start": {
                                  "column": 26,
                                  "line": 42
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 42
                            },
                            "start": {
                              "column": 25,
                              "line": 42
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "range": [
                            1450,
                            1453
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 42
                            },
                            "start": {
                              "column": 22,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          1450,
                          1461
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 42
                          },
                          "start": {
                            "column": 22,
                            "line": 42
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
                          1440,
                          1441
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 42
                          },
                          "start": {
                            "column": 12,
                            "line": 42
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1440,
                        1461
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 42
                        },
                        "start": {
                          "column": 12,
                          "line": 42
                        }
                      }
                    }
                  ]
                },
                "range": [
                  1439,
                  1477
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 42
                  },
                  "start": {
                    "column": 11,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              1434,
              1477
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
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
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1497,
                        1498
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 42
                        },
                        "start": {
                          "column": 69,
                          "line": 42
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        1499,
                        1504
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 42
                        },
                        "start": {
                          "column": 71,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      1497,
                      1504
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 42
                      },
                      "start": {
                        "column": 69,
                        "line": 42
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      1507,
                      1509
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 42
                      },
                      "start": {
                        "column": 79,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1497,
                    1509
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 42
                    },
                    "start": {
                      "column": 69,
                      "line": 42
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
                      1492,
                      1493
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 42
                      },
                      "start": {
                        "column": 64,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  1492,
                  1509
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 42
                  },
                  "start": {
                    "column": 64,
                    "line": 42
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayFilter",
              "optional": false,
              "range": [
                1480,
                1491
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 42
                },
                "start": {
                  "column": 52,
                  "line": 42
                }
              }
            },
            "optional": false,
            "range": [
              1480,
              1510
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 42
              },
              "start": {
                "column": 52,
                "line": 42
              }
            }
          },
          "range": [
            1434,
            1510
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1428,
        1511
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "f40",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 44
                },
                "start": {
                  "column": 9,
                  "line": 44
                }
              },
              "range": [
                1522,
                1552
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
                          "column": 22,
                          "line": 44
                        },
                        "start": {
                          "column": 19,
                          "line": 44
                        }
                      },
                      "range": [
                        1532,
                        1535
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            1534,
                            1535
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 44
                            },
                            "start": {
                              "column": 21,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1534,
                          1535
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 44
                          },
                          "start": {
                            "column": 21,
                            "line": 44
                          }
                        }
                      }
                    },
                    "range": [
                      1531,
                      1535
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 44
                      },
                      "start": {
                        "column": 18,
                        "line": 44
                      }
                    }
                  },
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
                          "line": 44
                        },
                        "start": {
                          "column": 25,
                          "line": 44
                        }
                      },
                      "range": [
                        1538,
                        1541
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            1540,
                            1541
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 44
                            },
                            "start": {
                              "column": 27,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1540,
                          1541
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 44
                          },
                          "start": {
                            "column": 27,
                            "line": 44
                          }
                        }
                      }
                    },
                    "range": [
                      1537,
                      1541
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 44
                      },
                      "start": {
                        "column": 24,
                        "line": 44
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 44
                    },
                    "start": {
                      "column": 30,
                      "line": 44
                    }
                  },
                  "range": [
                    1543,
                    1552
                  ],
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            1547,
                            1548
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 44
                            },
                            "start": {
                              "column": 34,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1547,
                          1548
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 44
                          },
                          "start": {
                            "column": 34,
                            "line": 44
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            1550,
                            1551
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 44
                            },
                            "start": {
                              "column": 37,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1550,
                          1551
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 44
                          },
                          "start": {
                            "column": 37,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "range": [
                      1546,
                      1552
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 44
                      },
                      "start": {
                        "column": 33,
                        "line": 44
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 44
                    },
                    "start": {
                      "column": 11,
                      "line": 44
                    }
                  },
                  "range": [
                    1524,
                    1530
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
                          1525,
                          1526
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 44
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1525,
                        1526
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 44
                        },
                        "start": {
                          "column": 12,
                          "line": 44
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
                          1528,
                          1529
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 44
                          },
                          "start": {
                            "column": 15,
                            "line": 44
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1528,
                        1529
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 44
                        },
                        "start": {
                          "column": 15,
                          "line": 44
                        }
                      }
                    }
                  ]
                },
                "range": [
                  1524,
                  1552
                ],
                "loc": {
                  "end": {
                    "column": 39,
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
              1519,
              1552
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 44
              },
              "start": {
                "column": 6,
                "line": 44
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "zip",
                "optional": false,
                "range": [
                  1560,
                  1563
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 44
                  },
                  "start": {
                    "column": 47,
                    "line": 44
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "flip",
              "optional": false,
              "range": [
                1555,
                1559
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 44
                },
                "start": {
                  "column": 42,
                  "line": 44
                }
              }
            },
            "optional": false,
            "range": [
              1555,
              1564
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 44
              },
              "start": {
                "column": 42,
                "line": 44
              }
            }
          },
          "range": [
            1519,
            1564
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1513,
        1565
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          1594,
          1596
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 48
          },
          "start": {
            "column": 5,
            "line": 48
          }
        }
      },
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
                  "column": 18,
                  "line": 48
                },
                "start": {
                  "column": 15,
                  "line": 48
                }
              },
              "range": [
                1604,
                1607
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1606,
                    1607
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 48
                    },
                    "start": {
                      "column": 17,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1606,
                  1607
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 48
                  },
                  "start": {
                    "column": 17,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              1603,
              1607
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 48
              },
              "start": {
                "column": 14,
                "line": 48
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 24,
              "line": 48
            },
            "start": {
              "column": 20,
              "line": 48
            }
          },
          "range": [
            1609,
            1613
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1612,
                1613
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 48
                },
                "start": {
                  "column": 23,
                  "line": 48
                }
              }
            },
            "range": [
              1612,
              1613
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 48
              },
              "start": {
                "column": 23,
                "line": 48
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 13,
              "line": 48
            },
            "start": {
              "column": 10,
              "line": 48
            }
          },
          "range": [
            1599,
            1602
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
                  1600,
                  1601
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 48
                  },
                  "start": {
                    "column": 11,
                    "line": 48
                  }
                }
              },
              "out": false,
              "range": [
                1600,
                1601
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 48
                },
                "start": {
                  "column": 11,
                  "line": 48
                }
              }
            }
          ]
        },
        "range": [
          1599,
          1613
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 48
          },
          "start": {
            "column": 10,
            "line": 48
          }
        }
      },
      "range": [
        1589,
        1614
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 49
                },
                "start": {
                  "column": 8,
                  "line": 49
                }
              },
              "range": [
                1623,
                1627
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    1625,
                    1627
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1625,
                  1627
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 49
                  },
                  "start": {
                    "column": 10,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              1621,
              1627
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1635,
                1636
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 49
                },
                "start": {
                  "column": 20,
                  "line": 49
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
                  1630,
                  1631
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 49
                  },
                  "start": {
                    "column": 15,
                    "line": 49
                  }
                }
              }
            ],
            "range": [
              1630,
              1636
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 49
              },
              "start": {
                "column": 15,
                "line": 49
              }
            }
          },
          "range": [
            1621,
            1636
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 49
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1615,
        1637
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
