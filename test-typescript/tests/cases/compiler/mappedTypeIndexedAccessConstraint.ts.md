__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2074
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
                33,
                34
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          },
          "range": [
            27,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 27,
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
            22,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
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
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            },
            "range": [
              39,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 39,
                "line": 1
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
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            "range": [
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 37,
                "line": 1
              }
            }
          },
          "range": [
            37,
            41
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 1
            },
            "start": {
              "column": 37,
              "line": 1
            }
          }
        },
        "range": [
          19,
          43
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
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
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
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
        44
      ],
      "loc": {
        "end": {
          "column": 44,
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
        "name": "M0",
        "optional": false,
        "range": [
          51,
          53
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
                58,
                59
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
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
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              },
              "range": [
                59,
                62
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    61,
                    62
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
                "range": [
                  61,
                  62
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
            },
            "range": [
              58,
              63
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
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
                64,
                65
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
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
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              },
              "range": [
                65,
                68
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    67,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
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
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              64,
              68
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          }
        ],
        "range": [
          56,
          70
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        46,
        71
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "name": "M1",
        "optional": false,
        "range": [
          78,
          80
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                104,
                108
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M0",
                    "optional": false,
                    "range": [
                      105,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 32,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "range": [
                97,
                104
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            },
            "range": [
              97,
              108
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 24,
                "line": 5
              }
            }
          },
          "range": [
            91,
            108
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 5
            },
            "start": {
              "column": 18,
              "line": 5
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            86,
            87
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
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 41,
                  "line": 5
                }
              }
            },
            "range": [
              114,
              115
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 41,
                "line": 5
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "M0",
              "optional": false,
              "range": [
                111,
                113
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 38,
                  "line": 5
                }
              }
            },
            "range": [
              111,
              113
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 5
              },
              "start": {
                "column": 38,
                "line": 5
              }
            }
          },
          "range": [
            111,
            116
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
        "range": [
          83,
          118
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        73,
        119
      ],
      "loc": {
        "end": {
          "column": 46,
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
        "name": "M2",
        "optional": false,
        "range": [
          126,
          128
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
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                153,
                157
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M1",
                    "optional": false,
                    "range": [
                      154,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 7
                      },
                      "start": {
                        "column": 33,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    154,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 7
                    },
                    "start": {
                      "column": 33,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Required",
              "optional": false,
              "range": [
                145,
                153
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            },
            "range": [
              145,
              157
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 7
              },
              "start": {
                "column": 24,
                "line": 7
              }
            }
          },
          "range": [
            139,
            157
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 7
            },
            "start": {
              "column": 18,
              "line": 7
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            134,
            135
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
                163,
                164
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 42,
                  "line": 7
                }
              }
            },
            "range": [
              163,
              164
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 42,
                "line": 7
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "M1",
              "optional": false,
              "range": [
                160,
                162
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 7
                },
                "start": {
                  "column": 39,
                  "line": 7
                }
              }
            },
            "range": [
              160,
              162
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 39,
                "line": 7
              }
            }
          },
          "range": [
            160,
            165
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 7
            },
            "start": {
              "column": 39,
              "line": 7
            }
          }
        },
        "range": [
          131,
          167
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        121,
        168
      ],
      "loc": {
        "end": {
          "column": 47,
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
        "name": "M3",
        "optional": false,
        "range": [
          175,
          177
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
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                202,
                215
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      210,
                      214
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M0",
                          "optional": false,
                          "range": [
                            211,
                            213
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 9
                            },
                            "start": {
                              "column": 41,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          211,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 9
                          },
                          "start": {
                            "column": 41,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 40,
                        "line": 9
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Partial",
                    "optional": false,
                    "range": [
                      203,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 9
                      },
                      "start": {
                        "column": 33,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    203,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 33,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 32,
                  "line": 9
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Identity",
              "optional": false,
              "range": [
                194,
                202
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            },
            "range": [
              194,
              215
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 24,
                "line": 9
              }
            }
          },
          "range": [
            188,
            215
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 9
            },
            "start": {
              "column": 18,
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
            183,
            184
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
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
                221,
                222
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 9
                },
                "start": {
                  "column": 51,
                  "line": 9
                }
              }
            },
            "range": [
              221,
              222
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 9
              },
              "start": {
                "column": 51,
                "line": 9
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "M0",
              "optional": false,
              "range": [
                218,
                220
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 9
                },
                "start": {
                  "column": 48,
                  "line": 9
                }
              }
            },
            "range": [
              218,
              220
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 9
              },
              "start": {
                "column": 48,
                "line": 9
              }
            }
          },
          "range": [
            218,
            223
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 9
            },
            "start": {
              "column": 48,
              "line": 9
            }
          }
        },
        "range": [
          180,
          225
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        170,
        226
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "range": [
                    300,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    303,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                },
                "range": [
                  300,
                  311
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
              },
              "optional": false,
              "range": [
                300,
                313
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              300,
              314
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "range": [
                      329,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 13
                      },
                      "start": {
                        "column": 4,
                        "line": 13
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "range": [
                      333,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    329,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "range": [
                  329,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "range": [
                329,
                343
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              329,
              344
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "range": [
                    349,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    352,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "range": [
                  349,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                349,
                362
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              349,
              363
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "range": [
                      378,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 15
                      },
                      "start": {
                        "column": 4,
                        "line": 15
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "range": [
                      382,
                      390
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    378,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "range": [
                  378,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "range": [
                378,
                392
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              378,
              393
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "range": [
                    398,
                    400
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    401,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  398,
                  409
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
              },
              "optional": false,
              "range": [
                398,
                411
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              398,
              412
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "range": [
                      427,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 17
                      },
                      "start": {
                        "column": 4,
                        "line": 17
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "range": [
                      431,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    427,
                    439
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
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
                  427,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "range": [
                427,
                441
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              427,
              442
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          294,
          444
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 66,
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
        "name": "foo",
        "optional": false,
        "range": [
          237,
          240
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "m1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 11
              },
              "start": {
                "column": 35,
                "line": 11
              }
            },
            "range": [
              263,
              270
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
                    268,
                    269
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
                  268,
                  269
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
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M1",
                  "optional": false,
                  "range": [
                    265,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 11
                    },
                    "start": {
                      "column": 37,
                      "line": 11
                    }
                  }
                },
                "range": [
                  265,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 11
                  },
                  "start": {
                    "column": 37,
                    "line": 11
                  }
                }
              },
              "range": [
                265,
                270
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 11
                },
                "start": {
                  "column": 37,
                  "line": 11
                }
              }
            }
          },
          "range": [
            261,
            270
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 11
            },
            "start": {
              "column": 33,
              "line": 11
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 11
              },
              "start": {
                "column": 46,
                "line": 11
              }
            },
            "range": [
              274,
              281
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
                    279,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 11
                    },
                    "start": {
                      "column": 51,
                      "line": 11
                    }
                  }
                },
                "range": [
                  279,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 11
                  },
                  "start": {
                    "column": 51,
                    "line": 11
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M2",
                  "optional": false,
                  "range": [
                    276,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 11
                    },
                    "start": {
                      "column": 48,
                      "line": 11
                    }
                  }
                },
                "range": [
                  276,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 11
                  },
                  "start": {
                    "column": 48,
                    "line": 11
                  }
                }
              },
              "range": [
                276,
                281
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 11
                },
                "start": {
                  "column": 48,
                  "line": 11
                }
              }
            }
          },
          "range": [
            272,
            281
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 11
            },
            "start": {
              "column": 44,
              "line": 11
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 11
              },
              "start": {
                "column": 57,
                "line": 11
              }
            },
            "range": [
              285,
              292
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
                    290,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 11
                    },
                    "start": {
                      "column": 62,
                      "line": 11
                    }
                  }
                },
                "range": [
                  290,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 11
                  },
                  "start": {
                    "column": 62,
                    "line": 11
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M3",
                  "optional": false,
                  "range": [
                    287,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 11
                    },
                    "start": {
                      "column": 59,
                      "line": 11
                    }
                  }
                },
                "range": [
                  287,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 11
                  },
                  "start": {
                    "column": 59,
                    "line": 11
                  }
                }
              },
              "range": [
                287,
                292
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 11
                },
                "start": {
                  "column": 59,
                  "line": 11
                }
              }
            }
          },
          "range": [
            283,
            292
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 11
            },
            "start": {
              "column": 55,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        },
        "range": [
          240,
          260
        ],
        "params": [
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
                  "name": "M0",
                  "optional": false,
                  "range": [
                    257,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 11
                    }
                  }
                },
                "range": [
                  257,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "range": [
                251,
                259
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 11
                },
                "start": {
                  "column": 23,
                  "line": 11
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
                241,
                242
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              241,
              259
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        228,
        444
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
        "name": "Obj",
        "optional": false,
        "range": [
          473,
          476
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
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
                485,
                486
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 4,
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
                  "column": 8,
                  "line": 23
                },
                "start": {
                  "column": 5,
                  "line": 23
                }
              },
              "range": [
                486,
                489
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    488,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 23
                    },
                    "start": {
                      "column": 7,
                      "line": 23
                    }
                  }
                },
                "range": [
                  488,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              485,
              490
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                495,
                496
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 4,
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
                  "column": 8,
                  "line": 24
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              },
              "range": [
                496,
                499
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    498,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 24
                    },
                    "start": {
                      "column": 7,
                      "line": 24
                    }
                  }
                },
                "range": [
                  498,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 24
                  },
                  "start": {
                    "column": 7,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              495,
              499
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          479,
          501
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 11,
            "line": 22
          }
        }
      },
      "range": [
        468,
        502
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "mapped",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              },
              "range": [
                516,
                555
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        539,
                        544
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Obj",
                            "optional": false,
                            "range": [
                              540,
                              543
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 27
                              },
                              "start": {
                                "column": 36,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            540,
                            543
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 27
                            },
                            "start": {
                              "column": 36,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 27
                        },
                        "start": {
                          "column": 35,
                          "line": 27
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "range": [
                        532,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 27
                        },
                        "start": {
                          "column": 28,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      532,
                      544
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 27
                      },
                      "start": {
                        "column": 28,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    526,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 27
                    },
                    "start": {
                      "column": 22,
                      "line": 27
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    521,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 27
                    },
                    "start": {
                      "column": 17,
                      "line": 27
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
                        551,
                        552
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 27
                        },
                        "start": {
                          "column": 47,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      551,
                      552
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 27
                      },
                      "start": {
                        "column": 47,
                        "line": 27
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "range": [
                        547,
                        550
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 27
                        },
                        "start": {
                          "column": 43,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      547,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 27
                      },
                      "start": {
                        "column": 43,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    547,
                    553
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 27
                    },
                    "start": {
                      "column": 43,
                      "line": 27
                    }
                  }
                },
                "range": [
                  518,
                  555
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              510,
              555
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              558,
              560
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 27
              },
              "start": {
                "column": 54,
                "line": 27
              }
            }
          },
          "range": [
            510,
            560
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        504,
        561
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "resolveMapped",
            "optional": false,
            "range": [
              569,
              582
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "range": [
                      628,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 29
                      },
                      "start": {
                        "column": 65,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      635,
                      638
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 29
                      },
                      "start": {
                        "column": 72,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    628,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 29
                    },
                    "start": {
                      "column": 65,
                      "line": 29
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    640,
                    648
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 29
                    },
                    "start": {
                      "column": 77,
                      "line": 29
                    }
                  }
                },
                "range": [
                  628,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 29
                  },
                  "start": {
                    "column": 65,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                628,
                650
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 29
                },
                "start": {
                  "column": 65,
                  "line": 29
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
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 29
                    },
                    "start": {
                      "column": 57,
                      "line": 29
                    }
                  },
                  "range": [
                    620,
                    623
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        622,
                        623
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 29
                        },
                        "start": {
                          "column": 59,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      622,
                      623
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 29
                      },
                      "start": {
                        "column": 59,
                        "line": 29
                      }
                    }
                  }
                },
                "range": [
                  617,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 29
                  },
                  "start": {
                    "column": 54,
                    "line": 29
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 29
                },
                "start": {
                  "column": 22,
                  "line": 29
                }
              },
              "range": [
                585,
                616
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapped",
                        "optional": false,
                        "range": [
                          609,
                          615
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 29
                          },
                          "start": {
                            "column": 46,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        602,
                        615
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 29
                        },
                        "start": {
                          "column": 39,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      596,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 29
                      },
                      "start": {
                        "column": 33,
                        "line": 29
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
                      586,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 29
                      },
                      "start": {
                        "column": 23,
                        "line": 29
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    586,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 29
                    },
                    "start": {
                      "column": 23,
                      "line": 29
                    }
                  }
                }
              ]
            },
            "range": [
              585,
              650
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 29
              },
              "start": {
                "column": 22,
                "line": 29
              }
            }
          },
          "range": [
            569,
            650
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        563,
        651
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "arr",
            "optional": false,
            "range": [
              702,
              705
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    709,
                    714
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 33
                    },
                    "start": {
                      "column": 13,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"12\"",
                  "value": "12",
                  "range": [
                    716,
                    720
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 33
                    },
                    "start": {
                      "column": 20,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    722,
                    724
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 33
                    },
                    "start": {
                      "column": 26,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                708,
                725
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 33
                },
                "start": {
                  "column": 12,
                  "line": 33
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  729,
                  734
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 33
                  },
                  "start": {
                    "column": 33,
                    "line": 33
                  }
                }
              },
              "range": [
                729,
                734
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 33
                },
                "start": {
                  "column": 33,
                  "line": 33
                }
              }
            },
            "range": [
              708,
              734
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 33
              },
              "start": {
                "column": 12,
                "line": 33
              }
            }
          },
          "range": [
            702,
            734
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        696,
        735
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "name": "Mappings",
        "optional": false,
        "range": [
          742,
          750
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
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
                755,
                758
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 35
                },
                "start": {
                  "column": 18,
                  "line": 35
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
                  "column": 30,
                  "line": 35
                },
                "start": {
                  "column": 21,
                  "line": 35
                }
              },
              "range": [
                758,
                767
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  760,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 35
                  },
                  "start": {
                    "column": 23,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              755,
              768
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 35
              },
              "start": {
                "column": 18,
                "line": 35
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "\"12\"",
              "value": "12",
              "range": [
                769,
                773
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 35
                },
                "start": {
                  "column": 32,
                  "line": 35
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
                  "column": 44,
                  "line": 35
                },
                "start": {
                  "column": 36,
                  "line": 35
                }
              },
              "range": [
                773,
                781
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  775,
                  781
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 35
                  },
                  "start": {
                    "column": 38,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              769,
              782
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 35
              },
              "start": {
                "column": 32,
                "line": 35
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                783,
                785
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 35
                },
                "start": {
                  "column": 46,
                  "line": 35
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
                  "line": 35
                },
                "start": {
                  "column": 48,
                  "line": 35
                }
              },
              "range": [
                785,
                793
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  787,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 35
                  },
                  "start": {
                    "column": 50,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              783,
              793
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 35
              },
              "start": {
                "column": 46,
                "line": 35
              }
            }
          }
        ],
        "range": [
          753,
          795
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 35
          },
          "start": {
            "column": 16,
            "line": 35
          }
        }
      },
      "range": [
        737,
        796
      ],
      "loc": {
        "end": {
          "column": 59,
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
        "name": "MapperArgs",
        "optional": false,
        "range": [
          803,
          813
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
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
              "name": "v",
              "optional": false,
              "range": [
                854,
                855
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
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
                  "column": 8,
                  "line": 38
                },
                "start": {
                  "column": 5,
                  "line": 38
                }
              },
              "range": [
                855,
                858
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    857,
                    858
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 38
                    },
                    "start": {
                      "column": 7,
                      "line": 38
                    }
                  }
                },
                "range": [
                  857,
                  858
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 38
                  },
                  "start": {
                    "column": 7,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              854,
              859
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                864,
                865
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
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
                  "column": 13,
                  "line": 39
                },
                "start": {
                  "column": 5,
                  "line": 39
                }
              },
              "range": [
                865,
                873
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  867,
                  873
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 39
                  },
                  "start": {
                    "column": 7,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              864,
              873
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          848,
          875
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 50,
            "line": 37
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 37
          },
          "start": {
            "column": 15,
            "line": 37
          }
        },
        "range": [
          813,
          845
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSNumberKeyword",
                "range": [
                  837,
                  843
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 37
                  },
                  "start": {
                    "column": 39,
                    "line": 37
                  }
                }
              },
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "range": [
                    832,
                    835
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 37
                    },
                    "start": {
                      "column": 34,
                      "line": 37
                    }
                  }
                },
                "range": [
                  825,
                  835
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 37
                  },
                  "start": {
                    "column": 27,
                    "line": 37
                  }
                }
              },
              "range": [
                824,
                844
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 37
                },
                "start": {
                  "column": 26,
                  "line": 37
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
                814,
                815
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 37
                },
                "start": {
                  "column": 16,
                  "line": 37
                }
              }
            },
            "out": false,
            "range": [
              814,
              844
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 37
              },
              "start": {
                "column": 16,
                "line": 37
              }
            }
          }
        ]
      },
      "range": [
        798,
        876
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetOptional",
        "optional": false,
        "range": [
          883,
          894
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 42
          },
          "start": {
            "column": 5,
            "line": 42
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
                923,
                929
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
                      924,
                      925
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 42
                      },
                      "start": {
                        "column": 46,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    924,
                    925
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 42
                    },
                    "start": {
                      "column": 46,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      927,
                      928
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 42
                      },
                      "start": {
                        "column": 49,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    927,
                    928
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 42
                    },
                    "start": {
                      "column": 49,
                      "line": 42
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 42
                },
                "start": {
                  "column": 45,
                  "line": 42
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "range": [
                919,
                923
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 42
                },
                "start": {
                  "column": 41,
                  "line": 42
                }
              }
            },
            "range": [
              919,
              929
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 42
              },
              "start": {
                "column": 41,
                "line": 42
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                939,
                951
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      944,
                      950
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
                            945,
                            946
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 42
                            },
                            "start": {
                              "column": 67,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          945,
                          946
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 42
                          },
                          "start": {
                            "column": 67,
                            "line": 42
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            948,
                            949
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 42
                            },
                            "start": {
                              "column": 70,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          948,
                          949
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 42
                          },
                          "start": {
                            "column": 70,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 42
                      },
                      "start": {
                        "column": 66,
                        "line": 42
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pick",
                    "optional": false,
                    "range": [
                      940,
                      944
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 42
                      },
                      "start": {
                        "column": 62,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    940,
                    950
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 42
                    },
                    "start": {
                      "column": 62,
                      "line": 42
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 42
                },
                "start": {
                  "column": 61,
                  "line": 42
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "range": [
                932,
                939
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 42
                },
                "start": {
                  "column": 54,
                  "line": 42
                }
              }
            },
            "range": [
              932,
              951
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 42
              },
              "start": {
                "column": 54,
                "line": 42
              }
            }
          }
        ],
        "range": [
          919,
          951
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 42
          },
          "start": {
            "column": 41,
            "line": 42
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 42
          },
          "start": {
            "column": 16,
            "line": 42
          }
        },
        "range": [
          894,
          916
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
                895,
                896
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 42
                },
                "start": {
                  "column": 17,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              895,
              896
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 42
              },
              "start": {
                "column": 17,
                "line": 42
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
                    914,
                    915
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 42
                    },
                    "start": {
                      "column": 36,
                      "line": 42
                    }
                  }
                },
                "range": [
                  914,
                  915
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 42
                  },
                  "start": {
                    "column": 36,
                    "line": 42
                  }
                }
              },
              "range": [
                908,
                915
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 42
                },
                "start": {
                  "column": 30,
                  "line": 42
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
                898,
                899
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 42
                },
                "start": {
                  "column": 20,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              898,
              915
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 42
              },
              "start": {
                "column": 20,
                "line": 42
              }
            }
          }
        ]
      },
      "range": [
        878,
        952
      ],
      "loc": {
        "end": {
          "column": 74,
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
        "name": "PartMappings",
        "optional": false,
        "range": [
          959,
          971
        ],
        "loc": {
          "end": {
            "column": 17,
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
            985,
            1002
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mappings",
                "optional": false,
                "range": [
                  986,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 44
                  },
                  "start": {
                    "column": 32,
                    "line": 44
                  }
                }
              },
              "range": [
                986,
                994
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 44
                },
                "start": {
                  "column": 32,
                  "line": 44
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  996,
                  1001
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 44
                  },
                  "start": {
                    "column": 42,
                    "line": 44
                  }
                }
              },
              "range": [
                996,
                1001
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 44
                },
                "start": {
                  "column": 42,
                  "line": 44
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 44
            },
            "start": {
              "column": 31,
              "line": 44
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SetOptional",
          "optional": false,
          "range": [
            974,
            985
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 44
            },
            "start": {
              "column": 20,
              "line": 44
            }
          }
        },
        "range": [
          974,
          1002
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 44
          },
          "start": {
            "column": 20,
            "line": 44
          }
        }
      },
      "range": [
        954,
        1003
      ],
      "loc": {
        "end": {
          "column": 49,
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
            "name": "mapper",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 82,
                  "line": 46
                },
                "start": {
                  "column": 12,
                  "line": 46
                }
              },
              "range": [
                1017,
                1087
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
                      "name": "PartMappings",
                      "optional": false,
                      "range": [
                        1033,
                        1045
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 46
                        },
                        "start": {
                          "column": 28,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1033,
                      1045
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 46
                      },
                      "start": {
                        "column": 28,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1027,
                    1045
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 46
                    },
                    "start": {
                      "column": 22,
                      "line": 46
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1022,
                    1023
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 46
                    },
                    "start": {
                      "column": 17,
                      "line": 46
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 46
                          },
                          "start": {
                            "column": 45,
                            "line": 46
                          }
                        },
                        "range": [
                          1050,
                          1065
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1062,
                              1065
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
                                    1063,
                                    1064
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 58,
                                      "line": 46
                                    }
                                  }
                                },
                                "range": [
                                  1063,
                                  1064
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 58,
                                    "line": 46
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 46
                              },
                              "start": {
                                "column": 57,
                                "line": 46
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MapperArgs",
                            "optional": false,
                            "range": [
                              1052,
                              1062
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 46
                              },
                              "start": {
                                "column": 47,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1052,
                            1065
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 46
                            },
                            "start": {
                              "column": 47,
                              "line": 46
                            }
                          }
                        }
                      },
                      "range": [
                        1049,
                        1065
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 46
                        },
                        "start": {
                          "column": 44,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 46
                      },
                      "start": {
                        "column": 62,
                        "line": 46
                      }
                    },
                    "range": [
                      1067,
                      1085
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
                            1083,
                            1084
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 46
                            },
                            "start": {
                              "column": 78,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1083,
                          1084
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 46
                          },
                          "start": {
                            "column": 78,
                            "line": 46
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PartMappings",
                          "optional": false,
                          "range": [
                            1070,
                            1082
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 46
                            },
                            "start": {
                              "column": 65,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1070,
                          1082
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 46
                          },
                          "start": {
                            "column": 65,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1070,
                        1085
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 46
                        },
                        "start": {
                          "column": 65,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1048,
                    1085
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 46
                    },
                    "start": {
                      "column": 43,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1019,
                  1087
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 46
                  },
                  "start": {
                    "column": 14,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1011,
              1087
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
              }
            }
          },
          "init": {
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
                    1096,
                    1099
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            1115,
                            1116
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 47
                            },
                            "start": {
                              "column": 23,
                              "line": 47
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
                            1117,
                            1123
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 47
                            },
                            "start": {
                              "column": 25,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1115,
                          1123
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 47
                          },
                          "start": {
                            "column": 23,
                            "line": 47
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          1126,
                          1127
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 47
                          },
                          "start": {
                            "column": 34,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1115,
                        1127
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 47
                        },
                        "start": {
                          "column": 23,
                          "line": 47
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        1130,
                        1131
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 47
                        },
                        "start": {
                          "column": 38,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1115,
                      1131
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 47
                      },
                      "start": {
                        "column": 23,
                        "line": 47
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              1104,
                              1105
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 47
                              },
                              "start": {
                                "column": 12,
                                "line": 47
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              1104,
                              1105
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 47
                              },
                              "start": {
                                "column": 12,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1104,
                            1105
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 47
                            },
                            "start": {
                              "column": 12,
                              "line": 47
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              1107,
                              1108
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 47
                              },
                              "start": {
                                "column": 15,
                                "line": 47
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              1107,
                              1108
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 47
                              },
                              "start": {
                                "column": 15,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1107,
                            1108
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 47
                            },
                            "start": {
                              "column": 15,
                              "line": 47
                            }
                          }
                        }
                      ],
                      "range": [
                        1102,
                        1110
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 47
                        },
                        "start": {
                          "column": 10,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "range": [
                    1101,
                    1131
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 47
                    },
                    "start": {
                      "column": 9,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1096,
                  1131
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"12\"",
                  "value": "12",
                  "range": [
                    1137,
                    1141
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            1164,
                            1165
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 48
                            },
                            "start": {
                              "column": 31,
                              "line": 48
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "range": [
                          1157,
                          1163
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 48
                          },
                          "start": {
                            "column": 24,
                            "line": 48
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1157,
                        1166
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 48
                        },
                        "start": {
                          "column": 24,
                          "line": 48
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        1169,
                        1170
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 48
                        },
                        "start": {
                          "column": 36,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1157,
                      1170
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 48
                      },
                      "start": {
                        "column": 24,
                        "line": 48
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              1146,
                              1147
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 48
                              },
                              "start": {
                                "column": 13,
                                "line": 48
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              1146,
                              1147
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 48
                              },
                              "start": {
                                "column": 13,
                                "line": 48
                              }
                            }
                          },
                          "range": [
                            1146,
                            1147
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 48
                            },
                            "start": {
                              "column": 13,
                              "line": 48
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              1149,
                              1150
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 48
                              },
                              "start": {
                                "column": 16,
                                "line": 48
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              1149,
                              1150
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 48
                              },
                              "start": {
                                "column": 16,
                                "line": 48
                              }
                            }
                          },
                          "range": [
                            1149,
                            1150
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 48
                            },
                            "start": {
                              "column": 16,
                              "line": 48
                            }
                          }
                        }
                      ],
                      "range": [
                        1144,
                        1152
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 48
                        },
                        "start": {
                          "column": 11,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "range": [
                    1143,
                    1170
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 48
                    },
                    "start": {
                      "column": 10,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1137,
                  1170
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    1176,
                    1178
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "TemplateLiteral",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1197,
                          1198
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 49
                          },
                          "start": {
                            "column": 25,
                            "line": 49
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          1201,
                          1202
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 49
                          },
                          "start": {
                            "column": 29,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          1194,
                          1197
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 49
                          },
                          "start": {
                            "column": 22,
                            "line": 49
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          1198,
                          1201
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 49
                          },
                          "start": {
                            "column": 26,
                            "line": 49
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
                          1202,
                          1204
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 49
                          },
                          "start": {
                            "column": 30,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "range": [
                      1194,
                      1204
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 49
                      },
                      "start": {
                        "column": 22,
                        "line": 49
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              1183,
                              1184
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 49
                              },
                              "start": {
                                "column": 11,
                                "line": 49
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "range": [
                              1183,
                              1184
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 49
                              },
                              "start": {
                                "column": 11,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            1183,
                            1184
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 49
                            },
                            "start": {
                              "column": 11,
                              "line": 49
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              1186,
                              1187
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 49
                              },
                              "start": {
                                "column": 14,
                                "line": 49
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              1186,
                              1187
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 49
                              },
                              "start": {
                                "column": 14,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            1186,
                            1187
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 49
                            },
                            "start": {
                              "column": 14,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "range": [
                        1181,
                        1189
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 49
                        },
                        "start": {
                          "column": 9,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "range": [
                    1180,
                    1204
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1176,
                  1204
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              }
            ],
            "range": [
              1090,
              1207
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 50
              },
              "start": {
                "column": 85,
                "line": 46
              }
            }
          },
          "range": [
            1011,
            1207
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1005,
        1207
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "resolveMapper1",
            "optional": false,
            "range": [
              1215,
              1229
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 52
              },
              "start": {
                "column": 6,
                "line": 52
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    1310,
                    1311
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 53
                    },
                    "start": {
                      "column": 45,
                      "line": 53
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapper",
                  "optional": false,
                  "range": [
                    1298,
                    1304
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 53
                    },
                    "start": {
                      "column": 33,
                      "line": 53
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "range": [
                    1305,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 53
                    },
                    "start": {
                      "column": 40,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1298,
                  1309
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 53
                  },
                  "start": {
                    "column": 33,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "range": [
                1298,
                1312
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 53
                },
                "start": {
                  "column": 33,
                  "line": 53
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
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 53
                    },
                    "start": {
                      "column": 7,
                      "line": 53
                    }
                  },
                  "range": [
                    1272,
                    1275
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        1274,
                        1275
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 53
                        },
                        "start": {
                          "column": 9,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1274,
                      1275
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 53
                      },
                      "start": {
                        "column": 9,
                        "line": 53
                      }
                    }
                  }
                },
                "range": [
                  1269,
                  1275
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 53
                    },
                    "start": {
                      "column": 13,
                      "line": 53
                    }
                  },
                  "range": [
                    1278,
                    1293
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1290,
                        1293
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
                              1291,
                              1292
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 53
                              },
                              "start": {
                                "column": 26,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            1291,
                            1292
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 53
                            },
                            "start": {
                              "column": 26,
                              "line": 53
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 53
                        },
                        "start": {
                          "column": 25,
                          "line": 53
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MapperArgs",
                      "optional": false,
                      "range": [
                        1280,
                        1290
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 53
                        },
                        "start": {
                          "column": 15,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1280,
                      1293
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 53
                      },
                      "start": {
                        "column": 15,
                        "line": 53
                      }
                    }
                  }
                },
                "range": [
                  1277,
                  1293
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 53
                  },
                  "start": {
                    "column": 12,
                    "line": 53
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 52
                },
                "start": {
                  "column": 23,
                  "line": 52
                }
              },
              "range": [
                1232,
                1263
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapper",
                        "optional": false,
                        "range": [
                          1256,
                          1262
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 52
                          },
                          "start": {
                            "column": 47,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        1249,
                        1262
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 52
                        },
                        "start": {
                          "column": 40,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1243,
                      1262
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 52
                      },
                      "start": {
                        "column": 34,
                        "line": 52
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
                      1233,
                      1234
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 52
                      },
                      "start": {
                        "column": 24,
                        "line": 52
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1233,
                    1262
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 52
                    },
                    "start": {
                      "column": 24,
                      "line": 52
                    }
                  }
                }
              ]
            },
            "range": [
              1232,
              1312
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 53
              },
              "start": {
                "column": 23,
                "line": 52
              }
            }
          },
          "range": [
            1215,
            1312
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 52
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1209,
        1313
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "resolveMapper2",
            "optional": false,
            "range": [
              1331,
              1345
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 55
              },
              "start": {
                "column": 6,
                "line": 55
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "range": [
                      1428,
                      1429
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 56
                      },
                      "start": {
                        "column": 47,
                        "line": 56
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "range": [
                      1414,
                      1420
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 56
                      },
                      "start": {
                        "column": 33,
                        "line": 56
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      1421,
                      1424
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 56
                      },
                      "start": {
                        "column": 40,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1414,
                    1425
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 56
                    },
                    "start": {
                      "column": 33,
                      "line": 56
                    }
                  }
                },
                "optional": true,
                "range": [
                  1414,
                  1430
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 56
                  },
                  "start": {
                    "column": 33,
                    "line": 56
                  }
                }
              },
              "range": [
                1414,
                1430
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 56
                },
                "start": {
                  "column": 33,
                  "line": 56
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
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 56
                    },
                    "start": {
                      "column": 7,
                      "line": 56
                    }
                  },
                  "range": [
                    1388,
                    1391
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        1390,
                        1391
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 56
                        },
                        "start": {
                          "column": 9,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1390,
                      1391
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 56
                      },
                      "start": {
                        "column": 9,
                        "line": 56
                      }
                    }
                  }
                },
                "range": [
                  1385,
                  1391
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 56
                    },
                    "start": {
                      "column": 13,
                      "line": 56
                    }
                  },
                  "range": [
                    1394,
                    1409
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1406,
                        1409
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
                              1407,
                              1408
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 56
                              },
                              "start": {
                                "column": 26,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            1407,
                            1408
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 56
                            },
                            "start": {
                              "column": 26,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 56
                        },
                        "start": {
                          "column": 25,
                          "line": 56
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MapperArgs",
                      "optional": false,
                      "range": [
                        1396,
                        1406
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 56
                        },
                        "start": {
                          "column": 15,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1396,
                      1409
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 56
                      },
                      "start": {
                        "column": 15,
                        "line": 56
                      }
                    }
                  }
                },
                "range": [
                  1393,
                  1409
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 56
                  },
                  "start": {
                    "column": 12,
                    "line": 56
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 55
                },
                "start": {
                  "column": 23,
                  "line": 55
                }
              },
              "range": [
                1348,
                1379
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapper",
                        "optional": false,
                        "range": [
                          1372,
                          1378
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 55
                          },
                          "start": {
                            "column": 47,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1365,
                        1378
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 55
                        },
                        "start": {
                          "column": 40,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1359,
                      1378
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 55
                      },
                      "start": {
                        "column": 34,
                        "line": 55
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
                      1349,
                      1350
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 55
                      },
                      "start": {
                        "column": 24,
                        "line": 55
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1349,
                    1378
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 55
                    },
                    "start": {
                      "column": 24,
                      "line": 55
                    }
                  }
                }
              ]
            },
            "range": [
              1348,
              1430
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 56
              },
              "start": {
                "column": 23,
                "line": 55
              }
            }
          },
          "range": [
            1331,
            1430
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 56
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1325,
        1430
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "range": [
          1459,
          1463
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 60
          },
          "start": {
            "column": 5,
            "line": 60
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
                1472,
                1473
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
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
                  "column": 13,
                  "line": 61
                },
                "start": {
                  "column": 5,
                  "line": 61
                }
              },
              "range": [
                1473,
                1481
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1475,
                  1481
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 61
                  },
                  "start": {
                    "column": 7,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              1472,
              1482
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
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
                1487,
                1488
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
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
                  "column": 13,
                  "line": 62
                },
                "start": {
                  "column": 5,
                  "line": 62
                }
              },
              "range": [
                1488,
                1496
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1490,
                  1496
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 62
                  },
                  "start": {
                    "column": 7,
                    "line": 62
                  }
                }
              }
            },
            "range": [
              1487,
              1497
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "range": [
          1466,
          1499
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 12,
            "line": 60
          }
        }
      },
      "range": [
        1454,
        1500
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 63
        },
        "start": {
          "column": 0,
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
        "name": "Obj2",
        "optional": false,
        "range": [
          1507,
          1511
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 65
          },
          "start": {
            "column": 5,
            "line": 65
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
              "name": "b",
              "optional": false,
              "range": [
                1520,
                1521
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
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
                  "column": 13,
                  "line": 66
                },
                "start": {
                  "column": 5,
                  "line": 66
                }
              },
              "range": [
                1521,
                1529
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1523,
                  1529
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 66
                  },
                  "start": {
                    "column": 7,
                    "line": 66
                  }
                }
              }
            },
            "range": [
              1520,
              1530
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                1535,
                1536
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
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
                  "column": 14,
                  "line": 67
                },
                "start": {
                  "column": 5,
                  "line": 67
                }
              },
              "range": [
                1536,
                1545
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1538,
                  1545
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 67
                  },
                  "start": {
                    "column": 7,
                    "line": 67
                  }
                }
              }
            },
            "range": [
              1535,
              1546
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          }
        ],
        "range": [
          1514,
          1548
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 68
          },
          "start": {
            "column": 12,
            "line": 65
          }
        }
      },
      "range": [
        1502,
        1549
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 65
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
            "name": "mapIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 72
                },
                "start": {
                  "column": 29,
                  "line": 70
                }
              },
              "range": [
                1580,
                1644
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1608,
                            1614
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Obj1",
                                "optional": false,
                                "range": [
                                  1609,
                                  1613
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 71
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 71
                                  }
                                }
                              },
                              "range": [
                                1609,
                                1613
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 71
                                },
                                "start": {
                                  "column": 25,
                                  "line": 71
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 71
                            },
                            "start": {
                              "column": 24,
                              "line": 71
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "range": [
                            1601,
                            1608
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 71
                            },
                            "start": {
                              "column": 17,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1601,
                          1614
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 71
                          },
                          "start": {
                            "column": 17,
                            "line": 71
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1625,
                            1631
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Obj2",
                                "optional": false,
                                "range": [
                                  1626,
                                  1630
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 71
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 71
                                  }
                                }
                              },
                              "range": [
                                1626,
                                1630
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 71
                                },
                                "start": {
                                  "column": 42,
                                  "line": 71
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 71
                            },
                            "start": {
                              "column": 41,
                              "line": 71
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Required",
                          "optional": false,
                          "range": [
                            1617,
                            1625
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 71
                            },
                            "start": {
                              "column": 33,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1617,
                          1631
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 71
                          },
                          "start": {
                            "column": 33,
                            "line": 71
                          }
                        }
                      }
                    ],
                    "range": [
                      1601,
                      1631
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 71
                      },
                      "start": {
                        "column": 17,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1594,
                    1632
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 71
                    },
                    "start": {
                      "column": 10,
                      "line": 71
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1589,
                    1590
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 71
                    },
                    "start": {
                      "column": 5,
                      "line": 71
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1635,
                    1641
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 71
                    },
                    "start": {
                      "column": 51,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1582,
                  1644
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 72
                  },
                  "start": {
                    "column": 31,
                    "line": 70
                  }
                }
              }
            },
            "range": [
              1565,
              1644
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 72
              },
              "start": {
                "column": 14,
                "line": 70
              }
            }
          },
          "init": null,
          "range": [
            1565,
            1644
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 72
            },
            "start": {
              "column": 14,
              "line": 70
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1551,
        1645
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 70
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
            "name": "accessMapped",
            "optional": false,
            "range": [
              1653,
              1665
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 74
              },
              "start": {
                "column": 6,
                "line": 74
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapIntersection",
                    "optional": false,
                    "range": [
                      1702,
                      1717
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 74
                      },
                      "start": {
                        "column": 55,
                        "line": 74
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      1718,
                      1721
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 74
                      },
                      "start": {
                        "column": 71,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    1702,
                    1722
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 74
                    },
                    "start": {
                      "column": 55,
                      "line": 74
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    1723,
                    1731
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 74
                    },
                    "start": {
                      "column": 76,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1702,
                  1731
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 74
                  },
                  "start": {
                    "column": 55,
                    "line": 74
                  }
                }
              },
              "optional": false,
              "range": [
                1702,
                1733
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 74
                },
                "start": {
                  "column": 55,
                  "line": 74
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
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 74
                    },
                    "start": {
                      "column": 47,
                      "line": 74
                    }
                  },
                  "range": [
                    1694,
                    1697
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        1696,
                        1697
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 74
                        },
                        "start": {
                          "column": 49,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1696,
                      1697
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 74
                      },
                      "start": {
                        "column": 49,
                        "line": 74
                      }
                    }
                  }
                },
                "range": [
                  1691,
                  1697
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 74
                  },
                  "start": {
                    "column": 44,
                    "line": 74
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 74
                },
                "start": {
                  "column": 21,
                  "line": 74
                }
              },
              "range": [
                1668,
                1690
              ],
              "params": [
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
                        "name": "Obj2",
                        "optional": false,
                        "range": [
                          1685,
                          1689
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 74
                          },
                          "start": {
                            "column": 38,
                            "line": 74
                          }
                        }
                      },
                      "range": [
                        1685,
                        1689
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 74
                        },
                        "start": {
                          "column": 38,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1679,
                      1689
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 74
                      },
                      "start": {
                        "column": 32,
                        "line": 74
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
                      1669,
                      1670
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 74
                      },
                      "start": {
                        "column": 22,
                        "line": 74
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1669,
                    1689
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 74
                    },
                    "start": {
                      "column": 22,
                      "line": 74
                    }
                  }
                }
              ]
            },
            "range": [
              1668,
              1733
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 74
              },
              "start": {
                "column": 21,
                "line": 74
              }
            }
          },
          "range": [
            1653,
            1733
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 74
            },
            "start": {
              "column": 6,
              "line": 74
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1647,
        1734
      ],
      "loc": {
        "end": {
          "column": 87,
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
            "name": "resolved",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 72,
                  "line": 76
                },
                "start": {
                  "column": 22,
                  "line": 76
                }
              },
              "range": [
                1758,
                1808
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
                        1762,
                        1763
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 76
                        },
                        "start": {
                          "column": 26,
                          "line": 76
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
                          "column": 48,
                          "line": 76
                        },
                        "start": {
                          "column": 28,
                          "line": 76
                        }
                      },
                      "range": [
                        1764,
                        1784
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              1766,
                              1772
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 76
                              },
                              "start": {
                                "column": 30,
                                "line": 76
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              1775,
                              1784
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 76
                              },
                              "start": {
                                "column": 39,
                                "line": 76
                              }
                            }
                          }
                        ],
                        "range": [
                          1766,
                          1784
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 76
                          },
                          "start": {
                            "column": 30,
                            "line": 76
                          }
                        }
                      }
                    },
                    "range": [
                      1762,
                      1785
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 76
                      },
                      "start": {
                        "column": 26,
                        "line": 76
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
                        1786,
                        1787
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 76
                        },
                        "start": {
                          "column": 50,
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
                          "column": 59,
                          "line": 76
                        },
                        "start": {
                          "column": 51,
                          "line": 76
                        }
                      },
                      "range": [
                        1787,
                        1795
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1789,
                          1795
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 76
                          },
                          "start": {
                            "column": 53,
                            "line": 76
                          }
                        }
                      }
                    },
                    "range": [
                      1786,
                      1796
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 76
                      },
                      "start": {
                        "column": 50,
                        "line": 76
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        1797,
                        1798
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 76
                        },
                        "start": {
                          "column": 61,
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
                          "column": 70,
                          "line": 76
                        },
                        "start": {
                          "column": 62,
                          "line": 76
                        }
                      },
                      "range": [
                        1798,
                        1806
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1800,
                          1806
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 76
                          },
                          "start": {
                            "column": 64,
                            "line": 76
                          }
                        }
                      }
                    },
                    "range": [
                      1797,
                      1806
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 76
                      },
                      "start": {
                        "column": 61,
                        "line": 76
                      }
                    }
                  }
                ],
                "range": [
                  1760,
                  1808
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 76
                  },
                  "start": {
                    "column": 24,
                    "line": 76
                  }
                }
              }
            },
            "range": [
              1750,
              1808
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 76
              },
              "start": {
                "column": 14,
                "line": 76
              }
            }
          },
          "init": null,
          "range": [
            1750,
            1808
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 76
            },
            "start": {
              "column": 14,
              "line": 76
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1736,
        1809
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
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
            "name": "accessResolved",
            "optional": false,
            "range": [
              1817,
              1831
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 78
              },
              "start": {
                "column": 6,
                "line": 78
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolved",
                    "optional": false,
                    "range": [
                      1868,
                      1876
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 78
                      },
                      "start": {
                        "column": 57,
                        "line": 78
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      1877,
                      1880
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 78
                      },
                      "start": {
                        "column": 66,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    1868,
                    1881
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 78
                    },
                    "start": {
                      "column": 57,
                      "line": 78
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    1882,
                    1890
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 78
                    },
                    "start": {
                      "column": 71,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1868,
                  1890
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 78
                  },
                  "start": {
                    "column": 57,
                    "line": 78
                  }
                }
              },
              "optional": false,
              "range": [
                1868,
                1892
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 78
                },
                "start": {
                  "column": 57,
                  "line": 78
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
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 78
                    },
                    "start": {
                      "column": 49,
                      "line": 78
                    }
                  },
                  "range": [
                    1860,
                    1863
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        1862,
                        1863
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 78
                        },
                        "start": {
                          "column": 51,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      1862,
                      1863
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 78
                      },
                      "start": {
                        "column": 51,
                        "line": 78
                      }
                    }
                  }
                },
                "range": [
                  1857,
                  1863
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 78
                  },
                  "start": {
                    "column": 46,
                    "line": 78
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 78
                },
                "start": {
                  "column": 23,
                  "line": 78
                }
              },
              "range": [
                1834,
                1856
              ],
              "params": [
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
                        "name": "Obj2",
                        "optional": false,
                        "range": [
                          1851,
                          1855
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 78
                          },
                          "start": {
                            "column": 40,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        1851,
                        1855
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 78
                        },
                        "start": {
                          "column": 40,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      1845,
                      1855
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 78
                      },
                      "start": {
                        "column": 34,
                        "line": 78
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
                      1835,
                      1836
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 78
                      },
                      "start": {
                        "column": 24,
                        "line": 78
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1835,
                    1855
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 78
                    },
                    "start": {
                      "column": 24,
                      "line": 78
                    }
                  }
                }
              ]
            },
            "range": [
              1834,
              1892
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 78
              },
              "start": {
                "column": 23,
                "line": 78
              }
            }
          },
          "range": [
            1817,
            1892
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 78
            },
            "start": {
              "column": 6,
              "line": 78
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1811,
        1893
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
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
          1933,
          1936
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 82
          },
          "start": {
            "column": 5,
            "line": 82
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
              "name": "prop",
              "optional": false,
              "range": [
                1945,
                1949
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 83
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
                  "column": 16,
                  "line": 83
                },
                "start": {
                  "column": 8,
                  "line": 83
                }
              },
              "range": [
                1949,
                1957
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1951,
                  1957
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 83
                  },
                  "start": {
                    "column": 10,
                    "line": 83
                  }
                }
              }
            },
            "range": [
              1945,
              1958
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          }
        ],
        "range": [
          1939,
          1960
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 11,
            "line": 82
          }
        }
      },
      "range": [
        1928,
        1960
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 82
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    2055,
                    2058
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 87
                    },
                    "start": {
                      "column": 4,
                      "line": 87
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "range": [
                    2059,
                    2062
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2055,
                  2063
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 87
                  },
                  "start": {
                    "column": 4,
                    "line": 87
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
                  2064,
                  2070
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 87
                  },
                  "start": {
                    "column": 13,
                    "line": 87
                  }
                }
              },
              "range": [
                2055,
                2070
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            "range": [
              2055,
              2071
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          }
        ],
        "range": [
          2049,
          2073
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 87,
            "line": 86
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
          1971,
          1975
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 86
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 86
              },
              "start": {
                "column": 38,
                "line": 86
              }
            },
            "range": [
              2000,
              2039
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2006,
                  2039
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
                            2015,
                            2020
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "range": [
                                  2016,
                                  2019
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 86
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 86
                                  }
                                }
                              },
                              "range": [
                                2016,
                                2019
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 86
                                },
                                "start": {
                                  "column": 54,
                                  "line": 86
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 86
                            },
                            "start": {
                              "column": 53,
                              "line": 86
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Required",
                          "optional": false,
                          "range": [
                            2007,
                            2015
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 86
                            },
                            "start": {
                              "column": 45,
                              "line": 86
                            }
                          }
                        },
                        "range": [
                          2007,
                          2020
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 86
                          },
                          "start": {
                            "column": 45,
                            "line": 86
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            2030,
                            2035
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "range": [
                                  2031,
                                  2034
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 86
                                  },
                                  "start": {
                                    "column": 69,
                                    "line": 86
                                  }
                                }
                              },
                              "range": [
                                2031,
                                2034
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 86
                                },
                                "start": {
                                  "column": 69,
                                  "line": 86
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 86
                            },
                            "start": {
                              "column": 68,
                              "line": 86
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "range": [
                            2023,
                            2030
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 86
                            },
                            "start": {
                              "column": 61,
                              "line": 86
                            }
                          }
                        },
                        "range": [
                          2023,
                          2035
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 86
                          },
                          "start": {
                            "column": 61,
                            "line": 86
                          }
                        }
                      }
                    ],
                    "range": [
                      2007,
                      2035
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 86
                      },
                      "start": {
                        "column": 45,
                        "line": 86
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        2037,
                        2038
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 86
                        },
                        "start": {
                          "column": 75,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      2037,
                      2038
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 86
                      },
                      "start": {
                        "column": 75,
                        "line": 86
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 86
                  },
                  "start": {
                    "column": 44,
                    "line": 86
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  2002,
                  2006
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 86
                  },
                  "start": {
                    "column": 40,
                    "line": 86
                  }
                }
              },
              "range": [
                2002,
                2039
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 86
                },
                "start": {
                  "column": 40,
                  "line": 86
                }
              }
            }
          },
          "range": [
            1997,
            2039
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 86
            },
            "start": {
              "column": 35,
              "line": 86
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 85,
                "line": 86
              },
              "start": {
                "column": 82,
                "line": 86
              }
            },
            "range": [
              2044,
              2047
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  2046,
                  2047
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 86
                  },
                  "start": {
                    "column": 84,
                    "line": 86
                  }
                }
              },
              "range": [
                2046,
                2047
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 86
                },
                "start": {
                  "column": 84,
                  "line": 86
                }
              }
            }
          },
          "range": [
            2041,
            2047
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 86
            },
            "start": {
              "column": 79,
              "line": 86
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 86
          },
          "start": {
            "column": 13,
            "line": 86
          }
        },
        "range": [
          1975,
          1996
        ],
        "params": [
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
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    1992,
                    1995
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 86
                    },
                    "start": {
                      "column": 30,
                      "line": 86
                    }
                  }
                },
                "range": [
                  1992,
                  1995
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 86
                  },
                  "start": {
                    "column": 30,
                    "line": 86
                  }
                }
              },
              "range": [
                1986,
                1995
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 86
                },
                "start": {
                  "column": 24,
                  "line": 86
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
                1976,
                1977
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 86
                },
                "start": {
                  "column": 14,
                  "line": 86
                }
              }
            },
            "out": false,
            "range": [
              1976,
              1995
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 86
              },
              "start": {
                "column": 14,
                "line": 86
              }
            }
          }
        ]
      },
      "range": [
        1962,
        2073
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 89
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
