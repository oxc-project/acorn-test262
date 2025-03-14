__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2079
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsArray",
        "optional": false,
        "range": [
          5,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              18,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "range": [
            18,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSUnknownKeyword",
            "range": [
              28,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            }
          },
          "range": [
            28,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
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
              47,
              52
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          },
          "range": [
            47,
            52
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 1
            },
            "start": {
              "column": 47,
              "line": 1
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
              40,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 40,
                "line": 1
              }
            }
          },
          "range": [
            40,
            44
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          }
        },
        "range": [
          18,
          52
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          15
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
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        53
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    },
                    "range": [
                      111,
                      117
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          113,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 4
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        113,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    110,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    120,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 18,
                      "line": 4
                    }
                  }
                },
                "range": [
                  110,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              106,
              122
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 4,
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    },
                    "range": [
                      143,
                      150
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          145,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 5
                          },
                          "start": {
                            "column": 11,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        145,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    142,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    153,
                    154
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
                "range": [
                  142,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              138,
              155
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          100,
          167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 45,
            "line": 3
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
          64,
          66
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            },
            "range": [
              86,
              98
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  95,
                  98
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
                        96,
                        97
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
                    "range": [
                      96,
                      97
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
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsArray",
                "optional": false,
                "range": [
                  88,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 3
                  },
                  "start": {
                    "column": 33,
                    "line": 3
                  }
                }
              },
              "range": [
                88,
                98
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 33,
                  "line": 3
                }
              }
            }
          },
          "range": [
            85,
            98
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          66,
          84
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                77,
                83
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 22,
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
                67,
                68
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              67,
              83
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        55,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    },
                    "range": [
                      228,
                      234
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          230,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 9
                          },
                          "start": {
                            "column": 11,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        230,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    227,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    237,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                },
                "range": [
                  227,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              223,
              239
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 10
                      },
                      "start": {
                        "column": 9,
                        "line": 10
                      }
                    },
                    "range": [
                      249,
                      256
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          251,
                          256
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 10
                          },
                          "start": {
                            "column": 11,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        251,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 10
                        },
                        "start": {
                          "column": 11,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    248,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    259,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
                      "line": 10
                    }
                  }
                },
                "range": [
                  248,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              244,
              261
            ],
            "loc": {
              "end": {
                "column": 21,
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
          217,
          273
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 48,
            "line": 8
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
          178,
          180
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 34,
                "line": 8
              }
            },
            "range": [
              203,
              215
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  212,
                  215
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
                        213,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 8
                        },
                        "start": {
                          "column": 44,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      213,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 8
                      },
                      "start": {
                        "column": 44,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 8
                  },
                  "start": {
                    "column": 43,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsArray",
                "optional": false,
                "range": [
                  205,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 8
                  },
                  "start": {
                    "column": 36,
                    "line": 8
                  }
                }
              },
              "range": [
                205,
                215
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 8
                },
                "start": {
                  "column": 36,
                  "line": 8
                }
              }
            }
          },
          "range": [
            202,
            215
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 8
            },
            "start": {
              "column": 33,
              "line": 8
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 8
          },
          "start": {
            "column": 11,
            "line": 8
          }
        },
        "range": [
          180,
          201
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
                  191,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 8
                  }
                }
              },
              "range": [
                191,
                200
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 8
                },
                "start": {
                  "column": 22,
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
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              181,
              200
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        169,
        273
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    },
                    "range": [
                      333,
                      339
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          335,
                          339
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 14
                          },
                          "start": {
                            "column": 11,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        335,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    332,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    342,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 18,
                      "line": 14
                    }
                  }
                },
                "range": [
                  332,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              328,
              344
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    },
                    "range": [
                      354,
                      361
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          356,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 15
                          },
                          "start": {
                            "column": 11,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        356,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
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
                    353,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    364,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 15
                    },
                    "start": {
                      "column": 19,
                      "line": 15
                    }
                  }
                },
                "range": [
                  353,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              349,
              366
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          322,
          378
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 47,
            "line": 13
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
          284,
          286
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 13
              },
              "start": {
                "column": 33,
                "line": 13
              }
            },
            "range": [
              308,
              320
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  317,
                  320
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
                        318,
                        319
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 13
                        },
                        "start": {
                          "column": 43,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      318,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 13
                      },
                      "start": {
                        "column": 43,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 13
                  },
                  "start": {
                    "column": 42,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsArray",
                "optional": false,
                "range": [
                  310,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 13
                  },
                  "start": {
                    "column": 35,
                    "line": 13
                  }
                }
              },
              "range": [
                310,
                320
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 13
                },
                "start": {
                  "column": 35,
                  "line": 13
                }
              }
            }
          },
          "range": [
            307,
            320
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 13
            },
            "start": {
              "column": 32,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 13
          }
        },
        "range": [
          286,
          306
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  297,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 13
                  },
                  "start": {
                    "column": 22,
                    "line": 13
                  }
                }
              },
              "range": [
                297,
                305
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
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
                287,
                288
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              287,
              305
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        275,
        378
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    },
                    "range": [
                      438,
                      444
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          440,
                          444
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 19
                          },
                          "start": {
                            "column": 11,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        440,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 19
                        },
                        "start": {
                          "column": 11,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    437,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    447,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 19
                    },
                    "start": {
                      "column": 18,
                      "line": 19
                    }
                  }
                },
                "range": [
                  437,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              433,
              449
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 19
              },
              "start": {
                "column": 4,
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    },
                    "range": [
                      470,
                      477
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          472,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 20
                          },
                          "start": {
                            "column": 11,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        472,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    469,
                    477
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    480,
                    481
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 20
                    },
                    "start": {
                      "column": 19,
                      "line": 20
                    }
                  }
                },
                "range": [
                  469,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              465,
              482
            ],
            "loc": {
              "end": {
                "column": 21,
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
          427,
          484
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 47,
            "line": 18
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          389,
          391
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 18
              },
              "start": {
                "column": 33,
                "line": 18
              }
            },
            "range": [
              413,
              425
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  422,
                  425
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
                        423,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 18
                        },
                        "start": {
                          "column": 43,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      423,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 18
                      },
                      "start": {
                        "column": 43,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 18
                  },
                  "start": {
                    "column": 42,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsArray",
                "optional": false,
                "range": [
                  415,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 18
                  },
                  "start": {
                    "column": 35,
                    "line": 18
                  }
                }
              },
              "range": [
                415,
                425
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 18
                },
                "start": {
                  "column": 35,
                  "line": 18
                }
              }
            }
          },
          "range": [
            412,
            425
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 18
            },
            "start": {
              "column": 32,
              "line": 18
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 18
          },
          "start": {
            "column": 11,
            "line": 18
          }
        },
        "range": [
          391,
          411
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
                "name": "Function",
                "optional": false,
                "range": [
                  402,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 18
                  },
                  "start": {
                    "column": 22,
                    "line": 18
                  }
                }
              },
              "range": [
                402,
                410
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 18
                },
                "start": {
                  "column": 22,
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
                392,
                393
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              392,
              410
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        380,
        484
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZeroOf",
        "optional": false,
        "range": [
          491,
          497
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
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
              507,
              508
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "range": [
            507,
            508
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "extendsType": {
          "type": "TSNullKeyword",
          "range": [
            517,
            521
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 24
            },
            "start": {
              "column": 14,
              "line": 24
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                535,
                536
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              535,
              536
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "extendsType": {
            "type": "TSUndefinedKeyword",
            "range": [
              545,
              554
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 14,
                "line": 25
              }
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  573,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "range": [
                573,
                574
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "extendsType": {
              "type": "TSStringKeyword",
              "range": [
                583,
                589
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 26
                },
                "start": {
                  "column": 14,
                  "line": 26
                }
              }
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    601,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 27
                    },
                    "start": {
                      "column": 4,
                      "line": 27
                    }
                  }
                },
                "range": [
                  601,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "range": [
                  611,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 27
                  }
                }
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      628,
                      629
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 28
                      },
                      "start": {
                        "column": 4,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    628,
                    629
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
                    }
                  }
                },
                "extendsType": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    638,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 14,
                      "line": 28
                    }
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    660,
                    665
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      648,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 28
                      },
                      "start": {
                        "column": 24,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    648,
                    653
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 28
                    },
                    "start": {
                      "column": 24,
                      "line": 28
                    }
                  }
                },
                "range": [
                  628,
                  665
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 28
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
                    620,
                    621
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 27
                    },
                    "start": {
                      "column": 23,
                      "line": 27
                    }
                  }
                },
                "range": [
                  620,
                  621
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 27
                  },
                  "start": {
                    "column": 23,
                    "line": 27
                  }
                }
              },
              "range": [
                601,
                665
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  592,
                  594
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 26
                  },
                  "start": {
                    "column": 23,
                    "line": 26
                  }
                }
              },
              "range": [
                592,
                594
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 26
                },
                "start": {
                  "column": 23,
                  "line": 26
                }
              }
            },
            "range": [
              573,
              665
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "trueType": {
            "type": "TSUndefinedKeyword",
            "range": [
              557,
              566
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 25
              },
              "start": {
                "column": 26,
                "line": 25
              }
            }
          },
          "range": [
            535,
            665
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        "trueType": {
          "type": "TSNullKeyword",
          "range": [
            524,
            528
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 24
            },
            "start": {
              "column": 21,
              "line": 24
            }
          }
        },
        "range": [
          507,
          665
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 29
          },
          "start": {
            "column": 4,
            "line": 24
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 23
          },
          "start": {
            "column": 11,
            "line": 23
          }
        },
        "range": [
          497,
          500
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
                498,
                499
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              498,
              499
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 12,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        486,
        666
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 23
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 32
                      },
                      "start": {
                        "column": 9,
                        "line": 32
                      }
                    },
                    "range": [
                      720,
                      736
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              722,
                              724
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 32
                              },
                              "start": {
                                "column": 11,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            722,
                            724
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 32
                            },
                            "start": {
                              "column": 11,
                              "line": 32
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              727,
                              728
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 32
                              },
                              "start": {
                                "column": 16,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            727,
                            728
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 32
                            },
                            "start": {
                              "column": 16,
                              "line": 32
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
                              731,
                              736
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 32
                              },
                              "start": {
                                "column": 20,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            731,
                            736
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 32
                            },
                            "start": {
                              "column": 20,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        722,
                        736
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 32
                        },
                        "start": {
                          "column": 11,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    719,
                    736
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    739,
                    740
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 32
                    },
                    "start": {
                      "column": 28,
                      "line": 32
                    }
                  }
                },
                "range": [
                  719,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              715,
              741
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          709,
          743
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 41,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          677,
          680
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 31
              },
              "start": {
                "column": 28,
                "line": 31
              }
            },
            "range": [
              696,
              707
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  704,
                  707
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
                        705,
                        706
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 31
                        },
                        "start": {
                          "column": 37,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      705,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 31
                      },
                      "start": {
                        "column": 37,
                        "line": 31
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 31
                  },
                  "start": {
                    "column": 36,
                    "line": 31
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZeroOf",
                "optional": false,
                "range": [
                  698,
                  704
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 31
                  },
                  "start": {
                    "column": 30,
                    "line": 31
                  }
                }
              },
              "range": [
                698,
                707
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 31
                },
                "start": {
                  "column": 30,
                  "line": 31
                }
              }
            }
          },
          "range": [
            695,
            707
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 31
            },
            "start": {
              "column": 27,
              "line": 31
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 31
          },
          "start": {
            "column": 12,
            "line": 31
          }
        },
        "range": [
          680,
          694
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                691,
                693
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 31
                },
                "start": {
                  "column": 23,
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
                681,
                682
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              681,
              693
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        668,
        743
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
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
        "name": "Foo",
        "optional": false,
        "range": [
          750,
          753
        ],
        "loc": {
          "end": {
            "column": 8,
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
              759,
              760
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 35
              },
              "start": {
                "column": 14,
                "line": 35
              }
            }
          },
          "range": [
            759,
            760
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 35
            },
            "start": {
              "column": 14,
              "line": 35
            }
          }
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  769,
                  774
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 35
                  },
                  "start": {
                    "column": 24,
                    "line": 35
                  }
                }
              },
              "range": [
                769,
                774
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 24,
                  "line": 35
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  777,
                  779
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 35
                  },
                  "start": {
                    "column": 32,
                    "line": 35
                  }
                }
              },
              "range": [
                777,
                779
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 35
                },
                "start": {
                  "column": 32,
                  "line": 35
                }
              }
            }
          ],
          "range": [
            769,
            779
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 35
            },
            "start": {
              "column": 24,
              "line": 35
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
              789,
              794
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 35
              },
              "start": {
                "column": 44,
                "line": 35
              }
            }
          },
          "range": [
            789,
            794
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 35
            },
            "start": {
              "column": 44,
              "line": 35
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
              782,
              786
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 35
              },
              "start": {
                "column": 37,
                "line": 35
              }
            }
          },
          "range": [
            782,
            786
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 35
            },
            "start": {
              "column": 37,
              "line": 35
            }
          }
        },
        "range": [
          759,
          794
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 35
          },
          "start": {
            "column": 14,
            "line": 35
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 35
          },
          "start": {
            "column": 8,
            "line": 35
          }
        },
        "range": [
          753,
          756
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
                754,
                755
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 35
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              }
            },
            "out": false,
            "range": [
              754,
              755
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 35
              },
              "start": {
                "column": 9,
                "line": 35
              }
            }
          }
        ]
      },
      "range": [
        745,
        795
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 38
                      },
                      "start": {
                        "column": 9,
                        "line": 38
                      }
                    },
                    "range": [
                      850,
                      857
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          852,
                          857
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 38
                          },
                          "start": {
                            "column": 11,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        852,
                        857
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 38
                        },
                        "start": {
                          "column": 11,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    849,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    860,
                    861
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 38
                    },
                    "start": {
                      "column": 19,
                      "line": 38
                    }
                  }
                },
                "range": [
                  849,
                  861
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              845,
              862
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          839,
          874
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 42,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "range": [
          806,
          809
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 37
              },
              "start": {
                "column": 32,
                "line": 37
              }
            },
            "range": [
              829,
              837
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  834,
                  837
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
                        835,
                        836
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 37
                        },
                        "start": {
                          "column": 38,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      835,
                      836
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 37
                      },
                      "start": {
                        "column": 38,
                        "line": 37
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 37
                  },
                  "start": {
                    "column": 37,
                    "line": 37
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  831,
                  834
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 37
                  },
                  "start": {
                    "column": 34,
                    "line": 37
                  }
                }
              },
              "range": [
                831,
                837
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 37
                },
                "start": {
                  "column": 34,
                  "line": 37
                }
              }
            }
          },
          "range": [
            828,
            837
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 37
            },
            "start": {
              "column": 31,
              "line": 37
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 37
          },
          "start": {
            "column": 12,
            "line": 37
          }
        },
        "range": [
          809,
          827
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                820,
                826
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 37
                },
                "start": {
                  "column": 23,
                  "line": 37
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
                810,
                811
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 37
                },
                "start": {
                  "column": 13,
                  "line": 37
                }
              }
            },
            "out": false,
            "range": [
              810,
              826
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 37
              },
              "start": {
                "column": 13,
                "line": 37
              }
            }
          }
        ]
      },
      "range": [
        797,
        874
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          919,
          935
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                921,
                924
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 43
                },
                "start": {
                  "column": 14,
                  "line": 43
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 43
                },
                "start": {
                  "column": 19,
                  "line": 43
                }
              },
              "range": [
                926,
                932
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  928,
                  932
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 43
                  },
                  "start": {
                    "column": 21,
                    "line": 43
                  }
                }
              }
            },
            "static": false,
            "range": [
              921,
              933
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 43
              },
              "start": {
                "column": 14,
                "line": 43
              }
            }
          }
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          917,
          918
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 43
          },
          "start": {
            "column": 10,
            "line": 43
          }
        }
      },
      "range": [
        907,
        935
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          948,
          964
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                950,
                953
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 44
                },
                "start": {
                  "column": 14,
                  "line": 44
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 44
                },
                "start": {
                  "column": 19,
                  "line": 44
                }
              },
              "range": [
                955,
                961
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  957,
                  961
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 44
                  },
                  "start": {
                    "column": 21,
                    "line": 44
                  }
                }
              }
            },
            "static": false,
            "range": [
              950,
              962
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 44
              },
              "start": {
                "column": 14,
                "line": 44
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 44
          },
          "start": {
            "column": 12,
            "line": 44
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          946,
          947
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 44
          },
          "start": {
            "column": 10,
            "line": 44
          }
        }
      },
      "range": [
        936,
        964
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          977,
          1005
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                979,
                982
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 45
                },
                "start": {
                  "column": 14,
                  "line": 45
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 45
                },
                "start": {
                  "column": 19,
                  "line": 45
                }
              },
              "range": [
                984,
                990
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  986,
                  990
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 45
                  },
                  "start": {
                    "column": 21,
                    "line": 45
                  }
                }
              }
            },
            "static": false,
            "range": [
              979,
              991
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 45
              },
              "start": {
                "column": 14,
                "line": 45
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                992,
                995
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 45
                },
                "start": {
                  "column": 27,
                  "line": 45
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 45
                },
                "start": {
                  "column": 32,
                  "line": 45
                }
              },
              "range": [
                997,
                1003
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  999,
                  1003
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 45
                  },
                  "start": {
                    "column": 34,
                    "line": 45
                  }
                }
              }
            },
            "static": false,
            "range": [
              992,
              1003
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 45
              },
              "start": {
                "column": 27,
                "line": 45
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 45
          },
          "start": {
            "column": 12,
            "line": 45
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          975,
          976
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 45
          },
          "start": {
            "column": 10,
            "line": 45
          }
        }
      },
      "range": [
        965,
        1005
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1173,
                      1174
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1173,
                    1175
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                1163,
                1191
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 9,
                  "line": 51
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1111,
                      1112
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1111,
                    1113
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                }
              ],
              "range": [
                1101,
                1153
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 50
                },
                "start": {
                  "column": 30,
                  "line": 48
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1086,
                    1087
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 48
                    },
                    "start": {
                      "column": 15,
                      "line": 48
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1079,
                  1087
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 48
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  1091,
                  1099
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 48
                  },
                  "start": {
                    "column": 20,
                    "line": 48
                  }
                }
              },
              "range": [
                1079,
                1099
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 48
                },
                "start": {
                  "column": 8,
                  "line": 48
                }
              }
            },
            "range": [
              1075,
              1191
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 48
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
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 54
                      },
                      "start": {
                        "column": 14,
                        "line": 54
                      }
                    },
                    "range": [
                      1206,
                      1223
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1208,
                            1214
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 54
                            },
                            "start": {
                              "column": 16,
                              "line": 54
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1217,
                            1223
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 54
                            },
                            "start": {
                              "column": 25,
                              "line": 54
                            }
                          }
                        }
                      ],
                      "range": [
                        1208,
                        1223
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 54
                        },
                        "start": {
                          "column": 16,
                          "line": 54
                        }
                      }
                    }
                  },
                  "range": [
                    1202,
                    1223
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 54
                    },
                    "start": {
                      "column": 10,
                      "line": 54
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1226,
                    1227
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 54
                    },
                    "start": {
                      "column": 34,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1202,
                  1227
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 54
                  },
                  "start": {
                    "column": 10,
                    "line": 54
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1196,
              1228
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "range": [
                1233,
                1237
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              1233,
              1238
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1069,
          1251
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 62,
            "line": 47
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          1016,
          1021
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 47
          },
          "start": {
            "column": 9,
            "line": 47
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 47
              },
              "start": {
                "column": 29,
                "line": 47
              }
            },
            "range": [
              1036,
              1067
            ],
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
                    1038,
                    1039
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 47
                    },
                    "start": {
                      "column": 31,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1038,
                  1039
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 47
                  },
                  "start": {
                    "column": 31,
                    "line": 47
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
                    1048,
                    1049
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 47
                    },
                    "start": {
                      "column": 41,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1048,
                  1049
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 47
                  },
                  "start": {
                    "column": 41,
                    "line": 47
                  }
                }
              },
              "falseType": {
                "type": "TSStringKeyword",
                "range": [
                  1061,
                  1067
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 47
                  },
                  "start": {
                    "column": 54,
                    "line": 47
                  }
                }
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "range": [
                  1052,
                  1058
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 47
                  },
                  "start": {
                    "column": 45,
                    "line": 47
                  }
                }
              },
              "range": [
                1038,
                1067
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 47
                },
                "start": {
                  "column": 31,
                  "line": 47
                }
              }
            }
          },
          "range": [
            1035,
            1067
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 47
            },
            "start": {
              "column": 28,
              "line": 47
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 47
          },
          "start": {
            "column": 14,
            "line": 47
          }
        },
        "range": [
          1021,
          1034
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
                "name": "A",
                "optional": false,
                "range": [
                  1032,
                  1033
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 47
                  },
                  "start": {
                    "column": 25,
                    "line": 47
                  }
                }
              },
              "range": [
                1032,
                1033
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 47
                },
                "start": {
                  "column": 25,
                  "line": 47
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
                1022,
                1023
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 47
                },
                "start": {
                  "column": 15,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              1022,
              1033
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 47
              },
              "start": {
                "column": 15,
                "line": 47
              }
            }
          }
        ]
      },
      "range": [
        1007,
        1251
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 47
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1395,
                      1396
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 63
                      },
                      "start": {
                        "column": 8,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    1395,
                    1397
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                1385,
                1437
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 9,
                  "line": 62
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1357,
                      1358
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1357,
                    1359
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                1347,
                1375
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 30,
                  "line": 59
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1332,
                    1333
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 59
                    },
                    "start": {
                      "column": 15,
                      "line": 59
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1325,
                  1333
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 59
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  1337,
                  1345
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 59
                  },
                  "start": {
                    "column": 20,
                    "line": 59
                  }
                }
              },
              "range": [
                1325,
                1345
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 59
                },
                "start": {
                  "column": 8,
                  "line": 59
                }
              }
            },
            "range": [
              1321,
              1437
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 59
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
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 65
                      },
                      "start": {
                        "column": 14,
                        "line": 65
                      }
                    },
                    "range": [
                      1452,
                      1469
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1454,
                            1460
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 65
                            },
                            "start": {
                              "column": 16,
                              "line": 65
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1463,
                            1469
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 65
                            },
                            "start": {
                              "column": 25,
                              "line": 65
                            }
                          }
                        }
                      ],
                      "range": [
                        1454,
                        1469
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 65
                        },
                        "start": {
                          "column": 16,
                          "line": 65
                        }
                      }
                    }
                  },
                  "range": [
                    1448,
                    1469
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 65
                    },
                    "start": {
                      "column": 10,
                      "line": 65
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1472,
                    1473
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 65
                    },
                    "start": {
                      "column": 34,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1448,
                  1473
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 65
                  },
                  "start": {
                    "column": 10,
                    "line": 65
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1442,
              1474
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "range": [
                1479,
                1483
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            },
            "range": [
              1479,
              1484
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          1315,
          1498
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 62,
            "line": 58
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "range": [
          1262,
          1267
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 58
          },
          "start": {
            "column": 9,
            "line": 58
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 58
              },
              "start": {
                "column": 29,
                "line": 58
              }
            },
            "range": [
              1282,
              1313
            ],
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
                    1284,
                    1285
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 58
                    },
                    "start": {
                      "column": 31,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1284,
                  1285
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 58
                  },
                  "start": {
                    "column": 31,
                    "line": 58
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
                    1294,
                    1295
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 58
                    },
                    "start": {
                      "column": 41,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1294,
                  1295
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 58
                  },
                  "start": {
                    "column": 41,
                    "line": 58
                  }
                }
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "range": [
                  1307,
                  1313
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 58
                  },
                  "start": {
                    "column": 54,
                    "line": 58
                  }
                }
              },
              "trueType": {
                "type": "TSStringKeyword",
                "range": [
                  1298,
                  1304
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 58
                  },
                  "start": {
                    "column": 45,
                    "line": 58
                  }
                }
              },
              "range": [
                1284,
                1313
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 58
                },
                "start": {
                  "column": 31,
                  "line": 58
                }
              }
            }
          },
          "range": [
            1281,
            1313
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 58
            },
            "start": {
              "column": 28,
              "line": 58
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 58
          },
          "start": {
            "column": 14,
            "line": 58
          }
        },
        "range": [
          1267,
          1280
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
                "name": "A",
                "optional": false,
                "range": [
                  1278,
                  1279
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 58
                  },
                  "start": {
                    "column": 25,
                    "line": 58
                  }
                }
              },
              "range": [
                1278,
                1279
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 58
                },
                "start": {
                  "column": 25,
                  "line": 58
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
                1268,
                1269
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 58
                },
                "start": {
                  "column": 15,
                  "line": 58
                }
              }
            },
            "out": false,
            "range": [
              1268,
              1279
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 58
              },
              "start": {
                "column": 15,
                "line": 58
              }
            }
          }
        ]
      },
      "range": [
        1253,
        1498
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 58
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1677,
                      1678
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 74
                      },
                      "start": {
                        "column": 8,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    1677,
                    1679
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                }
              ],
              "range": [
                1667,
                1719
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 75
                },
                "start": {
                  "column": 9,
                  "line": 73
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1604,
                      1605
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 71
                      },
                      "start": {
                        "column": 8,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1604,
                    1606
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                1594,
                1657
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 72
                },
                "start": {
                  "column": 30,
                  "line": 70
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1579,
                    1580
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 70
                    },
                    "start": {
                      "column": 15,
                      "line": 70
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1572,
                  1580
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  1584,
                  1592
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 70
                  },
                  "start": {
                    "column": 20,
                    "line": 70
                  }
                }
              },
              "range": [
                1572,
                1592
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 70
                },
                "start": {
                  "column": 8,
                  "line": 70
                }
              }
            },
            "range": [
              1568,
              1719
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 70
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
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 76
                      },
                      "start": {
                        "column": 14,
                        "line": 76
                      }
                    },
                    "range": [
                      1734,
                      1751
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1736,
                            1742
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 76
                            },
                            "start": {
                              "column": 16,
                              "line": 76
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1745,
                            1751
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 76
                            },
                            "start": {
                              "column": 25,
                              "line": 76
                            }
                          }
                        }
                      ],
                      "range": [
                        1736,
                        1751
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 76
                        },
                        "start": {
                          "column": 16,
                          "line": 76
                        }
                      }
                    }
                  },
                  "range": [
                    1730,
                    1751
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 76
                    },
                    "start": {
                      "column": 10,
                      "line": 76
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1754,
                    1755
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 76
                    },
                    "start": {
                      "column": 34,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1730,
                  1755
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 76
                  },
                  "start": {
                    "column": 10,
                    "line": 76
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1724,
              1756
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "range": [
                1761,
                1765
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "range": [
              1761,
              1766
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          }
        ],
        "range": [
          1562,
          1788
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 62,
            "line": 69
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "range": [
          1509,
          1514
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 69
          },
          "start": {
            "column": 9,
            "line": 69
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 69
              },
              "start": {
                "column": 29,
                "line": 69
              }
            },
            "range": [
              1529,
              1560
            ],
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
                    1531,
                    1532
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 69
                    },
                    "start": {
                      "column": 31,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1531,
                  1532
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 69
                  },
                  "start": {
                    "column": 31,
                    "line": 69
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    1541,
                    1542
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 69
                    },
                    "start": {
                      "column": 41,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1541,
                  1542
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 69
                  },
                  "start": {
                    "column": 41,
                    "line": 69
                  }
                }
              },
              "falseType": {
                "type": "TSStringKeyword",
                "range": [
                  1554,
                  1560
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 69
                  },
                  "start": {
                    "column": 54,
                    "line": 69
                  }
                }
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "range": [
                  1545,
                  1551
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 69
                  },
                  "start": {
                    "column": 45,
                    "line": 69
                  }
                }
              },
              "range": [
                1531,
                1560
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 69
                },
                "start": {
                  "column": 31,
                  "line": 69
                }
              }
            }
          },
          "range": [
            1528,
            1560
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 69
            },
            "start": {
              "column": 28,
              "line": 69
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 69
          },
          "start": {
            "column": 14,
            "line": 69
          }
        },
        "range": [
          1514,
          1527
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
                "name": "A",
                "optional": false,
                "range": [
                  1525,
                  1526
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 69
                  },
                  "start": {
                    "column": 25,
                    "line": 69
                  }
                }
              },
              "range": [
                1525,
                1526
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 69
                },
                "start": {
                  "column": 25,
                  "line": 69
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
                1515,
                1516
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 69
                },
                "start": {
                  "column": 15,
                  "line": 69
                }
              }
            },
            "out": false,
            "range": [
              1515,
              1526
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 69
              },
              "start": {
                "column": 15,
                "line": 69
              }
            }
          }
        ]
      },
      "range": [
        1500,
        1788
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 69
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1967,
                      1968
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 85
                      },
                      "start": {
                        "column": 8,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    1967,
                    1969
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 85
                    },
                    "start": {
                      "column": 8,
                      "line": 85
                    }
                  }
                }
              ],
              "range": [
                1957,
                2009
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 9,
                  "line": 84
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1894,
                      1895
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 82
                      },
                      "start": {
                        "column": 8,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    1894,
                    1896
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 82
                    },
                    "start": {
                      "column": 8,
                      "line": 82
                    }
                  }
                }
              ],
              "range": [
                1884,
                1947
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 30,
                  "line": 81
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1869,
                    1870
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 81
                    },
                    "start": {
                      "column": 15,
                      "line": 81
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1862,
                  1870
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 81
                  },
                  "start": {
                    "column": 8,
                    "line": 81
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  1874,
                  1882
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 81
                  },
                  "start": {
                    "column": 20,
                    "line": 81
                  }
                }
              },
              "range": [
                1862,
                1882
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 81
                },
                "start": {
                  "column": 8,
                  "line": 81
                }
              }
            },
            "range": [
              1858,
              2009
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 81
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
                  "name": "newY",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 87
                      },
                      "start": {
                        "column": 14,
                        "line": 87
                      }
                    },
                    "range": [
                      2024,
                      2041
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2026,
                            2032
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 87
                            },
                            "start": {
                              "column": 16,
                              "line": 87
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2035,
                            2041
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 87
                            },
                            "start": {
                              "column": 25,
                              "line": 87
                            }
                          }
                        }
                      ],
                      "range": [
                        2026,
                        2041
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 87
                        },
                        "start": {
                          "column": 16,
                          "line": 87
                        }
                      }
                    }
                  },
                  "range": [
                    2020,
                    2041
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 87
                    },
                    "start": {
                      "column": 10,
                      "line": 87
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    2044,
                    2045
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 87
                    },
                    "start": {
                      "column": 34,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2020,
                  2045
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 87
                  },
                  "start": {
                    "column": 10,
                    "line": 87
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2014,
              2046
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "newY",
              "optional": false,
              "range": [
                2051,
                2055
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "range": [
              2051,
              2056
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          }
        ],
        "range": [
          1852,
          2078
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 62,
            "line": 80
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "range": [
          1799,
          1804
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 80
          },
          "start": {
            "column": 9,
            "line": 80
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 80
              },
              "start": {
                "column": 29,
                "line": 80
              }
            },
            "range": [
              1819,
              1850
            ],
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
                    1821,
                    1822
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 80
                    },
                    "start": {
                      "column": 31,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1821,
                  1822
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 80
                  },
                  "start": {
                    "column": 31,
                    "line": 80
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    1831,
                    1832
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 80
                    },
                    "start": {
                      "column": 41,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1831,
                  1832
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 80
                  },
                  "start": {
                    "column": 41,
                    "line": 80
                  }
                }
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "range": [
                  1844,
                  1850
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 80
                  },
                  "start": {
                    "column": 54,
                    "line": 80
                  }
                }
              },
              "trueType": {
                "type": "TSStringKeyword",
                "range": [
                  1835,
                  1841
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 80
                  },
                  "start": {
                    "column": 45,
                    "line": 80
                  }
                }
              },
              "range": [
                1821,
                1850
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 80
                },
                "start": {
                  "column": 31,
                  "line": 80
                }
              }
            }
          },
          "range": [
            1818,
            1850
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 80
            },
            "start": {
              "column": 28,
              "line": 80
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 80
          },
          "start": {
            "column": 14,
            "line": 80
          }
        },
        "range": [
          1804,
          1817
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
                "name": "A",
                "optional": false,
                "range": [
                  1815,
                  1816
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 80
                  },
                  "start": {
                    "column": 25,
                    "line": 80
                  }
                }
              },
              "range": [
                1815,
                1816
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 80
                },
                "start": {
                  "column": 25,
                  "line": 80
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
                1805,
                1806
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 80
                },
                "start": {
                  "column": 15,
                  "line": 80
                }
              }
            },
            "out": false,
            "range": [
              1805,
              1816
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 80
              },
              "start": {
                "column": 15,
                "line": 80
              }
            }
          }
        ]
      },
      "range": [
        1790,
        2078
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 90
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
