__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    399
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InexactOptionals",
        "optional": false,
        "range": [
          5,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    45,
                    46
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
                  45,
                  46
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
                39,
                46
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
              "name": "K",
              "optional": false,
              "range": [
                34,
                35
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
            "nameType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSUndefinedKeyword",
                "range": [
                  50,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "extendsType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      70,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 2
                      },
                      "start": {
                        "column": 41,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    70,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 2
                    },
                    "start": {
                      "column": 41,
                      "line": 2
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      68,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 39,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    68,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 2
                    },
                    "start": {
                      "column": 39,
                      "line": 2
                    }
                  }
                },
                "range": [
                  68,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 2
                  },
                  "start": {
                    "column": 39,
                    "line": 2
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  79,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 2
                  },
                  "start": {
                    "column": 50,
                    "line": 2
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    75,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 2
                    },
                    "start": {
                      "column": 46,
                      "line": 2
                    }
                  }
                },
                "range": [
                  75,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 2
                  },
                  "start": {
                    "column": 46,
                    "line": 2
                  }
                }
              },
              "range": [
                50,
                84
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "optional": true,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSUndefinedKeyword",
                "range": [
                  88,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 2
                  },
                  "start": {
                    "column": 59,
                    "line": 2
                  }
                }
              },
              "extendsType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      108,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 2
                      },
                      "start": {
                        "column": 79,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    108,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 2
                    },
                    "start": {
                      "column": 79,
                      "line": 2
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      106,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 2
                      },
                      "start": {
                        "column": 77,
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
                      "column": 78,
                      "line": 2
                    },
                    "start": {
                      "column": 77,
                      "line": 2
                    }
                  }
                },
                "range": [
                  106,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 2
                  },
                  "start": {
                    "column": 77,
                    "line": 2
                  }
                }
              },
              "falseType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      142,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    142,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      140,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 4
                      },
                      "start": {
                        "column": 6,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    140,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "range": [
                  140,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              },
              "trueType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          119,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        119,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          117,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 3
                          },
                          "start": {
                            "column": 6,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        117,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 3
                        },
                        "start": {
                          "column": 6,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      117,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 3
                      },
                      "start": {
                        "column": 6,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      124,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  117,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              },
              "range": [
                88,
                144
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 59,
                  "line": 2
                }
              }
            },
            "range": [
              27,
              147
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    168,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                },
                "range": [
                  168,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 16,
                    "line": 6
                  }
                }
              },
              "range": [
                162,
                169
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                157,
                158
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              }
            },
            "nameType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSUndefinedKeyword",
                "range": [
                  173,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              "extendsType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      193,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 6
                      },
                      "start": {
                        "column": 41,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    193,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 6
                    },
                    "start": {
                      "column": 41,
                      "line": 6
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      191,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 39,
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
                      "column": 40,
                      "line": 6
                    },
                    "start": {
                      "column": 39,
                      "line": 6
                    }
                  }
                },
                "range": [
                  191,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 39,
                    "line": 6
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    206,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 6
                    },
                    "start": {
                      "column": 54,
                      "line": 6
                    }
                  }
                },
                "range": [
                  206,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 6
                  },
                  "start": {
                    "column": 54,
                    "line": 6
                  }
                }
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "range": [
                  198,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 6
                  },
                  "start": {
                    "column": 46,
                    "line": 6
                  }
                }
              },
              "range": [
                173,
                207
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
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
                    212,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 6
                    },
                    "start": {
                      "column": 60,
                      "line": 6
                    }
                  }
                },
                "range": [
                  212,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 6
                  },
                  "start": {
                    "column": 60,
                    "line": 6
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    210,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 6
                    },
                    "start": {
                      "column": 58,
                      "line": 6
                    }
                  }
                },
                "range": [
                  210,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 6
                  },
                  "start": {
                    "column": 58,
                    "line": 6
                  }
                }
              },
              "range": [
                210,
                214
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 6
                },
                "start": {
                  "column": 58,
                  "line": 6
                }
              }
            },
            "range": [
              150,
              217
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          27,
          217
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 27,
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
              "name": "A",
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
        218
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "In",
        "optional": false,
        "range": [
          225,
          227
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                236,
                239
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                240,
                248
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  242,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              236,
              249
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                254,
                257
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              },
              "range": [
                257,
                265
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  259,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              254,
              266
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                271,
                274
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              },
              "range": [
                274,
                285
              ],
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "range": [
                  276,
                  285
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              271,
              286
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          230,
          288
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        220,
        288
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Out",
        "optional": false,
        "range": [
          295,
          298
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            317,
            321
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "In",
                "optional": false,
                "range": [
                  318,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 28,
                    "line": 15
                  }
                }
              },
              "range": [
                318,
                320
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 28,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 15
            },
            "start": {
              "column": 27,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InexactOptionals",
          "optional": false,
          "range": [
            301,
            317
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 15
            },
            "start": {
              "column": 11,
              "line": 15
            }
          }
        },
        "range": [
          301,
          321
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 15
          }
        }
      },
      "range": [
        290,
        321
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "foo",
            "optional": false,
            "range": [
              329,
              332
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  365,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 17
                  },
                  "start": {
                    "column": 42,
                    "line": 17
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
                        "column": 37,
                        "line": 17
                      },
                      "start": {
                        "column": 28,
                        "line": 17
                      }
                    },
                    "range": [
                      351,
                      360
                    ],
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Out",
                            "optional": false,
                            "range": [
                              353,
                              356
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 17
                              },
                              "start": {
                                "column": 30,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            353,
                            356
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 17
                            },
                            "start": {
                              "column": 30,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              359,
                              360
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 17
                              },
                              "start": {
                                "column": 36,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            359,
                            360
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 17
                            },
                            "start": {
                              "column": 36,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        353,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 17
                        },
                        "start": {
                          "column": 30,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    350,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 17
                    },
                    "start": {
                      "column": 27,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                349,
                369
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 17
                },
                "start": {
                  "column": 26,
                  "line": 17
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              },
              "range": [
                335,
                343
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      340,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      336,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    336,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                }
              ]
            },
            "range": [
              335,
              369
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          "range": [
            329,
            369
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        323,
        369
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        371,
        398
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
              "name": "baddts",
              "optional": false,
              "range": [
                384,
                390
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  393,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 19
                  },
                  "start": {
                    "column": 22,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "range": [
                393,
                398
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 19
                }
              }
            },
            "range": [
              384,
              398
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          378,
          398
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
