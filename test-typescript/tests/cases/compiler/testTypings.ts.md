__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    127
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          25,
          52
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "compareTo",
              "optional": false,
              "range": [
                30,
                39
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  },
                  "range": [
                    45,
                    48
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        47,
                        48
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
                      47,
                      48
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
                  }
                },
                "range": [
                  40,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              30,
              50
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 3,
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
            "column": 25,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IComparable",
        "optional": false,
        "range": [
          10,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        },
        "range": [
          21,
          24
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
            "out": false,
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
          }
        ]
      },
      "range": [
        0,
        52
      ],
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sort",
        "optional": false,
        "range": [
          71,
          75
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 5
              },
              "start": {
                "column": 53,
                "line": 5
              }
            },
            "range": [
              107,
              112
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    109,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 5
                    },
                    "start": {
                      "column": 55,
                      "line": 5
                    }
                  }
                },
                "range": [
                  109,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 5
                  },
                  "start": {
                    "column": 55,
                    "line": 5
                  }
                }
              },
              "range": [
                109,
                112
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 5
                },
                "start": {
                  "column": 55,
                  "line": 5
                }
              }
            }
          },
          "range": [
            102,
            112
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 5
            },
            "start": {
              "column": 48,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 64,
            "line": 5
          },
          "start": {
            "column": 59,
            "line": 5
          }
        },
        "range": [
          113,
          118
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                115,
                116
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 5
                },
                "start": {
                  "column": 61,
                  "line": 5
                }
              }
            },
            "range": [
              115,
              116
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 5
              },
              "start": {
                "column": 61,
                "line": 5
              }
            }
          },
          "range": [
            115,
            118
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 5
            },
            "start": {
              "column": 61,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 5
          },
          "start": {
            "column": 21,
            "line": 5
          }
        },
        "range": [
          75,
          101
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
                  97,
                  100
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
                        98,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 5
                        },
                        "start": {
                          "column": 44,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      98,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 44,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IComparable",
                "optional": false,
                "range": [
                  86,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 5
                  },
                  "start": {
                    "column": 32,
                    "line": 5
                  }
                }
              },
              "range": [
                86,
                100
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
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
                76,
                77
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
            "out": false,
            "range": [
              76,
              100
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 5
              },
              "start": {
                "column": 22,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        54,
        119
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
