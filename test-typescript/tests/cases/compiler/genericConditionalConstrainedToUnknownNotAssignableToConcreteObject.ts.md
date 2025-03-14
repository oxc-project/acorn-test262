__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    476
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          25
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
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
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                23
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  17,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        25
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "isA",
        "optional": false,
        "range": [
          44,
          47
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            },
            "range": [
              49,
              58
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                51,
                58
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            }
          },
          "range": [
            48,
            58
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 3
          },
          "start": {
            "column": 32,
            "line": 3
          }
        },
        "range": [
          59,
          67
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              61,
              62
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 3
              }
            },
            "range": [
              66,
              67
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  66,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 3
                  },
                  "start": {
                    "column": 39,
                    "line": 3
                  }
                }
              },
              "range": [
                66,
                67
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 39,
                  "line": 3
                }
              }
            }
          },
          "range": [
            61,
            67
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        }
      },
      "range": [
        27,
        68
      ],
      "loc": {
        "end": {
          "column": 41,
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
        "name": "FunctionsObj",
        "optional": false,
        "range": [
          75,
          87
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
                111,
                112
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
              111,
              112
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
            105,
            112
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
            100,
            101
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
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            },
            "range": [
              118,
              128
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                121,
                128
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            }
          },
          "range": [
            115,
            128
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          }
        },
        "range": [
          93,
          130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 23,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        },
        "range": [
          87,
          90
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
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        70,
        130
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
                  233,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "range": [
                  237,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "range": [
                233,
                239
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              233,
              240
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          227,
          242
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 30,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          141,
          142
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            },
            "range": [
              201,
              219
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  213,
                  219
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          216,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 12
                          },
                          "start": {
                            "column": 19,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        216,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 12
                        },
                        "start": {
                          "column": 19,
                          "line": 12
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
                          214,
                          215
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
                      "range": [
                        214,
                        215
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
                    "range": [
                      214,
                      218
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
                  }
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "range": [
                  203,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 6,
                    "line": 12
                  }
                }
              },
              "range": [
                203,
                219
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            }
          },
          "range": [
            199,
            219
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 12
            },
            "start": {
              "column": 2,
              "line": 12
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 25,
                "line": 12
              }
            },
            "range": [
              222,
              225
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  224,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 12
                  }
                }
              },
              "range": [
                224,
                225
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 12
                },
                "start": {
                  "column": 27,
                  "line": 12
                }
              }
            }
          },
          "range": [
            221,
            225
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 12
            },
            "start": {
              "column": 24,
              "line": 12
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 9
          }
        },
        "range": [
          142,
          198
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
                  170,
                  173
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
                        171,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 10
                        },
                        "start": {
                          "column": 27,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      171,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 27,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 26,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionsObj",
                "optional": false,
                "range": [
                  158,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 14,
                    "line": 10
                  }
                }
              },
              "range": [
                158,
                173
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
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
                148,
                149
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
            "out": false,
            "range": [
              148,
              173
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    195,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 11
                    },
                    "start": {
                      "column": 20,
                      "line": 11
                    }
                  }
                },
                "range": [
                  195,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "range": [
                189,
                196
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                179,
                180
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              179,
              196
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        132,
        242
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "range": [
                        436,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        439,
                        440
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 24
                        },
                        "start": {
                          "column": 11,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      436,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    436,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                396,
                473
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 22
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "range": [
                    391,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "range": [
                  387,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                387,
                394
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "range": [
              383,
              473
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          377,
          475
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 24,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "range": [
          296,
          298
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            },
            "range": [
              357,
              375
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  369,
                  375
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          372,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 21
                          },
                          "start": {
                            "column": 19,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        372,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 21
                        },
                        "start": {
                          "column": 19,
                          "line": 21
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
                          370,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 21
                          },
                          "start": {
                            "column": 17,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        370,
                        371
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 21
                        },
                        "start": {
                          "column": 17,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      370,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 21
                      },
                      "start": {
                        "column": 17,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 21
                  },
                  "start": {
                    "column": 16,
                    "line": 21
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "range": [
                  359,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 6,
                    "line": 21
                  }
                }
              },
              "range": [
                359,
                375
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              }
            }
          },
          "range": [
            355,
            375
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 21
            },
            "start": {
              "column": 2,
              "line": 21
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 11,
            "line": 18
          }
        },
        "range": [
          298,
          354
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
                  326,
                  329
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
                        327,
                        328
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      327,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 27,
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
                    "column": 26,
                    "line": 19
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionsObj",
                "optional": false,
                "range": [
                  314,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 19
                  },
                  "start": {
                    "column": 14,
                    "line": 19
                  }
                }
              },
              "range": [
                314,
                329
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
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
                304,
                305
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              304,
              329
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    351,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 20
                    }
                  }
                },
                "range": [
                  351,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 20,
                    "line": 20
                  }
                }
              },
              "range": [
                345,
                352
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                335,
                336
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              335,
              352
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        287,
        475
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
