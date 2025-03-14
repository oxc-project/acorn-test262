__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    283
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          45,
          138
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                49,
                54
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                56,
                59
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "range": [
                  58,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              }
            },
            "static": false,
            "range": [
              49,
              60
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapValues",
              "optional": false,
              "range": [
                63,
                72
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 5
                    },
                    "start": {
                      "column": 19,
                      "line": 5
                    }
                  },
                  "range": [
                    80,
                    102
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 23,
                              "line": 5
                            }
                          },
                          "range": [
                            84,
                            96
                          ],
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "indexType": {
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
                                    94,
                                    95
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  94,
                                  95
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                88,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 5
                                },
                                "start": {
                                  "column": 27,
                                  "line": 5
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
                                  86,
                                  87
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                86,
                                87
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 5
                                },
                                "start": {
                                  "column": 25,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              86,
                              96
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 5
                              },
                              "start": {
                                "column": 25,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          83,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 5
                          },
                          "start": {
                            "column": 22,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 5
                        },
                        "start": {
                          "column": 37,
                          "line": 5
                        }
                      },
                      "range": [
                        98,
                        102
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            101,
                            102
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 5
                            },
                            "start": {
                              "column": 40,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          101,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 5
                          },
                          "start": {
                            "column": 40,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      82,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  76,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 74,
                  "line": 5
                },
                "start": {
                  "column": 42,
                  "line": 5
                }
              },
              "range": [
                103,
                135
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    114,
                    135
                  ],
                  "params": [
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
                            "name": "T",
                            "optional": false,
                            "range": [
                              128,
                              129
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 5
                              },
                              "start": {
                                "column": 67,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            128,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 5
                            },
                            "start": {
                              "column": 67,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          122,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 5
                          },
                          "start": {
                            "column": 61,
                            "line": 5
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "range": [
                          117,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 5
                          },
                          "start": {
                            "column": 56,
                            "line": 5
                          }
                        }
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            132,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 5
                            },
                            "start": {
                              "column": 71,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          132,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 5
                          },
                          "start": {
                            "column": 71,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        115,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 5
                        },
                        "start": {
                          "column": 54,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 5
                    },
                    "start": {
                      "column": 53,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Chainable",
                  "optional": false,
                  "range": [
                    105,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 5
                    },
                    "start": {
                      "column": 44,
                      "line": 5
                    }
                  }
                },
                "range": [
                  105,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 5
                  },
                  "start": {
                    "column": 44,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              },
              "range": [
                72,
                75
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      73,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    73,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              63,
              136
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chainable",
        "optional": false,
        "range": [
          32,
          41
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        },
        "range": [
          41,
          44
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
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              42,
              43
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        138
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
        "name": "chain",
        "optional": false,
        "range": [
          157,
          162
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 27,
                "line": 8
              }
            },
            "range": [
              167,
              170
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  169,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 29,
                    "line": 8
                  }
                }
              },
              "range": [
                169,
                170
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 29,
                  "line": 8
                }
              }
            }
          },
          "range": [
            166,
            170
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 8
            },
            "start": {
              "column": 26,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 8
          },
          "start": {
            "column": 31,
            "line": 8
          }
        },
        "range": [
          171,
          185
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              182,
              185
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
                    183,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 8
                    },
                    "start": {
                      "column": 43,
                      "line": 8
                    }
                  }
                },
                "range": [
                  183,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 8
                  },
                  "start": {
                    "column": 43,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 8
              },
              "start": {
                "column": 42,
                "line": 8
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Chainable",
            "optional": false,
            "range": [
              173,
              182
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 8
              },
              "start": {
                "column": 33,
                "line": 8
              }
            }
          },
          "range": [
            173,
            185
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 8
            },
            "start": {
              "column": 33,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 8
          },
          "start": {
            "column": 22,
            "line": 8
          }
        },
        "range": [
          162,
          165
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
                163,
                164
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              163,
              164
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 23,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        140,
        186
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "square",
            "optional": false,
            "range": [
              194,
              200
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  218,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 10
                  },
                  "start": {
                    "column": 30,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  222,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
                    "line": 10
                  }
                }
              },
              "range": [
                218,
                223
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 10
                },
                "start": {
                  "column": 30,
                  "line": 10
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
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  },
                  "range": [
                    205,
                    213
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      207,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  204,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 16,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              203,
              223
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          },
          "range": [
            194,
            223
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        188,
        224
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "v",
            "optional": false,
            "range": [
              232,
              233
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "square",
                    "optional": false,
                    "range": [
                      266,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 12
                      },
                      "start": {
                        "column": 40,
                        "line": 12
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                243,
                                244
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 12
                                },
                                "start": {
                                  "column": 17,
                                  "line": 12
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                246,
                                247
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 12
                                },
                                "start": {
                                  "column": 20,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              243,
                              247
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 12
                              },
                              "start": {
                                "column": 17,
                                "line": 12
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                249,
                                250
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 12
                                },
                                "start": {
                                  "column": 23,
                                  "line": 12
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                252,
                                253
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 12
                                },
                                "start": {
                                  "column": 26,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              249,
                              253
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 12
                              },
                              "start": {
                                "column": 23,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          242,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 12
                          },
                          "start": {
                            "column": 16,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chain",
                      "optional": false,
                      "range": [
                        236,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 10,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      236,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 12
                      },
                      "start": {
                        "column": 10,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapValues",
                    "optional": false,
                    "range": [
                      256,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 12
                      },
                      "start": {
                        "column": 30,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    236,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  236,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  274,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 12
                  },
                  "start": {
                    "column": 48,
                    "line": 12
                  }
                }
              },
              "range": [
                236,
                279
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              236,
              281
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 12
              },
              "start": {
                "column": 10,
                "line": 12
              }
            }
          },
          "range": [
            232,
            281
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        226,
        282
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
      "line": 3
    }
  },
  "hashbang": null
}
```
