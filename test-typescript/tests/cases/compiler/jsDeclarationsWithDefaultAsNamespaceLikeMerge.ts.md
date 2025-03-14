__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    319
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          },
          "range": [
            19,
            25
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              22,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          }
        },
        "range": [
          16,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          47,
          184
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
                      "line": 3
                    }
                  },
                  "range": [
                    77,
                    84
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "range": [
                          79,
                          82
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 3
                          },
                          "start": {
                            "column": 30,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        79,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 3
                        },
                        "start": {
                          "column": 30,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      79,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 30,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  74,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 3
                },
                "start": {
                  "column": 36,
                  "line": 3
                }
              },
              "range": [
                85,
                104
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      95,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 3
                      },
                      "start": {
                        "column": 46,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    95,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 3
                    },
                    "start": {
                      "column": 46,
                      "line": 3
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    90,
                    91
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
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      101,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 3
                      },
                      "start": {
                        "column": 52,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    101,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 3
                    },
                    "start": {
                      "column": 52,
                      "line": 3
                    }
                  }
                },
                "range": [
                  87,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              },
              "range": [
                53,
                73
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      66,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      54,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 3
                      },
                      "start": {
                        "column": 5,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    54,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 5,
                      "line": 3
                    }
                  }
                }
              ]
            },
            "range": [
              53,
              105
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 4
                    },
                    "start": {
                      "column": 44,
                      "line": 4
                    }
                  },
                  "range": [
                    150,
                    155
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "range": [
                        152,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 4
                        },
                        "start": {
                          "column": 46,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      152,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 4
                      },
                      "start": {
                        "column": 46,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  147,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 4
                  },
                  "start": {
                    "column": 41,
                    "line": 4
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 75,
                  "line": 4
                },
                "start": {
                  "column": 50,
                  "line": 4
                }
              },
              "range": [
                156,
                181
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
                      "name": "Map",
                      "optional": false,
                      "range": [
                        172,
                        175
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 4
                        },
                        "start": {
                          "column": 66,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      172,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 4
                      },
                      "start": {
                        "column": 66,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    166,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 4
                    },
                    "start": {
                      "column": 60,
                      "line": 4
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    161,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 4
                    },
                    "start": {
                      "column": 55,
                      "line": 4
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      178,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 4
                      },
                      "start": {
                        "column": 72,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    178,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 4
                    },
                    "start": {
                      "column": 72,
                      "line": 4
                    }
                  }
                },
                "range": [
                  158,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 4
                  },
                  "start": {
                    "column": 52,
                    "line": 4
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              },
              "range": [
                110,
                146
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
                        129,
                        145
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            130,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 4
                            },
                            "start": {
                              "column": 24,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            138,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 4
                            },
                            "start": {
                              "column": 32,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        123,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      123,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "range": [
                      111,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 4
                      },
                      "start": {
                        "column": 5,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    111,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 5,
                      "line": 4
                    }
                  }
                }
              ]
            },
            "range": [
              110,
              182
            ],
            "loc": {
              "end": {
                "column": 76,
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
            "column": 20,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapper",
        "optional": false,
        "range": [
          37,
          43
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        },
        "range": [
          43,
          46
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              44,
              45
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        27,
        184
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
          213,
          248
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapState",
              "optional": false,
              "range": [
                219,
                227
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              },
              "range": [
                227,
                245
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    235,
                    245
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Computed",
                        "optional": false,
                        "range": [
                          236,
                          244
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        236,
                        244
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 7
                        },
                        "start": {
                          "column": 21,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 7
                    },
                    "start": {
                      "column": 20,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "range": [
                    229,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
                    }
                  }
                },
                "range": [
                  229,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              219,
              246
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
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
        "name": "NamespacedMappers",
        "optional": false,
        "range": [
          195,
          212
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        185,
        248
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        249,
        318
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createNamespacedHelpers",
          "optional": false,
          "range": [
            273,
            296
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 9
            },
            "start": {
              "column": 24,
              "line": 9
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 68,
              "line": 9
            },
            "start": {
              "column": 49,
              "line": 9
            }
          },
          "range": [
            298,
            317
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NamespacedMappers",
              "optional": false,
              "range": [
                300,
                317
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 9
                },
                "start": {
                  "column": 51,
                  "line": 9
                }
              }
            },
            "range": [
              300,
              317
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 9
              },
              "start": {
                "column": 51,
                "line": 9
              }
            }
          }
        },
        "range": [
          256,
          318
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 9
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
          "column": 69,
          "line": 9
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
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
