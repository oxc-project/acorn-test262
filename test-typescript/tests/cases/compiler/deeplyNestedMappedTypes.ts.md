__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    33,
    4778
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Id",
        "optional": false,
        "range": [
          38,
          40
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
                60,
                61
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            "range": [
              60,
              61
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            }
          },
          "range": [
            54,
            61
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            49,
            50
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
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              66,
              72
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
                      69,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 3
                      },
                      "start": {
                        "column": 36,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    69,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 36,
                      "line": 3
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
                      67,
                      68
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
                    67,
                    68
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
                  67,
                  71
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
                "column": 33,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Id",
            "optional": false,
            "range": [
              64,
              66
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          },
          "range": [
            64,
            72
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 31,
              "line": 3
            }
          }
        },
        "range": [
          46,
          74
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        },
        "range": [
          40,
          43
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
                41,
                42
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              41,
              42
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        33,
        75
      ],
      "loc": {
        "end": {
          "column": 42,
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
        "name": "Foo1",
        "optional": false,
        "range": [
          82,
          86
        ],
        "loc": {
          "end": {
            "column": 9,
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
            91,
            141
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      94,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
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
                        "column": 61,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    },
                    "range": [
                      95,
                      138
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              99,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 5
                              },
                              "start": {
                                "column": 22,
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
                                "column": 59,
                                "line": 5
                              },
                              "start": {
                                "column": 23,
                                "line": 5
                              }
                            },
                            "range": [
                              100,
                              136
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
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      104,
                                      105
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 27,
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
                                        "column": 57,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 5
                                      }
                                    },
                                    "range": [
                                      105,
                                      134
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
                                              109,
                                              110
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
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "loc": {
                                              "end": {
                                                "column": 55,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 33,
                                                "line": 5
                                              }
                                            },
                                            "range": [
                                              110,
                                              132
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "range": [
                                                      114,
                                                      115
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 38,
                                                        "line": 5
                                                      },
                                                      "start": {
                                                        "column": 37,
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
                                                        "column": 53,
                                                        "line": 5
                                                      },
                                                      "start": {
                                                        "column": 38,
                                                        "line": 5
                                                      }
                                                    },
                                                    "range": [
                                                      115,
                                                      130
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "range": [
                                                              119,
                                                              120
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
                                                          "optional": false,
                                                          "readonly": false,
                                                          "static": false,
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "loc": {
                                                              "end": {
                                                                "column": 51,
                                                                "line": 5
                                                              },
                                                              "start": {
                                                                "column": 43,
                                                                "line": 5
                                                              }
                                                            },
                                                            "range": [
                                                              120,
                                                              128
                                                            ],
                                                            "typeAnnotation": {
                                                              "type": "TSNumberKeyword",
                                                              "range": [
                                                                122,
                                                                128
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 51,
                                                                  "line": 5
                                                                },
                                                                "start": {
                                                                  "column": 45,
                                                                  "line": 5
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "range": [
                                                            119,
                                                            128
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 51,
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
                                                        117,
                                                        130
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 53,
                                                          "line": 5
                                                        },
                                                        "start": {
                                                          "column": 40,
                                                          "line": 5
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    114,
                                                    130
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 53,
                                                      "line": 5
                                                    },
                                                    "start": {
                                                      "column": 37,
                                                      "line": 5
                                                    }
                                                  }
                                                }
                                              ],
                                              "range": [
                                                112,
                                                132
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 55,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 35,
                                                  "line": 5
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            109,
                                            132
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 55,
                                              "line": 5
                                            },
                                            "start": {
                                              "column": 32,
                                              "line": 5
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        107,
                                        134
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 57,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 5
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    104,
                                    134
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
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
                                102,
                                136
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 5
                                },
                                "start": {
                                  "column": 25,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            99,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 5
                            },
                            "start": {
                              "column": 22,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        97,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    94,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                92,
                140
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "range": [
            89,
            91
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "range": [
          89,
          141
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "range": [
        77,
        142
      ],
      "loc": {
        "end": {
          "column": 65,
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
        "name": "Foo2",
        "optional": false,
        "range": [
          148,
          152
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            157,
            207
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      160,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
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
                        "column": 61,
                        "line": 6
                      },
                      "start": {
                        "column": 18,
                        "line": 6
                      }
                    },
                    "range": [
                      161,
                      204
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              165,
                              166
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 6
                              },
                              "start": {
                                "column": 22,
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
                                "column": 59,
                                "line": 6
                              },
                              "start": {
                                "column": 23,
                                "line": 6
                              }
                            },
                            "range": [
                              166,
                              202
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
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      170,
                                      171
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
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 6
                                      }
                                    },
                                    "range": [
                                      171,
                                      200
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
                                              175,
                                              176
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
                                          "optional": false,
                                          "readonly": false,
                                          "static": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "loc": {
                                              "end": {
                                                "column": 55,
                                                "line": 6
                                              },
                                              "start": {
                                                "column": 33,
                                                "line": 6
                                              }
                                            },
                                            "range": [
                                              176,
                                              198
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "range": [
                                                      180,
                                                      181
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 38,
                                                        "line": 6
                                                      },
                                                      "start": {
                                                        "column": 37,
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
                                                        "column": 53,
                                                        "line": 6
                                                      },
                                                      "start": {
                                                        "column": 38,
                                                        "line": 6
                                                      }
                                                    },
                                                    "range": [
                                                      181,
                                                      196
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "range": [
                                                              185,
                                                              186
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 43,
                                                                "line": 6
                                                              },
                                                              "start": {
                                                                "column": 42,
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
                                                                "column": 51,
                                                                "line": 6
                                                              },
                                                              "start": {
                                                                "column": 43,
                                                                "line": 6
                                                              }
                                                            },
                                                            "range": [
                                                              186,
                                                              194
                                                            ],
                                                            "typeAnnotation": {
                                                              "type": "TSStringKeyword",
                                                              "range": [
                                                                188,
                                                                194
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 51,
                                                                  "line": 6
                                                                },
                                                                "start": {
                                                                  "column": 45,
                                                                  "line": 6
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "range": [
                                                            185,
                                                            194
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 51,
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
                                                        183,
                                                        196
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
                                                    180,
                                                    196
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 53,
                                                      "line": 6
                                                    },
                                                    "start": {
                                                      "column": 37,
                                                      "line": 6
                                                    }
                                                  }
                                                }
                                              ],
                                              "range": [
                                                178,
                                                198
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 55,
                                                  "line": 6
                                                },
                                                "start": {
                                                  "column": 35,
                                                  "line": 6
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            175,
                                            198
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 55,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 32,
                                              "line": 6
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        173,
                                        200
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 57,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 6
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    170,
                                    200
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "range": [
                                168,
                                202
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 6
                                },
                                "start": {
                                  "column": 25,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            165,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        163,
                        204
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    160,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                158,
                206
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 6
            },
            "start": {
              "column": 14,
              "line": 6
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "range": [
            155,
            157
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "range": [
          155,
          207
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "range": [
        143,
        208
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              },
              "range": [
                228,
                234
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "range": [
                    230,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  }
                },
                "range": [
                  230,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              224,
              234
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            224,
            234
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        210,
        235
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              },
              "range": [
                246,
                252
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "range": [
                    248,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "range": [
                  248,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              242,
              252
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "range": [
              255,
              259
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          },
          "range": [
            242,
            259
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        236,
        260
      ],
      "loc": {
        "end": {
          "column": 24,
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
        "name": "Id2",
        "optional": false,
        "range": [
          286,
          289
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
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
                309,
                310
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 11
                },
                "start": {
                  "column": 28,
                  "line": 11
                }
              }
            },
            "range": [
              309,
              310
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 28,
                "line": 11
              }
            }
          },
          "range": [
            303,
            310
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 11
            },
            "start": {
              "column": 22,
              "line": 11
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            298,
            299
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              316,
              327
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    320,
                    326
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
                            323,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 11
                            },
                            "start": {
                              "column": 42,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          323,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 11
                          },
                          "start": {
                            "column": 42,
                            "line": 11
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
                          321,
                          322
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
                        321,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 11
                        },
                        "start": {
                          "column": 40,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 11
                    },
                    "start": {
                      "column": 39,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id2",
                  "optional": false,
                  "range": [
                    317,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 11
                    },
                    "start": {
                      "column": 36,
                      "line": 11
                    }
                  }
                },
                "range": [
                  317,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 36,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 11
              },
              "start": {
                "column": 35,
                "line": 11
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Id2",
            "optional": false,
            "range": [
              313,
              316
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 32,
                "line": 11
              }
            }
          },
          "range": [
            313,
            327
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 11
            },
            "start": {
              "column": 32,
              "line": 11
            }
          }
        },
        "range": [
          295,
          329
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 11
          },
          "start": {
            "column": 14,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 8,
            "line": 11
          }
        },
        "range": [
          289,
          292
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
                290,
                291
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              290,
              291
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        281,
        330
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "range": [
          337,
          341
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            347,
            397
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      350,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
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
                        "column": 62,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    },
                    "range": [
                      351,
                      394
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              355,
                              356
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 23,
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
                                "column": 60,
                                "line": 13
                              },
                              "start": {
                                "column": 24,
                                "line": 13
                              }
                            },
                            "range": [
                              356,
                              392
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
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      360,
                                      361
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
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 13
                                      }
                                    },
                                    "range": [
                                      361,
                                      390
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
                                              365,
                                              366
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 34,
                                                "line": 13
                                              },
                                              "start": {
                                                "column": 33,
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
                                                "column": 56,
                                                "line": 13
                                              },
                                              "start": {
                                                "column": 34,
                                                "line": 13
                                              }
                                            },
                                            "range": [
                                              366,
                                              388
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "range": [
                                                      370,
                                                      371
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 39,
                                                        "line": 13
                                                      },
                                                      "start": {
                                                        "column": 38,
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
                                                        "column": 54,
                                                        "line": 13
                                                      },
                                                      "start": {
                                                        "column": 39,
                                                        "line": 13
                                                      }
                                                    },
                                                    "range": [
                                                      371,
                                                      386
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "range": [
                                                              375,
                                                              376
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 44,
                                                                "line": 13
                                                              },
                                                              "start": {
                                                                "column": 43,
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
                                                                "column": 52,
                                                                "line": 13
                                                              },
                                                              "start": {
                                                                "column": 44,
                                                                "line": 13
                                                              }
                                                            },
                                                            "range": [
                                                              376,
                                                              384
                                                            ],
                                                            "typeAnnotation": {
                                                              "type": "TSNumberKeyword",
                                                              "range": [
                                                                378,
                                                                384
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 52,
                                                                  "line": 13
                                                                },
                                                                "start": {
                                                                  "column": 46,
                                                                  "line": 13
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "range": [
                                                            375,
                                                            384
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 52,
                                                              "line": 13
                                                            },
                                                            "start": {
                                                              "column": 43,
                                                              "line": 13
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "range": [
                                                        373,
                                                        386
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 54,
                                                          "line": 13
                                                        },
                                                        "start": {
                                                          "column": 41,
                                                          "line": 13
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    370,
                                                    386
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 54,
                                                      "line": 13
                                                    },
                                                    "start": {
                                                      "column": 38,
                                                      "line": 13
                                                    }
                                                  }
                                                }
                                              ],
                                              "range": [
                                                368,
                                                388
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 56,
                                                  "line": 13
                                                },
                                                "start": {
                                                  "column": 36,
                                                  "line": 13
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            365,
                                            388
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 56,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 33,
                                              "line": 13
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        363,
                                        390
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 13
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    360,
                                    390
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "range": [
                                358,
                                392
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 13
                                },
                                "start": {
                                  "column": 26,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            355,
                            392
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 13
                            },
                            "start": {
                              "column": 23,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        353,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
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
                    350,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                348,
                396
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 13
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 13
            },
            "start": {
              "column": 15,
              "line": 13
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id2",
          "optional": false,
          "range": [
            344,
            347
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        },
        "range": [
          344,
          397
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 13
          },
          "start": {
            "column": 12,
            "line": 13
          }
        }
      },
      "range": [
        332,
        398
      ],
      "loc": {
        "end": {
          "column": 66,
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
        "name": "Foo4",
        "optional": false,
        "range": [
          404,
          408
        ],
        "loc": {
          "end": {
            "column": 9,
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
            414,
            464
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      417,
                      418
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
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
                        "column": 62,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    },
                    "range": [
                      418,
                      461
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              422,
                              423
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 14
                              },
                              "start": {
                                "column": 23,
                                "line": 14
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
                                "column": 60,
                                "line": 14
                              },
                              "start": {
                                "column": 24,
                                "line": 14
                              }
                            },
                            "range": [
                              423,
                              459
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
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      427,
                                      428
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
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 14
                                      }
                                    },
                                    "range": [
                                      428,
                                      457
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
                                              432,
                                              433
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 34,
                                                "line": 14
                                              },
                                              "start": {
                                                "column": 33,
                                                "line": 14
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
                                                "column": 56,
                                                "line": 14
                                              },
                                              "start": {
                                                "column": 34,
                                                "line": 14
                                              }
                                            },
                                            "range": [
                                              433,
                                              455
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "range": [
                                                      437,
                                                      438
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 39,
                                                        "line": 14
                                                      },
                                                      "start": {
                                                        "column": 38,
                                                        "line": 14
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
                                                        "line": 14
                                                      },
                                                      "start": {
                                                        "column": 39,
                                                        "line": 14
                                                      }
                                                    },
                                                    "range": [
                                                      438,
                                                      453
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "range": [
                                                              442,
                                                              443
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 44,
                                                                "line": 14
                                                              },
                                                              "start": {
                                                                "column": 43,
                                                                "line": 14
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
                                                                "line": 14
                                                              },
                                                              "start": {
                                                                "column": 44,
                                                                "line": 14
                                                              }
                                                            },
                                                            "range": [
                                                              443,
                                                              451
                                                            ],
                                                            "typeAnnotation": {
                                                              "type": "TSStringKeyword",
                                                              "range": [
                                                                445,
                                                                451
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 52,
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
                                                            442,
                                                            451
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 52,
                                                              "line": 14
                                                            },
                                                            "start": {
                                                              "column": 43,
                                                              "line": 14
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "range": [
                                                        440,
                                                        453
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 54,
                                                          "line": 14
                                                        },
                                                        "start": {
                                                          "column": 41,
                                                          "line": 14
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    437,
                                                    453
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 54,
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
                                                435,
                                                455
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 56,
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
                                            432,
                                            455
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 56,
                                              "line": 14
                                            },
                                            "start": {
                                              "column": 33,
                                              "line": 14
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        430,
                                        457
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 14
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 14
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    427,
                                    457
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "range": [
                                425,
                                459
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 14
                                },
                                "start": {
                                  "column": 26,
                                  "line": 14
                                }
                              }
                            }
                          },
                          "range": [
                            422,
                            459
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 14
                            },
                            "start": {
                              "column": 23,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        420,
                        461
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 14
                        },
                        "start": {
                          "column": 21,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    417,
                    461
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 14
                    },
                    "start": {
                      "column": 18,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                415,
                463
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 14
            },
            "start": {
              "column": 15,
              "line": 14
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id2",
          "optional": false,
          "range": [
            411,
            414
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        },
        "range": [
          411,
          464
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 14
          }
        }
      },
      "range": [
        399,
        465
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 16
                },
                "start": {
                  "column": 18,
                  "line": 16
                }
              },
              "range": [
                485,
                491
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "range": [
                    487,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
                    }
                  }
                },
                "range": [
                  487,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 16
                  },
                  "start": {
                    "column": 20,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              481,
              491
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 16
              },
              "start": {
                "column": 14,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            481,
            491
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 16
            },
            "start": {
              "column": 14,
              "line": 16
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        467,
        492
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "foo4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 10,
                  "line": 17
                }
              },
              "range": [
                503,
                509
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "range": [
                    505,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "range": [
                  505,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              499,
              509
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "range": [
              512,
              516
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 19,
                "line": 17
              }
            }
          },
          "range": [
            499,
            516
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        493,
        517
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiredDeep",
        "optional": false,
        "range": [
          581,
          593
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
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
                613,
                614
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 37,
                  "line": 21
                }
              }
            },
            "range": [
              613,
              614
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 21
              },
              "start": {
                "column": 37,
                "line": 21
              }
            }
          },
          "range": [
            607,
            614
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 21
            },
            "start": {
              "column": 31,
              "line": 21
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            602,
            603
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 21
            },
            "start": {
              "column": 26,
              "line": 21
            }
          }
        },
        "nameType": null,
        "optional": "-",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              631,
              637
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
                      634,
                      635
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 21
                      },
                      "start": {
                        "column": 58,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    634,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 21
                    },
                    "start": {
                      "column": 58,
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
                      632,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 21
                      },
                      "start": {
                        "column": 56,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    632,
                    633
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 21
                    },
                    "start": {
                      "column": 56,
                      "line": 21
                    }
                  }
                },
                "range": [
                  632,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 21
                  },
                  "start": {
                    "column": 56,
                    "line": 21
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 21
              },
              "start": {
                "column": 55,
                "line": 21
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequiredDeep",
            "optional": false,
            "range": [
              619,
              631
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 21
              },
              "start": {
                "column": 43,
                "line": 21
              }
            }
          },
          "range": [
            619,
            637
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 21
            },
            "start": {
              "column": 43,
              "line": 21
            }
          }
        },
        "range": [
          599,
          639
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 21
          },
          "start": {
            "column": 23,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        },
        "range": [
          593,
          596
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
                594,
                595
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              594,
              595
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 21
              },
              "start": {
                "column": 18,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        576,
        640
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
          647,
          648
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
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
              "name": "a",
              "optional": false,
              "range": [
                653,
                654
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              },
              "range": [
                655,
                685
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        659,
                        660
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 17,
                          "line": 23
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
                          "line": 23
                        },
                        "start": {
                          "column": 18,
                          "line": 23
                        }
                      },
                      "range": [
                        660,
                        684
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
                              "name": "c",
                              "optional": false,
                              "range": [
                                664,
                                665
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 23
                                },
                                "start": {
                                  "column": 22,
                                  "line": 23
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
                                  "line": 23
                                },
                                "start": {
                                  "column": 23,
                                  "line": 23
                                }
                              },
                              "range": [
                                665,
                                682
                              ],
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "raw": "1",
                                      "value": 1,
                                      "range": [
                                        667,
                                        668
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 23
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 23
                                        }
                                      }
                                    },
                                    "range": [
                                      667,
                                      668
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 23
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
                                          "name": "d",
                                          "optional": false,
                                          "range": [
                                            673,
                                            674
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 32,
                                              "line": 23
                                            },
                                            "start": {
                                              "column": 31,
                                              "line": 23
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
                                              "column": 38,
                                              "line": 23
                                            },
                                            "start": {
                                              "column": 32,
                                              "line": 23
                                            }
                                          },
                                          "range": [
                                            674,
                                            680
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "raw": "2000",
                                              "value": 2000,
                                              "range": [
                                                676,
                                                680
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 38,
                                                  "line": 23
                                                },
                                                "start": {
                                                  "column": 34,
                                                  "line": 23
                                                }
                                              }
                                            },
                                            "range": [
                                              676,
                                              680
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 38,
                                                "line": 23
                                              },
                                              "start": {
                                                "column": 34,
                                                "line": 23
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          673,
                                          680
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 31,
                                            "line": 23
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      671,
                                      682
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 23
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  667,
                                  682
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 23
                                  }
                                }
                              }
                            },
                            "range": [
                              664,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 23
                              },
                              "start": {
                                "column": 22,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "range": [
                          662,
                          684
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 23
                          },
                          "start": {
                            "column": 20,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      659,
                      684
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 23
                      },
                      "start": {
                        "column": 17,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  657,
                  685
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 23
                  },
                  "start": {
                    "column": 15,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              653,
              685
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          }
        ],
        "range": [
          651,
          686
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "range": [
        642,
        686
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          692,
          693
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
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
              "name": "a",
              "optional": false,
              "range": [
                698,
                699
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
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 24
                },
                "start": {
                  "column": 13,
                  "line": 24
                }
              },
              "range": [
                700,
                750
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        704,
                        705
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 24
                        },
                        "start": {
                          "column": 17,
                          "line": 24
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
                          "column": 62,
                          "line": 24
                        },
                        "start": {
                          "column": 18,
                          "line": 24
                        }
                      },
                      "range": [
                        705,
                        749
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
                              "name": "c",
                              "optional": false,
                              "range": [
                                709,
                                710
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 24
                                },
                                "start": {
                                  "column": 22,
                                  "line": 24
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
                                  "column": 51,
                                  "line": 24
                                },
                                "start": {
                                  "column": 23,
                                  "line": 24
                                }
                              },
                              "range": [
                                710,
                                738
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
                                      "name": "d",
                                      "optional": false,
                                      "range": [
                                        714,
                                        715
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 24
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
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 24
                                        }
                                      },
                                      "range": [
                                        715,
                                        737
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
                                              "name": "e",
                                              "optional": false,
                                              "range": [
                                                719,
                                                720
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 33,
                                                  "line": 24
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 24
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
                                                  "column": 49,
                                                  "line": 24
                                                },
                                                "start": {
                                                  "column": 33,
                                                  "line": 24
                                                }
                                              },
                                              "range": [
                                                720,
                                                736
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
                                                      "name": "f",
                                                      "optional": false,
                                                      "range": [
                                                        724,
                                                        725
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 38,
                                                          "line": 24
                                                        },
                                                        "start": {
                                                          "column": 37,
                                                          "line": 24
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
                                                          "column": 48,
                                                          "line": 24
                                                        },
                                                        "start": {
                                                          "column": 38,
                                                          "line": 24
                                                        }
                                                      },
                                                      "range": [
                                                        725,
                                                        735
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
                                                              "name": "g",
                                                              "optional": false,
                                                              "range": [
                                                                729,
                                                                730
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 43,
                                                                  "line": 24
                                                                },
                                                                "start": {
                                                                  "column": 42,
                                                                  "line": 24
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
                                                                  "column": 46,
                                                                  "line": 24
                                                                },
                                                                "start": {
                                                                  "column": 43,
                                                                  "line": 24
                                                                }
                                                              },
                                                              "range": [
                                                                730,
                                                                733
                                                              ],
                                                              "typeAnnotation": {
                                                                "type": "TSLiteralType",
                                                                "literal": {
                                                                  "type": "Literal",
                                                                  "raw": "2",
                                                                  "value": 2,
                                                                  "range": [
                                                                    732,
                                                                    733
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 46,
                                                                      "line": 24
                                                                    },
                                                                    "start": {
                                                                      "column": 45,
                                                                      "line": 24
                                                                    }
                                                                  }
                                                                },
                                                                "range": [
                                                                  732,
                                                                  733
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 46,
                                                                    "line": 24
                                                                  },
                                                                  "start": {
                                                                    "column": 45,
                                                                    "line": 24
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "range": [
                                                              729,
                                                              733
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 46,
                                                                "line": 24
                                                              },
                                                              "start": {
                                                                "column": 42,
                                                                "line": 24
                                                              }
                                                            }
                                                          }
                                                        ],
                                                        "range": [
                                                          727,
                                                          735
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 48,
                                                            "line": 24
                                                          },
                                                          "start": {
                                                            "column": 40,
                                                            "line": 24
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      724,
                                                      735
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 48,
                                                        "line": 24
                                                      },
                                                      "start": {
                                                        "column": 37,
                                                        "line": 24
                                                      }
                                                    }
                                                  }
                                                ],
                                                "range": [
                                                  722,
                                                  736
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 49,
                                                    "line": 24
                                                  },
                                                  "start": {
                                                    "column": 35,
                                                    "line": 24
                                                  }
                                                }
                                              }
                                            },
                                            "range": [
                                              719,
                                              736
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 49,
                                                "line": 24
                                              },
                                              "start": {
                                                "column": 32,
                                                "line": 24
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          717,
                                          737
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 50,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 30,
                                            "line": 24
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      714,
                                      737
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 24
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  712,
                                  738
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 24
                                  }
                                }
                              }
                            },
                            "range": [
                              709,
                              739
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 24
                              },
                              "start": {
                                "column": 22,
                                "line": 24
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                740,
                                741
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 24
                                },
                                "start": {
                                  "column": 53,
                                  "line": 24
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
                                  "column": 60,
                                  "line": 24
                                },
                                "start": {
                                  "column": 54,
                                  "line": 24
                                }
                              },
                              "range": [
                                741,
                                747
                              ],
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "1000",
                                  "value": 1000,
                                  "range": [
                                    743,
                                    747
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 24
                                    }
                                  }
                                },
                                "range": [
                                  743,
                                  747
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 24
                                  }
                                }
                              }
                            },
                            "range": [
                              740,
                              747
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 24
                              },
                              "start": {
                                "column": 53,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "range": [
                          707,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 24
                          },
                          "start": {
                            "column": 20,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      704,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  702,
                  750
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 24
                  },
                  "start": {
                    "column": 15,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              698,
              750
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 24
              }
            }
          }
        ],
        "range": [
          696,
          751
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "range": [
        687,
        751
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          758,
          759
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            774,
            777
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
                  775,
                  776
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 26
                  }
                }
              },
              "range": [
                775,
                776
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 26
                },
                "start": {
                  "column": 22,
                  "line": 26
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 26
            },
            "start": {
              "column": 21,
              "line": 26
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredDeep",
          "optional": false,
          "range": [
            762,
            774
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 26
            },
            "start": {
              "column": 9,
              "line": 26
            }
          }
        },
        "range": [
          762,
          777
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "range": [
        753,
        778
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          784,
          785
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            800,
            803
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
                  801,
                  802
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 27
                  },
                  "start": {
                    "column": 22,
                    "line": 27
                  }
                }
              },
              "range": [
                801,
                802
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 27
            },
            "start": {
              "column": 21,
              "line": 27
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredDeep",
          "optional": false,
          "range": [
            788,
            800
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 27
            },
            "start": {
              "column": 9,
              "line": 27
            }
          }
        },
        "range": [
          788,
          803
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
          }
        }
      },
      "range": [
        779,
        804
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "name": "Test1",
        "optional": false,
        "range": [
          811,
          816
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  820,
                  821
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 29
                  },
                  "start": {
                    "column": 14,
                    "line": 29
                  }
                }
              },
              "range": [
                820,
                821
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 29
                },
                "start": {
                  "column": 14,
                  "line": 29
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  823,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 29
                  },
                  "start": {
                    "column": 17,
                    "line": 29
                  }
                }
              },
              "range": [
                823,
                824
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 29
                }
              }
            }
          ],
          "range": [
            819,
            825
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 29
            },
            "start": {
              "column": 13,
              "line": 29
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  835,
                  836
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 29
                  },
                  "start": {
                    "column": 29,
                    "line": 29
                  }
                }
              },
              "range": [
                835,
                836
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 29
                },
                "start": {
                  "column": 29,
                  "line": 29
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  838,
                  839
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 29
                  },
                  "start": {
                    "column": 32,
                    "line": 29
                  }
                }
              },
              "range": [
                838,
                839
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 29
                },
                "start": {
                  "column": 32,
                  "line": 29
                }
              }
            }
          ],
          "range": [
            834,
            840
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 29
            },
            "start": {
              "column": 28,
              "line": 29
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              850,
              855
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 29
              },
              "start": {
                "column": 44,
                "line": 29
              }
            }
          },
          "range": [
            850,
            855
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 29
            },
            "start": {
              "column": 44,
              "line": 29
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              843,
              847
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 29
              },
              "start": {
                "column": 37,
                "line": 29
              }
            }
          },
          "range": [
            843,
            847
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 29
            },
            "start": {
              "column": 37,
              "line": 29
            }
          }
        },
        "range": [
          819,
          855
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 29
          },
          "start": {
            "column": 13,
            "line": 29
          }
        }
      },
      "range": [
        806,
        856
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "range": [
          872,
          877
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
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
            "name": "C",
            "optional": false,
            "range": [
              880,
              881
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 30
              },
              "start": {
                "column": 13,
                "line": 30
              }
            }
          },
          "range": [
            880,
            881
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 30
            },
            "start": {
              "column": 13,
              "line": 30
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "range": [
              890,
              891
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 30
              },
              "start": {
                "column": 23,
                "line": 30
              }
            }
          },
          "range": [
            890,
            891
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 30
            },
            "start": {
              "column": 23,
              "line": 30
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              901,
              906
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 30
              },
              "start": {
                "column": 34,
                "line": 30
              }
            }
          },
          "range": [
            901,
            906
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 30
            },
            "start": {
              "column": 34,
              "line": 30
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              894,
              898
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 30
              },
              "start": {
                "column": 27,
                "line": 30
              }
            }
          },
          "range": [
            894,
            898
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 30
            },
            "start": {
              "column": 27,
              "line": 30
            }
          }
        },
        "range": [
          880,
          906
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 30
          },
          "start": {
            "column": 13,
            "line": 30
          }
        }
      },
      "range": [
        867,
        907
      ],
      "loc": {
        "end": {
          "column": 40,
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
        "name": "Test3",
        "optional": false,
        "range": [
          923,
          928
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
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
            "name": "D",
            "optional": false,
            "range": [
              931,
              932
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          },
          "range": [
            931,
            932
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 31
            },
            "start": {
              "column": 13,
              "line": 31
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              941,
              942
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 31
              },
              "start": {
                "column": 23,
                "line": 31
              }
            }
          },
          "range": [
            941,
            942
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 31
            },
            "start": {
              "column": 23,
              "line": 31
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              952,
              957
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 31
              },
              "start": {
                "column": 34,
                "line": 31
              }
            }
          },
          "range": [
            952,
            957
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 31
            },
            "start": {
              "column": 34,
              "line": 31
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              945,
              949
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 31
              },
              "start": {
                "column": 27,
                "line": 31
              }
            }
          },
          "range": [
            945,
            949
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 31
            },
            "start": {
              "column": 27,
              "line": 31
            }
          }
        },
        "range": [
          931,
          957
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 31
          },
          "start": {
            "column": 13,
            "line": 31
          }
        }
      },
      "range": [
        918,
        958
      ],
      "loc": {
        "end": {
          "column": 40,
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
        "name": "NestedRecord",
        "optional": false,
        "range": [
          1331,
          1343
        ],
        "loc": {
          "end": {
            "column": 17,
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
            "name": "K",
            "optional": false,
            "range": [
              1367,
              1368
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 39
              },
              "start": {
                "column": 41,
                "line": 39
              }
            }
          },
          "range": [
            1367,
            1368
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 39
            },
            "start": {
              "column": 41,
              "line": 39
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
                "cooked": "",
                "raw": ""
              },
              "range": [
                1377,
                1380
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 39
                },
                "start": {
                  "column": 51,
                  "line": 39
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": ".",
                "raw": "."
              },
              "range": [
                1388,
                1392
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 39
                },
                "start": {
                  "column": 62,
                  "line": 39
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
                1400,
                1402
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 39
                },
                "start": {
                  "column": 74,
                  "line": 39
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
                  "name": "K0",
                  "optional": false,
                  "range": [
                    1386,
                    1388
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 39
                    },
                    "start": {
                      "column": 60,
                      "line": 39
                    }
                  }
                },
                "out": false,
                "range": [
                  1386,
                  1388
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 39
                  },
                  "start": {
                    "column": 60,
                    "line": 39
                  }
                }
              },
              "range": [
                1380,
                1388
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 39
                },
                "start": {
                  "column": 54,
                  "line": 39
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
                  "name": "KR",
                  "optional": false,
                  "range": [
                    1398,
                    1400
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 39
                    },
                    "start": {
                      "column": 72,
                      "line": 39
                    }
                  }
                },
                "out": false,
                "range": [
                  1398,
                  1400
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 39
                  },
                  "start": {
                    "column": 72,
                    "line": 39
                  }
                }
              },
              "range": [
                1392,
                1400
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 39
                },
                "start": {
                  "column": 66,
                  "line": 39
                }
              }
            }
          ],
          "range": [
            1377,
            1402
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 39
            },
            "start": {
              "column": 51,
              "line": 39
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1448,
              1454
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
                    1449,
                    1450
                  ],
                  "loc": {
                    "end": {
                      "column": 124,
                      "line": 39
                    },
                    "start": {
                      "column": 123,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1449,
                  1450
                ],
                "loc": {
                  "end": {
                    "column": 124,
                    "line": 39
                  },
                  "start": {
                    "column": 123,
                    "line": 39
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    1452,
                    1453
                  ],
                  "loc": {
                    "end": {
                      "column": 127,
                      "line": 39
                    },
                    "start": {
                      "column": 126,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1452,
                  1453
                ],
                "loc": {
                  "end": {
                    "column": 127,
                    "line": 39
                  },
                  "start": {
                    "column": 126,
                    "line": 39
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 128,
                "line": 39
              },
              "start": {
                "column": 122,
                "line": 39
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              1442,
              1448
            ],
            "loc": {
              "end": {
                "column": 122,
                "line": 39
              },
              "start": {
                "column": 116,
                "line": 39
              }
            }
          },
          "range": [
            1442,
            1454
          ],
          "loc": {
            "end": {
              "column": 128,
              "line": 39
            },
            "start": {
              "column": 116,
              "line": 39
            }
          }
        },
        "trueType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K0",
              "optional": false,
              "range": [
                1413,
                1415
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 39
                },
                "start": {
                  "column": 87,
                  "line": 39
                }
              }
            },
            "range": [
              1413,
              1415
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 39
              },
              "start": {
                "column": 87,
                "line": 39
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              1408,
              1409
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 39
              },
              "start": {
                "column": 82,
                "line": 39
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1430,
                1437
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "KR",
                    "optional": false,
                    "range": [
                      1431,
                      1433
                    ],
                    "loc": {
                      "end": {
                        "column": 107,
                        "line": 39
                      },
                      "start": {
                        "column": 105,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1431,
                    1433
                  ],
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 39
                    },
                    "start": {
                      "column": 105,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      1435,
                      1436
                    ],
                    "loc": {
                      "end": {
                        "column": 110,
                        "line": 39
                      },
                      "start": {
                        "column": 109,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1435,
                    1436
                  ],
                  "loc": {
                    "end": {
                      "column": 110,
                      "line": 39
                    },
                    "start": {
                      "column": 109,
                      "line": 39
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 111,
                  "line": 39
                },
                "start": {
                  "column": 104,
                  "line": 39
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NestedRecord",
              "optional": false,
              "range": [
                1418,
                1430
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 39
                },
                "start": {
                  "column": 92,
                  "line": 39
                }
              }
            },
            "range": [
              1418,
              1437
            ],
            "loc": {
              "end": {
                "column": 111,
                "line": 39
              },
              "start": {
                "column": 92,
                "line": 39
              }
            }
          },
          "range": [
            1405,
            1439
          ],
          "loc": {
            "end": {
              "column": 113,
              "line": 39
            },
            "start": {
              "column": 79,
              "line": 39
            }
          }
        },
        "range": [
          1367,
          1454
        ],
        "loc": {
          "end": {
            "column": 128,
            "line": 39
          },
          "start": {
            "column": 41,
            "line": 39
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 39
          },
          "start": {
            "column": 17,
            "line": 39
          }
        },
        "range": [
          1343,
          1364
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                1354,
                1360
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 39
                },
                "start": {
                  "column": 28,
                  "line": 39
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
                1344,
                1345
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 39
                },
                "start": {
                  "column": 18,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              1344,
              1360
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 39
              },
              "start": {
                "column": 18,
                "line": 39
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
              "name": "V",
              "optional": false,
              "range": [
                1362,
                1363
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
            "out": false,
            "range": [
              1362,
              1363
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
          }
        ]
      },
      "range": [
        1326,
        1455
      ],
      "loc": {
        "end": {
          "column": 129,
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
        "name": "Bar1",
        "optional": false,
        "range": [
          1462,
          1466
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 41
          },
          "start": {
            "column": 5,
            "line": 41
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1481,
            1504
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"x.y.z.a.b.c\"",
                "value": "x.y.z.a.b.c",
                "range": [
                  1482,
                  1495
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 41
                  },
                  "start": {
                    "column": 25,
                    "line": 41
                  }
                }
              },
              "range": [
                1482,
                1495
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 41
                },
                "start": {
                  "column": 25,
                  "line": 41
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                1497,
                1503
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 41
                },
                "start": {
                  "column": 40,
                  "line": 41
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 41
            },
            "start": {
              "column": 24,
              "line": 41
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NestedRecord",
          "optional": false,
          "range": [
            1469,
            1481
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 41
            },
            "start": {
              "column": 12,
              "line": 41
            }
          }
        },
        "range": [
          1469,
          1504
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 41
          },
          "start": {
            "column": 12,
            "line": 41
          }
        }
      },
      "range": [
        1457,
        1505
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "range": [
          1511,
          1515
        ],
        "loc": {
          "end": {
            "column": 9,
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
            1530,
            1553
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"x.y.z.a.b.c\"",
                "value": "x.y.z.a.b.c",
                "range": [
                  1531,
                  1544
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 42
                  },
                  "start": {
                    "column": 25,
                    "line": 42
                  }
                }
              },
              "range": [
                1531,
                1544
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 42
                },
                "start": {
                  "column": 25,
                  "line": 42
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                1546,
                1552
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 42
                },
                "start": {
                  "column": 40,
                  "line": 42
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 42
            },
            "start": {
              "column": 24,
              "line": 42
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NestedRecord",
          "optional": false,
          "range": [
            1518,
            1530
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 42
            },
            "start": {
              "column": 12,
              "line": 42
            }
          }
        },
        "range": [
          1518,
          1553
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 42
          },
          "start": {
            "column": 12,
            "line": 42
          }
        }
      },
      "range": [
        1506,
        1554
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "bar1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 44
                },
                "start": {
                  "column": 18,
                  "line": 44
                }
              },
              "range": [
                1574,
                1580
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar1",
                  "optional": false,
                  "range": [
                    1576,
                    1580
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 44
                    },
                    "start": {
                      "column": 20,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1576,
                  1580
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 44
                  },
                  "start": {
                    "column": 20,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              1570,
              1580
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 44
              },
              "start": {
                "column": 14,
                "line": 44
              }
            }
          },
          "init": null,
          "range": [
            1570,
            1580
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 44
            },
            "start": {
              "column": 14,
              "line": 44
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1556,
        1581
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "bar2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 45
                },
                "start": {
                  "column": 10,
                  "line": 45
                }
              },
              "range": [
                1592,
                1598
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar2",
                  "optional": false,
                  "range": [
                    1594,
                    1598
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 45
                    },
                    "start": {
                      "column": 12,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1594,
                  1598
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 45
                  },
                  "start": {
                    "column": 12,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              1588,
              1598
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 45
              },
              "start": {
                "column": 6,
                "line": 45
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "range": [
              1601,
              1605
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 45
              },
              "start": {
                "column": 19,
                "line": 45
              }
            }
          },
          "range": [
            1588,
            1605
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1582,
        1606
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1649,
        1689
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Input",
          "optional": false,
          "range": [
            1661,
            1666
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 49
            },
            "start": {
              "column": 12,
              "line": 49
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1675,
              1689
            ],
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "range": [
                    1683,
                    1688
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 49
                    },
                    "start": {
                      "column": 34,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1676,
                  1688
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 49
                  },
                  "start": {
                    "column": 27,
                    "line": 49
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 49
              },
              "start": {
                "column": 26,
                "line": 49
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Static",
            "optional": false,
            "range": [
              1669,
              1675
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 49
              },
              "start": {
                "column": 20,
                "line": 49
              }
            }
          },
          "range": [
            1669,
            1689
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 49
            },
            "start": {
              "column": 20,
              "line": 49
            }
          }
        },
        "range": [
          1656,
          1689
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 49
          },
          "start": {
            "column": 7,
            "line": 49
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1690,
        1833
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Input",
              "optional": false,
              "range": [
                1703,
                1708
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 50
                },
                "start": {
                  "column": 13,
                  "line": 50
                }
              }
            },
            "init": {
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
                        "name": "level1",
                        "optional": false,
                        "range": [
                          1729,
                          1735
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 51
                          },
                          "start": {
                            "column": 4,
                            "line": 51
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
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
                                  "name": "level2",
                                  "optional": false,
                                  "range": [
                                    1759,
                                    1765
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 52
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 52
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
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
                                            "name": "foo",
                                            "optional": false,
                                            "range": [
                                              1793,
                                              1796
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 15,
                                                "line": 53
                                              },
                                              "start": {
                                                "column": 12,
                                                "line": 53
                                              }
                                            }
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": false,
                                          "value": {
                                            "type": "CallExpression",
                                            "arguments": [],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "range": [
                                                  1798,
                                                  1802
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 21,
                                                    "line": 53
                                                  },
                                                  "start": {
                                                    "column": 17,
                                                    "line": 53
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "range": [
                                                  1803,
                                                  1809
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 28,
                                                    "line": 53
                                                  },
                                                  "start": {
                                                    "column": 22,
                                                    "line": 53
                                                  }
                                                }
                                              },
                                              "range": [
                                                1798,
                                                1809
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 28,
                                                  "line": 53
                                                },
                                                "start": {
                                                  "column": 17,
                                                  "line": 53
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              1798,
                                              1811
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 30,
                                                "line": 53
                                              },
                                              "start": {
                                                "column": 17,
                                                "line": 53
                                              }
                                            }
                                          },
                                          "range": [
                                            1793,
                                            1811
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 53
                                            },
                                            "start": {
                                              "column": 12,
                                              "line": 53
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        1779,
                                        1822
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 9,
                                          "line": 54
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 52
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Type",
                                      "optional": false,
                                      "range": [
                                        1767,
                                        1771
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 52
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 52
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "range": [
                                        1772,
                                        1778
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 52
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 52
                                        }
                                      }
                                    },
                                    "range": [
                                      1767,
                                      1778
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 52
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 52
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    1767,
                                    1823
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 54
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 52
                                    }
                                  }
                                },
                                "range": [
                                  1759,
                                  1823
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 52
                                  }
                                }
                              }
                            ],
                            "range": [
                              1749,
                              1829
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 55
                              },
                              "start": {
                                "column": 24,
                                "line": 51
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "range": [
                              1737,
                              1741
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 51
                              },
                              "start": {
                                "column": 12,
                                "line": 51
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "range": [
                              1742,
                              1748
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 51
                              },
                              "start": {
                                "column": 17,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            1737,
                            1748
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 51
                            },
                            "start": {
                              "column": 12,
                              "line": 51
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1737,
                          1830
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 55
                          },
                          "start": {
                            "column": 12,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1729,
                        1830
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 55
                        },
                        "start": {
                          "column": 4,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    1723,
                    1832
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 56
                    },
                    "start": {
                      "column": 33,
                      "line": 50
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "range": [
                    1711,
                    1715
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 50
                    },
                    "start": {
                      "column": 21,
                      "line": 50
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "range": [
                    1716,
                    1722
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 50
                    },
                    "start": {
                      "column": 26,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1711,
                  1722
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 50
                  },
                  "start": {
                    "column": 21,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "range": [
                1711,
                1833
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 56
                },
                "start": {
                  "column": 21,
                  "line": 50
                }
              }
            },
            "range": [
              1703,
              1833
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 56
              },
              "start": {
                "column": 13,
                "line": 50
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1697,
          1833
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 56
          },
          "start": {
            "column": 7,
            "line": 50
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1835,
        1877
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Output",
          "optional": false,
          "range": [
            1847,
            1853
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 58
            },
            "start": {
              "column": 12,
              "line": 58
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1862,
              1877
            ],
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "range": [
                    1870,
                    1876
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 58
                    },
                    "start": {
                      "column": 35,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1863,
                  1876
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 58
                  },
                  "start": {
                    "column": 28,
                    "line": 58
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 58
              },
              "start": {
                "column": 27,
                "line": 58
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Static",
            "optional": false,
            "range": [
              1856,
              1862
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 58
              },
              "start": {
                "column": 21,
                "line": 58
              }
            }
          },
          "range": [
            1856,
            1877
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 58
            },
            "start": {
              "column": 21,
              "line": 58
            }
          }
        },
        "range": [
          1842,
          1877
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 58
          },
          "start": {
            "column": 7,
            "line": 58
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 42,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1878,
        2054
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "range": [
                1891,
                1897
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 59
                },
                "start": {
                  "column": 13,
                  "line": 59
                }
              }
            },
            "init": {
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
                        "name": "level1",
                        "optional": false,
                        "range": [
                          1918,
                          1924
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 60
                          },
                          "start": {
                            "column": 4,
                            "line": 60
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
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
                                  "name": "level2",
                                  "optional": false,
                                  "range": [
                                    1948,
                                    1954
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 61
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
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
                                            "name": "foo",
                                            "optional": false,
                                            "range": [
                                              1982,
                                              1985
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 15,
                                                "line": 62
                                              },
                                              "start": {
                                                "column": 12,
                                                "line": 62
                                              }
                                            }
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": false,
                                          "value": {
                                            "type": "CallExpression",
                                            "arguments": [],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "range": [
                                                  1987,
                                                  1991
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 21,
                                                    "line": 62
                                                  },
                                                  "start": {
                                                    "column": 17,
                                                    "line": 62
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "range": [
                                                  1992,
                                                  1998
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 28,
                                                    "line": 62
                                                  },
                                                  "start": {
                                                    "column": 22,
                                                    "line": 62
                                                  }
                                                }
                                              },
                                              "range": [
                                                1987,
                                                1998
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 28,
                                                  "line": 62
                                                },
                                                "start": {
                                                  "column": 17,
                                                  "line": 62
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              1987,
                                              2000
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 30,
                                                "line": 62
                                              },
                                              "start": {
                                                "column": 17,
                                                "line": 62
                                              }
                                            }
                                          },
                                          "range": [
                                            1982,
                                            2000
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 62
                                            },
                                            "start": {
                                              "column": 12,
                                              "line": 62
                                            }
                                          }
                                        },
                                        {
                                          "type": "Property",
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bar",
                                            "optional": false,
                                            "range": [
                                              2014,
                                              2017
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 15,
                                                "line": 63
                                              },
                                              "start": {
                                                "column": 12,
                                                "line": 63
                                              }
                                            }
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": false,
                                          "value": {
                                            "type": "CallExpression",
                                            "arguments": [],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "range": [
                                                  2019,
                                                  2023
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 21,
                                                    "line": 63
                                                  },
                                                  "start": {
                                                    "column": 17,
                                                    "line": 63
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "range": [
                                                  2024,
                                                  2030
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 28,
                                                    "line": 63
                                                  },
                                                  "start": {
                                                    "column": 22,
                                                    "line": 63
                                                  }
                                                }
                                              },
                                              "range": [
                                                2019,
                                                2030
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 28,
                                                  "line": 63
                                                },
                                                "start": {
                                                  "column": 17,
                                                  "line": 63
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              2019,
                                              2032
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 30,
                                                "line": 63
                                              },
                                              "start": {
                                                "column": 17,
                                                "line": 63
                                              }
                                            }
                                          },
                                          "range": [
                                            2014,
                                            2032
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 63
                                            },
                                            "start": {
                                              "column": 12,
                                              "line": 63
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        1968,
                                        2043
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 9,
                                          "line": 64
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 61
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Type",
                                      "optional": false,
                                      "range": [
                                        1956,
                                        1960
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 61
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 61
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "range": [
                                        1961,
                                        1967
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 61
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 61
                                        }
                                      }
                                    },
                                    "range": [
                                      1956,
                                      1967
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 61
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 61
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    1956,
                                    2044
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 61
                                    }
                                  }
                                },
                                "range": [
                                  1948,
                                  2044
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 64
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 61
                                  }
                                }
                              }
                            ],
                            "range": [
                              1938,
                              2050
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 65
                              },
                              "start": {
                                "column": 24,
                                "line": 60
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "range": [
                              1926,
                              1930
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 60
                              },
                              "start": {
                                "column": 12,
                                "line": 60
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "range": [
                              1931,
                              1937
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 60
                              },
                              "start": {
                                "column": 17,
                                "line": 60
                              }
                            }
                          },
                          "range": [
                            1926,
                            1937
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 60
                            },
                            "start": {
                              "column": 12,
                              "line": 60
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1926,
                          2051
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 65
                          },
                          "start": {
                            "column": 12,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1918,
                        2051
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 65
                        },
                        "start": {
                          "column": 4,
                          "line": 60
                        }
                      }
                    }
                  ],
                  "range": [
                    1912,
                    2053
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 66
                    },
                    "start": {
                      "column": 34,
                      "line": 59
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "range": [
                    1900,
                    1904
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 59
                    },
                    "start": {
                      "column": 22,
                      "line": 59
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "range": [
                    1905,
                    1911
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 59
                    },
                    "start": {
                      "column": 27,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1900,
                  1911
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 59
                  },
                  "start": {
                    "column": 22,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "range": [
                1900,
                2054
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 66
                },
                "start": {
                  "column": 22,
                  "line": 59
                }
              }
            },
            "range": [
              1891,
              2054
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 66
              },
              "start": {
                "column": 13,
                "line": 59
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1885,
          2054
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 66
          },
          "start": {
            "column": 7,
            "line": 59
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 59
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
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "range": [
                2123,
                2126
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 69
                },
                "start": {
                  "column": 11,
                  "line": 69
                }
              }
            },
            "range": [
              2116,
              2127
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "range": [
          2110,
          2139
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 54,
            "line": 68
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction1",
        "optional": false,
        "range": [
          2065,
          2085
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 68
          },
          "start": {
            "column": 9,
            "line": 68
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 68
              },
              "start": {
                "column": 33,
                "line": 68
              }
            },
            "range": [
              2089,
              2098
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "range": [
                    2091,
                    2096
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 68
                    },
                    "start": {
                      "column": 35,
                      "line": 68
                    }
                  }
                },
                "range": [
                  2091,
                  2096
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 68
                  },
                  "start": {
                    "column": 35,
                    "line": 68
                  }
                }
              },
              "range": [
                2091,
                2098
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 68
                },
                "start": {
                  "column": 35,
                  "line": 68
                }
              }
            }
          },
          "range": [
            2086,
            2098
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 68
            },
            "start": {
              "column": 30,
              "line": 68
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 68
          },
          "start": {
            "column": 43,
            "line": 68
          }
        },
        "range": [
          2099,
          2109
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "range": [
                2101,
                2107
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 68
                },
                "start": {
                  "column": 45,
                  "line": 68
                }
              }
            },
            "range": [
              2101,
              2107
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 68
              },
              "start": {
                "column": 45,
                "line": 68
              }
            }
          },
          "range": [
            2101,
            2109
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 68
            },
            "start": {
              "column": 45,
              "line": 68
            }
          }
        }
      },
      "range": [
        2056,
        2139
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 68
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
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "range": [
                2221,
                2224
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 73
                },
                "start": {
                  "column": 11,
                  "line": 73
                }
              }
            },
            "range": [
              2214,
              2225
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          }
        ],
        "range": [
          2208,
          2237
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 67,
            "line": 72
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction2",
        "optional": false,
        "range": [
          2150,
          2170
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 72
          },
          "start": {
            "column": 9,
            "line": 72
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 72
              },
              "start": {
                "column": 53,
                "line": 72
              }
            },
            "range": [
              2194,
              2203
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "range": [
                    2196,
                    2201
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 72
                    },
                    "start": {
                      "column": 55,
                      "line": 72
                    }
                  }
                },
                "range": [
                  2196,
                  2201
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 72
                  },
                  "start": {
                    "column": 55,
                    "line": 72
                  }
                }
              },
              "range": [
                2196,
                2203
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 72
                },
                "start": {
                  "column": 55,
                  "line": 72
                }
              }
            }
          },
          "range": [
            2191,
            2203
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 72
            },
            "start": {
              "column": 50,
              "line": 72
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 72
          },
          "start": {
            "column": 63,
            "line": 72
          }
        },
        "range": [
          2204,
          2207
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2206,
              2207
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 72
              },
              "start": {
                "column": 65,
                "line": 72
              }
            }
          },
          "range": [
            2206,
            2207
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 72
            },
            "start": {
              "column": 65,
              "line": 72
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 72
          },
          "start": {
            "column": 29,
            "line": 72
          }
        },
        "range": [
          2170,
          2190
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "range": [
                    2181,
                    2187
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 72
                    },
                    "start": {
                      "column": 40,
                      "line": 72
                    }
                  }
                },
                "range": [
                  2181,
                  2187
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 72
                  },
                  "start": {
                    "column": 40,
                    "line": 72
                  }
                }
              },
              "range": [
                2181,
                2189
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 72
                },
                "start": {
                  "column": 40,
                  "line": 72
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
                2171,
                2172
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 72
                },
                "start": {
                  "column": 30,
                  "line": 72
                }
              }
            },
            "out": false,
            "range": [
              2171,
              2189
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 72
              },
              "start": {
                "column": 30,
                "line": 72
              }
            }
          }
        ]
      },
      "range": [
        2141,
        2237
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 72
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
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "range": [
                2322,
                2325
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 77
                },
                "start": {
                  "column": 11,
                  "line": 77
                }
              }
            },
            "range": [
              2315,
              2326
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          }
        ],
        "range": [
          2309,
          2338
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 70,
            "line": 76
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction3",
        "optional": false,
        "range": [
          2248,
          2268
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 76
          },
          "start": {
            "column": 9,
            "line": 76
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 76
              },
              "start": {
                "column": 33,
                "line": 76
              }
            },
            "range": [
              2272,
              2297
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "range": [
                      2282,
                      2287
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 76
                      },
                      "start": {
                        "column": 43,
                        "line": 76
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "static",
                    "optional": false,
                    "range": [
                      2288,
                      2294
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 76
                      },
                      "start": {
                        "column": 49,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    2282,
                    2294
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 76
                    },
                    "start": {
                      "column": 43,
                      "line": 76
                    }
                  }
                },
                "range": [
                  2275,
                  2294
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 76
                  },
                  "start": {
                    "column": 36,
                    "line": 76
                  }
                }
              },
              "range": [
                2274,
                2297
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 76
                },
                "start": {
                  "column": 35,
                  "line": 76
                }
              }
            }
          },
          "range": [
            2269,
            2297
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 76
            },
            "start": {
              "column": 30,
              "line": 76
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 76
          },
          "start": {
            "column": 59,
            "line": 76
          }
        },
        "range": [
          2298,
          2308
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "range": [
                2300,
                2306
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 76
                },
                "start": {
                  "column": 61,
                  "line": 76
                }
              }
            },
            "range": [
              2300,
              2306
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 76
              },
              "start": {
                "column": 61,
                "line": 76
              }
            }
          },
          "range": [
            2300,
            2308
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 76
            },
            "start": {
              "column": 61,
              "line": 76
            }
          }
        }
      },
      "range": [
        2239,
        2338
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2340,
        2418
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Evaluate",
          "optional": false,
          "range": [
            2352,
            2360
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 80
            },
            "start": {
              "column": 12,
              "line": 80
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
                2366,
                2367
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 80
                },
                "start": {
                  "column": 26,
                  "line": 80
                }
              }
            },
            "range": [
              2366,
              2367
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 80
              },
              "start": {
                "column": 26,
                "line": 80
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
                "name": "O",
                "optional": false,
                "range": [
                  2382,
                  2383
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 80
                  },
                  "start": {
                    "column": 42,
                    "line": 80
                  }
                }
              },
              "out": false,
              "range": [
                2382,
                2383
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 80
                },
                "start": {
                  "column": 42,
                  "line": 80
                }
              }
            },
            "range": [
              2376,
              2383
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 80
              },
              "start": {
                "column": 36,
                "line": 80
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              2413,
              2418
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 80
              },
              "start": {
                "column": 73,
                "line": 80
              }
            }
          },
          "trueType": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "range": [
                    2400,
                    2401
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 80
                    },
                    "start": {
                      "column": 60,
                      "line": 80
                    }
                  }
                },
                "range": [
                  2400,
                  2401
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 80
                  },
                  "start": {
                    "column": 60,
                    "line": 80
                  }
                }
              },
              "range": [
                2394,
                2401
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 80
                },
                "start": {
                  "column": 54,
                  "line": 80
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                2389,
                2390
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 80
                },
                "start": {
                  "column": 49,
                  "line": 80
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
                  "name": "K",
                  "optional": false,
                  "range": [
                    2406,
                    2407
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 80
                    },
                    "start": {
                      "column": 66,
                      "line": 80
                    }
                  }
                },
                "range": [
                  2406,
                  2407
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 80
                  },
                  "start": {
                    "column": 66,
                    "line": 80
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "range": [
                    2404,
                    2405
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 80
                    },
                    "start": {
                      "column": 64,
                      "line": 80
                    }
                  }
                },
                "range": [
                  2404,
                  2405
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 80
                  },
                  "start": {
                    "column": 64,
                    "line": 80
                  }
                }
              },
              "range": [
                2404,
                2408
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 80
                },
                "start": {
                  "column": 64,
                  "line": 80
                }
              }
            },
            "range": [
              2386,
              2410
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 80
              },
              "start": {
                "column": 46,
                "line": 80
              }
            }
          },
          "range": [
            2366,
            2418
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 80
            },
            "start": {
              "column": 26,
              "line": 80
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 23,
              "line": 80
            },
            "start": {
              "column": 20,
              "line": 80
            }
          },
          "range": [
            2360,
            2363
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
                  2361,
                  2362
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 80
                  },
                  "start": {
                    "column": 21,
                    "line": 80
                  }
                }
              },
              "out": false,
              "range": [
                2361,
                2362
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 80
                },
                "start": {
                  "column": 21,
                  "line": 80
                }
              }
            }
          ]
        },
        "range": [
          2347,
          2418
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 80
          },
          "start": {
            "column": 7,
            "line": 80
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 78,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2420,
        2465
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 82
                  },
                  "start": {
                    "column": 29,
                    "line": 82
                  }
                },
                "range": [
                  2449,
                  2464
                ],
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "range": [
                      2458,
                      2464
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 82
                      },
                      "start": {
                        "column": 38,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    2451,
                    2464
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 82
                    },
                    "start": {
                      "column": 31,
                      "line": 82
                    }
                  }
                }
              },
              "range": [
                2441,
                2464
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 82
                },
                "start": {
                  "column": 21,
                  "line": 82
                }
              }
            },
            "init": null,
            "range": [
              2441,
              2464
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 82
              },
              "start": {
                "column": 21,
                "line": 82
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          2427,
          2465
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 82
          },
          "start": {
            "column": 7,
            "line": 82
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 45,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2466,
        2511
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Optional",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 83
                  },
                  "start": {
                    "column": 29,
                    "line": 83
                  }
                },
                "range": [
                  2495,
                  2510
                ],
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "range": [
                      2504,
                      2510
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 83
                      },
                      "start": {
                        "column": 38,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    2497,
                    2510
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 83
                    },
                    "start": {
                      "column": 31,
                      "line": 83
                    }
                  }
                }
              },
              "range": [
                2487,
                2510
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 83
                },
                "start": {
                  "column": 21,
                  "line": 83
                }
              }
            },
            "init": null,
            "range": [
              2487,
              2510
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 83
              },
              "start": {
                "column": 21,
                "line": 83
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          2473,
          2511
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 83
          },
          "start": {
            "column": 7,
            "line": 83
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 45,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2512,
        2553
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Hint",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 84
                  },
                  "start": {
                    "column": 25,
                    "line": 84
                  }
                },
                "range": [
                  2537,
                  2552
                ],
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "range": [
                      2546,
                      2552
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 84
                      },
                      "start": {
                        "column": 34,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    2539,
                    2552
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 84
                    },
                    "start": {
                      "column": 27,
                      "line": 84
                    }
                  }
                }
              },
              "range": [
                2533,
                2552
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 84
                },
                "start": {
                  "column": 21,
                  "line": 84
                }
              }
            },
            "init": null,
            "range": [
              2533,
              2552
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 84
              },
              "start": {
                "column": 21,
                "line": 84
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          2519,
          2553
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 84
          },
          "start": {
            "column": 7,
            "line": 84
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 41,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2554,
        2595
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Kind",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 85
                  },
                  "start": {
                    "column": 25,
                    "line": 85
                  }
                },
                "range": [
                  2579,
                  2594
                ],
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "range": [
                      2588,
                      2594
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 85
                      },
                      "start": {
                        "column": 34,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    2581,
                    2594
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 85
                    },
                    "start": {
                      "column": 27,
                      "line": 85
                    }
                  }
                }
              },
              "range": [
                2575,
                2594
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 85
                },
                "start": {
                  "column": 21,
                  "line": 85
                }
              }
            },
            "init": null,
            "range": [
              2575,
              2594
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 85
              },
              "start": {
                "column": 21,
                "line": 85
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          2561,
          2595
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 85
          },
          "start": {
            "column": 7,
            "line": 85
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 41,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2597,
        2642
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            2620,
            2642
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "range": [
                  2627,
                  2631
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
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 88
                  },
                  "start": {
                    "column": 10,
                    "line": 88
                  }
                },
                "range": [
                  2632,
                  2640
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2634,
                    2640
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 88
                    },
                    "start": {
                      "column": 12,
                      "line": 88
                    }
                  }
                }
              },
              "range": [
                2626,
                2640
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 89
            },
            "start": {
              "column": 23,
              "line": 87
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TKind",
          "optional": false,
          "range": [
            2614,
            2619
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
        "range": [
          2604,
          2642
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 7,
            "line": 87
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2643,
        2795
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            2682,
            2795
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "range": [
                  2689,
                  2697
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 91
                  },
                  "start": {
                    "column": 5,
                    "line": 91
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 91
                  },
                  "start": {
                    "column": 15,
                    "line": 91
                  }
                },
                "range": [
                  2699,
                  2707
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2701,
                    2707
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 91
                    },
                    "start": {
                      "column": 17,
                      "line": 91
                    }
                  }
                }
              },
              "range": [
                2688,
                2707
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Optional",
                "optional": false,
                "range": [
                  2713,
                  2721
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 92
                  },
                  "start": {
                    "column": 5,
                    "line": 92
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 92
                  },
                  "start": {
                    "column": 15,
                    "line": 92
                  }
                },
                "range": [
                  2723,
                  2731
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2725,
                    2731
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 92
                    },
                    "start": {
                      "column": 17,
                      "line": 92
                    }
                  }
                }
              },
              "range": [
                2712,
                2731
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 92
                },
                "start": {
                  "column": 4,
                  "line": 92
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Hint",
                "optional": false,
                "range": [
                  2737,
                  2741
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 93
                  },
                  "start": {
                    "column": 5,
                    "line": 93
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 93
                  },
                  "start": {
                    "column": 11,
                    "line": 93
                  }
                },
                "range": [
                  2743,
                  2751
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2745,
                    2751
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 93
                    },
                    "start": {
                      "column": 13,
                      "line": 93
                    }
                  }
                }
              },
              "range": [
                2736,
                2751
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 93
                },
                "start": {
                  "column": 4,
                  "line": 93
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "range": [
                  2756,
                  2762
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
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
                    "column": 21,
                    "line": 94
                  },
                  "start": {
                    "column": 10,
                    "line": 94
                  }
                },
                "range": [
                  2762,
                  2773
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      2764,
                      2771
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 94
                      },
                      "start": {
                        "column": 12,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    2764,
                    2773
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 94
                    },
                    "start": {
                      "column": 12,
                      "line": 94
                    }
                  }
                }
              },
              "range": [
                2756,
                2773
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 94
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "range": [
                  2778,
                  2784
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 95
                  },
                  "start": {
                    "column": 4,
                    "line": 95
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
                    "column": 19,
                    "line": 95
                  },
                  "start": {
                    "column": 10,
                    "line": 95
                  }
                },
                "range": [
                  2784,
                  2793
                ],
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    2786,
                    2793
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 95
                    },
                    "start": {
                      "column": 12,
                      "line": 95
                    }
                  }
                }
              },
              "range": [
                2778,
                2793
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 95
                },
                "start": {
                  "column": 4,
                  "line": 95
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 96
            },
            "start": {
              "column": 39,
              "line": 90
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
              "name": "TKind",
              "optional": false,
              "range": [
                2676,
                2681
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 90
                },
                "start": {
                  "column": 33,
                  "line": 90
                }
              }
            },
            "range": [
              2676,
              2681
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 90
              },
              "start": {
                "column": 33,
                "line": 90
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TSchema",
          "optional": false,
          "range": [
            2660,
            2667
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 90
            },
            "start": {
              "column": 17,
              "line": 90
            }
          }
        },
        "range": [
          2650,
          2795
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 7,
            "line": 90
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2797,
        2875
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TReadonlyOptional",
          "optional": false,
          "range": [
            2809,
            2826
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 98
            },
            "start": {
              "column": 12,
              "line": 98
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2857,
                  2860
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
                        2858,
                        2859
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 98
                        },
                        "start": {
                          "column": 61,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2858,
                      2859
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 98
                      },
                      "start": {
                        "column": 61,
                        "line": 98
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 98
                  },
                  "start": {
                    "column": 60,
                    "line": 98
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TOptional",
                "optional": false,
                "range": [
                  2848,
                  2857
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 98
                  },
                  "start": {
                    "column": 51,
                    "line": 98
                  }
                }
              },
              "range": [
                2848,
                2860
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 98
                },
                "start": {
                  "column": 51,
                  "line": 98
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2872,
                  2875
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
                        2873,
                        2874
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
                      2873,
                      2874
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
                  }
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 98
                  },
                  "start": {
                    "column": 75,
                    "line": 98
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TReadonly",
                "optional": false,
                "range": [
                  2863,
                  2872
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 98
                  },
                  "start": {
                    "column": 66,
                    "line": 98
                  }
                }
              },
              "range": [
                2863,
                2875
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 98
                },
                "start": {
                  "column": 66,
                  "line": 98
                }
              }
            }
          ],
          "range": [
            2848,
            2875
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 98
            },
            "start": {
              "column": 51,
              "line": 98
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 48,
              "line": 98
            },
            "start": {
              "column": 29,
              "line": 98
            }
          },
          "range": [
            2826,
            2845
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
                  "name": "TSchema",
                  "optional": false,
                  "range": [
                    2837,
                    2844
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 98
                    },
                    "start": {
                      "column": 40,
                      "line": 98
                    }
                  }
                },
                "range": [
                  2837,
                  2844
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 98
                  },
                  "start": {
                    "column": 40,
                    "line": 98
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
                  2827,
                  2828
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 98
                  },
                  "start": {
                    "column": 30,
                    "line": 98
                  }
                }
              },
              "out": false,
              "range": [
                2827,
                2844
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 98
                },
                "start": {
                  "column": 30,
                  "line": 98
                }
              }
            }
          ]
        },
        "range": [
          2804,
          2875
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 98
          },
          "start": {
            "column": 7,
            "line": 98
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 78,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2876,
        2949
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TReadonly",
          "optional": false,
          "range": [
            2888,
            2897
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 99
            },
            "start": {
              "column": 12,
              "line": 99
            }
          }
        },
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
                  2919,
                  2920
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 99
                  },
                  "start": {
                    "column": 43,
                    "line": 99
                  }
                }
              },
              "range": [
                2919,
                2920
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 99
                },
                "start": {
                  "column": 43,
                  "line": 99
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Readonly",
                    "optional": false,
                    "range": [
                      2926,
                      2934
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 99
                      },
                      "start": {
                        "column": 50,
                        "line": 99
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
                        "column": 71,
                        "line": 99
                      },
                      "start": {
                        "column": 59,
                        "line": 99
                      }
                    },
                    "range": [
                      2935,
                      2947
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'Readonly'",
                        "value": "Readonly",
                        "range": [
                          2937,
                          2947
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 99
                          },
                          "start": {
                            "column": 61,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        2937,
                        2947
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 99
                        },
                        "start": {
                          "column": 61,
                          "line": 99
                        }
                      }
                    }
                  },
                  "range": [
                    2925,
                    2947
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 99
                    },
                    "start": {
                      "column": 49,
                      "line": 99
                    }
                  }
                }
              ],
              "range": [
                2923,
                2949
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 99
                },
                "start": {
                  "column": 47,
                  "line": 99
                }
              }
            }
          ],
          "range": [
            2919,
            2949
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 99
            },
            "start": {
              "column": 43,
              "line": 99
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 40,
              "line": 99
            },
            "start": {
              "column": 21,
              "line": 99
            }
          },
          "range": [
            2897,
            2916
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
                  "name": "TSchema",
                  "optional": false,
                  "range": [
                    2908,
                    2915
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 99
                    },
                    "start": {
                      "column": 32,
                      "line": 99
                    }
                  }
                },
                "range": [
                  2908,
                  2915
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 99
                  },
                  "start": {
                    "column": 32,
                    "line": 99
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
                  2898,
                  2899
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 99
                  },
                  "start": {
                    "column": 22,
                    "line": 99
                  }
                }
              },
              "out": false,
              "range": [
                2898,
                2915
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 99
                },
                "start": {
                  "column": 22,
                  "line": 99
                }
              }
            }
          ]
        },
        "range": [
          2883,
          2949
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 99
          },
          "start": {
            "column": 7,
            "line": 99
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 73,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2950,
        3023
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TOptional",
          "optional": false,
          "range": [
            2962,
            2971
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 100
            },
            "start": {
              "column": 12,
              "line": 100
            }
          }
        },
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
                  2993,
                  2994
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 100
                  },
                  "start": {
                    "column": 43,
                    "line": 100
                  }
                }
              },
              "range": [
                2993,
                2994
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 100
                },
                "start": {
                  "column": 43,
                  "line": 100
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "range": [
                      3000,
                      3008
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 100
                      },
                      "start": {
                        "column": 50,
                        "line": 100
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
                        "column": 71,
                        "line": 100
                      },
                      "start": {
                        "column": 59,
                        "line": 100
                      }
                    },
                    "range": [
                      3009,
                      3021
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'Optional'",
                        "value": "Optional",
                        "range": [
                          3011,
                          3021
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 100
                          },
                          "start": {
                            "column": 61,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        3011,
                        3021
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 100
                        },
                        "start": {
                          "column": 61,
                          "line": 100
                        }
                      }
                    }
                  },
                  "range": [
                    2999,
                    3021
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 100
                    },
                    "start": {
                      "column": 49,
                      "line": 100
                    }
                  }
                }
              ],
              "range": [
                2997,
                3023
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 100
                },
                "start": {
                  "column": 47,
                  "line": 100
                }
              }
            }
          ],
          "range": [
            2993,
            3023
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 100
            },
            "start": {
              "column": 43,
              "line": 100
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 40,
              "line": 100
            },
            "start": {
              "column": 21,
              "line": 100
            }
          },
          "range": [
            2971,
            2990
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
                  "name": "TSchema",
                  "optional": false,
                  "range": [
                    2982,
                    2989
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 100
                    },
                    "start": {
                      "column": 32,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2982,
                  2989
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 100
                  },
                  "start": {
                    "column": 32,
                    "line": 100
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
                  2972,
                  2973
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 100
                  },
                  "start": {
                    "column": 22,
                    "line": 100
                  }
                }
              },
              "out": false,
              "range": [
                2972,
                2989
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 100
                },
                "start": {
                  "column": 22,
                  "line": 100
                }
              }
            }
          ]
        },
        "range": [
          2957,
          3023
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 100
          },
          "start": {
            "column": 7,
            "line": 100
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 73,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3025,
        3131
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            3066,
            3131
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "range": [
                  3073,
                  3077
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 103
                  },
                  "start": {
                    "column": 5,
                    "line": 103
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
                    "column": 20,
                    "line": 103
                  },
                  "start": {
                    "column": 10,
                    "line": 103
                  }
                },
                "range": [
                  3078,
                  3088
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'String'",
                    "value": "String",
                    "range": [
                      3080,
                      3088
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 103
                      },
                      "start": {
                        "column": 12,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    3080,
                    3088
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 103
                    },
                    "start": {
                      "column": 12,
                      "line": 103
                    }
                  }
                }
              },
              "range": [
                3072,
                3089
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "range": [
                  3094,
                  3100
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 104
                  },
                  "start": {
                    "column": 4,
                    "line": 104
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
                    "line": 104
                  },
                  "start": {
                    "column": 10,
                    "line": 104
                  }
                },
                "range": [
                  3100,
                  3108
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    3102,
                    3108
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 104
                    },
                    "start": {
                      "column": 12,
                      "line": 104
                    }
                  }
                }
              },
              "range": [
                3094,
                3109
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "range": [
                  3114,
                  3118
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 105
                  },
                  "start": {
                    "column": 4,
                    "line": 105
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
                    "line": 105
                  },
                  "start": {
                    "column": 8,
                    "line": 105
                  }
                },
                "range": [
                  3118,
                  3128
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'string'",
                    "value": "string",
                    "range": [
                      3120,
                      3128
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 105
                      },
                      "start": {
                        "column": 10,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    3120,
                    3128
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 105
                    },
                    "start": {
                      "column": 10,
                      "line": 105
                    }
                  }
                }
              },
              "range": [
                3114,
                3129
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 106
            },
            "start": {
              "column": 41,
              "line": 102
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
              "name": "TSchema",
              "optional": false,
              "range": [
                3058,
                3065
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 102
                },
                "start": {
                  "column": 33,
                  "line": 102
                }
              }
            },
            "range": [
              3058,
              3065
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 102
              },
              "start": {
                "column": 33,
                "line": 102
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TString",
          "optional": false,
          "range": [
            3042,
            3049
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 102
            },
            "start": {
              "column": 17,
              "line": 102
            }
          }
        },
        "range": [
          3032,
          3131
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 7,
            "line": 102
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3133,
        3312
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyOptionalPropertyKeys",
          "optional": false,
          "range": [
            3145,
            3173
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 108
            },
            "start": {
              "column": 12,
              "line": 108
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
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
                  3310,
                  3311
                ],
                "loc": {
                  "end": {
                    "column": 178,
                    "line": 108
                  },
                  "start": {
                    "column": 177,
                    "line": 108
                  }
                }
              },
              "range": [
                3310,
                3311
              ],
              "loc": {
                "end": {
                  "column": 178,
                  "line": 108
                },
                "start": {
                  "column": 177,
                  "line": 108
                }
              }
            },
            "range": [
              3304,
              3311
            ],
            "loc": {
              "end": {
                "column": 178,
                "line": 108
              },
              "start": {
                "column": 171,
                "line": 108
              }
            }
          },
          "objectType": {
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
                    3213,
                    3214
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 108
                    },
                    "start": {
                      "column": 80,
                      "line": 108
                    }
                  }
                },
                "range": [
                  3213,
                  3214
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 108
                  },
                  "start": {
                    "column": 80,
                    "line": 108
                  }
                }
              },
              "range": [
                3207,
                3214
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 108
                },
                "start": {
                  "column": 74,
                  "line": 108
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                3202,
                3203
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 108
                },
                "start": {
                  "column": 69,
                  "line": 108
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      3219,
                      3220
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 108
                      },
                      "start": {
                        "column": 86,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    3219,
                    3220
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 108
                    },
                    "start": {
                      "column": 86,
                      "line": 108
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
                      3217,
                      3218
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 108
                      },
                      "start": {
                        "column": 84,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    3217,
                    3218
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 108
                    },
                    "start": {
                      "column": 84,
                      "line": 108
                    }
                  }
                },
                "range": [
                  3217,
                  3221
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 108
                  },
                  "start": {
                    "column": 84,
                    "line": 108
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3239,
                    3248
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "range": [
                          3240,
                          3247
                        ],
                        "loc": {
                          "end": {
                            "column": 114,
                            "line": 108
                          },
                          "start": {
                            "column": 107,
                            "line": 108
                          }
                        }
                      },
                      "range": [
                        3240,
                        3247
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 108
                        },
                        "start": {
                          "column": 107,
                          "line": 108
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 108
                    },
                    "start": {
                      "column": 106,
                      "line": 108
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TReadonly",
                  "optional": false,
                  "range": [
                    3230,
                    3239
                  ],
                  "loc": {
                    "end": {
                      "column": 106,
                      "line": 108
                    },
                    "start": {
                      "column": 97,
                      "line": 108
                    }
                  }
                },
                "range": [
                  3230,
                  3248
                ],
                "loc": {
                  "end": {
                    "column": 115,
                    "line": 108
                  },
                  "start": {
                    "column": 97,
                    "line": 108
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  3296,
                  3301
                ],
                "loc": {
                  "end": {
                    "column": 168,
                    "line": 108
                  },
                  "start": {
                    "column": 163,
                    "line": 108
                  }
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3254,
                        3255
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 108
                        },
                        "start": {
                          "column": 121,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      3254,
                      3255
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 108
                      },
                      "start": {
                        "column": 121,
                        "line": 108
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
                        3252,
                        3253
                      ],
                      "loc": {
                        "end": {
                          "column": 120,
                          "line": 108
                        },
                        "start": {
                          "column": 119,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      3252,
                      3253
                    ],
                    "loc": {
                      "end": {
                        "column": 120,
                        "line": 108
                      },
                      "start": {
                        "column": 119,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    3252,
                    3256
                  ],
                  "loc": {
                    "end": {
                      "column": 123,
                      "line": 108
                    },
                    "start": {
                      "column": 119,
                      "line": 108
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3274,
                      3280
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
                              3277,
                              3278
                            ],
                            "loc": {
                              "end": {
                                "column": 145,
                                "line": 108
                              },
                              "start": {
                                "column": 144,
                                "line": 108
                              }
                            }
                          },
                          "range": [
                            3277,
                            3278
                          ],
                          "loc": {
                            "end": {
                              "column": 145,
                              "line": 108
                            },
                            "start": {
                              "column": 144,
                              "line": 108
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
                              3275,
                              3276
                            ],
                            "loc": {
                              "end": {
                                "column": 143,
                                "line": 108
                              },
                              "start": {
                                "column": 142,
                                "line": 108
                              }
                            }
                          },
                          "range": [
                            3275,
                            3276
                          ],
                          "loc": {
                            "end": {
                              "column": 143,
                              "line": 108
                            },
                            "start": {
                              "column": 142,
                              "line": 108
                            }
                          }
                        },
                        "range": [
                          3275,
                          3279
                        ],
                        "loc": {
                          "end": {
                            "column": 146,
                            "line": 108
                          },
                          "start": {
                            "column": 142,
                            "line": 108
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 147,
                        "line": 108
                      },
                      "start": {
                        "column": 141,
                        "line": 108
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOptional",
                    "optional": false,
                    "range": [
                      3265,
                      3274
                    ],
                    "loc": {
                      "end": {
                        "column": 141,
                        "line": 108
                      },
                      "start": {
                        "column": 132,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    3265,
                    3280
                  ],
                  "loc": {
                    "end": {
                      "column": 147,
                      "line": 108
                    },
                    "start": {
                      "column": 132,
                      "line": 108
                    }
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    3287,
                    3292
                  ],
                  "loc": {
                    "end": {
                      "column": 159,
                      "line": 108
                    },
                    "start": {
                      "column": 154,
                      "line": 108
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      3283,
                      3284
                    ],
                    "loc": {
                      "end": {
                        "column": 151,
                        "line": 108
                      },
                      "start": {
                        "column": 150,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    3283,
                    3284
                  ],
                  "loc": {
                    "end": {
                      "column": 151,
                      "line": 108
                    },
                    "start": {
                      "column": 150,
                      "line": 108
                    }
                  }
                },
                "range": [
                  3252,
                  3292
                ],
                "loc": {
                  "end": {
                    "column": 159,
                    "line": 108
                  },
                  "start": {
                    "column": 119,
                    "line": 108
                  }
                }
              },
              "range": [
                3217,
                3301
              ],
              "loc": {
                "end": {
                  "column": 168,
                  "line": 108
                },
                "start": {
                  "column": 84,
                  "line": 108
                }
              }
            },
            "range": [
              3199,
              3303
            ],
            "loc": {
              "end": {
                "column": 170,
                "line": 108
              },
              "start": {
                "column": 66,
                "line": 108
              }
            }
          },
          "range": [
            3199,
            3312
          ],
          "loc": {
            "end": {
              "column": 179,
              "line": 108
            },
            "start": {
              "column": 66,
              "line": 108
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 63,
              "line": 108
            },
            "start": {
              "column": 40,
              "line": 108
            }
          },
          "range": [
            3173,
            3196
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
                  "name": "TProperties",
                  "optional": false,
                  "range": [
                    3184,
                    3195
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 108
                    },
                    "start": {
                      "column": 51,
                      "line": 108
                    }
                  }
                },
                "range": [
                  3184,
                  3195
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 108
                  },
                  "start": {
                    "column": 51,
                    "line": 108
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
                  3174,
                  3175
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 108
                  },
                  "start": {
                    "column": 41,
                    "line": 108
                  }
                }
              },
              "out": false,
              "range": [
                3174,
                3195
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 108
                },
                "start": {
                  "column": 41,
                  "line": 108
                }
              }
            }
          ]
        },
        "range": [
          3140,
          3312
        ],
        "loc": {
          "end": {
            "column": 179,
            "line": 108
          },
          "start": {
            "column": 7,
            "line": 108
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 179,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 108
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3313,
        3484
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyPropertyKeys",
          "optional": false,
          "range": [
            3325,
            3345
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 109
            },
            "start": {
              "column": 12,
              "line": 109
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
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
                  3482,
                  3483
                ],
                "loc": {
                  "end": {
                    "column": 170,
                    "line": 109
                  },
                  "start": {
                    "column": 169,
                    "line": 109
                  }
                }
              },
              "range": [
                3482,
                3483
              ],
              "loc": {
                "end": {
                  "column": 170,
                  "line": 109
                },
                "start": {
                  "column": 169,
                  "line": 109
                }
              }
            },
            "range": [
              3476,
              3483
            ],
            "loc": {
              "end": {
                "column": 170,
                "line": 109
              },
              "start": {
                "column": 163,
                "line": 109
              }
            }
          },
          "objectType": {
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
                    3385,
                    3386
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 109
                    },
                    "start": {
                      "column": 72,
                      "line": 109
                    }
                  }
                },
                "range": [
                  3385,
                  3386
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 109
                  },
                  "start": {
                    "column": 72,
                    "line": 109
                  }
                }
              },
              "range": [
                3379,
                3386
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 109
                },
                "start": {
                  "column": 66,
                  "line": 109
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                3374,
                3375
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 109
                },
                "start": {
                  "column": 61,
                  "line": 109
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      3391,
                      3392
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 109
                      },
                      "start": {
                        "column": 78,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    3391,
                    3392
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 109
                    },
                    "start": {
                      "column": 78,
                      "line": 109
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
                      3389,
                      3390
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 109
                      },
                      "start": {
                        "column": 76,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    3389,
                    3390
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 109
                    },
                    "start": {
                      "column": 76,
                      "line": 109
                    }
                  }
                },
                "range": [
                  3389,
                  3393
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 109
                  },
                  "start": {
                    "column": 76,
                    "line": 109
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3411,
                    3420
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "range": [
                          3412,
                          3419
                        ],
                        "loc": {
                          "end": {
                            "column": 106,
                            "line": 109
                          },
                          "start": {
                            "column": 99,
                            "line": 109
                          }
                        }
                      },
                      "range": [
                        3412,
                        3419
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 109
                        },
                        "start": {
                          "column": 99,
                          "line": 109
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 109
                    },
                    "start": {
                      "column": 98,
                      "line": 109
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TReadonly",
                  "optional": false,
                  "range": [
                    3402,
                    3411
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 109
                    },
                    "start": {
                      "column": 89,
                      "line": 109
                    }
                  }
                },
                "range": [
                  3402,
                  3420
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 109
                  },
                  "start": {
                    "column": 89,
                    "line": 109
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  3468,
                  3473
                ],
                "loc": {
                  "end": {
                    "column": 160,
                    "line": 109
                  },
                  "start": {
                    "column": 155,
                    "line": 109
                  }
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3426,
                        3427
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 109
                        },
                        "start": {
                          "column": 113,
                          "line": 109
                        }
                      }
                    },
                    "range": [
                      3426,
                      3427
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 109
                      },
                      "start": {
                        "column": 113,
                        "line": 109
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
                        3424,
                        3425
                      ],
                      "loc": {
                        "end": {
                          "column": 112,
                          "line": 109
                        },
                        "start": {
                          "column": 111,
                          "line": 109
                        }
                      }
                    },
                    "range": [
                      3424,
                      3425
                    ],
                    "loc": {
                      "end": {
                        "column": 112,
                        "line": 109
                      },
                      "start": {
                        "column": 111,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    3424,
                    3428
                  ],
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 109
                    },
                    "start": {
                      "column": 111,
                      "line": 109
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3446,
                      3452
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
                              3449,
                              3450
                            ],
                            "loc": {
                              "end": {
                                "column": 137,
                                "line": 109
                              },
                              "start": {
                                "column": 136,
                                "line": 109
                              }
                            }
                          },
                          "range": [
                            3449,
                            3450
                          ],
                          "loc": {
                            "end": {
                              "column": 137,
                              "line": 109
                            },
                            "start": {
                              "column": 136,
                              "line": 109
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
                              3447,
                              3448
                            ],
                            "loc": {
                              "end": {
                                "column": 135,
                                "line": 109
                              },
                              "start": {
                                "column": 134,
                                "line": 109
                              }
                            }
                          },
                          "range": [
                            3447,
                            3448
                          ],
                          "loc": {
                            "end": {
                              "column": 135,
                              "line": 109
                            },
                            "start": {
                              "column": 134,
                              "line": 109
                            }
                          }
                        },
                        "range": [
                          3447,
                          3451
                        ],
                        "loc": {
                          "end": {
                            "column": 138,
                            "line": 109
                          },
                          "start": {
                            "column": 134,
                            "line": 109
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 139,
                        "line": 109
                      },
                      "start": {
                        "column": 133,
                        "line": 109
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOptional",
                    "optional": false,
                    "range": [
                      3437,
                      3446
                    ],
                    "loc": {
                      "end": {
                        "column": 133,
                        "line": 109
                      },
                      "start": {
                        "column": 124,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    3437,
                    3452
                  ],
                  "loc": {
                    "end": {
                      "column": 139,
                      "line": 109
                    },
                    "start": {
                      "column": 124,
                      "line": 109
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
                      3463,
                      3464
                    ],
                    "loc": {
                      "end": {
                        "column": 151,
                        "line": 109
                      },
                      "start": {
                        "column": 150,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    3463,
                    3464
                  ],
                  "loc": {
                    "end": {
                      "column": 151,
                      "line": 109
                    },
                    "start": {
                      "column": 150,
                      "line": 109
                    }
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    3455,
                    3460
                  ],
                  "loc": {
                    "end": {
                      "column": 147,
                      "line": 109
                    },
                    "start": {
                      "column": 142,
                      "line": 109
                    }
                  }
                },
                "range": [
                  3424,
                  3464
                ],
                "loc": {
                  "end": {
                    "column": 151,
                    "line": 109
                  },
                  "start": {
                    "column": 111,
                    "line": 109
                  }
                }
              },
              "range": [
                3389,
                3473
              ],
              "loc": {
                "end": {
                  "column": 160,
                  "line": 109
                },
                "start": {
                  "column": 76,
                  "line": 109
                }
              }
            },
            "range": [
              3371,
              3475
            ],
            "loc": {
              "end": {
                "column": 162,
                "line": 109
              },
              "start": {
                "column": 58,
                "line": 109
              }
            }
          },
          "range": [
            3371,
            3484
          ],
          "loc": {
            "end": {
              "column": 171,
              "line": 109
            },
            "start": {
              "column": 58,
              "line": 109
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 55,
              "line": 109
            },
            "start": {
              "column": 32,
              "line": 109
            }
          },
          "range": [
            3345,
            3368
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
                  "name": "TProperties",
                  "optional": false,
                  "range": [
                    3356,
                    3367
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 109
                    },
                    "start": {
                      "column": 43,
                      "line": 109
                    }
                  }
                },
                "range": [
                  3356,
                  3367
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 109
                  },
                  "start": {
                    "column": 43,
                    "line": 109
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
                  3346,
                  3347
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 109
                  },
                  "start": {
                    "column": 33,
                    "line": 109
                  }
                }
              },
              "out": false,
              "range": [
                3346,
                3367
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 109
                },
                "start": {
                  "column": 33,
                  "line": 109
                }
              }
            }
          ]
        },
        "range": [
          3320,
          3484
        ],
        "loc": {
          "end": {
            "column": 171,
            "line": 109
          },
          "start": {
            "column": 7,
            "line": 109
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 171,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3485,
        3656
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropertyKeys",
          "optional": false,
          "range": [
            3497,
            3517
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 110
            },
            "start": {
              "column": 12,
              "line": 110
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
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
                  3654,
                  3655
                ],
                "loc": {
                  "end": {
                    "column": 170,
                    "line": 110
                  },
                  "start": {
                    "column": 169,
                    "line": 110
                  }
                }
              },
              "range": [
                3654,
                3655
              ],
              "loc": {
                "end": {
                  "column": 170,
                  "line": 110
                },
                "start": {
                  "column": 169,
                  "line": 110
                }
              }
            },
            "range": [
              3648,
              3655
            ],
            "loc": {
              "end": {
                "column": 170,
                "line": 110
              },
              "start": {
                "column": 163,
                "line": 110
              }
            }
          },
          "objectType": {
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
                    3557,
                    3558
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 110
                    },
                    "start": {
                      "column": 72,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3557,
                  3558
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 110
                  },
                  "start": {
                    "column": 72,
                    "line": 110
                  }
                }
              },
              "range": [
                3551,
                3558
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 110
                },
                "start": {
                  "column": 66,
                  "line": 110
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                3546,
                3547
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 110
                },
                "start": {
                  "column": 61,
                  "line": 110
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      3563,
                      3564
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 110
                      },
                      "start": {
                        "column": 78,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    3563,
                    3564
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 110
                    },
                    "start": {
                      "column": 78,
                      "line": 110
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
                      3561,
                      3562
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 110
                      },
                      "start": {
                        "column": 76,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    3561,
                    3562
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 110
                    },
                    "start": {
                      "column": 76,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3561,
                  3565
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 110
                  },
                  "start": {
                    "column": 76,
                    "line": 110
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3583,
                    3592
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "range": [
                          3584,
                          3591
                        ],
                        "loc": {
                          "end": {
                            "column": 106,
                            "line": 110
                          },
                          "start": {
                            "column": 99,
                            "line": 110
                          }
                        }
                      },
                      "range": [
                        3584,
                        3591
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 110
                        },
                        "start": {
                          "column": 99,
                          "line": 110
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 110
                    },
                    "start": {
                      "column": 98,
                      "line": 110
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TOptional",
                  "optional": false,
                  "range": [
                    3574,
                    3583
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 110
                    },
                    "start": {
                      "column": 89,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3574,
                  3592
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 110
                  },
                  "start": {
                    "column": 89,
                    "line": 110
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  3640,
                  3645
                ],
                "loc": {
                  "end": {
                    "column": 160,
                    "line": 110
                  },
                  "start": {
                    "column": 155,
                    "line": 110
                  }
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3598,
                        3599
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 110
                        },
                        "start": {
                          "column": 113,
                          "line": 110
                        }
                      }
                    },
                    "range": [
                      3598,
                      3599
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 110
                      },
                      "start": {
                        "column": 113,
                        "line": 110
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
                        3596,
                        3597
                      ],
                      "loc": {
                        "end": {
                          "column": 112,
                          "line": 110
                        },
                        "start": {
                          "column": 111,
                          "line": 110
                        }
                      }
                    },
                    "range": [
                      3596,
                      3597
                    ],
                    "loc": {
                      "end": {
                        "column": 112,
                        "line": 110
                      },
                      "start": {
                        "column": 111,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    3596,
                    3600
                  ],
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 110
                    },
                    "start": {
                      "column": 111,
                      "line": 110
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3618,
                      3624
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
                              3621,
                              3622
                            ],
                            "loc": {
                              "end": {
                                "column": 137,
                                "line": 110
                              },
                              "start": {
                                "column": 136,
                                "line": 110
                              }
                            }
                          },
                          "range": [
                            3621,
                            3622
                          ],
                          "loc": {
                            "end": {
                              "column": 137,
                              "line": 110
                            },
                            "start": {
                              "column": 136,
                              "line": 110
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
                              3619,
                              3620
                            ],
                            "loc": {
                              "end": {
                                "column": 135,
                                "line": 110
                              },
                              "start": {
                                "column": 134,
                                "line": 110
                              }
                            }
                          },
                          "range": [
                            3619,
                            3620
                          ],
                          "loc": {
                            "end": {
                              "column": 135,
                              "line": 110
                            },
                            "start": {
                              "column": 134,
                              "line": 110
                            }
                          }
                        },
                        "range": [
                          3619,
                          3623
                        ],
                        "loc": {
                          "end": {
                            "column": 138,
                            "line": 110
                          },
                          "start": {
                            "column": 134,
                            "line": 110
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 139,
                        "line": 110
                      },
                      "start": {
                        "column": 133,
                        "line": 110
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TReadonly",
                    "optional": false,
                    "range": [
                      3609,
                      3618
                    ],
                    "loc": {
                      "end": {
                        "column": 133,
                        "line": 110
                      },
                      "start": {
                        "column": 124,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    3609,
                    3624
                  ],
                  "loc": {
                    "end": {
                      "column": 139,
                      "line": 110
                    },
                    "start": {
                      "column": 124,
                      "line": 110
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
                      3635,
                      3636
                    ],
                    "loc": {
                      "end": {
                        "column": 151,
                        "line": 110
                      },
                      "start": {
                        "column": 150,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    3635,
                    3636
                  ],
                  "loc": {
                    "end": {
                      "column": 151,
                      "line": 110
                    },
                    "start": {
                      "column": 150,
                      "line": 110
                    }
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    3627,
                    3632
                  ],
                  "loc": {
                    "end": {
                      "column": 147,
                      "line": 110
                    },
                    "start": {
                      "column": 142,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3596,
                  3636
                ],
                "loc": {
                  "end": {
                    "column": 151,
                    "line": 110
                  },
                  "start": {
                    "column": 111,
                    "line": 110
                  }
                }
              },
              "range": [
                3561,
                3645
              ],
              "loc": {
                "end": {
                  "column": 160,
                  "line": 110
                },
                "start": {
                  "column": 76,
                  "line": 110
                }
              }
            },
            "range": [
              3543,
              3647
            ],
            "loc": {
              "end": {
                "column": 162,
                "line": 110
              },
              "start": {
                "column": 58,
                "line": 110
              }
            }
          },
          "range": [
            3543,
            3656
          ],
          "loc": {
            "end": {
              "column": 171,
              "line": 110
            },
            "start": {
              "column": 58,
              "line": 110
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 55,
              "line": 110
            },
            "start": {
              "column": 32,
              "line": 110
            }
          },
          "range": [
            3517,
            3540
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
                  "name": "TProperties",
                  "optional": false,
                  "range": [
                    3528,
                    3539
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 110
                    },
                    "start": {
                      "column": 43,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3528,
                  3539
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 110
                  },
                  "start": {
                    "column": 43,
                    "line": 110
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
                  3518,
                  3519
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 110
                  },
                  "start": {
                    "column": 33,
                    "line": 110
                  }
                }
              },
              "out": false,
              "range": [
                3518,
                3539
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 110
                },
                "start": {
                  "column": 33,
                  "line": 110
                }
              }
            }
          ]
        },
        "range": [
          3492,
          3656
        ],
        "loc": {
          "end": {
            "column": 171,
            "line": 110
          },
          "start": {
            "column": 7,
            "line": 110
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 171,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 110
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3657,
        3813
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropertyKeys",
          "optional": false,
          "range": [
            3669,
            3689
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 111
            },
            "start": {
              "column": 12,
              "line": 111
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3725,
                3813
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
                      3726,
                      3727
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 111
                      },
                      "start": {
                        "column": 69,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    3726,
                    3727
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 111
                    },
                    "start": {
                      "column": 69,
                      "line": 111
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          3757,
                          3760
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
                                3758,
                                3759
                              ],
                              "loc": {
                                "end": {
                                  "column": 102,
                                  "line": 111
                                },
                                "start": {
                                  "column": 101,
                                  "line": 111
                                }
                              }
                            },
                            "range": [
                              3758,
                              3759
                            ],
                            "loc": {
                              "end": {
                                "column": 102,
                                "line": 111
                              },
                              "start": {
                                "column": 101,
                                "line": 111
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 103,
                            "line": 111
                          },
                          "start": {
                            "column": 100,
                            "line": 111
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyOptionalPropertyKeys",
                        "optional": false,
                        "range": [
                          3729,
                          3757
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 111
                          },
                          "start": {
                            "column": 72,
                            "line": 111
                          }
                        }
                      },
                      "range": [
                        3729,
                        3760
                      ],
                      "loc": {
                        "end": {
                          "column": 103,
                          "line": 111
                        },
                        "start": {
                          "column": 72,
                          "line": 111
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          3783,
                          3786
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
                                3784,
                                3785
                              ],
                              "loc": {
                                "end": {
                                  "column": 128,
                                  "line": 111
                                },
                                "start": {
                                  "column": 127,
                                  "line": 111
                                }
                              }
                            },
                            "range": [
                              3784,
                              3785
                            ],
                            "loc": {
                              "end": {
                                "column": 128,
                                "line": 111
                              },
                              "start": {
                                "column": 127,
                                "line": 111
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 129,
                            "line": 111
                          },
                          "start": {
                            "column": 126,
                            "line": 111
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyPropertyKeys",
                        "optional": false,
                        "range": [
                          3763,
                          3783
                        ],
                        "loc": {
                          "end": {
                            "column": 126,
                            "line": 111
                          },
                          "start": {
                            "column": 106,
                            "line": 111
                          }
                        }
                      },
                      "range": [
                        3763,
                        3786
                      ],
                      "loc": {
                        "end": {
                          "column": 129,
                          "line": 111
                        },
                        "start": {
                          "column": 106,
                          "line": 111
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          3809,
                          3812
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
                                3810,
                                3811
                              ],
                              "loc": {
                                "end": {
                                  "column": 154,
                                  "line": 111
                                },
                                "start": {
                                  "column": 153,
                                  "line": 111
                                }
                              }
                            },
                            "range": [
                              3810,
                              3811
                            ],
                            "loc": {
                              "end": {
                                "column": 154,
                                "line": 111
                              },
                              "start": {
                                "column": 153,
                                "line": 111
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 155,
                            "line": 111
                          },
                          "start": {
                            "column": 152,
                            "line": 111
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OptionalPropertyKeys",
                        "optional": false,
                        "range": [
                          3789,
                          3809
                        ],
                        "loc": {
                          "end": {
                            "column": 152,
                            "line": 111
                          },
                          "start": {
                            "column": 132,
                            "line": 111
                          }
                        }
                      },
                      "range": [
                        3789,
                        3812
                      ],
                      "loc": {
                        "end": {
                          "column": 155,
                          "line": 111
                        },
                        "start": {
                          "column": 132,
                          "line": 111
                        }
                      }
                    }
                  ],
                  "range": [
                    3729,
                    3812
                  ],
                  "loc": {
                    "end": {
                      "column": 155,
                      "line": 111
                    },
                    "start": {
                      "column": 72,
                      "line": 111
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 156,
                  "line": 111
                },
                "start": {
                  "column": 68,
                  "line": 111
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "range": [
                3721,
                3725
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 111
                },
                "start": {
                  "column": 64,
                  "line": 111
                }
              }
            },
            "range": [
              3721,
              3813
            ],
            "loc": {
              "end": {
                "column": 156,
                "line": 111
              },
              "start": {
                "column": 64,
                "line": 111
              }
            }
          },
          "range": [
            3715,
            3813
          ],
          "loc": {
            "end": {
              "column": 156,
              "line": 111
            },
            "start": {
              "column": 58,
              "line": 111
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 55,
              "line": 111
            },
            "start": {
              "column": 32,
              "line": 111
            }
          },
          "range": [
            3689,
            3712
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
                  "name": "TProperties",
                  "optional": false,
                  "range": [
                    3700,
                    3711
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 111
                    },
                    "start": {
                      "column": 43,
                      "line": 111
                    }
                  }
                },
                "range": [
                  3700,
                  3711
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 111
                  },
                  "start": {
                    "column": 43,
                    "line": 111
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
                  3690,
                  3691
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 111
                  },
                  "start": {
                    "column": 33,
                    "line": 111
                  }
                }
              },
              "out": false,
              "range": [
                3690,
                3711
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 111
                },
                "start": {
                  "column": 33,
                  "line": 111
                }
              }
            }
          ]
        },
        "range": [
          3664,
          3813
        ],
        "loc": {
          "end": {
            "column": 156,
            "line": 111
          },
          "start": {
            "column": 7,
            "line": 111
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 156,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3814,
        4130
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesReducer",
          "optional": false,
          "range": [
            3826,
            3843
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 112
            },
            "start": {
              "column": 12,
              "line": 112
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3915,
              4130
            ],
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3930,
                        3981
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              3938,
                              3980
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    3943,
                                    3979
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
                                          3944,
                                          3945
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 113
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 113
                                          }
                                        }
                                      },
                                      "range": [
                                        3944,
                                        3945
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 113
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 113
                                        }
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          3975,
                                          3978
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
                                                3976,
                                                3977
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 59,
                                                  "line": 113
                                                },
                                                "start": {
                                                  "column": 58,
                                                  "line": 113
                                                }
                                              }
                                            },
                                            "range": [
                                              3976,
                                              3977
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 59,
                                                "line": 113
                                              },
                                              "start": {
                                                "column": 58,
                                                "line": 113
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 60,
                                            "line": 113
                                          },
                                          "start": {
                                            "column": 57,
                                            "line": 113
                                          }
                                        }
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ReadonlyOptionalPropertyKeys",
                                        "optional": false,
                                        "range": [
                                          3947,
                                          3975
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 57,
                                            "line": 113
                                          },
                                          "start": {
                                            "column": 29,
                                            "line": 113
                                          }
                                        }
                                      },
                                      "range": [
                                        3947,
                                        3978
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 60,
                                          "line": 113
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 113
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 61,
                                      "line": 113
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 113
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Pick",
                                  "optional": false,
                                  "range": [
                                    3939,
                                    3943
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 113
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 113
                                    }
                                  }
                                },
                                "range": [
                                  3939,
                                  3979
                                ],
                                "loc": {
                                  "end": {
                                    "column": 61,
                                    "line": 113
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 113
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 113
                              },
                              "start": {
                                "column": 20,
                                "line": 113
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "range": [
                              3931,
                              3938
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 113
                              },
                              "start": {
                                "column": 13,
                                "line": 113
                              }
                            }
                          },
                          "range": [
                            3931,
                            3980
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 113
                            },
                            "start": {
                              "column": 13,
                              "line": 113
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 113
                        },
                        "start": {
                          "column": 12,
                          "line": 113
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "range": [
                        3922,
                        3930
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 113
                        },
                        "start": {
                          "column": 4,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      3922,
                      3981
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 113
                      },
                      "start": {
                        "column": 4,
                        "line": 113
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3996,
                        4030
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              4001,
                              4029
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
                                    4002,
                                    4003
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 114
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 114
                                    }
                                  }
                                },
                                "range": [
                                  4002,
                                  4003
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 114
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 114
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    4025,
                                    4028
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
                                          4026,
                                          4027
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 114
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 114
                                          }
                                        }
                                      },
                                      "range": [
                                        4026,
                                        4027
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 114
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 114
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 114
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 114
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ReadonlyPropertyKeys",
                                  "optional": false,
                                  "range": [
                                    4005,
                                    4025
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 114
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 114
                                    }
                                  }
                                },
                                "range": [
                                  4005,
                                  4028
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 114
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 114
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 114
                              },
                              "start": {
                                "column": 17,
                                "line": 114
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "range": [
                              3997,
                              4001
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 114
                              },
                              "start": {
                                "column": 13,
                                "line": 114
                              }
                            }
                          },
                          "range": [
                            3997,
                            4029
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 114
                            },
                            "start": {
                              "column": 13,
                              "line": 114
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 114
                        },
                        "start": {
                          "column": 12,
                          "line": 114
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "range": [
                        3988,
                        3996
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 114
                        },
                        "start": {
                          "column": 4,
                          "line": 114
                        }
                      }
                    },
                    "range": [
                      3988,
                      4030
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 114
                      },
                      "start": {
                        "column": 4,
                        "line": 114
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4044,
                        4078
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              4049,
                              4077
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
                                    4050,
                                    4051
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 115
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 115
                                    }
                                  }
                                },
                                "range": [
                                  4050,
                                  4051
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 115
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 115
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    4073,
                                    4076
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
                                          4074,
                                          4075
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 115
                                          },
                                          "start": {
                                            "column": 41,
                                            "line": 115
                                          }
                                        }
                                      },
                                      "range": [
                                        4074,
                                        4075
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 115
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 115
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 115
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 115
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OptionalPropertyKeys",
                                  "optional": false,
                                  "range": [
                                    4053,
                                    4073
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 115
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 115
                                    }
                                  }
                                },
                                "range": [
                                  4053,
                                  4076
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 115
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 115
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 115
                              },
                              "start": {
                                "column": 16,
                                "line": 115
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "range": [
                              4045,
                              4049
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 115
                              },
                              "start": {
                                "column": 12,
                                "line": 115
                              }
                            }
                          },
                          "range": [
                            4045,
                            4077
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 115
                            },
                            "start": {
                              "column": 12,
                              "line": 115
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 115
                        },
                        "start": {
                          "column": 11,
                          "line": 115
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "range": [
                        4037,
                        4044
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 115
                        },
                        "start": {
                          "column": 4,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      4037,
                      4078
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 115
                      },
                      "start": {
                        "column": 4,
                        "line": 115
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4093,
                        4127
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              4098,
                              4126
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
                                    4099,
                                    4100
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 116
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 116
                                    }
                                  }
                                },
                                "range": [
                                  4099,
                                  4100
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 116
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 116
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    4122,
                                    4125
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
                                          4123,
                                          4124
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 116
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 116
                                          }
                                        }
                                      },
                                      "range": [
                                        4123,
                                        4124
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 116
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 116
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 116
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 116
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "RequiredPropertyKeys",
                                  "optional": false,
                                  "range": [
                                    4102,
                                    4122
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 116
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 116
                                    }
                                  }
                                },
                                "range": [
                                  4102,
                                  4125
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 116
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 116
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 116
                              },
                              "start": {
                                "column": 17,
                                "line": 116
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "range": [
                              4094,
                              4098
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 116
                              },
                              "start": {
                                "column": 13,
                                "line": 116
                              }
                            }
                          },
                          "range": [
                            4094,
                            4126
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 116
                            },
                            "start": {
                              "column": 13,
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
                          "column": 12,
                          "line": 116
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "range": [
                        4085,
                        4093
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 116
                        },
                        "start": {
                          "column": 4,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      4085,
                      4127
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 116
                      },
                      "start": {
                        "column": 4,
                        "line": 116
                      }
                    }
                  }
                ],
                "range": [
                  3922,
                  4127
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 116
                  },
                  "start": {
                    "column": 4,
                    "line": 113
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 117
              },
              "start": {
                "column": 101,
                "line": 112
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Evaluate",
            "optional": false,
            "range": [
              3907,
              3915
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 112
              },
              "start": {
                "column": 93,
                "line": 112
              }
            }
          },
          "range": [
            3907,
            4130
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 117
            },
            "start": {
              "column": 93,
              "line": 112
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 90,
              "line": 112
            },
            "start": {
              "column": 29,
              "line": 112
            }
          },
          "range": [
            3843,
            3904
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
                  "name": "TProperties",
                  "optional": false,
                  "range": [
                    3854,
                    3865
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 112
                    },
                    "start": {
                      "column": 40,
                      "line": 112
                    }
                  }
                },
                "range": [
                  3854,
                  3865
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 112
                  },
                  "start": {
                    "column": 40,
                    "line": 112
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
                  3844,
                  3845
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 112
                  },
                  "start": {
                    "column": 30,
                    "line": 112
                  }
                }
              },
              "out": false,
              "range": [
                3844,
                3865
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 112
                },
                "start": {
                  "column": 30,
                  "line": 112
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
                    3883,
                    3903
                  ],
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          3890,
                          3893
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 112
                          },
                          "start": {
                            "column": 76,
                            "line": 112
                          }
                        }
                      },
                      "range": [
                        3884,
                        3893
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 112
                        },
                        "start": {
                          "column": 70,
                          "line": 112
                        }
                      }
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "range": [
                        3895,
                        3902
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 112
                        },
                        "start": {
                          "column": 81,
                          "line": 112
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 112
                    },
                    "start": {
                      "column": 69,
                      "line": 112
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    3877,
                    3883
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 112
                    },
                    "start": {
                      "column": 63,
                      "line": 112
                    }
                  }
                },
                "range": [
                  3877,
                  3903
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 112
                  },
                  "start": {
                    "column": 63,
                    "line": 112
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
                  3867,
                  3868
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 112
                  },
                  "start": {
                    "column": 53,
                    "line": 112
                  }
                }
              },
              "out": false,
              "range": [
                3867,
                3903
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 112
                },
                "start": {
                  "column": 53,
                  "line": 112
                }
              }
            }
          ]
        },
        "range": [
          3821,
          4130
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 117
          },
          "start": {
            "column": 7,
            "line": 112
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 112
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4131,
        4267
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesReduce",
          "optional": false,
          "range": [
            4143,
            4159
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 118
            },
            "start": {
              "column": 12,
              "line": 118
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4223,
              4267
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
                    4224,
                    4225
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 118
                    },
                    "start": {
                      "column": 93,
                      "line": 118
                    }
                  }
                },
                "range": [
                  4224,
                  4225
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 118
                  },
                  "start": {
                    "column": 93,
                    "line": 118
                  }
                }
              },
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        4245,
                        4246
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 119
                        },
                        "start": {
                          "column": 16,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      4245,
                      4246
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 119
                      },
                      "start": {
                        "column": 16,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    4239,
                    4246
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 119
                    },
                    "start": {
                      "column": 10,
                      "line": 119
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    4234,
                    4235
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 119
                    },
                    "start": {
                      "column": 5,
                      "line": 119
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      4255,
                      4264
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
                              4258,
                              4259
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 119
                              },
                              "start": {
                                "column": 29,
                                "line": 119
                              }
                            }
                          },
                          "range": [
                            4258,
                            4259
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 119
                            },
                            "start": {
                              "column": 29,
                              "line": 119
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
                              4256,
                              4257
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 119
                              },
                              "start": {
                                "column": 27,
                                "line": 119
                              }
                            }
                          },
                          "range": [
                            4256,
                            4257
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 119
                            },
                            "start": {
                              "column": 27,
                              "line": 119
                            }
                          }
                        },
                        "range": [
                          4256,
                          4260
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 119
                          },
                          "start": {
                            "column": 27,
                            "line": 119
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            4262,
                            4263
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 119
                            },
                            "start": {
                              "column": 33,
                              "line": 119
                            }
                          }
                        },
                        "range": [
                          4262,
                          4263
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 119
                          },
                          "start": {
                            "column": 33,
                            "line": 119
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 119
                      },
                      "start": {
                        "column": 26,
                        "line": 119
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "range": [
                      4249,
                      4255
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 119
                      },
                      "start": {
                        "column": 20,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    4249,
                    4264
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 119
                    },
                    "start": {
                      "column": 20,
                      "line": 119
                    }
                  }
                },
                "range": [
                  4227,
                  4266
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 120
                  },
                  "start": {
                    "column": 96,
                    "line": 118
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 120
              },
              "start": {
                "column": 92,
                "line": 118
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertiesReducer",
            "optional": false,
            "range": [
              4206,
              4223
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 118
              },
              "start": {
                "column": 75,
                "line": 118
              }
            }
          },
          "range": [
            4206,
            4267
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 120
            },
            "start": {
              "column": 75,
              "line": 118
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 72,
              "line": 118
            },
            "start": {
              "column": 28,
              "line": 118
            }
          },
          "range": [
            4159,
            4203
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
                  "name": "TProperties",
                  "optional": false,
                  "range": [
                    4170,
                    4181
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 118
                    },
                    "start": {
                      "column": 39,
                      "line": 118
                    }
                  }
                },
                "range": [
                  4170,
                  4181
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 118
                  },
                  "start": {
                    "column": 39,
                    "line": 118
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
                  4160,
                  4161
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 118
                  },
                  "start": {
                    "column": 29,
                    "line": 118
                  }
                }
              },
              "out": false,
              "range": [
                4160,
                4181
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 118
                },
                "start": {
                  "column": 29,
                  "line": 118
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
                    4193,
                    4200
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 118
                    },
                    "start": {
                      "column": 62,
                      "line": 118
                    }
                  }
                },
                "range": [
                  4193,
                  4202
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 118
                  },
                  "start": {
                    "column": 62,
                    "line": 118
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
                  4183,
                  4184
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 118
                  },
                  "start": {
                    "column": 52,
                    "line": 118
                  }
                }
              },
              "out": false,
              "range": [
                4183,
                4202
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 118
                },
                "start": {
                  "column": 52,
                  "line": 118
                }
              }
            }
          ]
        },
        "range": [
          4138,
          4267
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 120
          },
          "start": {
            "column": 7,
            "line": 118
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 118
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4268,
        4310
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TPropertyKey",
          "optional": false,
          "range": [
            4280,
            4292
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 121
            },
            "start": {
              "column": 12,
              "line": 121
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                4295,
                4301
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 121
                },
                "start": {
                  "column": 27,
                  "line": 121
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                4304,
                4310
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 121
                },
                "start": {
                  "column": 36,
                  "line": 121
                }
              }
            }
          ],
          "range": [
            4295,
            4310
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 121
            },
            "start": {
              "column": 27,
              "line": 121
            }
          }
        },
        "range": [
          4275,
          4310
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 121
          },
          "start": {
            "column": 7,
            "line": 121
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 42,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4311,
        4366
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TProperties",
          "optional": false,
          "range": [
            4323,
            4334
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 122
            },
            "start": {
              "column": 12,
              "line": 122
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4343,
              4366
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPropertyKey",
                  "optional": false,
                  "range": [
                    4344,
                    4356
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 122
                    },
                    "start": {
                      "column": 33,
                      "line": 122
                    }
                  }
                },
                "range": [
                  4344,
                  4356
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 122
                  },
                  "start": {
                    "column": 33,
                    "line": 122
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "range": [
                    4358,
                    4365
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 122
                    },
                    "start": {
                      "column": 47,
                      "line": 122
                    }
                  }
                },
                "range": [
                  4358,
                  4365
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 122
                  },
                  "start": {
                    "column": 47,
                    "line": 122
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 122
              },
              "start": {
                "column": 32,
                "line": 122
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              4337,
              4343
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 122
              },
              "start": {
                "column": 26,
                "line": 122
              }
            }
          },
          "range": [
            4337,
            4366
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 122
            },
            "start": {
              "column": 26,
              "line": 122
            }
          }
        },
        "range": [
          4318,
          4366
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 122
          },
          "start": {
            "column": 7,
            "line": 122
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 55,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4367,
        4554
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            4445,
            4554
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "range": [
                  4452,
                  4456
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 124
                  },
                  "start": {
                    "column": 5,
                    "line": 124
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
                    "column": 20,
                    "line": 124
                  },
                  "start": {
                    "column": 10,
                    "line": 124
                  }
                },
                "range": [
                  4457,
                  4467
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'Object'",
                    "value": "Object",
                    "range": [
                      4459,
                      4467
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 124
                      },
                      "start": {
                        "column": 12,
                        "line": 124
                      }
                    }
                  },
                  "range": [
                    4459,
                    4467
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 124
                    },
                    "start": {
                      "column": 12,
                      "line": 124
                    }
                  }
                }
              },
              "range": [
                4451,
                4467
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 124
                },
                "start": {
                  "column": 4,
                  "line": 124
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "range": [
                  4472,
                  4478
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 125
                  },
                  "start": {
                    "column": 4,
                    "line": 125
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
                    "line": 125
                  },
                  "start": {
                    "column": 10,
                    "line": 125
                  }
                },
                "range": [
                  4478,
                  4515
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      4496,
                      4515
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
                            4497,
                            4498
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 125
                            },
                            "start": {
                              "column": 29,
                              "line": 125
                            }
                          }
                        },
                        "range": [
                          4497,
                          4498
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 125
                          },
                          "start": {
                            "column": 29,
                            "line": 125
                          }
                        }
                      },
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'params'",
                            "value": "params",
                            "range": [
                              4505,
                              4513
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 125
                              },
                              "start": {
                                "column": 37,
                                "line": 125
                              }
                            }
                          },
                          "range": [
                            4505,
                            4513
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 125
                            },
                            "start": {
                              "column": 37,
                              "line": 125
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSThisType",
                          "range": [
                            4500,
                            4504
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 125
                            },
                            "start": {
                              "column": 32,
                              "line": 125
                            }
                          }
                        },
                        "range": [
                          4500,
                          4514
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 125
                          },
                          "start": {
                            "column": 32,
                            "line": 125
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 125
                      },
                      "start": {
                        "column": 28,
                        "line": 125
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertiesReduce",
                    "optional": false,
                    "range": [
                      4480,
                      4496
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 125
                      },
                      "start": {
                        "column": 12,
                        "line": 125
                      }
                    }
                  },
                  "range": [
                    4480,
                    4515
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 125
                    },
                    "start": {
                      "column": 12,
                      "line": 125
                    }
                  }
                }
              },
              "range": [
                4472,
                4515
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 125
                },
                "start": {
                  "column": 4,
                  "line": 125
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "range": [
                  4520,
                  4524
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 126
                  },
                  "start": {
                    "column": 4,
                    "line": 126
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
                    "line": 126
                  },
                  "start": {
                    "column": 8,
                    "line": 126
                  }
                },
                "range": [
                  4524,
                  4534
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'object'",
                    "value": "object",
                    "range": [
                      4526,
                      4534
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 126
                      },
                      "start": {
                        "column": 10,
                        "line": 126
                      }
                    }
                  },
                  "range": [
                    4526,
                    4534
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 126
                    },
                    "start": {
                      "column": 10,
                      "line": 126
                    }
                  }
                }
              },
              "range": [
                4520,
                4534
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 126
                },
                "start": {
                  "column": 4,
                  "line": 126
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "properties",
                "optional": false,
                "range": [
                  4539,
                  4549
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 127
                  },
                  "start": {
                    "column": 4,
                    "line": 127
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
                    "column": 17,
                    "line": 127
                  },
                  "start": {
                    "column": 14,
                    "line": 127
                  }
                },
                "range": [
                  4549,
                  4552
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      4551,
                      4552
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 127
                      },
                      "start": {
                        "column": 16,
                        "line": 127
                      }
                    }
                  },
                  "range": [
                    4551,
                    4552
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 127
                    },
                    "start": {
                      "column": 16,
                      "line": 127
                    }
                  }
                }
              },
              "range": [
                4539,
                4552
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 127
                },
                "start": {
                  "column": 4,
                  "line": 127
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 128
            },
            "start": {
              "column": 78,
              "line": 123
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
              "name": "TSchema",
              "optional": false,
              "range": [
                4437,
                4444
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 123
                },
                "start": {
                  "column": 70,
                  "line": 123
                }
              }
            },
            "range": [
              4437,
              4444
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 123
              },
              "start": {
                "column": 70,
                "line": 123
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TObject",
          "optional": false,
          "range": [
            4384,
            4391
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 123
            },
            "start": {
              "column": 17,
              "line": 123
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 61,
              "line": 123
            },
            "start": {
              "column": 24,
              "line": 123
            }
          },
          "range": [
            4391,
            4428
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
                  "name": "TProperties",
                  "optional": false,
                  "range": [
                    4402,
                    4413
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 123
                    },
                    "start": {
                      "column": 35,
                      "line": 123
                    }
                  }
                },
                "range": [
                  4402,
                  4413
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 123
                  },
                  "start": {
                    "column": 35,
                    "line": 123
                  }
                }
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "range": [
                    4416,
                    4427
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 123
                    },
                    "start": {
                      "column": 49,
                      "line": 123
                    }
                  }
                },
                "range": [
                  4416,
                  4427
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 123
                  },
                  "start": {
                    "column": 49,
                    "line": 123
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
                  4392,
                  4393
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 123
                  },
                  "start": {
                    "column": 25,
                    "line": 123
                  }
                }
              },
              "out": false,
              "range": [
                4392,
                4427
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 123
                },
                "start": {
                  "column": 25,
                  "line": 123
                }
              }
            }
          ]
        },
        "range": [
          4374,
          4554
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 7,
            "line": 123
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4556,
        4652
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Static",
          "optional": false,
          "range": [
            4568,
            4574
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 130
            },
            "start": {
              "column": 12,
              "line": 130
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'static'",
              "value": "static",
              "range": [
                4643,
                4651
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 130
                },
                "start": {
                  "column": 87,
                  "line": 130
                }
              }
            },
            "range": [
              4643,
              4651
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 130
              },
              "start": {
                "column": 87,
                "line": 130
              }
            }
          },
          "objectType": {
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
                    4623,
                    4624
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 130
                    },
                    "start": {
                      "column": 67,
                      "line": 130
                    }
                  }
                },
                "range": [
                  4623,
                  4624
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 130
                  },
                  "start": {
                    "column": 67,
                    "line": 130
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
                      "name": "params",
                      "optional": false,
                      "range": [
                        4629,
                        4635
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 130
                        },
                        "start": {
                          "column": 73,
                          "line": 130
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
                          "column": 82,
                          "line": 130
                        },
                        "start": {
                          "column": 79,
                          "line": 130
                        }
                      },
                      "range": [
                        4635,
                        4638
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            4637,
                            4638
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 130
                            },
                            "start": {
                              "column": 81,
                              "line": 130
                            }
                          }
                        },
                        "range": [
                          4637,
                          4638
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 130
                          },
                          "start": {
                            "column": 81,
                            "line": 130
                          }
                        }
                      }
                    },
                    "range": [
                      4629,
                      4639
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 130
                      },
                      "start": {
                        "column": 73,
                        "line": 130
                      }
                    }
                  }
                ],
                "range": [
                  4627,
                  4641
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 130
                  },
                  "start": {
                    "column": 71,
                    "line": 130
                  }
                }
              }
            ],
            "range": [
              4623,
              4641
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 130
              },
              "start": {
                "column": 67,
                "line": 130
              }
            }
          },
          "range": [
            4622,
            4652
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 130
            },
            "start": {
              "column": 66,
              "line": 130
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 63,
              "line": 130
            },
            "start": {
              "column": 18,
              "line": 130
            }
          },
          "range": [
            4574,
            4619
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
                  "name": "TSchema",
                  "optional": false,
                  "range": [
                    4585,
                    4592
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 130
                    },
                    "start": {
                      "column": 29,
                      "line": 130
                    }
                  }
                },
                "range": [
                  4585,
                  4592
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 130
                  },
                  "start": {
                    "column": 29,
                    "line": 130
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
                  4575,
                  4576
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 130
                  },
                  "start": {
                    "column": 19,
                    "line": 130
                  }
                }
              },
              "out": false,
              "range": [
                4575,
                4592
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 130
                },
                "start": {
                  "column": 19,
                  "line": 130
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
                    4604,
                    4611
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 130
                    },
                    "start": {
                      "column": 48,
                      "line": 130
                    }
                  }
                },
                "range": [
                  4604,
                  4613
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 130
                  },
                  "start": {
                    "column": 48,
                    "line": 130
                  }
                }
              },
              "default": {
                "type": "TSTupleType",
                "elementTypes": [],
                "range": [
                  4616,
                  4618
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 130
                  },
                  "start": {
                    "column": 60,
                    "line": 130
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
                  4594,
                  4595
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 130
                  },
                  "start": {
                    "column": 38,
                    "line": 130
                  }
                }
              },
              "out": false,
              "range": [
                4594,
                4618
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 130
                },
                "start": {
                  "column": 38,
                  "line": 130
                }
              }
            }
          ]
        },
        "range": [
          4563,
          4652
        ],
        "loc": {
          "end": {
            "column": 96,
            "line": 130
          },
          "start": {
            "column": 7,
            "line": 130
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 96,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 130
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "range": [
                4692,
                4698
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 133
                },
                "start": {
                  "column": 13,
                  "line": 133
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 133
                    },
                    "start": {
                      "column": 49,
                      "line": 133
                    }
                  },
                  "range": [
                    4728,
                    4731
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        4730,
                        4731
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 133
                        },
                        "start": {
                          "column": 51,
                          "line": 133
                        }
                      }
                    },
                    "range": [
                      4730,
                      4731
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 133
                      },
                      "start": {
                        "column": 51,
                        "line": 133
                      }
                    }
                  }
                },
                "range": [
                  4722,
                  4731
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 133
                  },
                  "start": {
                    "column": 43,
                    "line": 133
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 133
                },
                "start": {
                  "column": 53,
                  "line": 133
                }
              },
              "range": [
                4732,
                4744
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4741,
                    4744
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
                          4742,
                          4743
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 133
                          },
                          "start": {
                            "column": 63,
                            "line": 133
                          }
                        }
                      },
                      "range": [
                        4742,
                        4743
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 133
                        },
                        "start": {
                          "column": 63,
                          "line": 133
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 133
                    },
                    "start": {
                      "column": 62,
                      "line": 133
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "range": [
                    4734,
                    4741
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 133
                    },
                    "start": {
                      "column": 55,
                      "line": 133
                    }
                  }
                },
                "range": [
                  4734,
                  4744
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 133
                  },
                  "start": {
                    "column": 55,
                    "line": 133
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 133
                },
                "start": {
                  "column": 19,
                  "line": 133
                }
              },
              "range": [
                4698,
                4721
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
                      "name": "TProperties",
                      "optional": false,
                      "range": [
                        4709,
                        4720
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 133
                        },
                        "start": {
                          "column": 30,
                          "line": 133
                        }
                      }
                    },
                    "range": [
                      4709,
                      4720
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 133
                      },
                      "start": {
                        "column": 30,
                        "line": 133
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
                      4699,
                      4700
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 133
                      },
                      "start": {
                        "column": 20,
                        "line": 133
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4699,
                    4720
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 133
                    },
                    "start": {
                      "column": 20,
                      "line": 133
                    }
                  }
                }
              ]
            },
            "range": [
              4683,
              4744
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 133
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "String",
              "optional": false,
              "range": [
                4758,
                4764
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 134
                },
                "start": {
                  "column": 13,
                  "line": 134
                }
              }
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 134
                },
                "start": {
                  "column": 21,
                  "line": 134
                }
              },
              "range": [
                4766,
                4775
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TString",
                  "optional": false,
                  "range": [
                    4768,
                    4775
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 134
                    },
                    "start": {
                      "column": 23,
                      "line": 134
                    }
                  }
                },
                "range": [
                  4768,
                  4775
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 134
                  },
                  "start": {
                    "column": 23,
                    "line": 134
                  }
                }
              }
            },
            "range": [
              4749,
              4775
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 134
              },
              "start": {
                "column": 4,
                "line": 134
              }
            }
          }
        ],
        "range": [
          4677,
          4777
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 135
          },
          "start": {
            "column": 23,
            "line": 132
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          4672,
          4676
        ],
        "decorators": [],
        "name": "Type",
        "optional": false,
        "loc": {
          "end": {
            "column": 22,
            "line": 132
          },
          "start": {
            "column": 18,
            "line": 132
          }
        }
      },
      "kind": "namespace",
      "range": [
        4654,
        4777
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 135
        },
        "start": {
          "column": 0,
          "line": 132
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 136
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
