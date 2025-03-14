__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    30,
    211
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MatchArguments",
        "optional": false,
        "range": [
          35,
          49
        ],
        "loc": {
          "end": {
            "column": 19,
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
                73,
                74
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
            "range": [
              73,
              74
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
          "range": [
            67,
            74
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 10,
              "line": 4
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            62,
            63
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
                79,
                80
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            "range": [
              79,
              80
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
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
                77,
                78
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
            "range": [
              77,
              78
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
          "range": [
            77,
            81
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 20,
              "line": 4
            }
          }
        },
        "range": [
          55,
          84
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 3
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
          49,
          52
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
                50,
                51
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
              50,
              51
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
        30,
        85
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          142,
          211
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "calledWith",
              "optional": false,
              "range": [
                148,
                158
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    162,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 8
                    },
                    "start": {
                      "column": 22,
                      "line": 8
                    }
                  },
                  "range": [
                    166,
                    198
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        175,
                        198
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              190,
                              197
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TArgs",
                                  "optional": false,
                                  "range": [
                                    191,
                                    196
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  191,
                                  196
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 8
                              },
                              "start": {
                                "column": 46,
                                "line": 8
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MatchArguments",
                            "optional": false,
                            "range": [
                              176,
                              190
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 8
                              },
                              "start": {
                                "column": 32,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            176,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 8
                            },
                            "start": {
                              "column": 32,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 8
                        },
                        "start": {
                          "column": 31,
                          "line": 8
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "range": [
                        168,
                        175
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 24,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      168,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 8
                      },
                      "start": {
                        "column": 24,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  159,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 64,
                  "line": 8
                },
                "start": {
                  "column": 55,
                  "line": 8
                }
              },
              "range": [
                199,
                208
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  201,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 8
                  },
                  "start": {
                    "column": 57,
                    "line": 8
                  }
                }
              }
            },
            "static": false,
            "range": [
              148,
              209
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 55,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SinonSpyCallApi",
        "optional": false,
        "range": [
          97,
          112
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 7
          },
          "start": {
            "column": 25,
            "line": 7
          }
        },
        "range": [
          112,
          141
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
                  127,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 7
                  },
                  "start": {
                    "column": 40,
                    "line": 7
                  }
                }
              },
              "range": [
                127,
                132
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 7
                },
                "start": {
                  "column": 40,
                  "line": 7
                }
              }
            },
            "default": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  135,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 48,
                    "line": 7
                  }
                }
              },
              "range": [
                135,
                140
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 7
                },
                "start": {
                  "column": 48,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TArgs",
              "optional": false,
              "range": [
                113,
                118
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 26,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              113,
              140
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        87,
        211
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
