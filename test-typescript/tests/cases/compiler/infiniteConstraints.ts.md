__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    92,
    1579
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "range": [
          97,
          99
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            189,
            190
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 3
            },
            "start": {
              "column": 97,
              "line": 3
            }
          }
        },
        "range": [
          189,
          190
        ],
        "loc": {
          "end": {
            "column": 98,
            "line": 3
          },
          "start": {
            "column": 97,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 94,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        },
        "range": [
          99,
          186
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      124,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 32,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    124,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 32,
                      "line": 3
                    }
                  }
                },
                "range": [
                  118,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
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
                  113,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"val\"",
                    "value": "val",
                    "range": [
                      177,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 3
                      },
                      "start": {
                        "column": 85,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    177,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 3
                    },
                    "start": {
                      "column": 85,
                      "line": 3
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      135,
                      176
                    ],
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              145,
                              157
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
                                    "name": "B",
                                    "optional": false,
                                    "range": [
                                      152,
                                      153
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 60,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "range": [
                                    152,
                                    153
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 61,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  146,
                                  153
                                ],
                                "loc": {
                                  "end": {
                                    "column": 61,
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
                                  "name": "K",
                                  "optional": false,
                                  "range": [
                                    155,
                                    156
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 64,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 63,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  155,
                                  156
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
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
                            "name": "Exclude",
                            "optional": false,
                            "range": [
                              138,
                              145
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 3
                              },
                              "start": {
                                "column": 46,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            138,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 3
                            },
                            "start": {
                              "column": 46,
                              "line": 3
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              136,
                              137
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 3
                              },
                              "start": {
                                "column": 44,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            136,
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 3
                            },
                            "start": {
                              "column": 44,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          136,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 3
                          },
                          "start": {
                            "column": 44,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                162,
                                165
                              ],
                              "loc": {
                                "end": {
                                  "column": 73,
                                  "line": 3
                                },
                                "start": {
                                  "column": 70,
                                  "line": 3
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
                                  "column": 81,
                                  "line": 3
                                },
                                "start": {
                                  "column": 73,
                                  "line": 3
                                }
                              },
                              "range": [
                                165,
                                173
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  167,
                                  173
                                ],
                                "loc": {
                                  "end": {
                                    "column": 81,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 75,
                                    "line": 3
                                  }
                                }
                              }
                            },
                            "range": [
                              162,
                              173
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 3
                              },
                              "start": {
                                "column": 70,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "range": [
                          160,
                          175
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 3
                          },
                          "start": {
                            "column": 68,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 3
                      },
                      "start": {
                        "column": 43,
                        "line": 3
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "range": [
                      128,
                      135
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 3
                      },
                      "start": {
                        "column": 36,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    128,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 3
                    },
                    "start": {
                      "column": 36,
                      "line": 3
                    }
                  }
                },
                "range": [
                  128,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              },
              "range": [
                110,
                185
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                100,
                101
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              100,
              185
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        92,
        191
      ],
      "loc": {
        "end": {
          "column": 99,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          197,
          199
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            263,
            264
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 4
            },
            "start": {
              "column": 71,
              "line": 4
            }
          }
        },
        "range": [
          263,
          264
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 4
          },
          "start": {
            "column": 71,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 68,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        },
        "range": [
          199,
          260
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      224,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 32,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    224,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                },
                "range": [
                  218,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
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
                  213,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"val\"",
                    "value": "val",
                    "range": [
                      251,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 4
                      },
                      "start": {
                        "column": 59,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    251,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 4
                    },
                    "start": {
                      "column": 59,
                      "line": 4
                    }
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        237,
                        249
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
                              "name": "B",
                              "optional": false,
                              "range": [
                                244,
                                245
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 4
                                },
                                "start": {
                                  "column": 52,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              244,
                              245
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 4
                              },
                              "start": {
                                "column": 52,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            238,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 4
                            },
                            "start": {
                              "column": 46,
                              "line": 4
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
                              247,
                              248
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
                          "range": [
                            247,
                            248
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
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 4
                        },
                        "start": {
                          "column": 45,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "range": [
                        230,
                        237
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 4
                        },
                        "start": {
                          "column": 38,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      230,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 4
                      },
                      "start": {
                        "column": 38,
                        "line": 4
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        228,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 4
                        },
                        "start": {
                          "column": 36,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      228,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 36,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    228,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 4
                    },
                    "start": {
                      "column": 36,
                      "line": 4
                    }
                  }
                },
                "range": [
                  228,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 4
                  },
                  "start": {
                    "column": 36,
                    "line": 4
                  }
                }
              },
              "range": [
                210,
                259
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                200,
                201
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              200,
              259
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        192,
        265
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AProp",
        "optional": false,
        "range": [
          295,
          300
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            328,
            329
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 8
            },
            "start": {
              "column": 38,
              "line": 8
            }
          }
        },
        "range": [
          328,
          329
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 8
          },
          "start": {
            "column": 38,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        },
        "range": [
          300,
          325
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      313,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
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
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 24,
                        "line": 8
                      }
                    },
                    "range": [
                      314,
                      322
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        316,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 8
                        },
                        "start": {
                          "column": 26,
                          "line": 8
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
                      "column": 32,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                311,
                324
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
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
                301,
                302
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              301,
              324
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        290,
        329
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
        "name": "myBug",
        "optional": false,
        "range": [
          348,
          353
        ],
        "loc": {
          "end": {
            "column": 22,
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
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 8,
                "line": 12
              },
              "start": {
                "column": 5,
                "line": 12
              }
            },
            "range": [
              432,
              435
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  434,
                  435
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              },
              "range": [
                434,
                435
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              }
            }
          },
          "range": [
            429,
            435
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 12
            },
            "start": {
              "column": 2,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        },
        "range": [
          436,
          439
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              438,
              439
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 12
              }
            }
          },
          "range": [
            438,
            439
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 12
            },
            "start": {
              "column": 11,
              "line": 12
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 22,
            "line": 10
          }
        },
        "range": [
          353,
          428
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                      381,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 26,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    381,
                    382
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 11
                    }
                  }
                },
                "range": [
                  375,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  370,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
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
                        387,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 32,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      387,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 11
                      },
                      "start": {
                        "column": 32,
                        "line": 11
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
                        385,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      385,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 30,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    385,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 30,
                      "line": 11
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      403,
                      412
                    ],
                    "params": [
                      {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              410,
                              411
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 11
                              },
                              "start": {
                                "column": 55,
                                "line": 11
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            410,
                            411
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 11
                            },
                            "start": {
                              "column": 55,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          404,
                          411
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 11
                          },
                          "start": {
                            "column": 49,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 11
                      },
                      "start": {
                        "column": 48,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AProp",
                    "optional": false,
                    "range": [
                      398,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 11
                      },
                      "start": {
                        "column": 43,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    398,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 11
                    },
                    "start": {
                      "column": 43,
                      "line": 11
                    }
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    419,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 11
                    },
                    "start": {
                      "column": 64,
                      "line": 11
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      415,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 11
                      },
                      "start": {
                        "column": 60,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    415,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 11
                    },
                    "start": {
                      "column": 60,
                      "line": 11
                    }
                  }
                },
                "range": [
                  385,
                  424
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
                    "line": 11
                  }
                }
              },
              "range": [
                367,
                426
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 11
                },
                "start": {
                  "column": 12,
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
                357,
                358
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              357,
              426
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        331,
        439
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "out",
            "optional": false,
            "range": [
              447,
              450
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
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
                      "name": "obj1",
                      "optional": false,
                      "range": [
                        460,
                        464
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
                          "line": 14
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              467,
                              468
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 14
                              },
                              "start": {
                                "column": 26,
                                "line": 14
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
                              470,
                              476
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 14
                              },
                              "start": {
                                "column": 29,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            467,
                            476
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 14
                            },
                            "start": {
                              "column": 26,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        466,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 14
                        },
                        "start": {
                          "column": 25,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      460,
                      477
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  459,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "myBug",
              "optional": false,
              "range": [
                453,
                458
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              453,
              479
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 14
              },
              "start": {
                "column": 12,
                "line": 14
              }
            }
          },
          "range": [
            447,
            479
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        441,
        479
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Value",
        "optional": false,
        "range": [
          486,
          491
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            527,
            537
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"val\"",
                "value": "val",
                "range": [
                  528,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 16
                  },
                  "start": {
                    "column": 47,
                    "line": 16
                  }
                }
              },
              "range": [
                528,
                533
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 16
                },
                "start": {
                  "column": 47,
                  "line": 16
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  535,
                  536
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 16
                  },
                  "start": {
                    "column": 54,
                    "line": 16
                  }
                }
              },
              "range": [
                535,
                536
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 16
                },
                "start": {
                  "column": 54,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 16
            },
            "start": {
              "column": 46,
              "line": 16
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            521,
            527
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 16
            },
            "start": {
              "column": 40,
              "line": 16
            }
          }
        },
        "range": [
          521,
          537
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 16
          },
          "start": {
            "column": 40,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        },
        "range": [
          491,
          518
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                502,
                508
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 21,
                  "line": 16
                }
              }
            },
            "default": {
              "type": "TSStringKeyword",
              "range": [
                511,
                517
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                492,
                493
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
            "out": false,
            "range": [
              492,
              517
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        481,
        538
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
        "name": "value",
        "optional": false,
        "range": [
          556,
          561
        ],
        "loc": {
          "end": {
            "column": 22,
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
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 17
              },
              "start": {
                "column": 44,
                "line": 17
              }
            },
            "range": [
              583,
              586
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  585,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 17
                  },
                  "start": {
                    "column": 46,
                    "line": 17
                  }
                }
              },
              "range": [
                585,
                586
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 17
                },
                "start": {
                  "column": 46,
                  "line": 17
                }
              }
            }
          },
          "range": [
            580,
            586
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 17
            },
            "start": {
              "column": 41,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 17
          },
          "start": {
            "column": 48,
            "line": 17
          }
        },
        "range": [
          587,
          597
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              594,
              597
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
                    595,
                    596
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 17
                    },
                    "start": {
                      "column": 56,
                      "line": 17
                    }
                  }
                },
                "range": [
                  595,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 17
                  },
                  "start": {
                    "column": 56,
                    "line": 17
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 17
              },
              "start": {
                "column": 55,
                "line": 17
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Value",
            "optional": false,
            "range": [
              589,
              594
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 17
              },
              "start": {
                "column": 50,
                "line": 17
              }
            }
          },
          "range": [
            589,
            597
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 17
            },
            "start": {
              "column": 50,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 17
          },
          "start": {
            "column": 22,
            "line": 17
          }
        },
        "range": [
          561,
          579
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                572,
                578
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 17
                },
                "start": {
                  "column": 33,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                562,
                563
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 23,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              562,
              578
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 17
              },
              "start": {
                "column": 23,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        539,
        598
      ],
      "loc": {
        "end": {
          "column": 59,
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
        "name": "ensureNoDuplicates",
        "optional": false,
        "range": [
          617,
          635
        ],
        "loc": {
          "end": {
            "column": 35,
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
          "name": "vals",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 9,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            },
            "range": [
              789,
              792
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  791,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              "range": [
                791,
                792
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            }
          },
          "range": [
            785,
            792
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 25
            },
            "start": {
              "column": 2,
              "line": 25
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 16,
            "line": 25
          },
          "start": {
            "column": 10,
            "line": 25
          }
        },
        "range": [
          793,
          799
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            795,
            799
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 25
            },
            "start": {
              "column": 12,
              "line": 25
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 35,
            "line": 19
          }
        },
        "range": [
          635,
          784
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                      667,
                      668
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 21
                      },
                      "start": {
                        "column": 16,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    667,
                    668
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  }
                },
                "range": [
                  661,
                  668
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  656,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 21
                  },
                  "start": {
                    "column": 5,
                    "line": 21
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"val\"",
                      "value": "val",
                      "range": [
                        692,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 21
                        },
                        "start": {
                          "column": 41,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      692,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 21
                      },
                      "start": {
                        "column": 41,
                        "line": 21
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        678,
                        691
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
                                681,
                                682
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 21
                                },
                                "start": {
                                  "column": 30,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              681,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 21
                              },
                              "start": {
                                "column": 30,
                                "line": 21
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
                                679,
                                680
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
                            "range": [
                              679,
                              680
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
                          "range": [
                            679,
                            683
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 21
                            },
                            "start": {
                              "column": 28,
                              "line": 21
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "range": [
                              685,
                              690
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 21
                              },
                              "start": {
                                "column": 34,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            685,
                            690
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 21
                            },
                            "start": {
                              "column": 34,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 21
                        },
                        "start": {
                          "column": 27,
                          "line": 21
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "range": [
                        671,
                        678
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 20,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      671,
                      691
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    671,
                    698
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 21
                    }
                  }
                },
                "extendsType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"val\"",
                      "value": "val",
                      "range": [
                        746,
                        751
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 21
                        },
                        "start": {
                          "column": 95,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      746,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 21
                      },
                      "start": {
                        "column": 95,
                        "line": 21
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        714,
                        745
                      ],
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                724,
                                736
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
                                        731,
                                        732
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 81,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 80,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "range": [
                                      731,
                                      732
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 80,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "range": [
                                    725,
                                    732
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 74,
                                      "line": 21
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
                                      734,
                                      735
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 84,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "range": [
                                    734,
                                    735
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 84,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 21
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 85,
                                  "line": 21
                                },
                                "start": {
                                  "column": 73,
                                  "line": 21
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Exclude",
                              "optional": false,
                              "range": [
                                717,
                                724
                              ],
                              "loc": {
                                "end": {
                                  "column": 73,
                                  "line": 21
                                },
                                "start": {
                                  "column": 66,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              717,
                              736
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 21
                              },
                              "start": {
                                "column": 66,
                                "line": 21
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
                                715,
                                716
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
                              715,
                              716
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
                            715,
                            737
                          ],
                          "loc": {
                            "end": {
                              "column": 86,
                              "line": 21
                            },
                            "start": {
                              "column": 64,
                              "line": 21
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "range": [
                              739,
                              744
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 21
                              },
                              "start": {
                                "column": 88,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            739,
                            744
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 21
                            },
                            "start": {
                              "column": 88,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 21
                        },
                        "start": {
                          "column": 63,
                          "line": 21
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "range": [
                        707,
                        714
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 21
                        },
                        "start": {
                          "column": 56,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      707,
                      745
                    ],
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 21
                      },
                      "start": {
                        "column": 56,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    707,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 21
                    },
                    "start": {
                      "column": 56,
                      "line": 21
                    }
                  }
                },
                "falseType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    775,
                    778
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    761,
                    766
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "range": [
                  671,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 23
                  },
                  "start": {
                    "column": 20,
                    "line": 21
                  }
                }
              },
              "range": [
                649,
                782
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 20
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
                639,
                640
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              639,
              782
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        600,
        800
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 25
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
            "name": "noError",
            "optional": false,
            "range": [
              808,
              815
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
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
                      "name": "main",
                      "optional": false,
                      "range": [
                        838,
                        842
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
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"test\"",
                          "value": "test",
                          "range": [
                            850,
                            856
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 27
                            },
                            "start": {
                              "column": 48,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          844,
                          849
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 27
                          },
                          "start": {
                            "column": 42,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        844,
                        857
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 27
                        },
                        "start": {
                          "column": 42,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      838,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 27
                      },
                      "start": {
                        "column": 36,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alternate",
                      "optional": false,
                      "range": [
                        859,
                        868
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 27
                        },
                        "start": {
                          "column": 57,
                          "line": 27
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"test2\"",
                          "value": "test2",
                          "range": [
                            876,
                            883
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 27
                            },
                            "start": {
                              "column": 74,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          870,
                          875
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 27
                          },
                          "start": {
                            "column": 68,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        870,
                        884
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 27
                        },
                        "start": {
                          "column": 68,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      859,
                      884
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 27
                      },
                      "start": {
                        "column": 57,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  837,
                  885
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 27
                  },
                  "start": {
                    "column": 35,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "range": [
                818,
                836
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 27
                },
                "start": {
                  "column": 16,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              818,
              886
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 27
              },
              "start": {
                "column": 16,
                "line": 27
              }
            }
          },
          "range": [
            808,
            886
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        802,
        887
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "shouldBeNoError",
            "optional": false,
            "range": [
              895,
              910
            ],
            "loc": {
              "end": {
                "column": 21,
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
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "main",
                      "optional": false,
                      "range": [
                        933,
                        937
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 29
                        },
                        "start": {
                          "column": 44,
                          "line": 29
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"test\"",
                          "value": "test",
                          "range": [
                            945,
                            951
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 29
                            },
                            "start": {
                              "column": 56,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          939,
                          944
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 29
                          },
                          "start": {
                            "column": 50,
                            "line": 29
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        939,
                        952
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 29
                        },
                        "start": {
                          "column": 50,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      933,
                      952
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 29
                      },
                      "start": {
                        "column": 44,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  932,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 29
                  },
                  "start": {
                    "column": 43,
                    "line": 29
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "range": [
                913,
                931
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 29
                },
                "start": {
                  "column": 24,
                  "line": 29
                }
              }
            },
            "optional": false,
            "range": [
              913,
              954
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 29
              },
              "start": {
                "column": 24,
                "line": 29
              }
            }
          },
          "range": [
            895,
            954
          ],
          "loc": {
            "end": {
              "column": 65,
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
        889,
        955
      ],
      "loc": {
        "end": {
          "column": 66,
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
            "name": "shouldBeError",
            "optional": false,
            "range": [
              963,
              976
            ],
            "loc": {
              "end": {
                "column": 19,
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
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "main",
                      "optional": false,
                      "range": [
                        999,
                        1003
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 31
                        },
                        "start": {
                          "column": 42,
                          "line": 31
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"dup\"",
                          "value": "dup",
                          "range": [
                            1011,
                            1016
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 31
                            },
                            "start": {
                              "column": 54,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          1005,
                          1010
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 31
                          },
                          "start": {
                            "column": 48,
                            "line": 31
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1005,
                        1017
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 31
                        },
                        "start": {
                          "column": 48,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      999,
                      1017
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 31
                      },
                      "start": {
                        "column": 42,
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
                      "name": "alternate",
                      "optional": false,
                      "range": [
                        1019,
                        1028
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 31
                        },
                        "start": {
                          "column": 62,
                          "line": 31
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"dup\"",
                          "value": "dup",
                          "range": [
                            1036,
                            1041
                          ],
                          "loc": {
                            "end": {
                              "column": 84,
                              "line": 31
                            },
                            "start": {
                              "column": 79,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          1030,
                          1035
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 31
                          },
                          "start": {
                            "column": 73,
                            "line": 31
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1030,
                        1042
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 31
                        },
                        "start": {
                          "column": 73,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      1019,
                      1042
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 31
                      },
                      "start": {
                        "column": 62,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  998,
                  1043
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 31
                  },
                  "start": {
                    "column": 41,
                    "line": 31
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "range": [
                979,
                997
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 31
                },
                "start": {
                  "column": 22,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              979,
              1044
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 31
              },
              "start": {
                "column": 22,
                "line": 31
              }
            }
          },
          "range": [
            963,
            1044
          ],
          "loc": {
            "end": {
              "column": 87,
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
        957,
        1045
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cond",
        "optional": false,
        "range": [
          1074,
          1078
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1084,
              1085
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 35
              },
              "start": {
                "column": 15,
                "line": 35
              }
            }
          },
          "range": [
            1084,
            1085
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 35
            },
            "start": {
              "column": 15,
              "line": 35
            }
          }
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "range": [
            1094,
            1100
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 35
            },
            "start": {
              "column": 25,
              "line": 35
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            1112,
            1117
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 35
            },
            "start": {
              "column": 43,
              "line": 35
            }
          }
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "range": [
            1103,
            1109
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 35
            },
            "start": {
              "column": 34,
              "line": 35
            }
          }
        },
        "range": [
          1084,
          1117
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 35
          },
          "start": {
            "column": 15,
            "line": 35
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
          }
        },
        "range": [
          1078,
          1081
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
                1079,
                1080
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 35
                },
                "start": {
                  "column": 10,
                  "line": 35
                }
              }
            },
            "out": false,
            "range": [
              1079,
              1080
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 35
              },
              "start": {
                "column": 10,
                "line": 35
              }
            }
          }
        ]
      },
      "range": [
        1069,
        1118
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
        "name": "function1",
        "optional": false,
        "range": [
          1136,
          1145
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 87,
            "line": 36
          },
          "start": {
            "column": 68,
            "line": 36
          }
        },
        "range": [
          1187,
          1206
        ],
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                1200,
                1205
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 36
                },
                "start": {
                  "column": 81,
                  "line": 36
                }
              }
            },
            "range": [
              1200,
              1205
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 36
              },
              "start": {
                "column": 81,
                "line": 36
              }
            }
          },
          "objectType": {
            "type": "TSIndexedAccessType",
            "indexType": {
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
                    1197,
                    1198
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 36
                    },
                    "start": {
                      "column": 78,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1197,
                  1198
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 36
                  },
                  "start": {
                    "column": 78,
                    "line": 36
                  }
                }
              },
              "range": [
                1191,
                1198
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 36
                },
                "start": {
                  "column": 72,
                  "line": 36
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
                  1189,
                  1190
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 36
                  },
                  "start": {
                    "column": 70,
                    "line": 36
                  }
                }
              },
              "range": [
                1189,
                1190
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 36
                },
                "start": {
                  "column": 70,
                  "line": 36
                }
              }
            },
            "range": [
              1189,
              1199
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 36
              },
              "start": {
                "column": 70,
                "line": 36
              }
            }
          },
          "range": [
            1189,
            1206
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 36
            },
            "start": {
              "column": 70,
              "line": 36
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 66,
            "line": 36
          },
          "start": {
            "column": 26,
            "line": 36
          }
        },
        "range": [
          1145,
          1185
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                      1169,
                      1170
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 36
                      },
                      "start": {
                        "column": 50,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1169,
                    1170
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 36
                    },
                    "start": {
                      "column": 50,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1163,
                  1170
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 36
                  },
                  "start": {
                    "column": 44,
                    "line": 36
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  1158,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 36
                  },
                  "start": {
                    "column": 39,
                    "line": 36
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1177,
                    1183
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
                            1180,
                            1181
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 36
                            },
                            "start": {
                              "column": 61,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1180,
                          1181
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 36
                          },
                          "start": {
                            "column": 61,
                            "line": 36
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
                            1178,
                            1179
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 36
                            },
                            "start": {
                              "column": 59,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1178,
                          1179
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 36
                          },
                          "start": {
                            "column": 59,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        1178,
                        1182
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 36
                        },
                        "start": {
                          "column": 59,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 36
                    },
                    "start": {
                      "column": 58,
                      "line": 36
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cond",
                  "optional": false,
                  "range": [
                    1173,
                    1177
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 36
                    },
                    "start": {
                      "column": 54,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1173,
                  1183
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 36
                  },
                  "start": {
                    "column": 54,
                    "line": 36
                  }
                }
              },
              "range": [
                1156,
                1184
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 36
                },
                "start": {
                  "column": 37,
                  "line": 36
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
                1146,
                1147
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 36
                },
                "start": {
                  "column": 27,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              1146,
              1184
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 36
              },
              "start": {
                "column": 27,
                "line": 36
              }
            }
          }
        ]
      },
      "range": [
        1119,
        1207
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1231,
        1399
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prepend",
          "optional": false,
          "range": [
            1243,
            1250
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 40
            },
            "start": {
              "column": 12,
              "line": 40
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1281,
                1282
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 41
                },
                "start": {
                  "column": 2,
                  "line": 41
                }
              }
            },
            "range": [
              1281,
              1282
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 41
              }
            }
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "range": [
              1291,
              1298
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 41
              },
              "start": {
                "column": 12,
                "line": 41
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1393,
              1398
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 44
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 42
                      },
                      "start": {
                        "column": 7,
                        "line": 42
                      }
                    },
                    "range": [
                      1308,
                      1313
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Elm",
                        "optional": false,
                        "range": [
                          1310,
                          1313
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 42
                          },
                          "start": {
                            "column": 9,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        1310,
                        1313
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 42
                        },
                        "start": {
                          "column": 9,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    1305,
                    1313
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "range": [
                      1318,
                      1322
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 42
                      },
                      "start": {
                        "column": 17,
                        "line": 42
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 42
                      },
                      "start": {
                        "column": 21,
                        "line": 42
                      }
                    },
                    "range": [
                      1322,
                      1325
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1324,
                          1325
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
                      "range": [
                        1324,
                        1325
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
                    }
                  },
                  "range": [
                    1315,
                    1325
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 42
                    },
                    "start": {
                      "column": 14,
                      "line": 42
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 42
                  },
                  "start": {
                    "column": 26,
                    "line": 42
                  }
                },
                "range": [
                  1327,
                  1334
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1330,
                    1334
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 42
                    },
                    "start": {
                      "column": 29,
                      "line": 42
                    }
                  }
                }
              },
              "range": [
                1304,
                1334
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 42
                },
                "start": {
                  "column": 3,
                  "line": 42
                }
              }
            },
            "extendsType": {
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
                      1349,
                      1353
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 42
                      },
                      "start": {
                        "column": 48,
                        "line": 42
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 42
                      },
                      "start": {
                        "column": 52,
                        "line": 42
                      }
                    },
                    "range": [
                      1353,
                      1363
                    ],
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T2",
                          "optional": false,
                          "range": [
                            1361,
                            1363
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 42
                            },
                            "start": {
                              "column": 60,
                              "line": 42
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          1361,
                          1363
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 42
                          },
                          "start": {
                            "column": 60,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        1355,
                        1363
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 42
                        },
                        "start": {
                          "column": 54,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    1346,
                    1363
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 42
                    },
                    "start": {
                      "column": 45,
                      "line": 42
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 42
                  },
                  "start": {
                    "column": 64,
                    "line": 42
                  }
                },
                "range": [
                  1365,
                  1372
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1368,
                    1372
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 42
                    },
                    "start": {
                      "column": 67,
                      "line": 42
                    }
                  }
                }
              },
              "range": [
                1345,
                1372
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 42
                },
                "start": {
                  "column": 44,
                  "line": 42
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                1383,
                1388
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 43
                },
                "start": {
                  "column": 2,
                  "line": 43
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  1376,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 42
                  },
                  "start": {
                    "column": 75,
                    "line": 42
                  }
                }
              },
              "range": [
                1376,
                1378
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 42
                },
                "start": {
                  "column": 75,
                  "line": 42
                }
              }
            },
            "range": [
              1303,
              1388
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 43
              },
              "start": {
                "column": 2,
                "line": 42
              }
            }
          },
          "range": [
            1281,
            1398
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 44
            },
            "start": {
              "column": 2,
              "line": 41
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 45,
              "line": 40
            },
            "start": {
              "column": 19,
              "line": 40
            }
          },
          "range": [
            1250,
            1276
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Elm",
                "optional": false,
                "range": [
                  1251,
                  1254
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 40
                  },
                  "start": {
                    "column": 20,
                    "line": 40
                  }
                }
              },
              "out": false,
              "range": [
                1251,
                1254
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 40
                },
                "start": {
                  "column": 20,
                  "line": 40
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    1266,
                    1273
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 40
                    },
                    "start": {
                      "column": 35,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1266,
                  1275
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 40
                  },
                  "start": {
                    "column": 35,
                    "line": 40
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
                  1256,
                  1257
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 40
                  },
                  "start": {
                    "column": 25,
                    "line": 40
                  }
                }
              },
              "out": false,
              "range": [
                1256,
                1275
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 40
                },
                "start": {
                  "column": 25,
                  "line": 40
                }
              }
            }
          ]
        },
        "range": [
          1238,
          1399
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 40
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 8,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1400,
        1479
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExactExtract",
          "optional": false,
          "range": [
            1412,
            1424
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 45
            },
            "start": {
              "column": 12,
              "line": 45
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1433,
                1434
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 45
                },
                "start": {
                  "column": 33,
                  "line": 45
                }
              }
            },
            "range": [
              1433,
              1434
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 45
              },
              "start": {
                "column": 33,
                "line": 45
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1443,
                1444
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 45
                },
                "start": {
                  "column": 43,
                  "line": 45
                }
              }
            },
            "range": [
              1443,
              1444
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 45
              },
              "start": {
                "column": 43,
                "line": 45
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1473,
              1478
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 45
              },
              "start": {
                "column": 73,
                "line": 45
              }
            }
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  1447,
                  1448
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 45
                  },
                  "start": {
                    "column": 47,
                    "line": 45
                  }
                }
              },
              "range": [
                1447,
                1448
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 45
                },
                "start": {
                  "column": 47,
                  "line": 45
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1457,
                  1458
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 45
                  },
                  "start": {
                    "column": 57,
                    "line": 45
                  }
                }
              },
              "range": [
                1457,
                1458
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 45
                },
                "start": {
                  "column": 57,
                  "line": 45
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                1465,
                1470
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 45
                },
                "start": {
                  "column": 65,
                  "line": 45
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
                  1461,
                  1462
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 45
                  },
                  "start": {
                    "column": 61,
                    "line": 45
                  }
                }
              },
              "range": [
                1461,
                1462
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 45
                },
                "start": {
                  "column": 61,
                  "line": 45
                }
              }
            },
            "range": [
              1447,
              1470
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 45
              },
              "start": {
                "column": 47,
                "line": 45
              }
            }
          },
          "range": [
            1433,
            1478
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 45
            },
            "start": {
              "column": 33,
              "line": 45
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 30,
              "line": 45
            },
            "start": {
              "column": 24,
              "line": 45
            }
          },
          "range": [
            1424,
            1430
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
                  1425,
                  1426
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 45
                  },
                  "start": {
                    "column": 25,
                    "line": 45
                  }
                }
              },
              "out": false,
              "range": [
                1425,
                1426
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 45
                },
                "start": {
                  "column": 25,
                  "line": 45
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
                  1428,
                  1429
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 45
                  },
                  "start": {
                    "column": 28,
                    "line": 45
                  }
                }
              },
              "out": false,
              "range": [
                1428,
                1429
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 45
                },
                "start": {
                  "column": 28,
                  "line": 45
                }
              }
            }
          ]
        },
        "range": [
          1407,
          1479
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 45
          },
          "start": {
            "column": 7,
            "line": 45
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 79,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Conv",
        "optional": false,
        "range": [
          1486,
          1490
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 47
          },
          "start": {
            "column": 5,
            "line": 47
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1557,
                1558
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 48
                },
                "start": {
                  "column": 54,
                  "line": 48
                }
              }
            },
            "range": [
              1557,
              1558
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 48
              },
              "start": {
                "column": 54,
                "line": 48
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1567,
                1568
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 48
                },
                "start": {
                  "column": 64,
                  "line": 48
                }
              }
            },
            "range": [
              1567,
              1568
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 48
              },
              "start": {
                "column": 64,
                "line": 48
              }
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1575,
                1576
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 48
                },
                "start": {
                  "column": 72,
                  "line": 48
                }
              }
            },
            "range": [
              1575,
              1576
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 48
              },
              "start": {
                "column": 72,
                "line": 48
              }
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1571,
                1572
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 48
                },
                "start": {
                  "column": 68,
                  "line": 48
                }
              }
            },
            "range": [
              1571,
              1572
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 48
              },
              "start": {
                "column": 68,
                "line": 48
              }
            }
          },
          "range": [
            1557,
            1576
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 48
            },
            "start": {
              "column": 54,
              "line": 48
            }
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1507,
                  1508
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
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
                    "column": 10,
                    "line": 48
                  },
                  "start": {
                    "column": 5,
                    "line": 48
                  }
                },
                "range": [
                  1508,
                  1513
                ],
                "typeAnnotation": {
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
                          1511,
                          1512
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 48
                          },
                          "start": {
                            "column": 8,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        1511,
                        1512
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "range": [
                    1510,
                    1513
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 48
                    },
                    "start": {
                      "column": 7,
                      "line": 48
                    }
                  }
                }
              },
              "range": [
                1507,
                1514
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1515,
                  1516
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 48
                  },
                  "start": {
                    "column": 12,
                    "line": 48
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
                    "column": 51,
                    "line": 48
                  },
                  "start": {
                    "column": 13,
                    "line": 48
                  }
                },
                "range": [
                  1516,
                  1554
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1525,
                      1554
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
                            1526,
                            1527
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
                          1526,
                          1527
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
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1533,
                            1553
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1546,
                                  1552
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "range": [
                                        1547,
                                        1548
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 48
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 48
                                        }
                                      }
                                    },
                                    "range": [
                                      1547,
                                      1548
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 48
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1550,
                                        1551
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 48
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 48
                                        }
                                      }
                                    },
                                    "range": [
                                      1550,
                                      1551
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 48
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 48
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExactExtract",
                                "optional": false,
                                "range": [
                                  1534,
                                  1546
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 48
                                  }
                                }
                              },
                              "range": [
                                1534,
                                1552
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 48
                                },
                                "start": {
                                  "column": 31,
                                  "line": 48
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 48
                            },
                            "start": {
                              "column": 30,
                              "line": 48
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Conv",
                          "optional": false,
                          "range": [
                            1529,
                            1533
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 48
                            },
                            "start": {
                              "column": 26,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          1529,
                          1553
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 48
                          },
                          "start": {
                            "column": 26,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 48
                      },
                      "start": {
                        "column": 22,
                        "line": 48
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prepend",
                    "optional": false,
                    "range": [
                      1518,
                      1525
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 48
                      },
                      "start": {
                        "column": 15,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1518,
                    1554
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 48
                    },
                    "start": {
                      "column": 15,
                      "line": 48
                    }
                  }
                }
              },
              "range": [
                1515,
                1555
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 48
                }
              }
            }
          ],
          "range": [
            1505,
            1556
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 48
            },
            "start": {
              "column": 2,
              "line": 48
            }
          }
        },
        "range": [
          1505,
          1577
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 48
          },
          "start": {
            "column": 2,
            "line": 48
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 47
          },
          "start": {
            "column": 9,
            "line": 47
          }
        },
        "range": [
          1490,
          1500
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
                1491,
                1492
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 47
                },
                "start": {
                  "column": 10,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              1491,
              1492
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 47
              },
              "start": {
                "column": 10,
                "line": 47
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1498,
                  1499
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 47
                  },
                  "start": {
                    "column": 17,
                    "line": 47
                  }
                }
              },
              "range": [
                1498,
                1499
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 47
                },
                "start": {
                  "column": 17,
                  "line": 47
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1494,
                1495
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 47
                },
                "start": {
                  "column": 13,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              1494,
              1499
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 47
              },
              "start": {
                "column": 13,
                "line": 47
              }
            }
          }
        ]
      },
      "range": [
        1481,
        1578
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 49
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
