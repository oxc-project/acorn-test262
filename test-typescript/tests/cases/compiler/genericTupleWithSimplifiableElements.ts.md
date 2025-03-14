__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    417
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SS1",
        "optional": false,
        "range": [
          27,
          30
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
        "type": "TSStringKeyword",
        "range": [
          33,
          39
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "range": [
        22,
        40
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                46,
                102
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"AAA\"",
                        "value": "AAA",
                        "range": [
                          52,
                          57
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        52,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "range": [
                        49,
                        50
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
                    "optional": false,
                    "range": [
                      49,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SS1",
                            "optional": false,
                            "range": [
                              97,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 4
                              },
                              "start": {
                                "column": 56,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            97,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 4
                            },
                            "start": {
                              "column": 56,
                              "line": 4
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSMappedType",
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SS1",
                              "optional": false,
                              "range": [
                                76,
                                79
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 4
                                },
                                "start": {
                                  "column": 35,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              76,
                              79
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 4
                              },
                              "start": {
                                "column": 35,
                                "line": 4
                              }
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              71,
                              72
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
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    86,
                                    92
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 4
                                    }
                                  }
                                },
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    83,
                                    84
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 4
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  83,
                                  92
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "range": [
                              82,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 4
                              },
                              "start": {
                                "column": 41,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            68,
                            96
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 4
                            },
                            "start": {
                              "column": 27,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          68,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      },
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          62,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        62,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 4
                        },
                        "start": {
                          "column": 21,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      59,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  48,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              45,
              102
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"AAA\"",
                "value": "AAA",
                "range": [
                  106,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 4
                  },
                  "start": {
                    "column": 65,
                    "line": 4
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  113,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 4
                  },
                  "start": {
                    "column": 72,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              105,
              115
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 4
              },
              "start": {
                "column": 64,
                "line": 4
              }
            }
          },
          "range": [
            45,
            115
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        41,
        116
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SS2",
        "optional": false,
        "range": [
          123,
          126
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"1\"",
              "value": "1",
              "range": [
                129,
                132
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              129,
              132
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"2\"",
              "value": "2",
              "range": [
                135,
                138
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            },
            "range": [
              135,
              138
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"3\"",
              "value": "3",
              "range": [
                141,
                144
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "range": [
              141,
              144
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          }
        ],
        "range": [
          129,
          144
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 6
          }
        }
      },
      "range": [
        118,
        145
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                151,
                207
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"AAA\"",
                        "value": "AAA",
                        "range": [
                          157,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 7
                          },
                          "start": {
                            "column": 11,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        157,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "range": [
                        154,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      154,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SS2",
                            "optional": false,
                            "range": [
                              202,
                              205
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 7
                              },
                              "start": {
                                "column": 56,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            202,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 7
                            },
                            "start": {
                              "column": 56,
                              "line": 7
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSMappedType",
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SS2",
                              "optional": false,
                              "range": [
                                181,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 7
                                },
                                "start": {
                                  "column": 35,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              181,
                              184
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 7
                              },
                              "start": {
                                "column": 35,
                                "line": 7
                              }
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              176,
                              177
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 7
                              },
                              "start": {
                                "column": 30,
                                "line": 7
                              }
                            }
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    191,
                                    197
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 7
                                    }
                                  }
                                },
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    188,
                                    189
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 7
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  188,
                                  197
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "range": [
                              187,
                              198
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 7
                              },
                              "start": {
                                "column": 41,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            173,
                            201
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 7
                            },
                            "start": {
                              "column": 27,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          173,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 7
                          },
                          "start": {
                            "column": 27,
                            "line": 7
                          }
                        }
                      },
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          167,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        167,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 7
                        },
                        "start": {
                          "column": 21,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      164,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 7
                      },
                      "start": {
                        "column": 18,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  153,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              150,
              207
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"AAA\"",
                "value": "AAA",
                "range": [
                  211,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 7
                  },
                  "start": {
                    "column": 65,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  218,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 7
                  },
                  "start": {
                    "column": 72,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              210,
              220
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 7
              },
              "start": {
                "column": 64,
                "line": 7
              }
            }
          },
          "range": [
            150,
            220
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        146,
        221
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          249,
          416
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                255,
                256
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                256,
                414
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
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
                          "name": "w",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 11
                              },
                              "start": {
                                "column": 13,
                                "line": 11
                              }
                            },
                            "range": [
                              274,
                              318
                            ],
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSRestType",
                                  "typeAnnotation": {
                                    "type": "TSNamedTupleMember",
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "SS",
                                          "optional": false,
                                          "range": [
                                            314,
                                            316
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 55,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 53,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "range": [
                                          314,
                                          316
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 55,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 53,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "constraint": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "SS",
                                            "optional": false,
                                            "range": [
                                              294,
                                              296
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 35,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 33,
                                                "line": 11
                                              }
                                            }
                                          },
                                          "range": [
                                            294,
                                            296
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 35,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 33,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "range": [
                                            289,
                                            290
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "nameType": null,
                                        "typeAnnotation": {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSNamedTupleMember",
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "range": [
                                                  303,
                                                  309
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 48,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 42,
                                                    "line": 11
                                                  }
                                                }
                                              },
                                              "label": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "range": [
                                                  300,
                                                  301
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 40,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 39,
                                                    "line": 11
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "range": [
                                                300,
                                                309
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 48,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 39,
                                                  "line": 11
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            299,
                                            310
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 49,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 38,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "range": [
                                          286,
                                          313
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        286,
                                        317
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 56,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "range": [
                                        280,
                                        284
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      280,
                                      317
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    277,
                                    317
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 11
                                    }
                                  }
                                }
                              ],
                              "range": [
                                276,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 11
                                },
                                "start": {
                                  "column": 15,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            273,
                            318
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                322,
                                323
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 11
                                },
                                "start": {
                                  "column": 61,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "range": [
                            321,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 11
                            },
                            "start": {
                              "column": 60,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          273,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      269,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 13
                              },
                              "start": {
                                "column": 13,
                                "line": 13
                              }
                            },
                            "range": [
                              340,
                              394
                            ],
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSNamedTupleMember",
                                  "elementType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "raw": "\"AAA\"",
                                      "value": "AAA",
                                      "range": [
                                        346,
                                        351
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      346,
                                      351
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false,
                                    "range": [
                                      343,
                                      344
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    343,
                                    351
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 13
                                    }
                                  }
                                },
                                {
                                  "type": "TSRestType",
                                  "typeAnnotation": {
                                    "type": "TSNamedTupleMember",
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "SS",
                                          "optional": false,
                                          "range": [
                                            390,
                                            392
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 65,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 63,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "range": [
                                          390,
                                          392
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 65,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 63,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "constraint": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "SS",
                                            "optional": false,
                                            "range": [
                                              370,
                                              372
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 45,
                                                "line": 13
                                              },
                                              "start": {
                                                "column": 43,
                                                "line": 13
                                              }
                                            }
                                          },
                                          "range": [
                                            370,
                                            372
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 45,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 43,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "range": [
                                            365,
                                            366
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 39,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 38,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "nameType": null,
                                        "typeAnnotation": {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSNamedTupleMember",
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "range": [
                                                  379,
                                                  385
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 58,
                                                    "line": 13
                                                  },
                                                  "start": {
                                                    "column": 52,
                                                    "line": 13
                                                  }
                                                }
                                              },
                                              "label": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "range": [
                                                  376,
                                                  377
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 50,
                                                    "line": 13
                                                  },
                                                  "start": {
                                                    "column": 49,
                                                    "line": 13
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "range": [
                                                376,
                                                385
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 58,
                                                  "line": 13
                                                },
                                                "start": {
                                                  "column": 49,
                                                  "line": 13
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            375,
                                            386
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 59,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 48,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "range": [
                                          362,
                                          389
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 62,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "range": [
                                        362,
                                        393
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 66,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "range": [
                                        356,
                                        360
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      356,
                                      393
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 66,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    353,
                                    393
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 66,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "range": [
                                342,
                                394
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 13
                                },
                                "start": {
                                  "column": 15,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            339,
                            394
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "raw": "\"AAA\"",
                              "value": "AAA",
                              "range": [
                                398,
                                403
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 13
                                },
                                "start": {
                                  "column": 71,
                                  "line": 13
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                405,
                                406
                              ],
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 13
                                },
                                "start": {
                                  "column": 78,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "range": [
                            397,
                            407
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 13
                            },
                            "start": {
                              "column": 70,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          339,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      335,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  259,
                  414
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              }
            },
            "range": [
              255,
              414
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 26,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          229,
          230
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        },
        "range": [
          230,
          249
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                242,
                248
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SS",
              "optional": false,
              "range": [
                231,
                233
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              231,
              248
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        223,
        416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
