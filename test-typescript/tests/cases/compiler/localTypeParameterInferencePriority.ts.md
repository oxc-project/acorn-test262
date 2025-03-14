__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    605
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        107
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnrollOnHover",
          "optional": false,
          "range": [
            12,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
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
              "name": "O",
              "optional": false,
              "range": [
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 46,
                  "line": 1
                }
              }
            },
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 1
              },
              "start": {
                "column": 46,
                "line": 1
              }
            }
          },
          "extendsType": {
            "type": "TSObjectKeyword",
            "range": [
              56,
              62
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 1
              },
              "start": {
                "column": 56,
                "line": 1
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              101,
              106
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "trueType": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "range": [
                    83,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  83,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                77,
                84
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 12,
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
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "nameType": null,
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
                    89,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 24,
                      "line": 2
                    }
                  }
                },
                "range": [
                  89,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "range": [
                    87,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  }
                },
                "range": [
                  87,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                87,
                91
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "range": [
              69,
              94
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "range": [
            46,
            106
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 3
            },
            "start": {
              "column": 46,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          },
          "range": [
            25,
            43
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  36,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 36,
                    "line": 1
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "range": [
                  26,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                26,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          107
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 10,
          "line": 3
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
        110,
        155
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Schema",
          "optional": false,
          "range": [
            122,
            128
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              137,
              154
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  138,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 28,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSUnknownKeyword",
                "range": [
                  146,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 36,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              131,
              137
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 21,
                "line": 6
              }
            }
          },
          "range": [
            131,
            154
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 6
            },
            "start": {
              "column": 21,
              "line": 6
            }
          }
        },
        "range": [
          117,
          155
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 45,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          187,
          351
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__schema",
              "optional": false,
              "range": [
                193,
                201
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              },
              "range": [
                202,
                205
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    204,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                },
                "range": [
                  204,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              193,
              206
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getRows",
              "optional": false,
              "range": [
                258,
                265
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                265,
                349
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          338,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 12
                          },
                          "start": {
                            "column": 15,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        338,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      331,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  321,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 67,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 11
                  },
                  "start": {
                    "column": 32,
                    "line": 11
                  }
                },
                "range": [
                  286,
                  320
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      293,
                      320
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            307,
                            319
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  312,
                                  318
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
                                        313,
                                        314
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 60,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 59,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      313,
                                      314
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 59,
                                        "line": 11
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "range": [
                                        316,
                                        317
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 62,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      316,
                                      317
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 63,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 62,
                                        "line": 11
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 58,
                                    "line": 11
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Pick",
                                "optional": false,
                                "range": [
                                  308,
                                  312
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                308,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 11
                                },
                                "start": {
                                  "column": 54,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 11
                            },
                            "start": {
                              "column": 53,
                              "line": 11
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UnrollOnHover",
                          "optional": false,
                          "range": [
                            294,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 11
                            },
                            "start": {
                              "column": 40,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          294,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 11
                          },
                          "start": {
                            "column": 40,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 11
                      },
                      "start": {
                        "column": 39,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "range": [
                      288,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    288,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                },
                "range": [
                  265,
                  284
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
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
                            282,
                            283
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
                        "range": [
                          282,
                          283
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
                      "range": [
                        276,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        266,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      266,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              258,
              349
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 31,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Table",
        "optional": false,
        "range": [
          162,
          167
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
            "column": 29,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        },
        "range": [
          167,
          185
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "range": [
                  178,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              "range": [
                178,
                184
              ],
              "loc": {
                "end": {
                  "column": 28,
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
              "name": "S",
              "optional": false,
              "range": [
                168,
                169
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
              168,
              184
            ],
            "loc": {
              "end": {
                "column": 28,
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
        156,
        351
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
          414,
          417
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 64,
            "line": 16
          },
          "start": {
            "column": 61,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ColumnSelectViewImp",
        "optional": false,
        "range": [
          359,
          378
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Table",
        "optional": false,
        "range": [
          405,
          410
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 16
          },
          "start": {
            "column": 52,
            "line": 16
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          410,
          413
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
                411,
                412
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 16
                },
                "start": {
                  "column": 58,
                  "line": 16
                }
              }
            },
            "range": [
              411,
              412
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 16
              },
              "start": {
                "column": 58,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 16
          },
          "start": {
            "column": 57,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 16
          },
          "start": {
            "column": 25,
            "line": 16
          }
        },
        "range": [
          378,
          396
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "range": [
                  389,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 16
                  },
                  "start": {
                    "column": 36,
                    "line": 16
                  }
                }
              },
              "range": [
                389,
                395
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 16
                },
                "start": {
                  "column": 36,
                  "line": 16
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
                379,
                380
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 26,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              379,
              395
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 16
              },
              "start": {
                "column": 26,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        353,
        417
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "ColumnSelectView1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 19
                },
                "start": {
                  "column": 23,
                  "line": 19
                }
              },
              "range": [
                443,
                496
              ],
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 19
                    },
                    "start": {
                      "column": 50,
                      "line": 19
                    }
                  },
                  "range": [
                    470,
                    496
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        478,
                        496
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              492,
                              495
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
                                    493,
                                    494
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 74,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  493,
                                  494
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 19
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 19
                              },
                              "start": {
                                "column": 72,
                                "line": 19
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UnrollOnHover",
                            "optional": false,
                            "range": [
                              479,
                              492
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 19
                              },
                              "start": {
                                "column": 59,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            479,
                            495
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 19
                            },
                            "start": {
                              "column": 59,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 19
                        },
                        "start": {
                          "column": 58,
                          "line": 19
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "range": [
                        473,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 19
                        },
                        "start": {
                          "column": 53,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      473,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 19
                      },
                      "start": {
                        "column": 53,
                        "line": 19
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 19
                    },
                    "start": {
                      "column": 29,
                      "line": 19
                    }
                  },
                  "range": [
                    449,
                    467
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema",
                          "optional": false,
                          "range": [
                            460,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 19
                            },
                            "start": {
                              "column": 40,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          460,
                          466
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 19
                          },
                          "start": {
                            "column": 40,
                            "line": 19
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
                          450,
                          451
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 19
                          },
                          "start": {
                            "column": 30,
                            "line": 19
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        450,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 19
                        },
                        "start": {
                          "column": 30,
                          "line": 19
                        }
                      }
                    }
                  ]
                },
                "range": [
                  445,
                  496
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 19
                  },
                  "start": {
                    "column": 25,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              426,
              496
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ColumnSelectViewImp",
            "optional": false,
            "range": [
              499,
              518
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 19
              },
              "start": {
                "column": 79,
                "line": 19
              }
            }
          },
          "range": [
            426,
            518
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        420,
        519
      ],
      "loc": {
        "end": {
          "column": 99,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "ColumnSelectView2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 20
                },
                "start": {
                  "column": 23,
                  "line": 20
                }
              },
              "range": [
                543,
                596
              ],
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 20
                    },
                    "start": {
                      "column": 50,
                      "line": 20
                    }
                  },
                  "range": [
                    570,
                    596
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        578,
                        596
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              592,
                              595
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
                                    593,
                                    594
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 74,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  593,
                                  594
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 20
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 20
                              },
                              "start": {
                                "column": 72,
                                "line": 20
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UnrollOnHover",
                            "optional": false,
                            "range": [
                              579,
                              592
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 20
                              },
                              "start": {
                                "column": 59,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            579,
                            595
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 20
                            },
                            "start": {
                              "column": 59,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 20
                        },
                        "start": {
                          "column": 58,
                          "line": 20
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "range": [
                        573,
                        578
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 20
                        },
                        "start": {
                          "column": 53,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      573,
                      596
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 20
                      },
                      "start": {
                        "column": 53,
                        "line": 20
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 20
                    },
                    "start": {
                      "column": 29,
                      "line": 20
                    }
                  },
                  "range": [
                    549,
                    567
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema",
                          "optional": false,
                          "range": [
                            560,
                            566
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 20
                            },
                            "start": {
                              "column": 40,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          560,
                          566
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 20
                          },
                          "start": {
                            "column": 40,
                            "line": 20
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
                          550,
                          551
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 20
                          },
                          "start": {
                            "column": 30,
                            "line": 20
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        550,
                        566
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 20
                        },
                        "start": {
                          "column": 30,
                          "line": 20
                        }
                      }
                    }
                  ]
                },
                "range": [
                  545,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 20
                  },
                  "start": {
                    "column": 25,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              526,
              596
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Table",
            "optional": false,
            "range": [
              599,
              604
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 20
              },
              "start": {
                "column": 79,
                "line": 20
              }
            }
          },
          "range": [
            526,
            604
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        520,
        605
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 85,
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
