__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    819
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Narrowable",
        "optional": false,
        "range": [
          5,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
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
          {
            "type": "TSNumberKeyword",
            "range": [
              27,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          {
            "type": "TSBigIntKeyword",
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
          {
            "type": "TSBooleanKeyword",
            "range": [
              45,
              52
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          }
        ],
        "range": [
          18,
          52
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        53
      ],
      "loc": {
        "end": {
          "column": 53,
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
        "name": "Narrow",
        "optional": false,
        "range": [
          60,
          66
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  73,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
              "range": [
                73,
                74
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Narrowable",
                "optional": false,
                "range": [
                  83,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              "range": [
                83,
                93
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                100,
                105
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  96,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 41,
                    "line": 3
                  }
                }
              },
              "range": [
                96,
                97
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 41,
                  "line": 3
                }
              }
            },
            "range": [
              73,
              105
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
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
                    128,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                "range": [
                  128,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              },
              "range": [
                122,
                129
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 6,
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
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  138,
                  144
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
                          141,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 4
                          },
                          "start": {
                            "column": 29,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        141,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
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
                          139,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        139,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 27,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      139,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
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
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Narrow",
                "optional": false,
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              "range": [
                132,
                144
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            "range": [
              110,
              147
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 55,
                "line": 3
              }
            }
          }
        ],
        "range": [
          72,
          148
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          66,
          69
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
                67,
                68
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
              67,
              68
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
          }
        ]
      },
      "range": [
        55,
        149
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 5
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
            "name": "satisfies",
            "optional": false,
            "range": [
              157,
              166
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
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
                "type": "Identifier",
                "decorators": [],
                "name": "narrow",
                "optional": false,
                "range": [
                  243,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
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
                  "name": "narrow",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 9
                      },
                      "start": {
                        "column": 32,
                        "line": 9
                      }
                    },
                    "range": [
                      217,
                      234
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          225,
                          234
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TNarrow",
                              "optional": false,
                              "range": [
                                226,
                                233
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 9
                                },
                                "start": {
                                  "column": 41,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              226,
                              233
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 9
                              },
                              "start": {
                                "column": 41,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 9
                          },
                          "start": {
                            "column": 40,
                            "line": 9
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Narrow",
                        "optional": false,
                        "range": [
                          219,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 9
                          },
                          "start": {
                            "column": 34,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        219,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 9
                        },
                        "start": {
                          "column": 34,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    211,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 9
                    },
                    "start": {
                      "column": 26,
                      "line": 9
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
                  }
                },
                "range": [
                  187,
                  210
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
                        "name": "TWide",
                        "optional": false,
                        "range": [
                          204,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 19,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        204,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
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
                      "name": "TNarrow",
                      "optional": false,
                      "range": [
                        188,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 9
                        },
                        "start": {
                          "column": 3,
                          "line": 9
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      188,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 9
                      },
                      "start": {
                        "column": 3,
                        "line": 9
                      }
                    }
                  }
                ]
              },
              "range": [
                187,
                249
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 9
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
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              },
              "range": [
                171,
                179
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TWide",
                    "optional": false,
                    "range": [
                      172,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 8
                      },
                      "start": {
                        "column": 3,
                        "line": 8
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    172,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 8
                    },
                    "start": {
                      "column": 3,
                      "line": 8
                    }
                  }
                }
              ]
            },
            "range": [
              171,
              249
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          "range": [
            157,
            249
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        151,
        250
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "isNotNull",
            "optional": false,
            "range": [
              340,
              349
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  389,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 14
                  },
                  "start": {
                    "column": 55,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  399,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 14
                  },
                  "start": {
                    "column": 65,
                    "line": 14
                  }
                }
              },
              "range": [
                389,
                403
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 14
                },
                "start": {
                  "column": 55,
                  "line": 14
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 14
                    },
                    "start": {
                      "column": 28,
                      "line": 14
                    }
                  },
                  "range": [
                    362,
                    372
                  ],
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
                            364,
                            365
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 14
                            },
                            "start": {
                              "column": 30,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          364,
                          365
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 14
                          },
                          "start": {
                            "column": 30,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          368,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 14
                          },
                          "start": {
                            "column": 34,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      364,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 14
                      },
                      "start": {
                        "column": 30,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  357,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 14
                  },
                  "start": {
                    "column": 23,
                    "line": 14
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 14
                },
                "start": {
                  "column": 39,
                  "line": 14
                }
              },
              "range": [
                373,
                385
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    375,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 14
                    },
                    "start": {
                      "column": 41,
                      "line": 14
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 14
                    },
                    "start": {
                      "column": 50,
                      "line": 14
                    }
                  },
                  "range": [
                    384,
                    385
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        384,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 14
                        },
                        "start": {
                          "column": 50,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      384,
                      385
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 14
                      },
                      "start": {
                        "column": 50,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  375,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 14
                  },
                  "start": {
                    "column": 41,
                    "line": 14
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              },
              "range": [
                352,
                356
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
                      353,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    353,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 14
                    },
                    "start": {
                      "column": 19,
                      "line": 14
                    }
                  }
                }
              ]
            },
            "range": [
              352,
              403
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 14
              },
              "start": {
                "column": 18,
                "line": 14
              }
            }
          },
          "range": [
            340,
            403
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        334,
        404
      ],
      "loc": {
        "end": {
          "column": 70,
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
        "name": "Item",
        "optional": false,
        "range": [
          411,
          415
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
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
              "name": "value",
              "optional": false,
              "range": [
                420,
                425
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 14,
                  "line": 16
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
                  "column": 34,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              },
              "range": [
                425,
                440
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      427,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      436,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 16
                      },
                      "start": {
                        "column": 30,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  427,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 16
                  },
                  "start": {
                    "column": 21,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              420,
              440
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 14,
                "line": 16
              }
            }
          }
        ],
        "range": [
          418,
          442
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 16
          },
          "start": {
            "column": 12,
            "line": 16
          }
        }
      },
      "range": [
        406,
        443
      ],
      "loc": {
        "end": {
          "column": 37,
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
            "name": "item1",
            "optional": false,
            "range": [
              451,
              456
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        479,
                        484
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 18
                        },
                        "start": {
                          "column": 34,
                          "line": 18
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"1\"",
                      "value": "1",
                      "range": [
                        486,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 18
                        },
                        "start": {
                          "column": 41,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      479,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 18
                      },
                      "start": {
                        "column": 34,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  477,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 18
                  },
                  "start": {
                    "column": 32,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "range": [
                  459,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 18
                  },
                  "start": {
                    "column": 14,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  468,
                  474
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "range": [
                        469,
                        473
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      469,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 18
                      },
                      "start": {
                        "column": 24,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 18
                  },
                  "start": {
                    "column": 23,
                    "line": 18
                  }
                }
              },
              "range": [
                459,
                476
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              459,
              492
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 18
              }
            }
          },
          "range": [
            451,
            492
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        445,
        493
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "item2",
            "optional": false,
            "range": [
              500,
              505
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        528,
                        533
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 19
                        },
                        "start": {
                          "column": 34,
                          "line": 19
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"2\"",
                      "value": "2",
                      "range": [
                        535,
                        538
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 19
                        },
                        "start": {
                          "column": 41,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      528,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 19
                      },
                      "start": {
                        "column": 34,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  526,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 32,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "range": [
                  508,
                  517
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 19
                  },
                  "start": {
                    "column": 14,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  517,
                  523
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "range": [
                        518,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 19
                        },
                        "start": {
                          "column": 24,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      518,
                      522
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 24,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 19
                  },
                  "start": {
                    "column": 23,
                    "line": 19
                  }
                }
              },
              "range": [
                508,
                525
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              508,
              541
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          },
          "range": [
            500,
            541
          ],
          "loc": {
            "end": {
              "column": 47,
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
        494,
        542
      ],
      "loc": {
        "end": {
          "column": 48,
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
            "name": "item3",
            "optional": false,
            "range": [
              549,
              554
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        577,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 20
                        },
                        "start": {
                          "column": 34,
                          "line": 20
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        584,
                        588
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 20
                        },
                        "start": {
                          "column": 41,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      577,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 20
                      },
                      "start": {
                        "column": 34,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  575,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 20
                  },
                  "start": {
                    "column": 32,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "range": [
                  557,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  566,
                  572
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "range": [
                        567,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 20
                        },
                        "start": {
                          "column": 24,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      567,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 20
                      },
                      "start": {
                        "column": 24,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 20
                  },
                  "start": {
                    "column": 23,
                    "line": 20
                  }
                }
              },
              "range": [
                557,
                574
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              557,
              591
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 20
              },
              "start": {
                "column": 14,
                "line": 20
              }
            }
          },
          "range": [
            549,
            591
          ],
          "loc": {
            "end": {
              "column": 48,
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
        543,
        592
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "values2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 22
                }
              },
              "range": [
                607,
                632
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    614,
                    632
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"1\"",
                            "value": "1",
                            "range": [
                              615,
                              618
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 22
                              },
                              "start": {
                                "column": 21,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            615,
                            618
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 22
                            },
                            "start": {
                              "column": 21,
                              "line": 22
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
                              621,
                              624
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 22
                              },
                              "start": {
                                "column": 27,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            621,
                            624
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 22
                            },
                            "start": {
                              "column": 27,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            627,
                            631
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 22
                            },
                            "start": {
                              "column": 33,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        615,
                        631
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 22
                        },
                        "start": {
                          "column": 21,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 22
                    },
                    "start": {
                      "column": 20,
                      "line": 22
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "range": [
                    609,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 22
                    },
                    "start": {
                      "column": 15,
                      "line": 22
                    }
                  }
                },
                "range": [
                  609,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              600,
              632
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"1\"",
                "value": "1",
                "range": [
                  636,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 22
                  },
                  "start": {
                    "column": 42,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"2\"",
                "value": "2",
                "range": [
                  641,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 22
                  },
                  "start": {
                    "column": 47,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  646,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 22
                  },
                  "start": {
                    "column": 52,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              635,
              651
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 22
              },
              "start": {
                "column": 41,
                "line": 22
              }
            }
          },
          "range": [
            600,
            651
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        594,
        652
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "filteredValues2",
            "optional": false,
            "range": [
              659,
              674
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNotNull",
                "optional": false,
                "range": [
                  692,
                  701
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 23
                  },
                  "start": {
                    "column": 39,
                    "line": 23
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
                "name": "values2",
                "optional": false,
                "range": [
                  677,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 23
                  },
                  "start": {
                    "column": 24,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  685,
                  691
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 23
                  },
                  "start": {
                    "column": 32,
                    "line": 23
                  }
                }
              },
              "range": [
                677,
                691
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 23
                },
                "start": {
                  "column": 24,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              677,
              702
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 23
              },
              "start": {
                "column": 24,
                "line": 23
              }
            }
          },
          "range": [
            659,
            702
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        653,
        703
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "values1",
            "optional": false,
            "range": [
              711,
              718
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "range": [
                      755,
                      759
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 25
                      },
                      "start": {
                        "column": 50,
                        "line": 25
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
                      760,
                      765
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 25
                      },
                      "start": {
                        "column": 55,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    755,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 25
                    },
                    "start": {
                      "column": 50,
                      "line": 25
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
                    "name": "item",
                    "optional": false,
                    "range": [
                      747,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 25
                      },
                      "start": {
                        "column": 42,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  747,
                  765
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 25
                  },
                  "start": {
                    "column": 42,
                    "line": 25
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item1",
                    "optional": false,
                    "range": [
                      722,
                      727
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item2",
                    "optional": false,
                    "range": [
                      729,
                      734
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 24,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item3",
                    "optional": false,
                    "range": [
                      736,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 25
                      },
                      "start": {
                        "column": 31,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  721,
                  742
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 25
                  },
                  "start": {
                    "column": 16,
                    "line": 25
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
                  743,
                  746
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 25
                  },
                  "start": {
                    "column": 38,
                    "line": 25
                  }
                }
              },
              "range": [
                721,
                746
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 25
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              721,
              766
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            }
          },
          "range": [
            711,
            766
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        705,
        767
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "filteredValues1",
            "optional": false,
            "range": [
              774,
              789
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNotNull",
                "optional": false,
                "range": [
                  807,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 26
                  },
                  "start": {
                    "column": 39,
                    "line": 26
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
                "name": "values1",
                "optional": false,
                "range": [
                  792,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 26
                  },
                  "start": {
                    "column": 24,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  800,
                  806
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 26
                  },
                  "start": {
                    "column": 32,
                    "line": 26
                  }
                }
              },
              "range": [
                792,
                806
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 26
                },
                "start": {
                  "column": 24,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              792,
              817
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 26
              },
              "start": {
                "column": 24,
                "line": 26
              }
            }
          },
          "range": [
            774,
            817
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        768,
        818
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
