__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    805
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          17,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
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
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 1
              }
            },
            "range": [
              35,
              64
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 14,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    53,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                },
                "range": [
                  47,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
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
                  42,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 2
                  },
                  "start": {
                    "column": 3,
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
                      59,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
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
                      57,
                      58
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
                    57,
                    58
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
                  57,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                37,
                64
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            }
          },
          "range": [
            32,
            64
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 2,
            "line": 3
          }
        },
        "range": [
          65,
          82
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  68,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              },
              "range": [
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  78,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "range": [
                71,
                81
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            67,
            82
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        },
        "range": [
          22,
          31
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                29,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              23,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        83
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "result1",
            "optional": false,
            "range": [
              91,
              98
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        111,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 6
                        },
                        "start": {
                          "column": 2,
                          "line": 6
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        117,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      111,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 6
                      },
                      "start": {
                        "column": 2,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "range": [
                        126,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 7
                        },
                        "start": {
                          "column": 2,
                          "line": 7
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nestedProp",
                            "optional": false,
                            "range": [
                              140,
                              150
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 8
                              },
                              "start": {
                                "column": 4,
                                "line": 8
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"bar\"",
                            "value": "bar",
                            "range": [
                              152,
                              157
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 8
                              },
                              "start": {
                                "column": 16,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            140,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 8
                            },
                            "start": {
                              "column": 4,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        134,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 9
                        },
                        "start": {
                          "column": 10,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      126,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 9
                      },
                      "start": {
                        "column": 2,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  107,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "range": [
                101,
                106
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              101,
              166
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "range": [
            91,
            166
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        85,
        167
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 5
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
        "name": "test2",
        "optional": false,
        "range": [
          186,
          191
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        }
      },
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
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 35,
                "line": 12
              }
            },
            "range": [
              204,
              242
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      231,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    231,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 23,
                      "line": 13
                    }
                  }
                },
                "range": [
                  225,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 13
                  },
                  "start": {
                    "column": 17,
                    "line": 13
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  220,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 12,
                    "line": 13
                  }
                }
              },
              "nameType": null,
              "readonly": true,
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
                      237,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    237,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 13
                    },
                    "start": {
                      "column": 29,
                      "line": 13
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
                      235,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 13
                      },
                      "start": {
                        "column": 27,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    235,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 13
                    },
                    "start": {
                      "column": 27,
                      "line": 13
                    }
                  }
                },
                "range": [
                  235,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 13
                  },
                  "start": {
                    "column": 27,
                    "line": 13
                  }
                }
              },
              "range": [
                206,
                242
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 14
                },
                "start": {
                  "column": 37,
                  "line": 12
                }
              }
            }
          },
          "range": [
            201,
            242
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 32,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 19,
            "line": 14
          },
          "start": {
            "column": 2,
            "line": 14
          }
        },
        "range": [
          243,
          260
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  246,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 14
                  },
                  "start": {
                    "column": 5,
                    "line": 14
                  }
                }
              },
              "range": [
                246,
                247
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              }
            },
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  256,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              },
              "range": [
                249,
                259
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            245,
            260
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 12
          },
          "start": {
            "column": 22,
            "line": 12
          }
        },
        "range": [
          191,
          200
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                198,
                199
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 12
                },
                "start": {
                  "column": 29,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              192,
              199
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        169,
        261
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "result2",
            "optional": false,
            "range": [
              269,
              276
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        289,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 17
                        },
                        "start": {
                          "column": 2,
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
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        295,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      289,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 17
                      },
                      "start": {
                        "column": 2,
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
                      "name": "nested",
                      "optional": false,
                      "range": [
                        304,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 18
                        },
                        "start": {
                          "column": 2,
                          "line": 18
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nestedProp",
                            "optional": false,
                            "range": [
                              318,
                              328
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 19
                              },
                              "start": {
                                "column": 4,
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
                            "raw": "\"bar\"",
                            "value": "bar",
                            "range": [
                              330,
                              335
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 19
                              },
                              "start": {
                                "column": 16,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            318,
                            335
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 19
                            },
                            "start": {
                              "column": 4,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        312,
                        340
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 20
                        },
                        "start": {
                          "column": 10,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      304,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  285,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 21
                  },
                  "start": {
                    "column": 22,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "range": [
                279,
                284
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 16
                },
                "start": {
                  "column": 16,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              279,
              344
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 21
              },
              "start": {
                "column": 16,
                "line": 16
              }
            }
          },
          "range": [
            269,
            344
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 21
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
        263,
        345
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 16
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
        "name": "test3",
        "optional": false,
        "range": [
          364,
          369
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 23
          },
          "start": {
            "column": 17,
            "line": 23
          }
        }
      },
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
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 35,
                "line": 23
              }
            },
            "range": [
              382,
              421
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      410,
                      411
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    410,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 24
                    },
                    "start": {
                      "column": 24,
                      "line": 24
                    }
                  }
                },
                "range": [
                  404,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 24
                  },
                  "start": {
                    "column": 18,
                    "line": 24
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  399,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 24
                  },
                  "start": {
                    "column": 13,
                    "line": 24
                  }
                }
              },
              "nameType": null,
              "readonly": "-",
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
                      416,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 24
                      },
                      "start": {
                        "column": 30,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    416,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 24
                    },
                    "start": {
                      "column": 30,
                      "line": 24
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
                      414,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 24
                      },
                      "start": {
                        "column": 28,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    414,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 24
                    },
                    "start": {
                      "column": 28,
                      "line": 24
                    }
                  }
                },
                "range": [
                  414,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 24
                  },
                  "start": {
                    "column": 28,
                    "line": 24
                  }
                }
              },
              "range": [
                384,
                421
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 25
                },
                "start": {
                  "column": 37,
                  "line": 23
                }
              }
            }
          },
          "range": [
            379,
            421
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 32,
              "line": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 19,
            "line": 25
          },
          "start": {
            "column": 2,
            "line": 25
          }
        },
        "range": [
          422,
          439
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  425,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 25
                  },
                  "start": {
                    "column": 5,
                    "line": 25
                  }
                }
              },
              "range": [
                425,
                426
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 25
                },
                "start": {
                  "column": 5,
                  "line": 25
                }
              }
            },
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  435,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 25
                  },
                  "start": {
                    "column": 15,
                    "line": 25
                  }
                }
              },
              "range": [
                428,
                438
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            }
          ],
          "range": [
            424,
            439
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 23
          },
          "start": {
            "column": 22,
            "line": 23
          }
        },
        "range": [
          369,
          378
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                376,
                377
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 23
                },
                "start": {
                  "column": 29,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              370,
              377
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 23
              },
              "start": {
                "column": 23,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        347,
        440
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 25
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
            "name": "result3",
            "optional": false,
            "range": [
              448,
              455
            ],
            "loc": {
              "end": {
                "column": 13,
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
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "range": [
                        468,
                        472
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 28
                        },
                        "start": {
                          "column": 2,
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
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        474,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      468,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 28
                      },
                      "start": {
                        "column": 2,
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
                      "name": "nested",
                      "optional": false,
                      "range": [
                        483,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 29
                        },
                        "start": {
                          "column": 2,
                          "line": 29
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nestedProp",
                            "optional": false,
                            "range": [
                              497,
                              507
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 30
                              },
                              "start": {
                                "column": 4,
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
                            "raw": "\"bar\"",
                            "value": "bar",
                            "range": [
                              509,
                              514
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 30
                              },
                              "start": {
                                "column": 16,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            497,
                            514
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 30
                            },
                            "start": {
                              "column": 4,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        491,
                        519
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 31
                        },
                        "start": {
                          "column": 10,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      483,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 31
                      },
                      "start": {
                        "column": 2,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  464,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 32
                  },
                  "start": {
                    "column": 22,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test3",
              "optional": false,
              "range": [
                458,
                463
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 16,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              458,
              523
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 32
              },
              "start": {
                "column": 16,
                "line": 27
              }
            }
          },
          "range": [
            448,
            523
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 32
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
        442,
        524
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 27
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
        "name": "test4",
        "optional": false,
        "range": [
          543,
          548
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 34
          },
          "start": {
            "column": 17,
            "line": 34
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 36
              },
              "start": {
                "column": 62,
                "line": 34
              }
            },
            "range": [
              588,
              617
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      606,
                      607
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 35
                      },
                      "start": {
                        "column": 14,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    606,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 35
                    },
                    "start": {
                      "column": 14,
                      "line": 35
                    }
                  }
                },
                "range": [
                  600,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  595,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 35
                  },
                  "start": {
                    "column": 3,
                    "line": 35
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
                      612,
                      613
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 35
                      },
                      "start": {
                        "column": 20,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    612,
                    613
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 35
                    },
                    "start": {
                      "column": 20,
                      "line": 35
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
                      610,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 35
                      },
                      "start": {
                        "column": 18,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    610,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 35
                    },
                    "start": {
                      "column": 18,
                      "line": 35
                    }
                  }
                },
                "range": [
                  610,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 35
                  },
                  "start": {
                    "column": 18,
                    "line": 35
                  }
                }
              },
              "range": [
                590,
                617
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 36
                },
                "start": {
                  "column": 64,
                  "line": 34
                }
              }
            }
          },
          "range": [
            585,
            617
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 59,
              "line": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 5,
            "line": 36
          },
          "start": {
            "column": 2,
            "line": 36
          }
        },
        "range": [
          618,
          621
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              620,
              621
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "range": [
            620,
            621
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 34
          },
          "start": {
            "column": 22,
            "line": 34
          }
        },
        "range": [
          548,
          584
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    574,
                    581
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 34
                    },
                    "start": {
                      "column": 48,
                      "line": 34
                    }
                  }
                },
                "range": [
                  574,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 34
                  },
                  "start": {
                    "column": 48,
                    "line": 34
                  }
                }
              },
              "range": [
                565,
                583
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 34
                },
                "start": {
                  "column": 39,
                  "line": 34
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
                555,
                556
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 34
                },
                "start": {
                  "column": 29,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              549,
              583
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 34
              },
              "start": {
                "column": 23,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        526,
        622
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "result4",
            "optional": false,
            "range": [
              630,
              637
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"1\"",
                    "value": "1",
                    "range": [
                      647,
                      650
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 38
                      },
                      "start": {
                        "column": 23,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      652,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 38
                      },
                      "start": {
                        "column": 28,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  646,
                  654
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 38
                  },
                  "start": {
                    "column": 22,
                    "line": 38
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "range": [
                640,
                645
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 38
                },
                "start": {
                  "column": 16,
                  "line": 38
                }
              }
            },
            "optional": false,
            "range": [
              640,
              655
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 38
              },
              "start": {
                "column": 16,
                "line": 38
              }
            }
          },
          "range": [
            630,
            655
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        624,
        656
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "range": [
          675,
          680
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 40
          },
          "start": {
            "column": 17,
            "line": 40
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              723,
              727
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 41
              },
              "start": {
                "column": 5,
                "line": 41
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 3,
                "line": 43
              },
              "start": {
                "column": 9,
                "line": 41
              }
            },
            "range": [
              727,
              760
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      747,
                      748
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 42
                      },
                      "start": {
                        "column": 16,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    747,
                    748
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 42
                    },
                    "start": {
                      "column": 16,
                      "line": 42
                    }
                  }
                },
                "range": [
                  741,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  736,
                  737
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 42
                  },
                  "start": {
                    "column": 5,
                    "line": 42
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
                      753,
                      754
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 42
                      },
                      "start": {
                        "column": 22,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    753,
                    754
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 42
                    },
                    "start": {
                      "column": 22,
                      "line": 42
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
                      751,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 42
                      },
                      "start": {
                        "column": 20,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    751,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 42
                    },
                    "start": {
                      "column": 20,
                      "line": 42
                    }
                  }
                },
                "range": [
                  751,
                  755
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 42
                  },
                  "start": {
                    "column": 20,
                    "line": 42
                  }
                }
              },
              "range": [
                729,
                760
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 43
                },
                "start": {
                  "column": 11,
                  "line": 41
                }
              }
            }
          },
          "range": [
            720,
            760
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 43
            },
            "start": {
              "column": 2,
              "line": 41
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 4,
            "line": 44
          },
          "start": {
            "column": 1,
            "line": 44
          }
        },
        "range": [
          762,
          765
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              764,
              765
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 44
              },
              "start": {
                "column": 3,
                "line": 44
              }
            }
          },
          "range": [
            764,
            765
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 44
            },
            "start": {
              "column": 3,
              "line": 44
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 40
          },
          "start": {
            "column": 22,
            "line": 40
          }
        },
        "range": [
          680,
          716
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    706,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 40
                    },
                    "start": {
                      "column": 48,
                      "line": 40
                    }
                  }
                },
                "range": [
                  706,
                  715
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 40
                  },
                  "start": {
                    "column": 48,
                    "line": 40
                  }
                }
              },
              "range": [
                697,
                715
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 40
                },
                "start": {
                  "column": 39,
                  "line": 40
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
                687,
                688
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 40
                },
                "start": {
                  "column": 29,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              681,
              715
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 40
              },
              "start": {
                "column": 23,
                "line": 40
              }
            }
          }
        ]
      },
      "range": [
        658,
        766
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "result5",
            "optional": false,
            "range": [
              774,
              781
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        792,
                        793
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 46
                        },
                        "start": {
                          "column": 24,
                          "line": 46
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        795,
                        800
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 46
                        },
                        "start": {
                          "column": 27,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      792,
                      800
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 46
                      },
                      "start": {
                        "column": 24,
                        "line": 46
                      }
                    }
                  }
                ],
                "range": [
                  790,
                  802
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test5",
              "optional": false,
              "range": [
                784,
                789
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 46
                },
                "start": {
                  "column": 16,
                  "line": 46
                }
              }
            },
            "optional": false,
            "range": [
              784,
              803
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 46
              },
              "start": {
                "column": 16,
                "line": 46
              }
            }
          },
          "range": [
            774,
            803
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        768,
        804
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 47
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
