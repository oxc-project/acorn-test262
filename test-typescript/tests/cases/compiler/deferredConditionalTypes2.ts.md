__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    1067
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PositiveInfinity",
        "optional": false,
        "range": [
          62,
          78
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "raw": "1e999",
          "value": 1e+400,
          "range": [
            81,
            86
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "range": [
          81,
          86
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 24,
            "line": 3
          }
        }
      },
      "range": [
        57,
        87
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "name": "NegativeInfinity",
        "optional": false,
        "range": [
          93,
          109
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Literal",
            "raw": "1e999",
            "value": 1e+400,
            "range": [
              113,
              118
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 25,
                "line": 4
              }
            }
          },
          "operator": "-",
          "prefix": true,
          "range": [
            112,
            118
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
        "range": [
          112,
          118
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
      "range": [
        88,
        119
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        121,
        241
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsEqual",
          "optional": false,
          "range": [
            133,
            140
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSFunctionType",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 6
                },
                "start": {
                  "column": 35,
                  "line": 6
                }
              },
              "range": [
                156,
                178
              ],
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "range": [
                      159,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 6
                      },
                      "start": {
                        "column": 38,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    159,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 38,
                      "line": 6
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      169,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 6
                      },
                      "start": {
                        "column": 48,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    169,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 6
                    },
                    "start": {
                      "column": 48,
                      "line": 6
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      177,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 6
                      },
                      "start": {
                        "column": 56,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    177,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 6
                    },
                    "start": {
                      "column": 56,
                      "line": 6
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      173,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 6
                      },
                      "start": {
                        "column": 52,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    173,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 6
                    },
                    "start": {
                      "column": 52,
                      "line": 6
                    }
                  }
                },
                "range": [
                  159,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 6
                  },
                  "start": {
                    "column": 38,
                    "line": 6
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 6
                },
                "start": {
                  "column": 29,
                  "line": 6
                }
              },
              "range": [
                150,
                153
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "range": [
                      151,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    151,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 6
                    },
                    "start": {
                      "column": 30,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              150,
              178
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 6
              },
              "start": {
                "column": 29,
                "line": 6
              }
            }
          },
          "extendsType": {
            "type": "TSFunctionType",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              },
              "range": [
                199,
                221
              ],
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "range": [
                      202,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 8
                      },
                      "start": {
                        "column": 7,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    202,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 8
                    },
                    "start": {
                      "column": 7,
                      "line": 8
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      212,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    212,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 17,
                      "line": 8
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      220,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 25,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    220,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 25,
                      "line": 8
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      216,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    216,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 21,
                      "line": 8
                    }
                  }
                },
                "range": [
                  202,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 8
                },
                "start": {
                  "column": 67,
                  "line": 6
                }
              },
              "range": [
                188,
                196
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "range": [
                      192,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 7
                      },
                      "start": {
                        "column": 2,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    192,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 7
                    },
                    "start": {
                      "column": 2,
                      "line": 7
                    }
                  }
                }
              ]
            },
            "range": [
              188,
              221
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 67,
                "line": 6
              }
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                235,
                240
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              235,
              240
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                226,
                230
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              226,
              230
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "range": [
            149,
            240
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 10
            },
            "start": {
              "column": 28,
              "line": 6
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 6
            },
            "start": {
              "column": 19,
              "line": 6
            }
          },
          "range": [
            140,
            146
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  141,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                141,
                142
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
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
                "name": "B",
                "optional": false,
                "range": [
                  144,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                144,
                145
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          128,
          241
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 10,
          "line": 10
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
        243,
        579
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Add",
          "optional": false,
          "range": [
            255,
            258
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 12
            },
            "start": {
              "column": 12,
              "line": 12
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    308,
                    329
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          309,
                          310
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 13
                          },
                          "start": {
                            "column": 10,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        309,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "range": [
                          312,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        312,
                        328
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "range": [
                    301,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 2,
                      "line": 13
                    }
                  }
                },
                "range": [
                  301,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 2,
                    "line": 13
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    340,
                    361
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          341,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 14
                          },
                          "start": {
                            "column": 10,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        341,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 14
                        },
                        "start": {
                          "column": 10,
                          "line": 14
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "range": [
                          344,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 14
                          },
                          "start": {
                            "column": 13,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        344,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 14
                    },
                    "start": {
                      "column": 9,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "range": [
                    333,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 2,
                      "line": 14
                    }
                  }
                },
                "range": [
                  333,
                  361
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 14
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    372,
                    393
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          373,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 15
                          },
                          "start": {
                            "column": 10,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        373,
                        374
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 15
                        },
                        "start": {
                          "column": 10,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "range": [
                          376,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 15
                          },
                          "start": {
                            "column": 13,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        376,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "range": [
                    365,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 2,
                      "line": 15
                    }
                  }
                },
                "range": [
                  365,
                  393
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 2,
                    "line": 15
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    404,
                    425
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          405,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 16
                          },
                          "start": {
                            "column": 10,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        405,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 16
                        },
                        "start": {
                          "column": 10,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "range": [
                          408,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 16
                          },
                          "start": {
                            "column": 13,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        408,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 13,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 16
                    },
                    "start": {
                      "column": 9,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "range": [
                    397,
                    404
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 2,
                      "line": 16
                    }
                  }
                },
                "range": [
                  397,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 2,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              297,
              428
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 54,
                "line": 12
              }
            }
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      454,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      463,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 17
                      },
                      "start": {
                        "column": 36,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      472,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 17
                      },
                      "start": {
                        "column": 45,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      481,
                      488
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 17
                      },
                      "start": {
                        "column": 54,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  453,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "range": [
                  443,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 17
                  },
                  "start": {
                    "column": 16,
                    "line": 17
                  }
                }
              },
              "out": false,
              "range": [
                443,
                489
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              }
            },
            "range": [
              437,
              489
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              573,
              578
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      495,
                      499
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 18
                      },
                      "start": {
                        "column": 5,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    495,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 5,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      501,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 18
                      },
                      "start": {
                        "column": 11,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    501,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 18
                    },
                    "start": {
                      "column": 11,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                494,
                507
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        520,
                        521
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 18
                        },
                        "start": {
                          "column": 30,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      520,
                      521
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 18
                      },
                      "start": {
                        "column": 30,
                        "line": 18
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "range": [
                        518,
                        519
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 18
                        },
                        "start": {
                          "column": 28,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      518,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 18
                      },
                      "start": {
                        "column": 28,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    518,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 18
                    },
                    "start": {
                      "column": 28,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        526,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 18
                        },
                        "start": {
                          "column": 36,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      526,
                      527
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 18
                      },
                      "start": {
                        "column": 36,
                        "line": 18
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "range": [
                        524,
                        525
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 18
                        },
                        "start": {
                          "column": 34,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      524,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 18
                      },
                      "start": {
                        "column": 34,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    524,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 18
                    },
                    "start": {
                      "column": 34,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                517,
                529
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 18
                },
                "start": {
                  "column": 27,
                  "line": 18
                }
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"failed\"",
                "value": "failed",
                "range": [
                  560,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 20
                  },
                  "start": {
                    "column": 6,
                    "line": 20
                  }
                }
              },
              "range": [
                560,
                568
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "range": [
                  537,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
                  }
                }
              },
              "range": [
                537,
                553
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            },
            "range": [
              494,
              568
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "range": [
            297,
            578
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 21
            },
            "start": {
              "column": 54,
              "line": 12
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 51,
              "line": 12
            },
            "start": {
              "column": 15,
              "line": 12
            }
          },
          "range": [
            258,
            294
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "range": [
                  269,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 26,
                    "line": 12
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  259,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                }
              },
              "out": false,
              "range": [
                259,
                275
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 12
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "range": [
                  287,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 12
                  },
                  "start": {
                    "column": 44,
                    "line": 12
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
                  277,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 12
                  },
                  "start": {
                    "column": 34,
                    "line": 12
                  }
                }
              },
              "out": false,
              "range": [
                277,
                293
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 12
                },
                "start": {
                  "column": 34,
                  "line": 12
                }
              }
            }
          ]
        },
        "range": [
          250,
          579
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 10,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        581,
        933
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddWithoutParentheses",
          "optional": false,
          "range": [
            593,
            614
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 23
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    664,
                    685
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          665,
                          666
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 24
                          },
                          "start": {
                            "column": 10,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        665,
                        666
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 24
                        },
                        "start": {
                          "column": 10,
                          "line": 24
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "range": [
                          668,
                          684
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        668,
                        684
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
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
                      "column": 30,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "range": [
                    657,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 2,
                      "line": 24
                    }
                  }
                },
                "range": [
                  657,
                  685
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 2,
                    "line": 24
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    696,
                    717
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          697,
                          698
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 25
                          },
                          "start": {
                            "column": 10,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        697,
                        698
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 25
                        },
                        "start": {
                          "column": 10,
                          "line": 25
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "range": [
                          700,
                          716
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 25
                          },
                          "start": {
                            "column": 13,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        700,
                        716
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
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
                      "column": 30,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "range": [
                    689,
                    696
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
                },
                "range": [
                  689,
                  717
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 25
                  },
                  "start": {
                    "column": 2,
                    "line": 25
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    728,
                    749
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          729,
                          730
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 26
                          },
                          "start": {
                            "column": 10,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        729,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 26
                        },
                        "start": {
                          "column": 10,
                          "line": 26
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "range": [
                          732,
                          748
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 26
                          },
                          "start": {
                            "column": 13,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        732,
                        748
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 26
                        },
                        "start": {
                          "column": 13,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 26
                    },
                    "start": {
                      "column": 9,
                      "line": 26
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "range": [
                    721,
                    728
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 2,
                      "line": 26
                    }
                  }
                },
                "range": [
                  721,
                  749
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 26
                  },
                  "start": {
                    "column": 2,
                    "line": 26
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    760,
                    781
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          761,
                          762
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 27
                          },
                          "start": {
                            "column": 10,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        761,
                        762
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 27
                        },
                        "start": {
                          "column": 10,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "range": [
                          764,
                          780
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 27
                          },
                          "start": {
                            "column": 13,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        764,
                        780
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 27
                        },
                        "start": {
                          "column": 13,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 27
                    },
                    "start": {
                      "column": 9,
                      "line": 27
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "range": [
                    753,
                    760
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 27
                    },
                    "start": {
                      "column": 2,
                      "line": 27
                    }
                  }
                },
                "range": [
                  753,
                  781
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 27
                  },
                  "start": {
                    "column": 2,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              653,
              784
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 28
              },
              "start": {
                "column": 72,
                "line": 23
              }
            }
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      810,
                      817
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 28
                      },
                      "start": {
                        "column": 27,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      819,
                      826
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 28
                      },
                      "start": {
                        "column": 36,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      828,
                      835
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 28
                      },
                      "start": {
                        "column": 45,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      837,
                      844
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 28
                      },
                      "start": {
                        "column": 54,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  809,
                  845
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 28
                  },
                  "start": {
                    "column": 26,
                    "line": 28
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "range": [
                  799,
                  800
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 28
                  },
                  "start": {
                    "column": 16,
                    "line": 28
                  }
                }
              },
              "out": false,
              "range": [
                799,
                845
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              }
            },
            "range": [
              793,
              845
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 28
              },
              "start": {
                "column": 10,
                "line": 28
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              927,
              932
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      851,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 29
                      },
                      "start": {
                        "column": 5,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    851,
                    855
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 29
                    },
                    "start": {
                      "column": 5,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      857,
                      862
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 29
                      },
                      "start": {
                        "column": 11,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    857,
                    862
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 29
                    },
                    "start": {
                      "column": 11,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                850,
                863
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        875,
                        876
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 29
                        },
                        "start": {
                          "column": 29,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      875,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 29
                      },
                      "start": {
                        "column": 29,
                        "line": 29
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "range": [
                        873,
                        874
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 29
                        },
                        "start": {
                          "column": 27,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      873,
                      874
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 29
                      },
                      "start": {
                        "column": 27,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    873,
                    877
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 29
                    },
                    "start": {
                      "column": 27,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        881,
                        882
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 29
                        },
                        "start": {
                          "column": 35,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      881,
                      882
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 29
                      },
                      "start": {
                        "column": 35,
                        "line": 29
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "range": [
                        879,
                        880
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 29
                        },
                        "start": {
                          "column": 33,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      879,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 29
                      },
                      "start": {
                        "column": 33,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    879,
                    883
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 29
                    },
                    "start": {
                      "column": 33,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                872,
                884
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 29
                },
                "start": {
                  "column": 26,
                  "line": 29
                }
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"failed\"",
                "value": "failed",
                "range": [
                  914,
                  922
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 31
                  },
                  "start": {
                    "column": 6,
                    "line": 31
                  }
                }
              },
              "range": [
                914,
                922
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 6,
                  "line": 31
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "range": [
                  891,
                  907
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 30
                  },
                  "start": {
                    "column": 6,
                    "line": 30
                  }
                }
              },
              "range": [
                891,
                907
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 30
                },
                "start": {
                  "column": 6,
                  "line": 30
                }
              }
            },
            "range": [
              850,
              922
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "range": [
            653,
            932
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 32
            },
            "start": {
              "column": 72,
              "line": 23
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 69,
              "line": 23
            },
            "start": {
              "column": 33,
              "line": 23
            }
          },
          "range": [
            614,
            650
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "range": [
                  625,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 23
                  },
                  "start": {
                    "column": 44,
                    "line": 23
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  615,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 23
                  },
                  "start": {
                    "column": 34,
                    "line": 23
                  }
                }
              },
              "out": false,
              "range": [
                615,
                631
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 23
                },
                "start": {
                  "column": 34,
                  "line": 23
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "range": [
                  643,
                  649
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 23
                  },
                  "start": {
                    "column": 62,
                    "line": 23
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
                  633,
                  634
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 23
                  },
                  "start": {
                    "column": 52,
                    "line": 23
                  }
                }
              },
              "out": false,
              "range": [
                633,
                649
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 23
                },
                "start": {
                  "column": 52,
                  "line": 23
                }
              }
            }
          ]
        },
        "range": [
          588,
          933
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 10,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddTest0",
        "optional": false,
        "range": [
          940,
          948
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            954,
            990
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "range": [
                  955,
                  971
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 34
                  },
                  "start": {
                    "column": 20,
                    "line": 34
                  }
                }
              },
              "range": [
                955,
                971
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 34
                },
                "start": {
                  "column": 20,
                  "line": 34
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "range": [
                  973,
                  989
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 34
                  },
                  "start": {
                    "column": 38,
                    "line": 34
                  }
                }
              },
              "range": [
                973,
                989
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 34
                },
                "start": {
                  "column": 38,
                  "line": 34
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 34
            },
            "start": {
              "column": 19,
              "line": 34
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Add",
          "optional": false,
          "range": [
            951,
            954
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 34
            },
            "start": {
              "column": 16,
              "line": 34
            }
          }
        },
        "range": [
          951,
          990
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 34
          },
          "start": {
            "column": 16,
            "line": 34
          }
        }
      },
      "range": [
        935,
        991
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddTest1",
        "optional": false,
        "range": [
          997,
          1005
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1029,
            1065
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "range": [
                  1030,
                  1046
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 35
                  },
                  "start": {
                    "column": 38,
                    "line": 35
                  }
                }
              },
              "range": [
                1030,
                1046
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 35
                },
                "start": {
                  "column": 38,
                  "line": 35
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "range": [
                  1048,
                  1064
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 35
                  },
                  "start": {
                    "column": 56,
                    "line": 35
                  }
                }
              },
              "range": [
                1048,
                1064
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 35
                },
                "start": {
                  "column": 56,
                  "line": 35
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 35
            },
            "start": {
              "column": 37,
              "line": 35
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddWithoutParentheses",
          "optional": false,
          "range": [
            1008,
            1029
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 35
            },
            "start": {
              "column": 16,
              "line": 35
            }
          }
        },
        "range": [
          1008,
          1065
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 35
          },
          "start": {
            "column": 16,
            "line": 35
          }
        }
      },
      "range": [
        992,
        1066
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
