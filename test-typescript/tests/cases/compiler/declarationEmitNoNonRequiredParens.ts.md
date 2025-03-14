__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    157
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        32
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            17,
            32
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  26,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              },
              "range": [
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  29,
                  30
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
                29,
                30
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
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "range": [
            12,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "range": [
          7,
          32
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        34,
        69
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestType",
          "optional": false,
          "range": [
            46,
            54
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "range": [
              64,
              68
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 30,
                "line": 5
              }
            }
          },
          "range": [
            57,
            68
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 23,
              "line": 5
            }
          }
        },
        "range": [
          41,
          69
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        71,
        157
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
              "name": "bar",
              "optional": false,
              "range": [
                84,
                87
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "init": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      90,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    90,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          115,
                          139
                        ],
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TestType",
                                "optional": false,
                                "range": [
                                  122,
                                  130
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                122,
                                130
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 7
                                },
                                "start": {
                                  "column": 51,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              116,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 7
                              },
                              "start": {
                                "column": 45,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              132,
                              138
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 7
                              },
                              "start": {
                                "column": 61,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 7
                          },
                          "start": {
                            "column": 44,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "range": [
                          108,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 7
                          },
                          "start": {
                            "column": 37,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        108,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 7
                        },
                        "start": {
                          "column": 37,
                          "line": 7
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TestType",
                        "optional": false,
                        "range": [
                          99,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 7
                          },
                          "start": {
                            "column": 28,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        99,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 7
                        },
                        "start": {
                          "column": 28,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      99,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    99,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  }
                },
                "range": [
                  90,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  153,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 7
                  },
                  "start": {
                    "column": 82,
                    "line": 7
                  }
                }
              },
              "range": [
                90,
                156
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "range": [
              84,
              156
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          78,
          157
        ],
        "loc": {
          "end": {
            "column": 86,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 86,
          "line": 7
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
      "column": 86,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
