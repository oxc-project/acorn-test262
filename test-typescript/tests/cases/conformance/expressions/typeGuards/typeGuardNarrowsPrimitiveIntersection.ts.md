__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    559
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
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
              "name": "__tag",
              "optional": false,
              "range": [
                12,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 12,
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
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              },
              "range": [
                17,
                22
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  19,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ],
        "range": [
          11,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
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
        "name": "isNonBlank",
        "optional": false,
        "range": [
          42,
          52
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
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
                "column": 41,
                "line": 2
              },
              "start": {
                "column": 33,
                "line": 2
              }
            },
            "range": [
              58,
              66
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                60,
                66
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
                }
              }
            }
          },
          "range": [
            53,
            66
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 2
            },
            "start": {
              "column": 28,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 2
          },
          "start": {
            "column": 43,
            "line": 2
          }
        },
        "range": [
          68,
          93
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              70,
              75
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 2
              },
              "start": {
                "column": 45,
                "line": 2
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 2
              },
              "start": {
                "column": 55,
                "line": 2
              }
            },
            "range": [
              80,
              92
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    80,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 2
                    },
                    "start": {
                      "column": 55,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tag",
                    "optional": false,
                    "range": [
                      89,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 2
                      },
                      "start": {
                        "column": 64,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    89,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 2
                    },
                    "start": {
                      "column": 64,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                80,
                92
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 2
                },
                "start": {
                  "column": 55,
                  "line": 2
                }
              }
            }
          },
          "range": [
            70,
            93
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 2
            },
            "start": {
              "column": 45,
              "line": 2
            }
          }
        }
      },
      "range": [
        25,
        94
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
        "name": "doThis",
        "optional": false,
        "range": [
          112,
          118
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            },
            "range": [
              124,
              138
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    126,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tag",
                    "optional": false,
                    "range": [
                      135,
                      138
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
                  "range": [
                    135,
                    138
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
                }
              ],
              "range": [
                126,
                138
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            }
          },
          "range": [
            119,
            138
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 3
          },
          "start": {
            "column": 44,
            "line": 3
          }
        },
        "range": [
          139,
          145
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            141,
            145
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 3
            },
            "start": {
              "column": 46,
              "line": 3
            }
          }
        }
      },
      "range": [
        95,
        146
      ],
      "loc": {
        "end": {
          "column": 51,
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
        "name": "doThat",
        "optional": false,
        "range": [
          164,
          170
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
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
                "column": 37,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            },
            "range": [
              176,
              184
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                178,
                184
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              }
            }
          },
          "range": [
            171,
            184
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 4
          },
          "start": {
            "column": 39,
            "line": 4
          }
        },
        "range": [
          186,
          192
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            188,
            192
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 4
            },
            "start": {
              "column": 41,
              "line": 4
            }
          }
        }
      },
      "range": [
        147,
        193
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              },
              "range": [
                203,
                211
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  205,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
              198,
              211
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            198,
            211
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        194,
        212
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    277,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThat",
                "optional": false,
                "range": [
                  270,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "range": [
                270,
                283
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
          264,
          286
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    249,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThis",
                "optional": false,
                "range": [
                  242,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                242,
                255
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
              242,
              256
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
          }
        ],
        "range": [
          236,
          258
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 23,
            "line": 6
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              228,
              233
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 15,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNonBlank",
          "optional": false,
          "range": [
            217,
            227
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          217,
          234
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 6
          },
          "start": {
            "column": 4,
            "line": 6
          }
        }
      },
      "range": [
        213,
        286
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          305,
          307
        ],
        "members": [],
        "loc": {
          "end": {
            "column": 18,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 13
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "range": [
          300,
          304
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 13
          }
        }
      },
      "range": [
        289,
        307
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
        "name": "isNonBlank2",
        "optional": false,
        "range": [
          325,
          336
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 14
          }
        }
      },
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
                "column": 42,
                "line": 14
              },
              "start": {
                "column": 34,
                "line": 14
              }
            },
            "range": [
              342,
              350
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                344,
                350
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 14
                },
                "start": {
                  "column": 36,
                  "line": 14
                }
              }
            }
          },
          "range": [
            337,
            350
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 14
            },
            "start": {
              "column": 29,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 14
          },
          "start": {
            "column": 44,
            "line": 14
          }
        },
        "range": [
          352,
          378
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              354,
              359
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 14
              },
              "start": {
                "column": 46,
                "line": 14
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 14
              },
              "start": {
                "column": 56,
                "line": 14
              }
            },
            "range": [
              364,
              377
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    364,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 14
                    },
                    "start": {
                      "column": 56,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tag2",
                    "optional": false,
                    "range": [
                      373,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 14
                      },
                      "start": {
                        "column": 65,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    373,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 14
                    },
                    "start": {
                      "column": 65,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                364,
                377
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 14
                },
                "start": {
                  "column": 56,
                  "line": 14
                }
              }
            }
          },
          "range": [
            354,
            378
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 14
            },
            "start": {
              "column": 46,
              "line": 14
            }
          }
        }
      },
      "range": [
        308,
        379
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 14
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
        "name": "doThis2",
        "optional": false,
        "range": [
          397,
          404
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
          }
        }
      },
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
                "column": 45,
                "line": 15
              },
              "start": {
                "column": 30,
                "line": 15
              }
            },
            "range": [
              410,
              425
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    412,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 15
                    },
                    "start": {
                      "column": 32,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tag2",
                    "optional": false,
                    "range": [
                      421,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 15
                      },
                      "start": {
                        "column": 41,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    421,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 15
                    },
                    "start": {
                      "column": 41,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                412,
                425
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 15
                },
                "start": {
                  "column": 32,
                  "line": 15
                }
              }
            }
          },
          "range": [
            405,
            425
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 15
          },
          "start": {
            "column": 46,
            "line": 15
          }
        },
        "range": [
          426,
          432
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            428,
            432
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 15
            },
            "start": {
              "column": 48,
              "line": 15
            }
          }
        }
      },
      "range": [
        380,
        433
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
        "name": "doThat2",
        "optional": false,
        "range": [
          451,
          458
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 16
          }
        }
      },
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
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 30,
                "line": 16
              }
            },
            "range": [
              464,
              472
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                466,
                472
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 16
                }
              }
            }
          },
          "range": [
            459,
            472
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 25,
              "line": 16
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 16
          },
          "start": {
            "column": 40,
            "line": 16
          }
        },
        "range": [
          474,
          480
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            476,
            480
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 16
            },
            "start": {
              "column": 42,
              "line": 16
            }
          }
        }
      },
      "range": [
        434,
        481
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    549,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThat2",
                "optional": false,
                "range": [
                  541,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                541,
                555
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              541,
              556
            ],
            "loc": {
              "end": {
                "column": 19,
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
          535,
          558
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    520,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThis2",
                "optional": false,
                "range": [
                  512,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                512,
                526
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              512,
              527
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          506,
          529
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 24,
            "line": 17
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              498,
              503
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNonBlank2",
          "optional": false,
          "range": [
            486,
            497
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          486,
          504
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "range": [
        482,
        558
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
