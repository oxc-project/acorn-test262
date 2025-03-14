__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    39,
    252
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HomomorphicMappedType",
        "optional": false,
        "range": [
          44,
          65
        ],
        "loc": {
          "end": {
            "column": 26,
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
                85,
                86
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 46,
                  "line": 3
                }
              }
            },
            "range": [
              85,
              86
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 46,
                "line": 3
              }
            }
          },
          "range": [
            79,
            86
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 3
            },
            "start": {
              "column": 40,
              "line": 3
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            74,
            75
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 35,
              "line": 3
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
                  91,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
                  }
                }
              },
              "range": [
                91,
                92
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 3
                },
                "start": {
                  "column": 52,
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
                  89,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 3
                  },
                  "start": {
                    "column": 50,
                    "line": 3
                  }
                }
              },
              "range": [
                89,
                90
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 3
                },
                "start": {
                  "column": 50,
                  "line": 3
                }
              }
            },
            "range": [
              89,
              93
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 3
              },
              "start": {
                "column": 50,
                "line": 3
              }
            }
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "range": [
              102,
              108
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 3
              },
              "start": {
                "column": 63,
                "line": 3
              }
            }
          },
          "falseType": {
            "type": "TSNullKeyword",
            "range": [
              121,
              125
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 3
              },
              "start": {
                "column": 82,
                "line": 3
              }
            }
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "range": [
              111,
              118
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 3
              },
              "start": {
                "column": 72,
                "line": 3
              }
            }
          },
          "range": [
            89,
            125
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 3
            },
            "start": {
              "column": 50,
              "line": 3
            }
          }
        },
        "range": [
          71,
          127
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 3
          },
          "start": {
            "column": 32,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 26,
            "line": 3
          }
        },
        "range": [
          65,
          68
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
                66,
                67
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
            "out": false,
            "range": [
              66,
              67
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
          }
        ]
      },
      "range": [
        39,
        127
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "test",
        "optional": false,
        "range": [
          146,
          150
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
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 9,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            },
            "range": [
              189,
              192
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  191,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "range": [
                191,
                192
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            }
          },
          "range": [
            185,
            192
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 6
            },
            "start": {
              "column": 2,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            },
            "range": [
              198,
              243
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      204,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 7
                      },
                      "start": {
                        "column": 14,
                        "line": 7
                      }
                    },
                    "range": [
                      208,
                      234
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          231,
                          234
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
                                232,
                                233
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 7
                                },
                                "start": {
                                  "column": 38,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              232,
                              233
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 7
                              },
                              "start": {
                                "column": 38,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 7
                          },
                          "start": {
                            "column": 37,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HomomorphicMappedType",
                        "optional": false,
                        "range": [
                          210,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 7
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        210,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 7
                        },
                        "start": {
                          "column": 16,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    201,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 7
                  },
                  "start": {
                    "column": 42,
                    "line": 7
                  }
                },
                "range": [
                  236,
                  243
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    239,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 7
                    },
                    "start": {
                      "column": 45,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                200,
                243
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              }
            }
          },
          "range": [
            196,
            243
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 7
            },
            "start": {
              "column": 2,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 8
          },
          "start": {
            "column": 1,
            "line": 8
          }
        },
        "range": [
          245,
          251
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            247,
            251
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 8
            },
            "start": {
              "column": 3,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 5
          },
          "start": {
            "column": 21,
            "line": 5
          }
        },
        "range": [
          150,
          181
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        162,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 5
                        },
                        "start": {
                          "column": 33,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    161,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 5
                    },
                    "start": {
                      "column": 32,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        173,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 5
                        },
                        "start": {
                          "column": 44,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    172,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 5
                    },
                    "start": {
                      "column": 43,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                161,
                180
              ],
              "loc": {
                "end": {
                  "column": 51,
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
              "name": "T",
              "optional": false,
              "range": [
                151,
                152
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
              151,
              180
            ],
            "loc": {
              "end": {
                "column": 51,
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
        129,
        251
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 8
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
