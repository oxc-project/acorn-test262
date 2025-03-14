__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    27,
    473
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMap",
        "optional": false,
        "range": [
          32,
          37
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
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                76,
                77
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
              76,
              77
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
            70,
            77
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
            65,
            66
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
                  90,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
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
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                },
                "range": [
                  91,
                  99
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    93,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                90,
                99
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            80,
            105
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 4
            }
          }
        },
        "range": [
          58,
          107
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 31,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          37,
          55
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                48,
                54
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
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
                38,
                39
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
              38,
              54
            ],
            "loc": {
              "end": {
                "column": 27,
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
        27,
        107
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
        "name": "g",
        "optional": false,
        "range": [
          126,
          127
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 28,
                "line": 9
              }
            },
            "range": [
              137,
              140
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 9
                  }
                }
              },
              "range": [
                139,
                140
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            }
          },
          "range": [
            131,
            140
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 9
            },
            "start": {
              "column": 22,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 9
          },
          "start": {
            "column": 32,
            "line": 9
          }
        },
        "range": [
          141,
          147
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            143,
            147
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 9
            },
            "start": {
              "column": 34,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 9
          },
          "start": {
            "column": 18,
            "line": 9
          }
        },
        "range": [
          127,
          130
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
                128,
                129
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              128,
              129
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        109,
        148
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 9
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elemofM",
                  "optional": false,
                  "range": [
                    221,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mymap",
                    "optional": false,
                    "range": [
                      231,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      237,
                      238
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
                    231,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
                    }
                  }
                },
                "range": [
                  221,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              215,
              240
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elemofM",
                  "optional": false,
                  "range": [
                    247,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  245,
                  246
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
              "optional": false,
              "range": [
                245,
                255
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              245,
              256
            ],
            "loc": {
              "end": {
                "column": 15,
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
          209,
          258
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 59,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          159,
          161
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mymap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 11
              },
              "start": {
                "column": 35,
                "line": 11
              }
            },
            "range": [
              185,
              195
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  192,
                  195
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        193,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 11
                        },
                        "start": {
                          "column": 43,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      193,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 11
                      },
                      "start": {
                        "column": 43,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 42,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyMap",
                "optional": false,
                "range": [
                  187,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 11
                  },
                  "start": {
                    "column": 37,
                    "line": 11
                  }
                }
              },
              "range": [
                187,
                195
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 11
                },
                "start": {
                  "column": 37,
                  "line": 11
                }
              }
            }
          },
          "range": [
            180,
            195
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 11
            },
            "start": {
              "column": 30,
              "line": 11
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 11
              },
              "start": {
                "column": 48,
                "line": 11
              }
            },
            "range": [
              198,
              207
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "range": [
                    206,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 11
                    },
                    "start": {
                      "column": 56,
                      "line": 11
                    }
                  }
                },
                "range": [
                  206,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 11
                  },
                  "start": {
                    "column": 56,
                    "line": 11
                  }
                }
              },
              "range": [
                200,
                207
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 11
                },
                "start": {
                  "column": 50,
                  "line": 11
                }
              }
            }
          },
          "range": [
            197,
            207
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 11
            },
            "start": {
              "column": 47,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 11
          }
        },
        "range": [
          161,
          179
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                172,
                178
              ],
              "loc": {
                "end": {
                  "column": 28,
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
              "name": "M",
              "optional": false,
              "range": [
                162,
                163
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
              162,
              178
            ],
            "loc": {
              "end": {
                "column": 28,
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
      "range": [
        150,
        258
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    },
                    "range": [
                      351,
                      370
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
                            "name": "M",
                            "optional": false,
                            "range": [
                              368,
                              369
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 17
                              },
                              "start": {
                                "column": 29,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            368,
                            369
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 17
                            },
                            "start": {
                              "column": 29,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          362,
                          369
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 17
                          },
                          "start": {
                            "column": 23,
                            "line": 17
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            358,
                            361
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "range": [
                                  359,
                                  360
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                359,
                                360
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 17
                                },
                                "start": {
                                  "column": 20,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 17
                            },
                            "start": {
                              "column": 19,
                              "line": 17
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyMap",
                          "optional": false,
                          "range": [
                            353,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          353,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 17
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        353,
                        370
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    349,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    373,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 17
                    },
                    "start": {
                      "column": 34,
                      "line": 17
                    }
                  }
                },
                "range": [
                  349,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              343,
              375
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                  "name": "q2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
                      }
                    },
                    "range": [
                      388,
                      419
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "range": [
                                  405,
                                  406
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                405,
                                406
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 18
                                },
                                "start": {
                                  "column": 29,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              399,
                              406
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 18
                              },
                              "start": {
                                "column": 23,
                                "line": 18
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                395,
                                398
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "M",
                                    "optional": false,
                                    "range": [
                                      396,
                                      397
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
                                  "range": [
                                    396,
                                    397
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
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 18
                                },
                                "start": {
                                  "column": 19,
                                  "line": 18
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyMap",
                              "optional": false,
                              "range": [
                                390,
                                395
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 18
                                },
                                "start": {
                                  "column": 14,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              390,
                              398
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 18
                              },
                              "start": {
                                "column": 14,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            390,
                            407
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
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            410,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
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
                        390,
                        419
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 18
                        },
                        "start": {
                          "column": 14,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    386,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 18
                    },
                    "start": {
                      "column": 10,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    422,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 18
                    },
                    "start": {
                      "column": 46,
                      "line": 18
                    }
                  }
                },
                "range": [
                  386,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              380,
              424
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 18
              },
              "start": {
                "column": 4,
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
                  "name": "q3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 19
                      },
                      "start": {
                        "column": 12,
                        "line": 19
                      }
                    },
                    "range": [
                      437,
                      465
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "range": [
                                  454,
                                  455
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                454,
                                455
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 19
                                },
                                "start": {
                                  "column": 29,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              448,
                              455
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 19
                              },
                              "start": {
                                "column": 23,
                                "line": 19
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                444,
                                447
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "M",
                                    "optional": false,
                                    "range": [
                                      445,
                                      446
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "range": [
                                    445,
                                    446
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 19
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 19
                                },
                                "start": {
                                  "column": 19,
                                  "line": 19
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyMap",
                              "optional": false,
                              "range": [
                                439,
                                444
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 19
                                },
                                "start": {
                                  "column": 14,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              439,
                              447
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 19
                              },
                              "start": {
                                "column": 14,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            439,
                            456
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
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            459,
                            465
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
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
                        439,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    435,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    468,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 19
                    },
                    "start": {
                      "column": 43,
                      "line": 19
                    }
                  }
                },
                "range": [
                  435,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              429,
              470
            ],
            "loc": {
              "end": {
                "column": 45,
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
          337,
          472
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 77,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          269,
          271
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mymap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 16
              },
              "start": {
                "column": 35,
                "line": 16
              }
            },
            "range": [
              295,
              305
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  302,
                  305
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        303,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 16
                        },
                        "start": {
                          "column": 43,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      303,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 16
                      },
                      "start": {
                        "column": 43,
                        "line": 16
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 16
                  },
                  "start": {
                    "column": 42,
                    "line": 16
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyMap",
                "optional": false,
                "range": [
                  297,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 16
                  },
                  "start": {
                    "column": 37,
                    "line": 16
                  }
                }
              },
              "range": [
                297,
                305
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 16
                },
                "start": {
                  "column": 37,
                  "line": 16
                }
              }
            }
          },
          "range": [
            290,
            305
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 16
            },
            "start": {
              "column": 30,
              "line": 16
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 16
              },
              "start": {
                "column": 48,
                "line": 16
              }
            },
            "range": [
              308,
              317
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "range": [
                    316,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 16
                    },
                    "start": {
                      "column": 56,
                      "line": 16
                    }
                  }
                },
                "range": [
                  316,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 16
                  },
                  "start": {
                    "column": 56,
                    "line": 16
                  }
                }
              },
              "range": [
                310,
                317
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 16
                },
                "start": {
                  "column": 50,
                  "line": 16
                }
              }
            }
          },
          "range": [
            307,
            317
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 16
            },
            "start": {
              "column": 47,
              "line": 16
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 16
              },
              "start": {
                "column": 60,
                "line": 16
              }
            },
            "range": [
              320,
              335
            ],
            "typeAnnotation": {
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
                      324,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 16
                      },
                      "start": {
                        "column": 64,
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
                        "column": 73,
                        "line": 16
                      },
                      "start": {
                        "column": 65,
                        "line": 16
                      }
                    },
                    "range": [
                      325,
                      333
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        327,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 16
                        },
                        "start": {
                          "column": 67,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    324,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 16
                    },
                    "start": {
                      "column": 64,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                322,
                335
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 16
                },
                "start": {
                  "column": 62,
                  "line": 16
                }
              }
            }
          },
          "range": [
            319,
            335
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 16
            },
            "start": {
              "column": 59,
              "line": 16
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 16
          },
          "start": {
            "column": 11,
            "line": 16
          }
        },
        "range": [
          271,
          289
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                282,
                288
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 22,
                  "line": 16
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
                272,
                273
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              272,
              288
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        260,
        472
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
