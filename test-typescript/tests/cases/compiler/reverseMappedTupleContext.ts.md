__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    1115
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          74,
          79
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
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
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 3
              }
            },
            "range": [
              86,
              115
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
                      104,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    104,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                },
                "range": [
                  98,
                  105
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
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  93,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 4
                  },
                  "start": {
                    "column": 3,
                    "line": 4
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
                      110,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 20,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    110,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
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
                      108,
                      109
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
                    108,
                    109
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
                  108,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "range": [
                88,
                115
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            }
          },
          "range": [
            83,
            115
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 5,
            "line": 5
          },
          "start": {
            "column": 2,
            "line": 5
          }
        },
        "range": [
          116,
          119
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              118,
              119
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "range": [
            118,
            119
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        },
        "range": [
          79,
          82
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
                80,
                81
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              80,
              81
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        120
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "result1",
            "optional": false,
            "range": [
              127,
              134
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      144,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "42",
                    "value": 42,
                    "range": [
                      151,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  143,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 6
                  },
                  "start": {
                    "column": 22,
                    "line": 6
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "range": [
                137,
                142
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              137,
              155
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          "range": [
            127,
            155
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        121,
        156
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
        "name": "test2",
        "optional": false,
        "range": [
          175,
          180
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 8
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
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 56,
                "line": 8
              }
            },
            "range": [
              214,
              243
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
                      232,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 9
                      },
                      "start": {
                        "column": 14,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    232,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "range": [
                  226,
                  233
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
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  221,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 9
                  },
                  "start": {
                    "column": 3,
                    "line": 9
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
                      238,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    238,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
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
                      236,
                      237
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
                    236,
                    237
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
                  236,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              },
              "range": [
                216,
                243
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 58,
                  "line": 8
                }
              }
            }
          },
          "range": [
            211,
            243
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 53,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 5,
            "line": 10
          },
          "start": {
            "column": 2,
            "line": 10
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
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "range": [
            246,
            247
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 8
          },
          "start": {
            "column": 22,
            "line": 8
          }
        },
        "range": [
          180,
          210
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
                  "type": "TSUnknownKeyword",
                  "range": [
                    200,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 8
                    },
                    "start": {
                      "column": 42,
                      "line": 8
                    }
                  }
                },
                "range": [
                  200,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 8
                  },
                  "start": {
                    "column": 42,
                    "line": 8
                  }
                }
              },
              "range": [
                191,
                209
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 33,
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
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              181,
              209
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 23,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        158,
        248
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "result2",
            "optional": false,
            "range": [
              255,
              262
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      272,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "42",
                    "value": 42,
                    "range": [
                      279,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 11
                      },
                      "start": {
                        "column": 30,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  271,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "range": [
                265,
                270
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              265,
              283
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          },
          "range": [
            255,
            283
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        249,
        284
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 11
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
        "name": "Schema",
        "optional": false,
        "range": [
          291,
          297
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                306,
                323
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    307,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSUnknownKeyword",
                  "range": [
                    315,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 13
                    },
                    "start": {
                      "column": 29,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 13
                },
                "start": {
                  "column": 20,
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
                300,
                306
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "range": [
              300,
              323
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  335,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 13
                  },
                  "start": {
                    "column": 49,
                    "line": 13
                  }
                }
              },
              "range": [
                335,
                344
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 13
                },
                "start": {
                  "column": 49,
                  "line": 13
                }
              }
            },
            "range": [
              326,
              344
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 13
              },
              "start": {
                "column": 40,
                "line": 13
              }
            }
          }
        ],
        "range": [
          300,
          344
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        }
      },
      "range": [
        286,
        345
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Definition",
        "optional": false,
        "range": [
          351,
          361
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
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
                383,
                384
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 14,
                  "line": 15
                }
              }
            },
            "range": [
              383,
              384
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 15
              },
              "start": {
                "column": 14,
                "line": 15
              }
            }
          },
          "range": [
            377,
            384
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 15
            },
            "start": {
              "column": 8,
              "line": 15
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            372,
            373
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 15
            },
            "start": {
              "column": 3,
              "line": 15
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 15
                  },
                  "start": {
                    "column": 22,
                    "line": 15
                  }
                },
                "range": [
                  391,
                  398
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
                        396,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 15
                        },
                        "start": {
                          "column": 27,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      396,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
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
                        394,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 25,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      394,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 15
                      },
                      "start": {
                        "column": 25,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    394,
                    398
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 15
                    },
                    "start": {
                      "column": 25,
                      "line": 15
                    }
                  }
                }
              },
              "range": [
                388,
                398
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 15
                },
                "start": {
                  "column": 19,
                  "line": 15
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  412,
                  418
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
                          415,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 15
                          },
                          "start": {
                            "column": 46,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        415,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 15
                        },
                        "start": {
                          "column": 46,
                          "line": 15
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
                          413,
                          414
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 15
                          },
                          "start": {
                            "column": 44,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        413,
                        414
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 15
                        },
                        "start": {
                          "column": 44,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      413,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 15
                      },
                      "start": {
                        "column": 44,
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
                    "column": 43,
                    "line": 15
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Definition",
                "optional": false,
                "range": [
                  402,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 15
                  },
                  "start": {
                    "column": 33,
                    "line": 15
                  }
                }
              },
              "range": [
                402,
                418
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              }
            }
          ],
          "range": [
            387,
            418
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 15
            },
            "start": {
              "column": 18,
              "line": 15
            }
          }
        },
        "range": [
          367,
          421
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 21,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 14
          },
          "start": {
            "column": 15,
            "line": 14
          }
        },
        "range": [
          361,
          364
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
                362,
                363
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              362,
              363
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 14
              },
              "start": {
                "column": 16,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        346,
        422
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
        "name": "create",
        "optional": false,
        "range": [
          440,
          446
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "name": "definition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 17
              },
              "start": {
                "column": 52,
                "line": 17
              }
            },
            "range": [
              475,
              490
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  487,
                  490
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
                        488,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 17
                        },
                        "start": {
                          "column": 65,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      488,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 17
                      },
                      "start": {
                        "column": 65,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 17
                  },
                  "start": {
                    "column": 64,
                    "line": 17
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Definition",
                "optional": false,
                "range": [
                  477,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 17
                  },
                  "start": {
                    "column": 54,
                    "line": 17
                  }
                }
              },
              "range": [
                477,
                490
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 17
                },
                "start": {
                  "column": 54,
                  "line": 17
                }
              }
            }
          },
          "range": [
            465,
            490
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 17
            },
            "start": {
              "column": 42,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 71,
            "line": 17
          },
          "start": {
            "column": 68,
            "line": 17
          }
        },
        "range": [
          491,
          494
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              493,
              494
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 17
              },
              "start": {
                "column": 70,
                "line": 17
              }
            }
          },
          "range": [
            493,
            494
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 17
            },
            "start": {
              "column": 70,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 17
          },
          "start": {
            "column": 23,
            "line": 17
          }
        },
        "range": [
          446,
          464
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
                "name": "Schema",
                "optional": false,
                "range": [
                  457,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 17
                  },
                  "start": {
                    "column": 34,
                    "line": 17
                  }
                }
              },
              "range": [
                457,
                463
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 17
                },
                "start": {
                  "column": 34,
                  "line": 17
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
                447,
                448
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              447,
              463
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 17
              },
              "start": {
                "column": 24,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        423,
        495
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "created1",
            "optional": false,
            "range": [
              502,
              510
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        527,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 18
                        },
                        "start": {
                          "column": 31,
                          "line": 18
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      521,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 18
                      },
                      "start": {
                        "column": 25,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "raw": "\"\"",
                          "value": "",
                          "range": [
                            537,
                            539
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 18
                            },
                            "start": {
                              "column": 41,
                              "line": 18
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          531,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 18
                          },
                          "start": {
                            "column": 35,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      530,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
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
                  520,
                  541
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 18
                  },
                  "start": {
                    "column": 24,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "range": [
                513,
                519
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              513,
              542
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 18
              },
              "start": {
                "column": 17,
                "line": 18
              }
            }
          },
          "range": [
            502,
            542
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        496,
        543
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 18
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
            "name": "created2",
            "optional": false,
            "range": [
              550,
              558
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        572,
                        573
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          581,
                          582
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
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        575,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 20
                        },
                        "start": {
                          "column": 5,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      572,
                      582
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        586,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 21
                        },
                        "start": {
                          "column": 2,
                          "line": 21
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              596,
                              598
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 21
                              },
                              "start": {
                                "column": 12,
                                "line": 21
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            590,
                            598
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 21
                            },
                            "start": {
                              "column": 6,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "range": [
                        589,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 21
                        },
                        "start": {
                          "column": 5,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      586,
                      599
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 21
                      },
                      "start": {
                        "column": 2,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  568,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 22
                  },
                  "start": {
                    "column": 24,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "range": [
                561,
                567
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 19
                },
                "start": {
                  "column": 17,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              561,
              603
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 22
              },
              "start": {
                "column": 17,
                "line": 19
              }
            }
          },
          "range": [
            550,
            603
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        544,
        604
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          632,
          726
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "allowUnreachableCode",
              "optional": false,
              "range": [
                636,
                656
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 25
                },
                "start": {
                  "column": 2,
                  "line": 25
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
                  "column": 32,
                  "line": 25
                },
                "start": {
                  "column": 23,
                  "line": 25
                }
              },
              "range": [
                657,
                666
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  659,
                  666
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 25,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              636,
              667
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "allowUnusedLabels",
              "optional": false,
              "range": [
                670,
                687
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 26
                },
                "start": {
                  "column": 2,
                  "line": 26
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
                  "column": 29,
                  "line": 26
                },
                "start": {
                  "column": 20,
                  "line": 26
                }
              },
              "range": [
                688,
                697
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  690,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              670,
              698
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
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alwaysStrict",
              "optional": false,
              "range": [
                701,
                713
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 2,
                  "line": 27
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
                  "column": 24,
                  "line": 27
                },
                "start": {
                  "column": 15,
                  "line": 27
                }
              },
              "range": [
                714,
                723
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  716,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 27
                  },
                  "start": {
                    "column": 17,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              701,
              724
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 26,
            "line": 24
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CompilerOptions",
        "optional": false,
        "range": [
          616,
          631
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 24
          },
          "start": {
            "column": 10,
            "line": 24
          }
        }
      },
      "range": [
        606,
        726
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeepLiteralStrings",
        "optional": false,
        "range": [
          732,
          750
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
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
                789,
                790
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
            "range": [
              789,
              790
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
          "range": [
            783,
            790
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 30
            },
            "start": {
              "column": 8,
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
            778,
            779
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 30
            },
            "start": {
              "column": 3,
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
                795,
                796
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 30
                }
              }
            },
            "range": [
              795,
              796
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 30
              },
              "start": {
                "column": 20,
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
                793,
                794
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 30
                },
                "start": {
                  "column": 18,
                  "line": 30
                }
              }
            },
            "range": [
              793,
              794
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 30
              },
              "start": {
                "column": 18,
                "line": 30
              }
            }
          },
          "range": [
            793,
            797
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 30
            },
            "start": {
              "column": 18,
              "line": 30
            }
          }
        },
        "range": [
          773,
          800
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 46,
            "line": 29
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 29
          },
          "start": {
            "column": 23,
            "line": 29
          }
        },
        "range": [
          750,
          770
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
                  761,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 29
                  },
                  "start": {
                    "column": 34,
                    "line": 29
                  }
                }
              },
              "range": [
                761,
                769
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 29
                },
                "start": {
                  "column": 34,
                  "line": 29
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
                751,
                752
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 24,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              751,
              769
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
          }
        ]
      },
      "range": [
        727,
        801
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 29
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
        "name": "test4",
        "optional": false,
        "range": [
          819,
          824
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 32
          },
          "start": {
            "column": 17,
            "line": 32
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
                "column": 1,
                "line": 36
              },
              "start": {
                "column": 62,
                "line": 32
              }
            },
            "range": [
              864,
              962
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
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
                          882,
                          883
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 33
                          },
                          "start": {
                            "column": 14,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        882,
                        883
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 33
                        },
                        "start": {
                          "column": 14,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      876,
                      883
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CompilerOptions",
                        "optional": false,
                        "range": [
                          892,
                          907
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 33
                          },
                          "start": {
                            "column": 24,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        892,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 33
                        },
                        "start": {
                          "column": 24,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      886,
                      907
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  876,
                  907
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  871,
                  872
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 33
                  },
                  "start": {
                    "column": 3,
                    "line": 33
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
                      "name": "dependencies",
                      "optional": false,
                      "range": [
                        916,
                        928
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 34
                        },
                        "start": {
                          "column": 4,
                          "line": 34
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
                          "column": 42,
                          "line": 34
                        },
                        "start": {
                          "column": 16,
                          "line": 34
                        }
                      },
                      "range": [
                        928,
                        954
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            948,
                            954
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
                                    951,
                                    952
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 34
                                    }
                                  }
                                },
                                "range": [
                                  951,
                                  952
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 34
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
                                    949,
                                    950
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 34
                                    }
                                  }
                                },
                                "range": [
                                  949,
                                  950
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 34
                                  }
                                }
                              },
                              "range": [
                                949,
                                953
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 34
                                },
                                "start": {
                                  "column": 37,
                                  "line": 34
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 34
                            },
                            "start": {
                              "column": 36,
                              "line": 34
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KeepLiteralStrings",
                          "optional": false,
                          "range": [
                            930,
                            948
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 34
                            },
                            "start": {
                              "column": 18,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          930,
                          954
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 34
                          },
                          "start": {
                            "column": 18,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      916,
                      955
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 34
                      },
                      "start": {
                        "column": 4,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  910,
                  959
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 35
                  },
                  "start": {
                    "column": 42,
                    "line": 33
                  }
                }
              },
              "range": [
                866,
                962
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 36
                },
                "start": {
                  "column": 64,
                  "line": 32
                }
              }
            }
          },
          "range": [
            861,
            962
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 59,
              "line": 32
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 5,
            "line": 36
          },
          "start": {
            "column": 2,
            "line": 36
          }
        },
        "range": [
          963,
          966
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              965,
              966
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "range": [
            965,
            966
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 32
          },
          "start": {
            "column": 22,
            "line": 32
          }
        },
        "range": [
          824,
          860
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
                  841,
                  859
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      842,
                      848
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 32
                      },
                      "start": {
                        "column": 40,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        850,
                        856
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 32
                        },
                        "start": {
                          "column": 48,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      850,
                      858
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 32
                      },
                      "start": {
                        "column": 48,
                        "line": 32
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 32
                  },
                  "start": {
                    "column": 39,
                    "line": 32
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  835,
                  841
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 32
                  },
                  "start": {
                    "column": 33,
                    "line": 32
                  }
                }
              },
              "range": [
                835,
                859
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 32
                },
                "start": {
                  "column": 33,
                  "line": 32
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
                825,
                826
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 32
                },
                "start": {
                  "column": 23,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              825,
              859
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 32
              },
              "start": {
                "column": 23,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        802,
        967
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "result4",
            "optional": false,
            "range": [
              974,
              981
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
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
                      "name": "alwaysStrict",
                      "optional": false,
                      "range": [
                        994,
                        1006
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 38
                        },
                        "start": {
                          "column": 2,
                          "line": 38
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
                            "name": "dependencies",
                            "optional": false,
                            "range": [
                              1014,
                              1026
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 39
                              },
                              "start": {
                                "column": 4,
                                "line": 39
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "raw": "\"foo\"",
                                "value": "foo",
                                "range": [
                                  1029,
                                  1034
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 39
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "raw": "\"bar\"",
                                "value": "bar",
                                "range": [
                                  1036,
                                  1041
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 39
                                  }
                                }
                              }
                            ],
                            "range": [
                              1028,
                              1042
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 39
                              },
                              "start": {
                                "column": 18,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            1014,
                            1042
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 39
                            },
                            "start": {
                              "column": 4,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "range": [
                        1008,
                        1047
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 40
                        },
                        "start": {
                          "column": 16,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      994,
                      1047
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 40
                      },
                      "start": {
                        "column": 2,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "allowUnusedLabels",
                      "optional": false,
                      "range": [
                        1051,
                        1068
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 41
                        },
                        "start": {
                          "column": 2,
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
                            "name": "dependencies",
                            "optional": false,
                            "range": [
                              1076,
                              1088
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 42
                              },
                              "start": {
                                "column": 4,
                                "line": 42
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "raw": "\"baz\"",
                                "value": "baz",
                                "range": [
                                  1091,
                                  1096
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 42
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "raw": "\"qwe\"",
                                "value": "qwe",
                                "range": [
                                  1098,
                                  1103
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 42
                                  }
                                }
                              }
                            ],
                            "range": [
                              1090,
                              1104
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 42
                              },
                              "start": {
                                "column": 18,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            1076,
                            1104
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 42
                            },
                            "start": {
                              "column": 4,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "range": [
                        1070,
                        1109
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 43
                        },
                        "start": {
                          "column": 21,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1051,
                      1109
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 43
                      },
                      "start": {
                        "column": 2,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  990,
                  1112
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 37
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "range": [
                984,
                989
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 37
                },
                "start": {
                  "column": 16,
                  "line": 37
                }
              }
            },
            "optional": false,
            "range": [
              984,
              1113
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 44
              },
              "start": {
                "column": 16,
                "line": 37
              }
            }
          },
          "range": [
            974,
            1113
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        968,
        1114
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
