__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    969
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
          305,
          391
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
                311,
                315
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
                316,
                322
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "range": [
                    318,
                    322
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
                  318,
                  322
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
              311,
              322
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
                327,
                332
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
                333,
                343
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropsDef",
                  "optional": false,
                  "range": [
                    335,
                    343
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
                  335,
                  343
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
              327,
              343
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
                348,
                353
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
                354,
                389
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    362,
                    389
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        363,
                        369
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
                          383,
                          388
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              384,
                              387
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
                          371,
                          383
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
                        371,
                        388
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
                    356,
                    362
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
                  356,
                  389
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
              348,
              389
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
          304
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "range": [
                    208,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                },
                {
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
                            "column": 36,
                            "line": 12
                          },
                          "start": {
                            "column": 26,
                            "line": 12
                          }
                        },
                        "range": [
                          223,
                          233
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Instance",
                            "optional": false,
                            "range": [
                              225,
                              233
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 12
                              },
                              "start": {
                                "column": 28,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            225,
                            233
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 12
                            },
                            "start": {
                              "column": 28,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        219,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 12
                        },
                        "start": {
                          "column": 22,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 12
                      },
                      "start": {
                        "column": 38,
                        "line": 12
                      }
                    },
                    "range": [
                      235,
                      244
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        238,
                        244
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 12
                        },
                        "start": {
                          "column": 41,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    218,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 12
                    },
                    "start": {
                      "column": 21,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                208,
                245
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 12
                },
                "start": {
                  "column": 11,
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
              245
            ],
            "loc": {
              "end": {
                "column": 48,
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
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  277,
                  298
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        284,
                        297
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            285,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 13
                            },
                            "start": {
                              "column": 38,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            293,
                            296
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 13
                            },
                            "start": {
                              "column": 46,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 13
                        },
                        "start": {
                          "column": 37,
                          "line": 13
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        278,
                        284
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 13
                        },
                        "start": {
                          "column": 31,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      278,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 13
                      },
                      "start": {
                        "column": 31,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 13
                  },
                  "start": {
                    "column": 30,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropsDefinition",
                "optional": false,
                "range": [
                  262,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "range": [
                262,
                298
              ],
              "loc": {
                "end": {
                  "column": 51,
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
                251,
                259
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
              251,
              298
            ],
            "loc": {
              "end": {
                "column": 51,
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
        391
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
          398,
          410
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
                  422,
                  423
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
              417,
              423
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
                431,
                434
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    433,
                    434
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
                  433,
                  434
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
              425,
              434
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
            436,
            443
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              439,
              443
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
          416,
          443
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
          410,
          413
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
                411,
                412
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
              411,
              412
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
        393,
        444
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
          451,
          467
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
            "type": "TSObjectKeyword",
            "range": [
              487,
              493
            ],
            "loc": {
              "end": {
                "column": 10,
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
                507,
                553
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      515,
                      528
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
                            516,
                            520
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 24
                            },
                            "start": {
                              "column": 20,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          516,
                          520
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
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
                          "name": "Props",
                          "optional": false,
                          "range": [
                            522,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 24
                            },
                            "start": {
                              "column": 26,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          522,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 24
                          },
                          "start": {
                            "column": 26,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 24
                      },
                      "start": {
                        "column": 19,
                        "line": 24
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DataDef",
                    "optional": false,
                    "range": [
                      508,
                      515
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    508,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      545,
                      552
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
                            546,
                            551
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 24
                            },
                            "start": {
                              "column": 50,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          546,
                          551
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 24
                          },
                          "start": {
                            "column": 50,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 24
                      },
                      "start": {
                        "column": 49,
                        "line": 24
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropsDefinition",
                    "optional": false,
                    "range": [
                      530,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 24
                      },
                      "start": {
                        "column": 34,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    530,
                    552
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 24
                    },
                    "start": {
                      "column": 34,
                      "line": 24
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "range": [
                500,
                507
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              500,
              553
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                568,
                603
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
                          569,
                          573
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 25
                          },
                          "start": {
                            "column": 13,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        569,
                        573
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          584,
                          591
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
                                585,
                                590
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 25
                                },
                                "start": {
                                  "column": 29,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              585,
                              590
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 25
                              },
                              "start": {
                                "column": 29,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 25
                          },
                          "start": {
                            "column": 28,
                            "line": 25
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "range": [
                          576,
                          584
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 25
                          },
                          "start": {
                            "column": 20,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        576,
                        591
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 25
                        },
                        "start": {
                          "column": 20,
                          "line": 25
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
                          594,
                          602
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 25
                          },
                          "start": {
                            "column": 38,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        594,
                        602
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 25
                        },
                        "start": {
                          "column": 38,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "range": [
                    569,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 25
                    },
                    "start": {
                      "column": 13,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "range": [
                560,
                568
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              560,
              603
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          487,
          603
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 25
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
          467,
          480
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
                468,
                472
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
              468,
              472
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
                474,
                479
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
              474,
              479
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
        446,
        603
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 25
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
          622,
          626
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
                "column": 68,
                "line": 27
              },
              "start": {
                "column": 37,
                "line": 27
              }
            },
            "range": [
              642,
              673
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  660,
                  673
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
                        661,
                        665
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 27
                        },
                        "start": {
                          "column": 56,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      661,
                      665
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 27
                      },
                      "start": {
                        "column": 56,
                        "line": 27
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
                        667,
                        672
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 27
                        },
                        "start": {
                          "column": 62,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      667,
                      672
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 27
                      },
                      "start": {
                        "column": 62,
                        "line": 27
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 27
                  },
                  "start": {
                    "column": 55,
                    "line": 27
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThisTypedOptions",
                "optional": false,
                "range": [
                  644,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 27
                  },
                  "start": {
                    "column": 39,
                    "line": 27
                  }
                }
              },
              "range": [
                644,
                673
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 27
                },
                "start": {
                  "column": 39,
                  "line": 27
                }
              }
            }
          },
          "range": [
            640,
            673
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 27
            },
            "start": {
              "column": 35,
              "line": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 27
          },
          "start": {
            "column": 69,
            "line": 27
          }
        },
        "range": [
          674,
          680
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            676,
            680
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 27
            },
            "start": {
              "column": 71,
              "line": 27
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 27
          },
          "start": {
            "column": 21,
            "line": 27
          }
        },
        "range": [
          626,
          639
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
                627,
                631
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              627,
              631
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
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
                633,
                638
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 27
                },
                "start": {
                  "column": 28,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              633,
              638
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 27
              },
              "start": {
                "column": 28,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        605,
        681
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
          699,
          703
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
                "line": 28
              },
              "start": {
                "column": 24,
                "line": 28
              }
            },
            "range": [
              706,
              715
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "range": [
                  708,
                  715
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 28
                  },
                  "start": {
                    "column": 26,
                    "line": 28
                  }
                }
              },
              "range": [
                708,
                715
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 28
                },
                "start": {
                  "column": 26,
                  "line": 28
                }
              }
            }
          },
          "range": [
            704,
            715
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 28
            },
            "start": {
              "column": 22,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 28
          },
          "start": {
            "column": 34,
            "line": 28
          }
        },
        "range": [
          716,
          722
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            718,
            722
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 28
            },
            "start": {
              "column": 36,
              "line": 28
            }
          }
        }
      },
      "range": [
        682,
        723
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
                    736,
                    741
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 31
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
                          753,
                          756
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
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
                          758,
                          760
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 32
                          },
                          "start": {
                            "column": 13,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        753,
                        760
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "range": [
                    743,
                    766
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 33
                    },
                    "start": {
                      "column": 11,
                      "line": 31
                    }
                  }
                },
                "range": [
                  736,
                  766
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 31
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
                    773,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
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
                    777,
                    854
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
                                  829,
                                  832
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 37
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
                                  834,
                                  838
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                829,
                                838
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 37
                                },
                                "start": {
                                  "column": 12,
                                  "line": 37
                                }
                              }
                            }
                          ],
                          "range": [
                            815,
                            848
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 38
                            },
                            "start": {
                              "column": 15,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          808,
                          848
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 38
                          },
                          "start": {
                            "column": 8,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "range": [
                      798,
                      854
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 39
                      },
                      "start": {
                        "column": 29,
                        "line": 35
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
                        "line": 35
                      },
                      "start": {
                        "column": 10,
                        "line": 35
                      }
                    },
                    "range": [
                      779,
                      797
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
                              783,
                              786
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 35
                              },
                              "start": {
                                "column": 14,
                                "line": 35
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
                                "line": 35
                              },
                              "start": {
                                "column": 17,
                                "line": 35
                              }
                            },
                            "range": [
                              786,
                              795
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                788,
                                795
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 35
                                },
                                "start": {
                                  "column": 19,
                                  "line": 35
                                }
                              }
                            }
                          },
                          "range": [
                            783,
                            795
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 35
                            },
                            "start": {
                              "column": 14,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        781,
                        797
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 35
                        },
                        "start": {
                          "column": 12,
                          "line": 35
                        }
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "range": [
                  773,
                  854
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 35
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
                    861,
                    866
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
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
                          878,
                          881
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 42
                          },
                          "start": {
                            "column": 8,
                            "line": 42
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
                          881,
                          960
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
                                      934,
                                      938
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 43
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
                                      939,
                                      942
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 43
                                      }
                                    }
                                  },
                                  "range": [
                                    934,
                                    942
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 43
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "false",
                                  "value": false,
                                  "range": [
                                    945,
                                    950
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 43
                                    }
                                  }
                                },
                                "range": [
                                  934,
                                  950
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 43
                                  }
                                }
                              },
                              "range": [
                                934,
                                950
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 43
                                },
                                "start": {
                                  "column": 12,
                                  "line": 43
                                }
                              }
                            }
                          ],
                          "range": [
                            920,
                            960
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 44
                            },
                            "start": {
                              "column": 50,
                              "line": 42
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
                                  "line": 42
                                },
                                "start": {
                                  "column": 18,
                                  "line": 42
                                }
                              },
                              "range": [
                                888,
                                896
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  890,
                                  896
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 42
                                  }
                                }
                              }
                            },
                            "range": [
                              882,
                              896
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 42
                              },
                              "start": {
                                "column": 12,
                                "line": 42
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
                                  "line": 42
                                },
                                "start": {
                                  "column": 34,
                                  "line": 42
                                }
                              },
                              "range": [
                                904,
                                912
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  906,
                                  912
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 42
                                  }
                                }
                              }
                            },
                            "range": [
                              898,
                              912
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 42
                              },
                              "start": {
                                "column": 28,
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
                            913,
                            919
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              915,
                              919
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 42
                              },
                              "start": {
                                "column": 45,
                                "line": 42
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 44
                          },
                          "start": {
                            "column": 11,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        878,
                        960
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 44
                        },
                        "start": {
                          "column": 8,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "range": [
                    868,
                    966
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 45
                    },
                    "start": {
                      "column": 11,
                      "line": 41
                    }
                  }
                },
                "range": [
                  861,
                  966
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              730,
              968
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 46
              },
              "start": {
                "column": 5,
                "line": 30
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
            725,
            729
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          725,
          969
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        725,
        969
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 46
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
