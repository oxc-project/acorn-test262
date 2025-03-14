__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    998
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attributes",
        "optional": false,
        "range": [
          27,
          37
        ],
        "loc": {
          "end": {
            "column": 15,
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
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "range": [
              78,
              82
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "range": [
            78,
            82
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "range": [
            71,
            74
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 4
            },
            "start": {
              "column": 5,
              "line": 4
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            85,
            91
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 4
            }
          }
        },
        "range": [
          64,
          94
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 42,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          37,
          61
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  57,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "range": [
                51,
                60
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "range": [
                38,
                42
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              38,
              60
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        94
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          139,
          207
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiply",
              "optional": false,
              "range": [
                145,
                153
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                153,
                205
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
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
                        "column": 48,
                        "line": 8
                      },
                      "start": {
                        "column": 45,
                        "line": 8
                      }
                    },
                    "range": [
                      186,
                      189
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          188,
                          189
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 8
                          },
                          "start": {
                            "column": 47,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        188,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 8
                        },
                        "start": {
                          "column": 47,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    185,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 8
                    },
                    "start": {
                      "column": 44,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 8
                  },
                  "start": {
                    "column": 49,
                    "line": 8
                  }
                },
                "range": [
                  190,
                  204
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      197,
                      204
                    ],
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                198,
                                199
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 8
                                },
                                "start": {
                                  "column": 57,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              198,
                              199
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 8
                              },
                              "start": {
                                "column": 57,
                                "line": 8
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                202,
                                203
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 8
                                },
                                "start": {
                                  "column": 61,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              202,
                              203
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 8
                              },
                              "start": {
                                "column": 61,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "range": [
                          198,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 8
                          },
                          "start": {
                            "column": 57,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 8
                      },
                      "start": {
                        "column": 56,
                        "line": 8
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Query",
                    "optional": false,
                    "range": [
                      192,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 8
                      },
                      "start": {
                        "column": 51,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    192,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 8
                    },
                    "start": {
                      "column": 51,
                      "line": 8
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                },
                "range": [
                  153,
                  184
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
                          174,
                          183
                        ],
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "range": [
                                  181,
                                  182
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                181,
                                182
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 8
                                },
                                "start": {
                                  "column": 40,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              175,
                              182
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 8
                              },
                              "start": {
                                "column": 34,
                                "line": 8
                              }
                            }
                          }
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
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attributes",
                        "optional": false,
                        "range": [
                          164,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 8
                          },
                          "start": {
                            "column": 23,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        164,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        154,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      154,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 64,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "range": [
              145,
              205
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 43,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "range": [
          102,
          107
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        },
        "range": [
          107,
          138
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
                  128,
                  137
                ],
                "params": [
                  {
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
                          135,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 7
                          },
                          "start": {
                            "column": 39,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        135,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 7
                        },
                        "start": {
                          "column": 39,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      129,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 7
                      },
                      "start": {
                        "column": 33,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attributes",
                "optional": false,
                "range": [
                  118,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              "range": [
                118,
                137
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
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
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              108,
              137
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        96,
        207
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassName",
        "optional": false,
        "range": [
          236,
          245
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "range": [
              257,
              258
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 26,
                "line": 13
              }
            }
          },
          "range": [
            257,
            258
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 13
            },
            "start": {
              "column": 26,
              "line": 13
            }
          }
        },
        "range": [
          251,
          258
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 13
          },
          "start": {
            "column": 20,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        },
        "range": [
          245,
          248
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                246,
                247
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              246,
              247
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        231,
        259
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassNameMap",
        "optional": false,
        "range": [
          265,
          277
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
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
              "name": "S",
              "optional": false,
              "range": [
                297,
                298
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 14
                },
                "start": {
                  "column": 37,
                  "line": 14
                }
              }
            },
            "range": [
              297,
              298
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 14
              },
              "start": {
                "column": 37,
                "line": 14
              }
            }
          },
          "range": [
            291,
            298
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 14
            },
            "start": {
              "column": 31,
              "line": 14
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            286,
            287
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 14
            },
            "start": {
              "column": 26,
              "line": 14
            }
          }
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            302,
            309
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 14
            },
            "start": {
              "column": 42,
              "line": 14
            }
          }
        },
        "range": [
          283,
          311
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 14
          },
          "start": {
            "column": 23,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 14
          }
        },
        "range": [
          277,
          280
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                278,
                279
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              278,
              279
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 18,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        260,
        311
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassNameObjectMap",
        "optional": false,
        "range": [
          317,
          335
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSObjectKeyword",
            "range": [
              341,
              347
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 15
              },
              "start": {
                "column": 29,
                "line": 15
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                362,
                365
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      363,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 51,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    363,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 15
                    },
                    "start": {
                      "column": 51,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 15
                },
                "start": {
                  "column": 50,
                  "line": 15
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassNameMap",
              "optional": false,
              "range": [
                350,
                362
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 15
                },
                "start": {
                  "column": 38,
                  "line": 15
                }
              }
            },
            "range": [
              350,
              365
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 15
              },
              "start": {
                "column": 38,
                "line": 15
              }
            }
          }
        ],
        "range": [
          341,
          365
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 15
          },
          "start": {
            "column": 29,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 15
          },
          "start": {
            "column": 23,
            "line": 15
          }
        },
        "range": [
          335,
          338
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                336,
                337
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              336,
              337
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 24,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        312,
        366
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassNameArg",
        "optional": false,
        "range": [
          372,
          384
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                399,
                402
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      400,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 16
                      },
                      "start": {
                        "column": 33,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    400,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 16
                    },
                    "start": {
                      "column": 33,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 16
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassName",
              "optional": false,
              "range": [
                390,
                399
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 16
                },
                "start": {
                  "column": 23,
                  "line": 16
                }
              }
            },
            "range": [
              390,
              402
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 23,
                "line": 16
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                423,
                426
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      424,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 16
                      },
                      "start": {
                        "column": 57,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    424,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 16
                    },
                    "start": {
                      "column": 57,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 16
                },
                "start": {
                  "column": 56,
                  "line": 16
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassNameObjectMap",
              "optional": false,
              "range": [
                405,
                423
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 16
                },
                "start": {
                  "column": 38,
                  "line": 16
                }
              }
            },
            "range": [
              405,
              426
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 16
              },
              "start": {
                "column": 38,
                "line": 16
              }
            }
          }
        ],
        "range": [
          390,
          426
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 16
          },
          "start": {
            "column": 23,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 16
          }
        },
        "range": [
          384,
          387
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                385,
                386
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 18,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              385,
              386
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 16
              },
              "start": {
                "column": 18,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        367,
        427
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        429,
        997
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
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
                    "name": "args",
                    "optional": false,
                    "range": [
                      550,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  "init": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "alternate": null,
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "raw": "null",
                                      "value": null,
                                      "range": [
                                        617,
                                        621
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "range": [
                                      610,
                                      622
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 21
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  602,
                                  628
                                ],
                                "loc": {
                                  "end": {
                                    "column": 5,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 20
                                  }
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "range": [
                                    589,
                                    592
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 11,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 20
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "null",
                                  "value": null,
                                  "range": [
                                    596,
                                    600
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  589,
                                  600
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                585,
                                628
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 22
                                },
                                "start": {
                                  "column": 4,
                                  "line": 20
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "alternate": null,
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "styles",
                                        "optional": false,
                                        "range": [
                                          676,
                                          682
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 19,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 13,
                                            "line": 24
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "range": [
                                          683,
                                          686
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 24
                                          }
                                        }
                                      },
                                      "range": [
                                        676,
                                        687
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 24
                                        }
                                      }
                                    },
                                    "range": [
                                      669,
                                      688
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 24
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  661,
                                  694
                                ],
                                "loc": {
                                  "end": {
                                    "column": 5,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 23
                                  }
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "range": [
                                      644,
                                      647
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    637,
                                    647
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 23
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"string\"",
                                  "value": "string",
                                  "range": [
                                    651,
                                    659
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 23
                                    }
                                  }
                                },
                                "range": [
                                  637,
                                  659
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 23
                                  }
                                }
                              },
                              "range": [
                                633,
                                694
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 25
                                },
                                "start": {
                                  "column": 4,
                                  "line": 23
                                }
                              }
                            },
                            {
                              "type": "IfStatement",
                              "alternate": null,
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
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
                                                      "name": "exportedClassName",
                                                      "optional": false,
                                                      "range": [
                                                        839,
                                                        856
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 31,
                                                          "line": 28
                                                        },
                                                        "start": {
                                                          "column": 14,
                                                          "line": 28
                                                        }
                                                      }
                                                    },
                                                    "init": {
                                                      "type": "MemberExpression",
                                                      "computed": true,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "styles",
                                                        "optional": false,
                                                        "range": [
                                                          859,
                                                          865
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 40,
                                                            "line": 28
                                                          },
                                                          "start": {
                                                            "column": 34,
                                                            "line": 28
                                                          }
                                                        }
                                                      },
                                                      "optional": false,
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "key",
                                                        "optional": false,
                                                        "range": [
                                                          866,
                                                          869
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 44,
                                                            "line": 28
                                                          },
                                                          "start": {
                                                            "column": 41,
                                                            "line": 28
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        859,
                                                        870
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 45,
                                                          "line": 28
                                                        },
                                                        "start": {
                                                          "column": 34,
                                                          "line": 28
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      839,
                                                      870
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 45,
                                                        "line": 28
                                                      },
                                                      "start": {
                                                        "column": 14,
                                                        "line": 28
                                                      }
                                                    }
                                                  }
                                                ],
                                                "declare": false,
                                                "kind": "const",
                                                "range": [
                                                  833,
                                                  871
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 46,
                                                    "line": 28
                                                  },
                                                  "start": {
                                                    "column": 8,
                                                    "line": 28
                                                  }
                                                }
                                              },
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "obj",
                                                      "optional": false,
                                                      "range": [
                                                        880,
                                                        883
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 11,
                                                          "line": 29
                                                        },
                                                        "start": {
                                                          "column": 8,
                                                          "line": 29
                                                        }
                                                      }
                                                    },
                                                    "optional": false,
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "exportedClassName",
                                                      "optional": false,
                                                      "range": [
                                                        884,
                                                        901
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 29,
                                                          "line": 29
                                                        },
                                                        "start": {
                                                          "column": 12,
                                                          "line": 29
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      880,
                                                      902
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 30,
                                                        "line": 29
                                                      },
                                                      "start": {
                                                        "column": 8,
                                                        "line": 29
                                                      }
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "TSAsExpression",
                                                      "expression": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "arg",
                                                        "optional": false,
                                                        "range": [
                                                          906,
                                                          909
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 37,
                                                            "line": 29
                                                          },
                                                          "start": {
                                                            "column": 34,
                                                            "line": 29
                                                          }
                                                        }
                                                      },
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeArguments": {
                                                          "type": "TSTypeParameterInstantiation",
                                                          "range": [
                                                            925,
                                                            928
                                                          ],
                                                          "params": [
                                                            {
                                                              "type": "TSTypeReference",
                                                              "typeName": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "S",
                                                                "optional": false,
                                                                "range": [
                                                                  926,
                                                                  927
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 55,
                                                                    "line": 29
                                                                  },
                                                                  "start": {
                                                                    "column": 54,
                                                                    "line": 29
                                                                  }
                                                                }
                                                              },
                                                              "range": [
                                                                926,
                                                                927
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 55,
                                                                  "line": 29
                                                                },
                                                                "start": {
                                                                  "column": 54,
                                                                  "line": 29
                                                                }
                                                              }
                                                            }
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 56,
                                                              "line": 29
                                                            },
                                                            "start": {
                                                              "column": 53,
                                                              "line": 29
                                                            }
                                                          }
                                                        },
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "ClassNameMap",
                                                          "optional": false,
                                                          "range": [
                                                            913,
                                                            925
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 53,
                                                              "line": 29
                                                            },
                                                            "start": {
                                                              "column": 41,
                                                              "line": 29
                                                            }
                                                          }
                                                        },
                                                        "range": [
                                                          913,
                                                          928
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 56,
                                                            "line": 29
                                                          },
                                                          "start": {
                                                            "column": 41,
                                                            "line": 29
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        906,
                                                        928
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 56,
                                                          "line": 29
                                                        },
                                                        "start": {
                                                          "column": 34,
                                                          "line": 29
                                                        }
                                                      }
                                                    },
                                                    "optional": false,
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "key",
                                                      "optional": false,
                                                      "range": [
                                                        930,
                                                        933
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 61,
                                                          "line": 29
                                                        },
                                                        "start": {
                                                          "column": 58,
                                                          "line": 29
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      905,
                                                      934
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 62,
                                                        "line": 29
                                                      },
                                                      "start": {
                                                        "column": 33,
                                                        "line": 29
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    880,
                                                    934
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 62,
                                                      "line": 29
                                                    },
                                                    "start": {
                                                      "column": 8,
                                                      "line": 29
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  880,
                                                  935
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 63,
                                                    "line": 29
                                                  },
                                                  "start": {
                                                    "column": 8,
                                                    "line": 29
                                                  }
                                                }
                                              },
                                              {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "obj",
                                                  "optional": false,
                                                  "range": [
                                                    952,
                                                    955
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 18,
                                                      "line": 30
                                                    },
                                                    "start": {
                                                      "column": 15,
                                                      "line": 30
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  945,
                                                  956
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 19,
                                                    "line": 30
                                                  },
                                                  "start": {
                                                    "column": 8,
                                                    "line": 30
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              823,
                                              964
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 7,
                                                "line": 31
                                              },
                                              "start": {
                                                "column": 94,
                                                "line": 27
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
                                              "name": "obj",
                                              "optional": false,
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "loc": {
                                                  "end": {
                                                    "column": 75,
                                                    "line": 27
                                                  },
                                                  "start": {
                                                    "column": 58,
                                                    "line": 27
                                                  }
                                                },
                                                "range": [
                                                  787,
                                                  804
                                                ],
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "ClassNameObject",
                                                    "optional": false,
                                                    "range": [
                                                      789,
                                                      804
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 75,
                                                        "line": 27
                                                      },
                                                      "start": {
                                                        "column": 60,
                                                        "line": 27
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    789,
                                                    804
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 75,
                                                      "line": 27
                                                    },
                                                    "start": {
                                                      "column": 60,
                                                      "line": 27
                                                    }
                                                  }
                                                }
                                              },
                                              "range": [
                                                784,
                                                804
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 75,
                                                  "line": 27
                                                },
                                                "start": {
                                                  "column": 55,
                                                  "line": 27
                                                }
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "key",
                                              "optional": false,
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "loc": {
                                                  "end": {
                                                    "column": 89,
                                                    "line": 27
                                                  },
                                                  "start": {
                                                    "column": 80,
                                                    "line": 27
                                                  }
                                                },
                                                "range": [
                                                  809,
                                                  818
                                                ],
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "S",
                                                      "optional": false,
                                                      "range": [
                                                        817,
                                                        818
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 89,
                                                          "line": 27
                                                        },
                                                        "start": {
                                                          "column": 88,
                                                          "line": 27
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      817,
                                                      818
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 89,
                                                        "line": 27
                                                      },
                                                      "start": {
                                                        "column": 88,
                                                        "line": 27
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    811,
                                                    818
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 89,
                                                      "line": 27
                                                    },
                                                    "start": {
                                                      "column": 82,
                                                      "line": 27
                                                    }
                                                  }
                                                }
                                              },
                                              "range": [
                                                806,
                                                818
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 89,
                                                  "line": 27
                                                },
                                                "start": {
                                                  "column": 77,
                                                  "line": 27
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            783,
                                            964
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 7,
                                              "line": 31
                                            },
                                            "start": {
                                              "column": 54,
                                              "line": 27
                                            }
                                          }
                                        },
                                        {
                                          "type": "ObjectExpression",
                                          "properties": [],
                                          "range": [
                                            966,
                                            968
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 11,
                                              "line": 31
                                            },
                                            "start": {
                                              "column": 9,
                                              "line": 31
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
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "arg",
                                              "optional": false,
                                              "range": [
                                                754,
                                                757
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 28,
                                                  "line": 27
                                                },
                                                "start": {
                                                  "column": 25,
                                                  "line": 27
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Object",
                                              "optional": false,
                                              "range": [
                                                742,
                                                748
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 19,
                                                  "line": 27
                                                },
                                                "start": {
                                                  "column": 13,
                                                  "line": 27
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "keys",
                                              "optional": false,
                                              "range": [
                                                749,
                                                753
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 24,
                                                  "line": 27
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 27
                                                }
                                              }
                                            },
                                            "range": [
                                              742,
                                              753
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 24,
                                                "line": 27
                                              },
                                              "start": {
                                                "column": 13,
                                                "line": 27
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            742,
                                            758
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 27
                                            },
                                            "start": {
                                              "column": 13,
                                              "line": 27
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "range": [
                                            759,
                                            765
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 36,
                                              "line": 27
                                            },
                                            "start": {
                                              "column": 30,
                                              "line": 27
                                            }
                                          }
                                        },
                                        "range": [
                                          742,
                                          765
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 27
                                          },
                                          "start": {
                                            "column": 13,
                                            "line": 27
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          765,
                                          782
                                        ],
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "ClassNameObject",
                                              "optional": false,
                                              "range": [
                                                766,
                                                781
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 52,
                                                  "line": 27
                                                },
                                                "start": {
                                                  "column": 37,
                                                  "line": 27
                                                }
                                              }
                                            },
                                            "range": [
                                              766,
                                              781
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 52,
                                                "line": 27
                                              },
                                              "start": {
                                                "column": 37,
                                                "line": 27
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 53,
                                            "line": 27
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 27
                                          }
                                        }
                                      },
                                      "range": [
                                        742,
                                        969
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 12,
                                          "line": 31
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 27
                                        }
                                      }
                                    },
                                    "range": [
                                      735,
                                      970
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 27
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  727,
                                  976
                                ],
                                "loc": {
                                  "end": {
                                    "column": 5,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 26
                                  }
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "range": [
                                      710,
                                      713
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "operator": "typeof",
                                  "prefix": true,
                                  "range": [
                                    703,
                                    713
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 26
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "\"object\"",
                                  "value": "object",
                                  "range": [
                                    717,
                                    725
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  703,
                                  725
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                699,
                                976
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 32
                                },
                                "start": {
                                  "column": 4,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "range": [
                            579,
                            980
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 33
                            },
                            "start": {
                              "column": 37,
                              "line": 19
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
                            "name": "arg",
                            "optional": false,
                            "range": [
                              572,
                              575
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 19
                              },
                              "start": {
                                "column": 30,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          572,
                          980
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 33
                          },
                          "start": {
                            "column": 30,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "classNames",
                        "optional": false,
                        "range": [
                          557,
                          567
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 15,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "range": [
                          568,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 19
                          },
                          "start": {
                            "column": 26,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        557,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 19
                        },
                        "start": {
                          "column": 15,
                          "line": 19
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      557,
                      981
                    ],
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 33
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    550,
                    981
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                544,
                982
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 19
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  992,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 34
                  },
                  "start": {
                    "column": 9,
                    "line": 34
                  }
                }
              },
              "range": [
                985,
                995
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 34
                },
                "start": {
                  "column": 2,
                  "line": 34
                }
              }
            }
          ],
          "range": [
            540,
            997
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 111,
              "line": 18
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "css",
          "optional": false,
          "range": [
            445,
            448
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 18
            },
            "start": {
              "column": 16,
              "line": 18
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 18
                },
                "start": {
                  "column": 64,
                  "line": 18
                }
              },
              "range": [
                493,
                496
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    495,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 18
                    },
                    "start": {
                      "column": 66,
                      "line": 18
                    }
                  }
                },
                "range": [
                  495,
                  496
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 18
                  },
                  "start": {
                    "column": 66,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              487,
              496
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 18
              },
              "start": {
                "column": 58,
                "line": 18
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "classNames",
              "optional": false,
              "range": [
                501,
                511
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 18
                },
                "start": {
                  "column": 72,
                  "line": 18
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 101,
                  "line": 18
                },
                "start": {
                  "column": 82,
                  "line": 18
                }
              },
              "range": [
                511,
                530
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      525,
                      528
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "range": [
                            526,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 18
                            },
                            "start": {
                              "column": 97,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          526,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 18
                          },
                          "start": {
                            "column": 97,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 18
                      },
                      "start": {
                        "column": 96,
                        "line": 18
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassNameArg",
                    "optional": false,
                    "range": [
                      513,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 18
                      },
                      "start": {
                        "column": 84,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    513,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 18
                    },
                    "start": {
                      "column": 84,
                      "line": 18
                    }
                  }
                },
                "range": [
                  513,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 18
                  },
                  "start": {
                    "column": 84,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              498,
              530
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 18
              },
              "start": {
                "column": 69,
                "line": 18
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 110,
              "line": 18
            },
            "start": {
              "column": 102,
              "line": 18
            }
          },
          "range": [
            531,
            539
          ],
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              533,
              539
            ],
            "loc": {
              "end": {
                "column": 110,
                "line": 18
              },
              "start": {
                "column": 104,
                "line": 18
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 57,
              "line": 18
            },
            "start": {
              "column": 19,
              "line": 18
            }
          },
          "range": [
            448,
            486
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        473,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 18
                        },
                        "start": {
                          "column": 44,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      473,
                      474
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 18
                      },
                      "start": {
                        "column": 44,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    467,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 18
                    },
                    "start": {
                      "column": 38,
                      "line": 18
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    462,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 18
                    },
                    "start": {
                      "column": 33,
                      "line": 18
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    477,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 18
                    },
                    "start": {
                      "column": 48,
                      "line": 18
                    }
                  }
                },
                "range": [
                  459,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 18
                  },
                  "start": {
                    "column": 30,
                    "line": 18
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  449,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 20,
                    "line": 18
                  }
                }
              },
              "out": false,
              "range": [
                449,
                485
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            }
          ]
        },
        "range": [
          436,
          997
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
