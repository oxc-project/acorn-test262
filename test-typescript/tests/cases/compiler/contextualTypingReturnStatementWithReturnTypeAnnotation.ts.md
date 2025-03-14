__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    446
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropOfRaw",
        "optional": false,
        "range": [
          5,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    29,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 29,
                      "line": 1
                    }
                  }
                },
                "range": [
                  29,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 29,
                    "line": 1
                  }
                }
              },
              "range": [
                29,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "range": [
              20,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"not-array\"",
              "value": "not-array",
              "range": [
                35,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              }
            },
            "range": [
              35,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"no-prop\"",
              "value": "no-prop",
              "range": [
                49,
                58
              ],
              "loc": {
                "end": {
                  "column": 58,
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
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 49,
                "line": 1
              }
            }
          }
        ],
        "range": [
          20,
          58
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          17
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
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        59
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "isString",
        "optional": false,
        "range": [
          78,
          86
        ],
        "loc": {
          "end": {
            "column": 25,
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
          "name": "text",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            },
            "range": [
              91,
              100
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                93,
                100
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            }
          },
          "range": [
            87,
            100
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
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
            "column": 56,
            "line": 3
          },
          "start": {
            "column": 40,
            "line": 3
          }
        },
        "range": [
          101,
          117
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "range": [
              103,
              107
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 3
              },
              "start": {
                "column": 50,
                "line": 3
              }
            },
            "range": [
              111,
              117
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                111,
                117
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 3
                },
                "start": {
                  "column": 50,
                  "line": 3
                }
              }
            }
          },
          "range": [
            103,
            117
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        }
      },
      "range": [
        61,
        118
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "getPropFromRaw",
        "optional": false,
        "range": [
          137,
          151
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            },
            "range": [
              162,
              210
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"files\"",
                    "value": "files",
                    "range": [
                      164,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    164,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"include\"",
                    "value": "include",
                    "range": [
                      174,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 6
                      },
                      "start": {
                        "column": 18,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    174,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 18,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"exclude\"",
                    "value": "exclude",
                    "range": [
                      186,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    186,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 30,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"references\"",
                    "value": "references",
                    "range": [
                      198,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 6
                      },
                      "start": {
                        "column": 42,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    198,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 6
                    },
                    "start": {
                      "column": 42,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                164,
                210
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            }
          },
          "range": [
            158,
            210
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 6
            },
            "start": {
              "column": 2,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "validateElement",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 7
              }
            },
            "range": [
              229,
              258
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 7
                      },
                      "start": {
                        "column": 25,
                        "line": 7
                      }
                    },
                    "range": [
                      237,
                      246
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        239,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 7
                        },
                        "start": {
                          "column": 27,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    232,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 7
                    },
                    "start": {
                      "column": 20,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 7
                  },
                  "start": {
                    "column": 36,
                    "line": 7
                  }
                },
                "range": [
                  248,
                  258
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    251,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 7
                    },
                    "start": {
                      "column": 39,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                231,
                258
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            }
          },
          "range": [
            214,
            258
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 7
            },
            "start": {
              "column": 2,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "elementTypeName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            },
            "range": [
              277,
              285
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                279,
                285
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            }
          },
          "range": [
            262,
            285
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 8
            },
            "start": {
              "column": 2,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 1,
            "line": 9
          }
        },
        "range": [
          287,
          301
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              298,
              301
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
                    299,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "range": [
                  299,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropOfRaw",
            "optional": false,
            "range": [
              289,
              298
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          },
          "range": [
            289,
            301
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 3,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 5
          },
          "start": {
            "column": 31,
            "line": 5
          }
        },
        "range": [
          151,
          154
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
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        120,
        302
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    417,
                    421
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 24,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "range": [
                    423,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 14
                    },
                    "start": {
                      "column": 30,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    433,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 14
                    },
                    "start": {
                      "column": 40,
                      "line": 14
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPropFromRaw",
                "optional": false,
                "range": [
                  402,
                  416
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                402,
                442
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            },
            "range": [
              395,
              443
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          }
        ],
        "range": [
          391,
          445
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 21,
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
        "name": "getSpecsFromRaw",
        "optional": false,
        "range": [
          313,
          328
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            },
            "range": [
              336,
              369
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"files\"",
                    "value": "files",
                    "range": [
                      338,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    338,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"include\"",
                    "value": "include",
                    "range": [
                      348,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 18,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    348,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"exclude\"",
                    "value": "exclude",
                    "range": [
                      360,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 12
                      },
                      "start": {
                        "column": 30,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    360,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 12
                    },
                    "start": {
                      "column": 30,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                338,
                369
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            }
          },
          "range": [
            332,
            369
          ],
          "loc": {
            "end": {
              "column": 39,
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
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 1,
            "line": 13
          }
        },
        "range": [
          371,
          390
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              382,
              390
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  383,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropOfRaw",
            "optional": false,
            "range": [
              373,
              382
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 13
              },
              "start": {
                "column": 3,
                "line": 13
              }
            }
          },
          "range": [
            373,
            390
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 13
            },
            "start": {
              "column": 3,
              "line": 13
            }
          }
        }
      },
      "range": [
        304,
        445
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
