__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    762
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          13,
          30
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
              "name": "value",
              "optional": false,
              "range": [
                19,
                24
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                24,
                27
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    26,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  26,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              19,
              28
            ],
            "loc": {
              "end": {
                "column": 13,
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
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          12
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                10,
                11
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              10,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        30
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
        "name": "Boxified",
        "optional": false,
        "range": [
          37,
          45
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "range": [
              69,
              70
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          "range": [
            63,
            70
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 6
            },
            "start": {
              "column": 10,
              "line": 6
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            58,
            59
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 6
            },
            "start": {
              "column": 5,
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
              76,
              82
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      79,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    79,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
                      "line": 6
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
                      77,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    77,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 6
                    }
                  }
                },
                "range": [
                  77,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              73,
              76
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          },
          "range": [
            73,
            82
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          }
        },
        "range": [
          51,
          85
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        },
        "range": [
          45,
          48
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
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        32,
        85
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
        "name": "boxify",
        "optional": false,
        "range": [
          104,
          110
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 9
              },
              "start": {
                "column": 30,
                "line": 9
              }
            },
            "range": [
              117,
              120
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 9
                  },
                  "start": {
                    "column": 32,
                    "line": 9
                  }
                }
              },
              "range": [
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 9
                },
                "start": {
                  "column": 32,
                  "line": 9
                }
              }
            }
          },
          "range": [
            114,
            120
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
            "column": 47,
            "line": 9
          },
          "start": {
            "column": 34,
            "line": 9
          }
        },
        "range": [
          121,
          134
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              131,
              134
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
                    132,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 9
                    },
                    "start": {
                      "column": 45,
                      "line": 9
                    }
                  }
                },
                "range": [
                  132,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 45,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 9
              },
              "start": {
                "column": 44,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "range": [
              123,
              131
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 9
              },
              "start": {
                "column": 36,
                "line": 9
              }
            }
          },
          "range": [
            123,
            134
          ],
          "loc": {
            "end": {
              "column": 47,
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
          110,
          113
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
                111,
                112
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
              111,
              112
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
        87,
        135
      ],
      "loc": {
        "end": {
          "column": 48,
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
        "name": "unboxify",
        "optional": false,
        "range": [
          153,
          161
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 10
              },
              "start": {
                "column": 32,
                "line": 10
              }
            },
            "range": [
              168,
              181
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  178,
                  181
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
                        179,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 10
                        },
                        "start": {
                          "column": 43,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      179,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 10
                      },
                      "start": {
                        "column": 43,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 10
                  },
                  "start": {
                    "column": 42,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  170,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
                    "line": 10
                  }
                }
              },
              "range": [
                170,
                181
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 10
                },
                "start": {
                  "column": 34,
                  "line": 10
                }
              }
            }
          },
          "range": [
            165,
            181
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 10
            },
            "start": {
              "column": 29,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 10
          },
          "start": {
            "column": 46,
            "line": 10
          }
        },
        "range": [
          182,
          185
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              184,
              185
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 10
              },
              "start": {
                "column": 48,
                "line": 10
              }
            }
          },
          "range": [
            184,
            185
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 10
            },
            "start": {
              "column": 48,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 10
          },
          "start": {
            "column": 25,
            "line": 10
          }
        },
        "range": [
          161,
          164
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
                162,
                163
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              162,
              163
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 26,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        136,
        186
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          204,
          251
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPerfect",
              "optional": false,
              "range": [
                210,
                219
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                  "column": 22,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              },
              "range": [
                219,
                228
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  221,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              210,
              229
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "weight",
              "optional": false,
              "range": [
                234,
                240
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 18,
                  "line": 14
                },
                "start": {
                  "column": 10,
                  "line": 14
                }
              },
              "range": [
                240,
                248
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  242,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 12,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              234,
              249
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 16,
            "line": 12
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bacon",
        "optional": false,
        "range": [
          198,
          203
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "range": [
        188,
        251
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          277,
          334
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPerfect",
              "optional": false,
              "range": [
                283,
                292
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              },
              "range": [
                292,
                306
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    297,
                    306
                  ],
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        298,
                        305
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 18
                        },
                        "start": {
                          "column": 19,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 18
                    },
                    "start": {
                      "column": 18,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "range": [
                    294,
                    297
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
                },
                "range": [
                  294,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 18
                  },
                  "start": {
                    "column": 15,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              283,
              307
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "weight",
              "optional": false,
              "range": [
                312,
                318
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 19
                },
                "start": {
                  "column": 10,
                  "line": 19
                }
              },
              "range": [
                318,
                331
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    323,
                    331
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        324,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 19
                        },
                        "start": {
                          "column": 16,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "range": [
                    320,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                },
                "range": [
                  320,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 19
                  },
                  "start": {
                    "column": 12,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              312,
              332
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 24,
            "line": 17
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxifiedBacon",
        "optional": false,
        "range": [
          263,
          276
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 17
          }
        }
      },
      "range": [
        253,
        334
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 17
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bb",
                  "optional": false,
                  "range": [
                    368,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        380,
                        381
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 23
                        },
                        "start": {
                          "column": 20,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boxify",
                    "optional": false,
                    "range": [
                      373,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    373,
                    382
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  368,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              364,
              383
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 23
              },
              "start": {
                "column": 4,
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
                  "name": "isPerfect",
                  "optional": false,
                  "range": [
                    392,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "range": [
                        404,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 24
                        },
                        "start": {
                          "column": 20,
                          "line": 24
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isPerfect",
                      "optional": false,
                      "range": [
                        407,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 24
                        },
                        "start": {
                          "column": 23,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      404,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 24
                      },
                      "start": {
                        "column": 20,
                        "line": 24
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
                      417,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 24
                      },
                      "start": {
                        "column": 33,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    404,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 24
                    },
                    "start": {
                      "column": 20,
                      "line": 24
                    }
                  }
                },
                "range": [
                  392,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              388,
              423
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 24
              },
              "start": {
                "column": 4,
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
                  "name": "weight",
                  "optional": false,
                  "range": [
                    432,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "range": [
                        441,
                        443
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 25
                        },
                        "start": {
                          "column": 17,
                          "line": 25
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "weight",
                      "optional": false,
                      "range": [
                        444,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 25
                        },
                        "start": {
                          "column": 20,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      441,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
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
                      451,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 25
                      },
                      "start": {
                        "column": 27,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    441,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 25
                    },
                    "start": {
                      "column": 17,
                      "line": 25
                    }
                  }
                },
                "range": [
                  432,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              428,
              457
            ],
            "loc": {
              "end": {
                "column": 33,
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
          358,
          459
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 22,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          345,
          347
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
          }
        }
      },
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
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 22
              }
            },
            "range": [
              349,
              356
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bacon",
                "optional": false,
                "range": [
                  351,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              },
              "range": [
                351,
                356
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              }
            }
          },
          "range": [
            348,
            356
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 22
            },
            "start": {
              "column": 12,
              "line": 22
            }
          }
        }
      ],
      "range": [
        336,
        459
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 22
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
                  "range": [
                    504,
                    505
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
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
                      "name": "bb",
                      "optional": false,
                      "range": [
                        517,
                        519
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 29
                        },
                        "start": {
                          "column": 21,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "range": [
                      508,
                      516
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 29
                      },
                      "start": {
                        "column": 12,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    508,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 29
                    },
                    "start": {
                      "column": 12,
                      "line": 29
                    }
                  }
                },
                "range": [
                  504,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              500,
              521
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 4,
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
                  "name": "bool",
                  "optional": false,
                  "range": [
                    552,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      559,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 30
                      },
                      "start": {
                        "column": 15,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isPerfect",
                    "optional": false,
                    "range": [
                      561,
                      570
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 30
                      },
                      "start": {
                        "column": 17,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    559,
                    570
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
                },
                "range": [
                  552,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              548,
              571
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 30
              },
              "start": {
                "column": 4,
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
                  "name": "weight",
                  "optional": false,
                  "range": [
                    580,
                    586
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
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      589,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 17,
                        "line": 31
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "weight",
                    "optional": false,
                    "range": [
                      591,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 31
                      },
                      "start": {
                        "column": 19,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    589,
                    597
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 31
                    },
                    "start": {
                      "column": 17,
                      "line": 31
                    }
                  }
                },
                "range": [
                  580,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              576,
              598
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          494,
          600
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 33,
            "line": 28
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          470,
          472
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 28
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 28
              },
              "start": {
                "column": 14,
                "line": 28
              }
            },
            "range": [
              475,
              492
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  485,
                  492
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bacon",
                      "optional": false,
                      "range": [
                        486,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 28
                        },
                        "start": {
                          "column": 25,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      486,
                      491
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 28
                      },
                      "start": {
                        "column": 25,
                        "line": 28
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  477,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 28
                  },
                  "start": {
                    "column": 16,
                    "line": 28
                  }
                }
              },
              "range": [
                477,
                492
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              }
            }
          },
          "range": [
            473,
            492
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 28
            },
            "start": {
              "column": 12,
              "line": 28
            }
          }
        }
      ],
      "range": [
        461,
        600
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 28
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
                  "range": [
                    643,
                    644
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "range": [
                        663,
                        665
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 35
                        },
                        "start": {
                          "column": 28,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "range": [
                      647,
                      655
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 35
                      },
                      "start": {
                        "column": 12,
                        "line": 35
                      }
                    }
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      655,
                      662
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bacon",
                          "optional": false,
                          "range": [
                            656,
                            661
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 35
                            },
                            "start": {
                              "column": 21,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          656,
                          661
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 35
                          },
                          "start": {
                            "column": 21,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 35
                      },
                      "start": {
                        "column": 20,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    647,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 35
                    },
                    "start": {
                      "column": 12,
                      "line": 35
                    }
                  }
                },
                "range": [
                  643,
                  666
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              639,
              667
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                  "name": "bool",
                  "optional": false,
                  "range": [
                    713,
                    717
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      720,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 36
                      },
                      "start": {
                        "column": 15,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isPerfect",
                    "optional": false,
                    "range": [
                      722,
                      731
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 36
                      },
                      "start": {
                        "column": 17,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    720,
                    731
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 36
                    },
                    "start": {
                      "column": 15,
                      "line": 36
                    }
                  }
                },
                "range": [
                  713,
                  731
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              709,
              732
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 36
              },
              "start": {
                "column": 4,
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
                  "name": "weight",
                  "optional": false,
                  "range": [
                    741,
                    747
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bb",
                    "optional": false,
                    "range": [
                      750,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 37
                      },
                      "start": {
                        "column": 17,
                        "line": 37
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "weight",
                    "optional": false,
                    "range": [
                      753,
                      759
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 37
                      },
                      "start": {
                        "column": 20,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    750,
                    759
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 37
                    },
                    "start": {
                      "column": 17,
                      "line": 37
                    }
                  }
                },
                "range": [
                  741,
                  759
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              737,
              760
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          633,
          762
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 31,
            "line": 34
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          611,
          613
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 34
              },
              "start": {
                "column": 14,
                "line": 34
              }
            },
            "range": [
              616,
              631
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BoxifiedBacon",
                "optional": false,
                "range": [
                  618,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 34
                  },
                  "start": {
                    "column": 16,
                    "line": 34
                  }
                }
              },
              "range": [
                618,
                631
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 34
                },
                "start": {
                  "column": 16,
                  "line": 34
                }
              }
            }
          },
          "range": [
            614,
            631
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 34
            },
            "start": {
              "column": 12,
              "line": 34
            }
          }
        }
      ],
      "range": [
        602,
        762
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
