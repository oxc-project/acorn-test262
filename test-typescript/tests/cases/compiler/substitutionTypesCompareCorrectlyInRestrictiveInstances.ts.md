__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    319
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionKeys",
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
        "type": "TSConditionalType",
        "checkType": {
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
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "range": [
            30,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 30,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            46,
            51
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 1
            },
            "start": {
              "column": 46,
              "line": 1
            }
          }
        },
        "trueType": {
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
          },
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
          20,
          51
        ],
        "loc": {
          "end": {
            "column": 51,
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
        52
      ],
      "loc": {
        "end": {
          "column": 52,
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
        "name": "BugHelper",
        "optional": false,
        "range": [
          58,
          67
        ],
        "loc": {
          "end": {
            "column": 14,
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
              79,
              80
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
            79,
            80
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
          "type": "TSAnyKeyword",
          "range": [
            89,
            92
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 36,
              "line": 2
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            131,
            136
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 2
            },
            "start": {
              "column": 78,
              "line": 2
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              102,
              128
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    112,
                    118
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TAll",
                        "optional": false,
                        "range": [
                          113,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 2
                          },
                          "start": {
                            "column": 60,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        113,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 2
                        },
                        "start": {
                          "column": 60,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 2
                    },
                    "start": {
                      "column": 59,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionKeys",
                  "optional": false,
                  "range": [
                    103,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 2
                    },
                    "start": {
                      "column": 50,
                      "line": 2
                    }
                  }
                },
                "range": [
                  103,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 2
                  },
                  "start": {
                    "column": 50,
                    "line": 2
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      126,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 2
                      },
                      "start": {
                        "column": 73,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    126,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 2
                    },
                    "start": {
                      "column": 73,
                      "line": 2
                    }
                  }
                },
                "range": [
                  120,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 2
                  },
                  "start": {
                    "column": 67,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 2
              },
              "start": {
                "column": 49,
                "line": 2
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "range": [
              95,
              102
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 2
              },
              "start": {
                "column": 42,
                "line": 2
              }
            }
          },
          "range": [
            95,
            128
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 2
            },
            "start": {
              "column": 42,
              "line": 2
            }
          }
        },
        "range": [
          79,
          136
        ],
        "loc": {
          "end": {
            "column": 83,
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
            "column": 14,
            "line": 2
          }
        },
        "range": [
          67,
          76
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
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              68,
              69
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 15,
                "line": 2
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
              "name": "TAll",
              "optional": false,
              "range": [
                71,
                75
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              71,
              75
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 18,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        53,
        136
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bug",
        "optional": false,
        "range": [
          142,
          145
        ],
        "loc": {
          "end": {
            "column": 8,
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
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            164,
            176
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAll",
                "optional": false,
                "range": [
                  165,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              "range": [
                165,
                169
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAll",
                "optional": false,
                "range": [
                  171,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              },
              "range": [
                171,
                175
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 3
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BugHelper",
          "optional": false,
          "range": [
            155,
            164
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 18,
              "line": 3
            }
          }
        },
        "range": [
          155,
          176
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 3
          }
        },
        "range": [
          145,
          151
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAll",
              "optional": false,
              "range": [
                146,
                150
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              146,
              150
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        137,
        176
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "name": "Q",
        "optional": false,
        "range": [
          182,
          183
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            195,
            221
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
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
                          198,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
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
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        },
                        "range": [
                          200,
                          205
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            202,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 4
                            },
                            "start": {
                              "column": 25,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        198,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 21,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    196,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          212,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 4
                          },
                          "start": {
                            "column": 35,
                            "line": 4
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
                            "column": 41,
                            "line": 4
                          },
                          "start": {
                            "column": 36,
                            "line": 4
                          }
                        },
                        "range": [
                          213,
                          218
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            215,
                            218
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 4
                            },
                            "start": {
                              "column": 38,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        212,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 4
                        },
                        "start": {
                          "column": 35,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    210,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                196,
                220
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 4
            },
            "start": {
              "column": 18,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionKeys",
          "optional": false,
          "range": [
            186,
            195
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 9,
              "line": 4
            }
          }
        },
        "range": [
          186,
          221
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "range": [
        177,
        221
      ],
      "loc": {
        "end": {
          "column": 44,
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
        "name": "R",
        "optional": false,
        "range": [
          253,
          254
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            260,
            286
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
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
                          263,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 5
                          },
                          "start": {
                            "column": 15,
                            "line": 5
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
                            "line": 5
                          },
                          "start": {
                            "column": 17,
                            "line": 5
                          }
                        },
                        "range": [
                          265,
                          270
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            267,
                            270
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 5
                            },
                            "start": {
                              "column": 19,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        263,
                        270
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    261,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          277,
                          278
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 5
                          },
                          "start": {
                            "column": 29,
                            "line": 5
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
                            "column": 35,
                            "line": 5
                          },
                          "start": {
                            "column": 30,
                            "line": 5
                          }
                        },
                        "range": [
                          278,
                          283
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            280,
                            283
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 32,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        277,
                        283
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
                  ],
                  "range": [
                    275,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 5
                    },
                    "start": {
                      "column": 27,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                261,
                285
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bug",
          "optional": false,
          "range": [
            257,
            260
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 5
            },
            "start": {
              "column": 9,
              "line": 5
            }
          }
        },
        "range": [
          257,
          286
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "range": [
        248,
        286
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
