__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    61,
    690
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConditionalType",
        "optional": false,
        "range": [
          66,
          81
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
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
              87,
              88
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 26,
                "line": 2
              }
            }
          },
          "range": [
            87,
            88
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 26,
              "line": 2
            }
          }
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "range": [
            97,
            103
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 2
            },
            "start": {
              "column": 36,
              "line": 2
            }
          }
        },
        "falseType": {
          "type": "TSNumberKeyword",
          "range": [
            115,
            121
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 2
            },
            "start": {
              "column": 54,
              "line": 2
            }
          }
        },
        "trueType": {
          "type": "TSStringKeyword",
          "range": [
            106,
            112
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 2
            },
            "start": {
              "column": 45,
              "line": 2
            }
          }
        },
        "range": [
          87,
          121
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 2
          },
          "start": {
            "column": 26,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 20,
            "line": 2
          }
        },
        "range": [
          81,
          84
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
                82,
                83
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
            "out": false,
            "range": [
              82,
              83
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
          }
        ]
      },
      "range": [
        61,
        122
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  206,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  211,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              "range": [
                206,
                214
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              199,
              215
            ],
            "loc": {
              "end": {
                "column": 20,
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
          193,
          217
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 69,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConditionalOrUndefined",
        "optional": false,
        "range": [
          133,
          155
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 4
          },
          "start": {
            "column": 36,
            "line": 4
          }
        },
        "range": [
          160,
          192
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  177,
                  180
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
                        178,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 4
                        },
                        "start": {
                          "column": 54,
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
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 54,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 4
                  },
                  "start": {
                    "column": 53,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConditionalType",
                "optional": false,
                "range": [
                  162,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 4
                  },
                  "start": {
                    "column": 38,
                    "line": 4
                  }
                }
              },
              "range": [
                162,
                180
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 4
                },
                "start": {
                  "column": 38,
                  "line": 4
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                183,
                192
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 4
                },
                "start": {
                  "column": 59,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            162,
            192
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 4
            },
            "start": {
              "column": 38,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 4
          }
        },
        "range": [
          155,
          158
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
                156,
                157
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
            "out": false,
            "range": [
              156,
              157
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
          }
        ]
      },
      "range": [
        124,
        217
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "TSNonNullExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConditionalOrUndefined",
                  "optional": false,
                  "range": [
                    282,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "optional": false,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    304,
                    307
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
                          305,
                          306
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 9
                          },
                          "start": {
                            "column": 34,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        305,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 9
                        },
                        "start": {
                          "column": 34,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 9
                    },
                    "start": {
                      "column": 33,
                      "line": 9
                    }
                  }
                },
                "range": [
                  282,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "range": [
                282,
                310
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              275,
              311
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          269,
          332
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 50,
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
        "name": "JustConditional",
        "optional": false,
        "range": [
          228,
          243
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 8
          },
          "start": {
            "column": 29,
            "line": 8
          }
        },
        "range": [
          248,
          268
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              265,
              268
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
                    266,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 8
                    },
                    "start": {
                      "column": 47,
                      "line": 8
                    }
                  }
                },
                "range": [
                  266,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 8
                  },
                  "start": {
                    "column": 47,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 8
              },
              "start": {
                "column": 46,
                "line": 8
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ConditionalType",
            "optional": false,
            "range": [
              250,
              265
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 31,
                "line": 8
              }
            }
          },
          "range": [
            250,
            268
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 8
            },
            "start": {
              "column": 31,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 8
          },
          "start": {
            "column": 24,
            "line": 8
          }
        },
        "range": [
          243,
          246
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
                244,
                245
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
            "out": false,
            "range": [
              244,
              245
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
          }
        ]
      },
      "range": [
        219,
        332
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  417,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  422,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 15
                  }
                }
              },
              "range": [
                417,
                425
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              410,
              426
            ],
            "loc": {
              "end": {
                "column": 20,
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
          404,
          428
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 48,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericOrUndefined",
        "optional": false,
        "range": [
          365,
          383
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 14
          },
          "start": {
            "column": 32,
            "line": 14
          }
        },
        "range": [
          388,
          403
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
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
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 34,
                    "line": 14
                  }
                }
              },
              "range": [
                390,
                391
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 14
                },
                "start": {
                  "column": 34,
                  "line": 14
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                394,
                403
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 14
                },
                "start": {
                  "column": 38,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            390,
            403
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 14
            },
            "start": {
              "column": 34,
              "line": 14
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 14
          },
          "start": {
            "column": 27,
            "line": 14
          }
        },
        "range": [
          383,
          386
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
                384,
                385
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 28,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              384,
              385
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 14
              },
              "start": {
                "column": 28,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        356,
        428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
              "type": "TSNonNullExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "genericOrUndefined",
                  "optional": false,
                  "range": [
                    472,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 19
                    },
                    "start": {
                      "column": 11,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    490,
                    493
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
                          491,
                          492
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 19
                          },
                          "start": {
                            "column": 30,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        491,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 19
                        },
                        "start": {
                          "column": 30,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 19
                    },
                    "start": {
                      "column": 29,
                      "line": 19
                    }
                  }
                },
                "range": [
                  472,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 11,
                    "line": 19
                  }
                }
              },
              "range": [
                472,
                496
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "range": [
              465,
              497
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          459,
          511
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 29,
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
        "name": "JustGeneric",
        "optional": false,
        "range": [
          439,
          450
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 18
          },
          "start": {
            "column": 25,
            "line": 18
          }
        },
        "range": [
          455,
          458
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              457,
              458
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 27,
                "line": 18
              }
            }
          },
          "range": [
            457,
            458
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 18
            },
            "start": {
              "column": 27,
              "line": 18
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 18
          },
          "start": {
            "column": 20,
            "line": 18
          }
        },
        "range": [
          450,
          453
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
                451,
                452
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              451,
              452
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 21,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        430,
        511
      ],
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
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "range": [
                564,
                567
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
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
                    570,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 25
                    },
                    "start": {
                      "column": 15,
                      "line": 25
                    }
                  }
                },
                "range": [
                  570,
                  571
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 25
                  },
                  "start": {
                    "column": 15,
                    "line": 25
                  }
                }
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "range": [
                  580,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 25
                  },
                  "start": {
                    "column": 25,
                    "line": 25
                  }
                }
              },
              "falseType": {
                "type": "TSStringKeyword",
                "range": [
                  598,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 25
                  },
                  "start": {
                    "column": 43,
                    "line": 25
                  }
                }
              },
              "trueType": {
                "type": "TSStringKeyword",
                "range": [
                  589,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 25
                  },
                  "start": {
                    "column": 34,
                    "line": 25
                  }
                }
              },
              "range": [
                570,
                604
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              }
            },
            "range": [
              559,
              605
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
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
                  "column": 10,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
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
                    619,
                    620
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                },
                "range": [
                  619,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "range": [
                  629,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 26
                  },
                  "start": {
                    "column": 23,
                    "line": 26
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  644,
                  649
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 26
                  },
                  "start": {
                    "column": 38,
                    "line": 26
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "One",
                  "optional": false,
                  "range": [
                    638,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 26
                    },
                    "start": {
                      "column": 32,
                      "line": 26
                    }
                  }
                },
                "range": [
                  638,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 26
                  },
                  "start": {
                    "column": 32,
                    "line": 26
                  }
                }
              },
              "range": [
                619,
                649
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              }
            },
            "range": [
              610,
              650
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 27
                      },
                      "start": {
                        "column": 11,
                        "line": 27
                      }
                    },
                    "range": [
                      662,
                      667
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "One",
                        "optional": false,
                        "range": [
                          664,
                          667
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 27
                          },
                          "start": {
                            "column": 13,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        664,
                        667
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 27
                        },
                        "start": {
                          "column": 13,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    661,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 27
                    },
                    "start": {
                      "column": 10,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        670,
                        674
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 27
                        },
                        "start": {
                          "column": 19,
                          "line": 27
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        678,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 27
                        },
                        "start": {
                          "column": 27,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      670,
                      681
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 27
                      },
                      "start": {
                        "column": 19,
                        "line": 27
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        685,
                        686
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 27
                        },
                        "start": {
                          "column": 34,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      685,
                      686
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 27
                      },
                      "start": {
                        "column": 34,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    670,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 27
                    },
                    "start": {
                      "column": 19,
                      "line": 27
                    }
                  }
                },
                "range": [
                  661,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              655,
              687
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          553,
          689
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 16,
            "line": 24
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          546,
          547
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 24
          },
          "start": {
            "column": 10,
            "line": 24
          }
        },
        "range": [
          547,
          550
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
                548,
                549
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              548,
              549
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        537,
        689
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
