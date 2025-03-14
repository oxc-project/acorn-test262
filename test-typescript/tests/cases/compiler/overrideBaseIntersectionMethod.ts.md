__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    598
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          27,
          38
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                52,
                56
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 30,
                  "line": 3
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              },
              "range": [
                56,
                63
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    58,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 3
                    },
                    "start": {
                      "column": 36,
                      "line": 3
                    }
                  }
                },
                "range": [
                  58,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              49,
              63
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 47,
              "line": 3
            },
            "start": {
              "column": 43,
              "line": 3
            }
          },
          "range": [
            65,
            69
          ],
          "typeAnnotation": {
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
              68,
              69
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
          }
        },
        "range": [
          44,
          69
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        },
        "range": [
          38,
          41
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
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              39,
              40
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        70
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 3
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
            "name": "WithLocation",
            "optional": false,
            "range": [
              78,
              90
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  155,
                  274
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getLocation",
                      "optional": false,
                      "range": [
                        159,
                        170
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
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        170,
                        272
                      ],
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
                                  "type": "ArrayPattern",
                                  "decorators": [],
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        204,
                                        205
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 12,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 7
                                        }
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        206,
                                        207
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 14,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 7
                                        }
                                      }
                                    }
                                  ],
                                  "optional": false,
                                  "range": [
                                    203,
                                    208
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 7
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
                                      "type": "Super",
                                      "range": [
                                        211,
                                        216
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "getLocation",
                                      "optional": false,
                                      "range": [
                                        217,
                                        228
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      211,
                                      228
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    211,
                                    230
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  203,
                                  230
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              197,
                              231
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 7
                              },
                              "start": {
                                "column": 4,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "|",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        244,
                                        248
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 8
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
                                        249,
                                        250
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      244,
                                      250
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      253,
                                      254
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
                                  "range": [
                                    244,
                                    254
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 8
                                    }
                                  }
                                },
                                {
                                  "type": "BinaryExpression",
                                  "operator": "|",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        256,
                                        260
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        261,
                                        262
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
                                      256,
                                      262
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
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "range": [
                                      265,
                                      266
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    256,
                                    266
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 8
                                    }
                                  }
                                }
                              ],
                              "range": [
                                243,
                                267
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 8
                                },
                                "start": {
                                  "column": 11,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              236,
                              268
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
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
                          191,
                          272
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 9
                          },
                          "start": {
                            "column": 34,
                            "line": 6
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
                            "column": 33,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        },
                        "range": [
                          172,
                          190
                        ],
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                175,
                                181
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 6
                                },
                                "start": {
                                  "column": 18,
                                  "line": 6
                                }
                              }
                            },
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                183,
                                189
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 26,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            174,
                            190
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
                              "line": 6
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      159,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 9
                      },
                      "start": {
                        "column": 2,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 10
                  },
                  "start": {
                    "column": 83,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "range": [
                  150,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 5
                  },
                  "start": {
                    "column": 78,
                    "line": 5
                  }
                }
              },
              "range": [
                136,
                274
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 64,
                  "line": 5
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
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 56,
                      "line": 5
                    }
                  },
                  "range": [
                    128,
                    131
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        130,
                        131
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 5
                        },
                        "start": {
                          "column": 58,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      130,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 5
                      },
                      "start": {
                        "column": 58,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  124,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 5
                  },
                  "start": {
                    "column": 52,
                    "line": 5
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              },
              "range": [
                93,
                123
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
                        115,
                        122
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "range": [
                              116,
                              121
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 5
                              },
                              "start": {
                                "column": 44,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            116,
                            121
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 5
                            },
                            "start": {
                              "column": 44,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 5
                        },
                        "start": {
                          "column": 43,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "range": [
                        104,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 5
                        },
                        "start": {
                          "column": 32,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      104,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
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
                      94,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    94,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              93,
              274
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          },
          "range": [
            78,
            274
          ],
          "loc": {
            "end": {
              "column": 1,
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
        72,
        274
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          288,
          403
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                292,
                303
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                303,
                343
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  340,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 13
                  },
                  "start": {
                    "column": 50,
                    "line": 13
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 13
                        },
                        "start": {
                          "column": 22,
                          "line": 13
                        }
                      },
                      "range": [
                        312,
                        320
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          314,
                          320
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 13
                          },
                          "start": {
                            "column": 24,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      311,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    304,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 13
                    },
                    "start": {
                      "column": 14,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 13
                        },
                        "start": {
                          "column": 40,
                          "line": 13
                        }
                      },
                      "range": [
                        330,
                        338
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          332,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 13
                          },
                          "start": {
                            "column": 42,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      329,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 13
                      },
                      "start": {
                        "column": 39,
                        "line": 13
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    322,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 13
                    },
                    "start": {
                      "column": 32,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              }
            },
            "range": [
              292,
              343
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
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
              "name": "getLocation",
              "optional": false,
              "range": [
                346,
                357
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
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
                357,
                401
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            392,
                            393
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            394,
                            395
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 15
                            },
                            "start": {
                              "column": 14,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        391,
                        396
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      384,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 4,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  378,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 16
                  },
                  "start": {
                    "column": 34,
                    "line": 14
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
                    "column": 33,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                },
                "range": [
                  359,
                  377
                ],
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        362,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 14
                        },
                        "start": {
                          "column": 18,
                          "line": 14
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        370,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 14
                        },
                        "start": {
                          "column": 26,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    361,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "range": [
              346,
              401
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "range": [
          282,
          287
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        276,
        403
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          443,
          597
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "calculate",
              "optional": false,
              "range": [
                447,
                456
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
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
                456,
                492
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            472,
                            476
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 21
                            },
                            "start": {
                              "column": 11,
                              "line": 21
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
                            477,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 21
                            },
                            "start": {
                              "column": 16,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          472,
                          478
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 21
                          },
                          "start": {
                            "column": 11,
                            "line": 21
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            481,
                            485
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 21
                            },
                            "start": {
                              "column": 20,
                              "line": 21
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            486,
                            487
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 21
                            },
                            "start": {
                              "column": 25,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          481,
                          487
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 21
                          },
                          "start": {
                            "column": 20,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        472,
                        487
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      465,
                      488
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 4,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  459,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 22
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              447,
              492
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 20
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
              "name": "getLocation",
              "optional": false,
              "range": [
                495,
                506
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 23
                },
                "start": {
                  "column": 2,
                  "line": 23
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
                506,
                545
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "range": [
                            522,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 24
                            },
                            "start": {
                              "column": 11,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getLocation",
                          "optional": false,
                          "range": [
                            528,
                            539
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 24
                            },
                            "start": {
                              "column": 17,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          522,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 24
                          },
                          "start": {
                            "column": 11,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        522,
                        541
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 24
                        },
                        "start": {
                          "column": 11,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      515,
                      541
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 24
                      },
                      "start": {
                        "column": 4,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  509,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 25
                  },
                  "start": {
                    "column": 16,
                    "line": 23
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              }
            },
            "range": [
              495,
              545
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 23
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
              "name": "whereAmI",
              "optional": false,
              "range": [
                548,
                556
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 26
                },
                "start": {
                  "column": 2,
                  "line": 26
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
                556,
                595
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            572,
                            576
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 27
                            },
                            "start": {
                              "column": 11,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getLocation",
                          "optional": false,
                          "range": [
                            577,
                            588
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 27
                            },
                            "start": {
                              "column": 16,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          572,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 27
                          },
                          "start": {
                            "column": 11,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        572,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 27
                        },
                        "start": {
                          "column": 11,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      565,
                      591
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 27
                      },
                      "start": {
                        "column": 4,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  559,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 28
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 26
                }
              }
            },
            "range": [
              548,
              595
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 38,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          411,
          414
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "range": [
              436,
              441
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 19
              },
              "start": {
                "column": 31,
                "line": 19
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithLocation",
          "optional": false,
          "range": [
            423,
            435
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 19
            },
            "start": {
              "column": 18,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          423,
          442
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 19
          },
          "start": {
            "column": 18,
            "line": 19
          }
        }
      },
      "range": [
        405,
        597
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
