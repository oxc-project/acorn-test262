__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    627
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnvFunction",
        "optional": false,
        "range": [
          22,
          33
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
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          },
          "range": [
            42,
            46
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                45,
                46
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            "range": [
              45,
              46
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          },
          "range": [
            36,
            39
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
                  37,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          36,
          46
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "range": [
        17,
        47
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "name": "SimpleType",
        "optional": false,
        "range": [
          54,
          64
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              67,
              73
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                83,
                95
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SimpleType",
                    "optional": false,
                    "range": [
                      84,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 35,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    84,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 35,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                76,
                83
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            },
            "range": [
              76,
              95
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            }
          }
        ],
        "range": [
          67,
          95
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 5
          }
        }
      },
      "range": [
        49,
        96
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "simple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              },
              "range": [
                118,
                130
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SimpleType",
                  "optional": false,
                  "range": [
                    120,
                    130
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
                  120,
                  130
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
              }
            },
            "range": [
              112,
              130
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            112,
            130
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        98,
        131
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 7
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
            "name": "env",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              },
              "range": [
                142,
                155
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EnvFunction",
                  "optional": false,
                  "range": [
                    144,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "range": [
                  144,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              139,
              155
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "simple",
              "optional": false,
              "range": [
                164,
                170
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 31,
                  "line": 9
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              158,
              170
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 25,
                "line": 9
              }
            }
          },
          "range": [
            139,
            170
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        133,
        171
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
          195,
          197
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                200,
                201
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            },
            "range": [
              200,
              201
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 10,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                211,
                215
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      212,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 22,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    212,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 22,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                204,
                211
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "range": [
              204,
              215
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "range": [
                  218,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 28,
                    "line": 13
                  }
                }
              },
              "range": [
                218,
                220
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 28,
                  "line": 13
                }
              }
            },
            "range": [
              218,
              222
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 13
              },
              "start": {
                "column": 28,
                "line": 13
              }
            }
          }
        ],
        "range": [
          200,
          222
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        190,
        223
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        225,
        302
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": true,
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
                    "name": "awaited",
                    "optional": false,
                    "range": [
                      279,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        295,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 24,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      289,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 18,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    279,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                273,
                300
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 2,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            269,
            302
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 44,
              "line": 15
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "range": [
            247,
            257
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 15
            },
            "start": {
              "column": 22,
              "line": 15
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 15
                },
                "start": {
                  "column": 38,
                  "line": 15
                }
              },
              "range": [
                263,
                267
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "range": [
                    265,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 15
                    },
                    "start": {
                      "column": 40,
                      "line": 15
                    }
                  }
                },
                "range": [
                  265,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 15
                  },
                  "start": {
                    "column": 40,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              258,
              267
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 15
              },
              "start": {
                "column": 33,
                "line": 15
              }
            }
          }
        ],
        "range": [
          232,
          302
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
        "name": "EffectResult",
        "optional": false,
        "range": [
          326,
          338
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              },
              "range": [
                349,
                364
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EffectResult",
                  "optional": false,
                  "range": [
                    352,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 22
                    }
                  }
                },
                "range": [
                  352,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 11,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              346,
              364
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 22
              },
              "start": {
                "column": 5,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                377,
                391
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EffectResult",
                    "optional": false,
                    "range": [
                      378,
                      390
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    378,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 23
                    },
                    "start": {
                      "column": 12,
                      "line": 23
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                370,
                377
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              370,
              391
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          343,
          391
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 23
          },
          "start": {
            "column": 2,
            "line": 22
          }
        }
      },
      "range": [
        321,
        392
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        394,
        626
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": true,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "alternate": {
                "type": "IfStatement",
                "alternate": null,
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "range": [
                                  612,
                                  618
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 29
                                  }
                                }
                              },
                              "range": [
                                606,
                                618
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 29
                                },
                                "start": {
                                  "column": 29,
                                  "line": 29
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "handleEffectResult",
                            "optional": false,
                            "range": [
                              587,
                              605
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 29
                              },
                              "start": {
                                "column": 10,
                                "line": 29
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            587,
                            619
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 29
                            },
                            "start": {
                              "column": 10,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          581,
                          619
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 29
                          },
                          "start": {
                            "column": 4,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        581,
                        620
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
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
                    575,
                    624
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 30
                    },
                    "start": {
                      "column": 40,
                      "line": 28
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "instanceof",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "range": [
                      548,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 13,
                        "line": 28
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      566,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 28
                      },
                      "start": {
                        "column": 31,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    548,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                },
                "range": [
                  544,
                  624
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 30
                  },
                  "start": {
                    "column": 9,
                    "line": 28
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "range": [
                                524,
                                530
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 27
                                },
                                "start": {
                                  "column": 29,
                                  "line": 27
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              524,
                              532
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 27
                              },
                              "start": {
                                "column": 29,
                                "line": 27
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "handleEffectResult",
                          "optional": false,
                          "range": [
                            505,
                            523
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 27
                            },
                            "start": {
                              "column": 10,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          505,
                          533
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 27
                          },
                          "start": {
                            "column": 10,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        499,
                        533
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 27
                        },
                        "start": {
                          "column": 4,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      499,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
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
                  493,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 28
                  },
                  "start": {
                    "column": 34,
                    "line": 26
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "range": [
                    465,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 26
                    },
                    "start": {
                      "column": 6,
                      "line": 26
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    483,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 26
                    },
                    "start": {
                      "column": 24,
                      "line": 26
                    }
                  }
                },
                "range": [
                  465,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 26
                  },
                  "start": {
                    "column": 6,
                    "line": 26
                  }
                }
              },
              "range": [
                461,
                624
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 30
                },
                "start": {
                  "column": 2,
                  "line": 26
                }
              }
            }
          ],
          "range": [
            457,
            626
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 31
            },
            "start": {
              "column": 63,
              "line": 25
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "handleEffectResult",
          "optional": false,
          "range": [
            416,
            434
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 25
            },
            "start": {
              "column": 22,
              "line": 25
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 25
                },
                "start": {
                  "column": 47,
                  "line": 25
                }
              },
              "range": [
                441,
                455
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EffectResult",
                  "optional": false,
                  "range": [
                    443,
                    455
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 25
                    },
                    "start": {
                      "column": 49,
                      "line": 25
                    }
                  }
                },
                "range": [
                  443,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 25
                  },
                  "start": {
                    "column": 49,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              435,
              455
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 25
              },
              "start": {
                "column": 41,
                "line": 25
              }
            }
          }
        ],
        "range": [
          401,
          626
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
