__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    307
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          17,
          46
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "frobble",
              "optional": false,
              "range": [
                23,
                30
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  },
                  "range": [
                    36,
                    39
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        38,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      38,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  31,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              },
              "range": [
                40,
                43
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    42,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                },
                "range": [
                  42,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              23,
              44
            ],
            "loc": {
              "end": {
                "column": 25,
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
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
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
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          16
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
          }
        ]
      },
      "range": [
        0,
        46
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    },
                    "range": [
                      86,
                      94
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          91,
                          94
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
                                92,
                                93
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 6
                                },
                                "start": {
                                  "column": 15,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              92,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 6
                              },
                              "start": {
                                "column": 15,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 14,
                            "line": 6
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          88,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 6
                          },
                          "start": {
                            "column": 11,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        88,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    85,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": null,
                "range": [
                  85,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              81,
              95
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    },
                    "range": [
                      105,
                      113
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          110,
                          113
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
                                111,
                                112
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 7
                                },
                                "start": {
                                  "column": 15,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              111,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 7
                              },
                              "start": {
                                "column": 15,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 7
                          },
                          "start": {
                            "column": 14,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          107,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 7
                          },
                          "start": {
                            "column": 11,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        107,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    104,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": null,
                "range": [
                  104,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              100,
              114
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                "name": "x",
                "optional": false,
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
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
                  123,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              },
              "range": [
                119,
                124
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              119,
              125
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                159,
                160
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              152,
              161
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          75,
          163
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 27,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          57,
          58
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 5
          }
        },
        "range": [
          66,
          74
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              71,
              74
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
                    72,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "range": [
                  72,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
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
                "column": 23,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              68,
              71
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
          },
          "range": [
            68,
            74
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        },
        "range": [
          58,
          64
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
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
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
              "name": "U",
              "optional": false,
              "range": [
                62,
                63
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              62,
              63
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        48,
        163
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
          176,
          307
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                182,
                183
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                183,
                305
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 14
                              },
                              "start": {
                                "column": 13,
                                "line": 14
                              }
                            },
                            "range": [
                              212,
                              220
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  217,
                                  220
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
                                        218,
                                        219
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
                                    "range": [
                                      218,
                                      219
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
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 14
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "range": [
                                  214,
                                  217
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
                                214,
                                220
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 14
                                },
                                "start": {
                                  "column": 15,
                                  "line": 14
                                }
                              }
                            }
                          },
                          "range": [
                            211,
                            220
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          211,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      207,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 15
                              },
                              "start": {
                                "column": 13,
                                "line": 15
                              }
                            },
                            "range": [
                              235,
                              243
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  240,
                                  243
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
                                        241,
                                        242
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      241,
                                      242
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 15
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 15
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "range": [
                                  237,
                                  240
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                237,
                                243
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 15
                                },
                                "start": {
                                  "column": 15,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            234,
                            243
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          234,
                          243
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      230,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          253,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          257,
                          258
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
                      "range": [
                        253,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      253,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        297,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      290,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  197,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 19,
                    "line": 13
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
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                },
                "range": [
                  188,
                  196
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      193,
                      196
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
                            194,
                            195
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 13
                            },
                            "start": {
                              "column": 16,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          194,
                          195
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      190,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 13
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    190,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 5,
                    "line": 13
                  }
                },
                "range": [
                  183,
                  186
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
                        184,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 13
                        },
                        "start": {
                          "column": 6,
                          "line": 13
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      184,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 13
                      },
                      "start": {
                        "column": 6,
                        "line": 13
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              }
            },
            "range": [
              182,
              305
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
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
            "line": 19
          },
          "start": {
            "column": 11,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          171,
          172
        ],
        "loc": {
          "end": {
            "column": 7,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 12
          }
        },
        "range": [
          172,
          175
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
                173,
                174
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              173,
              174
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        165,
        307
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
