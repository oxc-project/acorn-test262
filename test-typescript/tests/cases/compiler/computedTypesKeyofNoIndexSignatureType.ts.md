__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    888
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Compute",
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
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    32,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                },
                "range": [
                  32,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              },
              "range": [
                26,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  43,
                  49
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
                          46,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 1
                          },
                          "start": {
                            "column": 46,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        46,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 46,
                          "line": 1
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          44,
                          45
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 1
                          },
                          "start": {
                            "column": 44,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        44,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 1
                        },
                        "start": {
                          "column": 44,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      44,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compute",
                "optional": false,
                "range": [
                  36,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 43,
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
                49
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 36,
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
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              55,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
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
          18,
          57
        ],
        "loc": {
          "end": {
            "column": 57,
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
              "name": "A",
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
        58
      ],
      "loc": {
        "end": {
          "column": 58,
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
        "name": "EqualsTest",
        "optional": false,
        "range": [
          65,
          75
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
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 49,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 3
            }
          },
          "range": [
            87,
            109
          ],
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  90,
                  91
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
                90,
                91
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
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  100,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                }
              },
              "range": [
                100,
                101
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 40,
                  "line": 3
                }
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  108,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 3
                  },
                  "start": {
                    "column": 48,
                    "line": 3
                  }
                }
              },
              "range": [
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 3
                },
                "start": {
                  "column": 48,
                  "line": 3
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
                  104,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 3
                  },
                  "start": {
                    "column": 44,
                    "line": 3
                  }
                }
              },
              "range": [
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 44,
                  "line": 3
                }
              }
            },
            "range": [
              90,
              109
            ],
            "loc": {
              "end": {
                "column": 49,
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
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
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
                "name": "A",
                "optional": false,
                "range": [
                  82,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
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
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          81,
          109
        ],
        "loc": {
          "end": {
            "column": 49,
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
          75,
          78
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
                76,
                77
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
              76,
              77
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
        60,
        110
      ],
      "loc": {
        "end": {
          "column": 50,
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
        "name": "Equals",
        "optional": false,
        "range": [
          116,
          122
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              143,
              147
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "range": [
                    144,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                },
                "range": [
                  144,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "EqualsTest",
            "optional": false,
            "range": [
              133,
              143
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          "range": [
            133,
            147
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 4
            },
            "start": {
              "column": 22,
              "line": 4
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              166,
              170
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "range": [
                    167,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 4
                    },
                    "start": {
                      "column": 56,
                      "line": 4
                    }
                  }
                },
                "range": [
                  167,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 4
                  },
                  "start": {
                    "column": 56,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 4
              },
              "start": {
                "column": 55,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "EqualsTest",
            "optional": false,
            "range": [
              156,
              166
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 4
              },
              "start": {
                "column": 45,
                "line": 4
              }
            }
          },
          "range": [
            156,
            170
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 4
            },
            "start": {
              "column": 45,
              "line": 4
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              177,
              178
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 4
              },
              "start": {
                "column": 66,
                "line": 4
              }
            }
          },
          "range": [
            177,
            178
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 4
            },
            "start": {
              "column": 66,
              "line": 4
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
                "column": 63,
                "line": 4
              },
              "start": {
                "column": 62,
                "line": 4
              }
            }
          },
          "range": [
            173,
            174
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 4
            },
            "start": {
              "column": 62,
              "line": 4
            }
          }
        },
        "range": [
          133,
          178
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 4
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 4
          }
        },
        "range": [
          122,
          130
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "range": [
                123,
                125
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              123,
              125
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
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
              "name": "A2",
              "optional": false,
              "range": [
                127,
                129
              ],
              "loc": {
                "end": {
                  "column": 18,
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
              127,
              129
            ],
            "loc": {
              "end": {
                "column": 18,
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
        111,
        179
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Filter",
        "optional": false,
        "range": [
          186,
          192
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              207,
              213
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    208,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 27,
                      "line": 6
                    }
                  }
                },
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    211,
                    212
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
                "range": [
                  211,
                  212
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
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 6
              },
              "start": {
                "column": 26,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Equals",
            "optional": false,
            "range": [
              201,
              207
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          },
          "range": [
            201,
            213
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              222,
              223
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
            222,
            223
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
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              234,
              235
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 6
              },
              "start": {
                "column": 53,
                "line": 6
              }
            }
          },
          "range": [
            234,
            235
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 6
            },
            "start": {
              "column": 53,
              "line": 6
            }
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "range": [
            226,
            231
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 6
            },
            "start": {
              "column": 45,
              "line": 6
            }
          }
        },
        "range": [
          201,
          235
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 6
          },
          "start": {
            "column": 20,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 6
          }
        },
        "range": [
          192,
          198
        ],
        "params": [
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
                193,
                194
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              193,
              194
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 12,
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
              "name": "I",
              "optional": false,
              "range": [
                196,
                197
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              196,
              197
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
              },
              "start": {
                "column": 15,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        181,
        236
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmitIndex",
        "optional": false,
        "range": [
          243,
          252
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
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
                301,
                302
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
              301,
              302
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
            295,
            302
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
            290,
            291
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
        "nameType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              312,
              318
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    313,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 9
                    },
                    "start": {
                      "column": 26,
                      "line": 9
                    }
                  }
                },
                "range": [
                  313,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    316,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 9
                    },
                    "start": {
                      "column": 29,
                      "line": 9
                    }
                  }
                },
                "range": [
                  316,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 25,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Filter",
            "optional": false,
            "range": [
              306,
              312
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          },
          "range": [
            306,
            318
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 9
            }
          }
        },
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
                323,
                324
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 36,
                  "line": 9
                }
              }
            },
            "range": [
              323,
              324
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 36,
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
                321,
                322
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
              321,
              322
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
            321,
            325
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 9
            },
            "start": {
              "column": 34,
              "line": 9
            }
          }
        },
        "range": [
          285,
          328
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 47,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        },
        "range": [
          252,
          282
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
                253,
                254
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              253,
              254
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 8
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
                  "type": "TSStringKeyword",
                  "range": [
                    266,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    275,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 8
                    },
                    "start": {
                      "column": 37,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                266,
                281
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 8
                },
                "start": {
                  "column": 28,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "range": [
                256,
                257
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              256,
              281
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 8
              },
              "start": {
                "column": 18,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        238,
        329
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 10
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
        "name": "IndexObject",
        "optional": false,
        "range": [
          336,
          347
        ],
        "loc": {
          "end": {
            "column": 16,
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
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 25,
                      "line": 12
                    }
                  },
                  "range": [
                    356,
                    364
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      358,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
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
                  353,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 22,
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
                  "column": 34,
                  "line": 12
                }
              },
              "range": [
                365,
                374
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  367,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 12
                  },
                  "start": {
                    "column": 36,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              352,
              375
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 12
              },
              "start": {
                "column": 21,
                "line": 12
              }
            }
          }
        ],
        "range": [
          350,
          377
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 12
          },
          "start": {
            "column": 19,
            "line": 12
          }
        }
      },
      "range": [
        331,
        378
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 12
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
        "name": "FooBar",
        "optional": false,
        "range": [
          384,
          390
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
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                395,
                398
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 16,
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
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              },
              "range": [
                398,
                407
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    400,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                },
                "range": [
                  400,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 13
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              395,
              408
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 16,
                "line": 13
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                409,
                412
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 13
                },
                "start": {
                  "column": 30,
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
                  "column": 42,
                  "line": 13
                },
                "start": {
                  "column": 33,
                  "line": 13
                }
              },
              "range": [
                412,
                421
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"world\"",
                  "value": "world",
                  "range": [
                    414,
                    421
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
                  414,
                  421
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
              }
            },
            "range": [
              409,
              422
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 13
              },
              "start": {
                "column": 30,
                "line": 13
              }
            }
          }
        ],
        "range": [
          393,
          424
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        }
      },
      "range": [
        379,
        425
      ],
      "loc": {
        "end": {
          "column": 46,
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
        "name": "WithIndex",
        "optional": false,
        "range": [
          432,
          441
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            451,
            473
          ],
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FooBar",
                    "optional": false,
                    "range": [
                      452,
                      458
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 15
                      },
                      "start": {
                        "column": 25,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    452,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 25,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IndexObject",
                    "optional": false,
                    "range": [
                      461,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 15
                      },
                      "start": {
                        "column": 34,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    461,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
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
                452,
                472
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
          "loc": {
            "end": {
              "column": 46,
              "line": 15
            },
            "start": {
              "column": 24,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Compute",
          "optional": false,
          "range": [
            444,
            451
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
        "range": [
          444,
          473
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
          }
        }
      },
      "range": [
        427,
        474
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithoutIndex",
        "optional": false,
        "range": [
          541,
          553
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            565,
            584
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WithIndex",
                "optional": false,
                "range": [
                  566,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 16
                  },
                  "start": {
                    "column": 30,
                    "line": 16
                  }
                }
              },
              "range": [
                566,
                575
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                577,
                583
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 16
                },
                "start": {
                  "column": 41,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 16
            },
            "start": {
              "column": 29,
              "line": 16
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OmitIndex",
          "optional": false,
          "range": [
            556,
            565
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 16
            },
            "start": {
              "column": 20,
              "line": 16
            }
          }
        },
        "range": [
          556,
          584
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 16
          },
          "start": {
            "column": 20,
            "line": 16
          }
        }
      },
      "range": [
        536,
        585
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBarKey",
        "optional": false,
        "range": [
          651,
          660
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooBar",
            "optional": false,
            "range": [
              669,
              675
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 18
              },
              "start": {
                "column": 23,
                "line": 18
              }
            }
          },
          "range": [
            669,
            675
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 18
            },
            "start": {
              "column": 23,
              "line": 18
            }
          }
        },
        "range": [
          663,
          675
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
          }
        }
      },
      "range": [
        646,
        676
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 18
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
        "name": "WithIndexKey",
        "optional": false,
        "range": [
          720,
          732
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "WithIndex",
            "optional": false,
            "range": [
              741,
              750
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 19
              },
              "start": {
                "column": 26,
                "line": 19
              }
            }
          },
          "range": [
            741,
            750
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 19
            },
            "start": {
              "column": 26,
              "line": 19
            }
          }
        },
        "range": [
          735,
          750
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
          }
        }
      },
      "range": [
        715,
        751
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithoutIndexKey",
        "optional": false,
        "range": [
          804,
          819
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "WithoutIndex",
            "optional": false,
            "range": [
              828,
              840
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 20
              },
              "start": {
                "column": 29,
                "line": 20
              }
            }
          },
          "range": [
            828,
            840
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 20
            },
            "start": {
              "column": 29,
              "line": 20
            }
          }
        },
        "range": [
          822,
          840
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 20
          },
          "start": {
            "column": 23,
            "line": 20
          }
        }
      },
      "range": [
        799,
        841
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 89,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
