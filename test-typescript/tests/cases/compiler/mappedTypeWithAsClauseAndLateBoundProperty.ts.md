__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    141
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tgt2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                26
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    18,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  }
                },
                "range": [
                  18,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "src2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 82,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                44,
                110
              ],
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
                        60,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 2
                        },
                        "start": {
                          "column": 32,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      60,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 32,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    54,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 2
                    },
                    "start": {
                      "column": 26,
                      "line": 2
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
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                },
                "nameType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      79,
                      92
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
                            80,
                            81
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 2
                            },
                            "start": {
                              "column": 52,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 2
                          },
                          "start": {
                            "column": 52,
                            "line": 2
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
                            83,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 2
                            },
                            "start": {
                              "column": 55,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          83,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 2
                          },
                          "start": {
                            "column": 55,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 2
                      },
                      "start": {
                        "column": 51,
                        "line": 2
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "range": [
                      72,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 2
                      },
                      "start": {
                        "column": 44,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    72,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 2
                    },
                    "start": {
                      "column": 44,
                      "line": 2
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
                        106,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 2
                        },
                        "start": {
                          "column": 78,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      106,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 2
                      },
                      "start": {
                        "column": 78,
                        "line": 2
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "range": [
                        96,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 2
                        },
                        "start": {
                          "column": 68,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      96,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 2
                      },
                      "start": {
                        "column": 68,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    95,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 2
                    },
                    "start": {
                      "column": 67,
                      "line": 2
                    }
                  }
                },
                "range": [
                  46,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              40,
              110
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            40,
            110
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        28,
        111
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
          "name": "tgt2",
          "optional": false,
          "range": [
            112,
            116
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "src2",
          "optional": false,
          "range": [
            119,
            123
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        },
        "range": [
          112,
          123
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        112,
        124
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
