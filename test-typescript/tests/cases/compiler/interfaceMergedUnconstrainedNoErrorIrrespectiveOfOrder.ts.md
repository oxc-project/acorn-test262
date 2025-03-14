__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    30,
    232
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        30,
        232
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  108,
                  148
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "throttle",
                      "optional": false,
                      "range": [
                        118,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
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
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 4
                        }
                      },
                      "range": [
                        128,
                        141
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            138,
                            141
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
                                    "column": 30,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                139,
                                140
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 4
                                },
                                "start": {
                                  "column": 29,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 28,
                              "line": 4
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "range": [
                            130,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          130,
                          141
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      118,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 56,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  66,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 22,
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
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                },
                "range": [
                  74,
                  107
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "range": [
                              89,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 3
                              },
                              "start": {
                                "column": 37,
                                "line": 3
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 3
                              },
                              "start": {
                                "column": 41,
                                "line": 3
                              }
                            },
                            "range": [
                              93,
                              98
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                95,
                                98
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 3
                                },
                                "start": {
                                  "column": 43,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            86,
                            98
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 3
                            },
                            "start": {
                              "column": 34,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 3
                          },
                          "start": {
                            "column": 48,
                            "line": 3
                          }
                        },
                        "range": [
                          100,
                          106
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            103,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 3
                            },
                            "start": {
                              "column": 51,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        85,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 3
                        },
                        "start": {
                          "column": 33,
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
                        75,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      75,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                56,
                148
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
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
                  175,
                  230
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unary",
                      "optional": false,
                      "range": [
                        185,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
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
                          "column": 46,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      },
                      "range": [
                        192,
                        223
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            202,
                            223
                          ],
                          "params": [
                            {
                              "type": "TSFunctionType",
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 7
                                  }
                                },
                                "range": [
                                  206,
                                  222
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      219,
                                      222
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
                                            220,
                                            221
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 44,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 43,
                                              "line": 7
                                            }
                                          }
                                        },
                                        "range": [
                                          220,
                                          221
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 44,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 43,
                                            "line": 7
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReturnType",
                                    "optional": false,
                                    "range": [
                                      209,
                                      219
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    209,
                                    222
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 7
                                    }
                                  }
                                }
                              },
                              "range": [
                                203,
                                222
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 7
                                },
                                "start": {
                                  "column": 26,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 7
                            },
                            "start": {
                              "column": 25,
                              "line": 7
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "range": [
                            194,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 7
                            },
                            "start": {
                              "column": 17,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          194,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 7
                          },
                          "start": {
                            "column": 17,
                            "line": 7
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      185,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
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
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  163,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 22,
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
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 22,
                    "line": 6
                  }
                },
                "range": [
                  171,
                  174
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
                        172,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      172,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  }
                ]
              },
              "range": [
                153,
                230
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            50,
            232
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            47,
            49
          ],
          "decorators": [],
          "name": "ns",
          "optional": false,
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "kind": "namespace",
        "range": [
          37,
          232
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    202
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        202
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  48,
                  103
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unary",
                      "optional": false,
                      "range": [
                        58,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
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
                          "column": 46,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      },
                      "range": [
                        65,
                        96
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            75,
                            96
                          ],
                          "params": [
                            {
                              "type": "TSFunctionType",
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 3
                                  }
                                },
                                "range": [
                                  79,
                                  95
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      92,
                                      95
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
                                            93,
                                            94
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 44,
                                              "line": 3
                                            },
                                            "start": {
                                              "column": 43,
                                              "line": 3
                                            }
                                          }
                                        },
                                        "range": [
                                          93,
                                          94
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 44,
                                            "line": 3
                                          },
                                          "start": {
                                            "column": 43,
                                            "line": 3
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReturnType",
                                    "optional": false,
                                    "range": [
                                      82,
                                      92
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "range": [
                                    82,
                                    95
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
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
                                76,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 3
                                },
                                "start": {
                                  "column": 26,
                                  "line": 3
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 3
                            },
                            "start": {
                              "column": 25,
                              "line": 3
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "range": [
                            67,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 3
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          67,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 3
                          },
                          "start": {
                            "column": 17,
                            "line": 3
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      58,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
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
                    "column": 26,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  36,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 22,
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
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                },
                "range": [
                  44,
                  47
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
                        45,
                        46
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 23,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      45,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
                      }
                    }
                  }
                ]
              },
              "range": [
                26,
                103
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
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  160,
                  200
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "throttle",
                      "optional": false,
                      "range": [
                        170,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
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
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 6
                        },
                        "start": {
                          "column": 18,
                          "line": 6
                        }
                      },
                      "range": [
                        180,
                        193
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            190,
                            193
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
                                  191,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                191,
                                192
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 6
                                },
                                "start": {
                                  "column": 29,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 6
                            },
                            "start": {
                              "column": 28,
                              "line": 6
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "range": [
                            182,
                            190
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          182,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 6
                          },
                          "start": {
                            "column": 20,
                            "line": 6
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      170,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 56,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  118,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                },
                "range": [
                  126,
                  159
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "range": [
                              141,
                              145
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 5
                              },
                              "start": {
                                "column": 37,
                                "line": 5
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 5
                              },
                              "start": {
                                "column": 41,
                                "line": 5
                              }
                            },
                            "range": [
                              145,
                              150
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                147,
                                150
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 5
                                },
                                "start": {
                                  "column": 43,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            138,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 5
                            },
                            "start": {
                              "column": 34,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 5
                          },
                          "start": {
                            "column": 48,
                            "line": 5
                          }
                        },
                        "range": [
                          152,
                          158
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            155,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
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
                        137,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 5
                        },
                        "start": {
                          "column": 33,
                          "line": 5
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
                        127,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      127,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  }
                ]
              },
              "range": [
                108,
                200
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            20,
            202
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            17,
            19
          ],
          "decorators": [],
          "name": "ns",
          "optional": false,
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "kind": "namespace",
        "range": [
          7,
          202
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
