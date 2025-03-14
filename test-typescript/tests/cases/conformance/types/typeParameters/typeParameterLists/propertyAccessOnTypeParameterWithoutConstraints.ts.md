__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    519
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          134
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 5,
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
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                18,
                132
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
                                "column": 16,
                                "line": 3
                              },
                              "start": {
                                "column": 13,
                                "line": 3
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
                                    "column": 16,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                38,
                                39
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 3
                                },
                                "start": {
                                  "column": 15,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            35,
                            39
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          35,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      31,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            53,
                            54
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                57,
                                58
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
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "raw": "'toString'",
                              "value": "toString",
                              "range": [
                                59,
                                69
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 4
                                },
                                "start": {
                                  "column": 18,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              57,
                              70
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            57,
                            72
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          53,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      49,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          109,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 5
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              113,
                              114
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 5
                              },
                              "start": {
                                "column": 19,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toString",
                            "optional": false,
                            "range": [
                              115,
                              123
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 5
                              },
                              "start": {
                                "column": 21,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            113,
                            123
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 5
                            },
                            "start": {
                              "column": 19,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          113,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 5
                          },
                          "start": {
                            "column": 19,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        109,
                        125
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      102,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
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
                  21,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 2
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
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              }
            },
            "range": [
              17,
              132
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
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
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
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
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        134
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "name": "r",
            "optional": false,
            "range": [
              140,
              141
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    149,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    150,
                    158
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        151,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "range": [
                  145,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  162,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                }
              },
              "range": [
                144,
                163
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              144,
              165
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            140,
            165
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        136,
        166
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          183,
          198
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                189,
                192
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              },
              "range": [
                192,
                195
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    194,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  194,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              189,
              196
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 15,
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          178,
          179
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 11
          }
        },
        "range": [
          179,
          182
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
                180,
                181
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
              180,
              181
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
          }
        ]
      },
      "range": [
        168,
        198
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                204,
                215
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    207,
                    215
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        208,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    206,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "range": [
                  206,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              203,
              215
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            203,
            215
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        199,
        216
      ],
      "loc": {
        "end": {
          "column": 17,
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
            "name": "r2",
            "optional": false,
            "range": [
              221,
              223
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "range": [
                    226,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    228,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                "range": [
                  226,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "range": [
                  232,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              },
              "range": [
                226,
                240
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              226,
              242
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            221,
            242
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        217,
        243
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "r2b",
            "optional": false,
            "range": [
              248,
              251
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "range": [
                    254,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    256,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  254,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "'toString'",
                "value": "toString",
                "range": [
                  260,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 16
                  },
                  "start": {
                    "column": 16,
                    "line": 16
                  }
                }
              },
              "range": [
                254,
                271
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              254,
              273
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          },
          "range": [
            248,
            273
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        244,
        274
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 20
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                281,
                300
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 19
                        },
                        "start": {
                          "column": 9,
                          "line": 19
                        }
                      },
                      "range": [
                        294,
                        297
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            296,
                            297
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 19
                            },
                            "start": {
                              "column": 11,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          296,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 19
                          },
                          "start": {
                            "column": 11,
                            "line": 19
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
                        }
                      },
                      "range": [
                        289,
                        292
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
                              290,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 19
                              },
                              "start": {
                                "column": 5,
                                "line": 19
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            290,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 19
                            },
                            "start": {
                              "column": 5,
                              "line": 19
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      289,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                  283,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 20
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              280,
              300
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            280,
            300
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        276,
        300
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              },
              "range": [
                307,
                315
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  309,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              305,
              315
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    318,
                    319
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
                "optional": false,
                "range": [
                  318,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "range": [
                  322,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 21
                  },
                  "start": {
                    "column": 21,
                    "line": 21
                  }
                }
              },
              "range": [
                318,
                330
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 21
                },
                "start": {
                  "column": 17,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              318,
              332
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 21
              },
              "start": {
                "column": 17,
                "line": 21
              }
            }
          },
          "range": [
            305,
            332
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        301,
        333
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 7,
                  "line": 22
                }
              },
              "range": [
                341,
                349
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  343,
                  349
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
              }
            },
            "range": [
              338,
              349
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    352,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 18,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "range": [
                  352,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "'toString'",
                "value": "toString",
                "range": [
                  356,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 22,
                    "line": 22
                  }
                }
              },
              "range": [
                352,
                367
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 22
                },
                "start": {
                  "column": 18,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              352,
              369
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          },
          "range": [
            338,
            369
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        334,
        370
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "b",
            "optional": false,
            "range": [
              376,
              377
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    386,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                418,
                                419
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 26
                                },
                                "start": {
                                  "column": 12,
                                  "line": 26
                                }
                              }
                            },
                            "init": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    422,
                                    423
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
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "raw": "'toString'",
                                  "value": "toString",
                                  "range": [
                                    424,
                                    434
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  422,
                                  435
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 26
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                422,
                                437
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 26
                                },
                                "start": {
                                  "column": 16,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              418,
                              437
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 26
                              },
                              "start": {
                                "column": 12,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          414,
                          438
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              474,
                              475
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 27
                              },
                              "start": {
                                "column": 15,
                                "line": 27
                              }
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  478,
                                  479
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 27
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  480,
                                  488
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 27
                                  }
                                }
                              },
                              "range": [
                                478,
                                488
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 27
                                },
                                "start": {
                                  "column": 19,
                                  "line": 27
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              478,
                              490
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 27
                              },
                              "start": {
                                "column": 19,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            474,
                            490
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 27
                            },
                            "start": {
                              "column": 15,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          467,
                          491
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "range": [
                      404,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 28
                      },
                      "start": {
                        "column": 22,
                        "line": 25
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 25
                          },
                          "start": {
                            "column": 14,
                            "line": 25
                          }
                        },
                        "range": [
                          396,
                          399
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              398,
                              399
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 25
                              },
                              "start": {
                                "column": 16,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            398,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 25
                            },
                            "start": {
                              "column": 16,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        395,
                        399
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    },
                    "range": [
                      391,
                      394
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
                            392,
                            393
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 25
                            },
                            "start": {
                              "column": 10,
                              "line": 25
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          392,
                          393
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 25
                          },
                          "start": {
                            "column": 10,
                            "line": 25
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    391,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 28
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "range": [
                  386,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              380,
              499
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            376,
            499
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        372,
        499
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
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
            "name": "r4",
            "optional": false,
            "range": [
              505,
              507
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  516,
                  517
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 31
                  },
                  "start": {
                    "column": 15,
                    "line": 31
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
                "name": "b",
                "optional": false,
                "range": [
                  510,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 31
                  },
                  "start": {
                    "column": 9,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  512,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
                  }
                }
              },
              "range": [
                510,
                515
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              510,
              518
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 31
              },
              "start": {
                "column": 9,
                "line": 31
              }
            }
          },
          "range": [
            505,
            518
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        501,
        519
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 18,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
