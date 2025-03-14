__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    24,
    134
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        24,
        61
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            36,
            39
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 3
            },
            "start": {
              "column": 12,
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
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            },
            "range": [
              51,
              60
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      55,
                      56
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 31,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    55,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "range": [
                      58,
                      59
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
                    58,
                    59
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
                }
              ],
              "range": [
                54,
                60
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 30,
                  "line": 3
                }
              }
            }
          },
          "range": [
            48,
            60
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          },
          "range": [
            39,
            45
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "range": [
                  40,
                  41
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
                40,
                41
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
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "range": [
                  43,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          31,
          61
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        62,
        95
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            74,
            77
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              86,
              94
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  87,
                  90
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
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    92,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 30,
                      "line": 4
                    }
                  }
                },
                "range": [
                  92,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 30,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 24,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "range": [
              83,
              86
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 21,
                "line": 4
              }
            }
          },
          "range": [
            83,
            94
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 4
            },
            "start": {
              "column": 21,
              "line": 4
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 15,
              "line": 4
            }
          },
          "range": [
            77,
            80
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "range": [
                  78,
                  79
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
              "out": false,
              "range": [
                78,
                79
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
            }
          ]
        },
        "range": [
          69,
          95
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 33,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        96,
        134
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
              "name": "y",
              "optional": false,
              "range": [
                109,
                110
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
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  133,
                  134
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
              "expression": true,
              "generator": false,
              "id": null,
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
                        "column": 32,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    },
                    "range": [
                      115,
                      128
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          120,
                          128
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              121,
                              127
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 5
                              },
                              "start": {
                                "column": 25,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 5
                          },
                          "start": {
                            "column": 24,
                            "line": 5
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          117,
                          120
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
                        117,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 5
                        },
                        "start": {
                          "column": 21,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    114,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 18,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                113,
                134
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "range": [
              109,
              134
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          103,
          134
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "column": 38,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
