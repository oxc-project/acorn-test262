__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    279
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    63,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 1
                    },
                    "start": {
                      "column": 63,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        68,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 1
                        },
                        "start": {
                          "column": 68,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      66,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 1
                      },
                      "start": {
                        "column": 66,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    66,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 1
                    },
                    "start": {
                      "column": 66,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                62,
                71
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 1
                },
                "start": {
                  "column": 62,
                  "line": 1
                }
              }
            },
            "range": [
              55,
              72
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 1
              },
              "start": {
                "column": 55,
                "line": 1
              }
            }
          }
        ],
        "range": [
          53,
          74
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 1
          },
          "start": {
            "column": 53,
            "line": 1
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
          9,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
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
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            },
            "range": [
              18,
              21
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  20,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              },
              "range": [
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            }
          },
          "range": [
            17,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            },
            "range": [
              24,
              37
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    },
                    "range": [
                      28,
                      31
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          30,
                          31
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 1
                          },
                          "start": {
                            "column": 30,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        30,
                        31
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 1
                        },
                        "start": {
                          "column": 30,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    27,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 1
                    },
                    "start": {
                      "column": 27,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                },
                "range": [
                  33,
                  37
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      36,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 1
                      },
                      "start": {
                        "column": 36,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    36,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 1
                    },
                    "start": {
                      "column": 36,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                26,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            }
          },
          "range": [
            23,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
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
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 40,
                "line": 1
              }
            },
            "range": [
              40,
              43
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  42,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 1
                  },
                  "start": {
                    "column": 42,
                    "line": 1
                  }
                }
              },
              "range": [
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              }
            }
          },
          "range": [
            39,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 39,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 1
          },
          "start": {
            "column": 44,
            "line": 1
          }
        },
        "range": [
          44,
          52
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
                  47,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 48,
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
                48
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
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
                  50,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              },
              "range": [
                50,
                51
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 50,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            46,
            52
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 1
            },
            "start": {
              "column": 46,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        },
        "range": [
          10,
          16
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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              11,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
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
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        74
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          87,
          96
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                89,
                90
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
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
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              },
              "range": [
                90,
                93
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    92,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "range": [
                  92,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              89,
              94
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 12,
            "line": 2
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
          85,
          86
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        75,
        96
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          119,
          125
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "range": [
              121,
              123
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          }
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
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              117,
              118
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
          "range": [
            117,
            118
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
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          107,
          108
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        97,
        125
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 3
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                132,
                135
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    134,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  134,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              131,
              135
            ],
            "loc": {
              "end": {
                "column": 8,
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
            131,
            135
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              },
              "range": [
                138,
                141
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    140,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
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
                    "column": 14,
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
              137,
              141
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            137,
            141
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 10,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        127,
        142
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "name": "d",
            "optional": false,
            "range": [
              148,
              149
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  154,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      162,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 18,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      164,
                      165
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
                  "range": [
                    162,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 7
                    },
                    "start": {
                      "column": 18,
                      "line": 7
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      157,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  157,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  167,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              152,
              169
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            148,
            169
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        144,
        170
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "name": "d2",
            "optional": false,
            "range": [
              190,
              192
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  197,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      205,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      207,
                      208
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
                    205,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 8
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      200,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  200,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  210,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                195,
                196
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              195,
              215
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 8
              },
              "start": {
                "column": 9,
                "line": 8
              }
            }
          },
          "range": [
            190,
            215
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        186,
        216
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 8
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
            "name": "d3",
            "optional": false,
            "range": [
              236,
              238
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  243,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      251,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      253,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    251,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 19,
                      "line": 9
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      246,
                      247
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
                  }
                ],
                "range": [
                  246,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 9
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  256,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                241,
                242
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              241,
              261
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            236,
            261
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        232,
        262
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 47,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
