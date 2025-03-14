__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    30,
    122
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hmm",
        "optional": false,
        "range": [
          35,
          38
        ],
        "loc": {
          "end": {
            "column": 8,
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
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  42,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              "range": [
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            41,
            44
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 2
            },
            "start": {
              "column": 11,
              "line": 2
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    60,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 2
                    },
                    "start": {
                      "column": 30,
                      "line": 2
                    }
                  }
                },
                "out": false,
                "range": [
                  60,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 30,
                    "line": 2
                  }
                }
              },
              "range": [
                54,
                61
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  63,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 33,
                    "line": 2
                  }
                }
              },
              "range": [
                63,
                67
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 2
                },
                "start": {
                  "column": 33,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            53,
            68
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            117,
            122
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        },
        "trueType": {
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
                  76,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              },
              "range": [
                76,
                77
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        80,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 3
                        },
                        "start": {
                          "column": 9,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      80,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  79,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        92,
                        93
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
                      92,
                      93
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
                ],
                "range": [
                  91,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
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
                    104,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                },
                "range": [
                  104,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 33,
                    "line": 3
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
                    97,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                },
                "range": [
                  97,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              "range": [
                79,
                109
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            75,
            110
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "range": [
          41,
          122
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 2
          }
        }
      },
      "range": [
        30,
        122
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 11,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
