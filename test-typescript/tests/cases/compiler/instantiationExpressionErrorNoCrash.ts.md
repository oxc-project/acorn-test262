__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    379
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
            "name": "createCacheReducer",
            "optional": false,
            "range": [
              6,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
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
                        "name": "queriesMap",
                        "optional": false,
                        "range": [
                          106,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            119,
                            121
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 4
                            },
                            "start": {
                              "column": 23,
                              "line": 4
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "QR",
                            "optional": false,
                            "range": [
                              125,
                              127
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 4
                              },
                              "start": {
                                "column": 29,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            125,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 29,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          119,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        106,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 10,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    100,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
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
                        "name": "initialState",
                        "optional": false,
                        "range": [
                          140,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 6
                          },
                          "start": {
                            "column": 10,
                            "line": 6
                          }
                        }
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "queries",
                              "optional": false,
                              "range": [
                                165,
                                172
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 7
                                },
                                "start": {
                                  "column": 8,
                                  "line": 7
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "queriesMap",
                              "optional": false,
                              "range": [
                                174,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 7
                                },
                                "start": {
                                  "column": 17,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              165,
                              184
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 7
                              },
                              "start": {
                                "column": 8,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          155,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 8
                          },
                          "start": {
                            "column": 25,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        140,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 8
                        },
                        "start": {
                          "column": 10,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    134,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        231,
                        236
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 10
                        },
                        "start": {
                          "column": 37,
                          "line": 10
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "range": [
                            206,
                            211
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "initialState",
                          "optional": false,
                          "range": [
                            214,
                            226
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          206,
                          226
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      205,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    198,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                94,
                239
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  },
                  "range": [
                    62,
                    87
                  ],
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"queries\"",
                        "value": "queries",
                        "range": [
                          77,
                          86
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        77,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          69,
                          76
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "range": [
                                70,
                                71
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 2
                                },
                                "start": {
                                  "column": 19,
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
                                "column": 20,
                                "line": 2
                              },
                              "start": {
                                "column": 19,
                                "line": 2
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "QR",
                              "optional": false,
                              "range": [
                                73,
                                75
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 2
                                },
                                "start": {
                                  "column": 22,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              73,
                              75
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 2
                              },
                              "start": {
                                "column": 22,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 2
                          },
                          "start": {
                            "column": 18,
                            "line": 2
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cache",
                        "optional": false,
                        "range": [
                          64,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 2
                          },
                          "start": {
                            "column": 13,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        64,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 13,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      64,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  55,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              },
              "range": [
                27,
                49
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      38,
                      44
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 1
                      },
                      "start": {
                        "column": 38,
                        "line": 1
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
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
                  "out": false,
                  "range": [
                    28,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
                      "line": 1
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
                    "name": "QR",
                    "optional": false,
                    "range": [
                      46,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 1
                      },
                      "start": {
                        "column": 46,
                        "line": 1
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    46,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 1
                    },
                    "start": {
                      "column": 46,
                      "line": 1
                    }
                  }
                }
              ]
            },
            "range": [
              27,
              239
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          "range": [
            6,
            239
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        240
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        242,
        379
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cache",
          "optional": false,
          "range": [
            254,
            259
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
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
                "name": "queries",
                "optional": false,
                "range": [
                  290,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
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
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                },
                "range": [
                  297,
                  375
                ],
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
                        "name": "QR",
                        "optional": false,
                        "range": [
                          322,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 15
                          },
                          "start": {
                            "column": 21,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        322,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 21,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      316,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "QK",
                    "optional": false,
                    "range": [
                      310,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        337,
                        368
                      ],
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createCacheReducer",
                            "optional": false,
                            "range": [
                              345,
                              363
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 15
                              },
                              "start": {
                                "column": 44,
                                "line": 15
                              }
                            }
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              363,
                              367
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "QR",
                                  "optional": false,
                                  "range": [
                                    364,
                                    366
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 65,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 63,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  364,
                                  366
                                ],
                                "loc": {
                                  "end": {
                                    "column": 65,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 15
                              },
                              "start": {
                                "column": 62,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            338,
                            367
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 15
                            },
                            "start": {
                              "column": 37,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 15
                        },
                        "start": {
                          "column": 36,
                          "line": 15
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "range": [
                        327,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 15
                        },
                        "start": {
                          "column": 26,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      327,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    299,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                }
              },
              "range": [
                290,
                376
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            284,
            378
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 42,
              "line": 13
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 39,
              "line": 13
            },
            "start": {
              "column": 17,
              "line": 13
            }
          },
          "range": [
            259,
            281
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  270,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 13
                  },
                  "start": {
                    "column": 28,
                    "line": 13
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "range": [
                  260,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              },
              "out": false,
              "range": [
                260,
                276
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
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
                "name": "QR",
                "optional": false,
                "range": [
                  278,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 13
                  },
                  "start": {
                    "column": 36,
                    "line": 13
                  }
                }
              },
              "out": false,
              "range": [
                278,
                280
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 13
                },
                "start": {
                  "column": 36,
                  "line": 13
                }
              }
            }
          ]
        },
        "range": [
          249,
          379
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
