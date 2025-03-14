__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    913
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          19,
          48
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_instanceBrand",
              "optional": false,
              "range": [
                25,
                39
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                39,
                46
              ],
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "range": [
                  41,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              25,
              46
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "range": [
          10,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        48
      ],
      "loc": {
        "end": {
          "column": 1,
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
        "name": "DataDef",
        "optional": false,
        "range": [
          55,
          62
        ],
        "loc": {
          "end": {
            "column": 12,
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
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 5
                },
                "start": {
                  "column": 33,
                  "line": 5
                }
              },
              "range": [
                83,
                111
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        93,
                        100
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "range": [
                              94,
                              99
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 5
                              },
                              "start": {
                                "column": 44,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            94,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 5
                            },
                            "start": {
                              "column": 44,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 5
                        },
                        "start": {
                          "column": 43,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "range": [
                        85,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 5
                        },
                        "start": {
                          "column": 35,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      85,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 5
                      },
                      "start": {
                        "column": 35,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Instance",
                      "optional": false,
                      "range": [
                        103,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 5
                        },
                        "start": {
                          "column": 53,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      103,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 5
                      },
                      "start": {
                        "column": 53,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  85,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 61,
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
              79,
              111
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 5
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 70,
              "line": 5
            },
            "start": {
              "column": 63,
              "line": 5
            }
          },
          "range": [
            113,
            120
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "range": [
                116,
                120
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 5
                },
                "start": {
                  "column": 66,
                  "line": 5
                }
              }
            },
            "range": [
              116,
              120
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 5
              },
              "start": {
                "column": 66,
                "line": 5
              }
            }
          }
        },
        "range": [
          78,
          120
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 5
          },
          "start": {
            "column": 28,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        },
        "range": [
          62,
          75
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "range": [
                63,
                67
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              63,
              67
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 13,
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
              "name": "Props",
              "optional": false,
              "range": [
                69,
                74
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              69,
              74
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 19,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        50,
        120
      ],
      "loc": {
        "end": {
          "column": 70,
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
        "name": "PropsDefinition",
        "optional": false,
        "range": [
          127,
          142
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
                166,
                167
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            },
            "range": [
              166,
              167
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            160,
            167
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 8
            },
            "start": {
              "column": 10,
              "line": 8
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            155,
            156
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 8
            },
            "start": {
              "column": 5,
              "line": 8
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
                172,
                173
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            },
            "range": [
              172,
              173
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 22,
                "line": 8
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
                170,
                171
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            },
            "range": [
              170,
              171
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 20,
                "line": 8
              }
            }
          },
          "range": [
            170,
            174
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        "range": [
          148,
          176
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 26,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        },
        "range": [
          142,
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
              "name": "T",
              "optional": false,
              "range": [
                143,
                144
              ],
              "loc": {
                "end": {
                  "column": 22,
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
              143,
              144
            ],
            "loc": {
              "end": {
                "column": 22,
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
        122,
        176
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          262,
          348
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                268,
                272
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              },
              "range": [
                273,
                279
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "range": [
                    275,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                "range": [
                  275,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              268,
              279
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "range": [
                284,
                289
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              },
              "range": [
                290,
                300
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropsDef",
                  "optional": false,
                  "range": [
                    292,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  292,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              284,
              300
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "watch",
              "optional": false,
              "range": [
                305,
                310
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 17
                },
                "start": {
                  "column": 10,
                  "line": 17
                }
              },
              "range": [
                311,
                346
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    319,
                    346
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        320,
                        326
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 17
                        },
                        "start": {
                          "column": 19,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          340,
                          345
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              341,
                              344
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 17
                              },
                              "start": {
                                "column": 40,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 17
                          },
                          "start": {
                            "column": 39,
                            "line": 17
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WatchHandler",
                        "optional": false,
                        "range": [
                          328,
                          340
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 17
                          },
                          "start": {
                            "column": 27,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        328,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 17
                        },
                        "start": {
                          "column": 27,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 17
                    },
                    "start": {
                      "column": 18,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    313,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "range": [
                  313,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              305,
              346
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Options",
        "optional": false,
        "range": [
          188,
          195
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 5,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 11
          }
        },
        "range": [
          195,
          261
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 17,
                        "line": 12
                      }
                    },
                    "range": [
                      214,
                      224
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Instance",
                        "optional": false,
                        "range": [
                          216,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 12
                          },
                          "start": {
                            "column": 19,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        216,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 19,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    210,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 12
                  },
                  "start": {
                    "column": 29,
                    "line": 12
                  }
                },
                "range": [
                  226,
                  235
                ],
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "range": [
                    229,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 12
                    },
                    "start": {
                      "column": 32,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                209,
                235
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "range": [
                201,
                205
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              201,
              236
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                253,
                255
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsDef",
              "optional": false,
              "range": [
                242,
                250
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              242,
              255
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        178,
        348
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WatchHandler",
        "optional": false,
        "range": [
          355,
          367
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 27,
                  "line": 20
                }
              },
              "range": [
                377,
                380
              ],
              "typeAnnotation": {
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
                      "column": 30,
                      "line": 20
                    },
                    "start": {
                      "column": 29,
                      "line": 20
                    }
                  }
                },
                "range": [
                  379,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 20
                  },
                  "start": {
                    "column": 29,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              374,
              380
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
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "oldVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 20
                },
                "start": {
                  "column": 38,
                  "line": 20
                }
              },
              "range": [
                388,
                391
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    390,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 20
                    },
                    "start": {
                      "column": 40,
                      "line": 20
                    }
                  }
                },
                "range": [
                  390,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 20
                  },
                  "start": {
                    "column": 40,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              382,
              391
            ],
            "loc": {
              "end": {
                "column": 41,
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
              "column": 50,
              "line": 20
            },
            "start": {
              "column": 43,
              "line": 20
            }
          },
          "range": [
            393,
            400
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              396,
              400
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 20
              },
              "start": {
                "column": 46,
                "line": 20
              }
            }
          }
        },
        "range": [
          373,
          400
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 20
          },
          "start": {
            "column": 23,
            "line": 20
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 20
          }
        },
        "range": [
          367,
          370
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
                368,
                369
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 18,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              368,
              369
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 20
              },
              "start": {
                "column": 18,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        350,
        401
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThisTypedOptions",
        "optional": false,
        "range": [
          408,
          424
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                451,
                497
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      459,
                      472
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "range": [
                            460,
                            464
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 23
                            },
                            "start": {
                              "column": 20,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          460,
                          464
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 23
                          },
                          "start": {
                            "column": 20,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "range": [
                            466,
                            471
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 23
                            },
                            "start": {
                              "column": 26,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          466,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 23
                          },
                          "start": {
                            "column": 26,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 23
                      },
                      "start": {
                        "column": 19,
                        "line": 23
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DataDef",
                    "optional": false,
                    "range": [
                      452,
                      459
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    452,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 23
                    },
                    "start": {
                      "column": 12,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      489,
                      496
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "range": [
                            490,
                            495
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 23
                            },
                            "start": {
                              "column": 50,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          490,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 23
                          },
                          "start": {
                            "column": 50,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 23
                      },
                      "start": {
                        "column": 49,
                        "line": 23
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropsDefinition",
                    "optional": false,
                    "range": [
                      474,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 23
                      },
                      "start": {
                        "column": 34,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    474,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 23
                    },
                    "start": {
                      "column": 34,
                      "line": 23
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "range": [
                444,
                451
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              444,
              497
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                512,
                547
              ],
              "params": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "range": [
                          513,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        513,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 24
                        },
                        "start": {
                          "column": 13,
                          "line": 24
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          528,
                          535
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Props",
                              "optional": false,
                              "range": [
                                529,
                                534
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 24
                                },
                                "start": {
                                  "column": 29,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              529,
                              534
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 24
                              },
                              "start": {
                                "column": 29,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 24
                          },
                          "start": {
                            "column": 28,
                            "line": 24
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "range": [
                          520,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 24
                          },
                          "start": {
                            "column": 20,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        520,
                        535
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 24
                        },
                        "start": {
                          "column": 20,
                          "line": 24
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Instance",
                        "optional": false,
                        "range": [
                          538,
                          546
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 24
                          },
                          "start": {
                            "column": 38,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        538,
                        546
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 24
                        },
                        "start": {
                          "column": 38,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "range": [
                    513,
                    546
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "range": [
                504,
                512
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              504,
              547
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          444,
          547
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 24
          },
          "start": {
            "column": 4,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 22
          },
          "start": {
            "column": 21,
            "line": 22
          }
        },
        "range": [
          424,
          437
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "range": [
                425,
                429
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 22
                },
                "start": {
                  "column": 22,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              425,
              429
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 22
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
              "name": "Props",
              "optional": false,
              "range": [
                431,
                436
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 22
                },
                "start": {
                  "column": 28,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              431,
              436
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 22
              },
              "start": {
                "column": 28,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        403,
        547
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
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
        "name": "test",
        "optional": false,
        "range": [
          566,
          570
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
                "line": 26
              },
              "start": {
                "column": 37,
                "line": 26
              }
            },
            "range": [
              586,
              617
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  604,
                  617
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "range": [
                        605,
                        609
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 26
                        },
                        "start": {
                          "column": 56,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      605,
                      609
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 26
                      },
                      "start": {
                        "column": 56,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "range": [
                        611,
                        616
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 26
                        },
                        "start": {
                          "column": 62,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      611,
                      616
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 26
                      },
                      "start": {
                        "column": 62,
                        "line": 26
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 26
                  },
                  "start": {
                    "column": 55,
                    "line": 26
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThisTypedOptions",
                "optional": false,
                "range": [
                  588,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 26
                  },
                  "start": {
                    "column": 39,
                    "line": 26
                  }
                }
              },
              "range": [
                588,
                617
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 26
                },
                "start": {
                  "column": 39,
                  "line": 26
                }
              }
            }
          },
          "range": [
            584,
            617
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 26
            },
            "start": {
              "column": 35,
              "line": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 26
          },
          "start": {
            "column": 69,
            "line": 26
          }
        },
        "range": [
          618,
          624
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            620,
            624
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 26
            },
            "start": {
              "column": 71,
              "line": 26
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 26
          },
          "start": {
            "column": 21,
            "line": 26
          }
        },
        "range": [
          570,
          583
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "range": [
                571,
                575
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 26
                },
                "start": {
                  "column": 22,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              571,
              575
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 26
              },
              "start": {
                "column": 22,
                "line": 26
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
              "name": "Props",
              "optional": false,
              "range": [
                577,
                582
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 26
                },
                "start": {
                  "column": 28,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              577,
              582
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 26
              },
              "start": {
                "column": 28,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        549,
        625
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 26
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          643,
          647
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 27
          },
          "start": {
            "column": 17,
            "line": 27
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
                "column": 33,
                "line": 27
              },
              "start": {
                "column": 24,
                "line": 27
              }
            },
            "range": [
              650,
              659
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "range": [
                  652,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 27
                  },
                  "start": {
                    "column": 26,
                    "line": 27
                  }
                }
              },
              "range": [
                652,
                659
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 27
                },
                "start": {
                  "column": 26,
                  "line": 27
                }
              }
            }
          },
          "range": [
            648,
            659
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
          660,
          666
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            662,
            666
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
      "range": [
        626,
        667
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "range": [
                    680,
                    685
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 30
                    },
                    "start": {
                      "column": 4,
                      "line": 30
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          697,
                          700
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          702,
                          704
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 31
                          },
                          "start": {
                            "column": 13,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        697,
                        704
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "range": [
                    687,
                    710
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 32
                    },
                    "start": {
                      "column": 11,
                      "line": 30
                    }
                  }
                },
                "range": [
                  680,
                  710
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    717,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 34
                    },
                    "start": {
                      "column": 4,
                      "line": 34
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    721,
                    798
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  773,
                                  776
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 36
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "true",
                                "value": true,
                                "range": [
                                  778,
                                  782
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 36
                                  }
                                }
                              },
                              "range": [
                                773,
                                782
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 36
                                },
                                "start": {
                                  "column": 12,
                                  "line": 36
                                }
                              }
                            }
                          ],
                          "range": [
                            759,
                            792
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 37
                            },
                            "start": {
                              "column": 15,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          752,
                          792
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 37
                          },
                          "start": {
                            "column": 8,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "range": [
                      742,
                      798
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 38
                      },
                      "start": {
                        "column": 29,
                        "line": 34
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 34
                      },
                      "start": {
                        "column": 10,
                        "line": 34
                      }
                    },
                    "range": [
                      723,
                      741
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
                            "name": "bar",
                            "optional": false,
                            "range": [
                              727,
                              730
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 34
                              },
                              "start": {
                                "column": 14,
                                "line": 34
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
                                "column": 26,
                                "line": 34
                              },
                              "start": {
                                "column": 17,
                                "line": 34
                              }
                            },
                            "range": [
                              730,
                              739
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                732,
                                739
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 34
                                },
                                "start": {
                                  "column": 19,
                                  "line": 34
                                }
                              }
                            }
                          },
                          "range": [
                            727,
                            739
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 34
                            },
                            "start": {
                              "column": 14,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        725,
                        741
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 34
                        },
                        "start": {
                          "column": 12,
                          "line": 34
                        }
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "range": [
                  717,
                  798
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "watch",
                  "optional": false,
                  "range": [
                    805,
                    810
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 40
                    },
                    "start": {
                      "column": 4,
                      "line": 40
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          822,
                          825
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 41
                          },
                          "start": {
                            "column": 8,
                            "line": 41
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          825,
                          904
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      878,
                                      882
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 42
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 42
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "range": [
                                      883,
                                      886
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 42
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 42
                                      }
                                    }
                                  },
                                  "range": [
                                    878,
                                    886
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 42
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "false",
                                  "value": false,
                                  "range": [
                                    889,
                                    894
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 42
                                    }
                                  }
                                },
                                "range": [
                                  878,
                                  894
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 42
                                  }
                                }
                              },
                              "range": [
                                878,
                                894
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 42
                                },
                                "start": {
                                  "column": 12,
                                  "line": 42
                                }
                              }
                            }
                          ],
                          "range": [
                            864,
                            904
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 43
                            },
                            "start": {
                              "column": 50,
                              "line": 41
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
                            "name": "newVal",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 41
                                },
                                "start": {
                                  "column": 18,
                                  "line": 41
                                }
                              },
                              "range": [
                                832,
                                840
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  834,
                                  840
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 41
                                  }
                                }
                              }
                            },
                            "range": [
                              826,
                              840
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 41
                              },
                              "start": {
                                "column": 12,
                                "line": 41
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldVal",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 41
                                },
                                "start": {
                                  "column": 34,
                                  "line": 41
                                }
                              },
                              "range": [
                                848,
                                856
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  850,
                                  856
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 41
                                  }
                                }
                              }
                            },
                            "range": [
                              842,
                              856
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 41
                              },
                              "start": {
                                "column": 28,
                                "line": 41
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 41
                            },
                            "start": {
                              "column": 43,
                              "line": 41
                            }
                          },
                          "range": [
                            857,
                            863
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              859,
                              863
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 41
                              },
                              "start": {
                                "column": 45,
                                "line": 41
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 43
                          },
                          "start": {
                            "column": 11,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        822,
                        904
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 43
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    }
                  ],
                  "range": [
                    812,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 44
                    },
                    "start": {
                      "column": 11,
                      "line": 40
                    }
                  }
                },
                "range": [
                  805,
                  910
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              }
            ],
            "range": [
              674,
              912
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 45
              },
              "start": {
                "column": 5,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            669,
            673
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          669,
          913
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        669,
        913
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
