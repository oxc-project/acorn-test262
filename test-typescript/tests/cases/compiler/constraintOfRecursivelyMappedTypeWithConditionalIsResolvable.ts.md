__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    752
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          77,
          91
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 20,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Map",
        "optional": false,
        "range": [
          67,
          70
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        },
        "range": [
          70,
          76
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              71,
              72
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 14,
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
              "name": "V",
              "optional": false,
              "range": [
                74,
                75
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              74,
              75
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        91
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
      "type": "ExportNamedDeclaration",
      "range": [
        93,
        141
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableTypes",
          "optional": false,
          "range": [
            105,
            119
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              135,
              140
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  136,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 46,
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
                "column": 47,
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
            "name": "IImmutableMap",
            "optional": false,
            "range": [
              122,
              135
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 29,
                "line": 7
              }
            }
          },
          "range": [
            122,
            140
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 7
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        },
        "range": [
          100,
          141
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 48,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        143,
        238
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableModel",
          "optional": false,
          "range": [
            155,
            169
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
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
                  189,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 9
                  },
                  "start": {
                    "column": 46,
                    "line": 9
                  }
                }
              },
              "range": [
                189,
                190
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 9
                },
                "start": {
                  "column": 46,
                  "line": 9
                }
              }
            },
            "range": [
              183,
              190
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 9
              },
              "start": {
                "column": 40,
                "line": 9
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              178,
              179
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 9
              },
              "start": {
                "column": 35,
                "line": 9
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    195,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 9
                    },
                    "start": {
                      "column": 52,
                      "line": 9
                    }
                  }
                },
                "range": [
                  195,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 9
                  },
                  "start": {
                    "column": 52,
                    "line": 9
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
                    193,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 9
                    },
                    "start": {
                      "column": 50,
                      "line": 9
                    }
                  }
                },
                "range": [
                  193,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 9
                  },
                  "start": {
                    "column": 50,
                    "line": 9
                  }
                }
              },
              "range": [
                193,
                197
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 9
                },
                "start": {
                  "column": 50,
                  "line": 9
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImmutableTypes",
                "optional": false,
                "range": [
                  206,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 9
                  },
                  "start": {
                    "column": 63,
                    "line": 9
                  }
                }
              },
              "range": [
                206,
                220
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 9
                },
                "start": {
                  "column": 63,
                  "line": 9
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                230,
                235
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 9
                },
                "start": {
                  "column": 87,
                  "line": 9
                }
              }
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    225,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 9
                    },
                    "start": {
                      "column": 82,
                      "line": 9
                    }
                  }
                },
                "range": [
                  225,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 9
                  },
                  "start": {
                    "column": 82,
                    "line": 9
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
                    223,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 9
                    },
                    "start": {
                      "column": 80,
                      "line": 9
                    }
                  }
                },
                "range": [
                  223,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 9
                  },
                  "start": {
                    "column": 80,
                    "line": 9
                  }
                }
              },
              "range": [
                223,
                227
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 9
                },
                "start": {
                  "column": 80,
                  "line": 9
                }
              }
            },
            "range": [
              193,
              235
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 9
              },
              "start": {
                "column": 50,
                "line": 9
              }
            }
          },
          "range": [
            175,
            237
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 9
            },
            "start": {
              "column": 32,
              "line": 9
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 26,
              "line": 9
            }
          },
          "range": [
            169,
            172
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
                  170,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                170,
                171
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 27,
                  "line": 9
                }
              }
            }
          ]
        },
        "range": [
          150,
          238
        ],
        "loc": {
          "end": {
            "column": 95,
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
          "column": 95,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        240,
        395
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            325,
            395
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "range": [
                  331,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 12
                      },
                      "start": {
                        "column": 30,
                        "line": 12
                      }
                    },
                    "range": [
                      357,
                      360
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          359,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 12
                          },
                          "start": {
                            "column": 32,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        359,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
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
                    354,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 27,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 12
                      },
                      "start": {
                        "column": 40,
                        "line": 12
                      }
                    },
                    "range": [
                      367,
                      373
                    ],
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
                            371,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 12
                            },
                            "start": {
                              "column": 44,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          371,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 12
                          },
                          "start": {
                            "column": 44,
                            "line": 12
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
                            369,
                            370
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 12
                            },
                            "start": {
                              "column": 42,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          369,
                          370
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 42,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        369,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 12
                        },
                        "start": {
                          "column": 42,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    362,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 12
                    },
                    "start": {
                      "column": 35,
                      "line": 12
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 12
                  },
                  "start": {
                    "column": 47,
                    "line": 12
                  }
                },
                "range": [
                  374,
                  392
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      389,
                      392
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
                            390,
                            391
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 12
                            },
                            "start": {
                              "column": 63,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          390,
                          391
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 12
                          },
                          "start": {
                            "column": 63,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 12
                      },
                      "start": {
                        "column": 62,
                        "line": 12
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IImmutableMap",
                    "optional": false,
                    "range": [
                      376,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 12
                      },
                      "start": {
                        "column": 49,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    376,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 12
                    },
                    "start": {
                      "column": 49,
                      "line": 12
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                },
                "range": [
                  334,
                  353
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
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
                            351,
                            352
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 12
                            },
                            "start": {
                              "column": 24,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          351,
                          352
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 12
                          },
                          "start": {
                            "column": 24,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        345,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 18,
                          "line": 12
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        335,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      335,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ]
              },
              "range": [
                331,
                393
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 85,
              "line": 11
            }
          }
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "range": [
                308,
                311
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 11
                },
                "start": {
                  "column": 68,
                  "line": 11
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                311,
                324
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    312,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 11
                    },
                    "start": {
                      "column": 72,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    320,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 11
                    },
                    "start": {
                      "column": 80,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 11
                },
                "start": {
                  "column": 71,
                  "line": 11
                }
              }
            },
            "range": [
              308,
              324
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 11
              },
              "start": {
                "column": 68,
                "line": 11
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IImmutableMap",
          "optional": false,
          "range": [
            257,
            270
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 59,
              "line": 11
            },
            "start": {
              "column": 30,
              "line": 11
            }
          },
          "range": [
            270,
            299
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
                    295,
                    298
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
                          296,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 11
                          },
                          "start": {
                            "column": 56,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        296,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 11
                        },
                        "start": {
                          "column": 56,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 11
                    },
                    "start": {
                      "column": 55,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImmutableModel",
                  "optional": false,
                  "range": [
                    281,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 11
                    },
                    "start": {
                      "column": 41,
                      "line": 11
                    }
                  }
                },
                "range": [
                  281,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 11
                  },
                  "start": {
                    "column": 41,
                    "line": 11
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
                  271,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 31,
                    "line": 11
                  }
                }
              },
              "out": false,
              "range": [
                271,
                298
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 11
                },
                "start": {
                  "column": 31,
                  "line": 11
                }
              }
            }
          ]
        },
        "range": [
          247,
          395
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        397,
        447
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableTypes2",
          "optional": false,
          "range": [
            409,
            424
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              441,
              446
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  442,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 15
                  },
                  "start": {
                    "column": 45,
                    "line": 15
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 15
              },
              "start": {
                "column": 44,
                "line": 15
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IImmutableMap2",
            "optional": false,
            "range": [
              427,
              441
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 15
              },
              "start": {
                "column": 30,
                "line": 15
              }
            }
          },
          "range": [
            427,
            446
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 15
            },
            "start": {
              "column": 30,
              "line": 15
            }
          }
        },
        "range": [
          404,
          447
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 50,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isImmutableType",
        "optional": false,
        "range": [
          453,
          468
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  475,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                }
              },
              "range": [
                475,
                476
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 27,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            474,
            477
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 16
            },
            "start": {
              "column": 26,
              "line": 16
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImmutableTypes2",
                "optional": false,
                "range": [
                  487,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 16
                  },
                  "start": {
                    "column": 39,
                    "line": 16
                  }
                }
              },
              "range": [
                487,
                502
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 16
                },
                "start": {
                  "column": 39,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            486,
            503
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 16
            },
            "start": {
              "column": 38,
              "line": 16
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            510,
            515
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 16
            },
            "start": {
              "column": 62,
              "line": 16
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              506,
              507
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 16
              },
              "start": {
                "column": 58,
                "line": 16
              }
            }
          },
          "range": [
            506,
            507
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 16
            },
            "start": {
              "column": 58,
              "line": 16
            }
          }
        },
        "range": [
          474,
          515
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 16
          },
          "start": {
            "column": 26,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 16
          },
          "start": {
            "column": 20,
            "line": 16
          }
        },
        "range": [
          468,
          471
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
                469,
                470
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 21,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              469,
              470
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 21,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        448,
        516
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        517,
        592
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableModel2",
          "optional": false,
          "range": [
            529,
            544
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 17
            },
            "start": {
              "column": 12,
              "line": 17
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
                  564,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 17
                  },
                  "start": {
                    "column": 47,
                    "line": 17
                  }
                }
              },
              "range": [
                564,
                565
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 17
                },
                "start": {
                  "column": 47,
                  "line": 17
                }
              }
            },
            "range": [
              558,
              565
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 17
              },
              "start": {
                "column": 41,
                "line": 17
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              553,
              554
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
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                583,
                589
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
                        586,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 17
                        },
                        "start": {
                          "column": 69,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      586,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 17
                      },
                      "start": {
                        "column": 69,
                        "line": 17
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
                        584,
                        585
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 17
                        },
                        "start": {
                          "column": 67,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      584,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 17
                      },
                      "start": {
                        "column": 67,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    584,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 17
                    },
                    "start": {
                      "column": 67,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 17
                },
                "start": {
                  "column": 66,
                  "line": 17
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "isImmutableType",
              "optional": false,
              "range": [
                568,
                583
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 17
                },
                "start": {
                  "column": 51,
                  "line": 17
                }
              }
            },
            "range": [
              568,
              589
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 17
              },
              "start": {
                "column": 51,
                "line": 17
              }
            }
          },
          "range": [
            550,
            591
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 17
            },
            "start": {
              "column": 33,
              "line": 17
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 30,
              "line": 17
            },
            "start": {
              "column": 27,
              "line": 17
            }
          },
          "range": [
            544,
            547
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
                  545,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 17
                  },
                  "start": {
                    "column": 28,
                    "line": 17
                  }
                }
              },
              "out": false,
              "range": [
                545,
                546
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 17
                },
                "start": {
                  "column": 28,
                  "line": 17
                }
              }
            }
          ]
        },
        "range": [
          524,
          592
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 17
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 75,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        593,
        751
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            680,
            751
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "range": [
                  686,
                  689
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 19
                      },
                      "start": {
                        "column": 30,
                        "line": 19
                      }
                    },
                    "range": [
                      712,
                      715
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          714,
                          715
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 19
                          },
                          "start": {
                            "column": 32,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        714,
                        715
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 19
                        },
                        "start": {
                          "column": 32,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    709,
                    715
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 19
                      },
                      "start": {
                        "column": 40,
                        "line": 19
                      }
                    },
                    "range": [
                      722,
                      728
                    ],
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
                            726,
                            727
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
                          726,
                          727
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
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            724,
                            725
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 19
                            },
                            "start": {
                              "column": 42,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          724,
                          725
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 19
                          },
                          "start": {
                            "column": 42,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        724,
                        728
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 19
                        },
                        "start": {
                          "column": 42,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    717,
                    728
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 35,
                      "line": 19
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 19
                  },
                  "start": {
                    "column": 47,
                    "line": 19
                  }
                },
                "range": [
                  729,
                  748
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      745,
                      748
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
                            746,
                            747
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 19
                            },
                            "start": {
                              "column": 64,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          746,
                          747
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 19
                          },
                          "start": {
                            "column": 64,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 19
                      },
                      "start": {
                        "column": 63,
                        "line": 19
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IImmutableMap2",
                    "optional": false,
                    "range": [
                      731,
                      745
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 19
                      },
                      "start": {
                        "column": 49,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    731,
                    748
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 19
                    },
                    "start": {
                      "column": 49,
                      "line": 19
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 19
                  },
                  "start": {
                    "column": 7,
                    "line": 19
                  }
                },
                "range": [
                  689,
                  708
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
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
                            706,
                            707
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
                        "range": [
                          706,
                          707
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
                      "range": [
                        700,
                        707
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 18,
                          "line": 19
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        690,
                        691
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      690,
                      707
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  }
                ]
              },
              "range": [
                686,
                749
              ],
              "loc": {
                "end": {
                  "column": 67,
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
              "column": 87,
              "line": 18
            }
          }
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "range": [
                663,
                666
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 18
                },
                "start": {
                  "column": 70,
                  "line": 18
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                666,
                679
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    667,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 18
                    },
                    "start": {
                      "column": 74,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    675,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 18
                    },
                    "start": {
                      "column": 82,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 18
                },
                "start": {
                  "column": 73,
                  "line": 18
                }
              }
            },
            "range": [
              663,
              679
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 18
              },
              "start": {
                "column": 70,
                "line": 18
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IImmutableMap2",
          "optional": false,
          "range": [
            610,
            624
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 18
            },
            "start": {
              "column": 17,
              "line": 18
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 61,
              "line": 18
            },
            "start": {
              "column": 31,
              "line": 18
            }
          },
          "range": [
            624,
            654
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
                    650,
                    653
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
                          651,
                          652
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 18
                          },
                          "start": {
                            "column": 58,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        651,
                        652
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 18
                        },
                        "start": {
                          "column": 58,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 18
                    },
                    "start": {
                      "column": 57,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImmutableModel2",
                  "optional": false,
                  "range": [
                    635,
                    650
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 18
                    },
                    "start": {
                      "column": 42,
                      "line": 18
                    }
                  }
                },
                "range": [
                  635,
                  653
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 18
                  },
                  "start": {
                    "column": 42,
                    "line": 18
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
                  625,
                  626
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 18
                  },
                  "start": {
                    "column": 32,
                    "line": 18
                  }
                }
              },
              "out": false,
              "range": [
                625,
                653
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 18
                },
                "start": {
                  "column": 32,
                  "line": 18
                }
              }
            }
          ]
        },
        "range": [
          600,
          751
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
