__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    775
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Magic",
        "optional": false,
        "range": [
          22,
          27
        ],
        "loc": {
          "end": {
            "column": 10,
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
            "name": "X",
            "optional": false,
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "range": [
            33,
            34
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "range": [
                        51,
                        52
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 34,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      51,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    45,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
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
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "range": [
                          63,
                          64
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
                      "out": false,
                      "range": [
                        63,
                        64
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
                      57,
                      64
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
                  "range": [
                    54,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 3
                    },
                    "start": {
                      "column": 37,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                44,
                65
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 3
                },
                "start": {
                  "column": 27,
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
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__",
                    "optional": false,
                    "range": [
                      76,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 3
                      },
                      "start": {
                        "column": 59,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    76,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 3
                    },
                    "start": {
                      "column": 59,
                      "line": 3
                    }
                  }
                },
                "range": [
                  70,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 3
                  },
                  "start": {
                    "column": 53,
                    "line": 3
                  }
                }
              },
              "range": [
                67,
                78
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 3
                },
                "start": {
                  "column": 50,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            43,
            79
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 3
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            86,
            91
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 3
            },
            "start": {
              "column": 69,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "range": [
              82,
              83
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 3
              },
              "start": {
                "column": 65,
                "line": 3
              }
            }
          },
          "range": [
            82,
            83
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 3
            },
            "start": {
              "column": 65,
              "line": 3
            }
          }
        },
        "range": [
          33,
          91
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          27,
          30
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                28,
                29
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              28,
              29
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        17,
        92
      ],
      "loc": {
        "end": {
          "column": 75,
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
        "name": "R",
        "optional": false,
        "range": [
          99,
          100
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            108,
            120
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        111,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    110,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                109,
                119
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Magic",
          "optional": false,
          "range": [
            103,
            108
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 9,
              "line": 5
            }
          }
        },
        "range": [
          103,
          120
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "range": [
        94,
        120
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive",
        "optional": false,
        "range": [
          144,
          153
        ],
        "loc": {
          "end": {
            "column": 14,
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
              "name": "id",
              "optional": false,
              "range": [
                166,
                168
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              },
              "range": [
                168,
                172
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "range": [
                    170,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "range": [
                  170,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              166,
              172
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
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "range": [
                177,
                185
              ],
              "loc": {
                "end": {
                  "column": 12,
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
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              },
              "range": [
                185,
                211
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        205,
                        209
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Id",
                            "optional": false,
                            "range": [
                              206,
                              208
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
                            206,
                            208
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
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 11
                        },
                        "start": {
                          "column": 32,
                          "line": 11
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Recursive",
                      "optional": false,
                      "range": [
                        196,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      196,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    196,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 11
                    },
                    "start": {
                      "column": 23,
                      "line": 11
                    }
                  }
                },
                "range": [
                  187,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              177,
              211
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          160,
          213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 21,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 9
          }
        },
        "range": [
          153,
          157
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "range": [
                154,
                156
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              154,
              156
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 15,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        139,
        213
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
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
        "name": "getIds",
        "optional": false,
        "range": [
          232,
          238
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 14
              },
              "start": {
                "column": 33,
                "line": 14
              }
            },
            "range": [
              248,
              274
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      268,
                      272
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "range": [
                            269,
                            271
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 14
                            },
                            "start": {
                              "column": 54,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          269,
                          271
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 14
                          },
                          "start": {
                            "column": 54,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 14
                      },
                      "start": {
                        "column": 53,
                        "line": 14
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "range": [
                      259,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 14
                      },
                      "start": {
                        "column": 44,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    259,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 14
                    },
                    "start": {
                      "column": 44,
                      "line": 14
                    }
                  }
                },
                "range": [
                  259,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 14
                  },
                  "start": {
                    "column": 44,
                    "line": 14
                  }
                }
              },
              "range": [
                250,
                274
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 14
                },
                "start": {
                  "column": 35,
                  "line": 14
                }
              }
            }
          },
          "range": [
            243,
            274
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 14
            },
            "start": {
              "column": 28,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 14
          },
          "start": {
            "column": 60,
            "line": 14
          }
        },
        "range": [
          275,
          281
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "range": [
                277,
                279
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 14
                },
                "start": {
                  "column": 62,
                  "line": 14
                }
              }
            },
            "range": [
              277,
              279
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 14
              },
              "start": {
                "column": 62,
                "line": 14
              }
            }
          },
          "range": [
            277,
            281
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 14
            },
            "start": {
              "column": 62,
              "line": 14
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 14
          },
          "start": {
            "column": 23,
            "line": 14
          }
        },
        "range": [
          238,
          242
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "range": [
                239,
                241
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 24,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              239,
              241
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 24,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        215,
        282
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "items",
            "optional": false,
            "range": [
              290,
              295
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "range": [
                            305,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 17
                            },
                            "start": {
                              "column": 4,
                              "line": 17
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "'a'",
                          "value": "a",
                          "range": [
                            309,
                            312
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          305,
                          312
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 17
                          },
                          "start": {
                            "column": 4,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "range": [
                            318,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 18
                            },
                            "start": {
                              "column": 4,
                              "line": 18
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "id",
                                    "optional": false,
                                    "range": [
                                      339,
                                      341
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 8,
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
                                    "raw": "'b'",
                                    "value": "b",
                                    "range": [
                                      343,
                                      346
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "range": [
                                    339,
                                    346
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 19
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "children",
                                    "optional": false,
                                    "range": [
                                      356,
                                      364
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 20
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ArrayExpression",
                                    "elements": [],
                                    "range": [
                                      366,
                                      368
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 20
                                      }
                                    }
                                  },
                                  "range": [
                                    356,
                                    368
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 20
                                    }
                                  }
                                }
                              ],
                              "range": [
                                329,
                                374
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 21
                                },
                                "start": {
                                  "column": 15,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "range": [
                            328,
                            375
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 21
                            },
                            "start": {
                              "column": 14,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          318,
                          375
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 21
                          },
                          "start": {
                            "column": 4,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      299,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 22
                      },
                      "start": {
                        "column": 15,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  298,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 22
                  },
                  "start": {
                    "column": 14,
                    "line": 16
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    382,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 22
                    },
                    "start": {
                      "column": 6,
                      "line": 22
                    }
                  }
                },
                "range": [
                  382,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 22
                  },
                  "start": {
                    "column": 6,
                    "line": 22
                  }
                }
              },
              "range": [
                298,
                387
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 14,
                  "line": 16
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      416,
                      424
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          417,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 22
                          },
                          "start": {
                            "column": 41,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 22
                      },
                      "start": {
                        "column": 40,
                        "line": 22
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "range": [
                      407,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 22
                      },
                      "start": {
                        "column": 31,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    407,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 22
                    },
                    "start": {
                      "column": 31,
                      "line": 22
                    }
                  }
                },
                "range": [
                  407,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 22
                  },
                  "start": {
                    "column": 31,
                    "line": 22
                  }
                }
              },
              "range": [
                398,
                426
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 22
                },
                "start": {
                  "column": 22,
                  "line": 22
                }
              }
            },
            "range": [
              298,
              426
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 16
              }
            }
          },
          "range": [
            290,
            426
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        284,
        426
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 22
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
            "name": "foo",
            "optional": false,
            "range": [
              434,
              437
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": false,
                "range": [
                  447,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 24
                  },
                  "start": {
                    "column": 19,
                    "line": 24
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getIds",
              "optional": false,
              "range": [
                440,
                446
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              440,
              453
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 24
              },
              "start": {
                "column": 12,
                "line": 24
              }
            }
          },
          "range": [
            434,
            453
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
      "declare": false,
      "kind": "const",
      "range": [
        428,
        453
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "foo2",
            "optional": false,
            "range": [
              494,
              498
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "range": [
                              515,
                              517
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 28
                              },
                              "start": {
                                "column": 4,
                                "line": 28
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              519,
                              522
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 28
                              },
                              "start": {
                                "column": 8,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            515,
                            522
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 28
                            },
                            "start": {
                              "column": 4,
                              "line": 28
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "range": [
                              528,
                              536
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 29
                              },
                              "start": {
                                "column": 4,
                                "line": 29
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "id",
                                      "optional": false,
                                      "range": [
                                        549,
                                        551
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 10,
                                          "line": 30
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 30
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "raw": "'b'",
                                      "value": "b",
                                      "range": [
                                        553,
                                        556
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 15,
                                          "line": 30
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 30
                                        }
                                      }
                                    },
                                    "range": [
                                      549,
                                      556
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 30
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 30
                                      }
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "children",
                                      "optional": false,
                                      "range": [
                                        566,
                                        574
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 31
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 31
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "ArrayExpression",
                                      "elements": [],
                                      "range": [
                                        576,
                                        578
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 31
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 31
                                        }
                                      }
                                    },
                                    "range": [
                                      566,
                                      578
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 31
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  539,
                                  584
                                ],
                                "loc": {
                                  "end": {
                                    "column": 5,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 29
                                  }
                                }
                              }
                            ],
                            "range": [
                              538,
                              585
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 32
                              },
                              "start": {
                                "column": 14,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            528,
                            585
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 32
                            },
                            "start": {
                              "column": 4,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        509,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 1,
                          "line": 33
                        },
                        "start": {
                          "column": 21,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "range": [
                    508,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 33
                    },
                    "start": {
                      "column": 20,
                      "line": 27
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      592,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 33
                      },
                      "start": {
                        "column": 6,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    592,
                    597
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 33
                    },
                    "start": {
                      "column": 6,
                      "line": 33
                    }
                  }
                },
                "range": [
                  508,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getIds",
              "optional": false,
              "range": [
                501,
                507
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
            "range": [
              501,
              598
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 33
              },
              "start": {
                "column": 13,
                "line": 27
              }
            }
          },
          "range": [
            494,
            598
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        488,
        598
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "range": [
          638,
          640
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "range": [
              647,
              653
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 37
              },
              "start": {
                "column": 14,
                "line": 37
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                657,
                667
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
                          660,
                          661
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 37
                          },
                          "start": {
                            "column": 27,
                            "line": 37
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
                            "column": 31,
                            "line": 37
                          },
                          "start": {
                            "column": 28,
                            "line": 37
                          }
                        },
                        "range": [
                          661,
                          664
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              663,
                              664
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 37
                              },
                              "start": {
                                "column": 30,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            663,
                            664
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 37
                            },
                            "start": {
                              "column": 30,
                              "line": 37
                            }
                          }
                        }
                      },
                      "range": [
                        660,
                        664
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 37
                        },
                        "start": {
                          "column": 27,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "range": [
                    658,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 37
                    },
                    "start": {
                      "column": 25,
                      "line": 37
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 37
                },
                "start": {
                  "column": 24,
                  "line": 37
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "range": [
                655,
                657
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 37
                },
                "start": {
                  "column": 22,
                  "line": 37
                }
              }
            },
            "range": [
              655,
              667
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 37
              },
              "start": {
                "column": 22,
                "line": 37
              }
            }
          }
        ],
        "range": [
          646,
          668
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 37
          },
          "start": {
            "column": 13,
            "line": 37
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        },
        "range": [
          640,
          643
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
                641,
                642
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 37
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              }
            },
            "out": false,
            "range": [
              641,
              642
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 37
              },
              "start": {
                "column": 8,
                "line": 37
              }
            }
          }
        ]
      },
      "range": [
        633,
        669
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          675,
          677
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                684,
                686
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 38
                },
                "start": {
                  "column": 14,
                  "line": 38
                }
              }
            },
            "range": [
              684,
              686
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 38
              },
              "start": {
                "column": 14,
                "line": 38
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                690,
                700
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
                          693,
                          694
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 38
                          },
                          "start": {
                            "column": 23,
                            "line": 38
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
                            "column": 27,
                            "line": 38
                          },
                          "start": {
                            "column": 24,
                            "line": 38
                          }
                        },
                        "range": [
                          694,
                          697
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              696,
                              697
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 38
                              },
                              "start": {
                                "column": 26,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            696,
                            697
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 38
                            },
                            "start": {
                              "column": 26,
                              "line": 38
                            }
                          }
                        }
                      },
                      "range": [
                        693,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 38
                        },
                        "start": {
                          "column": 23,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "range": [
                    691,
                    699
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 38
                    },
                    "start": {
                      "column": 21,
                      "line": 38
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 38
                },
                "start": {
                  "column": 20,
                  "line": 38
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "range": [
                688,
                690
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 38
                },
                "start": {
                  "column": 18,
                  "line": 38
                }
              }
            },
            "range": [
              688,
              700
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 38
              },
              "start": {
                "column": 18,
                "line": 38
              }
            }
          }
        ],
        "range": [
          683,
          701
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 38
          },
          "start": {
            "column": 13,
            "line": 38
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 38
          },
          "start": {
            "column": 7,
            "line": 38
          }
        },
        "range": [
          677,
          680
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
                678,
                679
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              }
            },
            "out": false,
            "range": [
              678,
              679
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 38
              },
              "start": {
                "column": 8,
                "line": 38
              }
            }
          }
        ]
      },
      "range": [
        670,
        702
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  745,
                  746
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  749,
                  750
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              },
              "range": [
                745,
                750
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              745,
              751
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  756,
                  757
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  760,
                  761
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              },
              "range": [
                756,
                761
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            "range": [
              756,
              762
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "range": [
          739,
          774
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 35,
            "line": 40
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "qq",
        "optional": false,
        "range": [
          713,
          715
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 40
          },
          "start": {
            "column": 9,
            "line": 40
          }
        }
      },
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
                "column": 23,
                "line": 40
              },
              "start": {
                "column": 16,
                "line": 40
              }
            },
            "range": [
              720,
              727
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  724,
                  727
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        725,
                        726
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 40
                        },
                        "start": {
                          "column": 21,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      725,
                      726
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 40
                      },
                      "start": {
                        "column": 21,
                        "line": 40
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 40
                  },
                  "start": {
                    "column": 20,
                    "line": 40
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "range": [
                  722,
                  724
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 40
                  },
                  "start": {
                    "column": 18,
                    "line": 40
                  }
                }
              },
              "range": [
                722,
                727
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 40
                },
                "start": {
                  "column": 18,
                  "line": 40
                }
              }
            }
          },
          "range": [
            719,
            727
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 40
            },
            "start": {
              "column": 15,
              "line": 40
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 40
              },
              "start": {
                "column": 26,
                "line": 40
              }
            },
            "range": [
              730,
              737
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  734,
                  737
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        735,
                        736
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 40
                        },
                        "start": {
                          "column": 31,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      735,
                      736
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 40
                      },
                      "start": {
                        "column": 31,
                        "line": 40
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 40
                  },
                  "start": {
                    "column": 30,
                    "line": 40
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  732,
                  734
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 40
                  },
                  "start": {
                    "column": 28,
                    "line": 40
                  }
                }
              },
              "range": [
                732,
                737
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 40
                },
                "start": {
                  "column": 28,
                  "line": 40
                }
              }
            }
          },
          "range": [
            729,
            737
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 40
            },
            "start": {
              "column": 25,
              "line": 40
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 40
          },
          "start": {
            "column": 11,
            "line": 40
          }
        },
        "range": [
          715,
          718
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
                716,
                717
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 12,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              716,
              717
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 40
              },
              "start": {
                "column": 12,
                "line": 40
              }
            }
          }
        ]
      },
      "range": [
        704,
        774
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 44
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
