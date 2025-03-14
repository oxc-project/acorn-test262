__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2096
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              "name": "value",
              "optional": false,
              "range": [
                14,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
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
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                27
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  21,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ],
        "range": [
          12,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
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
        "name": "ItemMap",
        "optional": false,
        "range": [
          36,
          43
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
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
                63,
                64
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            },
            "range": [
              63,
              64
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 32,
                "line": 2
              }
            }
          },
          "range": [
            57,
            64
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 26,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            52,
            53
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Item",
            "optional": false,
            "range": [
              67,
              71
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 2
              },
              "start": {
                "column": 36,
                "line": 2
              }
            }
          },
          "range": [
            67,
            71
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 2
            },
            "start": {
              "column": 36,
              "line": 2
            }
          }
        },
        "range": [
          49,
          73
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 2
          },
          "start": {
            "column": 12,
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
              "name": "T",
              "optional": false,
              "range": [
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
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
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        31,
        74
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "x0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                90,
                101
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    98,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  }
                },
                "range": [
                  92,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              88,
              101
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            88,
            101
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        76,
        102
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              },
              "range": [
                117,
                139
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSAnyKeyword",
                  "range": [
                    127,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    122,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 5
                    },
                    "start": {
                      "column": 19,
                      "line": 5
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "range": [
                      133,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 30,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    133,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 30,
                      "line": 5
                    }
                  }
                },
                "range": [
                  119,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              115,
              139
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            115,
            139
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        103,
        140
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              },
              "range": [
                155,
                180
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSStringKeyword",
                  "range": [
                    165,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
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
                    160,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 6
                    },
                    "start": {
                      "column": 19,
                      "line": 6
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "range": [
                      174,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 6
                      },
                      "start": {
                        "column": 33,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    174,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 6
                    },
                    "start": {
                      "column": 33,
                      "line": 6
                    }
                  }
                },
                "range": [
                  157,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 6
                  },
                  "start": {
                    "column": 16,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              153,
              180
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            153,
            180
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        141,
        181
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              },
              "range": [
                196,
                224
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      212,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    206,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 24,
                      "line": 7
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    201,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "range": [
                      218,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 7
                      },
                      "start": {
                        "column": 36,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    218,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
                    }
                  }
                },
                "range": [
                  198,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              194,
              224
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            194,
            224
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        182,
        225
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
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
                    249,
                    254
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        250,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 8
                        },
                        "start": {
                          "column": 24,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ItemMap",
                  "optional": false,
                  "range": [
                    242,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                "range": [
                  242,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              238,
              254
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            238,
            254
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        226,
        255
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "range": [
          284,
          288
        ],
        "loc": {
          "end": {
            "column": 9,
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
              "name": "value",
              "optional": false,
              "range": [
                295,
                300
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 13
                },
                "start": {
                  "column": 2,
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
                300,
                308
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  302,
                  308
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
              295,
              309
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "range": [
          291,
          311
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 12
          }
        }
      },
      "range": [
        279,
        311
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrictDataMap",
        "optional": false,
        "range": [
          318,
          331
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
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
                353,
                354
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            },
            "range": [
              353,
              354
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 14,
                "line": 17
              }
            }
          },
          "range": [
            347,
            354
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 17
            },
            "start": {
              "column": 8,
              "line": 17
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            342,
            343
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 17
            },
            "start": {
              "column": 3,
              "line": 17
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Data",
            "optional": false,
            "range": [
              357,
              361
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 17
              },
              "start": {
                "column": 18,
                "line": 17
              }
            }
          },
          "range": [
            357,
            361
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 17
            },
            "start": {
              "column": 18,
              "line": 17
            }
          }
        },
        "range": [
          337,
          363
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 24,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 16
          },
          "start": {
            "column": 18,
            "line": 16
          }
        },
        "range": [
          331,
          334
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
                332,
                333
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              332,
              333
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 19,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        313,
        363
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              },
              "range": [
                378,
                398
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    393,
                    398
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        394,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 20
                        },
                        "start": {
                          "column": 29,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 20
                    },
                    "start": {
                      "column": 28,
                      "line": 20
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrictDataMap",
                  "optional": false,
                  "range": [
                    380,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                },
                "range": [
                  380,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 20
                  },
                  "start": {
                    "column": 15,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              377,
              398
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 20
              },
              "start": {
                "column": 12,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            377,
            398
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 20
            },
            "start": {
              "column": 12,
              "line": 20
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        365,
        399
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ForInStatement",
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
                  "name": "data",
                  "optional": false,
                  "range": [
                    426,
                    430
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 6,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      433,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "range": [
                      435,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 15,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    433,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  426,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 22
                  },
                  "start": {
                    "column": 6,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              422,
              439
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    446,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 23
                    },
                    "start": {
                      "column": 6,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "range": [
                      450,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 23
                      },
                      "start": {
                        "column": 10,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "notAValue",
                    "optional": false,
                    "range": [
                      455,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    450,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 23
                    },
                    "start": {
                      "column": 10,
                      "line": 23
                    }
                  }
                },
                "range": [
                  446,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 23
                  },
                  "start": {
                    "column": 6,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              442,
              465
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          }
        ],
        "range": [
          418,
          477
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 18,
            "line": 21
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "range": [
                409,
                411
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "init": null,
            "range": [
              409,
              411
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          405,
          411
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "range": [
          415,
          416
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 21
          },
          "start": {
            "column": 15,
            "line": 21
          }
        }
      },
      "range": [
        400,
        477
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Arrayish",
        "optional": false,
        "range": [
          658,
          666
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
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
                704,
                705
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 30
                },
                "start": {
                  "column": 51,
                  "line": 30
                }
              }
            },
            "range": [
              704,
              705
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 30
              },
              "start": {
                "column": 51,
                "line": 30
              }
            }
          },
          "range": [
            698,
            705
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 30
            },
            "start": {
              "column": 45,
              "line": 30
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            693,
            694
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 30
            },
            "start": {
              "column": 40,
              "line": 30
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
                710,
                711
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 30
                },
                "start": {
                  "column": 57,
                  "line": 30
                }
              }
            },
            "range": [
              710,
              711
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 30
              },
              "start": {
                "column": 57,
                "line": 30
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
                708,
                709
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 30
                },
                "start": {
                  "column": 55,
                  "line": 30
                }
              }
            },
            "range": [
              708,
              709
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 30
              },
              "start": {
                "column": 55,
                "line": 30
              }
            }
          },
          "range": [
            708,
            712
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 30
            },
            "start": {
              "column": 55,
              "line": 30
            }
          }
        },
        "range": [
          690,
          714
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 30
          },
          "start": {
            "column": 37,
            "line": 30
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 30
          },
          "start": {
            "column": 13,
            "line": 30
          }
        },
        "range": [
          666,
          687
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  677,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 30
                  },
                  "start": {
                    "column": 24,
                    "line": 30
                  }
                }
              },
              "range": [
                677,
                686
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 30
                },
                "start": {
                  "column": 24,
                  "line": 30
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
                667,
                668
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 30
                },
                "start": {
                  "column": 14,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              667,
              686
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 30
              },
              "start": {
                "column": 14,
                "line": 30
              }
            }
          }
        ]
      },
      "range": [
        653,
        715
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Objectish",
        "optional": false,
        "range": [
          721,
          730
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
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
                766,
                767
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 31
                },
                "start": {
                  "column": 50,
                  "line": 31
                }
              }
            },
            "range": [
              766,
              767
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 31
              },
              "start": {
                "column": 50,
                "line": 31
              }
            }
          },
          "range": [
            760,
            767
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 31
            },
            "start": {
              "column": 44,
              "line": 31
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            755,
            756
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 31
            },
            "start": {
              "column": 39,
              "line": 31
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
                772,
                773
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 31
                },
                "start": {
                  "column": 56,
                  "line": 31
                }
              }
            },
            "range": [
              772,
              773
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 31
              },
              "start": {
                "column": 56,
                "line": 31
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
                770,
                771
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 31
                },
                "start": {
                  "column": 54,
                  "line": 31
                }
              }
            },
            "range": [
              770,
              771
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 31
              },
              "start": {
                "column": 54,
                "line": 31
              }
            }
          },
          "range": [
            770,
            774
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 31
            },
            "start": {
              "column": 54,
              "line": 31
            }
          }
        },
        "range": [
          752,
          776
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 31
          },
          "start": {
            "column": 36,
            "line": 31
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 31
          },
          "start": {
            "column": 14,
            "line": 31
          }
        },
        "range": [
          730,
          749
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnknownKeyword",
              "range": [
                741,
                748
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 25,
                  "line": 31
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
                731,
                732
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 31
                },
                "start": {
                  "column": 15,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              731,
              748
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 15,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        716,
        777
      ],
      "loc": {
        "end": {
          "column": 61,
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
        "name": "IndirectArrayish",
        "optional": false,
        "range": [
          1349,
          1365
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 40
          },
          "start": {
            "column": 5,
            "line": 40
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1398,
            1401
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
                  1399,
                  1400
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 40
                  },
                  "start": {
                    "column": 55,
                    "line": 40
                  }
                }
              },
              "range": [
                1399,
                1400
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 40
                },
                "start": {
                  "column": 55,
                  "line": 40
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 40
            },
            "start": {
              "column": 54,
              "line": 40
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Objectish",
          "optional": false,
          "range": [
            1389,
            1398
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 40
            },
            "start": {
              "column": 45,
              "line": 40
            }
          }
        },
        "range": [
          1389,
          1401
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 40
          },
          "start": {
            "column": 45,
            "line": 40
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 40
          },
          "start": {
            "column": 21,
            "line": 40
          }
        },
        "range": [
          1365,
          1386
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  1376,
                  1383
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 40
                  },
                  "start": {
                    "column": 32,
                    "line": 40
                  }
                }
              },
              "range": [
                1376,
                1385
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 40
                },
                "start": {
                  "column": 32,
                  "line": 40
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
                1366,
                1367
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 40
                },
                "start": {
                  "column": 22,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              1366,
              1385
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 40
              },
              "start": {
                "column": 22,
                "line": 40
              }
            }
          }
        ]
      },
      "range": [
        1344,
        1402
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 43
                      },
                      "start": {
                        "column": 11,
                        "line": 43
                      }
                    },
                    "range": [
                      1523,
                      1530
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1525,
                          1528
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 43
                          },
                          "start": {
                            "column": 13,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        1525,
                        1530
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 43
                        },
                        "start": {
                          "column": 13,
                          "line": 43
                        }
                      }
                    }
                  },
                  "range": [
                    1520,
                    1530
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                },
                "init": null,
                "range": [
                  1520,
                  1530
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 43
                  },
                  "start": {
                    "column": 8,
                    "line": 43
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1516,
              1531
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
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
                "name": "arr",
                "optional": false,
                "range": [
                  1536,
                  1539
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayish",
                "optional": false,
                "range": [
                  1542,
                  1550
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 44
                  },
                  "start": {
                    "column": 10,
                    "line": 44
                  }
                }
              },
              "range": [
                1536,
                1550
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              1536,
              1551
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
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
                "name": "arr",
                "optional": false,
                "range": [
                  1556,
                  1559
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "objectish",
                "optional": false,
                "range": [
                  1562,
                  1571
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 45
                  },
                  "start": {
                    "column": 10,
                    "line": 45
                  }
                }
              },
              "range": [
                1556,
                1571
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              1556,
              1572
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                "name": "arr",
                "optional": false,
                "range": [
                  1577,
                  1580
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "indirectArrayish",
                "optional": false,
                "range": [
                  1583,
                  1599
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 46
                  },
                  "start": {
                    "column": 10,
                    "line": 46
                  }
                }
              },
              "range": [
                1577,
                1599
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              1577,
              1600
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          1510,
          1602
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 106,
            "line": 42
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          1413,
          1416
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arrayish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 42
              },
              "start": {
                "column": 21,
                "line": 42
              }
            },
            "range": [
              1425,
              1440
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1435,
                  1440
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1436,
                      1439
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 42
                      },
                      "start": {
                        "column": 32,
                        "line": 42
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 42
                  },
                  "start": {
                    "column": 31,
                    "line": 42
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Arrayish",
                "optional": false,
                "range": [
                  1427,
                  1435
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 42
                  },
                  "start": {
                    "column": 23,
                    "line": 42
                  }
                }
              },
              "range": [
                1427,
                1440
              ],
              "loc": {
                "end": {
                  "column": 36,
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
            1417,
            1440
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 42
            },
            "start": {
              "column": 13,
              "line": 42
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objectish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 42
              },
              "start": {
                "column": 47,
                "line": 42
              }
            },
            "range": [
              1451,
              1467
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1462,
                  1467
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1463,
                      1466
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 42
                      },
                      "start": {
                        "column": 59,
                        "line": 42
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 42
                  },
                  "start": {
                    "column": 58,
                    "line": 42
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Objectish",
                "optional": false,
                "range": [
                  1453,
                  1462
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 42
                  },
                  "start": {
                    "column": 49,
                    "line": 42
                  }
                }
              },
              "range": [
                1453,
                1467
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 42
                },
                "start": {
                  "column": 49,
                  "line": 42
                }
              }
            }
          },
          "range": [
            1442,
            1467
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 42
            },
            "start": {
              "column": 38,
              "line": 42
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "indirectArrayish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 104,
                "line": 42
              },
              "start": {
                "column": 81,
                "line": 42
              }
            },
            "range": [
              1485,
              1508
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1503,
                  1508
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1504,
                      1507
                    ],
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 42
                      },
                      "start": {
                        "column": 100,
                        "line": 42
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 42
                  },
                  "start": {
                    "column": 99,
                    "line": 42
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndirectArrayish",
                "optional": false,
                "range": [
                  1487,
                  1503
                ],
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 42
                  },
                  "start": {
                    "column": 83,
                    "line": 42
                  }
                }
              },
              "range": [
                1487,
                1508
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 42
                },
                "start": {
                  "column": 83,
                  "line": 42
                }
              }
            }
          },
          "range": [
            1469,
            1508
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 42
            },
            "start": {
              "column": 65,
              "line": 42
            }
          }
        }
      ],
      "range": [
        1404,
        1602
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 42
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
        "name": "stringifyArray",
        "optional": false,
        "range": [
          1621,
          1635
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 49
          },
          "start": {
            "column": 17,
            "line": 49
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 49
              },
              "start": {
                "column": 61,
                "line": 49
              }
            },
            "range": [
              1665,
              1668
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1667,
                  1668
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 49
                  },
                  "start": {
                    "column": 63,
                    "line": 49
                  }
                }
              },
              "range": [
                1667,
                1668
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 49
                },
                "start": {
                  "column": 63,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1662,
            1668
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 49
            },
            "start": {
              "column": 58,
              "line": 49
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 103,
            "line": 49
          },
          "start": {
            "column": 65,
            "line": 49
          }
        },
        "range": [
          1669,
          1707
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
                "name": "T",
                "optional": false,
                "range": [
                  1695,
                  1696
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 49
                  },
                  "start": {
                    "column": 91,
                    "line": 49
                  }
                }
              },
              "range": [
                1695,
                1696
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 49
                },
                "start": {
                  "column": 91,
                  "line": 49
                }
              }
            },
            "range": [
              1689,
              1696
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 49
              },
              "start": {
                "column": 85,
                "line": 49
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              1684,
              1685
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 49
              },
              "start": {
                "column": 80,
                "line": 49
              }
            }
          },
          "nameType": null,
          "readonly": "-",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              1699,
              1705
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 49
              },
              "start": {
                "column": 95,
                "line": 49
              }
            }
          },
          "range": [
            1671,
            1707
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 49
            },
            "start": {
              "column": 67,
              "line": 49
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 49
          },
          "start": {
            "column": 31,
            "line": 49
          }
        },
        "range": [
          1635,
          1661
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1655,
                    1658
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 49
                    },
                    "start": {
                      "column": 51,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1655,
                  1660
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 49
                  },
                  "start": {
                    "column": 51,
                    "line": 49
                  }
                }
              },
              "range": [
                1646,
                1660
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 49
                },
                "start": {
                  "column": 42,
                  "line": 49
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
                1636,
                1637
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 49
                },
                "start": {
                  "column": 32,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1636,
              1660
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 49
              },
              "start": {
                "column": 32,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        1604,
        1708
      ],
      "loc": {
        "end": {
          "column": 104,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 50
                },
                "start": {
                  "column": 7,
                  "line": 50
                }
              },
              "range": [
                1716,
                1723
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1718,
                    1721
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 50
                    },
                    "start": {
                      "column": 9,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1718,
                  1723
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 50
                  },
                  "start": {
                    "column": 9,
                    "line": 50
                  }
                }
              }
            },
            "range": [
              1713,
              1723
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1746,
                      1747
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 50
                      },
                      "start": {
                        "column": 37,
                        "line": 50
                      }
                    }
                  },
                  "operator": "void",
                  "prefix": true,
                  "range": [
                    1741,
                    1747
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 50
                    },
                    "start": {
                      "column": 32,
                      "line": 50
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1751,
                    1754
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 50
                    },
                    "start": {
                      "column": 42,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1741,
                  1754
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 50
                  },
                  "start": {
                    "column": 32,
                    "line": 50
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringifyArray",
              "optional": false,
              "range": [
                1726,
                1740
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 50
                },
                "start": {
                  "column": 17,
                  "line": 50
                }
              }
            },
            "optional": false,
            "range": [
              1726,
              1755
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 50
              },
              "start": {
                "column": 17,
                "line": 50
              }
            }
          },
          "range": [
            1713,
            1755
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1709,
        1756
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
        "name": "stringifyPair",
        "optional": false,
        "range": [
          1775,
          1788
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 52
          },
          "start": {
            "column": 17,
            "line": 52
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 52
              },
              "start": {
                "column": 65,
                "line": 52
              }
            },
            "range": [
              1823,
              1826
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1825,
                  1826
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 52
                  },
                  "start": {
                    "column": 67,
                    "line": 52
                  }
                }
              },
              "range": [
                1825,
                1826
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 52
                },
                "start": {
                  "column": 67,
                  "line": 52
                }
              }
            }
          },
          "range": [
            1820,
            1826
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 52
            },
            "start": {
              "column": 62,
              "line": 52
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 107,
            "line": 52
          },
          "start": {
            "column": 69,
            "line": 52
          }
        },
        "range": [
          1827,
          1865
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
                "name": "T",
                "optional": false,
                "range": [
                  1853,
                  1854
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 52
                  },
                  "start": {
                    "column": 95,
                    "line": 52
                  }
                }
              },
              "range": [
                1853,
                1854
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 52
                },
                "start": {
                  "column": 95,
                  "line": 52
                }
              }
            },
            "range": [
              1847,
              1854
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 52
              },
              "start": {
                "column": 89,
                "line": 52
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              1842,
              1843
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 52
              },
              "start": {
                "column": 84,
                "line": 52
              }
            }
          },
          "nameType": null,
          "readonly": "-",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              1857,
              1863
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 52
              },
              "start": {
                "column": 99,
                "line": 52
              }
            }
          },
          "range": [
            1829,
            1865
          ],
          "loc": {
            "end": {
              "column": 107,
              "line": 52
            },
            "start": {
              "column": 71,
              "line": 52
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 52
          },
          "start": {
            "column": 30,
            "line": 52
          }
        },
        "range": [
          1788,
          1819
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1809,
                      1812
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 52
                      },
                      "start": {
                        "column": 51,
                        "line": 52
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1814,
                      1817
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 52
                      },
                      "start": {
                        "column": 56,
                        "line": 52
                      }
                    }
                  }
                ],
                "range": [
                  1808,
                  1818
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 52
                  },
                  "start": {
                    "column": 50,
                    "line": 52
                  }
                }
              },
              "range": [
                1799,
                1818
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 52
                },
                "start": {
                  "column": 41,
                  "line": 52
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
                1789,
                1790
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 52
                },
                "start": {
                  "column": 31,
                  "line": 52
                }
              }
            },
            "out": false,
            "range": [
              1789,
              1818
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 52
              },
              "start": {
                "column": 31,
                "line": 52
              }
            }
          }
        ]
      },
      "range": [
        1758,
        1866
      ],
      "loc": {
        "end": {
          "column": 108,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "def",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 53
                },
                "start": {
                  "column": 7,
                  "line": 53
                }
              },
              "range": [
                1874,
                1886
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1877,
                      1880
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 53
                      },
                      "start": {
                        "column": 10,
                        "line": 53
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1882,
                      1885
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 53
                      },
                      "start": {
                        "column": 15,
                        "line": 53
                      }
                    }
                  }
                ],
                "range": [
                  1876,
                  1886
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 53
                  },
                  "start": {
                    "column": 9,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              1871,
              1886
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1908,
                      1909
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 53
                      },
                      "start": {
                        "column": 41,
                        "line": 53
                      }
                    }
                  },
                  "operator": "void",
                  "prefix": true,
                  "range": [
                    1903,
                    1909
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 53
                    },
                    "start": {
                      "column": 36,
                      "line": 53
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1913,
                    1916
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 53
                    },
                    "start": {
                      "column": 46,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1903,
                  1916
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 53
                  },
                  "start": {
                    "column": 36,
                    "line": 53
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringifyPair",
              "optional": false,
              "range": [
                1889,
                1902
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 53
                },
                "start": {
                  "column": 22,
                  "line": 53
                }
              }
            },
            "optional": false,
            "range": [
              1889,
              1917
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 53
              },
              "start": {
                "column": 22,
                "line": 53
              }
            }
          },
          "range": [
            1871,
            1917
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1867,
        1918
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Evolvable",
        "optional": false,
        "range": [
          1947,
          1956
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 57
          },
          "start": {
            "column": 5,
            "line": 57
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
              "name": "E",
              "optional": false,
              "range": [
                1994,
                1995
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 58
                },
                "start": {
                  "column": 14,
                  "line": 58
                }
              }
            },
            "range": [
              1994,
              1995
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 58
              },
              "start": {
                "column": 14,
                "line": 58
              }
            }
          },
          "range": [
            1988,
            1995
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 58
            },
            "start": {
              "column": 8,
              "line": 58
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1983,
            1984
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 58
            },
            "start": {
              "column": 3,
              "line": 58
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            1998,
            2003
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 58
            },
            "start": {
              "column": 18,
              "line": 58
            }
          }
        },
        "range": [
          1978,
          2006
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 36,
            "line": 57
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 57
          },
          "start": {
            "column": 14,
            "line": 57
          }
        },
        "range": [
          1956,
          1975
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Evolver",
                "optional": false,
                "range": [
                  1967,
                  1974
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 57
                  },
                  "start": {
                    "column": 25,
                    "line": 57
                  }
                }
              },
              "range": [
                1967,
                1974
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 57
                },
                "start": {
                  "column": 25,
                  "line": 57
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                1957,
                1958
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 57
                },
                "start": {
                  "column": 15,
                  "line": 57
                }
              }
            },
            "out": false,
            "range": [
              1957,
              1974
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 57
              },
              "start": {
                "column": 15,
                "line": 57
              }
            }
          }
        ]
      },
      "range": [
        1942,
        2007
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Evolver",
        "optional": false,
        "range": [
          2013,
          2020
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 60
          },
          "start": {
            "column": 5,
            "line": 60
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2080,
                2083
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
                      2081,
                      2082
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 61
                      },
                      "start": {
                        "column": 24,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    2081,
                    2082
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 61
                    },
                    "start": {
                      "column": 24,
                      "line": 61
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 61
                },
                "start": {
                  "column": 23,
                  "line": 61
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "range": [
                2073,
                2080
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 61
                },
                "start": {
                  "column": 16,
                  "line": 61
                }
              }
            },
            "range": [
              2073,
              2083
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 61
              },
              "start": {
                "column": 16,
                "line": 61
              }
            }
          },
          "range": [
            2067,
            2083
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 61
            },
            "start": {
              "column": 10,
              "line": 61
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            2060,
            2063
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 61
            },
            "start": {
              "column": 3,
              "line": 61
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            2086,
            2091
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 61
            },
            "start": {
              "column": 29,
              "line": 61
            }
          }
        },
        "range": [
          2055,
          2094
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 47,
            "line": 60
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 60
          },
          "start": {
            "column": 12,
            "line": 60
          }
        },
        "range": [
          2020,
          2052
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
                  2040,
                  2045
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      2041,
                      2044
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 60
                      },
                      "start": {
                        "column": 33,
                        "line": 60
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 60
                  },
                  "start": {
                    "column": 32,
                    "line": 60
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Evolvable",
                "optional": false,
                "range": [
                  2031,
                  2040
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 60
                  },
                  "start": {
                    "column": 23,
                    "line": 60
                  }
                }
              },
              "range": [
                2031,
                2045
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 60
                },
                "start": {
                  "column": 23,
                  "line": 60
                }
              }
            },
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                2048,
                2051
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 60
                },
                "start": {
                  "column": 40,
                  "line": 60
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
                2021,
                2022
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 60
                },
                "start": {
                  "column": 13,
                  "line": 60
                }
              }
            },
            "out": false,
            "range": [
              2021,
              2051
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 60
              },
              "start": {
                "column": 13,
                "line": 60
              }
            }
          }
        ]
      },
      "range": [
        2008,
        2095
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 63
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
