__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    712
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        78
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": true,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "range": [
            20,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              53,
              77
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
                    54,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 1
                    },
                    "start": {
                      "column": 54,
                      "line": 1
                    }
                  }
                },
                "range": [
                  54,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 1
                  },
                  "start": {
                    "column": 54,
                    "line": 1
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    64,
                    76
                  ],
                  "params": [
                    {
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
                            71,
                            72
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 1
                            },
                            "start": {
                              "column": 71,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          71,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 1
                          },
                          "start": {
                            "column": 71,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        65,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 1
                        },
                        "start": {
                          "column": 65,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          74,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 1
                          },
                          "start": {
                            "column": 74,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        74,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 1
                        },
                        "start": {
                          "column": 74,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 1
                    },
                    "start": {
                      "column": 64,
                      "line": 1
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "range": [
                    57,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 1
                    },
                    "start": {
                      "column": 57,
                      "line": 1
                    }
                  }
                },
                "range": [
                  57,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 1
                  },
                  "start": {
                    "column": 57,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 1
              },
              "start": {
                "column": 53,
                "line": 1
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "range": [
              49,
              53
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 1
              },
              "start": {
                "column": 49,
                "line": 1
              }
            }
          },
          "range": [
            49,
            77
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 1
            },
            "start": {
              "column": 49,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          },
          "range": [
            24,
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
                "name": "T",
                "optional": false,
                "range": [
                  25,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                25,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
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
                      44,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    44,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 44,
                      "line": 1
                    }
                  }
                },
                "range": [
                  38,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 38,
                    "line": 1
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
                  28,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                28,
                45
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          78
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 1
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
          "column": 78,
          "line": 1
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
        79,
        174
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": true,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PartialProperties",
          "optional": false,
          "range": [
            99,
            116
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 2
            },
            "start": {
              "column": 20,
              "line": 2
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
                  148,
                  160
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        153,
                        159
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
                                "column": 76,
                                "line": 2
                              },
                              "start": {
                                "column": 75,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            154,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 2
                            },
                            "start": {
                              "column": 75,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              157,
                              158
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 2
                              },
                              "start": {
                                "column": 78,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            157,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 2
                            },
                            "start": {
                              "column": 78,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 2
                        },
                        "start": {
                          "column": 74,
                          "line": 2
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        149,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 2
                        },
                        "start": {
                          "column": 70,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      149,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 2
                      },
                      "start": {
                        "column": 70,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 2
                  },
                  "start": {
                    "column": 69,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  141,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 2
                  },
                  "start": {
                    "column": 62,
                    "line": 2
                  }
                }
              },
              "range": [
                141,
                160
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 2
                },
                "start": {
                  "column": 62,
                  "line": 2
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  167,
                  173
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
                        168,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 2
                        },
                        "start": {
                          "column": 89,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      168,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 2
                      },
                      "start": {
                        "column": 89,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        171,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 2
                        },
                        "start": {
                          "column": 92,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      171,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 2
                      },
                      "start": {
                        "column": 92,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 2
                  },
                  "start": {
                    "column": 88,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "range": [
                  163,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 2
                  },
                  "start": {
                    "column": 84,
                    "line": 2
                  }
                }
              },
              "range": [
                163,
                173
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 2
                },
                "start": {
                  "column": 84,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            141,
            173
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 2
            },
            "start": {
              "column": 62,
              "line": 2
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 59,
              "line": 2
            },
            "start": {
              "column": 37,
              "line": 2
            }
          },
          "range": [
            116,
            138
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
                  117,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 38,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 38,
                  "line": 2
                }
              }
            },
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
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 2
                      },
                      "start": {
                        "column": 57,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 2
                    },
                    "start": {
                      "column": 57,
                      "line": 2
                    }
                  }
                },
                "range": [
                  130,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 51,
                    "line": 2
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
                  120,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                120,
                137
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 41,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          86,
          174
        ],
        "loc": {
          "end": {
            "column": 95,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 95,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        175,
        374
      ],
      "attributes": [],
      "declaration": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      },
                      "range": [
                        262,
                        343
                      ],
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "constraint": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                295,
                                306
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
                                        "column": 46,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 45,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    296,
                                    297
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 6
                                    }
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "\"prop\"",
                                    "value": "prop",
                                    "range": [
                                      299,
                                      305
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    299,
                                    305
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 6
                                },
                                "start": {
                                  "column": 44,
                                  "line": 6
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "range": [
                                278,
                                295
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 6
                                },
                                "start": {
                                  "column": 27,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              278,
                              306
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 6
                              },
                              "start": {
                                "column": 27,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            272,
                            306
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
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
                            267,
                            268
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
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "range": [
                                338,
                                339
                              ],
                              "loc": {
                                "end": {
                                  "column": 88,
                                  "line": 6
                                },
                                "start": {
                                  "column": 87,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              338,
                              339
                            ],
                            "loc": {
                              "end": {
                                "column": 88,
                                "line": 6
                              },
                              "start": {
                                "column": 87,
                                "line": 6
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                326,
                                337
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
                                      327,
                                      328
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 77,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 76,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    327,
                                    328
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 77,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 76,
                                      "line": 6
                                    }
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "\"prop\"",
                                    "value": "prop",
                                    "range": [
                                      330,
                                      336
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 85,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 79,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    330,
                                    336
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 85,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 79,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 86,
                                  "line": 6
                                },
                                "start": {
                                  "column": 75,
                                  "line": 6
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "range": [
                                309,
                                326
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 6
                                },
                                "start": {
                                  "column": 58,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              309,
                              337
                            ],
                            "loc": {
                              "end": {
                                "column": 86,
                                "line": 6
                              },
                              "start": {
                                "column": 58,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            309,
                            340
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 6
                            },
                            "start": {
                              "column": 58,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          264,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 6
                          },
                          "start": {
                            "column": 13,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      261,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        346,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 6
                        },
                        "start": {
                          "column": 95,
                          "line": 6
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        354,
                        357
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 6
                        },
                        "start": {
                          "column": 103,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      346,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 6
                      },
                      "start": {
                        "column": 95,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    261,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 106,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                255,
                358
              ],
              "loc": {
                "end": {
                  "column": 107,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  370,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                363,
                372
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            249,
            374
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 9,
              "line": 5
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething_Actual",
          "optional": false,
          "range": [
            191,
            209
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
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
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              },
              "range": [
                244,
                247
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    246,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                },
                "range": [
                  246,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              243,
              247
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 5
              },
              "start": {
                "column": 3,
                "line": 5
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 2,
              "line": 5
            },
            "start": {
              "column": 34,
              "line": 3
            }
          },
          "range": [
            209,
            242
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "range": [
                        226,
                        230
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
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
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      },
                      "range": [
                        230,
                        238
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          232,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      226,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 4
                      },
                      "start": {
                        "column": 4,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  220,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 5
                  },
                  "start": {
                    "column": 45,
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
                  210,
                  211
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
              "out": false,
              "range": [
                210,
                241
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          182,
          374
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 3
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
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        375,
        540
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
          "name": "doSomething_Expected",
          "optional": false,
          "range": [
            399,
            419
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 9
            },
            "start": {
              "column": 24,
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
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              },
              "range": [
                454,
                457
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    456,
                    457
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 11
                    },
                    "start": {
                      "column": 6,
                      "line": 11
                    }
                  }
                },
                "range": [
                  456,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 11
                  },
                  "start": {
                    "column": 6,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              453,
              457
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 11
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 89,
              "line": 11
            },
            "start": {
              "column": 8,
              "line": 11
            }
          },
          "range": [
            458,
            539
          ],
          "typeAnnotation": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    491,
                    502
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
                          492,
                          493
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 11
                          },
                          "start": {
                            "column": 42,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        492,
                        493
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 11
                        },
                        "start": {
                          "column": 42,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"prop\"",
                        "value": "prop",
                        "range": [
                          495,
                          501
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 11
                          },
                          "start": {
                            "column": 45,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        495,
                        501
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 11
                        },
                        "start": {
                          "column": 45,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 11
                    },
                    "start": {
                      "column": 41,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "range": [
                    474,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 11
                    },
                    "start": {
                      "column": 24,
                      "line": 11
                    }
                  }
                },
                "range": [
                  474,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "range": [
                468,
                502
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                463,
                464
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
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
                  "name": "P",
                  "optional": false,
                  "range": [
                    534,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 11
                    },
                    "start": {
                      "column": 84,
                      "line": 11
                    }
                  }
                },
                "range": [
                  534,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 11
                  },
                  "start": {
                    "column": 84,
                    "line": 11
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    522,
                    533
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
                          523,
                          524
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 11
                          },
                          "start": {
                            "column": 73,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        523,
                        524
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 11
                        },
                        "start": {
                          "column": 73,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"prop\"",
                        "value": "prop",
                        "range": [
                          526,
                          532
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 11
                          },
                          "start": {
                            "column": 76,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        526,
                        532
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 11
                        },
                        "start": {
                          "column": 76,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 11
                    },
                    "start": {
                      "column": 72,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "range": [
                    505,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 11
                    },
                    "start": {
                      "column": 55,
                      "line": 11
                    }
                  }
                },
                "range": [
                  505,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 11
                  },
                  "start": {
                    "column": 55,
                    "line": 11
                  }
                }
              },
              "range": [
                505,
                536
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 11
                },
                "start": {
                  "column": 55,
                  "line": 11
                }
              }
            },
            "range": [
              460,
              539
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 11
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 2,
              "line": 11
            },
            "start": {
              "column": 44,
              "line": 9
            }
          },
          "range": [
            419,
            452
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "range": [
                        436,
                        440
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
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
                          "column": 16,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      },
                      "range": [
                        440,
                        448
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          442,
                          448
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 10
                          },
                          "start": {
                            "column": 10,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      436,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  430,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 11
                  },
                  "start": {
                    "column": 55,
                    "line": 9
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
                  420,
                  421
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
              "out": false,
              "range": [
                420,
                451
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 45,
                  "line": 9
                }
              }
            }
          ]
        },
        "range": [
          382,
          540
        ],
        "loc": {
          "end": {
            "column": 90,
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
          "column": 90,
          "line": 11
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
        542,
        594
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
              "name": "a",
              "optional": false,
              "range": [
                553,
                554
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "init": {
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
                        "name": "prop",
                        "optional": false,
                        "range": [
                          578,
                          582
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 13
                          },
                          "start": {
                            "column": 36,
                            "line": 13
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"test\"",
                        "value": "test",
                        "range": [
                          584,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 13
                          },
                          "start": {
                            "column": 42,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        578,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 13
                        },
                        "start": {
                          "column": 36,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    576,
                    592
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 13
                    },
                    "start": {
                      "column": 34,
                      "line": 13
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething_Actual",
                "optional": false,
                "range": [
                  557,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                557,
                593
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
            "range": [
              553,
              593
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          549,
          594
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 52,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            595,
            596
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            599,
            601
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "range": [
          595,
          601
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        595,
        601
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        642,
        696
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
              "name": "b",
              "optional": false,
              "range": [
                653,
                654
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "init": {
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
                        "name": "prop",
                        "optional": false,
                        "range": [
                          680,
                          684
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 16
                          },
                          "start": {
                            "column": 38,
                            "line": 16
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"test\"",
                        "value": "test",
                        "range": [
                          686,
                          692
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 16
                          },
                          "start": {
                            "column": 44,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        680,
                        692
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 16
                        },
                        "start": {
                          "column": 38,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    678,
                    694
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 16
                    },
                    "start": {
                      "column": 36,
                      "line": 16
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething_Expected",
                "optional": false,
                "range": [
                  657,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 16
                  },
                  "start": {
                    "column": 15,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                657,
                695
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              653,
              695
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          649,
          696
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 54,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            697,
            698
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            701,
            703
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          697,
          703
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        697,
        703
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
