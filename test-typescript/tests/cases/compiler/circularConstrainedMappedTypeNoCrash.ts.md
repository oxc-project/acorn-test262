__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    101
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Loop",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
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
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              55,
              56
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            49,
            56
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 10,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            44,
            45
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 2
            },
            "start": {
              "column": 5,
              "line": 2
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
                "name": "P",
                "optional": false,
                "range": [
                  61,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                61,
                62
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  59,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "range": [
              59,
              63
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          },
          "extendsType": {
            "type": "TSBooleanKeyword",
            "range": [
              72,
              79
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 2
              },
              "start": {
                "column": 33,
                "line": 2
              }
            }
          },
          "falseType": {
            "type": "TSStringKeyword",
            "range": [
              91,
              97
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 52,
                "line": 2
              }
            }
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "range": [
              82,
              88
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 2
              },
              "start": {
                "column": 43,
                "line": 2
              }
            }
          },
          "range": [
            59,
            97
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 2
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "range": [
          37,
          100
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 37,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          34
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
                10,
                11
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              10,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
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
                  27,
                  33
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
                        28,
                        29
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 1
                        },
                        "start": {
                          "column": 28,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      28,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        31,
                        32
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 1
                        },
                        "start": {
                          "column": 31,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      31,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 1
                      },
                      "start": {
                        "column": 31,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Loop",
                "optional": false,
                "range": [
                  23,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              },
              "range": [
                23,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
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
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        101
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
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
      "column": 2,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
