__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    68,
    227
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          73,
          76
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              112,
              113
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 44,
                "line": 3
              }
            }
          },
          "range": [
            112,
            113
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 44,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  132,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 3
                  },
                  "start": {
                    "column": 64,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              165,
                              166
                            ],
                            "loc": {
                              "end": {
                                "column": 98,
                                "line": 3
                              },
                              "start": {
                                "column": 97,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            165,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 3
                            },
                            "start": {
                              "column": 97,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          165,
                          168
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 3
                          },
                          "start": {
                            "column": 97,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        156,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 3
                        },
                        "start": {
                          "column": 88,
                          "line": 3
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "range": [
                        146,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 3
                        },
                        "start": {
                          "column": 78,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      146,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 3
                      },
                      "start": {
                        "column": 78,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    140,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 3
                    },
                    "start": {
                      "column": 72,
                      "line": 3
                    }
                  }
                },
                "range": [
                  137,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 3
                  },
                  "start": {
                    "column": 69,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              131,
              169
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 3
              },
              "start": {
                "column": 63,
                "line": 3
              }
            }
          },
          "range": [
            122,
            169
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 3
            },
            "start": {
              "column": 54,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            176,
            181
          ],
          "loc": {
            "end": {
              "column": 113,
              "line": 3
            },
            "start": {
              "column": 108,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "range": [
              172,
              173
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 3
              },
              "start": {
                "column": 104,
                "line": 3
              }
            }
          },
          "range": [
            172,
            173
          ],
          "loc": {
            "end": {
              "column": 105,
              "line": 3
            },
            "start": {
              "column": 104,
              "line": 3
            }
          }
        },
        "range": [
          112,
          181
        ],
        "loc": {
          "end": {
            "column": 113,
            "line": 3
          },
          "start": {
            "column": 44,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 3
          }
        },
        "range": [
          76,
          109
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                77,
                78
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
            "out": false,
            "range": [
              77,
              78
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    99,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  }
                },
                "range": [
                  99,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 3
                  },
                  "start": {
                    "column": 31,
                    "line": 3
                  }
                }
              },
              "range": [
                90,
                108
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
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
                80,
                81
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
            "out": false,
            "range": [
              80,
              108
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        68,
        182
      ],
      "loc": {
        "end": {
          "column": 114,
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
        "name": "Res1",
        "optional": false,
        "range": [
          188,
          192
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            198,
            226
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      199,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    199,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      205,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    205,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                199,
                208
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      211,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    211,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 28,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      216,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 4
                      },
                      "start": {
                        "column": 33,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    216,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      221,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 4
                      },
                      "start": {
                        "column": 38,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    221,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 4
                    },
                    "start": {
                      "column": 38,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                210,
                225
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 4
            },
            "start": {
              "column": 15,
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
            195,
            198
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
        "range": [
          195,
          226
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 4
          }
        }
      },
      "range": [
        183,
        226
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
