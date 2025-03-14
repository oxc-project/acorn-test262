__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    112
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        111
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
              "name": "thing",
              "optional": false,
              "range": [
                13,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
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
                      22,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 22,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    22,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
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
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          45,
                          51
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 1
                          },
                          "start": {
                            "column": 45,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        45,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 1
                        },
                        "start": {
                          "column": 45,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      39,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 1
                      },
                      "start": {
                        "column": 39,
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
                      34,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 1
                      },
                      "start": {
                        "column": 34,
                        "line": 1
                      }
                    }
                  },
                  "nameType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        64,
                        77
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
                              65,
                              66
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 1
                              },
                              "start": {
                                "column": 65,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            65,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 1
                            },
                            "start": {
                              "column": 65,
                              "line": 1
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"length\"",
                            "value": "length",
                            "range": [
                              68,
                              76
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 1
                              },
                              "start": {
                                "column": 68,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            68,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 1
                            },
                            "start": {
                              "column": 68,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 1
                        },
                        "start": {
                          "column": 64,
                          "line": 1
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "range": [
                        57,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 1
                        },
                        "start": {
                          "column": 57,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      57,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 1
                      },
                      "start": {
                        "column": 57,
                        "line": 1
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
                          91,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 1
                          },
                          "start": {
                            "column": 91,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        91,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 1
                        },
                        "start": {
                          "column": 91,
                          "line": 1
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          81,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 1
                          },
                          "start": {
                            "column": 81,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        81,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 1
                        },
                        "start": {
                          "column": 81,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      80,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 1
                      },
                      "start": {
                        "column": 80,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    31,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 1
                    },
                    "start": {
                      "column": 31,
                      "line": 1
                    }
                  }
                },
                "range": [
                  22,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  107,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 110,
                    "line": 1
                  },
                  "start": {
                    "column": 107,
                    "line": 1
                  }
                }
              },
              "range": [
                21,
                110
              ],
              "loc": {
                "end": {
                  "column": 110,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              110
            ],
            "loc": {
              "end": {
                "column": 110,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          111
        ],
        "loc": {
          "end": {
            "column": 111,
            "line": 1
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
          "column": 111,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
