__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    4881
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__Awaited",
        "optional": false,
        "range": [
          27,
          36
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "range": [
            46,
            47
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNullKeyword",
              "range": [
                56,
                60
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                63,
                72
              ],
              "loc": {
                "end": {
                  "column": 30,
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
            56,
            72
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
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
              83,
              84
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
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                104,
                113
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
                      "name": "U",
                      "optional": false,
                      "range": [
                        111,
                        112
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
                      111,
                      112
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
                  "range": [
                    105,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "range": [
                93,
                104
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "range": [
              93,
              113
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                135,
                136
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              135,
              136
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                125,
                128
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      126,
                      127
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
                    126,
                    127
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
                }
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 5
                },
                "start": {
                  "column": 46,
                  "line": 5
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "__Awaited",
              "optional": false,
              "range": [
                116,
                125
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              }
            },
            "range": [
              116,
              128
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          },
          "range": [
            83,
            136
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              75,
              76
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 33,
                "line": 4
              }
            }
          },
          "range": [
            75,
            76
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 4
            },
            "start": {
              "column": 33,
              "line": 4
            }
          }
        },
        "range": [
          46,
          136
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 6
          },
          "start": {
            "column": 4,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        },
        "range": [
          36,
          39
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
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        137
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 6
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
        "name": "MyPromise",
        "optional": false,
        "range": [
          144,
          153
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
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                165,
                169
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  },
                  "range": [
                    174,
                    229
                  ],
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
                                  "column": 25,
                                  "line": 9
                                },
                                "start": {
                                  "column": 22,
                                  "line": 9
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
                                      "column": 25,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  185,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 9
                                  }
                                }
                              }
                            },
                            "range": [
                              178,
                              186
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 9
                              },
                              "start": {
                                "column": 17,
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
                              "column": 27,
                              "line": 9
                            }
                          },
                          "range": [
                            188,
                            209
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "range": [
                                    191,
                                    192
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  191,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 9
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    206,
                                    209
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "range": [
                                          207,
                                          208
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        207,
                                        208
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 9
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 9
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "PromiseLike",
                                  "optional": false,
                                  "range": [
                                    195,
                                    206
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  195,
                                  209
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "range": [
                              191,
                              209
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
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
                          177,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 9
                          },
                          "start": {
                            "column": 16,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          213,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 9
                          },
                          "start": {
                            "column": 52,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          220,
                          229
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 9
                          },
                          "start": {
                            "column": 59,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      176,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  173,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 83,
                  "line": 9
                },
                "start": {
                  "column": 69,
                  "line": 9
                }
              },
              "range": [
                230,
                244
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    241,
                    244
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          242,
                          243
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 9
                          },
                          "start": {
                            "column": 81,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        242,
                        243
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 9
                        },
                        "start": {
                          "column": 81,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 9
                    },
                    "start": {
                      "column": 80,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "range": [
                    232,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 9
                    },
                    "start": {
                      "column": 71,
                      "line": 9
                    }
                  }
                },
                "range": [
                  232,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 9
                  },
                  "start": {
                    "column": 71,
                    "line": 9
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              },
              "range": [
                169,
                172
              ],
              "params": [
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
                      170,
                      171
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
                  "out": false,
                  "range": [
                    170,
                    171
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
                }
              ]
            },
            "range": [
              165,
              245
            ],
            "loc": {
              "end": {
                "column": 84,
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
          159,
          247
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 20,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        },
        "range": [
          153,
          156
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
                154,
                155
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
              154,
              155
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
          }
        ]
      },
      "range": [
        139,
        247
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InfinitePromise",
        "optional": false,
        "range": [
          254,
          269
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            282,
            302
          ],
          "params": [
            {
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
                          "column": 51,
                          "line": 12
                        },
                        "start": {
                          "column": 50,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      299,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 12
                      },
                      "start": {
                        "column": 50,
                        "line": 12
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 12
                  },
                  "start": {
                    "column": 49,
                    "line": 12
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InfinitePromise",
                "optional": false,
                "range": [
                  283,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 12
                  },
                  "start": {
                    "column": 34,
                    "line": 12
                  }
                }
              },
              "range": [
                283,
                301
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 12
                },
                "start": {
                  "column": 34,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 12
            },
            "start": {
              "column": 33,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "range": [
            275,
            282
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 12
            },
            "start": {
              "column": 26,
              "line": 12
            }
          }
        },
        "range": [
          275,
          302
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 12
          },
          "start": {
            "column": 26,
            "line": 12
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
          269,
          272
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
                270,
                271
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
              270,
              271
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
        249,
        303
      ],
      "loc": {
        "end": {
          "column": 54,
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
        "name": "P0",
        "optional": false,
        "range": [
          310,
          312
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            324,
            389
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  332,
                  388
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          333,
                          339
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 14
                          },
                          "start": {
                            "column": 28,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            349,
                            375
                          ],
                          "params": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      359,
                                      367
                                    ],
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          360,
                                          366
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 61,
                                            "line": 14
                                          },
                                          "start": {
                                            "column": 55,
                                            "line": 14
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 62,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "MyPromise",
                                    "optional": false,
                                    "range": [
                                      350,
                                      359
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 45,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    350,
                                    367
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 14
                                    }
                                  }
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "range": [
                                    370,
                                    374
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
                                350,
                                374
                              ],
                              "loc": {
                                "end": {
                                  "column": 69,
                                  "line": 14
                                },
                                "start": {
                                  "column": 45,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 14
                            },
                            "start": {
                              "column": 44,
                              "line": 14
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            342,
                            349
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 14
                            },
                            "start": {
                              "column": 37,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          342,
                          375
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 14
                          },
                          "start": {
                            "column": 37,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          378,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 14
                          },
                          "start": {
                            "column": 73,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      333,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 14
                      },
                      "start": {
                        "column": 28,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 14
                  },
                  "start": {
                    "column": 27,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  325,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 14
                  }
                }
              },
              "range": [
                325,
                388
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 14
                },
                "start": {
                  "column": 20,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 14
            },
            "start": {
              "column": 19,
              "line": 14
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "__Awaited",
          "optional": false,
          "range": [
            315,
            324
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 14
            },
            "start": {
              "column": 10,
              "line": 14
            }
          }
        },
        "range": [
          315,
          389
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        305,
        390
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "range": [
          396,
          398
        ],
        "loc": {
          "end": {
            "column": 7,
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
            410,
            415
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                411,
                414
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 15
            },
            "start": {
              "column": 19,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "__Awaited",
          "optional": false,
          "range": [
            401,
            410
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 15
            },
            "start": {
              "column": 10,
              "line": 15
            }
          }
        },
        "range": [
          401,
          415
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        391,
        416
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "name": "P2",
        "optional": false,
        "range": [
          422,
          424
        ],
        "loc": {
          "end": {
            "column": 7,
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
            436,
            461
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  452,
                  460
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      453,
                      459
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 16
                      },
                      "start": {
                        "column": 36,
                        "line": 16
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 16
                  },
                  "start": {
                    "column": 35,
                    "line": 16
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InfinitePromise",
                "optional": false,
                "range": [
                  437,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 16
                  },
                  "start": {
                    "column": 20,
                    "line": 16
                  }
                }
              },
              "range": [
                437,
                460
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 16
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 16
            },
            "start": {
              "column": 19,
              "line": 16
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "__Awaited",
          "optional": false,
          "range": [
            427,
            436
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 16
            },
            "start": {
              "column": 10,
              "line": 16
            }
          }
        },
        "range": [
          427,
          461
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "range": [
        417,
        462
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ta",
                "optional": false,
                "range": [
                  559,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ua",
                "optional": false,
                "range": [
                  564,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "range": [
                559,
                566
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              559,
              567
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ua",
                "optional": false,
                "range": [
                  572,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ta",
                "optional": false,
                "range": [
                  577,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 20
                  }
                }
              },
              "range": [
                572,
                579
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
            "range": [
              572,
              580
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ta",
                "optional": false,
                "range": [
                  595,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tx",
                "optional": false,
                "range": [
                  600,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              },
              "range": [
                595,
                602
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              595,
              603
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tx",
                "optional": false,
                "range": [
                  618,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ta",
                "optional": false,
                "range": [
                  623,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 22
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              },
              "range": [
                618,
                625
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              618,
              626
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          553,
          638
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 79,
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
        "name": "f11",
        "optional": false,
        "range": [
          483,
          486
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tx",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 18
              },
              "start": {
                "column": 31,
                "line": 18
              }
            },
            "range": [
              505,
              508
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  507,
                  508
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 18
                  },
                  "start": {
                    "column": 33,
                    "line": 18
                  }
                }
              },
              "range": [
                507,
                508
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 18
                },
                "start": {
                  "column": 33,
                  "line": 18
                }
              }
            }
          },
          "range": [
            503,
            508
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 18
            },
            "start": {
              "column": 29,
              "line": 18
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ta",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 18
              },
              "start": {
                "column": 38,
                "line": 18
              }
            },
            "range": [
              512,
              526
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  523,
                  526
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
                        524,
                        525
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 18
                        },
                        "start": {
                          "column": 50,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      524,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 18
                      },
                      "start": {
                        "column": 50,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 18
                  },
                  "start": {
                    "column": 49,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "__Awaited",
                "optional": false,
                "range": [
                  514,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 18
                  },
                  "start": {
                    "column": 40,
                    "line": 18
                  }
                }
              },
              "range": [
                514,
                526
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 18
                },
                "start": {
                  "column": 40,
                  "line": 18
                }
              }
            }
          },
          "range": [
            510,
            526
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 18
            },
            "start": {
              "column": 36,
              "line": 18
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ux",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 18
              },
              "start": {
                "column": 56,
                "line": 18
              }
            },
            "range": [
              530,
              533
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  532,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 18
                  },
                  "start": {
                    "column": 58,
                    "line": 18
                  }
                }
              },
              "range": [
                532,
                533
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 18
                },
                "start": {
                  "column": 58,
                  "line": 18
                }
              }
            }
          },
          "range": [
            528,
            533
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 18
            },
            "start": {
              "column": 54,
              "line": 18
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ua",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 18
              },
              "start": {
                "column": 63,
                "line": 18
              }
            },
            "range": [
              537,
              551
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  548,
                  551
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        549,
                        550
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 18
                        },
                        "start": {
                          "column": 75,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      549,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 18
                      },
                      "start": {
                        "column": 75,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 18
                  },
                  "start": {
                    "column": 74,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "__Awaited",
                "optional": false,
                "range": [
                  539,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 18
                  },
                  "start": {
                    "column": 65,
                    "line": 18
                  }
                }
              },
              "range": [
                539,
                551
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 18
                },
                "start": {
                  "column": 65,
                  "line": 18
                }
              }
            }
          },
          "range": [
            535,
            551
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 18
            },
            "start": {
              "column": 61,
              "line": 18
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 18
          },
          "start": {
            "column": 12,
            "line": 18
          }
        },
        "range": [
          486,
          502
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
                487,
                488
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              487,
              488
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 18
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  500,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 18
                  },
                  "start": {
                    "column": 26,
                    "line": 18
                  }
                }
              },
              "range": [
                500,
                501
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 26,
                  "line": 18
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
                490,
                491
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              490,
              501
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        474,
        638
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
        "name": "Flatten",
        "optional": false,
        "range": [
          667,
          674
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
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
              707,
              708
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 27
              },
              "start": {
                "column": 45,
                "line": 27
              }
            }
          },
          "range": [
            707,
            708
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 27
            },
            "start": {
              "column": 45,
              "line": 27
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSUnknownKeyword",
            "range": [
              717,
              724
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 27
              },
              "start": {
                "column": 55,
                "line": 27
              }
            }
          },
          "range": [
            717,
            726
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 27
            },
            "start": {
              "column": 55,
              "line": 27
            }
          }
        },
        "falseType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  762,
                  765
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
                        763,
                        764
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 27
                        },
                        "start": {
                          "column": 101,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      763,
                      764
                    ],
                    "loc": {
                      "end": {
                        "column": 102,
                        "line": 27
                      },
                      "start": {
                        "column": 101,
                        "line": 27
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 27
                  },
                  "start": {
                    "column": 100,
                    "line": 27
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Flatten",
                "optional": false,
                "range": [
                  754,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 27
                  },
                  "start": {
                    "column": 92,
                    "line": 27
                  }
                }
              },
              "range": [
                754,
                765
              ],
              "loc": {
                "end": {
                  "column": 103,
                  "line": 27
                },
                "start": {
                  "column": 92,
                  "line": 27
                }
              }
            },
            "range": [
              754,
              767
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 27
              },
              "start": {
                "column": 92,
                "line": 27
              }
            }
          },
          "range": [
            745,
            767
          ],
          "loc": {
            "end": {
              "column": 105,
              "line": 27
            },
            "start": {
              "column": 83,
              "line": 27
            }
          }
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                737,
                740
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
                      738,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 27
                      },
                      "start": {
                        "column": 76,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    738,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 27
                    },
                    "start": {
                      "column": 76,
                      "line": 27
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 27
                },
                "start": {
                  "column": 75,
                  "line": 27
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_Flatten",
              "optional": false,
              "range": [
                729,
                737
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 27
                },
                "start": {
                  "column": 67,
                  "line": 27
                }
              }
            },
            "range": [
              729,
              740
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 27
              },
              "start": {
                "column": 67,
                "line": 27
              }
            }
          },
          "range": [
            729,
            742
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 27
            },
            "start": {
              "column": 67,
              "line": 27
            }
          }
        },
        "range": [
          707,
          767
        ],
        "loc": {
          "end": {
            "column": 105,
            "line": 27
          },
          "start": {
            "column": 45,
            "line": 27
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 27
          },
          "start": {
            "column": 12,
            "line": 27
          }
        },
        "range": [
          674,
          704
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
                    694,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 27
                    },
                    "start": {
                      "column": 32,
                      "line": 27
                    }
                  }
                },
                "range": [
                  694,
                  703
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 27
                  },
                  "start": {
                    "column": 32,
                    "line": 27
                  }
                }
              },
              "range": [
                685,
                703
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
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
                675,
                676
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              675,
              703
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        662,
        768
      ],
      "loc": {
        "end": {
          "column": 106,
          "line": 27
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
        "name": "_Flatten",
        "optional": false,
        "range": [
          774,
          782
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
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
              788,
              789
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 28
              },
              "start": {
                "column": 19,
                "line": 28
              }
            }
          },
          "range": [
            788,
            789
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 28
            },
            "start": {
              "column": 19,
              "line": 28
            }
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    814,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 28
                    },
                    "start": {
                      "column": 45,
                      "line": 28
                    }
                  }
                },
                "out": false,
                "range": [
                  814,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 28
                  },
                  "start": {
                    "column": 45,
                    "line": 28
                  }
                }
              },
              "range": [
                808,
                815
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 28
                },
                "start": {
                  "column": 39,
                  "line": 28
                }
              }
            },
            "range": [
              807,
              818
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 28
              },
              "start": {
                "column": 38,
                "line": 28
              }
            }
          },
          "range": [
            798,
            818
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 28
            },
            "start": {
              "column": 29,
              "line": 28
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              835,
              836
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 28
              },
              "start": {
                "column": 66,
                "line": 28
              }
            }
          },
          "range": [
            835,
            836
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 28
            },
            "start": {
              "column": 66,
              "line": 28
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              829,
              832
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    830,
                    831
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 28
                    },
                    "start": {
                      "column": 61,
                      "line": 28
                    }
                  }
                },
                "range": [
                  830,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 28
                  },
                  "start": {
                    "column": 61,
                    "line": 28
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 28
              },
              "start": {
                "column": 60,
                "line": 28
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Flatten",
            "optional": false,
            "range": [
              821,
              829
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 28
              },
              "start": {
                "column": 52,
                "line": 28
              }
            }
          },
          "range": [
            821,
            832
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 28
            },
            "start": {
              "column": 52,
              "line": 28
            }
          }
        },
        "range": [
          788,
          836
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 28
          },
          "start": {
            "column": 19,
            "line": 28
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 28
          },
          "start": {
            "column": 13,
            "line": 28
          }
        },
        "range": [
          782,
          785
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
                783,
                784
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 14,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              783,
              784
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 28
              },
              "start": {
                "column": 14,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        769,
        837
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InfiniteArray",
        "optional": false,
        "range": [
          844,
          857
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
          }
        }
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              876,
              879
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
                    877,
                    878
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 30
                    },
                    "start": {
                      "column": 38,
                      "line": 30
                    }
                  }
                },
                "range": [
                  877,
                  878
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 30
                  },
                  "start": {
                    "column": 38,
                    "line": 30
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 30
              },
              "start": {
                "column": 37,
                "line": 30
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InfiniteArray",
            "optional": false,
            "range": [
              863,
              876
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 30
              },
              "start": {
                "column": 24,
                "line": 30
              }
            }
          },
          "range": [
            863,
            879
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 30
            },
            "start": {
              "column": 24,
              "line": 30
            }
          }
        },
        "range": [
          863,
          881
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 30
          },
          "start": {
            "column": 24,
            "line": 30
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 30
          },
          "start": {
            "column": 18,
            "line": 30
          }
        },
        "range": [
          857,
          860
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
                858,
                859
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 30
                },
                "start": {
                  "column": 19,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              858,
              859
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 19,
                "line": 30
              }
            }
          }
        ]
      },
      "range": [
        839,
        882
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B0",
        "optional": false,
        "range": [
          889,
          891
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            901,
            915
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      902,
                      908
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 32
                      },
                      "start": {
                        "column": 18,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    902,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 32
                    },
                    "start": {
                      "column": 18,
                      "line": 32
                    }
                  }
                },
                "range": [
                  902,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 32
                  },
                  "start": {
                    "column": 18,
                    "line": 32
                  }
                }
              },
              "range": [
                902,
                914
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 32
                },
                "start": {
                  "column": 18,
                  "line": 32
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 32
            },
            "start": {
              "column": 17,
              "line": 32
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Flatten",
          "optional": false,
          "range": [
            894,
            901
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 32
            },
            "start": {
              "column": 10,
              "line": 32
            }
          }
        },
        "range": [
          894,
          915
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 32
          },
          "start": {
            "column": 10,
            "line": 32
          }
        }
      },
      "range": [
        884,
        916
      ],
      "loc": {
        "end": {
          "column": 32,
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
        "name": "B1",
        "optional": false,
        "range": [
          922,
          924
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            934,
            984
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        935,
                        941
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 33
                        },
                        "start": {
                          "column": 18,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      935,
                      943
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    935,
                    945
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 33
                    },
                    "start": {
                      "column": 18,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "range": [
                              958,
                              964
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 33
                              },
                              "start": {
                                "column": 41,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            958,
                            966
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 33
                            },
                            "start": {
                              "column": 41,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                969,
                                976
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 33
                                },
                                "start": {
                                  "column": 52,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              969,
                              978
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 33
                              },
                              "start": {
                                "column": 52,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            969,
                            980
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 33
                            },
                            "start": {
                              "column": 52,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        958,
                        980
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 33
                        },
                        "start": {
                          "column": 41,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      957,
                      983
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 33
                      },
                      "start": {
                        "column": 40,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    948,
                    983
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 33
                    },
                    "start": {
                      "column": 31,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                935,
                983
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 33
                },
                "start": {
                  "column": 18,
                  "line": 33
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 33
            },
            "start": {
              "column": 17,
              "line": 33
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Flatten",
          "optional": false,
          "range": [
            927,
            934
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 33
            },
            "start": {
              "column": 10,
              "line": 33
            }
          }
        },
        "range": [
          927,
          984
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 33
          },
          "start": {
            "column": 10,
            "line": 33
          }
        }
      },
      "range": [
        917,
        985
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "range": [
          991,
          993
        ],
        "loc": {
          "end": {
            "column": 7,
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
            1003,
            1026
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1017,
                  1025
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1018,
                      1024
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 34
                      },
                      "start": {
                        "column": 32,
                        "line": 34
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 34
                  },
                  "start": {
                    "column": 31,
                    "line": 34
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InfiniteArray",
                "optional": false,
                "range": [
                  1004,
                  1017
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 34
                  },
                  "start": {
                    "column": 18,
                    "line": 34
                  }
                }
              },
              "range": [
                1004,
                1025
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 34
                },
                "start": {
                  "column": 18,
                  "line": 34
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 34
            },
            "start": {
              "column": 17,
              "line": 34
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Flatten",
          "optional": false,
          "range": [
            996,
            1003
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 34
            },
            "start": {
              "column": 10,
              "line": 34
            }
          }
        },
        "range": [
          996,
          1026
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 34
          },
          "start": {
            "column": 10,
            "line": 34
          }
        }
      },
      "range": [
        986,
        1027
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "range": [
          1033,
          1035
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              1041,
              1042
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 35
              },
              "start": {
                "column": 13,
                "line": 35
              }
            }
          },
          "range": [
            1041,
            1042
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 35
            },
            "start": {
              "column": 13,
              "line": 35
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B2",
            "optional": false,
            "range": [
              1038,
              1040
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 35
              },
              "start": {
                "column": 10,
                "line": 35
              }
            }
          },
          "range": [
            1038,
            1040
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 35
            },
            "start": {
              "column": 10,
              "line": 35
            }
          }
        },
        "range": [
          1038,
          1043
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 35
          }
        }
      },
      "range": [
        1028,
        1044
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleOf",
        "optional": false,
        "range": [
          1082,
          1089
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 39
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
            "name": "N",
            "optional": false,
            "range": [
              1113,
              1114
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 39
              },
              "start": {
                "column": 36,
                "line": 39
              }
            }
          },
          "range": [
            1113,
            1114
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 39
            },
            "start": {
              "column": 36,
              "line": 39
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "range": [
              1123,
              1124
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 39
              },
              "start": {
                "column": 46,
                "line": 39
              }
            }
          },
          "range": [
            1123,
            1124
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 39
            },
            "start": {
              "column": 46,
              "line": 39
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            1173,
            1178
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 39
            },
            "start": {
              "column": 96,
              "line": 39
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNumberKeyword",
            "range": [
              1127,
              1133
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 39
              },
              "start": {
                "column": 50,
                "line": 39
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                1142,
                1143
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 39
                },
                "start": {
                  "column": 65,
                  "line": 39
                }
              }
            },
            "range": [
              1142,
              1143
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 39
              },
              "start": {
                "column": 65,
                "line": 39
              }
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1160,
                1170
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
                      1161,
                      1162
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 39
                      },
                      "start": {
                        "column": 84,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1161,
                    1162
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 39
                    },
                    "start": {
                      "column": 84,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "range": [
                      1164,
                      1165
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 39
                      },
                      "start": {
                        "column": 87,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1164,
                    1165
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 39
                    },
                    "start": {
                      "column": 87,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "range": [
                    1167,
                    1169
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 39
                    },
                    "start": {
                      "column": 90,
                      "line": 39
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 39
                },
                "start": {
                  "column": 83,
                  "line": 39
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_TupleOf",
              "optional": false,
              "range": [
                1152,
                1160
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 39
                },
                "start": {
                  "column": 75,
                  "line": 39
                }
              }
            },
            "range": [
              1152,
              1170
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 39
              },
              "start": {
                "column": 75,
                "line": 39
              }
            }
          },
          "trueType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1146,
                  1147
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 39
                  },
                  "start": {
                    "column": 69,
                    "line": 39
                  }
                }
              },
              "range": [
                1146,
                1147
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 39
                },
                "start": {
                  "column": 69,
                  "line": 39
                }
              }
            },
            "range": [
              1146,
              1149
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 39
              },
              "start": {
                "column": 69,
                "line": 39
              }
            }
          },
          "range": [
            1127,
            1170
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 39
            },
            "start": {
              "column": 50,
              "line": 39
            }
          }
        },
        "range": [
          1113,
          1178
        ],
        "loc": {
          "end": {
            "column": 101,
            "line": 39
          },
          "start": {
            "column": 36,
            "line": 39
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 39
          },
          "start": {
            "column": 12,
            "line": 39
          }
        },
        "range": [
          1089,
          1110
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
                1090,
                1091
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 39
                },
                "start": {
                  "column": 13,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              1090,
              1091
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 39
              },
              "start": {
                "column": 13,
                "line": 39
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                1103,
                1109
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 39
                },
                "start": {
                  "column": 26,
                  "line": 39
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                1093,
                1094
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 39
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              1093,
              1109
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 39
              },
              "start": {
                "column": 16,
                "line": 39
              }
            }
          }
        ]
      },
      "range": [
        1077,
        1179
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_TupleOf",
        "optional": false,
        "range": [
          1185,
          1193
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 40
          },
          "start": {
            "column": 5,
            "line": 40
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'length'",
              "value": "length",
              "range": [
                1240,
                1248
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 40
                },
                "start": {
                  "column": 60,
                  "line": 40
                }
              }
            },
            "range": [
              1240,
              1248
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 40
              },
              "start": {
                "column": 60,
                "line": 40
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                1238,
                1239
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 40
                },
                "start": {
                  "column": 58,
                  "line": 40
                }
              }
            },
            "range": [
              1238,
              1239
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 40
              },
              "start": {
                "column": 58,
                "line": 40
              }
            }
          },
          "range": [
            1238,
            1249
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 40
            },
            "start": {
              "column": 58,
              "line": 40
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "range": [
              1258,
              1259
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 40
              },
              "start": {
                "column": 78,
                "line": 40
              }
            }
          },
          "range": [
            1258,
            1259
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 40
            },
            "start": {
              "column": 78,
              "line": 40
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1274,
              1291
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
                    1275,
                    1276
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 40
                    },
                    "start": {
                      "column": 95,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1275,
                  1276
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 40
                  },
                  "start": {
                    "column": 95,
                    "line": 40
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    1278,
                    1279
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 40
                    },
                    "start": {
                      "column": 98,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1278,
                  1279
                ],
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 40
                  },
                  "start": {
                    "column": 98,
                    "line": 40
                  }
                }
              },
              {
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
                        1282,
                        1283
                      ],
                      "loc": {
                        "end": {
                          "column": 103,
                          "line": 40
                        },
                        "start": {
                          "column": 102,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1282,
                      1283
                    ],
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 40
                      },
                      "start": {
                        "column": 102,
                        "line": 40
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
                        "name": "R",
                        "optional": false,
                        "range": [
                          1288,
                          1289
                        ],
                        "loc": {
                          "end": {
                            "column": 109,
                            "line": 40
                          },
                          "start": {
                            "column": 108,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        1288,
                        1289
                      ],
                      "loc": {
                        "end": {
                          "column": 109,
                          "line": 40
                        },
                        "start": {
                          "column": 108,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1285,
                      1289
                    ],
                    "loc": {
                      "end": {
                        "column": 109,
                        "line": 40
                      },
                      "start": {
                        "column": 105,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  1281,
                  1290
                ],
                "loc": {
                  "end": {
                    "column": 110,
                    "line": 40
                  },
                  "start": {
                    "column": 101,
                    "line": 40
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 111,
                "line": 40
              },
              "start": {
                "column": 94,
                "line": 40
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_TupleOf",
            "optional": false,
            "range": [
              1266,
              1274
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 40
              },
              "start": {
                "column": 86,
                "line": 40
              }
            }
          },
          "range": [
            1266,
            1291
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 40
            },
            "start": {
              "column": 86,
              "line": 40
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "range": [
              1262,
              1263
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 40
              },
              "start": {
                "column": 82,
                "line": 40
              }
            }
          },
          "range": [
            1262,
            1263
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 40
            },
            "start": {
              "column": 82,
              "line": 40
            }
          }
        },
        "range": [
          1238,
          1291
        ],
        "loc": {
          "end": {
            "column": 111,
            "line": 40
          },
          "start": {
            "column": 58,
            "line": 40
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 40
          },
          "start": {
            "column": 13,
            "line": 40
          }
        },
        "range": [
          1193,
          1235
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
                1194,
                1195
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 40
                },
                "start": {
                  "column": 14,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              1194,
              1195
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 40
              },
              "start": {
                "column": 14,
                "line": 40
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                1207,
                1213
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 40
                },
                "start": {
                  "column": 27,
                  "line": 40
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                1197,
                1198
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 40
                },
                "start": {
                  "column": 17,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              1197,
              1213
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 40
              },
              "start": {
                "column": 17,
                "line": 40
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  1225,
                  1232
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 40
                  },
                  "start": {
                    "column": 45,
                    "line": 40
                  }
                }
              },
              "range": [
                1225,
                1234
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 40
                },
                "start": {
                  "column": 45,
                  "line": 40
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                1215,
                1216
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 40
                },
                "start": {
                  "column": 35,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              1215,
              1234
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 40
              },
              "start": {
                "column": 35,
                "line": 40
              }
            }
          }
        ]
      },
      "range": [
        1180,
        1292
      ],
      "loc": {
        "end": {
          "column": 112,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT0",
        "optional": false,
        "range": [
          1299,
          1302
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 42
          },
          "start": {
            "column": 5,
            "line": 42
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1312,
            1323
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                1313,
                1319
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 42
                },
                "start": {
                  "column": 19,
                  "line": 42
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
                  1321,
                  1322
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 42
                  },
                  "start": {
                    "column": 27,
                    "line": 42
                  }
                }
              },
              "range": [
                1321,
                1322
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 42
                },
                "start": {
                  "column": 27,
                  "line": 42
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 42
            },
            "start": {
              "column": 18,
              "line": 42
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "range": [
            1305,
            1312
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 42
            },
            "start": {
              "column": 11,
              "line": 42
            }
          }
        },
        "range": [
          1305,
          1323
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 42
          },
          "start": {
            "column": 11,
            "line": 42
          }
        }
      },
      "range": [
        1294,
        1324
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT1",
        "optional": false,
        "range": [
          1330,
          1333
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 43
          },
          "start": {
            "column": 5,
            "line": 43
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1343,
            1362
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                1344,
                1350
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 43
                },
                "start": {
                  "column": 19,
                  "line": 43
                }
              }
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1352,
                      1353
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 43
                      },
                      "start": {
                        "column": 27,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1352,
                    1353
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 43
                    },
                    "start": {
                      "column": 27,
                      "line": 43
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
                      1356,
                      1357
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 43
                      },
                      "start": {
                        "column": 31,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1356,
                    1357
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 43
                    },
                    "start": {
                      "column": 31,
                      "line": 43
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
                      1360,
                      1361
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 43
                      },
                      "start": {
                        "column": 35,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1360,
                    1361
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 43
                    },
                    "start": {
                      "column": 35,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                1352,
                1361
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 43
                },
                "start": {
                  "column": 27,
                  "line": 43
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 43
            },
            "start": {
              "column": 18,
              "line": 43
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "range": [
            1336,
            1343
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 43
            },
            "start": {
              "column": 11,
              "line": 43
            }
          }
        },
        "range": [
          1336,
          1362
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 43
          },
          "start": {
            "column": 11,
            "line": 43
          }
        }
      },
      "range": [
        1325,
        1363
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT2",
        "optional": false,
        "range": [
          1369,
          1372
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 44
          },
          "start": {
            "column": 5,
            "line": 44
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1382,
            1398
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                1383,
                1389
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 44
                },
                "start": {
                  "column": 19,
                  "line": 44
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                1391,
                1397
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 44
                },
                "start": {
                  "column": 27,
                  "line": 44
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 44
            },
            "start": {
              "column": 18,
              "line": 44
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "range": [
            1375,
            1382
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 44
            },
            "start": {
              "column": 11,
              "line": 44
            }
          }
        },
        "range": [
          1375,
          1398
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 44
          },
          "start": {
            "column": 11,
            "line": 44
          }
        }
      },
      "range": [
        1364,
        1399
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT3",
        "optional": false,
        "range": [
          1405,
          1408
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 45
          },
          "start": {
            "column": 5,
            "line": 45
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1418,
            1431
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                1419,
                1425
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 45
                },
                "start": {
                  "column": 19,
                  "line": 45
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                1427,
                1430
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 45
                },
                "start": {
                  "column": 27,
                  "line": 45
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 45
            },
            "start": {
              "column": 18,
              "line": 45
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "range": [
            1411,
            1418
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 45
            },
            "start": {
              "column": 11,
              "line": 45
            }
          }
        },
        "range": [
          1411,
          1431
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 45
          },
          "start": {
            "column": 11,
            "line": 45
          }
        }
      },
      "range": [
        1400,
        1432
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT4",
        "optional": false,
        "range": [
          1438,
          1441
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 46
          },
          "start": {
            "column": 5,
            "line": 46
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1451,
            1464
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                1452,
                1458
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 46
                },
                "start": {
                  "column": 19,
                  "line": 46
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "100",
                "value": 100,
                "range": [
                  1460,
                  1463
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 46
                  },
                  "start": {
                    "column": 27,
                    "line": 46
                  }
                }
              },
              "range": [
                1460,
                1463
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 46
                },
                "start": {
                  "column": 27,
                  "line": 46
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 46
            },
            "start": {
              "column": 18,
              "line": 46
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "range": [
            1444,
            1451
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 46
            },
            "start": {
              "column": 11,
              "line": 46
            }
          }
        },
        "range": [
          1444,
          1464
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 46
          },
          "start": {
            "column": 11,
            "line": 46
          }
        }
      },
      "range": [
        1433,
        1465
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT5",
        "optional": false,
        "range": [
          1471,
          1474
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 47
          },
          "start": {
            "column": 5,
            "line": 47
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1484,
            1498
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                1485,
                1491
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 47
                },
                "start": {
                  "column": 19,
                  "line": 47
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1000",
                "value": 1000,
                "range": [
                  1493,
                  1497
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 47
                  },
                  "start": {
                    "column": 27,
                    "line": 47
                  }
                }
              },
              "range": [
                1493,
                1497
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 47
                },
                "start": {
                  "column": 27,
                  "line": 47
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 47
            },
            "start": {
              "column": 18,
              "line": 47
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "range": [
            1477,
            1484
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 47
            },
            "start": {
              "column": 11,
              "line": 47
            }
          }
        },
        "range": [
          1477,
          1498
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 47
          },
          "start": {
            "column": 11,
            "line": 47
          }
        }
      },
      "range": [
        1466,
        1499
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tn",
                "optional": false,
                "range": [
                  1615,
                  1617
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tm",
                "optional": false,
                "range": [
                  1620,
                  1622
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 50
                  },
                  "start": {
                    "column": 9,
                    "line": 50
                  }
                }
              },
              "range": [
                1615,
                1622
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1615,
              1623
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tm",
                "optional": false,
                "range": [
                  1628,
                  1630
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tn",
                "optional": false,
                "range": [
                  1633,
                  1635
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 51
                  },
                  "start": {
                    "column": 9,
                    "line": 51
                  }
                }
              },
              "range": [
                1628,
                1635
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              1628,
              1636
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          1609,
          1638
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 92,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "range": [
          1526,
          1529
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 49
              },
              "start": {
                "column": 46,
                "line": 49
              }
            },
            "range": [
              1563,
              1583
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1572,
                  1583
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      1573,
                      1579
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 49
                      },
                      "start": {
                        "column": 56,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "range": [
                        1581,
                        1582
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 49
                        },
                        "start": {
                          "column": 64,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1581,
                      1582
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 49
                      },
                      "start": {
                        "column": 64,
                        "line": 49
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 49
                  },
                  "start": {
                    "column": 55,
                    "line": 49
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleOf",
                "optional": false,
                "range": [
                  1565,
                  1572
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 49
                  },
                  "start": {
                    "column": 48,
                    "line": 49
                  }
                }
              },
              "range": [
                1565,
                1583
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 49
                },
                "start": {
                  "column": 48,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1561,
            1583
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 49
            },
            "start": {
              "column": 44,
              "line": 49
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tm",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 90,
                "line": 49
              },
              "start": {
                "column": 70,
                "line": 49
              }
            },
            "range": [
              1587,
              1607
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1596,
                  1607
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      1597,
                      1603
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 49
                      },
                      "start": {
                        "column": 80,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        1605,
                        1606
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 49
                        },
                        "start": {
                          "column": 88,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1605,
                      1606
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 49
                      },
                      "start": {
                        "column": 88,
                        "line": 49
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 49
                  },
                  "start": {
                    "column": 79,
                    "line": 49
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleOf",
                "optional": false,
                "range": [
                  1589,
                  1596
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 49
                  },
                  "start": {
                    "column": 72,
                    "line": 49
                  }
                }
              },
              "range": [
                1589,
                1607
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 49
                },
                "start": {
                  "column": 72,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1585,
            1607
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 49
            },
            "start": {
              "column": 68,
              "line": 49
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 49
          },
          "start": {
            "column": 12,
            "line": 49
          }
        },
        "range": [
          1529,
          1560
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                1540,
                1546
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 49
                },
                "start": {
                  "column": 23,
                  "line": 49
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                1530,
                1531
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 49
                },
                "start": {
                  "column": 13,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1530,
              1546
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 49
              },
              "start": {
                "column": 13,
                "line": 49
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "range": [
                  1558,
                  1559
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 49
                  },
                  "start": {
                    "column": 41,
                    "line": 49
                  }
                }
              },
              "range": [
                1558,
                1559
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 49
                },
                "start": {
                  "column": 41,
                  "line": 49
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
                1548,
                1549
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 49
                },
                "start": {
                  "column": 31,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1548,
              1559
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 49
              },
              "start": {
                "column": 31,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        1517,
        1638
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 49
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
        "name": "f23",
        "optional": false,
        "range": [
          1657,
          1660
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 54
          },
          "start": {
            "column": 17,
            "line": 54
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
                "column": 40,
                "line": 54
              },
              "start": {
                "column": 25,
                "line": 54
              }
            },
            "range": [
              1665,
              1680
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1674,
                  1680
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
                        1675,
                        1676
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 54
                        },
                        "start": {
                          "column": 35,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1675,
                      1676
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 54
                      },
                      "start": {
                        "column": 35,
                        "line": 54
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
                        1678,
                        1679
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 54
                        },
                        "start": {
                          "column": 38,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1678,
                      1679
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 54
                      },
                      "start": {
                        "column": 38,
                        "line": 54
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 54
                  },
                  "start": {
                    "column": 34,
                    "line": 54
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleOf",
                "optional": false,
                "range": [
                  1667,
                  1674
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 54
                  },
                  "start": {
                    "column": 27,
                    "line": 54
                  }
                }
              },
              "range": [
                1667,
                1680
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 54
                },
                "start": {
                  "column": 27,
                  "line": 54
                }
              }
            }
          },
          "range": [
            1664,
            1680
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 54
            },
            "start": {
              "column": 24,
              "line": 54
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 54
          },
          "start": {
            "column": 41,
            "line": 54
          }
        },
        "range": [
          1681,
          1684
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1683,
              1684
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 54
              },
              "start": {
                "column": 43,
                "line": 54
              }
            }
          },
          "range": [
            1683,
            1684
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 54
            },
            "start": {
              "column": 43,
              "line": 54
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 54
          },
          "start": {
            "column": 20,
            "line": 54
          }
        },
        "range": [
          1660,
          1663
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
                1661,
                1662
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 54
                },
                "start": {
                  "column": 21,
                  "line": 54
                }
              }
            },
            "out": false,
            "range": [
              1661,
              1662
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 54
              },
              "start": {
                "column": 21,
                "line": 54
              }
            }
          }
        ]
      },
      "range": [
        1640,
        1685
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  1692,
                  1695
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 56
                  },
                  "start": {
                    "column": 5,
                    "line": 56
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'b'",
                "value": "b",
                "range": [
                  1697,
                  1700
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 56
                  },
                  "start": {
                    "column": 10,
                    "line": 56
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'c'",
                "value": "c",
                "range": [
                  1702,
                  1705
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 56
                  },
                  "start": {
                    "column": 15,
                    "line": 56
                  }
                }
              }
            ],
            "range": [
              1691,
              1706
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f23",
          "optional": false,
          "range": [
            1687,
            1690
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "optional": false,
        "range": [
          1687,
          1707
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        1687,
        1708
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1770,
          1782
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                1772,
                1777
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 60
                },
                "start": {
                  "column": 19,
                  "line": 60
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
                  "column": 27,
                  "line": 60
                },
                "start": {
                  "column": 24,
                  "line": 60
                }
              },
              "range": [
                1777,
                1780
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1779,
                    1780
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 60
                    },
                    "start": {
                      "column": 26,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1779,
                  1780
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 60
                  },
                  "start": {
                    "column": 26,
                    "line": 60
                  }
                }
              }
            },
            "range": [
              1772,
              1780
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 60
              },
              "start": {
                "column": 19,
                "line": 60
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 60
          },
          "start": {
            "column": 17,
            "line": 60
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          1763,
          1766
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 60
          },
          "start": {
            "column": 10,
            "line": 60
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 60
          },
          "start": {
            "column": 13,
            "line": 60
          }
        },
        "range": [
          1766,
          1769
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
                1767,
                1768
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 60
                },
                "start": {
                  "column": 14,
                  "line": 60
                }
              }
            },
            "out": false,
            "range": [
              1767,
              1768
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 60
              },
              "start": {
                "column": 14,
                "line": 60
              }
            }
          }
        ]
      },
      "range": [
        1753,
        1782
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        1782,
        1783
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 60
        },
        "start": {
          "column": 29,
          "line": 60
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecBox",
        "optional": false,
        "range": [
          1789,
          1795
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 61
          },
          "start": {
            "column": 5,
            "line": 61
          }
        }
      },
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
                1801,
                1802
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 61
                },
                "start": {
                  "column": 17,
                  "line": 61
                }
              }
            },
            "range": [
              1801,
              1802
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 61
              },
              "start": {
                "column": 17,
                "line": 61
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1808,
                1819
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1815,
                      1818
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
                            1816,
                            1817
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 61
                            },
                            "start": {
                              "column": 32,
                              "line": 61
                            }
                          }
                        },
                        "range": [
                          1816,
                          1817
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 61
                          },
                          "start": {
                            "column": 32,
                            "line": 61
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 61
                      },
                      "start": {
                        "column": 31,
                        "line": 61
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RecBox",
                    "optional": false,
                    "range": [
                      1809,
                      1815
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 61
                      },
                      "start": {
                        "column": 25,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1809,
                    1818
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 61
                    },
                    "start": {
                      "column": 25,
                      "line": 61
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 61
                },
                "start": {
                  "column": 24,
                  "line": 61
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "range": [
                1805,
                1808
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 61
                },
                "start": {
                  "column": 21,
                  "line": 61
                }
              }
            },
            "range": [
              1805,
              1819
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 61
              },
              "start": {
                "column": 21,
                "line": 61
              }
            }
          }
        ],
        "range": [
          1801,
          1819
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 61
          },
          "start": {
            "column": 17,
            "line": 61
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 61
          },
          "start": {
            "column": 11,
            "line": 61
          }
        },
        "range": [
          1795,
          1798
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
                1796,
                1797
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 61
                },
                "start": {
                  "column": 12,
                  "line": 61
                }
              }
            },
            "out": false,
            "range": [
              1796,
              1797
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 61
              },
              "start": {
                "column": 12,
                "line": 61
              }
            }
          }
        ]
      },
      "range": [
        1784,
        1820
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InfBox",
        "optional": false,
        "range": [
          1826,
          1832
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 62
          },
          "start": {
            "column": 5,
            "line": 62
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1841,
            1852
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1848,
                  1851
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
                        1849,
                        1850
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 62
                        },
                        "start": {
                          "column": 28,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1849,
                      1850
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 62
                      },
                      "start": {
                        "column": 28,
                        "line": 62
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 62
                  },
                  "start": {
                    "column": 27,
                    "line": 62
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InfBox",
                "optional": false,
                "range": [
                  1842,
                  1848
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 62
                  },
                  "start": {
                    "column": 21,
                    "line": 62
                  }
                }
              },
              "range": [
                1842,
                1851
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 62
                },
                "start": {
                  "column": 21,
                  "line": 62
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 62
            },
            "start": {
              "column": 20,
              "line": 62
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            1838,
            1841
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 62
            },
            "start": {
              "column": 17,
              "line": 62
            }
          }
        },
        "range": [
          1838,
          1852
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 62
          },
          "start": {
            "column": 17,
            "line": 62
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 62
          },
          "start": {
            "column": 11,
            "line": 62
          }
        },
        "range": [
          1832,
          1835
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
                1833,
                1834
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 62
                },
                "start": {
                  "column": 12,
                  "line": 62
                }
              }
            },
            "out": false,
            "range": [
              1833,
              1834
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 62
              },
              "start": {
                "column": 12,
                "line": 62
              }
            }
          }
        ]
      },
      "range": [
        1821,
        1853
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
        "name": "unbox",
        "optional": false,
        "range": [
          1872,
          1877
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 64
          },
          "start": {
            "column": 17,
            "line": 64
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "box",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 64
              },
              "start": {
                "column": 29,
                "line": 64
              }
            },
            "range": [
              1884,
              1895
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1892,
                  1895
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
                        1893,
                        1894
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 64
                        },
                        "start": {
                          "column": 38,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1893,
                      1894
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 64
                      },
                      "start": {
                        "column": 38,
                        "line": 64
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 64
                  },
                  "start": {
                    "column": 37,
                    "line": 64
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RecBox",
                "optional": false,
                "range": [
                  1886,
                  1892
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 64
                  },
                  "start": {
                    "column": 31,
                    "line": 64
                  }
                }
              },
              "range": [
                1886,
                1895
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 64
                },
                "start": {
                  "column": 31,
                  "line": 64
                }
              }
            }
          },
          "range": [
            1881,
            1895
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 64
            },
            "start": {
              "column": 26,
              "line": 64
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 64
          },
          "start": {
            "column": 41,
            "line": 64
          }
        },
        "range": [
          1896,
          1899
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1898,
              1899
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 64
              },
              "start": {
                "column": 43,
                "line": 64
              }
            }
          },
          "range": [
            1898,
            1899
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 64
            },
            "start": {
              "column": 43,
              "line": 64
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 64
          },
          "start": {
            "column": 22,
            "line": 64
          }
        },
        "range": [
          1877,
          1880
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
                1878,
                1879
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 64
                },
                "start": {
                  "column": 23,
                  "line": 64
                }
              }
            },
            "out": false,
            "range": [
              1878,
              1879
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 64
              },
              "start": {
                "column": 23,
                "line": 64
              }
            }
          }
        ]
      },
      "range": [
        1855,
        1899
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "range": [
          1906,
          1908
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 66
          },
          "start": {
            "column": 5,
            "line": 66
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1914,
            1922
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                1915,
                1921
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 66
                },
                "start": {
                  "column": 14,
                  "line": 66
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 66
            },
            "start": {
              "column": 13,
              "line": 66
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            1911,
            1914
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 66
            },
            "start": {
              "column": 10,
              "line": 66
            }
          }
        },
        "range": [
          1911,
          1922
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 66
          },
          "start": {
            "column": 10,
            "line": 66
          }
        }
      },
      "range": [
        1901,
        1923
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          1929,
          1931
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 67
          },
          "start": {
            "column": 5,
            "line": 67
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1937,
            1941
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "range": [
                  1938,
                  1940
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 67
                  },
                  "start": {
                    "column": 14,
                    "line": 67
                  }
                }
              },
              "range": [
                1938,
                1940
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 67
                },
                "start": {
                  "column": 14,
                  "line": 67
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 67
            },
            "start": {
              "column": 13,
              "line": 67
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            1934,
            1937
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 67
            },
            "start": {
              "column": 10,
              "line": 67
            }
          }
        },
        "range": [
          1934,
          1941
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 67
          },
          "start": {
            "column": 10,
            "line": 67
          }
        }
      },
      "range": [
        1924,
        1942
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "range": [
          1948,
          1950
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1956,
            1960
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  1957,
                  1959
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 68
                  },
                  "start": {
                    "column": 14,
                    "line": 68
                  }
                }
              },
              "range": [
                1957,
                1959
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 68
                },
                "start": {
                  "column": 14,
                  "line": 68
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 68
            },
            "start": {
              "column": 13,
              "line": 68
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            1953,
            1956
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 68
            },
            "start": {
              "column": 10,
              "line": 68
            }
          }
        },
        "range": [
          1953,
          1960
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 68
          },
          "start": {
            "column": 10,
            "line": 68
          }
        }
      },
      "range": [
        1943,
        1961
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "range": [
          1967,
          1969
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 69
          },
          "start": {
            "column": 5,
            "line": 69
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1975,
            1979
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "range": [
                  1976,
                  1978
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 69
                  },
                  "start": {
                    "column": 14,
                    "line": 69
                  }
                }
              },
              "range": [
                1976,
                1978
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 69
                },
                "start": {
                  "column": 14,
                  "line": 69
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 69
            },
            "start": {
              "column": 13,
              "line": 69
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            1972,
            1975
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 69
            },
            "start": {
              "column": 10,
              "line": 69
            }
          }
        },
        "range": [
          1972,
          1979
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 69
          },
          "start": {
            "column": 10,
            "line": 69
          }
        }
      },
      "range": [
        1962,
        1980
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "range": [
          1986,
          1988
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 70
          },
          "start": {
            "column": 5,
            "line": 70
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1994,
            1998
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "range": [
                  1995,
                  1997
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 70
                  },
                  "start": {
                    "column": 14,
                    "line": 70
                  }
                }
              },
              "range": [
                1995,
                1997
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 70
                },
                "start": {
                  "column": 14,
                  "line": 70
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 70
            },
            "start": {
              "column": 13,
              "line": 70
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            1991,
            1994
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 70
            },
            "start": {
              "column": 10,
              "line": 70
            }
          }
        },
        "range": [
          1991,
          1998
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 70
          },
          "start": {
            "column": 10,
            "line": 70
          }
        }
      },
      "range": [
        1981,
        1999
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "range": [
          2005,
          2007
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 71
          },
          "start": {
            "column": 5,
            "line": 71
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2013,
            2017
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "range": [
                  2014,
                  2016
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 71
                  },
                  "start": {
                    "column": 14,
                    "line": 71
                  }
                }
              },
              "range": [
                2014,
                2016
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 71
                },
                "start": {
                  "column": 14,
                  "line": 71
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 71
            },
            "start": {
              "column": 13,
              "line": 71
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            2010,
            2013
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 71
            },
            "start": {
              "column": 10,
              "line": 71
            }
          }
        },
        "range": [
          2010,
          2017
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 71
          },
          "start": {
            "column": 10,
            "line": 71
          }
        }
      },
      "range": [
        2000,
        2018
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 73
                },
                "start": {
                  "column": 14,
                  "line": 73
                }
              },
              "range": [
                2034,
                2072
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2039,
                    2072
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2043,
                          2071
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                2047,
                                2070
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      2051,
                                      2069
                                    ],
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "range": [
                                            2055,
                                            2068
                                          ],
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "range": [
                                                  2059,
                                                  2067
                                                ],
                                                "params": [
                                                  {
                                                    "type": "TSStringKeyword",
                                                    "range": [
                                                      2060,
                                                      2066
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 46,
                                                        "line": 73
                                                      },
                                                      "start": {
                                                        "column": 40,
                                                        "line": 73
                                                      }
                                                    }
                                                  }
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 47,
                                                    "line": 73
                                                  },
                                                  "start": {
                                                    "column": 39,
                                                    "line": 73
                                                  }
                                                }
                                              },
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Box",
                                                "optional": false,
                                                "range": [
                                                  2056,
                                                  2059
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 39,
                                                    "line": 73
                                                  },
                                                  "start": {
                                                    "column": 36,
                                                    "line": 73
                                                  }
                                                }
                                              },
                                              "range": [
                                                2056,
                                                2067
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 47,
                                                  "line": 73
                                                },
                                                "start": {
                                                  "column": 36,
                                                  "line": 73
                                                }
                                              }
                                            }
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 48,
                                              "line": 73
                                            },
                                            "start": {
                                              "column": 35,
                                              "line": 73
                                            }
                                          }
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Box",
                                          "optional": false,
                                          "range": [
                                            2052,
                                            2055
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 35,
                                              "line": 73
                                            },
                                            "start": {
                                              "column": 32,
                                              "line": 73
                                            }
                                          }
                                        },
                                        "range": [
                                          2052,
                                          2068
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 48,
                                            "line": 73
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 73
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 73
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Box",
                                    "optional": false,
                                    "range": [
                                      2048,
                                      2051
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 73
                                      }
                                    }
                                  },
                                  "range": [
                                    2048,
                                    2069
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 73
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 73
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 73
                                },
                                "start": {
                                  "column": 27,
                                  "line": 73
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Box",
                              "optional": false,
                              "range": [
                                2044,
                                2047
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 73
                                },
                                "start": {
                                  "column": 24,
                                  "line": 73
                                }
                              }
                            },
                            "range": [
                              2044,
                              2070
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 73
                              },
                              "start": {
                                "column": 24,
                                "line": 73
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 73
                          },
                          "start": {
                            "column": 23,
                            "line": 73
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Box",
                        "optional": false,
                        "range": [
                          2040,
                          2043
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 73
                          },
                          "start": {
                            "column": 20,
                            "line": 73
                          }
                        }
                      },
                      "range": [
                        2040,
                        2071
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 73
                        },
                        "start": {
                          "column": 20,
                          "line": 73
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 73
                    },
                    "start": {
                      "column": 19,
                      "line": 73
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "range": [
                    2036,
                    2039
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 73
                    },
                    "start": {
                      "column": 16,
                      "line": 73
                    }
                  }
                },
                "range": [
                  2036,
                  2072
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 73
                  },
                  "start": {
                    "column": 16,
                    "line": 73
                  }
                }
              }
            },
            "range": [
              2032,
              2072
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 73
              },
              "start": {
                "column": 12,
                "line": 73
              }
            }
          },
          "init": null,
          "range": [
            2032,
            2072
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 73
            },
            "start": {
              "column": 12,
              "line": 73
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2020,
        2073
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 74
                },
                "start": {
                  "column": 14,
                  "line": 74
                }
              },
              "range": [
                2088,
                2092
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T6",
                  "optional": false,
                  "range": [
                    2090,
                    2092
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 74
                    },
                    "start": {
                      "column": 16,
                      "line": 74
                    }
                  }
                },
                "range": [
                  2090,
                  2092
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 74
                  },
                  "start": {
                    "column": 16,
                    "line": 74
                  }
                }
              }
            },
            "range": [
              2086,
              2092
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 74
              },
              "start": {
                "column": 12,
                "line": 74
              }
            }
          },
          "init": null,
          "range": [
            2086,
            2092
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 74
            },
            "start": {
              "column": 12,
              "line": 74
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2074,
        2093
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 75
                },
                "start": {
                  "column": 14,
                  "line": 75
                }
              },
              "range": [
                2108,
                2124
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2116,
                    2124
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        2117,
                        2123
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 75
                        },
                        "start": {
                          "column": 23,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 75
                    },
                    "start": {
                      "column": 22,
                      "line": 75
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InfBox",
                  "optional": false,
                  "range": [
                    2110,
                    2116
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 75
                    },
                    "start": {
                      "column": 16,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2110,
                  2124
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 75
                  },
                  "start": {
                    "column": 16,
                    "line": 75
                  }
                }
              }
            },
            "range": [
              2106,
              2124
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 75
              },
              "start": {
                "column": 12,
                "line": 75
              }
            }
          },
          "init": null,
          "range": [
            2106,
            2124
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 75
            },
            "start": {
              "column": 12,
              "line": 75
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2094,
        2125
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 76
                },
                "start": {
                  "column": 14,
                  "line": 76
                }
              },
              "range": [
                2140,
                2182
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        2144,
                        2149
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 76
                        },
                        "start": {
                          "column": 18,
                          "line": 76
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
                          "column": 55,
                          "line": 76
                        },
                        "start": {
                          "column": 23,
                          "line": 76
                        }
                      },
                      "range": [
                        2149,
                        2181
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2153,
                                2158
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 76
                                },
                                "start": {
                                  "column": 27,
                                  "line": 76
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
                                  "column": 54,
                                  "line": 76
                                },
                                "start": {
                                  "column": 32,
                                  "line": 76
                                }
                              },
                              "range": [
                                2158,
                                2180
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
                                      "name": "value",
                                      "optional": false,
                                      "range": [
                                        2162,
                                        2167
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 76
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 76
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
                                          "column": 52,
                                          "line": 76
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 76
                                        }
                                      },
                                      "range": [
                                        2167,
                                        2178
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeQuery",
                                        "exprName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b4",
                                          "optional": false,
                                          "range": [
                                            2176,
                                            2178
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 52,
                                              "line": 76
                                            },
                                            "start": {
                                              "column": 50,
                                              "line": 76
                                            }
                                          }
                                        },
                                        "range": [
                                          2169,
                                          2178
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 76
                                          },
                                          "start": {
                                            "column": 43,
                                            "line": 76
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      2162,
                                      2178
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 76
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 76
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  2160,
                                  2180
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 76
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 76
                                  }
                                }
                              }
                            },
                            "range": [
                              2153,
                              2180
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 76
                              },
                              "start": {
                                "column": 27,
                                "line": 76
                              }
                            }
                          }
                        ],
                        "range": [
                          2151,
                          2181
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 76
                          },
                          "start": {
                            "column": 25,
                            "line": 76
                          }
                        }
                      }
                    },
                    "range": [
                      2144,
                      2181
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 76
                      },
                      "start": {
                        "column": 18,
                        "line": 76
                      }
                    }
                  }
                ],
                "range": [
                  2142,
                  2182
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 76
                  },
                  "start": {
                    "column": 16,
                    "line": 76
                  }
                }
              }
            },
            "range": [
              2138,
              2182
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 76
              },
              "start": {
                "column": 12,
                "line": 76
              }
            }
          },
          "init": null,
          "range": [
            2138,
            2182
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 76
            },
            "start": {
              "column": 12,
              "line": 76
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2126,
        2183
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "range": [
              2191,
              2193
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 78
              },
              "start": {
                "column": 6,
                "line": 78
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "range": [
            2185,
            2190
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 78
            },
            "start": {
              "column": 0,
              "line": 78
            }
          }
        },
        "optional": false,
        "range": [
          2185,
          2194
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 78
          },
          "start": {
            "column": 0,
            "line": 78
          }
        }
      },
      "range": [
        2185,
        2195
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "range": [
              2213,
              2215
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 79
              },
              "start": {
                "column": 6,
                "line": 79
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "range": [
            2207,
            2212
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 79
            },
            "start": {
              "column": 0,
              "line": 79
            }
          }
        },
        "optional": false,
        "range": [
          2207,
          2216
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 79
          },
          "start": {
            "column": 0,
            "line": 79
          }
        }
      },
      "range": [
        2207,
        2217
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "range": [
              2235,
              2237
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 80
              },
              "start": {
                "column": 6,
                "line": 80
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "range": [
            2229,
            2234
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 80
            },
            "start": {
              "column": 0,
              "line": 80
            }
          }
        },
        "optional": false,
        "range": [
          2229,
          2238
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 80
          },
          "start": {
            "column": 0,
            "line": 80
          }
        }
      },
      "range": [
        2229,
        2239
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    2267,
                    2272
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 81
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
                        "name": "value",
                        "optional": false,
                        "range": [
                          2276,
                          2281
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 81
                          },
                          "start": {
                            "column": 17,
                            "line": 81
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2285,
                                2290
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 81
                                },
                                "start": {
                                  "column": 26,
                                  "line": 81
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
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      2294,
                                      2299
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 81
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
                                          "name": "value",
                                          "optional": false,
                                          "range": [
                                            2303,
                                            2308
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 49,
                                              "line": 81
                                            },
                                            "start": {
                                              "column": 44,
                                              "line": 81
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
                                                "name": "value",
                                                "optional": false,
                                                "range": [
                                                  2312,
                                                  2317
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 58,
                                                    "line": 81
                                                  },
                                                  "start": {
                                                    "column": 53,
                                                    "line": 81
                                                  }
                                                }
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "Literal",
                                                "raw": "5",
                                                "value": 5,
                                                "range": [
                                                  2319,
                                                  2320
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 61,
                                                    "line": 81
                                                  },
                                                  "start": {
                                                    "column": 60,
                                                    "line": 81
                                                  }
                                                }
                                              },
                                              "range": [
                                                2312,
                                                2320
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 61,
                                                  "line": 81
                                                },
                                                "start": {
                                                  "column": 53,
                                                  "line": 81
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            2310,
                                            2322
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 63,
                                              "line": 81
                                            },
                                            "start": {
                                              "column": 51,
                                              "line": 81
                                            }
                                          }
                                        },
                                        "range": [
                                          2303,
                                          2322
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 63,
                                            "line": 81
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 81
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      2301,
                                      2323
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 64,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "range": [
                                    2294,
                                    2323
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 64,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 81
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2292,
                                2324
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 81
                                },
                                "start": {
                                  "column": 33,
                                  "line": 81
                                }
                              }
                            },
                            "range": [
                              2285,
                              2324
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 81
                              },
                              "start": {
                                "column": 26,
                                "line": 81
                              }
                            }
                          }
                        ],
                        "range": [
                          2283,
                          2325
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 81
                          },
                          "start": {
                            "column": 24,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        2276,
                        2325
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 81
                        },
                        "start": {
                          "column": 17,
                          "line": 81
                        }
                      }
                    }
                  ],
                  "range": [
                    2274,
                    2326
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 81
                    },
                    "start": {
                      "column": 15,
                      "line": 81
                    }
                  }
                },
                "range": [
                  2267,
                  2326
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 81
                  },
                  "start": {
                    "column": 8,
                    "line": 81
                  }
                }
              }
            ],
            "range": [
              2265,
              2327
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 81
              },
              "start": {
                "column": 6,
                "line": 81
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "range": [
            2259,
            2264
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 81
            },
            "start": {
              "column": 0,
              "line": 81
            }
          }
        },
        "optional": false,
        "range": [
          2259,
          2328
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 81
          },
          "start": {
            "column": 0,
            "line": 81
          }
        }
      },
      "range": [
        2259,
        2329
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b4",
            "optional": false,
            "range": [
              2347,
              2349
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 82
              },
              "start": {
                "column": 6,
                "line": 82
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "range": [
            2341,
            2346
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 82
            },
            "start": {
              "column": 0,
              "line": 82
            }
          }
        },
        "optional": false,
        "range": [
          2341,
          2350
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 82
          },
          "start": {
            "column": 0,
            "line": 82
          }
        }
      },
      "range": [
        2341,
        2351
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    2395,
                    2400
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
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
                        "name": "value",
                        "optional": false,
                        "range": [
                          2404,
                          2409
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 83
                          },
                          "start": {
                            "column": 17,
                            "line": 83
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                2417,
                                2422
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 83
                                },
                                "start": {
                                  "column": 30,
                                  "line": 83
                                }
                              }
                            },
                            "kind": "get",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                2422,
                                2441
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "ThisExpression",
                                      "range": [
                                        2434,
                                        2438
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 51,
                                          "line": 83
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 83
                                        }
                                      }
                                    },
                                    "range": [
                                      2427,
                                      2439
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 83
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  2425,
                                  2441
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 83
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 83
                                  }
                                }
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 83
                                },
                                "start": {
                                  "column": 35,
                                  "line": 83
                                }
                              }
                            },
                            "range": [
                              2413,
                              2441
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 83
                              },
                              "start": {
                                "column": 26,
                                "line": 83
                              }
                            }
                          }
                        ],
                        "range": [
                          2411,
                          2443
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 83
                          },
                          "start": {
                            "column": 24,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        2404,
                        2443
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 83
                        },
                        "start": {
                          "column": 17,
                          "line": 83
                        }
                      }
                    }
                  ],
                  "range": [
                    2402,
                    2444
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 83
                    },
                    "start": {
                      "column": 15,
                      "line": 83
                    }
                  }
                },
                "range": [
                  2395,
                  2444
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 83
                  },
                  "start": {
                    "column": 8,
                    "line": 83
                  }
                }
              }
            ],
            "range": [
              2393,
              2445
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 83
              },
              "start": {
                "column": 6,
                "line": 83
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "range": [
            2387,
            2392
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 83
            },
            "start": {
              "column": 0,
              "line": 83
            }
          }
        },
        "optional": false,
        "range": [
          2387,
          2446
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 83
          },
          "start": {
            "column": 0,
            "line": 83
          }
        }
      },
      "range": [
        2387,
        2447
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box1",
        "optional": false,
        "range": [
          2545,
          2549
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 87
          },
          "start": {
            "column": 5,
            "line": 87
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
              "name": "value",
              "optional": false,
              "range": [
                2557,
                2562
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 87
                },
                "start": {
                  "column": 17,
                  "line": 87
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
                  "column": 25,
                  "line": 87
                },
                "start": {
                  "column": 22,
                  "line": 87
                }
              },
              "range": [
                2562,
                2565
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    2564,
                    2565
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 87
                    },
                    "start": {
                      "column": 24,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2564,
                  2565
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 87
                  },
                  "start": {
                    "column": 24,
                    "line": 87
                  }
                }
              }
            },
            "range": [
              2557,
              2565
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 87
              },
              "start": {
                "column": 17,
                "line": 87
              }
            }
          }
        ],
        "range": [
          2555,
          2567
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 87
          },
          "start": {
            "column": 15,
            "line": 87
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 87
          },
          "start": {
            "column": 9,
            "line": 87
          }
        },
        "range": [
          2549,
          2552
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
                2550,
                2551
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 87
                },
                "start": {
                  "column": 10,
                  "line": 87
                }
              }
            },
            "out": false,
            "range": [
              2550,
              2551
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 87
              },
              "start": {
                "column": 10,
                "line": 87
              }
            }
          }
        ]
      },
      "range": [
        2540,
        2568
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box2",
        "optional": false,
        "range": [
          2574,
          2578
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 88
          },
          "start": {
            "column": 5,
            "line": 88
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
              "name": "value",
              "optional": false,
              "range": [
                2586,
                2591
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 88
                },
                "start": {
                  "column": 17,
                  "line": 88
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
                  "column": 25,
                  "line": 88
                },
                "start": {
                  "column": 22,
                  "line": 88
                }
              },
              "range": [
                2591,
                2594
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    2593,
                    2594
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 88
                    },
                    "start": {
                      "column": 24,
                      "line": 88
                    }
                  }
                },
                "range": [
                  2593,
                  2594
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 88
                  },
                  "start": {
                    "column": 24,
                    "line": 88
                  }
                }
              }
            },
            "range": [
              2586,
              2594
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 88
              },
              "start": {
                "column": 17,
                "line": 88
              }
            }
          }
        ],
        "range": [
          2584,
          2596
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 88
          },
          "start": {
            "column": 15,
            "line": 88
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 88
          },
          "start": {
            "column": 9,
            "line": 88
          }
        },
        "range": [
          2578,
          2581
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
                2579,
                2580
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 88
                },
                "start": {
                  "column": 10,
                  "line": 88
                }
              }
            },
            "out": false,
            "range": [
              2579,
              2580
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 88
              },
              "start": {
                "column": 10,
                "line": 88
              }
            }
          }
        ]
      },
      "range": [
        2569,
        2597
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
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
        "name": "foo",
        "optional": false,
        "range": [
          2616,
          2619
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 90
          },
          "start": {
            "column": 17,
            "line": 90
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
                "line": 90
              },
              "start": {
                "column": 25,
                "line": 90
              }
            },
            "range": [
              2624,
              2639
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2630,
                  2639
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2635,
                        2638
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
                              2636,
                              2637
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 90
                              },
                              "start": {
                                "column": 37,
                                "line": 90
                              }
                            }
                          },
                          "range": [
                            2636,
                            2637
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 90
                            },
                            "start": {
                              "column": 37,
                              "line": 90
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 90
                        },
                        "start": {
                          "column": 36,
                          "line": 90
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box1",
                      "optional": false,
                      "range": [
                        2631,
                        2635
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 90
                        },
                        "start": {
                          "column": 32,
                          "line": 90
                        }
                      }
                    },
                    "range": [
                      2631,
                      2638
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 90
                      },
                      "start": {
                        "column": 32,
                        "line": 90
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 90
                  },
                  "start": {
                    "column": 31,
                    "line": 90
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box1",
                "optional": false,
                "range": [
                  2626,
                  2630
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 90
                  },
                  "start": {
                    "column": 27,
                    "line": 90
                  }
                }
              },
              "range": [
                2626,
                2639
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 90
                },
                "start": {
                  "column": 27,
                  "line": 90
                }
              }
            }
          },
          "range": [
            2623,
            2639
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 90
            },
            "start": {
              "column": 24,
              "line": 90
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 90
          },
          "start": {
            "column": 41,
            "line": 90
          }
        },
        "range": [
          2640,
          2643
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2642,
              2643
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 90
              },
              "start": {
                "column": 43,
                "line": 90
              }
            }
          },
          "range": [
            2642,
            2643
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 90
            },
            "start": {
              "column": 43,
              "line": 90
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 90
          },
          "start": {
            "column": 20,
            "line": 90
          }
        },
        "range": [
          2619,
          2622
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
                2620,
                2621
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 90
                },
                "start": {
                  "column": 21,
                  "line": 90
                }
              }
            },
            "out": false,
            "range": [
              2620,
              2621
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 90
              },
              "start": {
                "column": 21,
                "line": 90
              }
            }
          }
        ]
      },
      "range": [
        2599,
        2644
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 92
                },
                "start": {
                  "column": 13,
                  "line": 92
                }
              },
              "range": [
                2659,
                2679
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2665,
                    2679
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2670,
                          2678
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              2671,
                              2677
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 92
                              },
                              "start": {
                                "column": 25,
                                "line": 92
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 92
                          },
                          "start": {
                            "column": 24,
                            "line": 92
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Box2",
                        "optional": false,
                        "range": [
                          2666,
                          2670
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 92
                          },
                          "start": {
                            "column": 20,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        2666,
                        2678
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 92
                        },
                        "start": {
                          "column": 20,
                          "line": 92
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 92
                    },
                    "start": {
                      "column": 19,
                      "line": 92
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box2",
                  "optional": false,
                  "range": [
                    2661,
                    2665
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 92
                    },
                    "start": {
                      "column": 15,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2661,
                  2679
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 92
                  },
                  "start": {
                    "column": 15,
                    "line": 92
                  }
                }
              }
            },
            "range": [
              2658,
              2679
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 92
              },
              "start": {
                "column": 12,
                "line": 92
              }
            }
          },
          "init": null,
          "range": [
            2658,
            2679
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 92
            },
            "start": {
              "column": 12,
              "line": 92
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        2646,
        2680
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              2686,
              2687
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            2682,
            2685
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 94
            },
            "start": {
              "column": 0,
              "line": 94
            }
          }
        },
        "optional": false,
        "range": [
          2682,
          2688
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 94
          },
          "start": {
            "column": 0,
            "line": 94
          }
        }
      },
      "range": [
        2682,
        2689
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Intersect",
        "optional": false,
        "range": [
          2741,
          2750
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 98
          },
          "start": {
            "column": 5,
            "line": 98
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
            "name": "U",
            "optional": false,
            "range": [
              2783,
              2784
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 98
              },
              "start": {
                "column": 47,
                "line": 98
              }
            }
          },
          "range": [
            2783,
            2784
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 98
            },
            "start": {
              "column": 47,
              "line": 98
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "H",
                  "optional": false,
                  "range": [
                    2800,
                    2801
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 98
                    },
                    "start": {
                      "column": 64,
                      "line": 98
                    }
                  }
                },
                "out": false,
                "range": [
                  2800,
                  2801
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 98
                  },
                  "start": {
                    "column": 64,
                    "line": 98
                  }
                }
              },
              "range": [
                2794,
                2801
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 98
                },
                "start": {
                  "column": 58,
                  "line": 98
                }
              }
            },
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      2812,
                      2813
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 98
                      },
                      "start": {
                        "column": 76,
                        "line": 98
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2812,
                    2813
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 98
                    },
                    "start": {
                      "column": 76,
                      "line": 98
                    }
                  }
                },
                "range": [
                  2806,
                  2813
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 98
                  },
                  "start": {
                    "column": 70,
                    "line": 98
                  }
                }
              },
              "range": [
                2803,
                2813
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 98
                },
                "start": {
                  "column": 67,
                  "line": 98
                }
              }
            }
          ],
          "range": [
            2793,
            2814
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 98
            },
            "start": {
              "column": 57,
              "line": 98
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "range": [
              2839,
              2840
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 98
              },
              "start": {
                "column": 103,
                "line": 98
              }
            }
          },
          "range": [
            2839,
            2840
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 98
            },
            "start": {
              "column": 103,
              "line": 98
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2826,
              2836
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
                    2827,
                    2828
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 98
                    },
                    "start": {
                      "column": 91,
                      "line": 98
                    }
                  }
                },
                "range": [
                  2827,
                  2828
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 98
                  },
                  "start": {
                    "column": 91,
                    "line": 98
                  }
                }
              },
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "range": [
                        2830,
                        2831
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 98
                        },
                        "start": {
                          "column": 94,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2830,
                      2831
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 98
                      },
                      "start": {
                        "column": 94,
                        "line": 98
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "H",
                      "optional": false,
                      "range": [
                        2834,
                        2835
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 98
                        },
                        "start": {
                          "column": 98,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2834,
                      2835
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 98
                      },
                      "start": {
                        "column": 98,
                        "line": 98
                      }
                    }
                  }
                ],
                "range": [
                  2830,
                  2835
                ],
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 98
                  },
                  "start": {
                    "column": 94,
                    "line": 98
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 98
              },
              "start": {
                "column": 90,
                "line": 98
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intersect",
            "optional": false,
            "range": [
              2817,
              2826
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 98
              },
              "start": {
                "column": 81,
                "line": 98
              }
            }
          },
          "range": [
            2817,
            2836
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 98
            },
            "start": {
              "column": 81,
              "line": 98
            }
          }
        },
        "range": [
          2783,
          2840
        ],
        "loc": {
          "end": {
            "column": 104,
            "line": 98
          },
          "start": {
            "column": 47,
            "line": 98
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 98
          },
          "start": {
            "column": 14,
            "line": 98
          }
        },
        "range": [
          2750,
          2780
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
                  2761,
                  2764
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 98
                  },
                  "start": {
                    "column": 25,
                    "line": 98
                  }
                }
              },
              "range": [
                2761,
                2766
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 98
                },
                "start": {
                  "column": 25,
                  "line": 98
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
                2751,
                2752
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 98
                },
                "start": {
                  "column": 15,
                  "line": 98
                }
              }
            },
            "out": false,
            "range": [
              2751,
              2766
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 98
              },
              "start": {
                "column": 15,
                "line": 98
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                2772,
                2779
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 98
                },
                "start": {
                  "column": 36,
                  "line": 98
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                2768,
                2769
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 98
                },
                "start": {
                  "column": 32,
                  "line": 98
                }
              }
            },
            "out": false,
            "range": [
              2768,
              2779
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 98
              },
              "start": {
                "column": 32,
                "line": 98
              }
            }
          }
        ]
      },
      "range": [
        2736,
        2841
      ],
      "loc": {
        "end": {
          "column": 105,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QQ",
        "optional": false,
        "range": [
          2848,
          2850
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 100
          },
          "start": {
            "column": 5,
            "line": 100
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2862,
            2887
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      2864,
                      2870
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 100
                      },
                      "start": {
                        "column": 21,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    2864,
                    2872
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 100
                    },
                    "start": {
                      "column": 21,
                      "line": 100
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2874,
                      2880
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 100
                      },
                      "start": {
                        "column": 31,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    2874,
                    2882
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 100
                    },
                    "start": {
                      "column": 31,
                      "line": 100
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "7",
                    "value": 7,
                    "range": [
                      2884,
                      2885
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 100
                      },
                      "start": {
                        "column": 41,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    2884,
                    2885
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 100
                    },
                    "start": {
                      "column": 41,
                      "line": 100
                    }
                  }
                }
              ],
              "range": [
                2863,
                2886
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 100
                },
                "start": {
                  "column": 20,
                  "line": 100
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 100
            },
            "start": {
              "column": 19,
              "line": 100
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Intersect",
          "optional": false,
          "range": [
            2853,
            2862
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 100
            },
            "start": {
              "column": 10,
              "line": 100
            }
          }
        },
        "range": [
          2853,
          2887
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 100
          },
          "start": {
            "column": 10,
            "line": 100
          }
        }
      },
      "range": [
        2843,
        2888
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unpack1",
        "optional": false,
        "range": [
          2964,
          2971
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 104
          },
          "start": {
            "column": 5,
            "line": 104
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
              2977,
              2978
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 104
              },
              "start": {
                "column": 18,
                "line": 104
              }
            }
          },
          "range": [
            2977,
            2978
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 104
            },
            "start": {
              "column": 18,
              "line": 104
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  2994,
                  2995
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 104
                  },
                  "start": {
                    "column": 35,
                    "line": 104
                  }
                }
              },
              "out": false,
              "range": [
                2994,
                2995
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 104
                },
                "start": {
                  "column": 35,
                  "line": 104
                }
              }
            },
            "range": [
              2988,
              2995
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 104
              },
              "start": {
                "column": 29,
                "line": 104
              }
            }
          },
          "range": [
            2987,
            2998
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 104
            },
            "start": {
              "column": 28,
              "line": 104
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3014,
              3015
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 104
              },
              "start": {
                "column": 55,
                "line": 104
              }
            }
          },
          "range": [
            3014,
            3015
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 104
            },
            "start": {
              "column": 55,
              "line": 104
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3008,
              3011
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    3009,
                    3010
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 104
                    },
                    "start": {
                      "column": 50,
                      "line": 104
                    }
                  }
                },
                "range": [
                  3009,
                  3010
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 104
                  },
                  "start": {
                    "column": 50,
                    "line": 104
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 104
              },
              "start": {
                "column": 49,
                "line": 104
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unpack1",
            "optional": false,
            "range": [
              3001,
              3008
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 104
              },
              "start": {
                "column": 42,
                "line": 104
              }
            }
          },
          "range": [
            3001,
            3011
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 104
            },
            "start": {
              "column": 42,
              "line": 104
            }
          }
        },
        "range": [
          2977,
          3015
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 104
          },
          "start": {
            "column": 18,
            "line": 104
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 104
          },
          "start": {
            "column": 12,
            "line": 104
          }
        },
        "range": [
          2971,
          2974
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
                2972,
                2973
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 104
                },
                "start": {
                  "column": 13,
                  "line": 104
                }
              }
            },
            "out": false,
            "range": [
              2972,
              2973
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 104
              },
              "start": {
                "column": 13,
                "line": 104
              }
            }
          }
        ]
      },
      "range": [
        2959,
        3016
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unpack2",
        "optional": false,
        "range": [
          3022,
          3029
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 105
          },
          "start": {
            "column": 5,
            "line": 105
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
              3035,
              3036
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 105
              },
              "start": {
                "column": 18,
                "line": 105
              }
            }
          },
          "range": [
            3035,
            3036
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 105
            },
            "start": {
              "column": 18,
              "line": 105
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  3052,
                  3053
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 105
                  },
                  "start": {
                    "column": 35,
                    "line": 105
                  }
                }
              },
              "out": false,
              "range": [
                3052,
                3053
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 105
                },
                "start": {
                  "column": 35,
                  "line": 105
                }
              }
            },
            "range": [
              3046,
              3053
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 105
              },
              "start": {
                "column": 29,
                "line": 105
              }
            }
          },
          "range": [
            3045,
            3056
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 105
            },
            "start": {
              "column": 28,
              "line": 105
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3072,
              3073
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 105
              },
              "start": {
                "column": 55,
                "line": 105
              }
            }
          },
          "range": [
            3072,
            3073
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 105
            },
            "start": {
              "column": 55,
              "line": 105
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3066,
              3069
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    3067,
                    3068
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 105
                    },
                    "start": {
                      "column": 50,
                      "line": 105
                    }
                  }
                },
                "range": [
                  3067,
                  3068
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 105
                  },
                  "start": {
                    "column": 50,
                    "line": 105
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 105
              },
              "start": {
                "column": 49,
                "line": 105
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unpack2",
            "optional": false,
            "range": [
              3059,
              3066
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 105
              },
              "start": {
                "column": 42,
                "line": 105
              }
            }
          },
          "range": [
            3059,
            3069
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 105
            },
            "start": {
              "column": 42,
              "line": 105
            }
          }
        },
        "range": [
          3035,
          3073
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 105
          },
          "start": {
            "column": 18,
            "line": 105
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 105
          },
          "start": {
            "column": 12,
            "line": 105
          }
        },
        "range": [
          3029,
          3032
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
                3030,
                3031
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 105
                },
                "start": {
                  "column": 13,
                  "line": 105
                }
              }
            },
            "out": false,
            "range": [
              3030,
              3031
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 105
              },
              "start": {
                "column": 13,
                "line": 105
              }
            }
          }
        ]
      },
      "range": [
        3017,
        3074
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 105
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3141,
                  3142
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 108
                  },
                  "start": {
                    "column": 4,
                    "line": 108
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  3145,
                  3146
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 108
                  },
                  "start": {
                    "column": 8,
                    "line": 108
                  }
                }
              },
              "range": [
                3141,
                3146
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 108
                },
                "start": {
                  "column": 4,
                  "line": 108
                }
              }
            },
            "range": [
              3141,
              3147
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  3152,
                  3153
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 109
                  },
                  "start": {
                    "column": 4,
                    "line": 109
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3156,
                  3157
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 109
                  },
                  "start": {
                    "column": 8,
                    "line": 109
                  }
                }
              },
              "range": [
                3152,
                3157
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 109
                },
                "start": {
                  "column": 4,
                  "line": 109
                }
              }
            },
            "range": [
              3152,
              3158
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    3167,
                    3168
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 110
                    },
                    "start": {
                      "column": 8,
                      "line": 110
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3170,
                    3171
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 110
                    },
                    "start": {
                      "column": 11,
                      "line": 110
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f20",
                "optional": false,
                "range": [
                  3163,
                  3166
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 110
                  },
                  "start": {
                    "column": 4,
                    "line": 110
                  }
                }
              },
              "optional": false,
              "range": [
                3163,
                3172
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              3163,
              3173
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          }
        ],
        "range": [
          3135,
          3175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 59,
            "line": 107
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "range": [
          3085,
          3088
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 107
          },
          "start": {
            "column": 9,
            "line": 107
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
                "line": 107
              },
              "start": {
                "column": 30,
                "line": 107
              }
            },
            "range": [
              3106,
              3118
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3115,
                  3118
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
                        3116,
                        3117
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 107
                        },
                        "start": {
                          "column": 40,
                          "line": 107
                        }
                      }
                    },
                    "range": [
                      3116,
                      3117
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 107
                      },
                      "start": {
                        "column": 40,
                        "line": 107
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 107
                  },
                  "start": {
                    "column": 39,
                    "line": 107
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unpack1",
                "optional": false,
                "range": [
                  3108,
                  3115
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 107
                  },
                  "start": {
                    "column": 32,
                    "line": 107
                  }
                }
              },
              "range": [
                3108,
                3118
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 107
                },
                "start": {
                  "column": 32,
                  "line": 107
                }
              }
            }
          },
          "range": [
            3105,
            3118
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 107
            },
            "start": {
              "column": 29,
              "line": 107
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 107
              },
              "start": {
                "column": 45,
                "line": 107
              }
            },
            "range": [
              3121,
              3133
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3130,
                  3133
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
                        3131,
                        3132
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 107
                        },
                        "start": {
                          "column": 55,
                          "line": 107
                        }
                      }
                    },
                    "range": [
                      3131,
                      3132
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 107
                      },
                      "start": {
                        "column": 55,
                        "line": 107
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 107
                  },
                  "start": {
                    "column": 54,
                    "line": 107
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unpack2",
                "optional": false,
                "range": [
                  3123,
                  3130
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 107
                  },
                  "start": {
                    "column": 47,
                    "line": 107
                  }
                }
              },
              "range": [
                3123,
                3133
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 107
                },
                "start": {
                  "column": 47,
                  "line": 107
                }
              }
            }
          },
          "range": [
            3120,
            3133
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 107
            },
            "start": {
              "column": 44,
              "line": 107
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 107
          },
          "start": {
            "column": 12,
            "line": 107
          }
        },
        "range": [
          3088,
          3104
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
                3089,
                3090
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 107
                },
                "start": {
                  "column": 13,
                  "line": 107
                }
              }
            },
            "out": false,
            "range": [
              3089,
              3090
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 107
              },
              "start": {
                "column": 13,
                "line": 107
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3102,
                  3103
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 107
                  },
                  "start": {
                    "column": 26,
                    "line": 107
                  }
                }
              },
              "range": [
                3102,
                3103
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 107
                },
                "start": {
                  "column": 26,
                  "line": 107
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
                3092,
                3093
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 107
                },
                "start": {
                  "column": 16,
                  "line": 107
                }
              }
            },
            "out": false,
            "range": [
              3092,
              3103
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 107
              },
              "start": {
                "column": 16,
                "line": 107
              }
            }
          }
        ]
      },
      "range": [
        3076,
        3175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Grow1",
        "optional": false,
        "range": [
          3182,
          3187
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 113
          },
          "start": {
            "column": 5,
            "line": 113
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'length'",
              "value": "length",
              "range": [
                3231,
                3239
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 113
                },
                "start": {
                  "column": 54,
                  "line": 113
                }
              }
            },
            "range": [
              3231,
              3239
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 113
              },
              "start": {
                "column": 54,
                "line": 113
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
                3229,
                3230
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 113
                },
                "start": {
                  "column": 52,
                  "line": 113
                }
              }
            },
            "range": [
              3229,
              3230
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 113
              },
              "start": {
                "column": 52,
                "line": 113
              }
            }
          },
          "range": [
            3229,
            3240
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 113
            },
            "start": {
              "column": 52,
              "line": 113
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "range": [
              3249,
              3250
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 113
              },
              "start": {
                "column": 72,
                "line": 113
              }
            }
          },
          "range": [
            3249,
            3250
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 113
            },
            "start": {
              "column": 72,
              "line": 113
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3262,
              3281
            ],
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      3264,
                      3270
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 113
                      },
                      "start": {
                        "column": 87,
                        "line": 113
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
                        "name": "T",
                        "optional": false,
                        "range": [
                          3275,
                          3276
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 113
                          },
                          "start": {
                            "column": 98,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        3275,
                        3276
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 113
                        },
                        "start": {
                          "column": 98,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      3272,
                      3276
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 113
                      },
                      "start": {
                        "column": 95,
                        "line": 113
                      }
                    }
                  }
                ],
                "range": [
                  3263,
                  3277
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 113
                  },
                  "start": {
                    "column": 86,
                    "line": 113
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    3279,
                    3280
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 113
                    },
                    "start": {
                      "column": 102,
                      "line": 113
                    }
                  }
                },
                "range": [
                  3279,
                  3280
                ],
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 113
                  },
                  "start": {
                    "column": 102,
                    "line": 113
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 113
              },
              "start": {
                "column": 85,
                "line": 113
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Grow1",
            "optional": false,
            "range": [
              3257,
              3262
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 113
              },
              "start": {
                "column": 80,
                "line": 113
              }
            }
          },
          "range": [
            3257,
            3281
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 113
            },
            "start": {
              "column": 80,
              "line": 113
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3253,
              3254
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 113
              },
              "start": {
                "column": 76,
                "line": 113
              }
            }
          },
          "range": [
            3253,
            3254
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 113
            },
            "start": {
              "column": 76,
              "line": 113
            }
          }
        },
        "range": [
          3229,
          3281
        ],
        "loc": {
          "end": {
            "column": 104,
            "line": 113
          },
          "start": {
            "column": 52,
            "line": 113
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 113
          },
          "start": {
            "column": 10,
            "line": 113
          }
        },
        "range": [
          3187,
          3226
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  3198,
                  3205
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 113
                  },
                  "start": {
                    "column": 21,
                    "line": 113
                  }
                }
              },
              "range": [
                3198,
                3207
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 113
                },
                "start": {
                  "column": 21,
                  "line": 113
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
                3188,
                3189
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 113
                },
                "start": {
                  "column": 11,
                  "line": 113
                }
              }
            },
            "out": false,
            "range": [
              3188,
              3207
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 113
              },
              "start": {
                "column": 11,
                "line": 113
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                3219,
                3225
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 113
                },
                "start": {
                  "column": 42,
                  "line": 113
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                3209,
                3210
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 113
                },
                "start": {
                  "column": 32,
                  "line": 113
                }
              }
            },
            "out": false,
            "range": [
              3209,
              3225
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 113
              },
              "start": {
                "column": 32,
                "line": 113
              }
            }
          }
        ]
      },
      "range": [
        3177,
        3282
      ],
      "loc": {
        "end": {
          "column": 105,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Grow2",
        "optional": false,
        "range": [
          3288,
          3293
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 114
          },
          "start": {
            "column": 5,
            "line": 114
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'length'",
              "value": "length",
              "range": [
                3337,
                3345
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 114
                },
                "start": {
                  "column": 54,
                  "line": 114
                }
              }
            },
            "range": [
              3337,
              3345
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 114
              },
              "start": {
                "column": 54,
                "line": 114
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
                3335,
                3336
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 114
                },
                "start": {
                  "column": 52,
                  "line": 114
                }
              }
            },
            "range": [
              3335,
              3336
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 114
              },
              "start": {
                "column": 52,
                "line": 114
              }
            }
          },
          "range": [
            3335,
            3346
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 114
            },
            "start": {
              "column": 52,
              "line": 114
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "range": [
              3355,
              3356
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 114
              },
              "start": {
                "column": 72,
                "line": 114
              }
            }
          },
          "range": [
            3355,
            3356
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 114
            },
            "start": {
              "column": 72,
              "line": 114
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3368,
              3387
            ],
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      3370,
                      3376
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 114
                      },
                      "start": {
                        "column": 87,
                        "line": 114
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
                        "name": "T",
                        "optional": false,
                        "range": [
                          3381,
                          3382
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 114
                          },
                          "start": {
                            "column": 98,
                            "line": 114
                          }
                        }
                      },
                      "range": [
                        3381,
                        3382
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 114
                        },
                        "start": {
                          "column": 98,
                          "line": 114
                        }
                      }
                    },
                    "range": [
                      3378,
                      3382
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 114
                      },
                      "start": {
                        "column": 95,
                        "line": 114
                      }
                    }
                  }
                ],
                "range": [
                  3369,
                  3383
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 114
                  },
                  "start": {
                    "column": 86,
                    "line": 114
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    3385,
                    3386
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 114
                    },
                    "start": {
                      "column": 102,
                      "line": 114
                    }
                  }
                },
                "range": [
                  3385,
                  3386
                ],
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 114
                  },
                  "start": {
                    "column": 102,
                    "line": 114
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 114
              },
              "start": {
                "column": 85,
                "line": 114
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Grow2",
            "optional": false,
            "range": [
              3363,
              3368
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 114
              },
              "start": {
                "column": 80,
                "line": 114
              }
            }
          },
          "range": [
            3363,
            3387
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 114
            },
            "start": {
              "column": 80,
              "line": 114
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3359,
              3360
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 114
              },
              "start": {
                "column": 76,
                "line": 114
              }
            }
          },
          "range": [
            3359,
            3360
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 114
            },
            "start": {
              "column": 76,
              "line": 114
            }
          }
        },
        "range": [
          3335,
          3387
        ],
        "loc": {
          "end": {
            "column": 104,
            "line": 114
          },
          "start": {
            "column": 52,
            "line": 114
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 114
          },
          "start": {
            "column": 10,
            "line": 114
          }
        },
        "range": [
          3293,
          3332
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  3304,
                  3311
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 114
                  },
                  "start": {
                    "column": 21,
                    "line": 114
                  }
                }
              },
              "range": [
                3304,
                3313
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 114
                },
                "start": {
                  "column": 21,
                  "line": 114
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
                3294,
                3295
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 114
                },
                "start": {
                  "column": 11,
                  "line": 114
                }
              }
            },
            "out": false,
            "range": [
              3294,
              3313
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 114
              },
              "start": {
                "column": 11,
                "line": 114
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                3325,
                3331
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 114
                },
                "start": {
                  "column": 42,
                  "line": 114
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                3315,
                3316
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 114
                },
                "start": {
                  "column": 32,
                  "line": 114
                }
              }
            },
            "out": false,
            "range": [
              3315,
              3331
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 114
              },
              "start": {
                "column": 32,
                "line": 114
              }
            }
          }
        ]
      },
      "range": [
        3283,
        3388
      ],
      "loc": {
        "end": {
          "column": 105,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 114
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    3465,
                    3466
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 117
                    },
                    "start": {
                      "column": 8,
                      "line": 117
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3468,
                    3469
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 117
                    },
                    "start": {
                      "column": 11,
                      "line": 117
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f21",
                "optional": false,
                "range": [
                  3461,
                  3464
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 117
                  },
                  "start": {
                    "column": 4,
                    "line": 117
                  }
                }
              },
              "optional": false,
              "range": [
                3461,
                3470
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 117
                },
                "start": {
                  "column": 4,
                  "line": 117
                }
              }
            },
            "range": [
              3461,
              3471
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
              }
            }
          }
        ],
        "range": [
          3455,
          3483
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 118
          },
          "start": {
            "column": 65,
            "line": 116
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "range": [
          3399,
          3402
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 116
          },
          "start": {
            "column": 9,
            "line": 116
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
                "column": 46,
                "line": 116
              },
              "start": {
                "column": 32,
                "line": 116
              }
            },
            "range": [
              3422,
              3436
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3429,
                  3436
                ],
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      3430,
                      3432
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 116
                      },
                      "start": {
                        "column": 40,
                        "line": 116
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
                        3434,
                        3435
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 116
                        },
                        "start": {
                          "column": 44,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      3434,
                      3435
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 116
                      },
                      "start": {
                        "column": 44,
                        "line": 116
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 116
                  },
                  "start": {
                    "column": 39,
                    "line": 116
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grow1",
                "optional": false,
                "range": [
                  3424,
                  3429
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 116
                  },
                  "start": {
                    "column": 34,
                    "line": 116
                  }
                }
              },
              "range": [
                3424,
                3436
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 116
                },
                "start": {
                  "column": 34,
                  "line": 116
                }
              }
            }
          },
          "range": [
            3421,
            3436
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 116
            },
            "start": {
              "column": 31,
              "line": 116
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 116
              },
              "start": {
                "column": 49,
                "line": 116
              }
            },
            "range": [
              3439,
              3453
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3446,
                  3453
                ],
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "range": [
                      3447,
                      3449
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 116
                      },
                      "start": {
                        "column": 57,
                        "line": 116
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
                        3451,
                        3452
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 116
                        },
                        "start": {
                          "column": 61,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      3451,
                      3452
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 116
                      },
                      "start": {
                        "column": 61,
                        "line": 116
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 116
                  },
                  "start": {
                    "column": 56,
                    "line": 116
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grow2",
                "optional": false,
                "range": [
                  3441,
                  3446
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 116
                  },
                  "start": {
                    "column": 51,
                    "line": 116
                  }
                }
              },
              "range": [
                3441,
                3453
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 116
                },
                "start": {
                  "column": 51,
                  "line": 116
                }
              }
            }
          },
          "range": [
            3438,
            3453
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 116
            },
            "start": {
              "column": 48,
              "line": 116
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 116
          },
          "start": {
            "column": 12,
            "line": 116
          }
        },
        "range": [
          3402,
          3420
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                3413,
                3419
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 116
                },
                "start": {
                  "column": 23,
                  "line": 116
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
                3403,
                3404
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 116
                },
                "start": {
                  "column": 13,
                  "line": 116
                }
              }
            },
            "out": false,
            "range": [
              3403,
              3419
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 116
              },
              "start": {
                "column": 13,
                "line": 116
              }
            }
          }
        ]
      },
      "range": [
        3390,
        3483
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 116
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParseSuccess",
        "optional": false,
        "range": [
          3513,
          3525
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 122
          },
          "start": {
            "column": 5,
            "line": 122
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
              "name": "rest",
              "optional": false,
              "range": [
                3548,
                3552
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 122
                },
                "start": {
                  "column": 40,
                  "line": 122
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
                  "column": 47,
                  "line": 122
                },
                "start": {
                  "column": 44,
                  "line": 122
                }
              },
              "range": [
                3552,
                3555
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    3554,
                    3555
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 122
                    },
                    "start": {
                      "column": 46,
                      "line": 122
                    }
                  }
                },
                "range": [
                  3554,
                  3555
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 122
                  },
                  "start": {
                    "column": 46,
                    "line": 122
                  }
                }
              }
            },
            "range": [
              3548,
              3555
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 122
              },
              "start": {
                "column": 40,
                "line": 122
              }
            }
          }
        ],
        "range": [
          3546,
          3557
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 122
          },
          "start": {
            "column": 38,
            "line": 122
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 122
          },
          "start": {
            "column": 17,
            "line": 122
          }
        },
        "range": [
          3525,
          3543
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3536,
                3542
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 122
                },
                "start": {
                  "column": 28,
                  "line": 122
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                3526,
                3527
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 122
                },
                "start": {
                  "column": 18,
                  "line": 122
                }
              }
            },
            "out": false,
            "range": [
              3526,
              3542
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 122
              },
              "start": {
                "column": 18,
                "line": 122
              }
            }
          }
        ]
      },
      "range": [
        3508,
        3558
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParseManyWhitespace",
        "optional": false,
        "range": [
          3565,
          3584
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 124
          },
          "start": {
            "column": 5,
            "line": 124
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
            "name": "S",
            "optional": false,
            "range": [
              3609,
              3610
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 125
              },
              "start": {
                "column": 4,
                "line": 125
              }
            }
          },
          "range": [
            3609,
            3610
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 125
            },
            "start": {
              "column": 4,
              "line": 125
            }
          }
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": " ",
                "raw": " "
              },
              "range": [
                3619,
                3623
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 125
                },
                "start": {
                  "column": 14,
                  "line": 125
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                3631,
                3633
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 125
                },
                "start": {
                  "column": 26,
                  "line": 125
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R0",
                  "optional": false,
                  "range": [
                    3629,
                    3631
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 125
                    },
                    "start": {
                      "column": 24,
                      "line": 125
                    }
                  }
                },
                "out": false,
                "range": [
                  3629,
                  3631
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 125
                  },
                  "start": {
                    "column": 24,
                    "line": 125
                  }
                }
              },
              "range": [
                3623,
                3631
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 125
                },
                "start": {
                  "column": 18,
                  "line": 125
                }
              }
            }
          ],
          "range": [
            3619,
            3633
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 125
            },
            "start": {
              "column": 14,
              "line": 125
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3747,
              3750
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    3748,
                    3749
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 127
                    },
                    "start": {
                      "column": 21,
                      "line": 127
                    }
                  }
                },
                "range": [
                  3748,
                  3749
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 127
                  },
                  "start": {
                    "column": 21,
                    "line": 127
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 127
              },
              "start": {
                "column": 20,
                "line": 127
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false,
            "range": [
              3735,
              3747
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 127
              },
              "start": {
                "column": 8,
                "line": 127
              }
            }
          },
          "range": [
            3735,
            3750
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 127
            },
            "start": {
              "column": 8,
              "line": 127
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3663,
                3667
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R0",
                    "optional": false,
                    "range": [
                      3664,
                      3666
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 126
                      },
                      "start": {
                        "column": 28,
                        "line": 126
                      }
                    }
                  },
                  "range": [
                    3664,
                    3666
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 126
                    },
                    "start": {
                      "column": 28,
                      "line": 126
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 126
                },
                "start": {
                  "column": 27,
                  "line": 126
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParseManyWhitespace",
              "optional": false,
              "range": [
                3644,
                3663
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 126
                },
                "start": {
                  "column": 8,
                  "line": 126
                }
              }
            },
            "range": [
              3644,
              3667
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 126
              },
              "start": {
                "column": 8,
                "line": 126
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3688,
                3698
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
                      "name": "R1",
                      "optional": false,
                      "range": [
                        3695,
                        3697
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 126
                        },
                        "start": {
                          "column": 59,
                          "line": 126
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3695,
                      3697
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 126
                      },
                      "start": {
                        "column": 59,
                        "line": 126
                      }
                    }
                  },
                  "range": [
                    3689,
                    3697
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 126
                    },
                    "start": {
                      "column": 53,
                      "line": 126
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 126
                },
                "start": {
                  "column": 52,
                  "line": 126
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParseSuccess",
              "optional": false,
              "range": [
                3676,
                3688
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 126
                },
                "start": {
                  "column": 40,
                  "line": 126
                }
              }
            },
            "range": [
              3676,
              3698
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 126
              },
              "start": {
                "column": 40,
                "line": 126
              }
            }
          },
          "falseType": {
            "type": "TSNullKeyword",
            "range": [
              3720,
              3724
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 126
              },
              "start": {
                "column": 84,
                "line": 126
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3713,
                3717
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R1",
                    "optional": false,
                    "range": [
                      3714,
                      3716
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 126
                      },
                      "start": {
                        "column": 78,
                        "line": 126
                      }
                    }
                  },
                  "range": [
                    3714,
                    3716
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 126
                    },
                    "start": {
                      "column": 78,
                      "line": 126
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 126
                },
                "start": {
                  "column": 77,
                  "line": 126
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParseSuccess",
              "optional": false,
              "range": [
                3701,
                3713
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 126
                },
                "start": {
                  "column": 65,
                  "line": 126
                }
              }
            },
            "range": [
              3701,
              3717
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 126
              },
              "start": {
                "column": 65,
                "line": 126
              }
            }
          },
          "range": [
            3644,
            3724
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 126
            },
            "start": {
              "column": 8,
              "line": 126
            }
          }
        },
        "range": [
          3609,
          3750
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 127
          },
          "start": {
            "column": 4,
            "line": 125
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 124
          },
          "start": {
            "column": 24,
            "line": 124
          }
        },
        "range": [
          3584,
          3602
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3595,
                3601
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 124
                },
                "start": {
                  "column": 35,
                  "line": 124
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
                3585,
                3586
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 124
                },
                "start": {
                  "column": 25,
                  "line": 124
                }
              }
            },
            "out": false,
            "range": [
              3585,
              3601
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 124
              },
              "start": {
                "column": 25,
                "line": 124
              }
            }
          }
        ]
      },
      "range": [
        3560,
        3751
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 127
        },
        "start": {
          "column": 0,
          "line": 124
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TP1",
        "optional": false,
        "range": [
          3758,
          3761
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 129
          },
          "start": {
            "column": 5,
            "line": 129
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3783,
            3791
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\" foo\"",
                "value": " foo",
                "range": [
                  3784,
                  3790
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 129
                  },
                  "start": {
                    "column": 31,
                    "line": 129
                  }
                }
              },
              "range": [
                3784,
                3790
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 129
                },
                "start": {
                  "column": 31,
                  "line": 129
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 129
            },
            "start": {
              "column": 30,
              "line": 129
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ParseManyWhitespace",
          "optional": false,
          "range": [
            3764,
            3783
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 129
            },
            "start": {
              "column": 11,
              "line": 129
            }
          }
        },
        "range": [
          3764,
          3791
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 129
          },
          "start": {
            "column": 11,
            "line": 129
          }
        }
      },
      "range": [
        3753,
        3792
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 129
        },
        "start": {
          "column": 0,
          "line": 129
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParseManyWhitespace2",
        "optional": false,
        "range": [
          3799,
          3819
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 131
          },
          "start": {
            "column": 5,
            "line": 131
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
            "name": "S",
            "optional": false,
            "range": [
              3844,
              3845
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 132
              }
            }
          },
          "range": [
            3844,
            3845
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 132
            },
            "start": {
              "column": 4,
              "line": 132
            }
          }
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": " ",
                "raw": " "
              },
              "range": [
                3854,
                3858
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 132
                },
                "start": {
                  "column": 14,
                  "line": 132
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                3866,
                3868
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 132
                },
                "start": {
                  "column": 26,
                  "line": 132
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R0",
                  "optional": false,
                  "range": [
                    3864,
                    3866
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 132
                    },
                    "start": {
                      "column": 24,
                      "line": 132
                    }
                  }
                },
                "out": false,
                "range": [
                  3864,
                  3866
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 132
                  },
                  "start": {
                    "column": 24,
                    "line": 132
                  }
                }
              },
              "range": [
                3858,
                3866
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 132
                },
                "start": {
                  "column": 18,
                  "line": 132
                }
              }
            }
          ],
          "range": [
            3854,
            3868
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 132
            },
            "start": {
              "column": 14,
              "line": 132
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3934,
              3937
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    3935,
                    3936
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 134
                    },
                    "start": {
                      "column": 21,
                      "line": 134
                    }
                  }
                },
                "range": [
                  3935,
                  3936
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 134
                  },
                  "start": {
                    "column": 21,
                    "line": 134
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 134
              },
              "start": {
                "column": 20,
                "line": 134
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false,
            "range": [
              3922,
              3934
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 134
              },
              "start": {
                "column": 8,
                "line": 134
              }
            }
          },
          "range": [
            3922,
            3937
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 134
            },
            "start": {
              "column": 8,
              "line": 134
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3885,
              3911
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3906,
                    3910
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R0",
                        "optional": false,
                        "range": [
                          3907,
                          3909
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 133
                          },
                          "start": {
                            "column": 36,
                            "line": 133
                          }
                        }
                      },
                      "range": [
                        3907,
                        3909
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 133
                        },
                        "start": {
                          "column": 36,
                          "line": 133
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 133
                    },
                    "start": {
                      "column": 35,
                      "line": 133
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParseManyWhitespace2",
                  "optional": false,
                  "range": [
                    3886,
                    3906
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 133
                    },
                    "start": {
                      "column": 15,
                      "line": 133
                    }
                  }
                },
                "range": [
                  3886,
                  3910
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 133
                  },
                  "start": {
                    "column": 15,
                    "line": 133
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 133
              },
              "start": {
                "column": 14,
                "line": 133
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Helper",
            "optional": false,
            "range": [
              3879,
              3885
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 133
              },
              "start": {
                "column": 8,
                "line": 133
              }
            }
          },
          "range": [
            3879,
            3911
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 133
            },
            "start": {
              "column": 8,
              "line": 133
            }
          }
        },
        "range": [
          3844,
          3937
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 134
          },
          "start": {
            "column": 4,
            "line": 132
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 131
          },
          "start": {
            "column": 25,
            "line": 131
          }
        },
        "range": [
          3819,
          3837
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3830,
                3836
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 131
                },
                "start": {
                  "column": 36,
                  "line": 131
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
                3820,
                3821
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 131
                },
                "start": {
                  "column": 26,
                  "line": 131
                }
              }
            },
            "out": false,
            "range": [
              3820,
              3836
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 131
              },
              "start": {
                "column": 26,
                "line": 131
              }
            }
          }
        ]
      },
      "range": [
        3794,
        3938
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 134
        },
        "start": {
          "column": 0,
          "line": 131
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Helper",
        "optional": false,
        "range": [
          3945,
          3951
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 136
          },
          "start": {
            "column": 5,
            "line": 136
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
              3957,
              3958
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 136
              },
              "start": {
                "column": 17,
                "line": 136
              }
            }
          },
          "range": [
            3957,
            3958
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 136
            },
            "start": {
              "column": 17,
              "line": 136
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3979,
              3988
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
                    "name": "R",
                    "optional": false,
                    "range": [
                      3986,
                      3987
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 136
                      },
                      "start": {
                        "column": 46,
                        "line": 136
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3986,
                    3987
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 136
                    },
                    "start": {
                      "column": 46,
                      "line": 136
                    }
                  }
                },
                "range": [
                  3980,
                  3987
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 136
                  },
                  "start": {
                    "column": 40,
                    "line": 136
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 136
              },
              "start": {
                "column": 39,
                "line": 136
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false,
            "range": [
              3967,
              3979
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 136
              },
              "start": {
                "column": 27,
                "line": 136
              }
            }
          },
          "range": [
            3967,
            3988
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 136
            },
            "start": {
              "column": 27,
              "line": 136
            }
          }
        },
        "falseType": {
          "type": "TSNullKeyword",
          "range": [
            4009,
            4013
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 136
            },
            "start": {
              "column": 69,
              "line": 136
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4003,
              4006
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    4004,
                    4005
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 136
                    },
                    "start": {
                      "column": 64,
                      "line": 136
                    }
                  }
                },
                "range": [
                  4004,
                  4005
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 136
                  },
                  "start": {
                    "column": 64,
                    "line": 136
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 136
              },
              "start": {
                "column": 63,
                "line": 136
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false,
            "range": [
              3991,
              4003
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 136
              },
              "start": {
                "column": 51,
                "line": 136
              }
            }
          },
          "range": [
            3991,
            4006
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 136
            },
            "start": {
              "column": 51,
              "line": 136
            }
          }
        },
        "range": [
          3957,
          4013
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 136
          },
          "start": {
            "column": 17,
            "line": 136
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 136
          },
          "start": {
            "column": 11,
            "line": 136
          }
        },
        "range": [
          3951,
          3954
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
                3952,
                3953
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 136
                },
                "start": {
                  "column": 12,
                  "line": 136
                }
              }
            },
            "out": false,
            "range": [
              3952,
              3953
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 136
              },
              "start": {
                "column": 12,
                "line": 136
              }
            }
          }
        ]
      },
      "range": [
        3940,
        4013
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 136
        },
        "start": {
          "column": 0,
          "line": 136
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TP2",
        "optional": false,
        "range": [
          4020,
          4023
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 138
          },
          "start": {
            "column": 5,
            "line": 138
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4046,
            4054
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\" foo\"",
                "value": " foo",
                "range": [
                  4047,
                  4053
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 138
                  },
                  "start": {
                    "column": 32,
                    "line": 138
                  }
                }
              },
              "range": [
                4047,
                4053
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 138
                },
                "start": {
                  "column": 32,
                  "line": 138
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 138
            },
            "start": {
              "column": 31,
              "line": 138
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ParseManyWhitespace2",
          "optional": false,
          "range": [
            4026,
            4046
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 138
            },
            "start": {
              "column": 11,
              "line": 138
            }
          }
        },
        "range": [
          4026,
          4054
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 138
          },
          "start": {
            "column": 11,
            "line": 138
          }
        }
      },
      "range": [
        4015,
        4055
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 138
        },
        "start": {
          "column": 0,
          "line": 138
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NTuple",
        "optional": false,
        "range": [
          4084,
          4090
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 142
          },
          "start": {
            "column": 5,
            "line": 142
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'length'",
              "value": "length",
              "range": [
                4147,
                4155
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 143
                },
                "start": {
                  "column": 8,
                  "line": 143
                }
              }
            },
            "range": [
              4147,
              4155
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 143
              },
              "start": {
                "column": 8,
                "line": 143
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tup",
              "optional": false,
              "range": [
                4143,
                4146
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 143
                },
                "start": {
                  "column": 4,
                  "line": 143
                }
              }
            },
            "range": [
              4143,
              4146
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 143
              },
              "start": {
                "column": 4,
                "line": 143
              }
            }
          },
          "range": [
            4143,
            4156
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 143
            },
            "start": {
              "column": 4,
              "line": 143
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "range": [
              4165,
              4166
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 143
              },
              "start": {
                "column": 26,
                "line": 143
              }
            }
          },
          "range": [
            4165,
            4166
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 143
            },
            "start": {
              "column": 26,
              "line": 143
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4181,
              4203
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    4182,
                    4183
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 143
                    },
                    "start": {
                      "column": 43,
                      "line": 143
                    }
                  }
                },
                "range": [
                  4182,
                  4183
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 143
                  },
                  "start": {
                    "column": 43,
                    "line": 143
                  }
                }
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tup",
                        "optional": false,
                        "range": [
                          4189,
                          4192
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 143
                          },
                          "start": {
                            "column": 50,
                            "line": 143
                          }
                        }
                      },
                      "range": [
                        4189,
                        4192
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 143
                        },
                        "start": {
                          "column": 50,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      4186,
                      4192
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 143
                      },
                      "start": {
                        "column": 47,
                        "line": 143
                      }
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      4194,
                      4201
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 143
                      },
                      "start": {
                        "column": 55,
                        "line": 143
                      }
                    }
                  }
                ],
                "range": [
                  4185,
                  4202
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 143
                  },
                  "start": {
                    "column": 46,
                    "line": 143
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 143
              },
              "start": {
                "column": 42,
                "line": 143
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NTuple",
            "optional": false,
            "range": [
              4175,
              4181
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 143
              },
              "start": {
                "column": 36,
                "line": 143
              }
            }
          },
          "range": [
            4175,
            4203
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 143
            },
            "start": {
              "column": 36,
              "line": 143
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tup",
            "optional": false,
            "range": [
              4169,
              4172
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 143
              },
              "start": {
                "column": 30,
                "line": 143
              }
            }
          },
          "range": [
            4169,
            4172
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 143
            },
            "start": {
              "column": 30,
              "line": 143
            }
          }
        },
        "range": [
          4143,
          4203
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 143
          },
          "start": {
            "column": 4,
            "line": 143
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 142
          },
          "start": {
            "column": 11,
            "line": 142
          }
        },
        "range": [
          4090,
          4136
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                4101,
                4107
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 142
                },
                "start": {
                  "column": 22,
                  "line": 142
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                4091,
                4092
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 142
                },
                "start": {
                  "column": 12,
                  "line": 142
                }
              }
            },
            "out": false,
            "range": [
              4091,
              4107
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 142
              },
              "start": {
                "column": 12,
                "line": 142
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  4121,
                  4128
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 142
                  },
                  "start": {
                    "column": 42,
                    "line": 142
                  }
                }
              },
              "range": [
                4121,
                4130
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 142
                },
                "start": {
                  "column": 42,
                  "line": 142
                }
              }
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [],
              "range": [
                4133,
                4135
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 142
                },
                "start": {
                  "column": 54,
                  "line": 142
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tup",
              "optional": false,
              "range": [
                4109,
                4112
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 142
                },
                "start": {
                  "column": 30,
                  "line": 142
                }
              }
            },
            "out": false,
            "range": [
              4109,
              4135
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 142
              },
              "start": {
                "column": 30,
                "line": 142
              }
            }
          }
        ]
      },
      "range": [
        4079,
        4204
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 142
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Add",
        "optional": false,
        "range": [
          4211,
          4214
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 145
          },
          "start": {
            "column": 5,
            "line": 145
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "'length'",
            "value": "length",
            "range": [
              4286,
              4294
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 146
              },
              "start": {
                "column": 33,
                "line": 146
              }
            }
          },
          "range": [
            4286,
            4294
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 146
            },
            "start": {
              "column": 33,
              "line": 146
            }
          }
        },
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4267,
                    4270
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          4268,
                          4269
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 146
                          },
                          "start": {
                            "column": 15,
                            "line": 146
                          }
                        }
                      },
                      "range": [
                        4268,
                        4269
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 146
                        },
                        "start": {
                          "column": 15,
                          "line": 146
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 146
                    },
                    "start": {
                      "column": 14,
                      "line": 146
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NTuple",
                  "optional": false,
                  "range": [
                    4261,
                    4267
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 146
                    },
                    "start": {
                      "column": 8,
                      "line": 146
                    }
                  }
                },
                "range": [
                  4261,
                  4270
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 146
                  },
                  "start": {
                    "column": 8,
                    "line": 146
                  }
                }
              },
              "range": [
                4258,
                4270
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 146
                },
                "start": {
                  "column": 5,
                  "line": 146
                }
              }
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4281,
                    4284
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          4282,
                          4283
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 146
                          },
                          "start": {
                            "column": 29,
                            "line": 146
                          }
                        }
                      },
                      "range": [
                        4282,
                        4283
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 146
                        },
                        "start": {
                          "column": 29,
                          "line": 146
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 146
                    },
                    "start": {
                      "column": 28,
                      "line": 146
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NTuple",
                  "optional": false,
                  "range": [
                    4275,
                    4281
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 146
                    },
                    "start": {
                      "column": 22,
                      "line": 146
                    }
                  }
                },
                "range": [
                  4275,
                  4284
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 146
                  },
                  "start": {
                    "column": 22,
                    "line": 146
                  }
                }
              },
              "range": [
                4272,
                4284
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 146
                },
                "start": {
                  "column": 19,
                  "line": 146
                }
              }
            }
          ],
          "range": [
            4257,
            4285
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 146
            },
            "start": {
              "column": 4,
              "line": 146
            }
          }
        },
        "range": [
          4257,
          4295
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 146
          },
          "start": {
            "column": 4,
            "line": 146
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 145
          },
          "start": {
            "column": 8,
            "line": 145
          }
        },
        "range": [
          4214,
          4250
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                4225,
                4231
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 145
                },
                "start": {
                  "column": 19,
                  "line": 145
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                4215,
                4216
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 145
                },
                "start": {
                  "column": 9,
                  "line": 145
                }
              }
            },
            "out": false,
            "range": [
              4215,
              4231
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 145
              },
              "start": {
                "column": 9,
                "line": 145
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                4243,
                4249
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 145
                },
                "start": {
                  "column": 37,
                  "line": 145
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                4233,
                4234
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 145
                },
                "start": {
                  "column": 27,
                  "line": 145
                }
              }
            },
            "out": false,
            "range": [
              4233,
              4249
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 145
              },
              "start": {
                "column": 27,
                "line": 145
              }
            }
          }
        ]
      },
      "range": [
        4206,
        4296
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 145
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
            "name": "five",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 148
                },
                "start": {
                  "column": 8,
                  "line": 148
                }
              },
              "range": [
                4306,
                4317
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4311,
                    4317
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          4312,
                          4313
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 148
                          },
                          "start": {
                            "column": 14,
                            "line": 148
                          }
                        }
                      },
                      "range": [
                        4312,
                        4313
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 148
                        },
                        "start": {
                          "column": 14,
                          "line": 148
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
                          4315,
                          4316
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 148
                          },
                          "start": {
                            "column": 17,
                            "line": 148
                          }
                        }
                      },
                      "range": [
                        4315,
                        4316
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 148
                        },
                        "start": {
                          "column": 17,
                          "line": 148
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 148
                    },
                    "start": {
                      "column": 13,
                      "line": 148
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Add",
                  "optional": false,
                  "range": [
                    4308,
                    4311
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 148
                    },
                    "start": {
                      "column": 10,
                      "line": 148
                    }
                  }
                },
                "range": [
                  4308,
                  4317
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 148
                  },
                  "start": {
                    "column": 10,
                    "line": 148
                  }
                }
              }
            },
            "range": [
              4302,
              4317
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 148
              },
              "start": {
                "column": 4,
                "line": 148
              }
            }
          },
          "init": null,
          "range": [
            4302,
            4317
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 148
            },
            "start": {
              "column": 4,
              "line": 148
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        4298,
        4318
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 148
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_PrependNextNum",
        "optional": false,
        "range": [
          4347,
          4362
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 152
          },
          "start": {
            "column": 5,
            "line": 152
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'length'",
              "value": "length",
              "range": [
                4393,
                4401
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 152
                },
                "start": {
                  "column": 51,
                  "line": 152
                }
              }
            },
            "range": [
              4393,
              4401
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 152
              },
              "start": {
                "column": 51,
                "line": 152
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
                4391,
                4392
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 152
                },
                "start": {
                  "column": 49,
                  "line": 152
                }
              }
            },
            "range": [
              4391,
              4392
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 152
              },
              "start": {
                "column": 49,
                "line": 152
              }
            }
          },
          "range": [
            4391,
            4402
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 152
            },
            "start": {
              "column": 49,
              "line": 152
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                4417,
                4418
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 152
                },
                "start": {
                  "column": 75,
                  "line": 152
                }
              }
            },
            "out": false,
            "range": [
              4417,
              4418
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 152
              },
              "start": {
                "column": 75,
                "line": 152
              }
            }
          },
          "range": [
            4411,
            4418
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 152
            },
            "start": {
              "column": 69,
              "line": 152
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            4491,
            4496
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 156
            },
            "start": {
              "column": 6,
              "line": 156
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
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
                    4426,
                    4427
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 153
                    },
                    "start": {
                      "column": 7,
                      "line": 153
                    }
                  }
                },
                "range": [
                  4426,
                  4427
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 153
                  },
                  "start": {
                    "column": 7,
                    "line": 153
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
                    "name": "A",
                    "optional": false,
                    "range": [
                      4432,
                      4433
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 153
                      },
                      "start": {
                        "column": 13,
                        "line": 153
                      }
                    }
                  },
                  "range": [
                    4432,
                    4433
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 153
                    },
                    "start": {
                      "column": 13,
                      "line": 153
                    }
                  }
                },
                "range": [
                  4429,
                  4433
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 153
                  },
                  "start": {
                    "column": 10,
                    "line": 153
                  }
                }
              }
            ],
            "range": [
              4425,
              4434
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 153
              },
              "start": {
                "column": 6,
                "line": 153
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
                      "name": "X",
                      "optional": false,
                      "range": [
                        4453,
                        4454
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 153
                        },
                        "start": {
                          "column": 34,
                          "line": 153
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      4453,
                      4454
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 153
                      },
                      "start": {
                        "column": 34,
                        "line": 153
                      }
                    }
                  },
                  "range": [
                    4447,
                    4454
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 153
                    },
                    "start": {
                      "column": 28,
                      "line": 153
                    }
                  }
                },
                "range": [
                  4444,
                  4454
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 153
                  },
                  "start": {
                    "column": 25,
                    "line": 153
                  }
                }
              }
            ],
            "range": [
              4443,
              4455
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 153
              },
              "start": {
                "column": 24,
                "line": 153
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              4479,
              4484
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 155
              },
              "start": {
                "column": 10,
                "line": 155
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
                4467,
                4468
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 154
                },
                "start": {
                  "column": 10,
                  "line": 154
                }
              }
            },
            "range": [
              4467,
              4468
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 154
              },
              "start": {
                "column": 10,
                "line": 154
              }
            }
          },
          "range": [
            4425,
            4484
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 155
            },
            "start": {
              "column": 6,
              "line": 153
            }
          }
        },
        "range": [
          4391,
          4496
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 156
          },
          "start": {
            "column": 49,
            "line": 152
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 152
          },
          "start": {
            "column": 20,
            "line": 152
          }
        },
        "range": [
          4362,
          4388
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
                  4378,
                  4387
                ],
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      4379,
                      4386
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 152
                      },
                      "start": {
                        "column": 37,
                        "line": 152
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 152
                  },
                  "start": {
                    "column": 36,
                    "line": 152
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  4373,
                  4378
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 152
                  },
                  "start": {
                    "column": 31,
                    "line": 152
                  }
                }
              },
              "range": [
                4373,
                4387
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 152
                },
                "start": {
                  "column": 31,
                  "line": 152
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                4363,
                4364
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 152
                },
                "start": {
                  "column": 21,
                  "line": 152
                }
              }
            },
            "out": false,
            "range": [
              4363,
              4387
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 152
              },
              "start": {
                "column": 21,
                "line": 152
              }
            }
          }
        ]
      },
      "range": [
        4342,
        4497
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 156
        },
        "start": {
          "column": 0,
          "line": 152
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Enumerate",
        "optional": false,
        "range": [
          4504,
          4514
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 158
          },
          "start": {
            "column": 5,
            "line": 158
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
            "name": "N",
            "optional": false,
            "range": [
              4561,
              4562
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 158
              },
              "start": {
                "column": 62,
                "line": 158
              }
            }
          },
          "range": [
            4561,
            4562
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 158
            },
            "start": {
              "column": 62,
              "line": 158
            }
          }
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'length'",
              "value": "length",
              "range": [
                4573,
                4581
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 158
                },
                "start": {
                  "column": 74,
                  "line": 158
                }
              }
            },
            "range": [
              4573,
              4581
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 158
              },
              "start": {
                "column": 74,
                "line": 158
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
                4571,
                4572
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 158
                },
                "start": {
                  "column": 72,
                  "line": 158
                }
              }
            },
            "range": [
              4571,
              4572
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 158
              },
              "start": {
                "column": 72,
                "line": 158
              }
            }
          },
          "range": [
            4571,
            4582
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 158
            },
            "start": {
              "column": 72,
              "line": 158
            }
          }
        },
        "falseType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4607,
                  4630
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4623,
                        4626
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              4624,
                              4625
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 160
                              },
                              "start": {
                                "column": 33,
                                "line": 160
                              }
                            }
                          },
                          "range": [
                            4624,
                            4625
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 160
                            },
                            "start": {
                              "column": 33,
                              "line": 160
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 160
                        },
                        "start": {
                          "column": 32,
                          "line": 160
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_PrependNextNum",
                      "optional": false,
                      "range": [
                        4608,
                        4623
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 160
                        },
                        "start": {
                          "column": 17,
                          "line": 160
                        }
                      }
                    },
                    "range": [
                      4608,
                      4626
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 160
                      },
                      "start": {
                        "column": 17,
                        "line": 160
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "range": [
                        4628,
                        4629
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 160
                        },
                        "start": {
                          "column": 37,
                          "line": 160
                        }
                      }
                    },
                    "range": [
                      4628,
                      4629
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 160
                      },
                      "start": {
                        "column": 37,
                        "line": 160
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 160
                  },
                  "start": {
                    "column": 16,
                    "line": 160
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Enumerate",
                "optional": false,
                "range": [
                  4597,
                  4607
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 160
                  },
                  "start": {
                    "column": 6,
                    "line": 160
                  }
                }
              },
              "range": [
                4597,
                4630
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 160
                },
                "start": {
                  "column": 6,
                  "line": 160
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                4633,
                4639
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 160
                },
                "start": {
                  "column": 42,
                  "line": 160
                }
              }
            }
          ],
          "range": [
            4597,
            4639
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 160
            },
            "start": {
              "column": 6,
              "line": 160
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              4589,
              4590
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 159
              },
              "start": {
                "column": 6,
                "line": 159
              }
            }
          },
          "range": [
            4589,
            4590
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 159
            },
            "start": {
              "column": 6,
              "line": 159
            }
          }
        },
        "range": [
          4561,
          4639
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 160
          },
          "start": {
            "column": 62,
            "line": 158
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 158
          },
          "start": {
            "column": 15,
            "line": 158
          }
        },
        "range": [
          4514,
          4558
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
                  4530,
                  4539
                ],
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      4531,
                      4538
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 158
                      },
                      "start": {
                        "column": 32,
                        "line": 158
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 158
                  },
                  "start": {
                    "column": 31,
                    "line": 158
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  4525,
                  4530
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 158
                  },
                  "start": {
                    "column": 26,
                    "line": 158
                  }
                }
              },
              "range": [
                4525,
                4539
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 158
                },
                "start": {
                  "column": 26,
                  "line": 158
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                4515,
                4516
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 158
                },
                "start": {
                  "column": 16,
                  "line": 158
                }
              }
            },
            "out": false,
            "range": [
              4515,
              4539
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 158
              },
              "start": {
                "column": 16,
                "line": 158
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                4551,
                4557
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 158
                },
                "start": {
                  "column": 52,
                  "line": 158
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                4541,
                4542
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 158
                },
                "start": {
                  "column": 42,
                  "line": 158
                }
              }
            },
            "out": false,
            "range": [
              4541,
              4557
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 158
              },
              "start": {
                "column": 42,
                "line": 158
              }
            }
          }
        ]
      },
      "range": [
        4499,
        4640
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 160
        },
        "start": {
          "column": 0,
          "line": 158
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enumerate",
        "optional": false,
        "range": [
          4647,
          4656
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 162
          },
          "start": {
            "column": 5,
            "line": 162
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "range": [
            4677,
            4683
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 162
            },
            "start": {
              "column": 35,
              "line": 162
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "range": [
              4692,
              4693
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 162
              },
              "start": {
                "column": 50,
                "line": 162
              }
            }
          },
          "range": [
            4692,
            4693
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 162
            },
            "start": {
              "column": 50,
              "line": 162
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                4723,
                4730
              ],
              "params": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "range": [
                    4724,
                    4726
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 164
                    },
                    "start": {
                      "column": 17,
                      "line": 164
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "range": [
                      4728,
                      4729
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 164
                      },
                      "start": {
                        "column": 21,
                        "line": 164
                      }
                    }
                  },
                  "range": [
                    4728,
                    4729
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 164
                    },
                    "start": {
                      "column": 21,
                      "line": 164
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 164
                },
                "start": {
                  "column": 16,
                  "line": 164
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_Enumerate",
              "optional": false,
              "range": [
                4713,
                4723
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 164
                },
                "start": {
                  "column": 6,
                  "line": 164
                }
              }
            },
            "range": [
              4713,
              4730
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 164
              },
              "start": {
                "column": 6,
                "line": 164
              }
            }
          },
          "extendsType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    4746,
                    4747
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 164
                    },
                    "start": {
                      "column": 39,
                      "line": 164
                    }
                  }
                },
                "out": false,
                "range": [
                  4746,
                  4747
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 164
                  },
                  "start": {
                    "column": 39,
                    "line": 164
                  }
                }
              },
              "range": [
                4740,
                4747
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 164
                },
                "start": {
                  "column": 33,
                  "line": 164
                }
              }
            },
            "range": [
              4739,
              4750
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 164
              },
              "start": {
                "column": 32,
                "line": 164
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              4765,
              4770
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 166
              },
              "start": {
                "column": 6,
                "line": 166
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                4757,
                4758
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 165
                },
                "start": {
                  "column": 6,
                  "line": 165
                }
              }
            },
            "range": [
              4757,
              4758
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 165
              },
              "start": {
                "column": 6,
                "line": 165
              }
            }
          },
          "range": [
            4713,
            4770
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 166
            },
            "start": {
              "column": 6,
              "line": 164
            }
          }
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "range": [
            4700,
            4706
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 163
            },
            "start": {
              "column": 6,
              "line": 163
            }
          }
        },
        "range": [
          4677,
          4770
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 166
          },
          "start": {
            "column": 35,
            "line": 162
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 162
          },
          "start": {
            "column": 14,
            "line": 162
          }
        },
        "range": [
          4656,
          4674
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                4667,
                4673
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 162
                },
                "start": {
                  "column": 25,
                  "line": 162
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "range": [
                4657,
                4658
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 162
                },
                "start": {
                  "column": 15,
                  "line": 162
                }
              }
            },
            "out": false,
            "range": [
              4657,
              4673
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 162
              },
              "start": {
                "column": 15,
                "line": 162
              }
            }
          }
        ]
      },
      "range": [
        4642,
        4771
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 166
        },
        "start": {
          "column": 0,
          "line": 162
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  4855,
                  4860
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 169
                  },
                  "start": {
                    "column": 11,
                    "line": 169
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  4861,
                  4867
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 169
                  },
                  "start": {
                    "column": 17,
                    "line": 169
                  }
                }
              },
              "range": [
                4855,
                4867
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 169
                },
                "start": {
                  "column": 11,
                  "line": 169
                }
              }
            },
            "range": [
              4848,
              4868
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 169
              },
              "start": {
                "column": 4,
                "line": 169
              }
            }
          }
        ],
        "range": [
          4842,
          4880
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 69,
            "line": 168
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          4782,
          4786
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 168
          },
          "start": {
            "column": 9,
            "line": 168
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
                "line": 168
              },
              "start": {
                "column": 40,
                "line": 168
              }
            },
            "range": [
              4813,
              4816
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4815,
                  4816
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 168
                  },
                  "start": {
                    "column": 42,
                    "line": 168
                  }
                }
              },
              "range": [
                4815,
                4816
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 168
                },
                "start": {
                  "column": 42,
                  "line": 168
                }
              }
            }
          },
          "range": [
            4808,
            4816
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 168
            },
            "start": {
              "column": 35,
              "line": 168
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 168
          },
          "start": {
            "column": 44,
            "line": 168
          }
        },
        "range": [
          4817,
          4841
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4828,
              4841
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'length'",
                    "value": "length",
                    "range": [
                      4831,
                      4839
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 168
                      },
                      "start": {
                        "column": 58,
                        "line": 168
                      }
                    }
                  },
                  "range": [
                    4831,
                    4839
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 168
                    },
                    "start": {
                      "column": 58,
                      "line": 168
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
                      4829,
                      4830
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 168
                      },
                      "start": {
                        "column": 56,
                        "line": 168
                      }
                    }
                  },
                  "range": [
                    4829,
                    4830
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 168
                    },
                    "start": {
                      "column": 56,
                      "line": 168
                    }
                  }
                },
                "range": [
                  4829,
                  4840
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 168
                  },
                  "start": {
                    "column": 56,
                    "line": 168
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 168
              },
              "start": {
                "column": 55,
                "line": 168
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Enumerate",
            "optional": false,
            "range": [
              4819,
              4828
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 168
              },
              "start": {
                "column": 46,
                "line": 168
              }
            }
          },
          "range": [
            4819,
            4841
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 168
            },
            "start": {
              "column": 46,
              "line": 168
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 168
          },
          "start": {
            "column": 13,
            "line": 168
          }
        },
        "range": [
          4786,
          4807
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  4797,
                  4804
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 168
                  },
                  "start": {
                    "column": 24,
                    "line": 168
                  }
                }
              },
              "range": [
                4797,
                4806
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 168
                },
                "start": {
                  "column": 24,
                  "line": 168
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
                4787,
                4788
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 168
                },
                "start": {
                  "column": 14,
                  "line": 168
                }
              }
            },
            "out": false,
            "range": [
              4787,
              4806
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 168
              },
              "start": {
                "column": 14,
                "line": 168
              }
            }
          }
        ]
      },
      "range": [
        4773,
        4880
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 168
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 171
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
