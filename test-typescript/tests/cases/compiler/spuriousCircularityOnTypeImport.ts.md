__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    122
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        121
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SelectorMap",
          "optional": false,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 12,
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
                  107,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                107,
                108
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              101,
              108
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "range": [
              94,
              97
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 5,
                "line": 2
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
                "name": "key",
                "optional": false,
                "range": [
                  113,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "range": [
                113,
                116
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
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
                  111,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "range": [
              111,
              117
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          },
          "range": [
            87,
            120
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 87,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 84,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            84
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
                    40,
                    83
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        41,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 41,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "range": [
                              53,
                              59
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 1
                              },
                              "start": {
                                "column": 53,
                                "line": 1
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 1
                              },
                              "start": {
                                "column": 59,
                                "line": 1
                              }
                            },
                            "range": [
                              59,
                              70
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "range": [
                                  61,
                                  68
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 1
                                  }
                                }
                              },
                              "range": [
                                61,
                                70
                              ],
                              "loc": {
                                "end": {
                                  "column": 70,
                                  "line": 1
                                },
                                "start": {
                                  "column": 61,
                                  "line": 1
                                }
                              }
                            }
                          },
                          "range": [
                            50,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 1
                            },
                            "start": {
                              "column": 50,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 1
                          },
                          "start": {
                            "column": 72,
                            "line": 1
                          }
                        },
                        "range": [
                          72,
                          82
                        ],
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "range": [
                            75,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 1
                            },
                            "start": {
                              "column": 75,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        49,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 1
                        },
                        "start": {
                          "column": 49,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 1
                    },
                    "start": {
                      "column": 40,
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
                    34,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 1
                    },
                    "start": {
                      "column": 34,
                      "line": 1
                    }
                  }
                },
                "range": [
                  34,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
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
              "out": false,
              "range": [
                24,
                83
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          121
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
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
    489
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        121
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SelectorMap",
          "optional": false,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 12,
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
                  107,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                107,
                108
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              101,
              108
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "range": [
              94,
              97
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 5,
                "line": 2
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
                "name": "key",
                "optional": false,
                "range": [
                  113,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "range": [
                113,
                116
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
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
                  111,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "range": [
              111,
              117
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          },
          "range": [
            87,
            120
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 87,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 84,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            84
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
                    40,
                    83
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        41,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 41,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "range": [
                              53,
                              59
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 1
                              },
                              "start": {
                                "column": 53,
                                "line": 1
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 1
                              },
                              "start": {
                                "column": 59,
                                "line": 1
                              }
                            },
                            "range": [
                              59,
                              70
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "range": [
                                  61,
                                  68
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 1
                                  }
                                }
                              },
                              "range": [
                                61,
                                70
                              ],
                              "loc": {
                                "end": {
                                  "column": 70,
                                  "line": 1
                                },
                                "start": {
                                  "column": 61,
                                  "line": 1
                                }
                              }
                            }
                          },
                          "range": [
                            50,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 1
                            },
                            "start": {
                              "column": 50,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 1
                          },
                          "start": {
                            "column": 72,
                            "line": 1
                          }
                        },
                        "range": [
                          72,
                          82
                        ],
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "range": [
                            75,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 1
                            },
                            "start": {
                              "column": 75,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        49,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 1
                        },
                        "start": {
                          "column": 49,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 1
                    },
                    "start": {
                      "column": 40,
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
                    34,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 1
                    },
                    "start": {
                      "column": 34,
                      "line": 1
                    }
                  }
                },
                "range": [
                  34,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
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
              "out": false,
              "range": [
                24,
                83
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          121
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        123,
        313
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
                    "line": 5
                  }
                },
                "range": [
                  150,
                  312
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sliceSelectors",
                        "optional": false,
                        "range": [
                          158,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 6
                          },
                          "start": {
                            "column": 4,
                            "line": 6
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
                            "column": 155,
                            "line": 6
                          },
                          "start": {
                            "column": 18,
                            "line": 6
                          }
                        },
                        "range": [
                          172,
                          309
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "selectorsBySlice",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 102,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 93,
                                    "line": 6
                                  }
                                },
                                "range": [
                                  247,
                                  256
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "range": [
                                      249,
                                      256
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 102,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 95,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    249,
                                    256
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 102,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 95,
                                      "line": 6
                                    }
                                  }
                                }
                              },
                              "range": [
                                231,
                                256
                              ],
                              "loc": {
                                "end": {
                                  "column": 102,
                                  "line": 6
                                },
                                "start": {
                                  "column": 77,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 155,
                                "line": 6
                              },
                              "start": {
                                "column": 104,
                                "line": 6
                              }
                            },
                            "range": [
                              258,
                              309
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
                                    "name": "FuncMap",
                                    "optional": false,
                                    "range": [
                                      275,
                                      282
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 128,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 121,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    275,
                                    282
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 128,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 121,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  269,
                                  282
                                ],
                                "loc": {
                                  "end": {
                                    "column": 128,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 115,
                                    "line": 6
                                  }
                                }
                              },
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "range": [
                                  264,
                                  265
                                ],
                                "loc": {
                                  "end": {
                                    "column": 111,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 110,
                                    "line": 6
                                  }
                                }
                              },
                              "nameType": null,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    295,
                                    307
                                  ],
                                  "params": [
                                    {
                                      "type": "TSIndexedAccessType",
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "P",
                                          "optional": false,
                                          "range": [
                                            304,
                                            305
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 151,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 150,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "range": [
                                          304,
                                          305
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 151,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 150,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "objectType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "range": [
                                            296,
                                            303
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 149,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 142,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "range": [
                                          296,
                                          303
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 149,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 142,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "range": [
                                        296,
                                        306
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 152,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 142,
                                          "line": 6
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 153,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 141,
                                      "line": 6
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "range": [
                                    285,
                                    295
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 141,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 131,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  285,
                                  307
                                ],
                                "loc": {
                                  "end": {
                                    "column": 153,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 131,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                261,
                                309
                              ],
                              "loc": {
                                "end": {
                                  "column": 155,
                                  "line": 6
                                },
                                "start": {
                                  "column": 107,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 6
                              },
                              "start": {
                                "column": 20,
                                "line": 6
                              }
                            },
                            "range": [
                              174,
                              230
                            ],
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "const": false,
                                "constraint": {
                                  "type": "TSImportType",
                                  "range": [
                                    191,
                                    229
                                  ],
                                  "argument": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "raw": "'./types'",
                                      "value": "./types",
                                      "range": [
                                        198,
                                        207
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      198,
                                      207
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SelectorMap",
                                    "optional": false,
                                    "range": [
                                      209,
                                      220
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 66,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      220,
                                      229
                                    ],
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "range": [
                                            221,
                                            228
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 74,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 67,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "range": [
                                          221,
                                          228
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 74,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 67,
                                            "line": 6
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 75,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 66,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 6
                                    }
                                  }
                                },
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "FuncMap",
                                  "optional": false,
                                  "range": [
                                    175,
                                    182
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 6
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  175,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 6
                                  }
                                }
                              }
                            ]
                          },
                          "range": [
                            174,
                            309
                          ],
                          "loc": {
                            "end": {
                              "column": 155,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
                            }
                          }
                        }
                      },
                      "range": [
                        158,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 156,
                          "line": 6
                        },
                        "start": {
                          "column": 4,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    152,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                144,
                312
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "init": null,
            "range": [
              144,
              312
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          130,
          313
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        315,
        487
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 9
                  }
                },
                "range": [
                  342,
                  486
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sliceSelectors",
                        "optional": false,
                        "range": [
                          350,
                          364
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 10
                          },
                          "start": {
                            "column": 4,
                            "line": 10
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
                            "column": 137,
                            "line": 10
                          },
                          "start": {
                            "column": 18,
                            "line": 10
                          }
                        },
                        "range": [
                          364,
                          483
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "selectorsBySlice",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 75,
                                    "line": 10
                                  }
                                },
                                "range": [
                                  421,
                                  430
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "range": [
                                      423,
                                      430
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 84,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 77,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    423,
                                    430
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 84,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 77,
                                      "line": 10
                                    }
                                  }
                                }
                              },
                              "range": [
                                405,
                                430
                              ],
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 10
                                },
                                "start": {
                                  "column": 59,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 137,
                                "line": 10
                              },
                              "start": {
                                "column": 86,
                                "line": 10
                              }
                            },
                            "range": [
                              432,
                              483
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
                                    "name": "FuncMap",
                                    "optional": false,
                                    "range": [
                                      449,
                                      456
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 110,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 103,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    449,
                                    456
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 110,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 103,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  443,
                                  456
                                ],
                                "loc": {
                                  "end": {
                                    "column": 110,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 97,
                                    "line": 10
                                  }
                                }
                              },
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "range": [
                                  438,
                                  439
                                ],
                                "loc": {
                                  "end": {
                                    "column": 93,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 92,
                                    "line": 10
                                  }
                                }
                              },
                              "nameType": null,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    469,
                                    481
                                  ],
                                  "params": [
                                    {
                                      "type": "TSIndexedAccessType",
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "P",
                                          "optional": false,
                                          "range": [
                                            478,
                                            479
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 133,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 132,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "range": [
                                          478,
                                          479
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 133,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 132,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "objectType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "range": [
                                            470,
                                            477
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 131,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 124,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "range": [
                                          470,
                                          477
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 131,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 124,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        470,
                                        480
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 134,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 124,
                                          "line": 10
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 135,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 123,
                                      "line": 10
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "range": [
                                    459,
                                    469
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 123,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 113,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  459,
                                  481
                                ],
                                "loc": {
                                  "end": {
                                    "column": 135,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 113,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                435,
                                483
                              ],
                              "loc": {
                                "end": {
                                  "column": 137,
                                  "line": 10
                                },
                                "start": {
                                  "column": 89,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 10
                              },
                              "start": {
                                "column": 20,
                                "line": 10
                              }
                            },
                            "range": [
                              366,
                              404
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
                                      394,
                                      403
                                    ],
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "range": [
                                            395,
                                            402
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 56,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 49,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "range": [
                                          395,
                                          402
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 56,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 49,
                                            "line": 10
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SelectorMap",
                                    "optional": false,
                                    "range": [
                                      383,
                                      394
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    383,
                                    403
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 10
                                    }
                                  }
                                },
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "FuncMap",
                                  "optional": false,
                                  "range": [
                                    367,
                                    374
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 10
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  367,
                                  403
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 10
                                  }
                                }
                              }
                            ]
                          },
                          "range": [
                            366,
                            483
                          ],
                          "loc": {
                            "end": {
                              "column": 137,
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
                        350,
                        484
                      ],
                      "loc": {
                        "end": {
                          "column": 138,
                          "line": 10
                        },
                        "start": {
                          "column": 4,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    344,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                336,
                486
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 9
                }
              }
            },
            "init": null,
            "range": [
              336,
              486
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 21,
                "line": 9
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          322,
          487
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
