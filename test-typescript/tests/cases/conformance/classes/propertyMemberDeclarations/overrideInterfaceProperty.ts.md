__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    389
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          20,
          50
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "range": [
                35,
                39
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              },
              "range": [
                39,
                47
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              26,
              48
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          19
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
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
            "out": false,
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          76,
          217
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              },
              "range": [
                87,
                102
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    92,
                    102
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        93,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        98,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                  "name": "Mup",
                  "optional": false,
                  "range": [
                    89,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "range": [
                  89,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 24,
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
              82,
              103
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  },
                  "range": [
                    126,
                    163
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "readonly",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeOperator",
                            "operator": "readonly",
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "range": [
                                      148,
                                      149
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    148,
                                    149
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 6
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "range": [
                                      151,
                                      152
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    151,
                                    152
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "range": [
                                147,
                                153
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 6
                                },
                                "start": {
                                  "column": 43,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              138,
                              153
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 6
                              },
                              "start": {
                                "column": 34,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            137,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 6
                            },
                            "start": {
                              "column": 33,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          128,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 6
                          },
                          "start": {
                            "column": 24,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          159,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 6
                          },
                          "start": {
                            "column": 55,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      128,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  118,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 71,
                  "line": 6
                },
                "start": {
                  "column": 60,
                  "line": 6
                }
              },
              "range": [
                164,
                175
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    169,
                    175
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          170,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 6
                          },
                          "start": {
                            "column": 66,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        170,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 6
                        },
                        "start": {
                          "column": 66,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          173,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 6
                          },
                          "start": {
                            "column": 69,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        173,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 6
                        },
                        "start": {
                          "column": 69,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 6
                    },
                    "start": {
                      "column": 65,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mup",
                  "optional": false,
                  "range": [
                    166,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 6
                    },
                    "start": {
                      "column": 62,
                      "line": 6
                    }
                  }
                },
                "range": [
                  166,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 6
                  },
                  "start": {
                    "column": 62,
                    "line": 6
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              },
              "range": [
                111,
                117
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      112,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    112,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      115,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    115,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              108,
              176
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "range": [
                190,
                199
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              },
              "range": [
                199,
                214
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    204,
                    214
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        205,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 7
                        },
                        "start": {
                          "column": 28,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        210,
                        213
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
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
                      "column": 37,
                      "line": 7
                    },
                    "start": {
                      "column": 27,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mup",
                  "optional": false,
                  "range": [
                    201,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 24,
                      "line": 7
                    }
                  }
                },
                "range": [
                  201,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              181,
              215
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 25,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MupConstructor",
        "optional": false,
        "range": [
          61,
          75
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        51,
        217
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "Mup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              },
              "range": [
                233,
                249
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MupConstructor",
                  "optional": false,
                  "range": [
                    235,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 9
                    },
                    "start": {
                      "column": 17,
                      "line": 9
                    }
                  }
                },
                "range": [
                  235,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              230,
              249
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            230,
            249
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        218,
        250
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          275,
          345
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "range": [
                324,
                328
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                328,
                343
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        340,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 13
                        },
                        "start": {
                          "column": 24,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      333,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 17,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  331,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
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
                  "column": 27,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "range": [
              320,
              343
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
            "column": 23,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sizz",
        "optional": false,
        "range": [
          258,
          262
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "range": [
          271,
          274
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 11
          },
          "start": {
            "column": 19,
            "line": 11
          }
        }
      },
      "range": [
        252,
        345
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          371,
          388
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "range": [
                377,
                381
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  385,
                  386
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
              "operator": "-",
              "prefix": true,
              "range": [
                384,
                386
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              377,
              386
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
            "column": 25,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kasizz",
        "optional": false,
        "range": [
          352,
          358
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "range": [
          367,
          370
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 15
          },
          "start": {
            "column": 21,
            "line": 15
          }
        }
      },
      "range": [
        346,
        388
      ],
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
