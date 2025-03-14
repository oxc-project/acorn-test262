__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    288
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PartialDeep",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              }
            },
            "range": [
              35,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            }
          },
          "range": [
            29,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            24,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              51,
              57
            ],
            "params": [
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
                      54,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 1
                      },
                      "start": {
                        "column": 54,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    54,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 1
                    },
                    "start": {
                      "column": 54,
                      "line": 1
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
                      52,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 1
                      },
                      "start": {
                        "column": 52,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    52,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 1
                    },
                    "start": {
                      "column": 52,
                      "line": 1
                    }
                  }
                },
                "range": [
                  52,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 1
                  },
                  "start": {
                    "column": 52,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 51,
                "line": 1
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PartialDeep",
            "optional": false,
            "range": [
              40,
              51
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 1
              },
              "start": {
                "column": 40,
                "line": 1
              }
            }
          },
          "range": [
            40,
            57
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          }
        },
        "range": [
          22,
          58
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          19
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        59
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 1
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
        "name": "Many",
        "optional": false,
        "range": [
          65,
          69
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                75,
                76
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 15,
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
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 15,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    88,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 28,
                      "line": 2
                    }
                  }
                },
                "range": [
                  88,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 28,
                    "line": 2
                  }
                }
              },
              "range": [
                88,
                91
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              }
            },
            "range": [
              79,
              91
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          }
        ],
        "range": [
          75,
          91
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        },
        "range": [
          69,
          72
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
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              70,
              71
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        60,
        92
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          118,
          186
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sortBy",
              "optional": false,
              "range": [
                124,
                130
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iteratees",
                  "optional": false,
                  "range": [
                    134,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 5
                    },
                    "start": {
                      "column": 23,
                      "line": 5
                    }
                  },
                  "range": [
                    143,
                    167
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          149,
                          165
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                161,
                                164
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
                                      162,
                                      163
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    162,
                                    163
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 5
                                },
                                "start": {
                                  "column": 41,
                                  "line": 5
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PartialDeep",
                              "optional": false,
                              "range": [
                                150,
                                161
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 5
                                },
                                "start": {
                                  "column": 30,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              150,
                              164
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 5
                              },
                              "start": {
                                "column": 30,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 5
                          },
                          "start": {
                            "column": 29,
                            "line": 5
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Many",
                        "optional": false,
                        "range": [
                          145,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 5
                          },
                          "start": {
                            "column": 25,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        145,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 5
                        },
                        "start": {
                          "column": 25,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      145,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
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
                  131,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
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
                  "column": 63,
                  "line": 5
                },
                "start": {
                  "column": 48,
                  "line": 5
                }
              },
              "range": [
                168,
                183
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    180,
                    183
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
                          181,
                          182
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
                        181,
                        182
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
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 5
                    },
                    "start": {
                      "column": 60,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "range": [
                    170,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 5
                    },
                    "start": {
                      "column": 50,
                      "line": 5
                    }
                  }
                },
                "range": [
                  170,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 5
                  },
                  "start": {
                    "column": 50,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "range": [
              124,
              184
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 5
              },
              "start": {
                "column": 4,
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
            "column": 24,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "range": [
          104,
          114
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 20,
            "line": 4
          }
        },
        "range": [
          114,
          117
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
                115,
                116
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              115,
              116
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 21,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        94,
        186
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                195,
                220
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    207,
                    220
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              209,
                              210
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 8
                              },
                              "start": {
                                "column": 21,
                                "line": 8
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
                                "column": 30,
                                "line": 8
                              },
                              "start": {
                                "column": 22,
                                "line": 8
                              }
                            },
                            "range": [
                              210,
                              218
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                212,
                                218
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 8
                                },
                                "start": {
                                  "column": 24,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            209,
                            218
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        208,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 20,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 8
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "range": [
                    197,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  197,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              194,
              220
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  224,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 8
                  },
                  "start": {
                    "column": 36,
                    "line": 8
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  232,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 8
                  },
                  "start": {
                    "column": 44,
                    "line": 8
                  }
                }
              },
              "range": [
                224,
                235
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 8
                },
                "start": {
                  "column": 36,
                  "line": 8
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  249,
                  273
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            251,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 8
                            },
                            "start": {
                              "column": 63,
                              "line": 8
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
                              "column": 72,
                              "line": 8
                            },
                            "start": {
                              "column": 64,
                              "line": 8
                            }
                          },
                          "range": [
                            252,
                            260
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              254,
                              260
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 8
                              },
                              "start": {
                                "column": 66,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          251,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 8
                          },
                          "start": {
                            "column": 63,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            262,
                            263
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 8
                            },
                            "start": {
                              "column": 74,
                              "line": 8
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
                              "column": 83,
                              "line": 8
                            },
                            "start": {
                              "column": 75,
                              "line": 8
                            }
                          },
                          "range": [
                            263,
                            271
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              265,
                              271
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 8
                              },
                              "start": {
                                "column": 77,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          262,
                          271
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 8
                          },
                          "start": {
                            "column": 74,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      250,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 8
                      },
                      "start": {
                        "column": 62,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 8
                  },
                  "start": {
                    "column": 61,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Collection",
                "optional": false,
                "range": [
                  239,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 8
                  },
                  "start": {
                    "column": 51,
                    "line": 8
                  }
                }
              },
              "range": [
                239,
                273
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 8
                },
                "start": {
                  "column": 51,
                  "line": 8
                }
              }
            },
            "range": [
              224,
              273
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 8
              },
              "start": {
                "column": 36,
                "line": 8
              }
            }
          },
          "range": [
            194,
            274
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        188,
        275
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        277,
        287
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
