__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    961
  ],
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                10
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  7,
                  10
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                17,
                29
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      20,
                      23
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      25,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  19,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              16,
              29
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            16,
            29
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        12,
        30
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "name": "f1",
        "optional": false,
        "range": [
          48,
          50
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            },
            "range": [
              55,
              58
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  57,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              "range": [
                57,
                58
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            }
          },
          "range": [
            54,
            58
          ],
          "loc": {
            "end": {
              "column": 27,
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
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 28,
            "line": 3
          }
        },
        "range": [
          59,
          62
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              61,
              62
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            }
          },
          "range": [
            61,
            62
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        },
        "range": [
          50,
          53
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
                51,
                52
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              51,
              52
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        31,
        62
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "name": "f2",
        "optional": false,
        "range": [
          80,
          82
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 24,
                "line": 4
              }
            },
            "range": [
              87,
              92
            ],
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
                    89,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  }
                },
                "range": [
                  89,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              },
              "range": [
                89,
                92
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              }
            }
          },
          "range": [
            86,
            92
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 23,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 4
          },
          "start": {
            "column": 30,
            "line": 4
          }
        },
        "range": [
          93,
          96
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              95,
              96
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
            95,
            96
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
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 4
          },
          "start": {
            "column": 19,
            "line": 4
          }
        },
        "range": [
          82,
          85
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
                83,
                84
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
            "out": false,
            "range": [
              83,
              84
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
          }
        ]
      },
      "range": [
        63,
        97
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
        "name": "f3",
        "optional": false,
        "range": [
          115,
          117
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            },
            "range": [
              125,
              133
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
                      128,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 5
                      },
                      "start": {
                        "column": 30,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    128,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 5
                    },
                    "start": {
                      "column": 30,
                      "line": 5
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
                      131,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 33,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    131,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 33,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                127,
                133
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            }
          },
          "range": [
            124,
            133
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 5
          },
          "start": {
            "column": 36,
            "line": 5
          }
        },
        "range": [
          134,
          142
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
                  137,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 5
                  },
                  "start": {
                    "column": 39,
                    "line": 5
                  }
                }
              },
              "range": [
                137,
                138
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 39,
                  "line": 5
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
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              },
              "range": [
                140,
                141
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 42,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            136,
            142
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 5
            },
            "start": {
              "column": 38,
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
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 5
          }
        },
        "range": [
          117,
          123
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
                118,
                119
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              118,
              119
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
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
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              121,
              122
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        98,
        143
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
        "name": "f4",
        "optional": false,
        "range": [
          161,
          163
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
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
                "column": 44,
                "line": 6
              },
              "start": {
                "column": 24,
                "line": 6
              }
            },
            "range": [
              168,
              188
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      172,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 6
                      },
                      "start": {
                        "column": 28,
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
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 31,
                        "line": 6
                      }
                    },
                    "range": [
                      175,
                      178
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          177,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 6
                          },
                          "start": {
                            "column": 33,
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
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 33,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    172,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "range": [
                      180,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 6
                      },
                      "start": {
                        "column": 36,
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
                        "column": 42,
                        "line": 6
                      },
                      "start": {
                        "column": 39,
                        "line": 6
                      }
                    },
                    "range": [
                      183,
                      186
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          185,
                          186
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 6
                          },
                          "start": {
                            "column": 41,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        185,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 6
                        },
                        "start": {
                          "column": 41,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    180,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 6
                    },
                    "start": {
                      "column": 36,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                170,
                188
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            }
          },
          "range": [
            167,
            188
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 6
            },
            "start": {
              "column": 23,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 6
          },
          "start": {
            "column": 45,
            "line": 6
          }
        },
        "range": [
          189,
          192
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              191,
              192
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 6
              },
              "start": {
                "column": 47,
                "line": 6
              }
            }
          },
          "range": [
            191,
            192
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 6
            },
            "start": {
              "column": 47,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 6
          },
          "start": {
            "column": 19,
            "line": 6
          }
        },
        "range": [
          163,
          166
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
                164,
                165
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
              164,
              165
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
          }
        ]
      },
      "range": [
        144,
        193
      ],
      "loc": {
        "end": {
          "column": 49,
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
        "name": "f5",
        "optional": false,
        "range": [
          211,
          213
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
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
                "line": 7
              },
              "start": {
                "column": 24,
                "line": 7
              }
            },
            "range": [
              218,
              234
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
                      }
                    },
                    "range": [
                      222,
                      225
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          224,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 7
                          },
                          "start": {
                            "column": 30,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        224,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 7
                        },
                        "start": {
                          "column": 30,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    221,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 27,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                },
                "range": [
                  227,
                  234
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    230,
                    234
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
                }
              },
              "range": [
                220,
                234
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 7
                },
                "start": {
                  "column": 26,
                  "line": 7
                }
              }
            }
          },
          "range": [
            217,
            234
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 7
            },
            "start": {
              "column": 23,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 7
          },
          "start": {
            "column": 41,
            "line": 7
          }
        },
        "range": [
          235,
          238
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              237,
              238
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 7
              },
              "start": {
                "column": 43,
                "line": 7
              }
            }
          },
          "range": [
            237,
            238
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 7
            },
            "start": {
              "column": 43,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 7
          }
        },
        "range": [
          213,
          216
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
                214,
                215
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              214,
              215
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        194,
        239
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "f6",
        "optional": false,
        "range": [
          257,
          259
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 8
              },
              "start": {
                "column": 24,
                "line": 8
              }
            },
            "range": [
              264,
              282
            ],
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 8
                      },
                      "start": {
                        "column": 32,
                        "line": 8
                      }
                    },
                    "range": [
                      272,
                      275
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          274,
                          275
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 8
                          },
                          "start": {
                            "column": 34,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        274,
                        275
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 8
                        },
                        "start": {
                          "column": 34,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    271,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 8
                    },
                    "start": {
                      "column": 31,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 8
                  },
                  "start": {
                    "column": 37,
                    "line": 8
                  }
                },
                "range": [
                  277,
                  282
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    280,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 8
                    },
                    "start": {
                      "column": 40,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                266,
                282
              ],
              "loc": {
                "end": {
                  "column": 42,
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
            263,
            282
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 8
            },
            "start": {
              "column": 23,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 8
          },
          "start": {
            "column": 43,
            "line": 8
          }
        },
        "range": [
          283,
          286
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              285,
              286
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 45,
                "line": 8
              }
            }
          },
          "range": [
            285,
            286
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 8
            },
            "start": {
              "column": 45,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 8
          },
          "start": {
            "column": 19,
            "line": 8
          }
        },
        "range": [
          259,
          262
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
                260,
                261
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              260,
              261
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 20,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        240,
        287
      ],
      "loc": {
        "end": {
          "column": 47,
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
        "name": "f7",
        "optional": false,
        "range": [
          305,
          307
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
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
                "column": 44,
                "line": 9
              },
              "start": {
                "column": 24,
                "line": 9
              }
            },
            "range": [
              312,
              332
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 9
                      },
                      "start": {
                        "column": 28,
                        "line": 9
                      }
                    },
                    "range": [
                      316,
                      321
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        318,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 9
                        },
                        "start": {
                          "column": 30,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    315,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 27,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 9
                  },
                  "start": {
                    "column": 35,
                    "line": 9
                  }
                },
                "range": [
                  323,
                  332
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      326,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 9
                      },
                      "start": {
                        "column": 38,
                        "line": 9
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 43,
                        "line": 9
                      }
                    },
                    "range": [
                      331,
                      332
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          331,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 9
                          },
                          "start": {
                            "column": 43,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        331,
                        332
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 9
                        },
                        "start": {
                          "column": 43,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    326,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 38,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                314,
                332
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 9
                },
                "start": {
                  "column": 26,
                  "line": 9
                }
              }
            }
          },
          "range": [
            311,
            332
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 9
            },
            "start": {
              "column": 23,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 9
          },
          "start": {
            "column": 45,
            "line": 9
          }
        },
        "range": [
          333,
          336
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              335,
              336
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 9
              },
              "start": {
                "column": 47,
                "line": 9
              }
            }
          },
          "range": [
            335,
            336
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 9
            },
            "start": {
              "column": 47,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 19,
            "line": 9
          }
        },
        "range": [
          307,
          310
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
                308,
                309
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
            "out": false,
            "range": [
              308,
              309
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
          }
        ]
      },
      "range": [
        288,
        337
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
        "name": "f8",
        "optional": false,
        "range": [
          355,
          357
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 10
              },
              "start": {
                "column": 24,
                "line": 10
              }
            },
            "range": [
              362,
              371
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                },
                "range": [
                  367,
                  371
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      370,
                      371
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 32,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    370,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 32,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                364,
                371
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            }
          },
          "range": [
            361,
            371
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 10
            },
            "start": {
              "column": 23,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 10
          },
          "start": {
            "column": 34,
            "line": 10
          }
        },
        "range": [
          372,
          375
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              374,
              375
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 10
              },
              "start": {
                "column": 36,
                "line": 10
              }
            }
          },
          "range": [
            374,
            375
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 10
            },
            "start": {
              "column": 36,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 10
          },
          "start": {
            "column": 19,
            "line": 10
          }
        },
        "range": [
          357,
          360
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
                358,
                359
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              358,
              359
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        338,
        376
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
        "name": "f9",
        "optional": false,
        "range": [
          394,
          396
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 11
          },
          "start": {
            "column": 17,
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
                "column": 37,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            },
            "range": [
              401,
              414
            ],
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 11
                  },
                  "start": {
                    "column": 33,
                    "line": 11
                  }
                },
                "range": [
                  410,
                  414
                ],
                "typeAnnotation": {
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
                        "column": 37,
                        "line": 11
                      },
                      "start": {
                        "column": 36,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    413,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 11
                    },
                    "start": {
                      "column": 36,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                403,
                414
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 11
                },
                "start": {
                  "column": 26,
                  "line": 11
                }
              }
            }
          },
          "range": [
            400,
            414
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 11
            },
            "start": {
              "column": 23,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 11
          },
          "start": {
            "column": 38,
            "line": 11
          }
        },
        "range": [
          415,
          418
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              417,
              418
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 11
              },
              "start": {
                "column": 40,
                "line": 11
              }
            }
          },
          "range": [
            417,
            418
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 11
            },
            "start": {
              "column": 40,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 11
          },
          "start": {
            "column": 19,
            "line": 11
          }
        },
        "range": [
          396,
          399
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
                397,
                398
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              397,
              398
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 11
              },
              "start": {
                "column": 20,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        377,
        419
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "f10",
        "optional": false,
        "range": [
          437,
          440
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
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
                "line": 12
              },
              "start": {
                "column": 25,
                "line": 12
              }
            },
            "range": [
              445,
              465
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
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
                            "line": 12
                          },
                          "start": {
                            "column": 31,
                            "line": 12
                          }
                        },
                        "range": [
                          451,
                          459
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            453,
                            459
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 12
                            },
                            "start": {
                              "column": 33,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        450,
                        459
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
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 12
                      },
                      "start": {
                        "column": 40,
                        "line": 12
                      }
                    },
                    "range": [
                      460,
                      463
                    ],
                    "typeAnnotation": {
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
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 42,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        462,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 12
                        },
                        "start": {
                          "column": 42,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    449,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 12
                    },
                    "start": {
                      "column": 29,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                447,
                465
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 12
                },
                "start": {
                  "column": 27,
                  "line": 12
                }
              }
            }
          },
          "range": [
            444,
            465
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 12
            },
            "start": {
              "column": 24,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 12
          },
          "start": {
            "column": 46,
            "line": 12
          }
        },
        "range": [
          466,
          469
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              468,
              469
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 12
              },
              "start": {
                "column": 48,
                "line": 12
              }
            }
          },
          "range": [
            468,
            469
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 12
            },
            "start": {
              "column": 48,
              "line": 12
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 12
          },
          "start": {
            "column": 20,
            "line": 12
          }
        },
        "range": [
          440,
          443
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
                441,
                442
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              441,
              442
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 12
              },
              "start": {
                "column": 21,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        420,
        470
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
        "name": "f11",
        "optional": false,
        "range": [
          488,
          491
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 17,
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
                "column": 25,
                "line": 13
              }
            },
            "range": [
              496,
              516
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
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
                            "line": 13
                          },
                          "start": {
                            "column": 31,
                            "line": 13
                          }
                        },
                        "range": [
                          502,
                          510
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            504,
                            510
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 13
                            },
                            "start": {
                              "column": 33,
                              "line": 13
                            }
                          }
                        }
                      },
                      "range": [
                        501,
                        510
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 13
                        },
                        "start": {
                          "column": 30,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 13
                      },
                      "start": {
                        "column": 40,
                        "line": 13
                      }
                    },
                    "range": [
                      511,
                      514
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          513,
                          514
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 13
                          },
                          "start": {
                            "column": 42,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        513,
                        514
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 13
                        },
                        "start": {
                          "column": 42,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    500,
                    514
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 13
                    },
                    "start": {
                      "column": 29,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                498,
                516
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 13
                },
                "start": {
                  "column": 27,
                  "line": 13
                }
              }
            }
          },
          "range": [
            495,
            516
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 13
            },
            "start": {
              "column": 24,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 13
          },
          "start": {
            "column": 46,
            "line": 13
          }
        },
        "range": [
          517,
          520
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              519,
              520
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 13
              },
              "start": {
                "column": 48,
                "line": 13
              }
            }
          },
          "range": [
            519,
            520
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 13
            },
            "start": {
              "column": 48,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 13
          },
          "start": {
            "column": 20,
            "line": 13
          }
        },
        "range": [
          491,
          494
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
                492,
                493
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              492,
              493
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 21,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        471,
        521
      ],
      "loc": {
        "end": {
          "column": 50,
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
        "name": "f12",
        "optional": false,
        "range": [
          539,
          542
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 14
              },
              "start": {
                "column": 28,
                "line": 14
              }
            },
            "range": [
              550,
              557
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
                      552,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 14
                      },
                      "start": {
                        "column": 30,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    552,
                    553
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 14
                    },
                    "start": {
                      "column": 30,
                      "line": 14
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
                      556,
                      557
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
                    556,
                    557
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
                }
              ],
              "range": [
                552,
                557
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 14
                },
                "start": {
                  "column": 30,
                  "line": 14
                }
              }
            }
          },
          "range": [
            549,
            557
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 14
            },
            "start": {
              "column": 27,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 14
          },
          "start": {
            "column": 36,
            "line": 14
          }
        },
        "range": [
          558,
          566
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
                  561,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 14
                  },
                  "start": {
                    "column": 39,
                    "line": 14
                  }
                }
              },
              "range": [
                561,
                562
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 14
                },
                "start": {
                  "column": 39,
                  "line": 14
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
                  564,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 14
                  },
                  "start": {
                    "column": 42,
                    "line": 14
                  }
                }
              },
              "range": [
                564,
                565
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 14
                },
                "start": {
                  "column": 42,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            560,
            566
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 14
            },
            "start": {
              "column": 38,
              "line": 14
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 14
          },
          "start": {
            "column": 20,
            "line": 14
          }
        },
        "range": [
          542,
          548
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
                543,
                544
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              543,
              544
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 21,
                "line": 14
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
                546,
                547
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 14
                },
                "start": {
                  "column": 24,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              546,
              547
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 14
              },
              "start": {
                "column": 24,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        522,
        567
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "name": "f13",
        "optional": false,
        "range": [
          585,
          588
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 15
              },
              "start": {
                "column": 28,
                "line": 15
              }
            },
            "range": [
              596,
              603
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      598,
                      599
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    598,
                    599
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 30,
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
                      602,
                      603
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 15
                      },
                      "start": {
                        "column": 34,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    602,
                    603
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 15
                    },
                    "start": {
                      "column": 34,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                598,
                603
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 15
                },
                "start": {
                  "column": 30,
                  "line": 15
                }
              }
            }
          },
          "range": [
            595,
            603
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 15
            },
            "start": {
              "column": 27,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 15
          },
          "start": {
            "column": 36,
            "line": 15
          }
        },
        "range": [
          604,
          612
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
                  607,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 15
                  },
                  "start": {
                    "column": 39,
                    "line": 15
                  }
                }
              },
              "range": [
                607,
                608
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 15
                },
                "start": {
                  "column": 39,
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
                  610,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 15
                  },
                  "start": {
                    "column": 42,
                    "line": 15
                  }
                }
              },
              "range": [
                610,
                611
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 15
                },
                "start": {
                  "column": 42,
                  "line": 15
                }
              }
            }
          ],
          "range": [
            606,
            612
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 15
            },
            "start": {
              "column": 38,
              "line": 15
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 15
          },
          "start": {
            "column": 20,
            "line": 15
          }
        },
        "range": [
          588,
          594
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
                589,
                590
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 21,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              589,
              590
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 21,
                "line": 15
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
                592,
                593
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              592,
              593
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 24,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        568,
        613
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "name": "f14",
        "optional": false,
        "range": [
          631,
          634
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 16
              },
              "start": {
                "column": 28,
                "line": 16
              }
            },
            "range": [
              642,
              666
            ],
            "typeAnnotation": {
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
                      646,
                      647
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 16
                      },
                      "start": {
                        "column": 32,
                        "line": 16
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
                        "column": 40,
                        "line": 16
                      },
                      "start": {
                        "column": 33,
                        "line": 16
                      }
                    },
                    "range": [
                      647,
                      654
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
                              649,
                              650
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 16
                              },
                              "start": {
                                "column": 35,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            649,
                            650
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 16
                            },
                            "start": {
                              "column": 35,
                              "line": 16
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
                              653,
                              654
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 16
                              },
                              "start": {
                                "column": 39,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            653,
                            654
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 16
                            },
                            "start": {
                              "column": 39,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        649,
                        654
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 16
                        },
                        "start": {
                          "column": 35,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    646,
                    655
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 16
                    },
                    "start": {
                      "column": 32,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      656,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 16
                      },
                      "start": {
                        "column": 42,
                        "line": 16
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
                        "column": 50,
                        "line": 16
                      },
                      "start": {
                        "column": 43,
                        "line": 16
                      }
                    },
                    "range": [
                      657,
                      664
                    ],
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              659,
                              660
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 16
                              },
                              "start": {
                                "column": 45,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            659,
                            660
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 16
                            },
                            "start": {
                              "column": 45,
                              "line": 16
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
                              663,
                              664
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 16
                              },
                              "start": {
                                "column": 49,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            663,
                            664
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 16
                            },
                            "start": {
                              "column": 49,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        659,
                        664
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 16
                        },
                        "start": {
                          "column": 45,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    656,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 16
                    },
                    "start": {
                      "column": 42,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                644,
                666
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              }
            }
          },
          "range": [
            641,
            666
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 16
            },
            "start": {
              "column": 27,
              "line": 16
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 16
          },
          "start": {
            "column": 53,
            "line": 16
          }
        },
        "range": [
          667,
          675
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
                  670,
                  671
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 16
                  },
                  "start": {
                    "column": 56,
                    "line": 16
                  }
                }
              },
              "range": [
                670,
                671
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 16
                },
                "start": {
                  "column": 56,
                  "line": 16
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
                  673,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 16
                  },
                  "start": {
                    "column": 59,
                    "line": 16
                  }
                }
              },
              "range": [
                673,
                674
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 16
                },
                "start": {
                  "column": 59,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            669,
            675
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 16
            },
            "start": {
              "column": 55,
              "line": 16
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 16
          },
          "start": {
            "column": 20,
            "line": 16
          }
        },
        "range": [
          634,
          640
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
                635,
                636
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 21,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              635,
              636
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 21,
                "line": 16
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
                638,
                639
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 16
                },
                "start": {
                  "column": 24,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              638,
              639
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 16
              },
              "start": {
                "column": 24,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        614,
        676
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          692,
          695
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 18,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          687,
          688
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        },
        "range": [
          688,
          691
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
                689,
                690
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              689,
              690
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        677,
        695
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "name": "f15",
        "optional": false,
        "range": [
          713,
          716
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 18
          },
          "start": {
            "column": 17,
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
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 25,
                "line": 18
              }
            },
            "range": [
              721,
              727
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  724,
                  727
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
                        725,
                        726
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 18
                        },
                        "start": {
                          "column": 29,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      725,
                      726
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 29,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 18
                  },
                  "start": {
                    "column": 28,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  723,
                  724
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
                723,
                727
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 27,
                  "line": 18
                }
              }
            }
          },
          "range": [
            720,
            727
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 18
            },
            "start": {
              "column": 24,
              "line": 18
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 18
          },
          "start": {
            "column": 32,
            "line": 18
          }
        },
        "range": [
          728,
          731
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              730,
              731
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
            730,
            731
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
          716,
          719
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
                717,
                718
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
              717,
              718
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
        696,
        732
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
        "name": "f16",
        "optional": false,
        "range": [
          750,
          753
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 25,
                "line": 19
              }
            },
            "range": [
              758,
              770
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  767,
                  770
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
                        768,
                        769
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 19
                        },
                        "start": {
                          "column": 35,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      768,
                      769
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 19
                      },
                      "start": {
                        "column": 35,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 19
                  },
                  "start": {
                    "column": 34,
                    "line": 19
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  760,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 27,
                    "line": 19
                  }
                }
              },
              "range": [
                760,
                770
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 19
                },
                "start": {
                  "column": 27,
                  "line": 19
                }
              }
            }
          },
          "range": [
            757,
            770
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 19
            },
            "start": {
              "column": 24,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 19
          },
          "start": {
            "column": 38,
            "line": 19
          }
        },
        "range": [
          771,
          774
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              773,
              774
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 19
              },
              "start": {
                "column": 40,
                "line": 19
              }
            }
          },
          "range": [
            773,
            774
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 19
            },
            "start": {
              "column": 40,
              "line": 19
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
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
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 19
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
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 21,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        733,
        775
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
        "name": "f17",
        "optional": false,
        "range": [
          793,
          796
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 20
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
                "column": 49,
                "line": 20
              },
              "start": {
                "column": 28,
                "line": 20
              }
            },
            "range": [
              804,
              825
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
                      819,
                      820
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 20
                      },
                      "start": {
                        "column": 43,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    819,
                    820
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 20
                    },
                    "start": {
                      "column": 43,
                      "line": 20
                    }
                  }
                },
                "range": [
                  813,
                  820
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 20
                  },
                  "start": {
                    "column": 37,
                    "line": 20
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  808,
                  809
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 20
                  },
                  "start": {
                    "column": 32,
                    "line": 20
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    823,
                    824
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 20
                    },
                    "start": {
                      "column": 47,
                      "line": 20
                    }
                  }
                },
                "range": [
                  823,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 20
                  },
                  "start": {
                    "column": 47,
                    "line": 20
                  }
                }
              },
              "range": [
                806,
                825
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 20
                },
                "start": {
                  "column": 30,
                  "line": 20
                }
              }
            }
          },
          "range": [
            803,
            825
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 20
            },
            "start": {
              "column": 27,
              "line": 20
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 20
          },
          "start": {
            "column": 50,
            "line": 20
          }
        },
        "range": [
          826,
          829
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              828,
              829
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 20
              },
              "start": {
                "column": 52,
                "line": 20
              }
            }
          },
          "range": [
            828,
            829
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 20
            },
            "start": {
              "column": 52,
              "line": 20
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 20
          },
          "start": {
            "column": 20,
            "line": 20
          }
        },
        "range": [
          796,
          802
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
                797,
                798
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 21,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              797,
              798
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
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
              "name": "K",
              "optional": false,
              "range": [
                800,
                801
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              800,
              801
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 20
              },
              "start": {
                "column": 24,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        776,
        830
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
        "name": "f18",
        "optional": false,
        "range": [
          848,
          851
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
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
                "column": 62,
                "line": 21
              },
              "start": {
                "column": 44,
                "line": 21
              }
            },
            "range": [
              875,
              893
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    884,
                    885
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 21
                    },
                    "start": {
                      "column": 53,
                      "line": 21
                    }
                  }
                },
                "range": [
                  884,
                  885
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 21
                  },
                  "start": {
                    "column": 53,
                    "line": 21
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  879,
                  880
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 21
                  },
                  "start": {
                    "column": 48,
                    "line": 21
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
                    "name": "P",
                    "optional": false,
                    "range": [
                      890,
                      891
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 21
                      },
                      "start": {
                        "column": 59,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    890,
                    891
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 21
                    },
                    "start": {
                      "column": 59,
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
                      888,
                      889
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 21
                      },
                      "start": {
                        "column": 57,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    888,
                    889
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 21
                    },
                    "start": {
                      "column": 57,
                      "line": 21
                    }
                  }
                },
                "range": [
                  888,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 21
                  },
                  "start": {
                    "column": 57,
                    "line": 21
                  }
                }
              },
              "range": [
                877,
                893
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 21
                },
                "start": {
                  "column": 46,
                  "line": 21
                }
              }
            }
          },
          "range": [
            874,
            893
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 21
            },
            "start": {
              "column": 43,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 21
          },
          "start": {
            "column": 63,
            "line": 21
          }
        },
        "range": [
          894,
          897
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              896,
              897
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 21
              },
              "start": {
                "column": 65,
                "line": 21
              }
            }
          },
          "range": [
            896,
            897
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 21
            },
            "start": {
              "column": 65,
              "line": 21
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 21
          },
          "start": {
            "column": 20,
            "line": 21
          }
        },
        "range": [
          851,
          873
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
                852,
                853
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 21
                },
                "start": {
                  "column": 21,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              852,
              853
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 21
              },
              "start": {
                "column": 21,
                "line": 21
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
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
                    871,
                    872
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 21
                    },
                    "start": {
                      "column": 40,
                      "line": 21
                    }
                  }
                },
                "range": [
                  871,
                  872
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 21
                  },
                  "start": {
                    "column": 40,
                    "line": 21
                  }
                }
              },
              "range": [
                865,
                872
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 21
                },
                "start": {
                  "column": 34,
                  "line": 21
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                855,
                856
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 21
                },
                "start": {
                  "column": 24,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              855,
              872
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 21
              },
              "start": {
                "column": 24,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        831,
        898
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
        "name": "f19",
        "optional": false,
        "range": [
          916,
          919
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 22
          },
          "start": {
            "column": 17,
            "line": 22
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 22
              },
              "start": {
                "column": 44,
                "line": 22
              }
            },
            "range": [
              943,
              946
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  945,
                  946
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 22
                  },
                  "start": {
                    "column": 46,
                    "line": 22
                  }
                }
              },
              "range": [
                945,
                946
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 22
                },
                "start": {
                  "column": 46,
                  "line": 22
                }
              }
            }
          },
          "range": [
            942,
            946
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 22
            },
            "start": {
              "column": 43,
              "line": 22
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 22
              },
              "start": {
                "column": 50,
                "line": 22
              }
            },
            "range": [
              949,
              955
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
                    953,
                    954
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 22
                    },
                    "start": {
                      "column": 54,
                      "line": 22
                    }
                  }
                },
                "range": [
                  953,
                  954
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 22
                  },
                  "start": {
                    "column": 54,
                    "line": 22
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
                    951,
                    952
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 22
                    },
                    "start": {
                      "column": 52,
                      "line": 22
                    }
                  }
                },
                "range": [
                  951,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 22
                  },
                  "start": {
                    "column": 52,
                    "line": 22
                  }
                }
              },
              "range": [
                951,
                955
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 22
                },
                "start": {
                  "column": 52,
                  "line": 22
                }
              }
            }
          },
          "range": [
            948,
            955
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 22
            },
            "start": {
              "column": 49,
              "line": 22
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 60,
            "line": 22
          },
          "start": {
            "column": 57,
            "line": 22
          }
        },
        "range": [
          956,
          959
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              958,
              959
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 22
              },
              "start": {
                "column": 59,
                "line": 22
              }
            }
          },
          "range": [
            958,
            959
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 22
            },
            "start": {
              "column": 59,
              "line": 22
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 22
          },
          "start": {
            "column": 20,
            "line": 22
          }
        },
        "range": [
          919,
          941
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
                920,
                921
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 22
                },
                "start": {
                  "column": 21,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              920,
              921
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 22
              },
              "start": {
                "column": 21,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
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
                    939,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 22
                    },
                    "start": {
                      "column": 40,
                      "line": 22
                    }
                  }
                },
                "range": [
                  939,
                  940
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 22
                  },
                  "start": {
                    "column": 40,
                    "line": 22
                  }
                }
              },
              "range": [
                933,
                940
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 22
                },
                "start": {
                  "column": 34,
                  "line": 22
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                923,
                924
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 22
                },
                "start": {
                  "column": 24,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              923,
              940
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 22
              },
              "start": {
                "column": 24,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        899,
        960
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
