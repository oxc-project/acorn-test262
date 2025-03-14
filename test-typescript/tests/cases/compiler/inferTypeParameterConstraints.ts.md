__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    938
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubGuard",
        "optional": false,
        "range": [
          27,
          35
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "range": [
            56,
            57
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        },
        "range": [
          56,
          57
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 34,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        },
        "range": [
          35,
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
              "name": "A",
              "optional": false,
              "range": [
                36,
                37
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              36,
              37
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      50,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                49,
                52
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              39,
              52
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        58
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "name": "IsSub",
        "optional": false,
        "range": [
          65,
          70
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
            "name": "M",
            "optional": false,
            "range": [
              107,
              108
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 5
              },
              "start": {
                "column": 47,
                "line": 5
              }
            }
          },
          "range": [
            107,
            108
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 5
            },
            "start": {
              "column": 47,
              "line": 5
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    129,
                    149
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          132,
                          138
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 5
                          },
                          "start": {
                            "column": 72,
                            "line": 5
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "range": [
                            130,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 5
                            },
                            "start": {
                              "column": 70,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          130,
                          131
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 5
                          },
                          "start": {
                            "column": 70,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        130,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 5
                        },
                        "start": {
                          "column": 70,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            147,
                            148
                          ],
                          "loc": {
                            "end": {
                              "column": 88,
                              "line": 5
                            },
                            "start": {
                              "column": 87,
                              "line": 5
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          147,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 5
                          },
                          "start": {
                            "column": 87,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        141,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 5
                        },
                        "start": {
                          "column": 81,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 5
                    },
                    "start": {
                      "column": 69,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SubGuard",
                  "optional": false,
                  "range": [
                    121,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 5
                    },
                    "start": {
                      "column": 61,
                      "line": 5
                    }
                  }
                },
                "range": [
                  121,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 5
                  },
                  "start": {
                    "column": 61,
                    "line": 5
                  }
                }
              },
              "range": [
                118,
                149
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 5
                },
                "start": {
                  "column": 58,
                  "line": 5
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    154,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 5
                    },
                    "start": {
                      "column": 94,
                      "line": 5
                    }
                  }
                },
                "range": [
                  154,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 5
                  },
                  "start": {
                    "column": 94,
                    "line": 5
                  }
                }
              },
              "range": [
                151,
                155
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 5
                },
                "start": {
                  "column": 91,
                  "line": 5
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    160,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 5
                    },
                    "start": {
                      "column": 100,
                      "line": 5
                    }
                  }
                },
                "range": [
                  160,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 5
                  },
                  "start": {
                    "column": 100,
                    "line": 5
                  }
                }
              },
              "range": [
                157,
                165
              ],
              "loc": {
                "end": {
                  "column": 105,
                  "line": 5
                },
                "start": {
                  "column": 97,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            117,
            166
          ],
          "loc": {
            "end": {
              "column": 106,
              "line": 5
            },
            "start": {
              "column": 57,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            173,
            178
          ],
          "loc": {
            "end": {
              "column": 118,
              "line": 5
            },
            "start": {
              "column": 113,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              169,
              170
            ],
            "loc": {
              "end": {
                "column": 110,
                "line": 5
              },
              "start": {
                "column": 109,
                "line": 5
              }
            }
          },
          "range": [
            169,
            170
          ],
          "loc": {
            "end": {
              "column": 110,
              "line": 5
            },
            "start": {
              "column": 109,
              "line": 5
            }
          }
        },
        "range": [
          107,
          178
        ],
        "loc": {
          "end": {
            "column": 118,
            "line": 5
          },
          "start": {
            "column": 47,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        },
        "range": [
          70,
          104
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  81,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                81,
                86
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                71,
                72
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
            "out": false,
            "range": [
              71,
              86
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  98,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 5
                  }
                }
              },
              "range": [
                98,
                103
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 38,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 28,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              88,
              103
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 5
              },
              "start": {
                "column": 28,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        60,
        179
      ],
      "loc": {
        "end": {
          "column": 119,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E0",
        "optional": false,
        "range": [
          186,
          188
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            196,
            221
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      198,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    198,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      201,
                      202
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
                    201,
                    202
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
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      204,
                      205
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
                  },
                  "range": [
                    204,
                    205
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
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "4",
                    "value": 4,
                    "range": [
                      207,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 7
                      },
                      "start": {
                        "column": 26,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    207,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                197,
                209
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      212,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 7
                      },
                      "start": {
                        "column": 31,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    212,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 31,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      215,
                      216
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 7
                      },
                      "start": {
                        "column": 34,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    215,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 7
                    },
                    "start": {
                      "column": 34,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "4",
                    "value": 4,
                    "range": [
                      218,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 37,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    218,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 37,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                211,
                220
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 7
                },
                "start": {
                  "column": 30,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsSub",
          "optional": false,
          "range": [
            191,
            196
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 7
            },
            "start": {
              "column": 10,
              "line": 7
            }
          }
        },
        "range": [
          191,
          221
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        181,
        222
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "range": [
          249,
          251
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  255,
                  256
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
              "range": [
                255,
                256
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  258,
                  259
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
                258,
                259
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
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  261,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
                  }
                }
              },
              "range": [
                261,
                262
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  264,
                  265
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
                264,
                265
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
          ],
          "range": [
            254,
            266
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 9
            },
            "start": {
              "column": 10,
              "line": 9
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      285,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 9
                      },
                      "start": {
                        "column": 41,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    285,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 9
                    },
                    "start": {
                      "column": 41,
                      "line": 9
                    }
                  }
                },
                "range": [
                  279,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 9
                  },
                  "start": {
                    "column": 35,
                    "line": 9
                  }
                }
              },
              "range": [
                276,
                286
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 9
                },
                "start": {
                  "column": 32,
                  "line": 9
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  288,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 44,
                    "line": 9
                  }
                }
              },
              "range": [
                288,
                289
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 44,
                  "line": 9
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  291,
                  292
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
                291,
                292
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
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  294,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 9
                  },
                  "start": {
                    "column": 50,
                    "line": 9
                  }
                }
              },
              "range": [
                294,
                295
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 9
                },
                "start": {
                  "column": 50,
                  "line": 9
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    300,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 9
                    },
                    "start": {
                      "column": 56,
                      "line": 9
                    }
                  }
                },
                "range": [
                  300,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 9
                  },
                  "start": {
                    "column": 56,
                    "line": 9
                  }
                }
              },
              "range": [
                297,
                305
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 9
                },
                "start": {
                  "column": 53,
                  "line": 9
                }
              }
            }
          ],
          "range": [
            275,
            306
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 9
            },
            "start": {
              "column": 31,
              "line": 9
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            313,
            318
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 9
            },
            "start": {
              "column": 69,
              "line": 9
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              309,
              310
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 9
              },
              "start": {
                "column": 65,
                "line": 9
              }
            }
          },
          "range": [
            309,
            310
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 9
            },
            "start": {
              "column": 65,
              "line": 9
            }
          }
        },
        "range": [
          254,
          318
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        244,
        319
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constrain",
        "optional": false,
        "range": [
          362,
          371
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "range": [
          390,
          397
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 13
          },
          "start": {
            "column": 33,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        },
        "range": [
          371,
          387
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
                "name": "C",
                "optional": false,
                "range": [
                  382,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 13
                  },
                  "start": {
                    "column": 25,
                    "line": 13
                  }
                }
              },
              "range": [
                382,
                383
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 25,
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
                372,
                373
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              372,
              383
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
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
              "name": "C",
              "optional": false,
              "range": [
                385,
                386
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 28,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              385,
              386
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 28,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        357,
        398
      ],
      "loc": {
        "end": {
          "column": 41,
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
        "name": "Foo",
        "optional": false,
        "range": [
          405,
          408
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
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
            "name": "A",
            "optional": false,
            "range": [
              414,
              415
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
            414,
            415
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
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              433,
              445
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      440,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 15
                      },
                      "start": {
                        "column": 40,
                        "line": 15
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    440,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 15
                    },
                    "start": {
                      "column": 40,
                      "line": 15
                    }
                  }
                },
                "range": [
                  434,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 34,
                    "line": 15
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    443,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 15
                    },
                    "start": {
                      "column": 43,
                      "line": 15
                    }
                  }
                },
                "range": [
                  443,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 15
                  },
                  "start": {
                    "column": 43,
                    "line": 15
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 15
              },
              "start": {
                "column": 33,
                "line": 15
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constrain",
            "optional": false,
            "range": [
              424,
              433
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 15
              },
              "start": {
                "column": 24,
                "line": 15
              }
            }
          },
          "range": [
            424,
            445
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 15
            },
            "start": {
              "column": 24,
              "line": 15
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            452,
            457
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 15
            },
            "start": {
              "column": 52,
              "line": 15
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "range": [
              448,
              449
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 15
              },
              "start": {
                "column": 48,
                "line": 15
              }
            }
          },
          "range": [
            448,
            449
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 15
            },
            "start": {
              "column": 48,
              "line": 15
            }
          }
        },
        "range": [
          414,
          457
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 15
          },
          "start": {
            "column": 14,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 8,
            "line": 15
          }
        },
        "range": [
          408,
          411
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
                409,
                410
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              409,
              410
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        400,
        458
      ],
      "loc": {
        "end": {
          "column": 58,
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
        "name": "T0",
        "optional": false,
        "range": [
          465,
          467
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            473,
            481
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                474,
                480
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 17
            },
            "start": {
              "column": 13,
              "line": 17
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            470,
            473
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 17
            },
            "start": {
              "column": 10,
              "line": 17
            }
          }
        },
        "range": [
          470,
          481
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 17
          }
        }
      },
      "range": [
        460,
        482
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          595,
          651
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fake",
              "optional": false,
              "range": [
                609,
                613
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 22
                },
                "start": {
                  "column": 12,
                  "line": 22
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                613,
                649
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"\"",
                          "value": "",
                          "range": [
                            641,
                            643
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 23
                            },
                            "start": {
                              "column": 20,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          635,
                          640
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 14,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        631,
                        644
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 23
                        },
                        "start": {
                          "column": 10,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      625,
                      645
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  619,
                  649
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 24
                  },
                  "start": {
                    "column": 22,
                    "line": 22
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
                  }
                },
                "range": [
                  615,
                  618
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      617,
                      618
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 20,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    617,
                    618
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 20,
                      "line": 22
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 24
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              }
            },
            "range": [
              599,
              649
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 19,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "range": [
          582,
          591
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 21
          },
          "start": {
            "column": 15,
            "line": 21
          }
        },
        "range": [
          591,
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
              "name": "V",
              "optional": false,
              "range": [
                592,
                593
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
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
                "column": 17,
                "line": 21
              },
              "start": {
                "column": 16,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        576,
        651
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          689,
          708
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "range": [
                693,
                698
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 28
                },
                "start": {
                  "column": 2,
                  "line": 28
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                701,
                705
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "range": [
              693,
              706
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 36,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Klass",
        "optional": false,
        "range": [
          659,
          664
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "range": [
          676,
          685
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 27
          },
          "start": {
            "column": 23,
            "line": 27
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          685,
          688
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                686,
                687
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 27
                },
                "start": {
                  "column": 33,
                  "line": 27
                }
              }
            },
            "range": [
              686,
              687
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 27
              },
              "start": {
                "column": 33,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 27
          },
          "start": {
            "column": 32,
            "line": 27
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 27
          },
          "start": {
            "column": 11,
            "line": 27
          }
        },
        "range": [
          664,
          667
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                665,
                666
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              665,
              666
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 27
              },
              "start": {
                "column": 12,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        653,
        708
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          715,
          726
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 57,
              "line": 31
            },
            "start": {
              "column": 53,
              "line": 31
            }
          },
          "range": [
            763,
            767
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                766,
                767
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 31
                },
                "start": {
                  "column": 56,
                  "line": 31
                }
              }
            },
            "range": [
              766,
              767
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 31
              },
              "start": {
                "column": 56,
                "line": 31
              }
            }
          }
        },
        "range": [
          756,
          767
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 31
          },
          "start": {
            "column": 46,
            "line": 31
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 31
          },
          "start": {
            "column": 16,
            "line": 31
          }
        },
        "range": [
          726,
          753
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                727,
                728
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 31
                },
                "start": {
                  "column": 17,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              727,
              728
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 31
              },
              "start": {
                "column": 17,
                "line": 31
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  749,
                  752
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        750,
                        751
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 31
                        },
                        "start": {
                          "column": 40,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      750,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 31
                      },
                      "start": {
                        "column": 40,
                        "line": 31
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 31
                  },
                  "start": {
                    "column": 39,
                    "line": 31
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "range": [
                  740,
                  749
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
              },
              "range": [
                740,
                752
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 31
                },
                "start": {
                  "column": 30,
                  "line": 31
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                730,
                731
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              730,
              752
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 31
              },
              "start": {
                "column": 20,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        710,
        768
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 31
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
        "name": "inferTest",
        "optional": false,
        "range": [
          774,
          783
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
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
              792,
              793
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
          "range": [
            792,
            793
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
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              813,
              825
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    814,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 32
                    },
                    "start": {
                      "column": 45,
                      "line": 32
                    }
                  }
                },
                "range": [
                  814,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 32
                  },
                  "start": {
                    "column": 45,
                    "line": 32
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      823,
                      824
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 32
                      },
                      "start": {
                        "column": 54,
                        "line": 32
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    823,
                    824
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 32
                    },
                    "start": {
                      "column": 54,
                      "line": 32
                    }
                  }
                },
                "range": [
                  817,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 55,
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
                "column": 56,
                "line": 32
              },
              "start": {
                "column": 44,
                "line": 32
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "range": [
              802,
              813
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 32
              },
              "start": {
                "column": 33,
                "line": 32
              }
            }
          },
          "range": [
            802,
            825
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 32
            },
            "start": {
              "column": 33,
              "line": 32
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            832,
            837
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 32
            },
            "start": {
              "column": 63,
              "line": 32
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              828,
              829
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 32
              },
              "start": {
                "column": 59,
                "line": 32
              }
            }
          },
          "range": [
            828,
            829
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 32
            },
            "start": {
              "column": 59,
              "line": 32
            }
          }
        },
        "range": [
          792,
          837
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 32
          },
          "start": {
            "column": 23,
            "line": 32
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 32
          },
          "start": {
            "column": 14,
            "line": 32
          }
        },
        "range": [
          783,
          789
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                784,
                785
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              784,
              785
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 32
              },
              "start": {
                "column": 15,
                "line": 32
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
              "name": "T",
              "optional": false,
              "range": [
                787,
                788
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 32
                },
                "start": {
                  "column": 18,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              787,
              788
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 32
              },
              "start": {
                "column": 18,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        769,
        838
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "range": [
          845,
          846
        ],
        "loc": {
          "end": {
            "column": 6,
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
            858,
            902
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                859,
                865
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 34
                },
                "start": {
                  "column": 19,
                  "line": 34
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  878,
                  901
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      879,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 34
                      },
                      "start": {
                        "column": 39,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        892,
                        900
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            893,
                            899
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 34
                            },
                            "start": {
                              "column": 53,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 34
                        },
                        "start": {
                          "column": 52,
                          "line": 34
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Klass",
                      "optional": false,
                      "range": [
                        887,
                        892
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 34
                        },
                        "start": {
                          "column": 47,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      887,
                      900
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 34
                      },
                      "start": {
                        "column": 47,
                        "line": 34
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 34
                  },
                  "start": {
                    "column": 38,
                    "line": 34
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  867,
                  878
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 34
                  },
                  "start": {
                    "column": 27,
                    "line": 34
                  }
                }
              },
              "range": [
                867,
                901
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 34
                },
                "start": {
                  "column": 27,
                  "line": 34
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 34
            },
            "start": {
              "column": 18,
              "line": 34
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferTest",
          "optional": false,
          "range": [
            849,
            858
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 34
            },
            "start": {
              "column": 9,
              "line": 34
            }
          }
        },
        "range": [
          849,
          902
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
          }
        }
      },
      "range": [
        840,
        903
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              },
              "range": [
                918,
                921
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    920,
                    921
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 36
                    },
                    "start": {
                      "column": 15,
                      "line": 36
                    }
                  }
                },
                "range": [
                  920,
                  921
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 36
                  },
                  "start": {
                    "column": 15,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              917,
              921
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 36
              },
              "start": {
                "column": 12,
                "line": 36
              }
            }
          },
          "init": null,
          "range": [
            917,
            921
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 36
            },
            "start": {
              "column": 12,
              "line": 36
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        905,
        922
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "range": [
            923,
            924
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "child",
          "optional": false,
          "range": [
            925,
            930
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 37
            },
            "start": {
              "column": 2,
              "line": 37
            }
          }
        },
        "range": [
          923,
          930
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        923,
        931
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 37
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
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
