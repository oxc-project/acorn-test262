__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    390
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pairs",
        "optional": false,
        "range": [
          27,
          32
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            },
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          },
          "range": [
            53,
            60
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "TKey",
          "optional": false,
          "range": [
            45,
            49
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 4
            },
            "start": {
              "column": 5,
              "line": 4
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  73,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
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
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                },
                "range": [
                  76,
                  82
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "range": [
                      78,
                      82
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
                  "range": [
                    78,
                    82
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
                }
              },
              "range": [
                73,
                83
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  92,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
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
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
                  }
                },
                "range": [
                  97,
                  106
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TKey",
                      "optional": false,
                      "range": [
                        101,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      101,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
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
                        99,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      99,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    99,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                92,
                107
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            63,
            113
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 23,
              "line": 4
            }
          }
        },
        "range": [
          38,
          116
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          32,
          35
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
                33,
                34
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        117
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
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
        "name": "Pair",
        "optional": false,
        "range": [
          124,
          128
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
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
                149,
                150
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 10
                },
                "start": {
                  "column": 30,
                  "line": 10
                }
              }
            },
            "range": [
              149,
              150
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 10
              },
              "start": {
                "column": 30,
                "line": 10
              }
            }
          },
          "range": [
            143,
            150
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 10
            },
            "start": {
              "column": 24,
              "line": 10
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              139,
              142
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
                    140,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 10
                    },
                    "start": {
                      "column": 21,
                      "line": 10
                    }
                  }
                },
                "range": [
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pairs",
            "optional": false,
            "range": [
              134,
              139
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          },
          "range": [
            134,
            142
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 10
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        },
        "range": [
          134,
          151
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        },
        "range": [
          128,
          131
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
                129,
                130
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              129,
              130
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        119,
        152
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "range": [
          159,
          165
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
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
              "name": "foo",
              "optional": false,
              "range": [
                174,
                177
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 7,
                  "line": 13
                }
              },
              "range": [
                177,
                185
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  179,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              174,
              186
            ],
            "loc": {
              "end": {
                "column": 16,
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
              "name": "bar",
              "optional": false,
              "range": [
                191,
                194
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 7,
                  "line": 14
                }
              },
              "range": [
                194,
                202
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  196,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              191,
              203
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          168,
          205
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 14,
            "line": 12
          }
        }
      },
      "range": [
        154,
        206
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "pair1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              },
              "range": [
                240,
                254
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    246,
                    254
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FooBar",
                        "optional": false,
                        "range": [
                          247,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 18
                          },
                          "start": {
                            "column": 16,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        247,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 15,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pair",
                  "optional": false,
                  "range": [
                    242,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 18
                    },
                    "start": {
                      "column": 11,
                      "line": 18
                    }
                  }
                },
                "range": [
                  242,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              235,
              254
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "range": [
                    263,
                    266
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    268,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 19
                    },
                    "start": {
                      "column": 9,
                      "line": 19
                    }
                  }
                },
                "range": [
                  263,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    279,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 20
                    },
                    "start": {
                      "column": 4,
                      "line": 20
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    286,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 20
                    },
                    "start": {
                      "column": 11,
                      "line": 20
                    }
                  }
                },
                "range": [
                  279,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              257,
              289
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 26,
                "line": 18
              }
            }
          },
          "range": [
            235,
            289
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        231,
        290
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "pair2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              },
              "range": [
                324,
                353
              ],
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FooBar",
                      "optional": false,
                      "range": [
                        346,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 24
                        },
                        "start": {
                          "column": 31,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      346,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 24
                      },
                      "start": {
                        "column": 31,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    340,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 24
                    },
                    "start": {
                      "column": 25,
                      "line": 24
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      331,
                      339
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FooBar",
                          "optional": false,
                          "range": [
                            332,
                            338
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 24
                            },
                            "start": {
                              "column": 17,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          332,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 24
                          },
                          "start": {
                            "column": 17,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 24
                      },
                      "start": {
                        "column": 16,
                        "line": 24
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pairs",
                    "optional": false,
                    "range": [
                      326,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    326,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  }
                },
                "range": [
                  326,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 38,
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
              319,
              353
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "range": [
                    362,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    367,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "range": [
                  362,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    378,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 26
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    385,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 26
                    },
                    "start": {
                      "column": 11,
                      "line": 26
                    }
                  }
                },
                "range": [
                  378,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              }
            ],
            "range": [
              356,
              388
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 41,
                "line": 24
              }
            }
          },
          "range": [
            319,
            388
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        315,
        389
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
