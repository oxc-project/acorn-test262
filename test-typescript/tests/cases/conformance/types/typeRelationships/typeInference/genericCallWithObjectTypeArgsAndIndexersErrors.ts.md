__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    68,
    521
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                103,
                104
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              96,
              105
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          90,
          107
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          77,
          80
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              85,
              88
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  87,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                87,
                88
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          },
          "range": [
            84,
            88
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          80,
          83
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
                81,
                82
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              81,
              82
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        68,
        107
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    },
                    "range": [
                      146,
                      272
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 9
                                  }
                                },
                                "range": [
                                  160,
                                  168
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    162,
                                    168
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 9
                                    }
                                  }
                                }
                              },
                              "range": [
                                159,
                                168
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 9
                                },
                                "start": {
                                  "column": 9,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            },
                            "range": [
                              169,
                              177
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "range": [
                                  171,
                                  177
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                171,
                                177
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 9
                                },
                                "start": {
                                  "column": 21,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            158,
                            178
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 10
                                  }
                                },
                                "range": [
                                  189,
                                  197
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    191,
                                    197
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 10
                                    }
                                  }
                                }
                              },
                              "range": [
                                188,
                                197
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 10
                                },
                                "start": {
                                  "column": 9,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 10
                              },
                              "start": {
                                "column": 19,
                                "line": 10
                              }
                            },
                            "range": [
                              198,
                              201
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  200,
                                  201
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                200,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 10
                                },
                                "start": {
                                  "column": 21,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            187,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        148,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 11
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    145,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": null,
                "range": [
                  145,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              141,
              273
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 8
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
                    282,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        291,
                        292
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
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      287,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    287,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                "range": [
                  282,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              278,
              294
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          135,
          301
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 26,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "range": [
          118,
          123
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            },
            "range": [
              130,
              133
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  132,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              "range": [
                132,
                133
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            }
          },
          "range": [
            127,
            133
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 7
            },
            "start": {
              "column": 18,
              "line": 7
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 14,
            "line": 7
          }
        },
        "range": [
          123,
          126
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
                124,
                125
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
            "out": false,
            "range": [
              124,
              125
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
        ]
      },
      "range": [
        109,
        301
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    },
                    "range": [
                      367,
                      429
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 17
                                  }
                                },
                                "range": [
                                  381,
                                  389
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    383,
                                    389
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 17
                                    }
                                  }
                                }
                              },
                              "range": [
                                380,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 17
                                },
                                "start": {
                                  "column": 9,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 17
                              },
                              "start": {
                                "column": 19,
                                "line": 17
                              }
                            },
                            "range": [
                              390,
                              398
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "range": [
                                  392,
                                  398
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                392,
                                398
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 17
                                },
                                "start": {
                                  "column": 21,
                                  "line": 17
                                }
                              }
                            }
                          },
                          "range": [
                            379,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 18
                                  }
                                },
                                "range": [
                                  410,
                                  418
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    412,
                                    418
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 18
                                    }
                                  }
                                }
                              },
                              "range": [
                                409,
                                418
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 18
                                },
                                "start": {
                                  "column": 9,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 18
                              },
                              "start": {
                                "column": 19,
                                "line": 18
                              }
                            },
                            "range": [
                              419,
                              422
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  421,
                                  422
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                421,
                                422
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 18
                                },
                                "start": {
                                  "column": 21,
                                  "line": 18
                                }
                              }
                            }
                          },
                          "range": [
                            408,
                            423
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 18
                            },
                            "start": {
                              "column": 8,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        369,
                        429
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 19
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    366,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": null,
                "range": [
                  366,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              362,
              430
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 19
              },
              "start": {
                "column": 4,
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
                  "name": "r2",
                  "optional": false,
                  "range": [
                    439,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        448,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 20
                        },
                        "start": {
                          "column": 17,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      444,
                      447
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    444,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                },
                "range": [
                  439,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              435,
              451
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                  "name": "d",
                  "optional": false,
                  "range": [
                    460,
                    461
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "range": [
                      464,
                      466
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 21
                      },
                      "start": {
                        "column": 12,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      467,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    464,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                },
                "range": [
                  460,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              456,
              470
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 4,
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
                  "name": "e",
                  "optional": false,
                  "range": [
                    479,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "range": [
                      483,
                      485
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
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      486,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 22
                      },
                      "start": {
                        "column": 15,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    483,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  479,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              475,
              491
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 4,
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
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    },
                    "range": [
                      501,
                      504
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          503,
                          504
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 23
                          },
                          "start": {
                            "column": 11,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        503,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    500,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "range": [
                      507,
                      509
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      510,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 18,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    507,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                },
                "range": [
                  500,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              496,
              513
            ],
            "loc": {
              "end": {
                "column": 21,
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
          356,
          521
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 53,
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
        "name": "other3",
        "optional": false,
        "range": [
          312,
          318
        ],
        "loc": {
          "end": {
            "column": 15,
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
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 15
              },
              "start": {
                "column": 48,
                "line": 15
              }
            },
            "range": [
              351,
              354
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  353,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 15
                  },
                  "start": {
                    "column": 50,
                    "line": 15
                  }
                }
              },
              "range": [
                353,
                354
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 15
                },
                "start": {
                  "column": 50,
                  "line": 15
                }
              }
            }
          },
          "range": [
            348,
            354
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 15
            },
            "start": {
              "column": 45,
              "line": 15
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 15
          }
        },
        "range": [
          318,
          347
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  329,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 15
                  },
                  "start": {
                    "column": 26,
                    "line": 15
                  }
                }
              },
              "range": [
                329,
                330
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 15
                },
                "start": {
                  "column": 26,
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
                319,
                320
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              319,
              330
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 16,
                "line": 15
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  342,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 15
                  },
                  "start": {
                    "column": 39,
                    "line": 15
                  }
                }
              },
              "range": [
                342,
                346
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 15
                },
                "start": {
                  "column": 39,
                  "line": 15
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
                332,
                333
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 29,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              332,
              346
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 15
              },
              "start": {
                "column": 29,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        303,
        521
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
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
      "column": 1,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
