__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    508
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Transform1",
        "optional": false,
        "range": [
          28,
          38
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
                      "line": 3
                    }
                  },
                  "range": [
                    51,
                    59
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      53,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 30,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  46,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              },
              "range": [
                61,
                65
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    64,
                    65
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
                  64,
                  65
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
            },
            "range": [
              45,
              65
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSStringKeyword",
              "range": [
                70,
                76
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 3
                },
                "start": {
                  "column": 47,
                  "line": 3
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
                  85,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 3
                  },
                  "start": {
                    "column": 62,
                    "line": 3
                  }
                }
              },
              "range": [
                85,
                86
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 3
                },
                "start": {
                  "column": 62,
                  "line": 3
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                101,
                106
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 3
                },
                "start": {
                  "column": 78,
                  "line": 3
                }
              }
            },
            "trueType": {
              "type": "TSUndefinedKeyword",
              "range": [
                89,
                98
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 3
                },
                "start": {
                  "column": 66,
                  "line": 3
                }
              }
            },
            "range": [
              70,
              106
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 3
              },
              "start": {
                "column": 47,
                "line": 3
              }
            }
          }
        ],
        "range": [
          44,
          107
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          38,
          41
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
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              39,
              40
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        23,
        108
      ],
      "loc": {
        "end": {
          "column": 85,
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
        "name": "Transform2",
        "optional": false,
        "range": [
          114,
          124
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "range": [
            130,
            136
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 4
            },
            "start": {
              "column": 21,
              "line": 4
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
              145,
              146
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
            145,
            146
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
        "falseType": {
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
                    "column": 91,
                    "line": 4
                  },
                  "start": {
                    "column": 83,
                    "line": 4
                  }
                },
                "range": [
                  192,
                  200
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    194,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 4
                    },
                    "start": {
                      "column": 85,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                187,
                200
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 4
                },
                "start": {
                  "column": 78,
                  "line": 4
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 97,
                "line": 4
              },
              "start": {
                "column": 93,
                "line": 4
              }
            },
            "range": [
              202,
              206
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  205,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 4
                  },
                  "start": {
                    "column": 96,
                    "line": 4
                  }
                }
              },
              "range": [
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 4
                },
                "start": {
                  "column": 96,
                  "line": 4
                }
              }
            }
          },
          "range": [
            186,
            206
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 4
            },
            "start": {
              "column": 77,
              "line": 4
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
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
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
                        "line": 4
                      }
                    },
                    "range": [
                      156,
                      164
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        158,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 4
                        },
                        "start": {
                          "column": 49,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    151,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 4
                    },
                    "start": {
                      "column": 42,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 4
                  },
                  "start": {
                    "column": 57,
                    "line": 4
                  }
                },
                "range": [
                  166,
                  170
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      169,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 4
                      },
                      "start": {
                        "column": 60,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    169,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 4
                    },
                    "start": {
                      "column": 60,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                150,
                170
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 4
                },
                "start": {
                  "column": 41,
                  "line": 4
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                174,
                183
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 4
                },
                "start": {
                  "column": 65,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            149,
            183
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 4
            },
            "start": {
              "column": 40,
              "line": 4
            }
          }
        },
        "range": [
          130,
          206
        ],
        "loc": {
          "end": {
            "column": 97,
            "line": 4
          },
          "start": {
            "column": 21,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        },
        "range": [
          124,
          127
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
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              125,
              126
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        109,
        207
      ],
      "loc": {
        "end": {
          "column": 98,
          "line": 4
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      275,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "range": [
                    270,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                "optional": true,
                "range": [
                  270,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "range": [
                270,
                283
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              270,
              284
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      294,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "range": [
                    289,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                },
                "optional": true,
                "range": [
                  289,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "range": [
                289,
                302
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              289,
              303
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          264,
          305
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 55,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          218,
          222
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 6
              },
              "start": {
                "column": 19,
                "line": 6
              }
            },
            "range": [
              228,
              243
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  240,
                  243
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
                        241,
                        242
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 32,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      241,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 6
                      },
                      "start": {
                        "column": 32,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 31,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transform1",
                "optional": false,
                "range": [
                  230,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              "range": [
                230,
                243
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              }
            }
          },
          "range": [
            226,
            243
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 6
              },
              "start": {
                "column": 38,
                "line": 6
              }
            },
            "range": [
              247,
              262
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  259,
                  262
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
                        260,
                        261
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 6
                        },
                        "start": {
                          "column": 51,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      260,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 6
                      },
                      "start": {
                        "column": 51,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 6
                  },
                  "start": {
                    "column": 50,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transform2",
                "optional": false,
                "range": [
                  249,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 6
                  },
                  "start": {
                    "column": 40,
                    "line": 6
                  }
                }
              },
              "range": [
                249,
                262
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 6
                },
                "start": {
                  "column": 40,
                  "line": 6
                }
              }
            }
          },
          "range": [
            245,
            262
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 6
            },
            "start": {
              "column": 36,
              "line": 6
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 13,
            "line": 6
          }
        },
        "range": [
          222,
          225
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
                223,
                224
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              223,
              224
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        209,
        305
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    386,
                    387
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
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      390,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    390,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  386,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              382,
              393
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          376,
          414
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 69,
            "line": 11
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
          316,
          318
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            },
            "range": [
              323,
              374
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
                      325,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 18,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    325,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 18,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSStringKeyword",
                    "range": [
                      330,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
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
                        345,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 11
                        },
                        "start": {
                          "column": 38,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      345,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 11
                      },
                      "start": {
                        "column": 38,
                        "line": 11
                      }
                    }
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "range": [
                      368,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 11
                      },
                      "start": {
                        "column": 61,
                        "line": 11
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          349,
                          353
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 11
                          },
                          "start": {
                            "column": 42,
                            "line": 11
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          356,
                          365
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 11
                          },
                          "start": {
                            "column": 49,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      349,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 11
                      },
                      "start": {
                        "column": 42,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    330,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 11
                    },
                    "start": {
                      "column": 23,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                325,
                374
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            }
          },
          "range": [
            322,
            374
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 11
            },
            "start": {
              "column": 15,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 11
          }
        },
        "range": [
          318,
          321
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
                319,
                320
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              319,
              320
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        307,
        414
      ],
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    479,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      483,
                      484
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    483,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  479,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              475,
              486
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          469,
          507
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 53,
            "line": 15
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
          425,
          427
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
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
                "column": 51,
                "line": 15
              },
              "start": {
                "column": 44,
                "line": 15
              }
            },
            "range": [
              460,
              467
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
                      462,
                      463
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
                    462,
                    463
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
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      466,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 15
                      },
                      "start": {
                        "column": 50,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    466,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 15
                    },
                    "start": {
                      "column": 50,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                462,
                467
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 15
                },
                "start": {
                  "column": 46,
                  "line": 15
                }
              }
            }
          },
          "range": [
            459,
            467
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 15
            },
            "start": {
              "column": 43,
              "line": 15
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 15
          }
        },
        "range": [
          427,
          458
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
                428,
                429
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              428,
              429
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNullKeyword",
                  "range": [
                    441,
                    445
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
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    448,
                    457
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 15
                    },
                    "start": {
                      "column": 32,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                441,
                457
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 25,
                  "line": 15
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
                431,
                432
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              431,
              457
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        416,
        507
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
      "line": 3
    }
  },
  "hashbang": null
}
```
