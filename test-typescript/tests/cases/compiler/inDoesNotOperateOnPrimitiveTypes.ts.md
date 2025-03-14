__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2183
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
            "name": "validHasKey",
            "optional": false,
            "range": [
              6,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "in",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        92,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 9,
                          "line": 5
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "range": [
                        99,
                        104
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
                    "range": [
                      92,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    85,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 2,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                81,
                113
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 4
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
                "name": "thing",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  },
                  "range": [
                    47,
                    50
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        49,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      49,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 2
                      },
                      "start": {
                        "column": 9,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  42,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 2,
                    "line": 2
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
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 5,
                      "line": 3
                    }
                  },
                  "range": [
                    57,
                    65
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      59,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  54,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 1,
                  "line": 4
                }
              },
              "range": [
                68,
                77
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  70,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 3,
                    "line": 4
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              },
              "range": [
                20,
                38
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "range": [
                      31,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 1
                      },
                      "start": {
                        "column": 31,
                        "line": 1
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
                      21,
                      22
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 1
                      },
                      "start": {
                        "column": 21,
                        "line": 1
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    21,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                }
              ]
            },
            "range": [
              20,
              113
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          "range": [
            6,
            113
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
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
        114
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
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
            "name": "alsoValidHasKey",
            "optional": false,
            "range": [
              122,
              137
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "in",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        197,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 12
                        },
                        "start": {
                          "column": 9,
                          "line": 12
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "range": [
                        204,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      197,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    190,
                    210
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
                }
              ],
              "range": [
                186,
                263
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 11
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
                "name": "thing",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  },
                  "range": [
                    152,
                    155
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        154,
                        155
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
                    "range": [
                      154,
                      155
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
                  }
                },
                "range": [
                  147,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
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
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  },
                  "range": [
                    162,
                    170
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      164,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 10
                      },
                      "start": {
                        "column": 7,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  159,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 10
                  },
                  "start": {
                    "column": 2,
                    "line": 10
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 1,
                  "line": 11
                }
              },
              "range": [
                173,
                182
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  175,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 3,
                    "line": 11
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              },
              "range": [
                140,
                143
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
                      141,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 25,
                        "line": 8
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    141,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 25,
                      "line": 8
                    }
                  }
                }
              ]
            },
            "range": [
              140,
              263
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 24,
                "line": 8
              }
            }
          },
          "range": [
            122,
            263
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
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
        116,
        264
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  366,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  373,
                  378
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
                366,
                378
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "range": [
              359,
              379
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          }
        ],
        "range": [
          355,
          439
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 11,
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
        "name": "invalidHasKey",
        "optional": false,
        "range": [
          275,
          288
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 7,
                "line": 16
              }
            },
            "range": [
              324,
              327
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  326,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 16
                  }
                }
              },
              "range": [
                326,
                327
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            }
          },
          "range": [
            319,
            327
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 16
            },
            "start": {
              "column": 2,
              "line": 16
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
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 5,
                "line": 17
              }
            },
            "range": [
              334,
              342
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                336,
                342
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 7,
                  "line": 17
                }
              }
            }
          },
          "range": [
            331,
            342
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 10,
            "line": 18
          },
          "start": {
            "column": 1,
            "line": 18
          }
        },
        "range": [
          345,
          354
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            347,
            354
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 18
            },
            "start": {
              "column": 3,
              "line": 18
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 15
          },
          "start": {
            "column": 22,
            "line": 15
          }
        },
        "range": [
          288,
          315
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    299,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 15
                    },
                    "start": {
                      "column": 33,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    308,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 15
                    },
                    "start": {
                      "column": 42,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                299,
                314
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
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
                289,
                290
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 15
                },
                "start": {
                  "column": 23,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              289,
              314
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 15
              },
              "start": {
                "column": 23,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        266,
        439
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 15
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "\"key\"",
                "value": "key",
                "range": [
                  521,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 23
                  },
                  "start": {
                    "column": 2,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  530,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              },
              "range": [
                521,
                535
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 2,
                  "line": 23
                }
              }
            },
            "range": [
              521,
              536
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          }
        ],
        "range": [
          517,
          596
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 76,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union1",
        "optional": false,
        "range": [
          450,
          456
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 22
              },
              "start": {
                "column": 67,
                "line": 22
              }
            },
            "range": [
              508,
              515
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
                      510,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 22
                      },
                      "start": {
                        "column": 69,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    510,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 22
                    },
                    "start": {
                      "column": 69,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      514,
                      515
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 22
                      },
                      "start": {
                        "column": 73,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    514,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 22
                    },
                    "start": {
                      "column": 73,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                510,
                515
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 22
                },
                "start": {
                  "column": 69,
                  "line": 22
                }
              }
            }
          },
          "range": [
            503,
            515
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 22
            },
            "start": {
              "column": 62,
              "line": 22
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 22
          },
          "start": {
            "column": 15,
            "line": 22
          }
        },
        "range": [
          456,
          502
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    467,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 26,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    476,
                    482
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 22
                    },
                    "start": {
                      "column": 35,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                467,
                482
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 22
                },
                "start": {
                  "column": 26,
                  "line": 22
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
                457,
                458
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 22
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              457,
              482
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 22
              },
              "start": {
                "column": 16,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "range": [
                494,
                501
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 22
                },
                "start": {
                  "column": 53,
                  "line": 22
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                484,
                485
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 22
                },
                "start": {
                  "column": 43,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              484,
              501
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 22
              },
              "start": {
                "column": 43,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        441,
        596
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "\"key\"",
                "value": "key",
                "range": [
                  677,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 27
                  },
                  "start": {
                    "column": 2,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  686,
                  691
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              },
              "range": [
                677,
                691
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 27
                },
                "start": {
                  "column": 2,
                  "line": 27
                }
              }
            },
            "range": [
              677,
              692
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 27
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "raw": "\"key\"",
                      "value": "key",
                      "range": [
                        773,
                        778
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 29
                        },
                        "start": {
                          "column": 4,
                          "line": 29
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "range": [
                        782,
                        787
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 29
                        },
                        "start": {
                          "column": 13,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      773,
                      787
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 29
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    773,
                    788
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                767,
                798
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 30
                },
                "start": {
                  "column": 33,
                  "line": 28
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "range": [
                    747,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  740,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 28
                  },
                  "start": {
                    "column": 6,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"object\"",
                "value": "object",
                "range": [
                  757,
                  765
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              "range": [
                740,
                765
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 28
                },
                "start": {
                  "column": 6,
                  "line": 28
                }
              }
            },
            "range": [
              736,
              798
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          }
        ],
        "range": [
          673,
          800
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 75,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union2",
        "optional": false,
        "range": [
          607,
          613
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 26
              },
              "start": {
                "column": 66,
                "line": 26
              }
            },
            "range": [
              664,
              671
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
                      666,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 26
                      },
                      "start": {
                        "column": 68,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    666,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 26
                    },
                    "start": {
                      "column": 68,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      670,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 26
                      },
                      "start": {
                        "column": 72,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    670,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 26
                    },
                    "start": {
                      "column": 72,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                666,
                671
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 26
                },
                "start": {
                  "column": 68,
                  "line": 26
                }
              }
            }
          },
          "range": [
            659,
            671
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 26
            },
            "start": {
              "column": 61,
              "line": 26
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 60,
            "line": 26
          },
          "start": {
            "column": 15,
            "line": 26
          }
        },
        "range": [
          613,
          658
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                624,
                630
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 26
                },
                "start": {
                  "column": 26,
                  "line": 26
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
                614,
                615
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 26
                },
                "start": {
                  "column": 16,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              614,
              630
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 26
              },
              "start": {
                "column": 16,
                "line": 26
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    642,
                    648
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 26
                    },
                    "start": {
                      "column": 44,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    651,
                    657
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 26
                    },
                    "start": {
                      "column": 53,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                642,
                657
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 26
                },
                "start": {
                  "column": 44,
                  "line": 26
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 26
                },
                "start": {
                  "column": 34,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              632,
              657
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 26
              },
              "start": {
                "column": 34,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        598,
        800
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 26
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "\"key\"",
                "value": "key",
                "range": [
                  853,
                  858
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 34
                  },
                  "start": {
                    "column": 2,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  862,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 34
                  },
                  "start": {
                    "column": 11,
                    "line": 34
                  }
                }
              },
              "range": [
                853,
                867
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 34
                },
                "start": {
                  "column": 2,
                  "line": 34
                }
              }
            },
            "range": [
              853,
              868
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 34
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "raw": "\"key\"",
                      "value": "key",
                      "range": [
                        978,
                        983
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 36
                        },
                        "start": {
                          "column": 4,
                          "line": 36
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "range": [
                        987,
                        992
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 36
                        },
                        "start": {
                          "column": 13,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      978,
                      992
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 36
                      },
                      "start": {
                        "column": 4,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    978,
                    993
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                972,
                1045
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 37
                },
                "start": {
                  "column": 62,
                  "line": 35
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "range": [
                      923,
                      928
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 35
                      },
                      "start": {
                        "column": 13,
                        "line": 35
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    916,
                    928
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 35
                    },
                    "start": {
                      "column": 6,
                      "line": 35
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    933,
                    941
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 35
                    },
                    "start": {
                      "column": 23,
                      "line": 35
                    }
                  }
                },
                "range": [
                  916,
                  941
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 35
                  },
                  "start": {
                    "column": 6,
                    "line": 35
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "range": [
                      952,
                      957
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 35
                      },
                      "start": {
                        "column": 42,
                        "line": 35
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    945,
                    957
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 35
                    },
                    "start": {
                      "column": 35,
                      "line": 35
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    962,
                    970
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 35
                    },
                    "start": {
                      "column": 52,
                      "line": 35
                    }
                  }
                },
                "range": [
                  945,
                  970
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 35
                  },
                  "start": {
                    "column": 35,
                    "line": 35
                  }
                }
              },
              "range": [
                916,
                970
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 35
                },
                "start": {
                  "column": 6,
                  "line": 35
                }
              }
            },
            "range": [
              912,
              1045
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 37
              },
              "start": {
                "column": 2,
                "line": 35
              }
            }
          }
        ],
        "range": [
          849,
          1047
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 47,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union3",
        "optional": false,
        "range": [
          811,
          817
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 33
              },
              "start": {
                "column": 24,
                "line": 33
              }
            },
            "range": [
              826,
              847
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
                      828,
                      829
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 33
                      },
                      "start": {
                        "column": 26,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    828,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 33
                    },
                    "start": {
                      "column": 26,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    832,
                    838
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 33
                    },
                    "start": {
                      "column": 30,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    841,
                    847
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 33
                    },
                    "start": {
                      "column": 39,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                828,
                847
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 33
                },
                "start": {
                  "column": 26,
                  "line": 33
                }
              }
            }
          },
          "range": [
            821,
            847
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 33
            },
            "start": {
              "column": 19,
              "line": 33
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 33
          },
          "start": {
            "column": 15,
            "line": 33
          }
        },
        "range": [
          817,
          820
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
                818,
                819
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 33
                },
                "start": {
                  "column": 16,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              818,
              819
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 33
              },
              "start": {
                "column": 16,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        802,
        1047
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 33
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "\"key\"",
                "value": "key",
                "range": [
                  1107,
                  1112
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 41
                  },
                  "start": {
                    "column": 2,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  1116,
                  1121
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 41
                  },
                  "start": {
                    "column": 11,
                    "line": 41
                  }
                }
              },
              "range": [
                1107,
                1121
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 41
                },
                "start": {
                  "column": 2,
                  "line": 41
                }
              }
            },
            "range": [
              1107,
              1122
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 41
              }
            }
          }
        ],
        "range": [
          1103,
          1164
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 54,
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
        "name": "union4",
        "optional": false,
        "range": [
          1058,
          1064
        ],
        "loc": {
          "end": {
            "column": 15,
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
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 40
              },
              "start": {
                "column": 49,
                "line": 40
              }
            },
            "range": [
              1098,
              1101
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1100,
                  1101
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 40
                  },
                  "start": {
                    "column": 51,
                    "line": 40
                  }
                }
              },
              "range": [
                1100,
                1101
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 40
                },
                "start": {
                  "column": 51,
                  "line": 40
                }
              }
            }
          },
          "range": [
            1093,
            1101
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 40
            },
            "start": {
              "column": 44,
              "line": 40
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 40
          },
          "start": {
            "column": 15,
            "line": 40
          }
        },
        "range": [
          1064,
          1092
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "range": [
                    1075,
                    1081
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 40
                    },
                    "start": {
                      "column": 26,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      1084,
                      1091
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 40
                      },
                      "start": {
                        "column": 35,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    1084,
                    1091
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 40
                    },
                    "start": {
                      "column": 35,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                1075,
                1091
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 40
                },
                "start": {
                  "column": 26,
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
                1065,
                1066
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 40
                },
                "start": {
                  "column": 16,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              1065,
              1091
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 40
              },
              "start": {
                "column": 16,
                "line": 40
              }
            }
          }
        ]
      },
      "range": [
        1049,
        1164
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 40
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "\"key\"",
                "value": "key",
                "range": [
                  1823,
                  1828
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "range": [
                  1832,
                  1833
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 53
                  },
                  "start": {
                    "column": 13,
                    "line": 53
                  }
                }
              },
              "range": [
                1823,
                1833
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1823,
              1834
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "raw": "\"key\"",
                      "value": "key",
                      "range": [
                        1876,
                        1881
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 55
                        },
                        "start": {
                          "column": 8,
                          "line": 55
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        1885,
                        1886
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 55
                        },
                        "start": {
                          "column": 17,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1876,
                      1886
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 55
                      },
                      "start": {
                        "column": 8,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1876,
                    1887
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                1866,
                1893
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 31,
                  "line": 54
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "range": [
                    1850,
                    1851
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 54
                    },
                    "start": {
                      "column": 15,
                      "line": 54
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1843,
                  1851
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"object\"",
                "value": "object",
                "range": [
                  1856,
                  1864
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 54
                  },
                  "start": {
                    "column": 21,
                    "line": 54
                  }
                }
              },
              "range": [
                1843,
                1864
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 54
                },
                "start": {
                  "column": 8,
                  "line": 54
                }
              }
            },
            "range": [
              1839,
              1893
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          1246,
          1895
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 80,
            "line": 44
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union5",
        "optional": false,
        "range": [
          1175,
          1181
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 44
              },
              "start": {
                "column": 71,
                "line": 44
              }
            },
            "range": [
              1237,
              1244
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
                      1239,
                      1240
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 44
                      },
                      "start": {
                        "column": 73,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1239,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 44
                    },
                    "start": {
                      "column": 73,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1243,
                      1244
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 44
                      },
                      "start": {
                        "column": 77,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1243,
                    1244
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 44
                    },
                    "start": {
                      "column": 77,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                1239,
                1244
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 44
                },
                "start": {
                  "column": 73,
                  "line": 44
                }
              }
            }
          },
          "range": [
            1236,
            1244
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 44
            },
            "start": {
              "column": 70,
              "line": 44
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 69,
            "line": 44
          },
          "start": {
            "column": 15,
            "line": 44
          }
        },
        "range": [
          1181,
          1235
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "range": [
                    1192,
                    1198
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 44
                    },
                    "start": {
                      "column": 26,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1201,
                    1207
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 44
                    },
                    "start": {
                      "column": 35,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                1192,
                1207
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 44
                },
                "start": {
                  "column": 26,
                  "line": 44
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
                1182,
                1183
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 44
                },
                "start": {
                  "column": 16,
                  "line": 44
                }
              }
            },
            "out": false,
            "range": [
              1182,
              1207
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 44
              },
              "start": {
                "column": 16,
                "line": 44
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "range": [
                    1219,
                    1225
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 44
                    },
                    "start": {
                      "column": 53,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1228,
                    1234
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 44
                    },
                    "start": {
                      "column": 62,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                1219,
                1234
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 44
                },
                "start": {
                  "column": 53,
                  "line": 44
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1209,
                1210
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 44
                },
                "start": {
                  "column": 43,
                  "line": 44
                }
              }
            },
            "out": false,
            "range": [
              1209,
              1234
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 44
              },
              "start": {
                "column": 43,
                "line": 44
              }
            }
          }
        ]
      },
      "range": [
        1166,
        1895
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 44
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "\"key\"",
                "value": "key",
                "range": [
                  1977,
                  1982
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 60
                  },
                  "start": {
                    "column": 2,
                    "line": 60
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  1986,
                  1991
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 60
                  },
                  "start": {
                    "column": 11,
                    "line": 60
                  }
                }
              },
              "range": [
                1977,
                1991
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 60
                },
                "start": {
                  "column": 2,
                  "line": 60
                }
              }
            },
            "range": [
              1977,
              1992
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 60
              },
              "start": {
                "column": 2,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1973,
          2052
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 76,
            "line": 59
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "intersection1",
        "optional": false,
        "range": [
          1906,
          1919
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 59
              },
              "start": {
                "column": 67,
                "line": 59
              }
            },
            "range": [
              1964,
              1971
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1966,
                      1967
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 59
                      },
                      "start": {
                        "column": 69,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1966,
                    1967
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 59
                    },
                    "start": {
                      "column": 69,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1970,
                      1971
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 59
                      },
                      "start": {
                        "column": 73,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1970,
                    1971
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 59
                    },
                    "start": {
                      "column": 73,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                1966,
                1971
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 59
                },
                "start": {
                  "column": 69,
                  "line": 59
                }
              }
            }
          },
          "range": [
            1959,
            1971
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 59
            },
            "start": {
              "column": 62,
              "line": 59
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 59
          },
          "start": {
            "column": 22,
            "line": 59
          }
        },
        "range": [
          1919,
          1958
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                1930,
                1936
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 59
                },
                "start": {
                  "column": 33,
                  "line": 59
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
                1920,
                1921
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 59
                },
                "start": {
                  "column": 23,
                  "line": 59
                }
              }
            },
            "out": false,
            "range": [
              1920,
              1936
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 59
              },
              "start": {
                "column": 23,
                "line": 59
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1948,
                      1949
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 59
                      },
                      "start": {
                        "column": 51,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1948,
                    1949
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 59
                    },
                    "start": {
                      "column": 51,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1952,
                      1953
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 59
                      },
                      "start": {
                        "column": 55,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1952,
                    1953
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 59
                    },
                    "start": {
                      "column": 55,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      1956,
                      1957
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 59
                      },
                      "start": {
                        "column": 59,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1956,
                    1957
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 59
                    },
                    "start": {
                      "column": 59,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                1948,
                1957
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 59
                },
                "start": {
                  "column": 51,
                  "line": 59
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1938,
                1939
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 59
                },
                "start": {
                  "column": 41,
                  "line": 59
                }
              }
            },
            "out": false,
            "range": [
              1938,
              1957
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 59
              },
              "start": {
                "column": 41,
                "line": 59
              }
            }
          }
        ]
      },
      "range": [
        1897,
        2052
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 59
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "\"key\"",
                "value": "key",
                "range": [
                  2108,
                  2113
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 64
                  },
                  "start": {
                    "column": 2,
                    "line": 64
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  2117,
                  2122
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 64
                  },
                  "start": {
                    "column": 11,
                    "line": 64
                  }
                }
              },
              "range": [
                2108,
                2122
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 64
                },
                "start": {
                  "column": 2,
                  "line": 64
                }
              }
            },
            "range": [
              2108,
              2123
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 64
              },
              "start": {
                "column": 2,
                "line": 64
              }
            }
          }
        ],
        "range": [
          2104,
          2182
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 50,
            "line": 63
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "intersection2",
        "optional": false,
        "range": [
          2063,
          2076
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 63
          },
          "start": {
            "column": 9,
            "line": 63
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 63
              },
              "start": {
                "column": 31,
                "line": 63
              }
            },
            "range": [
              2085,
              2102
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      2087,
                      2088
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 63
                      },
                      "start": {
                        "column": 33,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    2087,
                    2088
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 63
                    },
                    "start": {
                      "column": 33,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          2092,
                          2093
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 63
                          },
                          "start": {
                            "column": 38,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        2092,
                        2093
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 63
                        },
                        "start": {
                          "column": 38,
                          "line": 63
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2096,
                          2097
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 63
                          },
                          "start": {
                            "column": 42,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        2096,
                        2097
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 63
                        },
                        "start": {
                          "column": 42,
                          "line": 63
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          2100,
                          2101
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 63
                          },
                          "start": {
                            "column": 46,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        2100,
                        2101
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 63
                        },
                        "start": {
                          "column": 46,
                          "line": 63
                        }
                      }
                    }
                  ],
                  "range": [
                    2092,
                    2101
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 63
                    },
                    "start": {
                      "column": 38,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                2087,
                2102
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 63
                },
                "start": {
                  "column": 33,
                  "line": 63
                }
              }
            }
          },
          "range": [
            2080,
            2102
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 63
            },
            "start": {
              "column": 26,
              "line": 63
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 63
          },
          "start": {
            "column": 22,
            "line": 63
          }
        },
        "range": [
          2076,
          2079
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
                2077,
                2078
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 63
                },
                "start": {
                  "column": 23,
                  "line": 63
                }
              }
            },
            "out": false,
            "range": [
              2077,
              2078
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 63
              },
              "start": {
                "column": 23,
                "line": 63
              }
            }
          }
        ]
      },
      "range": [
        2054,
        2182
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 66
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
